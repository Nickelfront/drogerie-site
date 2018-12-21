!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.NvSlider=e():t.NvSlider=e()}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";function n(t){var e=document.querySelectorAll(t),i=e.length;return 1==i?e[0]:i>1?e:null}function r(t){return null!=t&&void 0!=t}function o(t,e){return r(t)&&void 0!==t.classList&&t.classList.contains(e)}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e);var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=Object.assign({container:"main",nextBtn:"next",prevBtn:"prev",width:"100%",height:"300px",slices:10,offset:500,speed:60},e),this.images=[],this.bootstrap(),this.currentSlide=void 0,this.promises=[],this.animating=!1}return function(t,e,i){e&&a(t.prototype,e),i&&a(t,i)}(t,[{key:"loadImages",value:function(t){return this.images=s(this.images).concat(s(t)),this}},{key:"ini",value:function(){window.addEventListener("resize",this.reRenderSlider.bind(this)),this.makeSlides()}},{key:"reRenderSlider",value:function(){this.animating=!1,this.container.innerHTML="",this.makeSlides()}},{key:"makeSlides",value:function(){var t=this,e=this.images.length;this.images.forEach(function(i,n){var r=document.createElement("div"),o=e--;r.setAttribute("style","position:absolute;top:0;left:0;width:100%;height:100%;z-index:".concat(o)),r.setAttribute("class","slide");for(var s=t.container.offsetHeight,a=t.container.offsetWidth,c=t.container.offsetWidth/t.options.slices,l=0,d=0;d<t.options.slices;d++){var u=document.createElement("div");u.setAttribute("style","background-image:url(".concat(i,");background-position: ").concat(l,"px 0px;background-size: ").concat(a,"px ").concat(s,"px; background-repeat: no-repeat; width:").concat(c,"px;height:").concat(s,"px;display:inline-block")),r.appendChild(u),l-=c}t.container.appendChild(r),0==n&&(t.currentSlide=r)})}},{key:"bootstrap",value:function(){this.container=n('[data-bi-slider="'.concat(this.options.container,'"]')),this.prevBtn=n('[data-bi-slider="'.concat(this.options.prevBtn,'"]')),this.nextBtn=n('[data-bi-slider="'.concat(this.options.nextBtn,'"]')),this.options.computedSpeed=1e3/this.options.speed,this.validate(),this.setup()}},{key:"validate",value:function(){if(!r(this.container))throw Error(4004,"Element no found")}},{key:"setup",value:function(){this.container.setAttribute("style","display:block; width:".concat(this.options.width,";height:").concat(this.options.height,";position:relative;")),this.prevBtn.addEventListener("click",this.prev.bind(this)),this.nextBtn.addEventListener("click",this.next.bind(this))}},{key:"next",value:function(){var t=this;this.animating||(this.setupSlide("next"),this.animating=!0,this.animate(),Promise.all(this.promises).then(function(e){t._changeSlideTo("next"),t.resetSlideComponents(),t.animating=!1}))}},{key:"prev",value:function(){var t=this;this.animating||(this.setupSlide("prev"),this.animating=!0,this.animate(),Promise.all(this.promises).then(function(e){t._changeSlideTo("prev"),t.resetSlideComponents(),t.animating=!1}))}},{key:"_changeSlideTo",value:function(t){var e="prev"==t?{type:"previousSibling",child:"lastChild"}:{type:"nextElementSibling",child:"firstChild"},i=e.type,n=e.child;this.toBeReseted=this.currentSlide;var r=o(this.currentSlide[i],"slide")?this.currentSlide[i]:this.container[n];r.style.zIndex=2,this.currentSlide.style.zIndex=0,this.currentSlide=r}},{key:"setupSlide",value:function(t){var e="prev"==t?{type:"previousSibling",child:"lastChild"}:{type:"nextElementSibling",child:"firstChild"},i=e.type,n=e.child,r=o(this.currentSlide[i],"slide")?this.currentSlide[i]:this.container[n];this.container.childNodes.forEach(function(t){t.style.zIndex=0}),r.style.zIndex=1,this.currentSlide.style.zIndex=2}},{key:"animate",value:function(){var t=this;this.promises=[];var e=10;this.currentSlide.classList.add("nv-slide-trans"),this.currentSlide.childNodes.forEach(function(i,n){var r,o=new Promise(function(t,e){r=t});i.addEventListener("transitionend",function(){r()}),setTimeout(function(){i.classList.add("nv-slide-rotate")},e),e+=t.options.offset,t.promises.push(o)})}},{key:"resetSlideComponents",value:function(){this.toBeReseted.classList.remove("nv-slide-trans"),this.toBeReseted.childNodes.forEach(function(t){t.classList.remove("nv-slide-rotate")})}}]),t}();e.default=c}]).default});