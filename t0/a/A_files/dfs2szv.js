/*{"k":"0.12.0","mac":"1:5f7df4da5478b9bd178fbb0d0468f27008135b3325940aca771b2fb5682f612e","version":"10030392","created":"2012-03-08T23:53:45Z"}*/
;(function(window,document,undefined){
var j=true,n=null,q=false;function r(a){return function(c){this[a]=c}}function s(a){return function(){return this[a]}}var t;function u(a,c){var b=arguments.length>2?Array.prototype.slice.call(arguments,2):[];return function(){b.push.apply(b,arguments);return c.apply(a,b)}}function v(a,c){this.q=a;this.j=c}t=v.prototype;
t.createElement=function(a,c,b){a=this.q.createElement(a);if(c)for(var d in c)if(c.hasOwnProperty(d))if(d=="style"){var f=a,g=c[d];if(this.j.getName()=="MSIE")f.style.cssText=g;else f.setAttribute("style",g)}else a.setAttribute(d,c[d]);b&&a.appendChild(this.q.createTextNode(b));return a};t.insertInto=function(a,c){var b=this.q.getElementsByTagName(a)[0];if(!b)b=document.documentElement;if(b&&b.lastChild){b.insertBefore(c,b.lastChild);return j}return q};
t.whenBodyExists=function(a){function c(){document.body?a():setTimeout(c,0)}c()};t.removeElement=function(a){if(a.parentNode){a.parentNode.removeChild(a);return j}return q};t.createCssLink=function(a){return this.createElement("link",{rel:"stylesheet",href:a})};t.appendClassName=function(a,c){for(var b=a.className.split(/\s+/),d=0,f=b.length;d<f;d++)if(b[d]==c)return;b.push(c);a.className=b.join(" ").replace(/^\s+/,"")};
t.removeClassName=function(a,c){for(var b=a.className.split(/\s+/),d=[],f=0,g=b.length;f<g;f++)b[f]!=c&&d.push(b[f]);a.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")};t.hasClassName=function(a,c){for(var b=a.className.split(/\s+/),d=0,f=b.length;d<f;d++)if(b[d]==c)return j;return q};function w(a,c,b,d,f,g,k,h){this.R=a;this.Qa=c;this.za=b;this.ya=d;this.Ka=f;this.Ja=g;this.xa=k;this.Ua=h}t=w.prototype;t.getName=s("R");t.getVersion=s("Qa");t.getEngine=s("za");t.getEngineVersion=s("ya");
t.getPlatform=s("Ka");t.getPlatformVersion=s("Ja");t.getDocumentMode=s("xa");function x(a,c){this.j=a;this.v=c}var aa=new w("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",undefined,q);
x.prototype.parse=function(){var a;if(this.j.indexOf("MSIE")!=-1){a=y(this,this.j,/(MSIE [\d\w\.]+)/,1);if(a!=""){var c=a.split(" ");a=c[0];c=c[1];a=new w(a,c,a,c,z(this),A(this),B(this,this.v),C(this,c)>=6)}else a=new w("MSIE","Unknown","MSIE","Unknown",z(this),A(this),B(this,this.v),q)}else{if(this.j.indexOf("Opera")!=-1)a:{c=a="Unknown";var b=y(this,this.j,/(Presto\/[\d\w\.]+)/,1);if(b!=""){c=b.split("/");a=c[0];c=c[1]}else{if(this.j.indexOf("Gecko")!=-1)a="Gecko";b=y(this,this.j,/rv:([^\)]+)/,
1);if(b!="")c=b}if(this.j.indexOf("Version/")!=-1){b=y(this,this.j,/Version\/([\d\.]+)/,1);if(b!=""){a=new w("Opera",b,a,c,z(this),A(this),B(this,this.v),C(this,b)>=10);break a}}b=y(this,this.j,/Opera[\/ ]([\d\.]+)/,1);a=b!=""?new w("Opera",b,a,c,z(this),A(this),B(this,this.v),C(this,b)>=10):new w("Opera","Unknown",a,c,z(this),A(this),B(this,this.v),q)}else{if(this.j.indexOf("AppleWebKit")!=-1){a=z(this);c=A(this);b=y(this,this.j,/AppleWebKit\/([\d\.]+)/,1);if(b=="")b="Unknown";var d="Unknown";
if(this.j.indexOf("Chrome")!=-1||this.j.indexOf("CrMo")!=-1)d="Chrome";else if(this.j.indexOf("Safari")!=-1)d="Safari";else if(this.j.indexOf("AdobeAIR")!=-1)d="AdobeAIR";var f="Unknown";if(this.j.indexOf("Version/")!=-1)f=y(this,this.j,/Version\/([\d\.\w]+)/,1);else if(d=="Chrome")f=y(this,this.j,/(Chrome|CrMo)\/([\d\.]+)/,2);else if(d=="AdobeAIR")f=y(this,this.j,/AdobeAIR\/([\d\.]+)/,1);var g=q;if(d=="AdobeAIR"){g=y(this,f,/\d+\.(\d+)/,1);g=C(this,f)>2||C(this,f)==2&&parseInt(g,10)>=5}else{g=y(this,
b,/\d+\.(\d+)/,1);g=C(this,b)>=526||C(this,b)>=525&&parseInt(g,10)>=13}a=new w(d,f,"AppleWebKit",b,a,c,B(this,this.v),g)}else{if(this.j.indexOf("Gecko")!=-1){c=a="Unknown";d=q;if(this.j.indexOf("Firefox")!=-1){a="Firefox";b=y(this,this.j,/Firefox\/([\d\w\.]+)/,1);if(b!=""){d=y(this,b,/\d+\.(\d+)/,1);c=b;d=b!=""&&C(this,b)>=3&&parseInt(d,10)>=5}}else if(this.j.indexOf("Mozilla")!=-1)a="Mozilla";b=y(this,this.j,/rv:([^\)]+)/,1);if(b=="")b="Unknown";else if(!d){d=C(this,b);f=parseInt(y(this,b,/\d+\.(\d+)/,
1),10);g=parseInt(y(this,b,/\d+\.\d+\.(\d+)/,1),10);d=d>1||d==1&&f>9||d==1&&f==9&&g>=2||b.match(/1\.9\.1b[123]/)!=n||b.match(/1\.9\.1\.[\d\.]+/)!=n}a=new w(a,c,"Gecko",b,z(this),A(this),B(this,this.v),d)}else a=aa;a=a}a=a}a=a}return a};function z(a){var c=y(a,a.j,/(iPod|iPad|iPhone|Android)/,1);if(c!="")return c;a=y(a,a.j,/(Linux|Mac_PowerPC|Macintosh|Windows)/,1);if(a!=""){if(a=="Mac_PowerPC")a="Macintosh";return a}return"Unknown"}
function A(a){var c=y(a,a.j,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(c)return c;if(c=y(a,a.j,/(iPhone )?OS ([\d_]+)/,2))return c;if(a=y(a,a.j,/Linux ([i\d]+)/,1))return a;return"Unknown"}function C(a,c){var b=y(a,c,/(\d+)/,1);if(b!="")return parseInt(b,10);return-1}function y(a,c,b,d){if((a=c.match(b))&&a[d])return a[d];return""}function B(a,c){if(c.documentMode)return c.documentMode}function ba(a,c,b,d){this.c=a;this.k=c;this.U=b;this.o=d||"wf";this.m=new D("-")}
function E(a){a.c.removeClassName(a.k,a.m.l(a.o,"loading"));a.c.hasClassName(a.k,a.m.l(a.o,"active"))||a.c.appendClassName(a.k,a.m.l(a.o,"inactive"));G(a,"inactive")}function G(a,c,b,d){a.U[c]&&a.U[c](b,d)}function H(a,c,b,d,f){this.c=a;this.B=c;this.D=b;this.t=d;this.J=f;this.X=0;this.ta=this.ga=q}
H.prototype.watch=function(a,c,b,d,f){for(var g=a.length,k=0;k<g;k++){var h=a[k];c[h]||(c[h]=["n4"]);this.X+=c[h].length}if(f)this.ga=f;for(k=0;k<g;k++){h=a[k];f=c[h];for(var e=b[h],m=0,o=f.length;m<o;m++){var p=f[m],i=this.B,l=h,F=p;i.c.appendClassName(i.k,i.m.l(i.o,l,F,"loading"));G(i,"fontloading",l,F);i=u(this,this.Aa);l=u(this,this.Ba);(new d(i,l,this.c,this.D,this.t,this.J,h,p,e)).start()}}};
H.prototype.Aa=function(a,c){var b=this.B;b.c.removeClassName(b.k,b.m.l(b.o,a,c,"loading"));b.c.removeClassName(b.k,b.m.l(b.o,a,c,"inactive"));b.c.appendClassName(b.k,b.m.l(b.o,a,c,"active"));G(b,"fontactive",a,c);this.ta=j;I(this)};H.prototype.Ba=function(a,c){var b=this.B;b.c.removeClassName(b.k,b.m.l(b.o,a,c,"loading"));b.c.hasClassName(b.k,b.m.l(b.o,a,c,"active"))||b.c.appendClassName(b.k,b.m.l(b.o,a,c,"inactive"));G(b,"fontinactive",a,c);I(this)};
function I(a){if(--a.X==0&&a.ga)if(a.ta){a=a.B;a.c.removeClassName(a.k,a.m.l(a.o,"loading"));a.c.removeClassName(a.k,a.m.l(a.o,"inactive"));a.c.appendClassName(a.k,a.m.l(a.o,"active"));G(a,"active")}else E(a.B)}
function J(a,c,b,d,f,g,k,h,e){this.va=a;this.Ea=c;this.c=b;this.D=d;this.t=f;this.J=g;this.Ia=new K;this.Da=new ca;this.aa=k;this.$=h;this.Ca=e||"BESbswy";this.ia=da(this,"arial,'URW Gothic L',sans-serif");this.ja=da(this,"Georgia,'Century Schoolbook L',serif");this.ea=this.ia;this.fa=this.ja;this.oa=L(this,"arial,'URW Gothic L',sans-serif");this.pa=L(this,"Georgia,'Century Schoolbook L',serif")}J.prototype.start=function(){this.Oa=this.J();this.V()};
J.prototype.V=function(){var a=this.D.O(this.oa),c=this.D.O(this.pa);if((this.ia!=a||this.ja!=c)&&this.ea==a&&this.fa==c)ea(this,this.va);else if(this.J()-this.Oa>=5E3)ea(this,this.Ea);else{this.ea=a;this.fa=c;fa(this)}};function fa(a){a.t(function(c,b){return function(){b.call(c)}}(a,a.V),25)}function ea(a,c){a.c.removeElement(a.oa);a.c.removeElement(a.pa);c(a.aa,a.$)}function da(a,c){var b=L(a,c,j),d=a.D.O(b);a.c.removeElement(b);return d}
function L(a,c,b){c=a.c.createElement("span",{style:ga(a,c,a.$,b)},a.Ca);a.c.insertInto("body",c);return c}function ga(a,c,b,d){b=a.Da.expand(b);return"position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:"+(d?"":a.Ia.quote(a.aa)+",")+c+";"+b}function D(a){this.Ga=a||"-"}D.prototype.l=function(){for(var a=[],c=0;c<arguments.length;c++)a.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return a.join(this.Ga)};
function K(){this.na="'"}K.prototype.quote=function(a){var c=[];a=a.split(/,\s*/);for(var b=0;b<a.length;b++){var d=a[b].replace(/['"]/g,"");d.indexOf(" ")==-1?c.push(d):c.push(this.na+d+this.na)}return c.join(",")};function ca(){this.la=ha;this.F=ia}var ha=["font-style","font-weight"],ia={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};
function ja(a,c,b){this.Fa=a;this.La=c;this.F=b}ja.prototype.expand=function(a,c){for(var b=0;b<this.F.length;b++)if(c==this.F[b][0]){a[this.Fa]=this.La+":"+this.F[b][1];break}};ca.prototype.expand=function(a){if(a.length!=2)return n;for(var c=[n,n],b=0,d=this.la.length;b<d;b++){var f=this.la[b];(new ja(b,f,this.F[f])).expand(c,a.substr(b,1))}return c[0]&&c[1]?c.join(";")+";":n};function M(a,c){this.q=a;this.j=c}M.prototype=v.prototype;
M.prototype.isHttps=function(){return this.q.location.protocol=="https:"};M.prototype.getHostName=function(){return this.q.location.hostname};M.prototype.loadScript=function(a,c){var b=this.q.getElementsByTagName("head")[0];if(b){var d=this.q.createElement("script");d.src=a;var f=q;d.onload=d.onreadystatechange=function(){if(!f&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){f=j;c&&c();d.onload=d.onreadystatechange=n;d.parentNode.tagName=="HEAD"&&b.removeChild(d)}};b.appendChild(d)}};
M.prototype.createStyle=function(a){var c=this.q.createElement("style");c.setAttribute("type","text/css");if(c.styleSheet)c.styleSheet.cssText=a;else c.appendChild(document.createTextNode(a));return c};function ka(a,c){this.Ma=a;this.Y=c}function la(a){for(var c=a.Ma.join(","),b=[],d=0;d<a.Y.length;d++){var f=a.Y[d];b.push(f.name+":"+f.value+";")}return c+"{"+b.join("")+"}"}function N(a,c,b,d){this.C=a;this.I=c;this.w=b;this.Ta=d;this.ba={};this.Z={}}
N.prototype.z=function(a){return a?(this.ba[a.getStylesheetFormatId()]||this.I).slice(0):this.I.slice(0)};N.prototype.getId=s("w");function ma(a,c,b){for(var d=[],f=a.C.split(",")[0].replace(/"|'/g,""),g=a.z(),k,h=[],e={},m=0;m<g.length;m++){k=g[m];if(k.length>0&&!e[k]){e[k]=j;h.push(k)}}b=b.ma?b.ma(f,h,d):h;c=c.getStylesheetFormatId();a.ba[c]=b;a.Z[c]=d}N.prototype.watch=function(a,c,b){var d=[],f={};na(this,c,d,f);a(d,f,b)};
function na(a,c,b,d){b.push(a.C);d[a.C]=a.z(c);a=a.Z[c.getStylesheetFormatId()]||[];for(c=0;c<a.length;c++){for(var f=a[c],g=f.C,k=q,h=0;h<b.length;h++)if(b[h]==g)k=j;if(!k){b.push(g);d[g]=f.z()}}}function oa(a,c){this.C=a;this.I=c}oa.prototype.z=s("I");function O(a,c,b){this.Na=a;this.P=c;this.qa=b}O.prototype.buildUrl=function(a,c){var b=this.Na&&a?"https:":"http:",d=typeof this.P=="function"?this.P(b):this.P;return b+"//"+d+(this.qa=="/"?"":this.qa)+c};
function pa(a,c){var b=new Image(1,1);b.src=c;b.onload=function(){b.onload=n}}function P(a,c,b){this.w=a;this.sa=c;this.da=b}P.prototype.getId=s("w");P.prototype.getStylesheetFormatId=s("sa");P.prototype.isUserAgent=function(a){return this.da?this.da(a.getName(),a.getVersion(),a.getEngine(),a.getEngineVersion(),a.getPlatform(),a.getPlatformVersion(),a.getDocumentMode()):q};P.prototype.buildCssUrl=function(a,c,b,d){b="/"+b+"-"+this.sa+".css";if(d)b+="?"+d;return c.buildUrl(a,b)};
function Q(){this.u=[]}Q.prototype.addBrowser=function(a){this.getBrowserById(a.getId())||this.u.push(a)};Q.prototype.getBrowserById=function(a){for(var c=0;c<this.u.length;c++){var b=this.u[c];if(a===b.getId())return b}return n};Q.prototype.findBrowser=function(a){for(var c=0;c<this.u.length;c++){var b=this.u[c];if(b.isUserAgent(a))return b}return n};Q.prototype.addBrowsersToBrowserSet=function(a){for(var c=0;c<this.u.length;c++)a.addBrowser(this.u[c])};
function qa(a){this.w=a;this.L=new Q;this.n=[];this.M=[];this.N=this.W=this.A=n}t=qa.prototype;t.getId=s("w");t.setSecurityToken=r("ra");t.setNestedUrl=r("ha");t.setFontFilterSet=r("N");t.setKitOptions=r("Q");t.addBrowser=function(a){this.L.addBrowser(a)};t.addFontFamily=function(a){this.n.push(a)};t.addCssRule=function(a){this.M.push(a)};t.supportsBrowser=function(a){return!!this.L.getBrowserById(a.getId())};t.addBrowsersToBrowserSet=function(a){this.L.addBrowsersToBrowserSet(a)};
t.init=function(a){for(var c=[],b=0;b<this.M.length;b++)c.push(la(this.M[b]));a.insertInto("head",a.createStyle(c.join("")))};
t.load=function(a,c,b,d){if(this.N)for(var f=ra(this.N,b.getStylesheetFormatId()),g=0;g<this.n.length;g++)ma(this.n[g],b,f);if(this.A&&this.W){this.A.wa(new sa(b.getStylesheetFormatId()));g=new ta(a,this.G,this.n);f=ua(this.W,b.getStylesheetFormatId(),g);for(g=0;g<f.length;g++)this.A.wa(f[g]);this.A.Sa(this.ra);g=this.A.buildUrl(a.isHttps(),this.ha)}else g=b.buildCssUrl(a.isHttps(),this.ha,this.w,this.ra);a.insertInto("head",a.createCssLink(g));c&&a.whenBodyExists(function(k,h,e,m){return function(){for(var o=
0;o<k.n.length;o++)k.n[o].watch(h,e,m&&o==k.n.length-1)}}(this,c,b,d))};t.collectFontFamilies=function(a,c,b){for(var d=0;d<this.n.length;d++)na(this.n[d],a,c,b)};t.performOptionalActions=function(a,c,b){this.Q&&b.whenBodyExists(function(d,f,g,k){return function(){var h=d.Q;h.ka&&pa(h,h.ka.buildUrl(k.isHttps()));var e=d.Q;h=d.w;if(e.T){e=e.T.l(h,g,k);e.setAttribute("id","typekit-badge-"+h);k.insertInto("body",e)}}}(this,a,c,b))};
function R(a,c,b,d,f){this.Ha=a;this.c=c;this.j=b;this.k=d;this.t=f;this.p=[]}R.prototype.K=function(a){this.p.push(a)};R.prototype.load=function(a,c){var b=a,d=c||{};if(typeof b=="string")b=[b];else if(b&&b.length)b=b;else{d=b||{};b=[]}if(b.length)for(var f=this,g=b.length,k=0;k<b.length;k++)this.ua(b[k],function(){--g==0&&f.S(d)});else this.S(d)};R.prototype.ua=function(a,c){this.c.loadScript(this.Ha.buildUrl(this.c.isHttps(),"/"+a+".js"),c)};
R.prototype.S=function(a){if(a.userAgent)this.j=(new x(a.userAgent,document)).parse();a=new ba(this.c,this.k,a);for(var c=new Q,b=0;b<this.p.length;b++)this.p[b].addBrowsersToBrowserSet(c);c=c.findBrowser(this.j);for(b=0;b<this.p.length;b++)this.p[b].init(this.c);if(c){a.c.appendClassName(a.k,a.m.l(a.o,"loading"));G(a,"loading");va(this,c,a)}else E(a);this.p=[]};
function va(a,c,b){function d(k,h,e){f.watch(k,h,{},J,e)}var f=new H(a.c,b,{O:function(k){return k.offsetWidth}},a.t,function(){return+new Date});for(b=0;b<a.p.length;b++){var g=a.p[b];if(g.supportsBrowser(c)){g.load(a.c,d,c,b==a.p.length-1);g.performOptionalActions(window,a.j,a.c)}}}function S(a,c,b){this.ca=a;this.c=c;this.t=b;this.p=[]}S.prototype.K=function(a){this.p.push(a)};
S.prototype.load=function(){var a=this.ca.__webfonttypekitmodule__;if(a)for(var c=0;c<this.p.length;c++){var b=this.p[c],d=a[b.getId()];if(d){var f=this.c,g=this.t;d(function(k,h,e){var m=new Q;b.addBrowsersToBrowserSet(m);h=[];var o={};if(m=m.findBrowser(k)){b.init(f);b.load(f,n,m,g);b.collectFontFamilies(m,h,o);b.performOptionalActions(window,k,f,g)}e(!!m,h,o)})}}};function T(a,c){this.R=a;this.ma=c}T.prototype.getName=s("R");
function U(a,c){for(var b=0;b<a.H.length;b++){var d=a.H[b];if(c===d.getName())return d}return n}function ra(a,c){var b=a.r[c];return b?U(a,b):n}function ua(a,c,b){var d=[];a=a.s[c]||[];for(c=0;c<a.length;c++){var f;a:switch(a[c]){case "observeddomain":f=new wa(b.c);break a;case "fontmask":f=new xa(b.G,b.n);break a;default:f=n}f&&d.push(f)}return d}function ta(a,c,b){this.c=a;this.G=c;this.n=b}function sa(a){this.Pa=a}sa.prototype.toString=s("Pa");function wa(a){this.c=a}
wa.prototype.toString=function(){var a;a=this.c.getHostName?this.c.getHostName():document.location.hostname;return encodeURIComponent(a)};function xa(a,c){this.G=a;this.n=c}xa.prototype.toString=function(){for(var a=[],c=0;c<this.n.length;c++){var b=this.n[c],d=b.z();b=b.z(this.G);for(var f=0;f<d.length;f++){var g;a:{for(g=0;g<b.length;g++)if(d[f]===b[g]){g=j;break a}g=q}a.push(g?1:0)}}a=a.join("");a=a.replace(/^0+/,"");c=[];for(d=a.length;d>0;d-=4){b=a.slice(d-4<0?0:d-4,d);c.unshift(parseInt(b,2).toString(16))}return c.join("")};
var V=new Q;V.addBrowser(new P("safariany-android3plus","f",function(a,c,b,d,f,g,k){var h=q;h=h||function(e,m,o,p,i,l){e=/([0-9]+).([0-9]+)/.exec(l);if(i=="Android"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i==3&&e>=1||i>3}else return q}(a,c,b,d,f,g,k);if(!h)return q;a=a=="Safari"&&b=="AppleWebKit"||a=="Unknown"&&b=="AppleWebKit"&&(f=="iPhone"||f=="iPad")?j:q;return a}));
V.addBrowser(new P("safari3to5-win2003-win7plus-winvista-winxp","a",function(a,c,b,d,f,g,k){var h=q;h=(h=(h=(h=h||(f=="Windows"&&g=="5.1"?j:q))||(f=="Windows"&&g=="5.2"?j:q))||(f=="Windows"&&g=="6.0"?j:q))||function(e,m,o,p,i,l){e=/^([0-9]+).([0-9]+)/.exec(l);if(i=="Windows"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i>6||i==6&&e>=1}else return q}(a,c,b,d,f,g,k);if(!h)return q;return function(e,m,o,p){if(e=="Safari"&&o=="AppleWebKit")if(e=/([0-9]+.[0-9]+)/.exec(p)){e=parseFloat(e[1]);return e>=
525.13&&e<534.5}return q}(a,c,b,d,f,g,k)}));
V.addBrowser(new P("safari5plus-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,d,f,g,k){var h=q;h=(h=(h=(h=(h=h||(f=="Windows"&&g=="5.1"?j:q))||(f=="Windows"&&g=="5.2"?j:q))||(f=="Windows"&&g=="6.0"?j:q))||function(e,m,o,p,i,l){e=/^([0-9]+).([0-9]+)/.exec(l);if(i=="Windows"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i>6||i==6&&e>=1}else return q}(a,c,b,d,f,g,k))||function(e,m,o,p,i,l){e=/^([0-9]+)(_|.)([0-9]+)/.exec(l);if(i=="Macintosh"&&e){i=parseInt(e[1],10);l=parseInt(e[3],10);
return i>10||i==10&&l>=4}else return i=="Macintosh"&&l=="Unknown"?j:q}(a,c,b,d,f,g,k);if(!h)return q;return function(e,m,o,p){if(e=="Safari"&&o=="AppleWebKit")if(e=/([0-9]+.[0-9]+)/.exec(p))return parseFloat(e[1])>=534.5;return q}(a,c,b,d,f,g,k)}));
V.addBrowser(new P("opera10-linux-win2003-win7plus-winvista-winxp","a",function(a,c,b,d,f,g,k){var h=q;h=(h=(h=(h=(h=h||(f=="Windows"&&g=="5.1"?j:q))||(f=="Windows"&&g=="5.2"?j:q))||(f=="Windows"&&g=="6.0"?j:q))||function(e,m,o,p,i,l){e=/^([0-9]+).([0-9]+)/.exec(l);if(i=="Windows"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i>6||i==6&&e>=1}else return q}(a,c,b,d,f,g,k))||(f=="Ubuntu"||f=="Linux"?j:q);if(!h)return q;return function(e,m){if(e=="Opera"){var o=parseFloat(m);return o>=10.54&&o<
11.1}return q}(a,c,b,d,f,g,k)}));
V.addBrowser(new P("ff36plus-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,d,f,g,k){var h=q;h=(h=(h=(h=(h=(h=h||(f=="Windows"&&g=="5.1"?j:q))||(f=="Windows"&&g=="5.2"?j:q))||(f=="Windows"&&g=="6.0"?j:q))||function(e,m,o,p,i,l){e=/^([0-9]+).([0-9]+)/.exec(l);if(i=="Windows"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i>6||i==6&&e>=1}else return q}(a,c,b,d,f,g,k))||function(e,m,o,p,i,l){e=/^([0-9]+)(_|.)([0-9]+)/.exec(l);if(i=="Macintosh"&&e){i=parseInt(e[1],10);l=parseInt(e[3],
10);return i>10||i==10&&l>=4}else return i=="Macintosh"&&l=="Unknown"?j:q}(a,c,b,d,f,g,k))||(f=="Ubuntu"||f=="Linux"?j:q);if(!h)return q;return function(e,m,o,p){if(o=="Gecko")if(m=/([0-9]+.[0-9]+)(.([0-9]+)|)/.exec(p)){e=parseFloat(m[1]);m=parseInt(m[3],10);return e>1.9||e>=1.9&&m>1}return q}(a,c,b,d,f,g,k)}));
V.addBrowser(new P("safari3to5-osx","b",function(a,c,b,d,f,g,k){var h=q;h=h||function(e,m,o,p,i,l){e=/^([0-9]+)(_|.)([0-9]+)/.exec(l);if(i=="Macintosh"&&e){i=parseInt(e[1],10);l=parseInt(e[3],10);return i>10||i==10&&l>=4}else return i=="Macintosh"&&l=="Unknown"?j:q}(a,c,b,d,f,g,k);if(!h)return q;return function(e,m,o,p){if(e=="Safari"&&o=="AppleWebKit")if(e=/([0-9]+.[0-9]+)/.exec(p)){e=parseFloat(e[1]);return e>=525.13&&e<534.5}return q}(a,c,b,d,f,g,k)}));
V.addBrowser(new P("ff35-linux-win2003-win7plus-winvista-winxp","a",function(a,c,b,d,f,g,k){var h=q;h=(h=(h=(h=(h=h||(f=="Windows"&&g=="5.1"?j:q))||(f=="Windows"&&g=="5.2"?j:q))||(f=="Windows"&&g=="6.0"?j:q))||function(e,m,o,p,i,l){e=/^([0-9]+).([0-9]+)/.exec(l);if(i=="Windows"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i>6||i==6&&e>=1}else return q}(a,c,b,d,f,g,k))||(f=="Ubuntu"||f=="Linux"?j:q);if(!h)return q;return function(e,m,o,p){if(o=="Gecko"){e=/1.9.1b[1-3]{1}/;return/1.9.1/.test(p)&&
!e.test(p)}return q}(a,c,b,d,f,g,k)}));V.addBrowser(new P("ie9plus-win7plus-winvista","d",function(a,c,b,d,f,g,k){var h=q;h=(h=h||function(m,o,p,i,l,F){m=/^([0-9]+).([0-9]+)/.exec(F);if(l=="Windows"&&m){l=parseInt(m[1],10);m=parseInt(m[2],10);return l>6||l==6&&m>=1}else return q}(a,c,b,d,f,g,k))||(f=="Windows"&&g=="6.0"?j:q);if(!h)return q;var e;if(a=="MSIE")e=k>=9;return e}));
V.addBrowser(new P("ie6to8-win2003-win7plus-winvista-winxp","i",function(a,c,b,d,f,g,k){var h=q;h=(h=(h=(h=h||(f=="Windows"&&g=="5.1"?j:q))||(f=="Windows"&&g=="5.2"?j:q))||(f=="Windows"&&g=="6.0"?j:q))||function(e,m,o,p,i,l){e=/^([0-9]+).([0-9]+)/.exec(l);if(i=="Windows"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i>6||i==6&&e>=1}else return q}(a,c,b,d,f,g,k);if(!h)return q;return function(e,m,o,p,i,l,F){if(e=="MSIE"){if(e=/([0-9]+.[0-9]+)/.exec(m))return parseFloat(e[1])>=6&&(F===undefined||
F<9);return q}}(a,c,b,d,f,g,k)}));V.addBrowser(new P("ff35-osx","b",function(a,c,b,d,f,g,k){var h=q;h=h||function(e,m,o,p,i,l){e=/^([0-9]+)(_|.)([0-9]+)/.exec(l);if(i=="Macintosh"&&e){i=parseInt(e[1],10);l=parseInt(e[3],10);return i>10||i==10&&l>=4}else return i=="Macintosh"&&l=="Unknown"?j:q}(a,c,b,d,f,g,k);if(!h)return q;return function(e,m,o,p){if(o=="Gecko"){e=/1.9.1b[1-3]{1}/;return/1.9.1/.test(p)&&!e.test(p)}return q}(a,c,b,d,f,g,k)}));
V.addBrowser(new P("chrome4to5-linux-osx-win2003-win7plus-winvista-winxp","a",function(a,c,b,d,f,g,k){var h=q;h=(h=(h=(h=(h=(h=h||(f=="Windows"&&g=="5.1"?j:q))||(f=="Windows"&&g=="5.2"?j:q))||(f=="Windows"&&g=="6.0"?j:q))||function(e,m,o,p,i,l){e=/^([0-9]+).([0-9]+)/.exec(l);if(i=="Windows"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i>6||i==6&&e>=1}else return q}(a,c,b,d,f,g,k))||function(e,m,o,p,i,l){e=/^([0-9]+)(_|.)([0-9]+)/.exec(l);if(i=="Macintosh"&&e){i=parseInt(e[1],10);l=parseInt(e[3],
10);return i>10||i==10&&l>=4}else return i=="Macintosh"&&l=="Unknown"?j:q}(a,c,b,d,f,g,k))||(f=="Ubuntu"||f=="Linux"?j:q);if(!h)return q;return function(e,m){if(e=="Chrome"){var o=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(m);if(o){var p=parseFloat(o[1]),i=parseInt(o[2],10);o=parseInt(o[3],10);if(p>=6)return q;else if(p>4)return j;else if(p==4&&i>249)return j;else if(p==4&&i==249&&o>=4)return j}}return q}(a,c,b,d,f,g,k)}));
V.addBrowser(new P("chrome6plus-android3plus-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,d,f,g,k){var h=q;h=(h=(h=(h=(h=(h=(h=h||(f=="Windows"&&g=="5.1"?j:q))||(f=="Windows"&&g=="5.2"?j:q))||(f=="Windows"&&g=="6.0"?j:q))||function(e,m,o,p,i,l){e=/^([0-9]+).([0-9]+)/.exec(l);if(i=="Windows"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i>6||i==6&&e>=1}else return q}(a,c,b,d,f,g,k))||function(e,m,o,p,i,l){e=/^([0-9]+)(_|.)([0-9]+)/.exec(l);if(i=="Macintosh"&&e){i=parseInt(e[1],
10);l=parseInt(e[3],10);return i>10||i==10&&l>=4}else return i=="Macintosh"&&l=="Unknown"?j:q}(a,c,b,d,f,g,k))||(f=="Ubuntu"||f=="Linux"?j:q))||function(e,m,o,p,i,l){e=/([0-9]+).([0-9]+)/.exec(l);if(i=="Android"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i==3&&e>=1||i>3}else return q}(a,c,b,d,f,g,k);if(!h)return q;return function(e,m){if(e=="Chrome"){var o=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(m);if(o)if(parseFloat(o[1])>=6)return j}}(a,c,b,d,f,g,k)}));
V.addBrowser(new P("safariany-android2to3","a",function(a,c,b,d,f,g,k){var h=q;h=h||function(e,m,o,p,i,l){e=/([0-9]+).([0-9]+)/.exec(l);if(i=="Android"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i==2&&e>=2||i==3&&e<1}else return q}(a,c,b,d,f,g,k);if(!h)return q;a=a=="Safari"&&b=="AppleWebKit"||a=="Unknown"&&b=="AppleWebKit"&&(f=="iPhone"||f=="iPad")?j:q;return a}));
V.addBrowser(new P("opera10-osx","b",function(a,c,b,d,f,g,k){var h=q;h=h||function(e,m,o,p,i,l){e=/^([0-9]+)(_|.)([0-9]+)/.exec(l);if(i=="Macintosh"&&e){i=parseInt(e[1],10);l=parseInt(e[3],10);return i>10||i==10&&l>=4}else return i=="Macintosh"&&l=="Unknown"?j:q}(a,c,b,d,f,g,k);if(!h)return q;return function(e,m){if(e=="Opera"){var o=parseFloat(m);return o>=10.54&&o<11.1}return q}(a,c,b,d,f,g,k)}));
V.addBrowser(new P("air-linux-osx-win","a",function(a,c,b,d,f,g,k){var h=q;h=(h=(h=h||function(e,m,o,p,i,l){e=/^([0-9]+)(_|.)([0-9]+)/.exec(l);if(i=="Macintosh"&&e){i=parseInt(e[1],10);l=parseInt(e[3],10);return i>10||i==10&&l>=4}else return i=="Macintosh"&&l=="Unknown"?j:q}(a,c,b,d,f,g,k))||(f=="Ubuntu"||f=="Linux"?j:q))||(f=="Windows"&&g=="Unknown"?j:q);if(!h)return q;return function(e,m){if(e=="AdobeAIR"){var o=/([0-9]+.[0-9]+)/.exec(m);if(o)return parseFloat(o[1])>=2.5}return q}(a,c,b,d,f,g,k)}));
V.addBrowser(new P("opera11plus-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,d,f,g,k){var h=q;h=(h=(h=(h=(h=(h=h||(f=="Windows"&&g=="5.1"?j:q))||(f=="Windows"&&g=="5.2"?j:q))||(f=="Windows"&&g=="6.0"?j:q))||function(e,m,o,p,i,l){e=/^([0-9]+).([0-9]+)/.exec(l);if(i=="Windows"&&e){i=parseInt(e[1],10);e=parseInt(e[2],10);return i>6||i==6&&e>=1}else return q}(a,c,b,d,f,g,k))||function(e,m,o,p,i,l){e=/^([0-9]+)(_|.)([0-9]+)/.exec(l);if(i=="Macintosh"&&e){i=parseInt(e[1],10);l=parseInt(e[3],
10);return i>10||i==10&&l>=4}else return i=="Macintosh"&&l=="Unknown"?j:q}(a,c,b,d,f,g,k))||(f=="Ubuntu"||f=="Linux"?j:q);if(!h)return q;a=a=="Opera"?parseFloat(c)>=11.1:q;return a}));var W=new function(){this.H=[];this.r={}},ya=new T("AllFonts",function(a,c){return c});U(W,ya.getName())||W.H.push(ya);
var za=new T("DefaultFourFontsWithSingleFvdFamilies",function(a,c,b){for(var d=0;d<c.length;d++){var f=c[d],g=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;b.push(new oa(g,[f]))}a={};for(f=0;f<c.length;f++){b=c[f];d=b.charAt(1);(a[d]||(a[d]=[])).push(b)}b=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(f=0;f<b.length;f++){g=b[f];for(var k=0;k<g.length;k++){var h=g[k];if(a[h]){d=d.concat(a[h]);break}}}b=d;d={};a=[];for(f=0;f<b.length;f++){g=b[f];if(!d[g]){d[g]=j;a.push(g)}}b=[];for(d=0;d<c.length;d++){f=
c[d];for(g=0;g<a.length;g++){k=a[g];k==f&&b.push(k)}}return b});U(W,za.getName())||W.H.push(za);W.r.a="AllFonts";W.r.b="AllFonts";W.r.d="AllFonts";W.r.e="AllFonts";W.r.f="AllFonts";W.r.g="AllFonts";W.r.h="AllFonts";W.r.i="DefaultFourFontsWithSingleFvdFamilies";var X=new function(){this.s={}};X.s.a=[];X.s.b=[];X.s.d=[];X.s.e=[];X.s.f=["observeddomain"];X.s.g=["observeddomain"];X.s.h=["observeddomain"];X.s.i=["observeddomain","fontmask"];
if(!window.Typekit){var Aa=new O(j,"use.typekit.com","/"),Ba=(new x(navigator.userAgent,document)).parse(),Ca=new M(document,Ba),Da=function(a,c){setTimeout(a,c)},Y=new R(Aa,Ca,Ba,document.documentElement,Da),Z=new S(window,Ca,Da);window.Typekit=Y;window.Typekit.load=Y.load;window.Typekit.addKit=Y.K}var Ea,Fa,$;Ea=new O(j,"use.typekit.com","/k");Fa=new function(a,c,b){this.T=a;this.Ra=n;this.ka=b}(n,n,n);$=new qa("dfs2szv");$.setSecurityToken("3bb2a6e53c9684ffdc9a9bf6135b2a629dfd401408a09a37c12b617a84373d1bda4d33b340b4beca516b9bc582290d74c36d0b4d13523a90afc2090f0e039ac1839fbbe533a0f2ab7b5eead094975ecf6693681708b5efe31e3e4eddcac7c591e4e8383481634f4e3badf963e6");
$.setNestedUrl(Ea);$.setKitOptions(Fa);$.addFontFamily(new N("chaparral-pro-1,chaparral-pro-2",["n4","i4","n6","n7"]));$.addFontFamily(new N("proxima-nova-1,proxima-nova-2",["n4","i4","n7","i7"]));$.addCssRule(new ka([".tk-chaparral-pro"],[{name:"font-family",value:'"chaparral-pro-1","chaparral-pro-2",georgia,serif'}]));$.addCssRule(new ka([".tk-proxima-nova"],[{name:"font-family",value:'"proxima-nova-1","proxima-nova-2",sans-serif'}]));$.addBrowser(V.getBrowserById("air-linux-osx-win"));$.addBrowser(V.getBrowserById("chrome4to5-linux-osx-win2003-win7plus-winvista-winxp"));
$.addBrowser(V.getBrowserById("chrome6plus-android3plus-linux-osx-win2003-win7plus-winvista-winxp"));$.addBrowser(V.getBrowserById("ff35-linux-win2003-win7plus-winvista-winxp"));$.addBrowser(V.getBrowserById("ff35-osx"));$.addBrowser(V.getBrowserById("ff36plus-linux-osx-win2003-win7plus-winvista-winxp"));$.addBrowser(V.getBrowserById("ie6to8-win2003-win7plus-winvista-winxp"));$.addBrowser(V.getBrowserById("ie9plus-win7plus-winvista"));$.addBrowser(V.getBrowserById("opera10-linux-win2003-win7plus-winvista-winxp"));
$.addBrowser(V.getBrowserById("opera10-osx"));$.addBrowser(V.getBrowserById("opera11plus-linux-osx-win2003-win7plus-winvista-winxp"));$.addBrowser(V.getBrowserById("safari3to5-osx"));$.addBrowser(V.getBrowserById("safari3to5-win2003-win7plus-winvista-winxp"));$.addBrowser(V.getBrowserById("safari5plus-osx-win2003-win7plus-winvista-winxp"));$.addBrowser(V.getBrowserById("safariany-android2to3"));$.addBrowser(V.getBrowserById("safariany-android3plus"));$.setFontFilterSet(W);
if(Z&&Z.ca.__webfonttypekitmodule__){Z.K($);Z.load()}else window.Typekit.addKit($);
})(this,document);
window.Typekit.config={"p":"//p.typekit.net/p.gif?s=1&k=dfs2szv&ht=tk&h={host}&f=6906.6905.6907.6911.176.140.175.139&a=310317&_={_}"};
/*{"k":"1.1.0","created":"2012-08-20T20:46:40Z"}*/
;(function(window,document,undefined){
function e(a){this.a=a}e.prototype=function(a){this.a=a}.prototype;function f(a){var b=new Image(1,1);b.src=a;b.onload=function(){b.onload=null}}function g(){this.c=window.Typekit.config.p}function h(a,b,c){var d=c||{},a=a.c.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,c){return c&&d[b]?"/"+d[b].join("/"):d[b]||""});a.match(/^\/\//)&&(a=(b?"https:":"http:")+a);return a.replace(/\/*\?*($|\?)/,"$1")}window.Typekit||(window.Typekit={});var i=new e(document),j=new function(){this.b=new g},k=!1;
function l(){if(!k)for(var a=document.getElementsByTagName("link"),b=0;b<a.length;b++){var c=a[b].getAttribute("href");if(c&&0<=c.indexOf("use.typekit")){a=j;b=i;a.b&&(c=(c=window.__adobewebfontsappname__)?c.toString().substr(0,20):"",f(h(a.b,"https:"==b.a.location.protocol,{host:encodeURIComponent(b.a.location.hostname),app:encodeURIComponent(c),_:(+new Date).toString()})));k=!0;break}}}var m=window.Typekit.load;window.Typekit.load=function(){m&&m.apply(window.Typekit,arguments);l()};
window.__webfonttypekitmodule__&&l();
})(this,document);