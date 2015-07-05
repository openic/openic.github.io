(function e(h,j,l){function m(a,c){if(!j[a]){if(!h[a]){var d=typeof require=="function"&&require;
if(!c&&d){return d(a,!0)}if(i){return i(a,!0)}throw new Error("Cannot find module '"+a+"'")
}var b=j[a]={exports:{}};h[a][0].call(b.exports,function(g){var f=h[a][1][g];return m(f?f:g)
},b,b.exports,e,h,j,l)}return j[a].exports}var i=typeof require=="function"&&require;
for(var k=0;k<l.length;k++){m(l[k])}return m})({1:[function(T,Y,L){AC.ShowOnScroll=AC.Class();
AC.ShowOnScroll.prototype={__defaultOptions:{threshold:0.5,timeInView:1,scrollEndDelay:0.4},initialize:function W(a,b){if(typeof b!=="object"){b={}
}this._options=AC.Object.extend(AC.Object.clone(this.__defaultOptions),b);if(AC.Environment.Browser.os==="iOS"){this._options.scrollEndDelay=0
}this._element=AC.Element.getElementById(a);this._delegate={};this.startObserving();
AC.Object.synthesize(this)},startObserving:function C(){if(typeof this.__boundOnScroll==="undefined"){this.__boundOnScroll=AC.Function.bindAsEventListener(this.__onScroll,this)
}if(typeof this.__boundRefreshMetrics==="undefined"){this.__boundRefreshMetrics=AC.Function.bindAsEventListener(this.refreshMetrics,this)
}if(typeof this.__boundWindowLoad==="undefined"){this.__boundWindowLoad=AC.Function.bindAsEventListener(this.__onWindowLoad,this)
}if(this._isObserving!==true){AC.Element.addEventListener(window,"scroll",this.__boundOnScroll);
AC.Element.addEventListener(window,"load",this.__boundWindowLoad);AC.Element.addEventListener(window,"resize",this.__boundRefreshMetrics);
AC.Element.addEventListener(window,"orientationchange",this.__boundRefreshMetrics);
this._isObserving=true}},stopObserving:function O(){if(this._isObserving===true){AC.Element.removeEventListener(window,"scroll",this.__boundOnScroll);
AC.Element.removeEventListener(window,"resize",this.__boundRefreshMetrics);AC.Element.removeEventListener(window,"orientationchange",this.__boundRefreshMetrics);
this._isObserving=false}},setDelegate:function K(a){if(typeof a==="object"){this._delegate=a
}},refreshMetrics:function E(){delete this._viewportMetrics;delete this._elementMetrics;
this._viewportMetrics=this.viewportMetrics();this._elementMetrics=this.elementMetrics()
},isInView:function F(a){if(typeof a==="undefined"){a=this.pixelsInView()}return(a>0)
},isEnoughInView:function J(a){if(typeof a==="undefined"){a=this.percentInView()
}return(a===0)?false:(a>=this._options.threshold)},viewportMetrics:function U(){if(typeof this._viewportMetrics==="undefined"){this._viewportMetrics={};
this._viewportMetrics.height=window.innerHeight||document.documentElement.clientHeight;
AC.Object.synthesize(this)}return this._viewportMetrics},elementMetrics:function P(){if(typeof this._elementMetrics==="undefined"){this._elementMetrics={};
this._elementMetrics.height=this._element.offsetHeight;this._elementMetrics.offsetY=AC.Element.cumulativeOffset(this._element).top;
AC.Object.synthesize(this)}return this._elementMetrics},pixelsInView:function H(){var b;
var a=this.viewportMetrics();var c=this.elementMetrics();var d=this.elementViewportOffsetY();
if(d>=0){b=a.height-d;if(b>c.height){b=c.height}}else{b=c.height+d}if(b<0){b=0}return(this._pixelsInView=b)
},percentInView:function X(b){var a=this.viewportMetrics();var c=this.elementMetrics();
if(typeof b!=="number"){b=this.pixelsInView()}this._percentInView=(b===0)?0:(b/c.height);
return this._percentInView},percentTravelled:function M(c){var b=this.viewportMetrics();
var d=this.elementMetrics();var f=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
var a=b.height+d.height;this._percentTravelled=1-(((d.height+d.offsetY)-f)/a);return this._percentTravelled
},elementViewportOffsetY:function G(){var a=this.elementMetrics();var b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
return a.offsetY-b}};AC.Object.extend(AC.ShowOnScroll.prototype,{__onScroll:function R(){var b=this._percentInView;
var c=(typeof b==="undefined");var a=this.pixelsInView();var d=this.percentInView(a);
var f=this.percentTravelled(a);if(this.isInView(a)&&(b===0||c)){if(typeof this._delegate.scrolledIntoView==="function"){this._delegate.scrolledIntoView(this._element)
}}if((d===0&&b>0)&&!c){if(typeof this._delegate.scrolledOutOfView==="function"){this._delegate.scrolledOutOfView(this._element)
}}if(d===1&&(b<1||c)){if(typeof this._delegate.scrolledIntoViewCompletely==="function"){this._delegate.scrolledIntoViewCompletely(this._element,a)
}}if((d<1&&b===1)&&!c){if(typeof this._delegate.scrolledOutOfViewCompletely==="function"){this._delegate.scrolledOutOfViewCompletely(this._element,a,f)
}}if(this.__hasChangedInViewPastThresholdStatus(b,d)){if(this.isEnoughInView(d)){this.__scrolledIntoViewPastThreshold()
}else{if(!c){this.__scrolledOutOfViewPastThreshold()}}}if(this.isInView(a)){if(typeof this._delegate.scrolledWhileInView==="function"){this._delegate.scrolledWhileInView(this._element,a,f)
}}if(!c){this.__resetOnScrollEndTimer()}},__onWindowLoad:function S(){var a=this;
window.setTimeout(function(){a.__onScroll.call(a)},500)},__onScrollEnd:function B(){delete this.__onScrollEndTimer;
this.refreshMetrics();if(typeof this._delegate.scrollEnd==="function"){this._delegate.scrollEnd(this._element,this._pixelsInView,this._percentTravelled)
}},__scrolledIntoViewPastThreshold:function V(){this.__startTimeInViewTimer();if(typeof this._delegate.scrolledIntoViewPastThreshold==="function"){this._delegate.scrolledIntoViewPastThreshold(this._element,this._pixelsInView,this._percentTravelled,this._options.threshold)
}},__scrolledOutOfViewPastThreshold:function I(){this.__cancelTimeInViewTimer();
if(typeof this._delegate.scrolledOutOfViewPastThreshold==="function"){this._delegate.scrolledOutOfViewPastThreshold(this._element,this._pixelsInView,this._percentTravelled,this._options.threshold)
}},__visitorEngaged:function Q(){if(typeof this._delegate.visitorEngaged==="function"){this._delegate.visitorEngaged(this._element,this._pixelsInView,this._percentTravelled,this._options.threshold)
}delete this.__timeInViewTimerId},__hasChangedInViewPastThresholdStatus:function D(a,b){if(((this.isEnoughInView(b))&&(!this.isEnoughInView(a)))||((!this.isEnoughInView(b))&&(this.isEnoughInView(a)))||(typeof a==="undefined")){return true
}else{return false}},__cancelTimeInViewTimer:function Z(){if(typeof this.__timeInViewTimerId!=="undefined"){window.clearTimeout(this.__timeInViewTimerId);
delete this.__timeInViewTimerId}},__startTimeInViewTimer:function aa(){this.__cancelTimeInViewTimer();
if(typeof this.__boundVisitorEngaged==="undefined"){this.__boundVisitorEngaged=this.__visitorEngaged.bind(this)
}this.__timeInViewTimerId=window.setTimeout(this.__boundVisitorEngaged,(this._options.timeInView*1000))
},__resetOnScrollEndTimer:function N(){window.clearTimeout(this.__onScrollEndTimer);
if(typeof this.__boundOnScrollEnd==="undefined"){this.__boundOnScrollEnd=this.__onScrollEnd.bind(this)
}this.__onScrollEndTimer=window.setTimeout(this.__boundOnScrollEnd,this._options.scrollEndDelay*1000)
}});AC.ShowOnScroll.version="2.1"},{}],2:[function(f,i,g){var h=(function(){return{initialize:function(){var c=f("./../shared/analytics/sectionEngagement");
c();var d=f("ac-base").Element;var m=f("ac-base").Environment;var l=f("../shared/feature-detect");
var a=f("./../shared/analytics/trackClicks");a();function b(){if(l._supports("touch")){return
}if(m.Browser.name==="IE"){return}if(m.Browser.name==="Safari"&&m.Browser.version<6){return
}var j=d.select(".section-hero .clouds");AC.Element.addClassName(j,"show-clouds")
}b();return this}}}());i.exports=h.initialize()},{"../shared/feature-detect":6,"./../shared/analytics/sectionEngagement":3,"./../shared/analytics/trackClicks":5}],3:[function(r,s,o){var m=r("ac-base").Element;
var q=r("ac-base").Object;var n=r("./../shim/ac-showonscroll");var l=r("./shim/ac-tracking");
var p={appendToProp34:"",onlyTrackOnce:true,id:"",minimumDuration:1,debug:false,decimals:0,pixelOffset:50};
function k(a,b){this._element=a;this._options=b||{}}k.prototype={determineThreshold:function(){var a;
var b=this._element.offsetHeight;return this._options.pixelOffset/b},scrolledWhileInView:function(){if(document.viewport.getHeight()+window.scrollY>=Element.getHeight(document.body)){this.scrolledOutOfViewPastThreshold()
}},scrolledIntoViewPastThreshold:function(){this.__startTime=new Date().getTime()
},scrolledOutOfViewPastThreshold:function(){var a=Math.pow(10,this._options.decimals);
var b={prop34:(l.pageName()+" - "+this._options.id+" - section engaged"+this._options.appendToProp34),prop35:(Math.round((new Date().getTime()-this.__startTime)/(1000/a))/a)};
if(b.prop35>=this._options.minimumDuration){if(this._options.onlyTrackOnce===true&&this.__hasTracked===true){return
}l.trackClick(b,this,"o",b.prop34);this.__hasTracked=true;if(this._options.debug&&window.console&&window.console.log){window.console.log(b.prop34+": "+b.prop35+"s")
}}},activate:function(){this._options=q.extend(q.clone(p),this._options);if(this._options.debug===true){this._element.setStyle("outline:5px rgba(255,255,0,.5) dotted")
}this._showOnScroll=new n(this._element,{threshold:this.determineThreshold()});
this._showOnScroll.setDelegate(this)}};k.create=function(a,b){return new k(a,b)
};s.exports=function(){if(typeof l.pageName!=="function"&&typeof l.trackClick!=="function"){return
}var a=m.selectAll("*[data-track-visitor-engagement]");a.forEach(function(d,b){var c={id:d.getAttribute("data-track-visitor-engagement"),appendToProp34:" ."+(b+1)};
k.create(d,c).activate()})}},{"./../shim/ac-showonscroll":7,"./shim/ac-tracking":4}],4:[function(d,g,f){g.exports=AC.Tracking
},{}],5:[function(q,p,k){var o=q("ac-base").Element;var j=q("ac-base").String;var m=q("./shim/ac-tracking");
var l=function(c,b){if(!c){return}var a,d;this._props=b||{};this._props.prop3=m.pageName()+" - "+this._props.prop3;
for(a in this._props){if(this._props.hasOwnProperty(a)){this._props[a]=this._props[a].toLowerCase();
d=true}}if(d){o.addEventListener(c,"mousedown",this._onMouseDown.bind(this))}};
var n=l.prototype;n._onMouseDown=function(a){m.trackClick(this._props,this,"o",this._props.prop3)
};p.exports=function(){if(typeof m.pageName!=="function"&&typeof m.trackClick!=="function"){return
}var a=o.selectAll("*[data-track-click]");a.forEach(function(c,d){var f=c.getAttribute("data-track-click");
var b=j.queryStringToObject(f);new l(c,b)})}},{"./shim/ac-tracking":4}],6:[function(i,m,j){var l=i("ac-base").Element;
var n=i("ac-base").Environment.Browser;var k=i("ac-base").Environment.Feature;var o=(function(){var a=document.documentElement;
var b={touch:k.touchAvailable,svg:k.svgAvailable,oldie:(n.name==="IE"&&n.version<9)};
return{htmlClass:function(){var c;l.removeClassName(a,"no-js");l.addClassName(a,"js");
for(c in b){this._addClass(c)}},_supports:function(c){if(typeof b[c]==="undefined"){return false
}if(typeof b[c]==="function"){b[c]=b[c]()}return b[c]},_addClass:function(c,d){d=d||"no-";
if(this._supports(c)){l.addClassName(a,c)}else{l.addClassName(a,d+c)}}}}());m.exports=o
},{}],7:[function(d,g,f){d("../../../../lib/ac_showonscroll/ac_showonscroll");g.exports=AC.ShowOnScroll
},{"../../../../lib/ac_showonscroll/ac_showonscroll":1}]},{},[2]);