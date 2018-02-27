(function($) {
	$.fn.Accordion = function(options) {
		// Set up the options
		var o = $.extend({
			singleOption: true, // 'true' for only allowing one option open at once
			slideSpeed: 300 // the speed in milliseconds at which IE will animate
		}, options);
		
		// Multiple accordions supported
		$(this).each(function() {
			var $this = $(this);
			
			$this.children('.section').each(function() {
				// Store some variables
				var $section = $(this);
				var contentHeight = $section.find('.content').height();
				
				// Set the base heights
				if (!$section.hasClass('first')) {
					$section.find('.content').height(0);
				} else {
					$section.find('.content').height(contentHeight);
				}
				
				// Bind a click event to the trigger
				$section.find('.trigger').click(function(event) {
					// Determine if the content area is already visible
					var visible = ($(this).siblings('.content').height() > 0);
					var $content = $(this).siblings('.content');
					
					// If only one can be open at a time, close the rest
					if (o.singleOption) {
						if (!visible) {
							$this.children('.section').removeClass('active');
							
							if ($.browser.msie) {
								$this.find('.content').stop(true, true).animate({ height: 0 }, o.slideSpeed);
							} else {
								$this.find('.content').height(0);
							}
						}
					}
					
					// If it's visible, hide it
					if (visible) {
						if ($.browser.msie) {
							$content.stop(true, true).animate({ height: 0 }, o.slideSpeed);
						} else {
							$content.height(0);
						}
					} else {
						// Otherwise, show it
						if ($.browser.msie) {
							$content.stop(true, true).animate({ height: contentHeight }, o.slideSpeed);
						} else {
							$content.height(contentHeight);
						}
					}
					
					$section.toggleClass('active');
				});	
			});
		});
	}
})(jQuery);
$(document).ready(function(){

	// FAQ Accordion
	$('.accordion').Accordion({
		slideSpeed: 300,
		singleOption: false 
	});
});