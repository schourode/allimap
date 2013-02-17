jQuery(function ($) {
	// DOM objects
	var $html = $(document),
		$map = $('#map'),
		$ctrl = $('#ctrl'),
		$play = $('<div class=play>').appendTo($ctrl),
		$clock = $('<div class=clock>').appendTo($ctrl),
		$progress = $('<div class=progress>').appendTo($ctrl),
		$progressBar = $('<div class=bar>').appendTo($progress),
		mapDrag = false,
		markers = [];

	for (var i = Runners.length - 1; i >= 0; --i) {
		var runner = Runners[i];
		
		markers[i] = $('<div class=marker>')
			.text(runner.name)
			.appendTo($map);
	}

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
		$map.width($map.width() * factor);
		e.preventDefault();
	});

	$progress.click(function (e) {
		jump(e.offsetX / $progress.width());
	});

	$play.click(function () {
		togglePlayPause();
	});

	// Playback.
	var fps = 30,
		speed = 1000,
		currentLocation = 0,
		duration = (Event.end.getTime() - Event.start.getTime()) / 1000,
		interval;

	function paint() {
		$clock.text(new Date(Event.start.getTime() + currentLocation * 1000).toString().substr(16,5));
		$progressBar.width($progress.width() * currentLocation / duration);

		if (currentLocation >= duration) {
			pause();
		}
		else {
			for (var i = Runners.length - 1; i >= 0; --i) {
				var track = Runners[i].track,
					location = Controls[0],
					enrouteSince = 0;

				for (var j = 0; j < track.length; j++) {
					var seen = track[j][0],
						at = Controls[track[j][1]];
					
					if (seen >= currentLocation) {
						var covered = (currentLocation - enrouteSince) / (seen - enrouteSince);
						location = {
							x: location.x + covered * (at.x - location.x),
							y: location.y + covered * (at.y - location.y)
						};
						break;
					}

					location = at;
					enrouteSince = seen;
				}

				markers[i].css({ left: location.x + '%', top: location.y + '%' });
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
});