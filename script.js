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
		$sky = $('<div class=sky>').appendTo($map),
		mapDrag = false,
		markers = [];

	/*$map.click(function (e) {
		console.log('{ x:' + (100 * e.clientX / $map.width()) +
					', y:' + (100 * e.clientY / $map.height()) + '},');
	});*/

	for (var i = 0; i < Runners.length; i++) {
		var runner = Runners[i];

		markers[i] = $('<div class=marker>')
			.text(runner.name)
			.appendTo($map);

		$('<input type=checkbox checked>')
			.data('id', i)
			.bind('change', function () {
				var $input = $(this),
					id = $input.data('id'),
					checked = $input.is(':checked'),
					runner = Runners[id];

				trackEvent('Runners', checked ? 'Show' : 'Hide', runner.name);
				markers[id].toggle(checked);
				
				$runnersBtn.text($(':checked', $runners).size() + ' sjak');
			})
			.appendTo($runners)
			.wrap('<label>')
			.after(document.createTextNode(runner.name));
	}

	$('.all', $runners).click(function () {
		trackEvent('Runners', 'Show', 'All');
		$(':checkbox', $runners).prop('checked', true);
		$('.marker', $map).show();
		$runnersBtn.text('Alle');
	});

	$('.none', $runners).click(function () {
		trackEvent('Runners', 'Hide', 'All');
		$(':checkbox', $runners).prop('checked', false);
		$('.marker', $map).hide();
		$runnersBtn.text('Ingen');
	});

	$html.keydown(function (e) {
		if (e.which === 32) {
			trackEvent('Controls', 'Play/pause');
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
		trackEvent('Controls', 'Jump');
		jump(e.offsetX / $progress.width());
	});

	$play.click(function () {
		trackEvent('Controls', 'Play/pause');
		togglePlayPause();
	});

	$runnersBtn.click(function () {
		$runners.toggle();
	})

	// Playback.
	var fps = 20,
		speed = 1000,
		currentLocation = 0,
		duration = (Event.end.getTime() - Event.start.getTime()) / 1000,
        twilight = 2*60*60*1000,
		playbackStarted,
		cache = [],
		interval;

	function paint() {
		var time = new Date(Event.start.getTime() + currentLocation * 1000);
		$clock.text(('0' + time.getHours()).slice(-2) + ':' + ('0' + time.getMinutes()).slice(-2));
		$progressBar.width(Math.round($progress.width() * currentLocation / duration));
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

				for (var j = cache[i] || 0; j < track.length; j++) {
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

					cache[i] = j;
				}

				markers[i].css({
					'left': location.x + '%',
					'top': location.y + '%',
					'background-color': 'hsl('
						+ Math.floor(256 - score / Event.maxScore * 256)
						+ ',80%,40%)',
					'z-index': Math.round(score)
				});
			}

			var sun = (time < Event.sunset || time > Event.sunrise) ? 0 :
                Math.min(time.getTime() - Event.sunset.getTime(), Event.sunrise.getTime() - time.getTime(), twilight) / twilight;

			$sky.css('opacity', sun * .3);
		}
	}

	function play() {
		if (!interval && currentLocation < duration) {
			playbackStarted = new Date();
			interval = setInterval(function () {
				currentLocation += speed / fps;
				paint();
			}, 1000 / fps);
		}
	}

	function pause() {
		if (interval) {
			var secondsElapsed = Math.round((new Date() - playbackStarted) / 1000);
			trackEvent('Playback', 'Duration', null, secondsElapsed);
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
		cache = [];
		paint();
	}

	function trackEvent(category, action, label, value) {
		if (typeof _gaq != 'undefined') {
			_gaq.push(['_trackEvent', category, action, label, value]);
		}
	}

	paint();

	$speedUp.click(function () {
		trackEvent('Controls', 'Speed up');
		speed *= 2;
	})

	$speedDown.click(function () {
		trackEvent('Controls', 'Speed down');
		speed /= 2;
	})
});