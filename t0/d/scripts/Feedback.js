/**
 * Feedback v1.0
 *
 * Copyright (C) 2014 Erwin Bujak
 * http://lab.erwinbujak.eu/Feedback/
 */
	var Feedback = {
		config: {},
		configDefault: {
			multiSelectCategory: false,
			category: []
		},
		data: {},
		tool: "select",
		tools: ['select', 'blackout', 'rubber'],
		_printscreen: false,
		_screenshotWidth: false,
		button: function (o, cfg) {

			if (typeof(o) == 'object')
			{
				$('body').remove('#FeedbackButtonInit');
				$('body').append('<a href="" title="'+(!o.title ? FeedbackLanguage.buttonInit.title : o.title)+'" id="FeedbackButtonInit" class="'+(!o.position ? 'FeedbackButtonBottomRight' : 'FeedbackButton'+o.position)+'"><span>'+(!o.name ? FeedbackLanguage.buttonInit.name : o.name)+'</span></a>');
				$('#FeedbackButtonInit').click(function () {
					Feedback.init(cfg);
					return false;
				});
			}
			else
			{
				$(o).click(function () {
					Feedback.init(cfg);
					return false;
				});
			}
		},
		category: function (el) {

			var obj = $(el);

			if (this.config.multiSelectCategory == false)
			{
				$('.Feedback .Category a').each(function () {
					$(this).removeClass('selected');
					Feedback.config.category[$(this).attr('rel')].selected = false;
				});
			}

			if (!obj.hasClass('selected'))
			{
				obj.addClass('selected');
				this.config.category[obj.attr('rel')].selected = true;
			}
			else
			{
				obj.removeClass('selected');
				this.config.category[obj.attr('rel')].selected = false;
			}

			return false;
		},
		init: function (cfg) {

			if (typeof(cfg.multiSelectCategory) == 'undefined')
			{
				this.config.multiSelectCategory = this.configDefault.multiSelectCategory;
			}
			else
			{
				this.config.multiSelectCategory = cfg.multiSelectCategory;
			}

			if (typeof(cfg.category) == 'undefined')
			{
				this.config.category = this.configDefault.category;
			}
			else
			{
				this.config.category = cfg.category;
			}

			if (typeof(cfg.fields) == 'undefined')
			{
				this.config.fields = [];
			}
			else
			{
				this.config.fields = cfg.fields;
			}

			if (typeof(cfg.url) == 'undefined')
			{
				alert('Undefined URL to file save.php in confiuration!');
				return;
			}
			else
			{
				this.config.url = cfg.url;
			}

			$('.Feedback').remove();

			var tpl = '';
				tpl += '<div class="Feedback" id="FeedbackBG"></div>';
				tpl += '<div class="Feedback" id="printScreen">';
				tpl += '	<canvas id="imageView"></canvas>';
				tpl += '</div>';
				tpl += '<div class="Feedback FeedbackStepInfo" id="FeedbackInfo">';
				tpl += '	<a href="" title="" class="Close" onclick="return Feedback.clear();"></a>';
				tpl += '	<p>'+FeedbackLanguage.step[0].text+'</p>';
				tpl += '	<form action="" method="post" id="FeedbackForm">';

			if (this.config.category.length > 0)
			{
				tpl += '		<div class="Category">';

				for (var i = 0; i < this.config.category.length; i++)
				{
					tpl += '		<a href="" title="" class="'+this.config.category[i]["class"]+'" rel="'+i+'" onclick="return Feedback.category(this);">'+this.config.category[i]["name"]+'</a>';
				}

				tpl += '		</div>';
			}

				tpl += '		<div class="ErrorMessage ErrorCategory">'+FeedbackLanguage.validate.category+'</div>';
				tpl += this._setFields();
				tpl += '	</form>';
				tpl += '	<div class="Option">';
				if (this.isBrowserIE() >= 9 || this.isBrowserIE() == false) tpl += '		<a href="" title="" class="Screenshot" onclick="return Feedback._screenshot();">'+FeedbackLanguage.step[0].buttonScreenshot+'</a>';
				tpl += '		<a href="" title="" class="Send" onclick="return Feedback.add();">'+FeedbackLanguage.step[0].buttonAdd+'</a>';
				tpl += '	</div>';
				tpl += '</div>';

			$('body').append(tpl);
			this._setTopPosition();

			$('#FeedbackInfo textarea').bind('mouseup', function () {
				Feedback._setTopPosition();
			});
		},
		_setFields: function () {

			var tpl = '';

			if (this.config.fields.length)
			{
				for (var i = 0; i < this.config.fields.length; i++)
				{
					if (typeof(this.config.fields[i].float) == 'string') tpl += '	<div class="Float'+(typeof(this.config.fields[i].float) == 'string' ? this.config.fields[i].float : '')+'">';
					if (this.config.fields[i].type == 'input')
					{
						tpl += '		<input name="'+this.config.fields[i].name+'" id="FeedbackField'+i+'" class="t" value="'+this.config.fields[i].placeholder+'" type="text"';

						if (typeof(this.config.fields[i].placeholder) == 'string' && this.config.fields[i].placeholder != '')
						{
							tpl += ' onfocus="if (this.value == \''+this.config.fields[i].placeholder+'\') this.value = \'\';" onblur="if (this.value == \'\') this.value = \''+this.config.fields[i].placeholder+'\';" />';
						}
						else
						{
							tpl += ' />';
						}
					}
					else if (this.config.fields[i].type == 'hidden')
					{
						tpl += '		<input name="'+this.config.fields[i].name+'" id="FeedbackField'+i+'" class="t" value="'+this.config.fields[i].value+'" type="hidden" />';
					}
					else if (this.config.fields[i].type == 'textarea')
					{
						tpl += '		<textarea name="'+this.config.fields[i].name+'" id="FeedbackField'+i+'" class="t"';

						if (typeof(this.config.fields[i].placeholder) == 'string' && this.config.fields[i].placeholder != '')
						{
							tpl += ' onfocus="if (this.value == \''+this.config.fields[i].placeholder+'\') this.value = \'\';" onblur="if (this.value == \'\') this.value = \''+this.config.fields[i].placeholder+'\';">'+this.config.fields[i].placeholder+'</textarea>';
						}
						else
						{
							tpl += '></textarea>';
						}
					}

					tpl += '		<div id="FeedbackErrorField'+i+'" class="ErrorMessage">'+this.config.fields[i].validateMessage+'</div>';
					if (typeof(this.config.fields[i].float) == 'string') tpl += '	</div>';
				}
			}

			return tpl;
		},
		_screenshot: function () {

			if (this.check() == false) return false;

			var tpl = '';
				tpl += '	<a href="" title="" class="Close" onclick="return Feedback.clear();"></a>';
				tpl += '	<p class="LoaderLeft">'+FeedbackLanguage.step[1].text+'</p>';

			$('#FeedbackInfo').html(tpl);
			$('#FeedbackInfo').attr('class', 'Feedback FeedbackStepScreenshotLoading');

			setTimeout(function () {
				Feedback.printscreen();
			}, 2500);

			return false;
		},
		_getDataFeedback: function () {

			var output = this.data.forms;

			if (this.config.category.length > 0)
			{
				for (var i = 0; i < this.config.category.length; i++)
				{
					if (typeof(this.config.category[i].selected) == 'boolean' && this.config.category[i].selected == true)
					{
						output += '&category[]='+this.config.category[i].name;
					}
				}
			}

			if (this._printscreen)
			{
				output += '&image='+$('#imageView')[0].toDataURL('image/png');
			}

			return output;
		},
		add: function () {

			if (this.check() == false) return false;

			var ajaxData = this._getDataFeedback();

			var tpl = '';
				tpl += '	<p class="LoaderLeft">'+FeedbackLanguage.step[3].text+'</p>';

			$('#FeedbackInfo').html(tpl);
			$('#FeedbackInfo').attr('class', 'Feedback FeedbackStepSending');
			$('#FeedbackInfo').width('');
			$('#FeedbackBG').css('display', 'block');
			this._setTopPosition();

			$.ajax({
				type: 'POST',
				url: this.config.url,
				data: ajaxData,
				success: function (data) {
					if (data == 'success' || data == 'Success')
					{
						Feedback.finish('Success');
					}
					else if (data == 'error' || data == 'Error')
					{
						Feedback.finish('Error');
					}
					else
					{
						Feedback.finish('Error');
						console.log(data);
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
					Feedback.finish('Error');
					console.log(jqXHR);
					alert(textStatus+' | '+errorThrown);
				}
			});

			return false;
		},
		finish: function (status) {

			var tpl = '';
				tpl += '	<a href="" title="" class="Close" onclick="return Feedback.clear();"></a>';

			if (status == 'Success') tpl += '	<p class="Success">'+FeedbackLanguage.message.success+'</p>';
			if (status == 'Error') tpl += '	<p class="Error">'+FeedbackLanguage.message.error+'</p>';

				tpl += '	<div class="Option">';
				tpl += '		<a href="" title="" onclick="return Feedback.clear();">'+FeedbackLanguage.global.close+'</a>';
				tpl += '	</div>';

			$('#FeedbackInfo').html(tpl);
			$('#FeedbackInfo').attr('class', 'Feedback FeedbackStep'+status);
			$('#FeedbackBG').css('display', 'block');

			return false;
		},
		_minimalize: function (el) {

			if (this._screenshotWidth == false) this._screenshotWidth = $('#FeedbackInfo').width();

			var obj = $(el);
			if (!obj.hasClass('MinimalizeSelected'))
			{
				obj.addClass('MinimalizeSelected');
				$('.ContentMinimalizeHeader').css('display', 'block');
				$('.ContentMinimalize').css('display', 'none');
				$('#FeedbackInfo').width(150);
			}
			else
			{
				obj.removeClass('MinimalizeSelected');
				$('.ContentMinimalizeHeader').css('display', 'none');
				$('.ContentMinimalize').css('display', 'block');
				$('#FeedbackInfo').width(this._screenshotWidth);
			}

			return false;
		},
		_screenshotOption: function () {

			var tpl = '';
				tpl += '	<a href="" title="" class="Close" onclick="return Feedback.clear();"></a>';
				tpl += '	<a href="" title="" class="Minimalize" onclick="return Feedback._minimalize(this);"></a>';
				tpl += '	<div class="ContentMinimalizeHeader" style="display: none;"><p>'+FeedbackLanguage.global.toolsMin+'</p></div>';
				tpl += '	<div class="ContentMinimalize">';
				tpl += '		<p>'+FeedbackLanguage.step[2].text+'</p>';

			if (this.tools.length)
			{
				tpl += '		<div class="Tools">';

				for (var i = 0; i < this.tools.length; i++)
				{
					tpl += '			<div class="Item"><a href="" title="" class="'+this.tools[i]+''+(this.tool == this.tools[i] ? ' Selected' : '')+'" onclick="return Feedback.changetool(\''+this.tools[i]+'\', this);">'+FeedbackLanguage.tools[this.tools[i]].name+'</a> '+FeedbackLanguage.tools[this.tools[i]].description+'</div>';
				}
				tpl += '		</div>';
			}
				tpl += '		<div class="Option">';
				tpl += '			<a href="" title="" class="Send" onclick="return Feedback.add();">'+FeedbackLanguage.step[2].buttonAdd+'</a>';
				tpl += '		</div>';
				tpl += '	</div>';

			$('#FeedbackInfo').html(tpl);
			$('#FeedbackInfo').attr('class', 'Feedback FeedbackStepScreenshotOptions').css('display', 'block');
			$('#FeedbackButtonInit').css('display', 'block');

			return false;
		},
		check: function () {

			var error = 0,
				category = 0;
			$('.ErrorMessage').css('display', 'none');

			if (this.config.category.length > 0)
			{
				var catArr = '' || [];
				for (var i = 0; i < this.config.category.length; i++)
				{
					if (typeof(this.config.category[i].selected) == 'boolean' && this.config.category[i].selected == true)
					{
						category++;
						catArr.push(this.config.category[i].name);
					}
				}

				if (category == 0)
				{
					this.data.category = [];
					$('.ErrorCategory').css('display', 'block');
					error++;
				}
				else
				{
					this.data.category = catArr;
				}
			}

			if (this.config.fields.length)
			{
				for (var i = 0; i < this.config.fields.length; i++)
				{
					if (typeof(this.config.fields[i].validate) == 'boolean' && this.config.fields[i].validate == true)
					{
						if ($('#FeedbackField'+i).val() == '' || $('#FeedbackField'+i).val() == this.config.fields[i].placeholder)
						{
							$('#FeedbackErrorField'+i).css('display', 'block');
							error++;
						}
					}
					else
					{
						if (typeof(this.config.fields[i].placeholder) == 'string' && $('#FeedbackField'+i).val() == this.config.fields[i].placeholder)
						{
							$('#FeedbackField'+i).val('');
						}
					}
				}
			}

			this._setTopPosition();

			if (error>0) return false;

			if (typeof(this.data.forms) == 'undefined' || this.data.forms == '') this.data.forms = $('#FeedbackForm').serialize();

			return true;
		},
		changetool: function (v, e) {
			this.tool = v;

			$('.Feedback .Tools a').removeClass('Selected');
			$(e).addClass('Selected');

			return false;
		},
		_setTopPosition: function () {
			var h = $('#FeedbackInfo').outerHeight();

			$('#FeedbackInfo').css({
				marginTop: '-'+(h/2)+'px',
				top: '50%'
			});
		},
		printscreen: function () {

			this._printscreen = true;
			$('.Feedback, #FeedbackButtonInit').css('display', 'none');

			$(document.body).html2canvas({ callback: function (imageData) {
				var canvas, context,
					canvaso, contexto,
					canvasd, contextd,
					img, tool;
				var tool_selected = Feedback.tool;

				function init (imgData)
				{
					canvaso = document.getElementById('imageView');
					img = new Image();
					img.onload = function () 
					{
						if (!canvaso)
						{
							alert('Error: I cannot find the canvas element!');
							return;
						}

						if (!canvaso.getContext)
						{
							alert('Error: no canvas.getContext!');
							return;
						}

						contexto = canvaso.getContext('2d');
						if (!contexto)
						{
							alert('Error: failed to getContext!');
							return;
						}

						canvaso.width = img.width;
						canvaso.height = img.height;
						contexto.drawImage(img, 0, 0, img.width, img.height);

						/* BEGIN: from temporary */
						var container = canvaso.parentNode;
						canvas = document.createElement('canvas');

						if (!canvas)
						{
							alert('Error: I cannot create a new canvas element!');
							return;
						}

						canvas.id     = 'imageTemp';
						canvas.width  = canvaso.width;
						canvas.height = canvaso.height;
						container.appendChild(canvas);

						context = canvas.getContext('2d');
						/* END: from temporary */


						/* BEGIN: from rubber */
						canvasd = document.createElement('canvas');

						if (!canvasd)
						{
							alert('Error: I cannot create a new canvas element!');
							return;
						}

						canvasd.id     = 'imageOryginal';
						canvasd.width  = canvaso.width;
						canvasd.height = canvaso.height;
						container.appendChild(canvasd);

						contextd = canvasd.getContext('2d');
						contextd.drawImage(img, 0, 0, img.width, img.height);
						/* END: from rubber */

						tool = new tools[Feedback.tool]();

						canvas.addEventListener('mousedown', ev_canvas, false);
						canvas.addEventListener('mousemove', ev_canvas, false);
						canvas.addEventListener('mouseup',   ev_canvas, false);
					}

					function ev_canvas(ev)
					{
						if (ev.layerX || ev.layerX == 0) /* Firefox */
						{
							ev._x = ev.layerX;
							ev._y = ev.layerY;
						}
						else if (ev.offsetX || ev.offsetX == 0) /* Opera */
						{
							ev._x = ev.offsetX;
							ev._y = ev.offsetY;
						}

						/* Call the event handler of the tool. */
						var func = tool[ev.type];
						if (func)
						{
							func(ev);
						}
					}

					function img_update()
					{
						contexto.drawImage(canvas, 0, 0);
						context.clearRect(0, 0, canvas.width, canvas.height);
					}

					var tools = {};

					tools.select = function ()
					{
						var tool = this;
						this.started = false;

						this.mousedown = function (ev)
						{
							tool.started = true;
							tool.x0 = ev._x;
							tool.y0 = ev._y;
						};

						this.mousemove = function (ev)
						{
							if (!tool.started)
							{
								return;
							}

							var x = Math.min(ev._x,  tool.x0),
								y = Math.min(ev._y,  tool.y0),
								w = Math.abs(ev._x - tool.x0),
								h = Math.abs(ev._y - tool.y0);

							context.clearRect(0, 0, canvas.width, canvas.height);

							if (!w || !h)
							{
								return;
							}

							context.strokeRect(x, y, w, h);
							context.lineWidth = 1;
							context.strokeStyle = '#000000';
							context.fillStyle = "rgba(0, 0, 0, 0.15)";
							context.fillRect(x, y, w, h);
						};

						this.mouseup = function (ev)
						{
							if (tool.started)
							{
								tool.mousemove(ev);
								tool.started = false;
								img_update();
							}
						};
					}

					tools.blackout = function ()
					{
						var tool = this;
						this.started = false;

						this.mousedown = function (ev)
						{
							tool.started = true;
							tool.x0 = ev._x;
							tool.y0 = ev._y;
						};

						this.mousemove = function (ev)
						{
							if (!tool.started)
							{
								return;
							}

							var x = Math.min(ev._x,  tool.x0),
								y = Math.min(ev._y,  tool.y0),
								w = Math.abs(ev._x - tool.x0),
								h = Math.abs(ev._y - tool.y0);

							context.clearRect(0, 0, canvas.width, canvas.height);

							if (!w || !h)
							{
								return;
							}

							context.strokeRect(x, y, w, h);
							context.lineWidth = 1;
							context.strokeStyle = '#000000';
							context.fillStyle = "rgba(0, 0, 0, 1)";
							context.fillRect(x, y, w, h);
						};

						this.mouseup = function (ev)
						{
							if (tool.started)
							{
								tool.mousemove(ev);
								tool.started = false;
								img_update();
							}
						};
					}

					tools.rubber = function ()
					{
						var tool = this;
						this.started = false;

						this.mousedown = function (ev)
						{
							tool.started = true;
							tool.x0 = ev._x;
							tool.y0 = ev._y;
						};

						this.mousemove = function (ev)
						{
							if (!tool.started)
							{
								return;
							}

							var x = Math.min(ev._x,  tool.x0),
								y = Math.min(ev._y,  tool.y0),
								w = Math.abs(ev._x - tool.x0),
								h = Math.abs(ev._y - tool.y0);

							context.clearRect(0, 0, canvas.width, canvas.height);

							if (!w || !h)
							{
								return;
							}

							context.strokeRect(x, y, w, h);
							context.lineWidth = 1;
							context.strokeStyle = '#FFFFFF';
							context.fillStyle = "rgba(0, 0, 0, 0.20)";
							context.fillRect(x, y, w, h);
						};

						this.mouseup = function (ev)
						{
							if (tool.started)
							{
								tool.mousemove(ev);
								tool.started = false;


								var x = Math.min(ev._x,  tool.x0),
									y = Math.min(ev._y,  tool.y0),
									w = Math.abs(ev._x - tool.x0),
									h = Math.abs(ev._y - tool.y0);

								var imgDatast = contextd.getImageData(x, y, w, h);
								contexto.putImageData(imgDatast, x, y);
								context.clearRect(0, 0, canvas.width, canvas.height);
							}
						};
					}

					img.src = imgData;

					setInterval(function () {
						if (tool_selected != Feedback.tool)
						{
							if (tools[Feedback.tool])
							{
								tool = new tools[Feedback.tool]();
							}
							tool_selected = Feedback.tool;
						}
					}, 200);
				};

				init(imageData);

				$('#printScreen, #imageView').css('display', 'block');
				Feedback._screenshotOption();
			}});
		},
		isBrowserIE: function () {
			var myNav = navigator.userAgent.toLowerCase();
			return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
		},
		clear: function () {
			$('.Feedback').remove();
			return false;
		}
	};