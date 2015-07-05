/**
  @license html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
 */
/*
 * jQuery helper plugin for examples and tests
 */
$.fn.html2canvas = function (options)
{
	if (options && options.profile && window.console && window.console.profile)
	{
		console.profile();
	}

	var date = new Date(),
	html2obj;
	options = options || {};

	options.onrendered = options.onrendered || function( canvasio )
	{
		var $canvasio = $(canvasio);

		try 
		{
			options.callback($canvasio[0].toDataURL());
		}
		catch (e)
		{
			if ($canvasio[0].nodeName.toLowerCase() === "canvas")
			{
				alert("Canvas is tainted, unable to read data");
			}
		}
	};

	html2obj = html2canvas(this, options);
};

