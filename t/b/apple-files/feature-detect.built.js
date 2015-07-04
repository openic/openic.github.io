(function e(h,j,l){function m(a,c){if(!j[a]){if(!h[a]){var d=typeof require=="function"&&require;
if(!c&&d){return d(a,!0)}if(i){return i(a,!0)}throw new Error("Cannot find module '"+a+"'")
}var b=j[a]={exports:{}};h[a][0].call(b.exports,function(g){var f=h[a][1][g];return m(f?f:g)
},b,b.exports,e,h,j,l)}return j[a].exports}var i=typeof require=="function"&&require;
for(var k=0;k<l.length;k++){m(l[k])}return m})({1:[function(g,j,h){var k=g("../shared/feature-detect");
var i=(function(){return{initialize:function(){k.htmlClass();return this}}}());
j.exports=i.initialize()},{"../shared/feature-detect":2}],2:[function(i,m,j){var l=i("ac-base").Element;
var n=i("ac-base").Environment.Browser;var k=i("ac-base").Environment.Feature;var o=(function(){var a=document.documentElement;
var b={touch:k.touchAvailable,svg:k.svgAvailable,oldie:(n.name==="IE"&&n.version<9)};
return{htmlClass:function(){var c;l.removeClassName(a,"no-js");l.addClassName(a,"js");
for(c in b){this._addClass(c)}},_supports:function(c){if(typeof b[c]==="undefined"){return false
}if(typeof b[c]==="function"){b[c]=b[c]()}return b[c]},_addClass:function(c,d){d=d||"no-";
if(this._supports(c)){l.addClassName(a,c)}else{l.addClassName(a,d+c)}}}}());m.exports=o
},{}]},{},[1]);