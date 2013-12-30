//	Animations, Joe Mottershaw (hellojd)
//	https://github.com/hellojd/animations
//	==================================================

//	#Global
//	==================================================


	$(document).ready(function() {
		$('html').removeClass('no-js').addClass('js');

		$('.animate').each(function(i, element) {
			var	element = $(element),
				delay = $(this).attr('data-anim-delay');

			if (element.visible(true)) {
				setTimeout(function() {
					element.addClass('initiate');
				}, delay);
			} 
		});
	});

	$(window).scroll(function(e) {
		$('.animate').each(function(i, element) {
			var element = $(element),
				delay = $(this).attr('data-anim-delay');

			if (element.visible(true)) {
				setTimeout(function() {
					element.addClass('initiate');
				}, delay);
			} 
		});

		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			$('.animate').each(function(i, element) {
				var element = $(element),
					delay = $(this).attr('data-anim-delay');

				if (element.visible(true)) {
					setTimeout(function() {
						element.addClass('initiate');
					}, delay);
				} 
			});
		}
	});