var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var i=void 0,l=!0,m=null,n=!1,aa=encodeURIComponent,o=window,ba=Object,ca=parseInt,s=String,t=document,u="push",v="test",da="exec",ea="width",w="replace",fa="getElementById",x="indexOf",ha="readyState",y="createElement",z="setAttribute",ia="getElementsByTagName",B="length",ja="size",D="location",E="style",ka="call",F="getAttribute",G="href",la="action",H="apply",ma="parentNode",na="height",I="join",K="toLowerCase";var L=o,M=t,oa=L[D],pa=function(){},qa=/\[native code\]/,N=function(a,b,c){return a[b]=a[b]||c},ra=function(a){for(var b=0;b<this[B];b++)if(this[b]===a)return b;return-1},sa=/&/g,ta=/</g,ua=/>/g,va=/"/g,wa=/'/g,xa=function(a){return s(a)[w](sa,"&amp;")[w](ta,"&lt;")[w](ua,"&gt;")[w](va,"&quot;")[w](wa,"&#39;")},O=function(){var a;if((a=ba.create)&&qa[v](a))a=a(m);else{a={};for(var b in a)a[b]=i}return a},P=function(a,b){return ba.prototype.hasOwnProperty[ka](a,b)},S=function(a,b){var a=a||{},c;for(c in a)P(a,
c)&&(b[c]=a[c])},T=N(L,"gapi",{});var ya=function(a,b,c){var e=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g"),b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(e[da](a)||b[da](a)))try{c=decodeURIComponent(a[2])}catch(d){}return c},za=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Aa=function(a){var b=[];if(a)for(var c in a)P(a,c)&&a[c]!=m&&b[u](aa(c)+"="+aa(a[c]));return b},Ba=function(a,b,c){var a=a.match(za),e=O();e.o=a[1];e.d=a[3]?[a[3]]:[];e.c=a[5]?[a[5]]:[];e.d[u][H](e.d,Aa(b));e.c[u][H](e.c,Aa(c));return e.o+(0<e.d[B]?"?"+e.d[I]("&"):"")+
(0<e.c[B]?"#"+e.c[I]("&"):"")};var Ca=function(a,b,c){if(L[b+"EventListener"])L[b+"EventListener"]("message",a,n);else if(L[c+"tachEvent"])L[c+"tachEvent"]("onmessage",a)};var U;U=N(L,"___jsl",O());N(U,"I",0);N(U,"hel",10);var Da=function(a){return!U.dpo?ya(a,"jsh",U.h):U.h},Ea=function(a){return N(N(U,"H",O()),a,O())};var Ga=N(U,"perf",O()),Ha=N(Ga,"g",O());N(Ga,"i",O());var Ia=N(Ga,"r",[]);O();O();var V=function(a,b,c){Ha[a]=!b&&Ha[a]||c||(new Date).getTime();"function"===typeof Ia?Ia(a,i,i):Ia[u]([a,i,i])};var Ja=O(),Ka=[],W;W={b:"callback",n:"sync",k:"config",e:"_c",g:"h",j:"platform",i:"jsl",TIMEOUT:"timeout",l:"ontimeout"};Ka[u]([W.i,function(a){for(var b in a)if(P(a,b)){var c=a[b];"object"==typeof c?U[b]=N(U,b,[]).concat(c):N(U,b,c)}if(a=a.u)b=N(U,"us",[]),b[u](a),(c=/^https:(.*)$/[da](a))&&b[u]("http:"+c[1]),N(U,"u",a)}]);var La=decodeURI("%73cript");Ja.m=function(a){var b=U.ms||"https://apis.google.com",a=a[0];if(!a||0<=a[x](".."))throw"Bad hint";return b+"/"+a[w](/^\//,"")};
var Ma=function(a){return a[I](",")[w](/\./g,"_")[w](/-/g,"_")},Na=function(a,b){for(var c=[],e=0;e<a[B];++e){var d=a[e];d&&0>ra[ka](b,d)&&c[u](d)}return c},Oa=/[@"'<>#\?&]|%2F|%3F|%23|%26/,Pa=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,Qa=/\/cb=/g,Ra=function(a){var b=M[y](La);b[z]("src",a);b.async="true";a=M[ia](La)[0];a[ma].insertBefore(b,a)},Ta=function(a,b){var c=b||{};"function"==typeof b&&(c={},c[W.b]=b);var e=c,d=e&&e[W.e];if(d)for(var f=0;f<Ka[B];f++){var g=Ka[f][0],h=Ka[f][1];
h&&P(d,g)&&h(d[g],a,e)}if(!(e=c[W.g]))if(e=Da(oa[G]),!e)throw"Bad hint";var j=e,p=c[W.b],k=c[W.k],d=c[W.TIMEOUT],q=c[W.l],r=m,A=n;if(d&&!q||!d&&q)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=N(Ea(j),"r",[]).sort(),J=N(Ea(j),"L",[]).sort(),ga=function(a){if(A)return 0;L.clearTimeout(r);J[u][H](J,C);var b=((T||{}).config||{}).update;b?b(k):k&&N(U,"cu",[])[u](k);a&&Sa(function(){var b;b=j===Da(oa[G])?N(T,"_",O()):O();b=N(Ea(j),"_",b);a(b)});p&&p();return 1};
0<d&&(r=L.setTimeout(function(){A=l;q()},d));if(a){d=a.split(":").sort();f=[];g=i;for(h=0;h<d[B];h++){var Y=d[h];Y!=g&&f[u](Y);g=Y}d=f}else d=[];var C=Na(d,J);if(!C[B])return ga();var C=Na(d,e),Q=N(U,"CP",[]),R=Q[B];Q[R]=function(a){if(!a)return 0;var b=function(){Q[R]=m;return ga(a)};if(R>0&&Q[R-1])Q[R]=b;else for(b();b=Q[++R];)if(!b())break};if(!C[B])return Q[R](pa);var Fa="loaded_"+U.I++;T[Fa]=function(a){Q[R](a);T[Fa]=m};d=j.split(";");d=(f=Ja[d.shift()])&&f(d);if(!d)throw"Bad hint:"+j;f=d=d[w]("__features__",
Ma(C))[w](/\/$/,"")+(e[B]?"/ed=1/exm="+Ma(e):"")+("/cb=gapi."+Fa);g=f.match(Qa);if(!g||!(1===g[B]&&Pa[v](f)&&!Oa[v](f)))throw"Bad URL "+d;e[u][H](e,C);c[W.n]||L.___gapisync?(c=d,"loading"!=M[ha]?Ra(c):M.write("<"+La+' src="'+encodeURI(c)+'"></'+La+">")):Ra(d)};var Sa=function(a){if(U.hee&&0<U.hel)try{return a()}catch(b){U.hel--,Ta("debug_error",function(){o.___jsl.hefn(b)})}else return a()};T.load=function(a,b){return Sa(function(){return Ta(a,b)})};var Ua=function(){return o.___jsl=o.___jsl||{}},Va=function(a){var b=Ua();b[a]=b[a]||[];return b[a]},X=function(a){var b=Ua();b.cfg=!a&&b.cfg||{};return b.cfg},Wa=function(a){return"object"===typeof a&&/\[native code\]/[v](a[u])},Z=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Wa(a[c])&&!Wa(b[c])?Z(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Wa(b[c])?[]:{},Z(a[c],b[c])):a[c]=b[c])},$=function(a){if(!a)return X();for(var a=a.split("/"),
b=X(),c=0,e=a[B];b&&"object"===typeof b&&c<e;++c)b=b[a[c]];return c===a[B]&&b!==i?b:i};var Xa=["left","right"],Ya="inline bubble none only pp vertical-bubble".split(" "),Za=function(a){var b=t[y]("div"),c=t[y]("a");c.href=a;b.appendChild(c);b.innerHTML=b.innerHTML;return b.firstChild[G]},$a=function(){return o[D].origin||o[D].protocol+"//"+o[D].host},ab=function(a,b,c,e){if(a)a=Za(a);else a:{a=e||"canonical";b=t[ia]("link");c=0;for(e=b[B];c<e;c++){var d=b[c],f=d[F]("rel");if(f&&f[K]()==a&&(d=d[F]("href")))if(d=Za(d)){a=d;break a}}a=o[D][G]}return a},bb=function(a,b){if("string"==typeof a){var c;
for(c=0;c<b[B];c++)if(b[c]==a[K]())return a[K]()}},cb=function(a){return bb(a,Xa)},db=function(a){return bb(a,Ya)},eb={tall:{"true":{width:50,height:60},"false":{width:50,height:24}},small:{"false":{width:24,height:15},"true":{width:70,height:15}},medium:{"false":{width:32,height:20},"true":{width:90,height:20}},standard:{"false":{width:38,height:24},"true":{width:106,height:24}}},fb=function(a){return"string"==typeof a?""!=a&&"0"!=a&&"false"!=a[K]():!!a},gb=function(a){var b=ca(a,10);if(b==a)return s(b)},
hb=function(a){if(fb(a))return"true"},ib=function(a){return"string"==typeof a&&eb[a[K]()]?a[K]():"standard"},jb={href:[ab,"url"],width:[gb],size:[ib],resize:[hb],autosize:[hb],count:[function(a,b){return"tall"==ib(b[ja])?"true":b.count==m||fb(b.count)?"true":"false"}],db:[function(a,b,c){a==m&&c&&(a=c.db,a==m&&(a=c.gwidget&&c.gwidget.db));return fb(a)?1:i}],ecp:[function(a,b,c){a==m&&c&&(a=c.ecp,a==m&&(a=c.gwidget&&c.gwidget.ecp));if(fb(a))return"true"}],textcolor:[function(a){if("string"==typeof a&&
a.match(/^[0-9A-F]{6}$/i))return a}],drm:[hb],recommendations:[],fu:[],ad:[hb],cr:[gb],ag:[gb],"fr-ai":[],"fr-sigh":[]};var kb={badge:{width:300,height:131},smallbadge:{width:300,height:69}},lb=function(a){return"string"==typeof a&&kb[a[K]()]?a[K]():"badge"};var mb={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},nb=0;var ob=/:([a-zA-Z_]+):/g,pb={style:"position:absolute;top:-10000px;width:300px;margin:0px;borderStyle:none"},qb="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),rb={},sb=m,tb=N(U,"WI",O()),ub=function(){var a=$("googleapis.config/sessionIndex");a==m&&(a=o.__X_GOOG_AUTHUSER);if(a==m){var b=o.google;b&&(a=b.authuser)}a==m&&(a=i,a==m&&(a=o[D][G]),a=a?ya(a,"authuser")||m:m);return a==m?m:s(a)},vb=function(a,b){if(!sb){var c=$("iframes/:socialhost:"),e=ub()||"0",d=ub();sb={socialhost:c,
session_index:e,session_prefix:d!==i&&d!==m&&""!==d?"u/"+d+"/":""}}return sb[b]||""},wb=function(a,b){var c={};S(b,c);if("additnow"!==a&&(c.hl=$("lang")||"en-US",c.origin=$a(),"plus"===a)){var e;e=ab(c[G],0,0,b[la]?m:"publisher");c.url=e;delete c[G];c.size=lb(b[ja]);e=b[ea];c.width=!e?b[la]?i:kb[lb(b[ja])][ea]:ca(e,10);e=b[na];c.height=!e?b[la]?i:kb[lb(b[ja])][na]:ca(e,10)}return c},zb=function(a,b,c,e){if(!b[ma])return m;if(!e){for(var e=O(),d=0!=b.nodeName[K]()[x]("g:"),f=0,g=b.attributes[B];f<
g;f++){var h=b.attributes[f],j=h.name,h=h.value;0<=ra[ka](xb,j)||(d&&0!=j[x]("data-")||"null"===h)||(d&&(j=j.substr(5)),e[j[K]()]=h)}d=b[E];(f=yb(d&&d[na]))&&(e.height=s(f));(d=yb(d&&d[ea]))&&(e.width=s(d))}d=a;"plus"==a&&e[la]&&(d=a+"_"+e[la]);(d=$("iframes/"+d+"/url"))||(d=":socialhost:/_/widget/render/"+a);d=d[w](ob,vb);f=((rb[a]||[])[0]||wb)(a,e);f.hl=$("lang")||"en-US";U.ILI&&(f.iloader="1");delete f["data-onload"];delete f.rd;g=$("inline/css");"undefined"!==typeof g&&g>=c&&(f.ic="1");c=f;"additnow"===
a&&(c.parenturl=oa[G],P(c,"applicationid")&&(c.appid=c.applicationid,delete c.applicationid),c.style=c[E]||b[F]("style"));var p,f=c,g=/^#|^fr-/,j={};for(p in f)P(f,p)&&g[v](p)&&(j[p[w](g,"")]=f[p],delete f[p]);p=j;"additnow"===a&&(p.action="render");f=p;g=c;j=[].concat(qb);h=$("iframes/"+a+"/methods");"object"===typeof h&&qa[v](h[u])&&(j=j.concat(h));for(var k in e)if(P(e,k)&&/^on/[v](k)&&("plus"!=a||"onconnect"!=k))j[u](k),delete g[k];f._methods=j[I](",");d=Ba(d,c,p);e.rd?k=b:(k=t[y]("div"),b[z]("data-gapistub",
l),k[E].cssText="position:absolute;width:100px;left:-10000px;",b[ma].insertBefore(k,b));k.id||(b=k,N(tb,a,0),p="___"+a+"_"+tb[a]++,b.id=p);b=O();b[">type"]=a;S(e,b);k[z]("data-gwattr",Aa(b)[I](":"));p=d;a=k;b={attributes:pb};k=a.ownerDocument;d=0;do e=b.id||["I",nb++,"_",(new Date).getTime()][I]("");while(k[fa](e)&&5>++d);if(!(5>d))throw Error("Error creating iframe id");c=k[D][G];d=O();(f=ya(c,"_bsh",U.bsh))&&(d._bsh=f);(c=Da(c))&&(d.jsh=c);var q,c=O();c.id=e;c.parent=k[D].protocol+"//"+k[D].host;
b.hintInFragment?S(d,c):q=d;p=Ba(p,q,c);q=O();S(mb,q);q.name=q.id=e;S(b.attributes,q);q.src=p;var r;try{r=k[y]('<iframe frameborder="'+xa(q.frameborder)+'" scrolling="'+xa(q.scrolling)+'" name="'+xa(q.name)+'"/>')}catch(A){r=k[y]("iframe")}for(var J in q)b=q[J],"style"==J&&"object"===typeof b?S(b,r[E]):r[z](J,q[J]);a.innerHTML="";a.appendChild(r);q.allowtransparency&&(r.allowTransparency=l);return r},xb=["style","data-gapiscan"],yb=function(a){var b=i;"number"===typeof a?b=a:"string"===typeof a&&
(b=ca(a,10));return b},Ab=function(){};rb.plusone=[function(a,b){var c={};S(jb,c);c.source=[m,"source"];c.expandTo=[m,"expandTo"];c.align=[cb];c.annotation=[db];c.origin=[$a];var e={},d=$(),f;for(f in c)c.hasOwnProperty(f)&&(e[c[f][1]||f]=(c[f]&&c[f][0]||function(a){return a})(b[f[K]()],b,d));return e}];var Bb,Cb=/(?:^|\s)g-((\S)*)(?:$|\s)/,Db=O(),Eb=N(U,"FW",[]),Gb=function(a,b){Fb(i,n,a,b)},Fb=function(a,b,c,e){V("ps0",l);var c=("string"===typeof c?t[fa](c):c)||M,d,f=M.documentMode;if(c.querySelectorAll&&(!f||8<f)){if(e)d=[e];else if(qa[v](ba.keys))d=ba.keys(Db);else{f=[];for(d in Db)P(Db,d)&&f[u](d);d=f}for(var f=[],g=0;g<d[B];g++){var h=d[g];f[u](".g-"+h,"g\\:"+h)}d=c.querySelectorAll(f[I](","))}else d=c[ia]("*");c=O();for(f=0;f<d[B];f++){g=d[f];var j=g,h=e,p=j.nodeName[K](),k=i;j[F]("data-gapiscan")?
h=m:(0==p[x]("g:")?k=p.substr(2):(j=(j=s(j.className||j[F]("class")))&&Cb[da](j))&&(k=j[1]),h=k&&Db[k]&&(!h||k===h)?k:m);h&&(g[z]("data-gapiscan",l),N(c,h,[])[u](g))}if(b)for(var q in c){b=c[q];for(e=0;e<b[B];e++)b[e][z]("data-onload",l)}for(var r in c)Eb[u](r);V("ps1",l);q=Eb[I](":");T.load(q,a);a=Bb||{};r=[W.e,W.i,W.g];for(b=0;b<r[B]&&a;b++)a=a[r[b]];r=Da(oa[G]);if(!a||0!=a[x]("n;")&&0!=r[x]("n;")&&a!==r)for(var A in c)Hb(A);else{a=[];for(A in c){r=c[A];b=0;for(e=r[B];b<e;b++)if(d=zb(A,r[b],e))(f=
d[F]("id"))&&a[u](f),Hb(A,d)}Ib(q,a)}},Jb=function(a){var b=N(T,a,{});b.go||(b.go=function(b){return Gb(b,a)},b.render=function(b,e,d){var f=e||{};f.type=a;e=f.type;delete f.type;if(!e||!Db[e])throw Error("Unsupported widget "+e||"");if((b=("string"===typeof b?t[fa](b):b)||i)&&1===b.nodeType)f.rd=1,b=zb(e,b,2,f),f=b[F]("id"),Hb(e,b,d),f&&Ib(e,[f])})};
Ka[u]([W.j,function(a,b,c){Bb=c;b&&Eb[u](b);for(b=0;b<a[B];b++)Db[a[b]]=1;for(b=0;b<a[B];b++)Jb(a[b]);if(b=o.__GOOGLEAPIS)b.googleapis&&!b["googleapis.config"]&&(b["googleapis.config"]=b.googleapis),N(U,"ci",[])[u](b),o.__GOOGLEAPIS=i;X(l);var e=o.___gcfg,b=Va("cu");if(e&&e!==o.___gu){var d={};Z(d,e);b[u](d);o.___gu=e}var e=Va("cu"),f=t.scripts||t[ia]("script")||[],d=[],g=[],h=Ua().u;h&&g[u](h);Ua().us&&g[u][H](g,Ua().us);for(h=0;h<f[B];++h)for(var j=f[h],p=0;p<g[B];++p)j.src&&0==j.src[x](g[p])&&
d[u](j);0==d[B]&&f[f[B]-1].src&&d[u](f[f[B]-1]);for(f=0;f<d[B];++f)if(!d[f][F]("gapi_processed")){d[f][z]("gapi_processed",l);(g=d[f])?(h=g.nodeType,g=3==h||4==h?g.nodeValue:g.textContent||g.innerText||g.innerHTML||""):g=i;if(g){for(;0==g.charCodeAt(g[B]-1);)g=g.substring(0,g[B]-1);h=i;try{h=(new Function("return ("+g+"\n)"))()}catch(k){}if("object"===typeof h)g=h;else{try{h=(new Function("return ({"+g+"\n})"))()}catch(q){}g="object"===typeof h?h:{}}}else g=i;g&&e[u](g)}f=Va("cd");e=0;for(d=f[B];e<
d;++e)Z(X(),f[e]);f=Va("ci");e=0;for(d=f[B];e<d;++e)Z(X(),f[e]);e=0;for(d=b[B];e<d;++e)Z(X(),b[e]);if("explicit"!=$("parsetags")){b=N(U,"sws",[]);b[u][H](b,a);var r;if(c){var A=c[W.b];A&&(r=function(){L.setTimeout(A,0)},delete c[W.b])}if("complete"!==M[ha])try{Fb(i,l)}catch(J){}var ga=function(){Fb(r,l)};if("complete"===M[ha])ga();else{var Y=n,C=function(){if(!Y)return Y=l,ga[H](this,arguments)};L.addEventListener?(L.addEventListener("load",C,n),L.addEventListener("DOMContentLoaded",C,n)):L.attachEvent&&
(L.attachEvent("onreadystatechange",function(){"complete"===M[ha]&&C[H](this,arguments)}),L.attachEvent("onload",C))}}}]);var Hb=function(a,b,c){T.load(a,function(){(0,T[a].go)(b&&b[ma]);c&&c()})};N(T,W.j,{}).go=Gb;var Kb=/^\{h\:'/,Lb=/^!_/,Ib=function(a,b){function c(){Ca(e,"remove","de")}function e(e){var g=e.data,h=e.origin;if(Mb(g,b)){var j=d;d=n;j&&V("rqe");Ta(a,function(){j&&V("rqd");c();for(var a=N(U,"RPMQ",[]),b=0;b<a[B];b++)a[b]({data:g,origin:h})})}}if(!(0===b[B]||!o.JSON||!o.JSON.parse)){var d=l;Ca(e,"add","at");Ta(a,c)}},Mb=function(a,b){a=s(a);if(Kb[v](a))return l;a=a[w](Lb,"");if(!/^\{/[v](a))return n;try{var c=o.JSON.parse(a)}catch(e){return n}if(!c)return n;var d=c.f;return c.s&&d&&-1!=ra[ka](b,
d)?("_renderstart"===c.s&&(c=c.a&&c.a[1],d=M[fa](d),c&&d&&Ab(d[ma],d,c)),l):n};Ab=function(a,b,c){if(c[ea]&&c[na]){a[E].cssText="";var e=c[ea],c=c[na],d=a[E];d.textIndent="0";d.margin="0";d.padding="0";d.background="transparent";d.borderStyle="none";d.cssFloat="none";d.styleFloat="none";d.lineHeight="normal";d.fontSize="1px";d.verticalAlign="baseline";a[E].display="inline-block";a=b[E];a.position="static";a.left=0;a.top=0;a.visibility="visible";e&&(a.width=e+"px");c&&(a.height=c+"px");b["data-csi-wdt"]=(new Date).getTime()}};V("bs0",l,o.gapi._bs);V("bs1",l);delete o.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"platform":["plusone","plus","additnow","card"],"jsl":{"u":"https://apis.google.com/js/plusone.js","dpo":false,"hee":false,"ci":{"services":{},"inline":{"css":2},"lexps":[34,69,71,65,36,40,15,45,17,51,61,60,30],"oauth-flow":{},"report":{},"iframes":{"additnow":{"url":"https://apis.google.com/additnow/additnow.html?bsv=pr"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv=pr"},":socialhost:":"https://plusone.google.com","plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv=pr"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv=pr"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","url":"","size":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv=pr"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&bsv=pr"}},"isPlusUser":true,"debug":{"host":"https://plusone.google.com","reportExceptionRate":0,"rethrowException":false},"csi":{"rate":0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/apps-static/_/js/gapi/__features__/rt=j/ver=CnJ9v0ScZZ4.en_US./sv=1/am=!6NLDMLeKYpaAwqQzDw/d=1/rs=AItRSTN37_Adkf10a6KokTTIRx1ss0VDKw","fp":"7bf5ef754889049e9b634a506c62ae1ccc623224"},"fp":"7bf5ef754889049e9b634a506c62ae1ccc623224"}});