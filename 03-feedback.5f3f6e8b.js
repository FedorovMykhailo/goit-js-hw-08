!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return s.Date.now()};function p(e,t,n){var r,i,a,f,u,l,c=0,s=!1,m=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function h(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,u=setTimeout(O,t),s?h(e):f}function w(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function O(){var e=v();if(w(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function T(e){return u=void 0,p&&r?h(e):(r=i=void 0,f)}function S(){var e=v(),n=w(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return j(l);if(m)return u=setTimeout(O,t),h(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?d(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},S.flush=function(){return void 0===u?f:T(v())},S}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const h={form:document.querySelector(".feedback-form")},j={email:"",message:""};(()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(h.form.elements.email.value=e.email,h.form.elements.message.value=e.message)}catch(e){console.log(e.message)}})(),h.form.addEventListener("input",e(t)((e=>{"email"===e.target.name?j.email=e.target.value:j.message=e.target.value;try{localStorage.setItem("feedback-form-state",JSON.stringify(j))}catch(e){console.log(e.message)}}),500)),h.form.addEventListener("submit",(e=>{e.preventDefault(),console.log(j),localStorage.removeItem("feedback-form-state"),h.form.reset()}))}();
//# sourceMappingURL=03-feedback.5f3f6e8b.js.map
