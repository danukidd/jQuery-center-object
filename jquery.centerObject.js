/*!
 * jQuery center object Plugin v1.0.0 
 * Centers a object in web page.
 * Copyright (c) 2012-2013, Danuk Cahya
 * Licensed under the MIT license.
 */

(function($) {

  $.fn.centerObject = function(options) {
	
		var $this = this;
		
		$.fn.centerObject.defaults = {
			parent: window,
			resize: true,
			contentResize: true,
			scroll: true
		};
		
		options = $.extend($.fn.centerObject.defaults, options);
		
		if (options.resize){
			$(options.parent).bind("resize", function(){  
				$this.each(function() {
					setCss($(this));
				});
			});
		}
		
		if (options.scroll){
			$(options.parent).bind("scroll", function(){
				$this.each(function() {
					setCss($(this));
				});
			});
		}
		
		if (options.contentResize){
			var oldWidth = [], oldHeight = [], newWidth = [], newHeight = [];
			$this.each(function(index, elem) {
				oldWidth[index] = $(elem).width(),
				oldHeight[index] = $(elem).height();
				var contentResize = setInterval(function(){
						newWidth[index] = $(elem).width();
						newHeight[index] = $(elem).height();
						if (newWidth[index] != oldWidth[index]){
							oldWidth[index] = newWidth[index];
							setCss($(elem));
						}
						if (newHeight[index] != oldHeight[index]){
							oldHeight[index] = newHeight[index];
							setCss($(elem));
						}
					},300);
			});
		}
		
		var setCss = function(obj) {
			var left = ($(options.parent).outerWidth(true) - obj.outerWidth(true))/2;
			if (left > 0)
				left += $(options.parent).scrollLeft();
			else if (left < 0)
				left = 5;
					
			obj.css({  
				"position" : "absolute",  
				"left" : left
			});
			
			left = ($(options.parent).outerWidth(true) - obj.outerWidth(true))/2;
			if (left > 0)
				left += $(options.parent).scrollLeft();
			else if (left < 0)
				left = 5;
			
			var height = ($(options.parent).outerHeight(true) - obj.outerHeight(true))/2;
			if (height > 0)
				height += $(options.parent).scrollTop();
			else if (height < 0)
				height = 5;
			
			obj.css({   
				"left" : left,  
				"top" : height,
				"z-index" : 5
			});
		
			$(options.parent).css("position", "relative");
			
			if (options.parent != window)
				obj.appendTo($(options.parent)); 
		};
		
		return $this.each(function() {	
			setCss($(this));
		});
		
	} 
	
})(jQuery);
