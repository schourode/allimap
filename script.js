jQuery(function ($) {
	var $map = $('#map'),
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
});