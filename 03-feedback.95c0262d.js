function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,f=setTimeout(w,t),c?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function w(){var e=g();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return s?d(n,i-(e-l)):n}(e))}function O(e){return f=void 0,v&&o?b(e):(o=r=void 0,a)}function T(){var e=g(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(w,t),b(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:O(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form")},h={email:"",message:""};(()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.form.elements.email.value=h.email=e.email,b.form.elements.message.value=h.message=e.message)}catch(e){console.log(e.message)}})(),b.form.addEventListener("input",e(t)((e=>{"email"===e.target.name?h.email=e.target.value:h.message=e.target.value;try{localStorage.setItem("feedback-form-state",JSON.stringify(h))}catch(e){console.log(e.message)}}),500)),b.form.addEventListener("submit",(e=>{e.preventDefault(),console.log(h),localStorage.removeItem("feedback-form-state"),b.form.reset(),h.email=h.message=""}));
//# sourceMappingURL=03-feedback.95c0262d.js.map