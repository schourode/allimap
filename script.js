jQuery(function ($) {
	// DOM objects
	var $map = $('#map'),
		$ctrl = $('#ctrl'),
		$play = $('<div class=play>').appendTo($ctrl),
		$progress = $('<div class=progress>').appendTo($ctrl),
		$progressBar = $('<div class=bar>').appendTo($progress),
		markers = [];

	for (var i = 0; i < Runners.length; i++) {
		var runner = Runners[i];
		
		markers[i] = $('<div class=marker>')
			.css('background-color', runner.color)
			.attr('title', runner.name)
			.appendTo($map);
	}

	$(document).bind('mousewheel', function (e) {
		$map.width($map.width() + e.originalEvent.wheelDeltaY);
		e.preventDefault();
	});

	$progress.click(function (e) {
		advance(e.offsetX / $progress.width());
	});

	$play.click(function () {
		if (interval) pause(); else play();
	});

	// Playback.
	var fps = 20,
		speed = .1,
		currentLocation = 0,
		interval;

	function tick() {
		advance(currentLocation + speed / fps);
	}

	function advance(location) {
		currentLocation = Math.max(Math.min(location, 1), 0);
		$progressBar.width($progress.width() * currentLocation);

		if (currentLocation == 1) {
			pause();
		}
	}

	function play() {
		if (!interval) {
			interval = setInterval(tick, 1000 / fps);
		}
	}

	function pause() {
		if (interval) {
			clearInterval(interval);
			interval = null;
		}
	}

	play();
});