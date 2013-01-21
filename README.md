jQuery center object
===============================

Description
-----------
CenterObject is a jQuery plugin that centers a object in web page.
There are several options for setting such as parent object, keep centering object when resize window, scrolling window, and resizing content.

Required jQuery 1.4.2 or higher.

Options
-------

  parent: "" //value is identity object in jquery notation. Can be id (#) or class (.) or other selection in jquery as a parent object.
			default => window.
	resize: true or false //keep center when parent is resized
			default => true
	scroll: true or false //keep center when parent is scrolled
			default => true
	contentResize: true or false //keep center when centered object is resized
			default => true

Usage
-----

	$('#objectToCenter').center();
	
	$('.objectToCenter').center({parent: "#container"});
	
	$('#objectToCenter').center({
		parent: "#container",
		resize: false
	});
