(function(){"use strict";var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(t,r.key,r)}}return function(e,n,r){if(n)t(e.prototype,n);if(r)t(e,r);return e}}();function e(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}(function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:false,exports:{}};t[r].call(i.exports,i,i.exports,n);i.l=true;return i.exports}n.m=t;n.c=e;n.i=function(t){return t};n.d=function(t,e,r){if(!n.o(t,e)){Object.defineProperty(t,e,{configurable:false,enumerable:true,get:r})}};n.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};n.d(e,"a",e);return e};n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};n.p="";return n(n.s=3)})([function(t,e,n){"use strict";n.d(e,"a",function(){return r});n.d(e,"b",function(){return i});n.d(e,"c",function(){return a});n.d(e,"d",function(){return o});var r=function t(){return document.documentElement.clientWidth};var i=function t(){return document.documentElement.clientHeight};var a=function t(e){var n=e.getBoundingClientRect();var r=document.documentElement;var i=window;return{top:n.top+i.pageYOffset-r.clientTop,left:n.left+i.pageXOffset-r.clientLeft}};var o=function t(e,n,r){var i=function t(e){e.target.removeEventListener(n,t);r()};e.addEventListener(n,i)}},function(t,e,n){"use strict";var r=n(2);var i=n(0);n.d(e,"a",function(){return w});var a=null;var o=80;var s=-1;var u=-1;var c=function t(e){e.addEventListener("click",l)};var l=function t(e){if(document.body.classList.contains("zoom-overlay-open")){return}if(e.metaKey||e.ctrlKey){window.open(e.target.getAttribute("data-original")||e.target.src,"_blank");return}if(e.target.width>=n.i(i["a"])()-o){return}d(true);a=new r["a"](e.target,o);a.zoom();f()};var d=function t(e){if(a==null){return}if(e){a.dispose()}else{a.close()}v();a=null};var f=function t(){document.addEventListener("scroll",m);document.addEventListener("keyup",h);document.addEventListener("touchstart",p);document.addEventListener("click",y,true)};var v=function t(){document.removeEventListener("scroll",m);document.removeEventListener("keyup",h);document.removeEventListener("touchstart",p);document.removeEventListener("click",y,true)};var m=function t(){if(s==-1){s=window.pageYOffset}var e=Math.abs(s-window.pageYOffset);if(e>=40){d()}};var h=function t(e){if(e.keyCode==27){d()}};var p=function t(e){var n=e.touches[0];if(n==null){return}u=n.pageY;e.target.addEventListener("touchmove",g)};var g=function t(e){var n=e.touches[0];if(n==null){return}if(Math.abs(n.pageY-u)>10){d();e.target.removeEventListener("touchmove",t)}};var y=function t(){d()};var w=Object.create(null);w.setup=c},function(n,r,i){"use strict";var a=i(0);var o=function t(n,r){e(this,t);this.w=n;this.h=r};var s=function(){function n(t,r){e(this,n);this.img=t;this.preservedTransform=t.style.transform;this.wrap=null;this.caption=null;this.overlay=null;this.offset=r}t(n,[{key:"forceRepaint",value:function t(){var e=this.img.offsetWidth;return}},{key:"zoom",value:function t(){var e=new o(this.img.naturalWidth,this.img.naturalHeight);this.wrap=document.createElement("div");this.wrap.classList.add("zoom-img-wrap");this.img.parentNode.insertBefore(this.wrap,this.img);this.wrap.appendChild(this.img);this.img.classList.add("zoom-img");this.img.setAttribute("data-action","zoom-out");this.overlay=document.createElement("div");this.overlay.classList.add("zoom-overlay");this.caption=document.createElement("span");this.caption.innerHTML=this.img.getAttribute("alt");this.caption.classList.add("zoom-caption");this.overlay.appendChild(this.caption);document.body.appendChild(this.overlay);this.forceRepaint();var n=this.calculateScale(e);this.forceRepaint();this.animate(n);document.body.classList.add("zoom-overlay-open")}},{key:"calculateScale",value:function t(e){var n=e.w/this.img.width;var r=i.i(a["a"])()-this.offset;var o=i.i(a["b"])()-this.offset;var s=e.w/e.h;var u=r/o;if(e.w<r&&e.h<o){return n}else if(s<u){return o/e.h*n}else{return r/e.w*n}}},{key:"animate",value:function t(e){var n=i.i(a["c"])(this.img);var r=window.pageYOffset;var o=i.i(a["a"])()/2;var s=r+i.i(a["b"])()/2;var u=n.left+this.img.width/2;var c=n.top+this.img.height/2;var l=o-u;var d=s-c;var f=0;var v="scale("+e+")";var m="translate3d("+l+"px, "+d+"px, "+f+"px)";this.img.style.transform=v;this.wrap.style.transform=m}},{key:"dispose",value:function t(){if(this.wrap==null||this.wrap.parentNode==null){return}this.img.classList.remove("zoom-img");this.img.setAttribute("data-action","zoom");this.wrap.parentNode.insertBefore(this.img,this.wrap);this.wrap.parentNode.removeChild(this.wrap);document.body.removeChild(this.overlay);document.body.classList.remove("zoom-overlay-transitioning")}},{key:"close",value:function t(){var e=this;document.body.classList.add("zoom-overlay-transitioning");this.img.style.transform=this.preservedTransform;if(this.img.style.length===0){this.img.removeAttribute("style")}this.wrap.style.transform="none";i.i(a["d"])(this.img,"transitionend",function(){e.dispose();document.body.classList.remove("zoom-overlay-open")})}}]);return n}();r["a"]=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});var r=n(1);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll("img[data-action='zoom']");for(var e=0;e<t.length;e++){r["a"].setup(t[e])}})}])})();