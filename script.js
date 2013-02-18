jQuery(function ($) {
	// DOM objects
	var $html = $(document),
		$map = $('#map'),
		$ctrl = $('#ctrl'),
		$runners = $('#runners'),
		$runnersBtn = $('<div class="button runners">').text('Alle').appendTo($ctrl),
		$play = $('<div class=button>').attr('title', 'Play/pause').appendTo($ctrl),
		$clock = $('<div class=clock>').appendTo($ctrl),
		$speedUp = $('<div class=button>').text('+').attr('title', 'Increase speed').appendTo($ctrl),
		$speedDown = $('<div class=button>').text('-').attr('title', 'Decrease speed').appendTo($ctrl),
		$progress = $('<div class=progress>').appendTo($ctrl),
		$progressBar = $('<div class=bar>').appendTo($progress),
		mapDrag = false,
		markers = [];

	for (var i = 0; i < Runners.length; i++) {
		var runner = Runners[i];

		markers[i] = $('<div class=marker>')
			.text(runner.name)
			.prependTo($map);

		$('<input type=checkbox checked>')
			.data('id', i)
			.bind('change', function () {
				markers[$(this).data('id')].toggle($(this).is(':checked'));
				var checkCount = $('input:checked', $runners).size();
				$runnersBtn.text(checkCount === Runners.length ? 'Alle' : checkCount === 0 ? 'Ingen' : checkCount + ' sjak');
			})
			.appendTo($runners)
			.wrap('<label>')
			.after(document.createTextNode(runner.name));
	}

	$('.all', $runners).click(function () {
		$('input:not(:checked)', $runners).click();
	});

	$('.none', $runners).click(function () {
		$('input:checked', $runners).click();
	});

	$html.keydown(function (e) {
		if (e.which === 32) {
			togglePlayPause();
			e.preventDefault();
		}
	}).mousedown(function (e) {
		function move(e) {
			$html.scrollLeft($html.scrollLeft() - event.clientX + e.data.x);
			$html.scrollTop($html.scrollTop() - event.clientY + e.data.y);
			
			e.data.x = e.clientX;
			e.data.y = e.clientY;
		}

		function up() {
			$.event.remove(document, 'mousemove', move);
			$.event.remove(document, 'mouseup', up);
		}
		
		$.event.add(document, 'mousemove', move, { x: e.clientX, y: e.clientY });
		$.event.add(document, 'mouseup', up);

		e.preventDefault();
	}).bind('mousewheel', function (e) {
		var factor = 1 + e.originalEvent.wheelDeltaY / 5000;
		$map.width(Math.max($map.width() * factor, $(window).width()));
		e.preventDefault();
	});

	$progress.click(function (e) {
		jump(e.offsetX / $progress.width());
	});

	$play.click(function () {
		togglePlayPause();
	});

	$runnersBtn.click(function () {
		$runners.toggle();
	})

	// Playback.
	var fps = 30,
		speed = 1000,
		currentLocation = 0,
		duration = (Event.end.getTime() - Event.start.getTime()) / 1000,
		interval;

	function paint() {
		$clock.text(new Date(Event.start.getTime() + currentLocation * 1000).toString().substr(16,5));
		$progressBar.width($progress.width() * currentLocation / duration);
		$play.text(interval ? '||' : '▶');

		if (currentLocation >= duration) {
			pause();
		}
		else {
			for (var i = 0; i < Runners.length; i++) {
				var track = Runners[i].track,
					location = Controls[0],
					enrouteSince = 0,
					score = 0;

				for (var j = 0; j < track.length; j++) {
					var point = track[j],
						seen = point[0],
						at = Controls[point[1]],
						newScore = point[2];

					if (seen >= currentLocation) {
						var covered = (currentLocation - enrouteSince) / (seen - enrouteSince);
						if (at !== location) {
							location = {
								x: location.x + covered * (at.x - location.x),
								y: location.y + covered * (at.y - location.y)
							};
						}
						score = score + covered * (newScore - score);
						break;
					}

					location = at;
					enrouteSince = seen;
					score = newScore;
				}

				markers[i].css({
					'left': location.x + '%',
					'top': location.y + '%',
					'background-color': 'hsl('
						+ Math.floor(score / Event.maxScore * 256)
						+ ',80%,40%)'
				});
			}
		}
	}

	function play() {
		if (!interval) {
			interval = setInterval(function () {
				currentLocation += speed / fps;
				paint();
			}, 1000 / fps);
		}
	}

	function pause() {
		if (interval) {
			clearInterval(interval);
			interval = null;
			paint();
		}
	}

	function togglePlayPause() {
		if (interval) pause(); else play();
	}

	function jump(decimal) {
		currentLocation = decimal * duration;
		paint();
	}

	paint();

	$speedUp.click(function () {
		speed *= 2;
	})

	$speedDown.click(function () {
		speed /= 2;
	})
});