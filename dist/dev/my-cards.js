var t={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},e={common:t},i={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},s={common:i};const n={en:Object.freeze({__proto__:null,common:t,default:e}),nb:Object.freeze({__proto__:null,common:i,default:s})};function o(t,e="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],n[s])}catch(e){o=t.split(".").reduce((t,e)=>t[e],n.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],n.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function r(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const a="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,l=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`);class u{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],n=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=n.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)p(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=l[a],i=f.exec(e)[2],s=i.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const o=n.split(d);this.parts.push({type:"attribute",index:r,name:i,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const s=t.parentNode,n=e.split(d),o=n.length-1;for(let e=0;e<o;e++){let i,o=n[e];if(""===o)i=g();else{const t=f.exec(o);null!==t&&p(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(o)}s.insertBefore(i,t),this.parts.push({type:"node",index:++r})}""===n[o]?(s.insertBefore(g(),t),i.push(t)):t.data=n[o],a+=o}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(g(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(i.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const p=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},m=t=>-1!==t.index,g=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function v(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let o=_(s),r=s[o],a=-1,l=0;const c=[];let h=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==r&&r.index===a;)r.index=null!==h?-1:r.index-l,o=_(s,o),r=s[o]}c.forEach(t=>t.parentNode.removeChild(t))}const y=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},_=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(m(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const b=new WeakMap,w=t=>(...e)=>{const i=t(...e);return b.set(i,!0),i},S=t=>"function"==typeof t&&b.has(t),x={},C={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class ${constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let n,o=0,r=0,l=s.nextNode();for(;o<i.length;)if(n=i[o],m(n)){for(;r<n.index;)r++,"TEMPLATE"===l.nodeName&&(e.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=e.pop(),l=s.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return a&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),k=` ${c} `;class M{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const o=f.exec(t);e+=null===o?t+(i?k:h):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+c}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==T&&(e=T.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const E=t=>null===t||!("object"==typeof t||"function"==typeof t),P=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class N{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new O(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!P(t))return t}let s="";for(let n=0;n<e;n++){s+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(E(t)||!P(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class O{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===x||E(t)&&t===this.value||(this.value=t,S(t)||(this.committer.dirty=!0))}commit(){for(;S(this.value);){const t=this.value;this.value=x,t(this)}this.value!==x&&this.committer.commit()}}class A{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=g()),t.__insert(this.endNode=g())}insertAfterPart(t){t.__insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;S(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}const t=this.__pendingValue;t!==x&&(E(t)?t!==this.value&&this.__commitText(t):t instanceof M?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):P(t)?this.__commitIterable(t):t===C?(this.value=C,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof $&&this.value.template===e)this.value.update(t.values);else{const i=new $(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new A(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){l(this.startNode.parentNode,t.nextSibling,this.endNode)}}class V{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;S(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}if(this.__pendingValue===x)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=x}}class j extends N{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new D(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class D extends O{}let H=!1;(()=>{try{const t={get capture(){return H=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class L{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;S(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}if(this.__pendingValue===x)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=Y(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=x}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Y=t=>t&&(H?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function I(t){let e=R.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},R.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(c);return i=e.keyString.get(s),void 0===i&&(i=new u(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const R=new Map,U=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new j(t,e.slice(1),i).parts}if("@"===n)return[new L(t,e.slice(1),s.eventContext)];if("?"===n)return[new V(t,e.slice(1),i)];return new N(t,e,i).parts}handleTextExpression(t){return new A(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const F=(t,...e)=>new M(t,e,"html",z)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,B=(t,e)=>`${t}--${e}`;let W=!0;void 0===window.ShadyCSS?W=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),W=!1);const q=t=>e=>{const i=B(e.type,t);let s=R.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},R.set(i,s));let n=s.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(c);if(n=s.keyString.get(o),void 0===n){const i=e.getTemplateElement();W&&window.ShadyCSS.prepareTemplateDom(i,t),n=new u(e,i),s.keyString.set(o,n)}return s.stringsArray.set(e.strings,n),n},J=["html","svg"],Z=new Set,X=(t,e,i)=>{Z.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{J.forEach(e=>{const i=R.get(B(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),v(t,i)})})})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const o=document.createTreeWalker(s,133,null,!1);let r=_(n),a=0,l=-1;for(;o.nextNode();){l++;for(o.currentNode===i&&(a=y(e),i.parentNode.insertBefore(e,i));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=_(n,r);return}r=_(n,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),v(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const G={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},K=(t,e)=>e!==t&&(e==e||t==t),Q={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:K};class tt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Q){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Q}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=K){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||G,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||G.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Q){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}tt.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)}function nt(t){return st({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}const ot=t=>nt(t)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,rt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol();class lt{constructor(t,e){if(e!==at)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(rt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ct=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof lt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new lt(i,at)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ht={};class dt extends tt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!rt){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new lt(String(e),at)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?rt?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ht&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return ht}}dt.finalized=!0,dt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,n=U.has(e),o=W&&11===e.nodeType&&!!e.host,r=o&&!Z.has(s),a=r?document.createDocumentFragment():e;if(((t,e,i)=>{let s=U.get(e);void 0===s&&(l(e,e.firstChild),U.set(e,s=new A(Object.assign({templateFactory:I},i))),s.appendInto(e)),s.setValue(t),s.commit()})(t,a,Object.assign({templateFactory:q(s)},i)),r){const t=U.get(a);U.delete(a);const i=t.value instanceof $?t.value.template:void 0;X(s,a,i),l(e,e.firstChild),e.appendChild(a),U.set(e,t)}!n&&o&&window.ShadyCSS.styleElement(e.host)},dt.shadowRootOptions={mode:"open"};var ut=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,pt="[^\\s]+",mt=/\[([^]*?)\]/gm;function gt(t,e){for(var i=[],s=0,n=t.length;s<n;s++)i.push(t[s].substr(0,e));return i}var ft=function(t){return function(e,i){var s=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return s>-1?s:null}};function vt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var s=0,n=e;s<n.length;s++){var o=n[s];for(var r in o)t[r]=o[r]}return t}var yt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],_t=["January","February","March","April","May","June","July","August","September","October","November","December"],bt=gt(_t,3),wt={dayNamesShort:gt(yt,3),dayNames:yt,monthNamesShort:bt,monthNames:_t,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},St=vt({},wt),xt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},Ct={D:function(t){return String(t.getDate())},DD:function(t){return xt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return xt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return xt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return xt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return xt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return xt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return xt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return xt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return xt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return xt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return xt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+xt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+xt(Math.floor(Math.abs(e)/60),2)+":"+xt(Math.abs(e)%60,2)}},$t=function(t){return+t-1},Tt=[null,"[1-9]\\d?"],kt=[null,pt],Mt=["isPm",pt,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],Et=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],Pt=(ft("monthNamesShort"),ft("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Nt,Ot,At=function(t,e,i){if(void 0===e&&(e=Pt.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var s=[];e=(e=Pt[e]||e).replace(mt,(function(t,e){return s.push(e),"@@@"}));var n=vt(vt({},St),i);return(e=e.replace(ut,(function(e){return Ct[e](t,n)}))).replace(/@@@/g,(function(){return s.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();function Vt(){return(Vt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}(Ot=Nt||(Nt={})).language="language",Ot.system="system",Ot.comma_decimal="comma_decimal",Ot.decimal_comma="decimal_comma",Ot.space_comma="space_comma",Ot.none="none";var jt=["closed","locked","off"],Dt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n},Ht=function(t){Dt(window,"haptic",t)},Lt=function(t,e,i,s,n){var o;if(n&&i.double_tap_action?o=i.double_tap_action:s&&i.hold_action?o=i.hold_action:!s&&i.tap_action&&(o=i.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?"))switch(o.action){case"more-info":(o.entity||i.entity||i.camera_image)&&(Dt(t,"hass-more-info",{entityId:o.entity?o.entity:i.entity?i.entity:i.camera_image}),o.haptic&&Ht(o.haptic));break;case"navigate":o.navigation_path&&(function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Dt(window,"location-changed",{replace:i})}(0,o.navigation_path),o.haptic&&Ht(o.haptic));break;case"url":o.url_path&&window.open(o.url_path),o.haptic&&Ht(o.haptic);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var s,n=function(t){return t.substr(0,t.indexOf("."))}(e),o="group"===n?"homeassistant":n;switch(n){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}t.callService(o,s,{entity_id:e})})(t,e,jt.includes(t.states[e].state))}(e,i.entity),o.haptic&&Ht(o.haptic));break;case"call-service":if(!o.service)return;var r=o.service.split(".",2),a=r[0],l=r[1],c=Vt({},o.service_data);"entity"===c.entity_id&&(c.entity_id=i.entity),e.callService(a,l,c),o.haptic&&Ht(o.haptic);break;case"fire-dom-event":Dt(t,"ll-custom",o),o.haptic&&Ht(o.haptic)}};function Yt(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}var It=!1;if("undefined"!=typeof window){var Rt={get passive(){It=!0}};window.addEventListener("testPassive",null,Rt),window.removeEventListener("testPassive",null,Rt)}var Ut="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),zt=[],Ft=!1,Bt=-1,Wt=void 0,qt=void 0,Jt=void 0,Zt=function(t){return zt.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},Xt=function(t){var e=t||window.event;return!!Zt(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},Gt=function(t,e){if(t){if(!zt.some((function(e){return e.targetElement===t}))){var i={targetElement:t,options:e||{}};zt=[].concat(function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}(zt),[i]),Ut?window.requestAnimationFrame((function(){if(void 0===qt){qt={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,e=t.scrollY,i=t.scrollX,s=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-e,document.body.style.left=-i,setTimeout((function(){return window.requestAnimationFrame((function(){var t=s-window.innerHeight;t&&e>=s&&(document.body.style.top=-(e+t))}))}),300)}})):function(t){if(void 0===Jt){var e=!!t&&!0===t.reserveScrollBarGap,i=window.innerWidth-document.documentElement.clientWidth;if(e&&i>0){var s=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Jt=document.body.style.paddingRight,document.body.style.paddingRight=s+i+"px"}}void 0===Wt&&(Wt=document.body.style.overflow,document.body.style.overflow="hidden")}(e),Ut&&(t.ontouchstart=function(t){1===t.targetTouches.length&&(Bt=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(t,e){var i=t.targetTouches[0].clientY-Bt;!Zt(t.target)&&(e&&0===e.scrollTop&&i>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&i<0?Xt(t):t.stopPropagation())}(e,t)},Ft||(document.addEventListener("touchmove",Xt,It?{passive:!1}:void 0),Ft=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},Kt=function(t){t?(zt=zt.filter((function(e){return e.targetElement!==t})),Ut&&(t.ontouchstart=null,t.ontouchmove=null,Ft&&0===zt.length&&(document.removeEventListener("touchmove",Xt,It?{passive:!1}:void 0),Ft=!1)),Ut?function(){if(void 0!==qt){var t=-parseInt(document.body.style.top,10),e=-parseInt(document.body.style.left,10);document.body.style.position=qt.position,document.body.style.top=qt.top,document.body.style.left=qt.left,window.scrollTo(e,t),qt=void 0}}():(void 0!==Jt&&(document.body.style.paddingRight=Jt,Jt=void 0),void 0!==Wt&&(document.body.style.overflow=Wt,Wt=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};console.info(`%c  ---- MY-SLIDER ---- \n%c  ${o("common.version")} 3.0.3    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: green"),window.customCards=window.customCards||[],window.customCards.push({type:"my-slider",name:"Slider Card",description:"Custom Slider Card for Lovelace."});let Qt=class extends dt{static getStubConfig(){return{}}static get properties(){return{hass:{},config:{},active:{}}}setConfig(t){const e=["input_number","number","light","media_player","cover","fan","switch","lock"];if(!t.entity)throw new Error("You need to define entity");if(!e.includes(t.entity.split(".")[0]))throw new Error("Entity has to be one of the following: "+e.map(t=>" "+t));this.config=Object.assign({name:"MySlider",disabled_scroll:!1},t)}shouldUpdate(t){return!!this.config&&Yt(this,t,!1)}render(){var t,e=JSON.parse(JSON.stringify(this.config));const i=this.config.entity?this.config.entity:"ERROR: NO ENTITY ID",s=(null===(t=this.config.entity)||void 0===t||t.split(".")[1],this.hass.states[""+i]);var n=e.step?e.step:"1",o=e.minBar?e.minBar:0,r=e.maxBar?e.maxBar:100,a=e.minSet?e.minSet:0,l=e.maxSet?e.maxSet:100;(i.includes("input_number.")||i.includes("number."))&&(n=e.step?e.step:s.attributes.step,a=e.minSet?e.minSet:s.attributes.min,l=e.maxSet?e.maxSet:s.attributes.max);var c=e.width?e.width:"100%",h=e.height?e.height:"50px",d=e.radius?e.radius:"4px",u=e.top?e.top:"0px",p=e.bottom?e.bottom:"0px",m=e.right?e.right:"0px",g=e.left?e.left:"0px",f=e.rotate?e.rotate:"0",v=e.containerHeight?e.containerHeight:h;"0"!=f&&(f+="deg");var y=e.mainSliderColor?e.mainSliderColor:"var(--accent-color)",_=e.secondarySliderColor?e.secondarySliderColor:"#4d4d4d",b=e.mainSliderColorOff?e.mainSliderColorOff:"#636363",w=e.secondarySliderColorOff?e.secondarySliderColorOff:"#4d4d4d",S=e.border?e.border:"0",x=e.thumbWidth?e.thumbWidth:"25px",C=e.thumbHeight?e.thumbHeight:"80px",$=e.thumbColor?e.thumbColor:"#FFFFFF",T=e.thumbColorOff?e.thumbColorOff:"#969696",k=e.thumbHorizontalPadding?e.thumbHorizontalPadding:"10px",M=e.thumbVerticalPadding?e.thumbVerticalPadding:"20px",E=e.thumpTop?e.thumpTop:"calc((var(--slider-width) - var(--thumb-height)) / 2)",P=e.thumbBorderRight?e.thumbBorderRight:"var(--thumb-horizontal-padding) solid var(--slider-main-color)",N=e.thumbBorderLeft?e.thumbBorderLeft:"var(--thumb-horizontal-padding) solid var(--slider-main-color)",O=e.thumbBorderTop?e.thumbBorderTop:"var(--thumb-vertical-padding) solid var(--slider-main-color)",A=e.thumbBorderBotton?e.thumbBorderBotton:"var(--thumb-vertical-padding) solid var(--slider-main-color)",V=!!e.lockTrack&&e.lockTrack,j=`\n\t\t\t--slider-width: ${c};\n\t\t\t--slider-width-inverse: -${c};\n\t\t\t--slider-height: ${h};\n\t\t\t--slider-main-color: ${"off"===s.state||"locked"===s.state||null==s.state?"var(--slider-main-color-off)":"var(--slider-main-color-on)"};\n\t\t\t--slider-main-color-on: ${y};\n\t\t\t--slider-main-color-off: ${b};\n\t\t\t--slider-secondary-color: ${"off"===s.state||"locked"===s.state||null==s.state?"var(--slider-secondary-color-off)":"var(--slider-secondary-color-on)"};\n\t\t\t--slider-secondary-color-on: ${_};\n\t\t\t--slider-secondary-color-off: ${w};\n\t\t\t--slider-radius: ${d};\n\t\t\t--border: ${S};\n\n\t\t\t--thumb-width: ${x};\n\t\t\t--thumb-height: ${C};\n\t\t\t--thumb-color: ${"off"===s.state||null==s.state?"var(--thumb-color-off)":"var(--thumb-color-on)"};\n\t\t\t--thumb-color-on: ${$};\n\t\t\t--thumb-color-off: ${T};\n\t\t\t--thumb-horizontal-padding: ${k};\n\t\t\t--thumb-vertical-padding: ${M};\n\n\t\t\t--rotate: ${f};\n\t\t\t--top: ${u};\n\t\t\t--bottom: ${p};\n\t\t\t--right: ${m};\n\t\t\t--left: ${g};\n\t\t\t--container-height: ${v};\n\t\t\t--thumb-top: ${E};\n\t\t\t--thumb-border-right: ${P};\n\t\t\t--thumb-border-left: ${N};\n\t\t\t--thumb-border-top: ${O};\n\t\t\t--thumb-border-bottom: ${A};\n\t\t\t\n\t\t\t--lock-track-container: ${V?"none":"auto"};\n\t\t`;const D=t=>{i.includes("light.")?"Warmth"==e.function?this._setWarmth(s,t.target,a,l):this._setBrightness(s,t.target,a,l):i.includes("input_number.")||i.includes("number.")?this._setInputNumber(s,t.target,a,l):i.includes("media_player.")?this._setMediaVolume(s,t.target,a,l):i.includes("cover.")?this._setCover(s,t.target,a,l):i.includes("fan.")?this._setFan(s,t.target,a,l):i.includes("switch.")?this._setSwitch(s,t.target,a,l,o,r):i.includes("lock.")&&this._setLock(s,t.target,a,l,o,r)},H=t=>{e.intermediate&&D(t)},L=t=>{e.intermediate||D(t)},Y=()=>{this.config.disabled_scroll=!this.config.disabled_scroll,this.config.disabled_scroll?Gt(window):Kt(window)};if(i.includes("light."))return"Warmth"==e.function?F`
					<ha-card>
						<div class="slider-container" style="${j}">
							<input name="foo" type="range" class="${s.state}" style="${j}"
								min="${s.attributes.min_mireds}" max="${s.attributes.max_mireds}"
								step="${n}" .value="${"off"===s.state?0:s.attributes.color_temp}"
								@input=${H} @change=${L}
								@touchstart=${e.toggle_scroll?Y:null}
								@touchend=${e.toggle_scroll?Y:null} >
						</div>
					</ha-card>
				`:F`
					<ha-card>
						<div class="slider-container" style="${j}">
							<input name="foo" type="range" class="${s.state}" style="${j}"
								step="${n}" .value="${"off"===s.state?0:Math.round(s.attributes.brightness/2.56)}"
								@input=${H} @change=${L}
								@touchstart=${e.toggle_scroll?Y:null}
								@touchend=${e.toggle_scroll?Y:null} >
						</div>
					</ha-card>
				`;if(i.includes("input_number.")||i.includes("number."))return F`
				<ha-card>
					<div class="slider-container" style="${j}">
						<input name="foo" type="range" class="${s.state}" style="${j}"
							min="${a}" max="${l}"
							step="${n}" .value="${s.state}"
							@input=${H} @change=${L}
							@touchstart=${e.toggle_scroll?Y:null}
							@touchend=${e.toggle_scroll?Y:null} >
					</div>
				</ha-card>
			`;if(i.includes("media_player.")){var I=0;if(null!=s.attributes.volume_level)I=Number(100*s.attributes.volume_level);return F`
				<ha-card>
					<div class="slider-container" style="${j}">
						<input name="foo" type="range" class="${s.state}" style="${j}"
							min="${o}" max="${r}" step="${n}" .value="${I}"
							@input=${H} @change=${L}
							@touchstart=${e.toggle_scroll?Y:null}
							@touchend=${e.toggle_scroll?Y:null} >
					</div>
				</ha-card>
			`}return i.includes("cover.")?F`
				<ha-card>
					<div class="slider-container" style="${j}">
						<input name="foo" type="range" class="${s.state}" style="${j}"
							min="${o}" max="${r}" step="${n}"
							.value="${s.attributes.current_position}"
							@input=${H} @change=${L}
							@touchstart=${e.toggle_scroll?Y:null}
							@touchend=${e.toggle_scroll?Y:null} >
					</div>
				</ha-card>
			`:i.includes("fan.")?F`
				<ha-card>
					<div class="slider-container" style="${j}">
						<input name="foo" type="range" class="${s.state}" style="${j}"
							min="${o}" max="${r}" step="${n}"
							.value="${s.attributes.percentage}"
							@input=${H} @change=${L}
							@touchstart=${e.toggle_scroll?Y:null}
							@touchend=${e.toggle_scroll?Y:null} >
					</div>
				</ha-card>
			`:i.includes("switch.")||i.includes("lock.")?F`
				<ha-card>
					<div class="slider-container" style="${j}">
						<input name="foo" type="range" class="${s.state}" style="${j}"
							min="${o}" max="${r}" step="${n}" .value="${o}"
							@input=${H} @change=${L}
							@touchstart=${e.toggle_scroll?Y:null}
							@touchend=${e.toggle_scroll?Y:null} >
					</div>
				</ha-card>
			`:void 0}_setBrightness(t,e,i,s){var n=e.value;n>s?n=s:n<i&&(n=i),this.hass.callService("homeassistant","turn_on",{entity_id:t.entity_id,brightness:2.56*n}),e.value=n}_setWarmth(t,e,i,s){var n=e.value;n>s?n=s:n<i&&(n=i),this.hass.callService("homeassistant","turn_on",{entity_id:t.entity_id,color_temp:n}),e.value=n}_setInputNumber(t,e,i,s){var n=e.value;n>s?n=s:n<i&&(n=i),t.entity_id.includes("input_number.")?this.hass.callService("input_number","set_value",{entity_id:t.entity_id,value:n}):t.entity_id.includes("number.")&&this.hass.callService("number","set_value",{entity_id:t.entity_id,value:n}),e.value=n}_setFan(t,e,i,s){var n=e.value;n>s?n=s:n<i&&(n=i),this.hass.callService("fan","set_percentage",{entity_id:t.entity_id,percentage:n}),e.value=n}_setCover(t,e,i,s){var n=e.value;n>s?n=s:n<i&&(n=i),this.hass.callService("cover","set_cover_position",{entity_id:t.entity_id,position:n}),e.value=n}_setMediaVolume(t,e,i,s){var n=e.value;n>s?n=s:n<i&&(n=i),this.hass.callService("media_player","volume_set",{entity_id:t.entity_id,volume_level:n/100}),e.value=n}_setSwitch(t,e,i,s,n,o){var r=e.value,a=Math.min(s,o);Number(a)<=r&&this.hass.callService("homeassistant","toggle",{entity_id:t.entity_id}),e.value=Number(Math.max(i,n))}_setLock(t,e,i,s,n,o){var r=e.value,a=Math.min(s,o);if(Number(a)<=r){var l="locked"===t.state?"unlock":"lock";this.hass.callService("lock",l,{entity_id:t.entity_id})}e.value=Number(Math.max(i,n))}static get styles(){return ct`
			.slider-container {
				height: var(--container-height);
				position: relative;
				overflow: hidden;
				border-radius: var(--slider-radius);
			}

			.slider-container input[type="range"] {
				outline: 0;
				border: var(--border);
				width: var(--slider-width);
				height: var(--slider-height);
				border-radius: var(--slider-radius);
				background-color: var(--slider-secondary-color); /*Remaining Slider color*/
				margin: 0;
				transition: box-shadow 0.2s ease-in-out;
				overflow: hidden;
				-webkit-appearance: none;
				position: absolute;
				top: var(--top);
				bottom: var(--bottom);
				right: var(--right);
				left: var(--left);
				-webkit-transform: rotate(var(--rotate));
				-moz-transform: rotate(var(--rotate));
				-o-transform: rotate(var(--rotate));
				-ms-transform: rotate(var(--rotate));
				transform: rotate(var(--rotate));
				pointer-events: var(--lock-track-container);
			}

			.slider-container input[type="range"]::-webkit-slider-runnable-track {
				height: var(--slider-height);
				-webkit-appearance: none;
				color: var(--slider-main-color);
				transition: box-shadow 0.2s ease-in-out;
			}

			.slider-container input[type="range"]::-webkit-slider-thumb {
				width: var(--thumb-width);
				height: var(--thumb-height);
				-webkit-appearance: none;
				cursor: ew-resize;
				border-radius: 0;
				transition: box-shadow 0.2s ease-in-out;
				position: relative;

				box-shadow: -3500px 0 0 3500px var(--slider-main-color), inset 0 0 0 25px var(--thumb-color);

				top: var(--thumb-top);
				border-right: var(--thumb-border-right);
				border-left: var(--thumb-border-left);
				border-top: var(--thumb-border-top);
				border-bottom: var(--thumb-border-bottom);
				pointer-events: auto;
			}

			.slider-container input[type=range]::-moz-range-thumb {
			  width: calc(var(--thumb-width) / 4);
			  height: calc(var(--thumb-height) / 2);
			  box-shadow: -3500px 10px 0 3500px var(--slider-main-color), inset 0 0 0 25px var(--thumb-color);
			  top: var(--thumb-top);
			  cursor: ew-resize;
			  border-radius: 0;
			  transition: box-shadow 0.2s ease-in-out;
			  position: relative;
			  border-radius: 0;
			  border-right: var(--thumb-border-right);
			  border-left: var(--thumb-border-left);
			  border-top: var(--thumb-border-top);
			  border-bottom: var(--thumb-border-bottom);
			  pointer-events: auto;
			}

			.slider-container input[type="range"]::-webkit-slider-thumb:hover {
				cursor: default;
			}

			.slider-container input[type="range"]:hover {
			  cursor: default;
			}
		`}};r([st({attribute:!1})],Qt.prototype,"hass",void 0),r([nt()],Qt.prototype,"config",void 0),Qt=r([et("my-slider")],Qt);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const te=new WeakMap,ee=w(t=>e=>{if(!(e instanceof O)||e instanceof D||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:s}=i.element;let n=te.get(e);void 0===n&&(s.cssText=i.strings.join(" "),te.set(e,n=new Set)),n.forEach(e=>{e in t||(n.delete(e),-1===e.indexOf("-")?s[e]=null:s.removeProperty(e))});for(const e in t)n.add(e),-1===e.indexOf("-")?s[e]=t[e]:s.setProperty(e,t[e])}),ie=(t,e={})=>{switch(t){case"card":return se(e);case"container":return ne(e);case"track":return oe(e);case"progress":return re(e);case"thumb":return ae(e);default:return void console.log("Getting default styles")}},se=t=>Object.assign({height:"30px"},t),ne=t=>Object.assign({width:"100%",height:"100%",position:"relative",overflow:"hidden","border-radius":"5px"},t),oe=t=>Object.assign({width:"100%",height:"100%",position:"relative",background:"var(--card-background-color)"},t),re=t=>Object.assign({height:"100%",background:"var(--paper-item-icon-active-color)",position:"absolute",width:"0.00%"},t),ae=t=>Object.assign({height:"100%",background:"black",position:"absolute",right:"-5px",width:"10px"},t),le=function(t,e,i){var s,n;for(var o in e=void 0===e?[]:e,i=void 0===i?{}:i,t)t.hasOwnProperty(o)&&(s=o,n=t[o],e.push(s),"object"==typeof n&&null!==n?i=le(n,e,i):i[e[e.length-1]]=n,e.pop());return i},ce=(t,e=100,i=0)=>t/(e-i)*100,he=t=>Math.round(100*(t+Number.EPSILON))/100;console.info(`%c  ---- MY-SLIDER-V2 ---- \n%c  ${o("common.version")} 3.0.3    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: green"),window.customCards=window.customCards||[],window.customCards.push({type:"my-slider-v2",name:"Slider Card V2",description:"Custom Slider Card V2 for Lovelace."});let de=class extends dt{constructor(){super(...arguments),this.colorMode="brightness",this.coverMode="position",this.sliderId="",this.touchInput=!1,this.disableScroll=!0,this.allowTapping=!0,this.thumbTapped=!1,this.actionTaken=!1,this.vertical=!1,this.flipped=!1,this.inverse=!1,this.showMin=!1,this.zero=0,this.savedMin=1,this.min=0,this.max=100,this.minThreshold=0,this.maxThreshold=100,this.step=1,this.sliderVal=0,this.sliderValPercent=0}setSliderValues(t,e){this.inverse?(this.sliderVal=this.max-t,this.sliderValPercent=100-e):(this.sliderVal=t,this.sliderValPercent=e)}static getStubConfig(){return{}}static get properties(){return{hass:{},config:{},active:{}}}setConfig(t){const e=["light","input_number","number","media_player","cover","fan","switch","lock"];if(!t.entity)throw new Error("You need to define entity");if(!e.includes(t.entity.split(".")[0]))throw new Error("Entity has to be one of the following: "+e.map(t=>" "+t));this.config=Object.assign({name:"MySliderV2"},t)}shouldUpdate(t){return!!this.config&&Yt(this,t,!1)}render(){var t,e,i,s,n,o,r,a,l,c;const h=this.initializeConfig();if(null!==h)return h;const d=le(null===(t=this._config.styles)||void 0===t?void 0:t.card)?le(null===(e=this._config.styles)||void 0===e?void 0:e.card):{},u=le(null===(i=this._config.styles)||void 0===i?void 0:i.container)?le(null===(s=this._config.styles)||void 0===s?void 0:s.container):{},p=le(null===(n=this._config.styles)||void 0===n?void 0:n.track)?le(null===(o=this._config.styles)||void 0===o?void 0:o.track):{},m=le(null===(r=this._config.styles)||void 0===r?void 0:r.progress)?le(null===(a=this._config.styles)||void 0===a?void 0:a.progress):{},g=le(null===(l=this._config.styles)||void 0===l?void 0:l.thumb)?le(null===(c=this._config.styles)||void 0===c?void 0:c.thumb):{},f=ie("card",d),v=ie("container",u),y=ie("track",p),_=ie("progress",m),b=ie("thumb",g);this.vertical?(_.height=this.sliderValPercent.toString()+"%",f.height=d.height?d.height:"100%",f.width=d.width?d.width:"30px",_.width=m.width?m.width:"100%",_.right=m.right?m.right:"auto",b.right=g.right?g:"auto",b.width=g.width?g.width:"100%",b.height=g.height?g.height:"10px",this.flipped?(_.top=m.top?m.top:"0",b.bottom=g.bottom?g.bottom:"-5px"):(_.bottom=m.bottom?m.bottom:"0",b.top=g.top?g.top:"-5px")):(_.width=this.sliderValPercent.toString()+"%",this.flipped&&(_.right=m.right?m.right:"0",b.right=g.right?g.right:"auto",b.left=g.left?g.left:"-5px"));const w=t=>{const e=t.composedPath().find(t=>t.classList.contains("my-slider-custom-container"));this.sliderEl=e||t.target},S=t=>{switch(t.type){case"mousedown":if(this.touchInput)return;x(t);break;case"touchstart":this.touchInput=!0,x(t);break;case"mousemove":if(this.touchInput)return;$(t);break;case"touchmove":this.disableScroll&&t.preventDefault(),$(t);break;case"mouseup":case"touchend":case"touchcancel":C(t)}},x=t=>{this.actionTaken||(w(t),this.allowTapping?(this.actionTaken=!0,this.calcProgress(t)):t.path[0].classList.contains("my-slider-custom-thumb")&&(this.thumbTapped=!0,this.actionTaken=!0,this.calcProgress(t)))},C=t=>{this.actionTaken&&((this.allowTapping||this.thumbTapped)&&this.calcProgress(t),this.thumbTapped=!1,this.actionTaken=!1,this.touchInput=!1)},$=t=>{this.actionTaken&&this.calcProgress(t)};return this.createAndCleanupEventListeners(S),F`
            <ha-card class="my-slider-custom-card" style="${ee(f)}">
                <div class="my-slider-custom-container" id="${this.sliderId}" style="${ee(v)}" data-value="${this.sliderVal}" data-progress-percent="${this.sliderValPercent}"
                    @mousedown="${S}"
                    @mouseup="${S}"
                    @mousemove="${S}"
                    @touchstart="${S}"
                    @touchend="${S}"
                    @touchcancel="${S}" 
                    @touchmove="${S}"
                >
                    <div class="my-slider-custom-track" style="${ee(y)}">
                        <div class="my-slider-custom-progress" style="${ee(_)}">
                            <div class="my-slider-custom-thumb" style="${ee(b)}"></div>
                        </div>
                    </div>
                </div>
            </ha-card>
        `}initializeConfig(){this.entity=this.hass.states[""+this.config.entity];try{this._config=this._objectEvalTemplate(this.entity,this.config)}catch(t){if(t instanceof Error){t.stack?console.error(t.stack):console.error(t);const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t.toString(),origConfig:this.config}),e}console.log("Unexpected error evaluating config on init:",t)}this.sliderId="slider-"+this._config.entity.replace(".","-"),this.colorMode=void 0!==this._config.colorMode?this._config.colorMode:"brightness",this.coverMode=void 0!==this._config.coverMode?this._config.coverMode:"position",this.vertical=void 0!==this._config.vertical&&this._config.vertical,this.flipped=void 0!==this._config.flipped&&this._config.flipped,this.inverse=void 0!==this._config.inverse&&this._config.inverse,this.disableScroll=void 0===this._config.disableScroll||this._config.disableScroll,this.allowTapping=void 0===this._config.allowTapping||this._config.allowTapping,this.showMin=void 0!==this._config.showMin&&this._config.showMin,this.min=this._config.min?this._config.min:0,this.max=this._config.max?this._config.max:100,this.minThreshold=this._config.minThreshold?this._config.minThreshold:0,this.maxThreshold=this._config.maxThreshold?this._config.maxThreshold:100,this.step=this._config.step?this._config.step:1;let t=0;switch(this._config.entity.split(".")[0]){case"light":if("brightness"===this.colorMode)"on"===this.entity.state?(t=Math.round(this.entity.attributes.brightness/2.56),this.showMin||(t-=this.min)):t=0;else if("temperature"===this.colorMode){if("on"!==this.entity.state)break;this.min=this._config.min?this._config.min:this.entity.attributes.min_mireds,this.max=this._config.max?this._config.max:this.entity.attributes.max_mireds,t=parseFloat(this.entity.attributes.color_temp),this.showMin||(this.max=this.max-this.min,t-=this.min)}else if("hue"===this.colorMode&&"hs"===this.entity.attributes.color_mode){if("on"!==this.entity.state)break;this.min=this._config.min?this._config.min:0,this.max=this._config.max?this._config.max:360,t=parseFloat(this.entity.attributes.hs_color[0]),this.showMin||(this.max=this.max-this.min,t-=this.min)}else if("saturation"===this.colorMode&&"hs"===this.entity.attributes.color_mode){if("on"!==this.entity.state)break;this.min=this._config.min?this._config.min:0,this.max=this._config.max?this._config.max:100,t=parseFloat(this.entity.attributes.hs_color[1]),this.showMin||(this.max=this.max-this.min,t-=this.min)}this.setSliderValues(t,he(ce(t,this.max)));break;case"input_number":case"number":this.step=this._config.step?this._config.step:this.entity.attributes.step,this.min=this._config.min?this._config.min:this.entity.attributes.min,this.max=this._config.max?this._config.max:this.entity.attributes.max,t=parseFloat(this.entity.state),this.showMin||(this.max=this.max-this.min,t-=this.min),this.setSliderValues(t,he(ce(t,this.max)));break;case"media_player":t=0,null!=this.entity.attributes.volume_level&&(t=Number(100*this.entity.attributes.volume_level)),this.showMin||(this.max=this.max-this.min,t-=this.min),this.setSliderValues(t,he(ce(t,this.max)));break;case"cover":t=0,"position"===this.coverMode?null!=this.entity.attributes.current_position&&(t=Number(this.entity.attributes.current_position)):"tilt"===this.coverMode&&null!=this.entity.attributes.current_tilt_position&&(t=Number(this.entity.attributes.current_tilt_position)),this.showMin||(this.max=this.max-this.min,t-=this.min),this.inverse=void 0===this._config.inverse||this._config.inverse,this.vertical=void 0===this._config.vertical||this._config.vertical,this.flipped=void 0===this._config.flipped||this._config.flipped,this.setSliderValues(t,he(ce(t,this.max)));break;case"fan":t=0,null!=this.entity.attributes.percentage&&(t=Number(this.entity.attributes.percentage)),this.showMin||(this.max=this.max-this.min,t-=this.min),this.setSliderValues(t,he(ce(t,this.max)));break;case"switch":case"lock":this.minThreshold=this._config.minThreshold?this._config.minThreshold:15,this.maxThreshold=this._config.maxThreshold?this._config.maxThreshold:75,t=Number(Math.max(this.zero,this.minThreshold)),this.setSliderValues(t,t);break;default:console.log("No Entity type initiated... ("+this._config.entity.split(".")[0]+")")}return null}calcProgress(t){if(null==this.sliderEl||null===this.sliderEl)return;const e=((t,e)=>{let i={x:0,y:0};if("touchstart"==t.type||"touchmove"==t.type||"touchend"==t.type||"touchcancel"==t.type){let e=void 0===t.originalEvent?t:t.originalEvent,s=e.touches[0]||e.changedTouches[0];i.x=s.clientX,i.y=s.clientY}else"mousedown"!=t.type&&"mouseup"!=t.type&&"mousemove"!=t.type&&"mouseover"!=t.type&&"mouseout"!=t.type&&"mouseenter"!=t.type&&"mouseleave"!=t.type||(i.x=t.clientX,i.y=t.clientY);let s=e.getBoundingClientRect(),n=i.x-s.left,o=i.y-s.top;return o=e.offsetHeight-o,{x:n,y:o}})(t,this.sliderEl),i=this.sliderEl.offsetWidth,s=this.sliderEl.offsetHeight,n=(this.vertical?he(e.y/s*100):he(e.x/i*100))/100*(this.max-0),o=this.max-n;let r=this.flipped?Math.round(o):Math.round(n);r=r<this.min&&this.showMin?this.min:r>this.max?this.max:r<this.zero?this.zero:r,this.setProgress(this.sliderEl,Math.round(r),t.type)}setProgress(t,e,i){const s=t.querySelector(".my-slider-custom-progress"),n=he(ce(e,this.max));this.vertical?s.style.height=n.toString()+"%":s.style.width=n.toString()+"%",this.sliderVal!==e&&((!this._config.intermediate||"mousemove"!==i&&"touchmove"!==i)&&(this._config.intermediate||"mouseup"!==i&&"touchend"!==i&&"touchcancel"!==i)||this.setValue(e,n))}setValue(t,e){if(this.entity&&(this.setSliderValues(t,e),this.showMin||(t+=this.min),this.inverse&&(t=this.max-t,e=100-e),this.actionTaken))switch(this._config.entity.split(".")[0]){case"light":"brightness"===this.colorMode?this._setBrightness(this.entity,t):"temperature"===this.colorMode?this._setColorTemp(this.entity,t):"hue"===this.colorMode?this._setHue(this.entity,t):"saturation"===this.colorMode&&this._setSaturation(this.entity,t);break;case"input_number":case"number":this._setInputNumber(this.entity,t);break;case"media_player":this._setMediaVolume(this.entity,t);break;case"cover":"position"===this.coverMode?this._setCover(this.entity,t):"tilt"===this.coverMode&&this._setCoverTilt(this.entity,t);break;case"fan":this._setFan(this.entity,t);break;case"lock":this._setLock(this.entity,t);break;case"switch":this._setSwitch(this.entity,t);break;default:console.log("Default")}}_setBrightness(t,e){("off"===t.state||Math.abs(e-Math.round(t.attributes.brightness/2.56))>this.step)&&this.hass.callService("light","turn_on",{entity_id:t.entity_id,brightness:2.56*e})}_setColorTemp(t,e){let i=parseFloat(t.attributes.color_temp);("off"===t.state||isNaN(i)||Math.abs(e-i)>this.step)&&this.hass.callService("light","turn_on",{entity_id:t.entity_id,color_temp:e})}_setHue(t,e){let i=0,s=0;t.attributes.hs_color&&(i=parseFloat(t.attributes.hs_color[0]),s=parseFloat(t.attributes.hs_color[1])),("off"===t.state||Math.abs(e-i)>this.step)&&this.hass.callService("light","turn_on",{entity_id:t.entity_id,hs_color:[e,s]})}_setSaturation(t,e){let i=0,s=0;t.attributes.hs_color&&(i=parseFloat(t.attributes.hs_color[1]),s=parseFloat(t.attributes.hs_color[0])),("off"===t.state||Math.abs(e-i)>this.step)&&this.hass.callService("light","turn_on",{entity_id:t.entity_id,hs_color:[s,e]})}_setInputNumber(t,e){let i=parseFloat(t.state);this.showMin||(i-=this.min),Math.abs(e-i)>this.step&&this.hass.callService(t.entity_id.split(".")[0],"set_value",{entity_id:t.entity_id,value:e})}_setMediaVolume(t,e){let i=Number(100*this.entity.attributes.volume_level);this.showMin||(i-=this.min),Math.abs(e-i)>this.step&&this.hass.callService("media_player","volume_set",{entity_id:t.entity_id,volume_level:e/100})}_setCover(t,e){this.hass.callService("cover","set_cover_position",{entity_id:t.entity_id,position:e})}_setCoverTilt(t,e){this.hass.callService("cover","set_cover_tilt_position",{entity_id:t.entity_id,tilt_position:e})}_setFan(t,e){this.hass.callService("fan","set_percentage",{entity_id:t.entity_id,percentage:e})}_setSwitch(t,e){var i=Math.min(this.max,this.maxThreshold);Number(i)<=e&&this.hass.callService("homeassistant","toggle",{entity_id:t.entity_id});const s=Number(Math.max(this.zero,this.minThreshold)),n=he(ce(s,this.max));this.setSliderValues(s,n);const o=this.sliderEl.querySelector(".my-slider-custom-progress");o.style.transition="width 0.2s ease 0s",o.style.width=n.toString()+"%",setTimeout(()=>{o.style.transition="initial"},200)}_setLock(t,e){var i=Math.min(this.max,this.maxThreshold);if(Number(i)<=e){var s="locked"===t.state?"unlock":"lock";this.hass.callService("lock",s,{entity_id:t.entity_id})}const n=Number(Math.max(this.zero,this.minThreshold)),o=he(ce(n,this.max));this.setSliderValues(n,o);const r=this.sliderEl.querySelector(".my-slider-custom-progress");r.style.transition="width 0.2s ease 0s",r.style.width=o.toString()+"%",setTimeout(()=>{r.style.transition="initial"},200)}createAndCleanupEventListeners(t){document.removeEventListener("mouseup",t),document.removeEventListener("touchend",t),document.removeEventListener("touchcancel",t),document.addEventListener("mouseup",t),document.addEventListener("touchend",t),document.addEventListener("touchcancel",t),document.addEventListener("mousemove",t)}_objectEvalTemplate(t,e){const i=JSON.parse(JSON.stringify(e));return this._getTemplateOrValue(t,i)}_getTemplateOrValue(t,e){if(["number","boolean"].includes(typeof e))return e;if(!e)return e;if("object"==typeof e)return Object.keys(e).forEach(i=>{e[i]=this._getTemplateOrValue(t,e[i])}),e;const i=e.trim();if("[[["===i.substring(0,3)&&"]]]"===i.slice(-3)){return this._evalTemplate(t,i.slice(3,-3))}return e}_evalTemplate(t,e){try{return new Function("states","entity","user","hass","html","'use strict'; "+e).call(this,this.hass.states,t,this.hass.user,this.hass,F)}catch(t){if(t instanceof Error){const i=e.length<=100?e.trim():e.trim().substring(0,98)+"...";throw t.message=`${t.name}: ${t.message} in '${i}'`,t.name="MyCardJSTemplateError",t}console.log("Unexpected error (_evalTemplate)",t)}}static get styles(){return ct`
		`}};r([st()],de.prototype,"_config",void 0),r([st({attribute:!1})],de.prototype,"hass",void 0),r([ot()],de.prototype,"config",void 0),de=r([et("my-slider-v2")],de);const ue="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class pe extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:ue?"100px":"50px",height:ue?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime)},s=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Dt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Dt(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Dt(t,"action",{action:"double_tap"})):Dt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",s),t.addEventListener("keyup",t=>{13===t.keyCode&&s(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-my-footer",pe);const me=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-my-footer"))return t.querySelector("action-handler-my-footer");const e=document.createElement("action-handler-my-footer");return t.appendChild(e),e})();i&&i.bind(t,e)},ge=w((t={})=>e=>{me(e.committer.element,t)}),fe=(t,e={})=>{switch(t){case"card":return ve(e);case"icon":return ye(e);case"label-wrapper":return _e(e);case"label":return be(e);case"container":return we(e);case"container-column":return $e(e);case"row1":return Se(e);case"row2":return xe(e);case"row3":return Ce(e);case"column1":return Te(e);case"column2":return ke(e);default:return void console.log("Getting default styles")}},ve=t=>Object.assign({height:"125px",width:"100%","min-width":"fit-content",background:"var(--card-background-color)"},t),ye=t=>Object.assign({"--mdc-icon-size":"100%",height:"35px",width:"35px",display:"inline-block",padding:"10px 10px 10px 10px",cursor:"pointer",color:"var(--paper-item-active-icon-color)"},t),_e=t=>Object.assign({width:"100%",height:"100%",display:"flex"},t),be=t=>Object.assign({padding:"0",margin:"0 10px",color:"var(--primary-text-color)","font-weight":"bold"},t),we=t=>Object.assign({padding:"0",margin:"0",display:"flex","flex-flow":"column",height:"100%"},t),Se=t=>Object.assign({flex:"0 1 auto"},t),xe=t=>Object.assign({flex:"1 1 auto"},t),Ce=t=>Object.assign({flex:"0 1 auto",margin:"0 2px 2px 2px"},t),$e=t=>Object.assign({padding:"0",margin:"0",display:"flex","flex-flow":"row",height:"100%"},t),Te=t=>Object.assign({flex:"1"},t),ke=t=>Object.assign({flex:"0",padding:"3px 3px 3px 0"},t);console.info(`%c  ---- MY-BUTTON ---- \n%c  ${o("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: green"),window.customCards=window.customCards||[],window.customCards.push({type:"my-button",name:"My Button Card",description:"Custom Button Card for Lovelace."});let Me=class extends dt{constructor(){super(...arguments),this.lastAction=0,this.layout="vertical",this.iconConfig={},this.labelConfig={},this.sliderConfig={},this.cardStl={},this.containerStl={},this.containerColumnStl={},this.iconStl={},this.labelWrapperStl={},this.labelStl={},this.row1Stl={},this.row2Stl={},this.row3Stl={},this.column1Stl={},this.column2Stl={}}static getStubConfig(){return{}}static get properties(){return{hass:{},config:{},active:{}}}setConfig(t){const e=["light","cover"];if(!t.entity)throw new Error("You need to define entity");if(!e.includes(t.entity.split(".")[0]))throw new Error("Entity has to be one of the following: "+e.map(t=>" "+t));this.config=Object.assign({name:"MyButton"},t)}shouldUpdate(t){return!!this.config&&Yt(this,t,!1)}render(){const t=this.initializeConfig();return null!==t?t:this.entity&&this._config?"vertical"===this.layout?this.verticalLayoutCard():this.horizontalLayoutCard():F``}verticalLayoutCard(){var t,e,i,s,n,o,r,a;return F`
            <ha-card style="${ee(this.cardStl)}">
                <div style="${ee(this.containerStl)}">
                    <div style="${ee(this.row1Stl)}"
                        @action=${t=>this._handleAction(t,this.config)}
                        .actionHandler=${ge({hasDoubleClick:"none"!==(null===(e=null===(t=this.config)||void 0===t?void 0:t.double_tap_action)||void 0===e?void 0:e.action),hasHold:"none"!==(null===(s=null===(i=this.config)||void 0===i?void 0:i.hold_action)||void 0===s?void 0:s.action)})}>
                        ${this.iconElement()}
                    </div>
                    <div style="${ee(this.row2Stl)}"
                        @action=${t=>this._handleAction(t,this.config)}
                        .actionHandler=${ge({hasDoubleClick:"none"!==(null===(o=null===(n=this.config)||void 0===n?void 0:n.double_tap_action)||void 0===o?void 0:o.action),hasHold:"none"!==(null===(a=null===(r=this.config)||void 0===r?void 0:r.hold_action)||void 0===a?void 0:a.action)})}>
                        ${this.labelElement()}
                    </div>
                    <div style="${ee(this.row3Stl)}">
                        ${this.sliderElement()}
                    </div>
                </div>
            </ha-card>
        `}horizontalLayoutCard(){var t,e,i,s,n,o,r,a;return F`
            <ha-card style="${ee(this.cardStl)}">
                <div style="${ee(this.containerColumnStl)}">
                    <div style="${ee(this.column1Stl)}">
                        <div style="${ee(this.containerStl)}">
                            <div style="${ee(this.row1Stl)}"
                                @action=${t=>this._handleAction(t,this.config)}
                                .actionHandler=${ge({hasDoubleClick:"none"!==(null===(e=null===(t=this.config)||void 0===t?void 0:t.double_tap_action)||void 0===e?void 0:e.action),hasHold:"none"!==(null===(s=null===(i=this.config)||void 0===i?void 0:i.hold_action)||void 0===s?void 0:s.action)})}>
                                ${this.iconElement()}
                            </div>
                            <div style="${ee(this.row2Stl)}"
                                @action=${t=>this._handleAction(t,this.config)}
                                .actionHandler=${ge({hasDoubleClick:"none"!==(null===(o=null===(n=this.config)||void 0===n?void 0:n.double_tap_action)||void 0===o?void 0:o.action),hasHold:"none"!==(null===(a=null===(r=this.config)||void 0===r?void 0:r.hold_action)||void 0===a?void 0:a.action)})}>
                                ${this.labelElement()}
                            </div>
                            <div style="${ee(this.row3Stl)}">
                            </div>
                        </div>
                    </div>
                    <div style="${ee(this.column2Stl)}">
                        ${this.sliderElement()}
                    </div>
                </div>
            </ha-card>
        `}iconElement(){var t,e;return this.iconConfig.show?this.iconConfig.tap_action||this.iconConfig.double_tap_action||this.iconConfig.hold_action?F`
                <ha-icon icon="${this.iconConfig.icon}" style="${ee(this.iconStl)}"
                    @action=${t=>this._handleAction(t,this.iconConfig)}
                    .actionHandler=${ge({hasDoubleClick:"none"!==(null===(t=this.iconConfig.double_tap_action)||void 0===t?void 0:t.action),hasHold:"none"!==(null===(e=this.iconConfig.hold_action)||void 0===e?void 0:e.action)})} />
            `:F`
                <ha-icon icon="${this.iconConfig.icon}" style="${ee(this.iconStl)}" />
            `:F``}labelElement(){var t,e;return this.labelConfig.show?this.labelConfig.tap_action||this.labelConfig.double_tap_action||this.labelConfig.hold_action?F`
                <div style="${ee(this.labelWrapperStl)}">
                        <label style="${ee(this.labelStl)}"
                            @action=${t=>this._handleAction(t,this.labelConfig)}
                            .actionHandler=${ge({hasDoubleClick:"none"!==(null===(t=this.labelConfig.double_tap_action)||void 0===t?void 0:t.action),hasHold:"none"!==(null===(e=this.labelConfig.hold_action)||void 0===e?void 0:e.action)})}
                        >${this.labelConfig.text}</label>
                </div>
            `:F`
                <div style="${ee(this.labelWrapperStl)}">
                    <label style="${ee(this.labelStl)}">${this.labelConfig.text}</label>
                </div>
            `:F``}sliderElement(){return this.sliderConfig.show?("horizontal"===this.layout&&(this.sliderConfig.vertical=void 0===this.sliderConfig.vertical||this.sliderConfig.vertical,this.sliderConfig.styles=this.sliderConfig.styles?this.sliderConfig.styles:{},this.sliderConfig.styles.card=this.sliderConfig.styles.card?this.sliderConfig.styles.card:{},this.sliderConfig.styles.card.width=this.sliderConfig.styles.card.width?this.sliderConfig.styles.card.width:"35px"),F`
            <my-slider-v2 .hass="${this.hass}" .config="${this.sliderConfig}"></my-slider-v2>
        `):F``}initializeConfig(){var t,e,i,s,n,o,r,a,l,c,h,d,u,p,m,g,f,v,y,_,b,w,S;this.entity=this.hass.states[""+this.config.entity],0===this.lastAction&&(this.lastAction=(new Date).getTime());try{this._config=this._objectEvalTemplate(this.entity,this.config)}catch(t){if(t instanceof Error){t.stack?console.error(t.stack):console.error(t);const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t.toString(),origConfig:this.config}),e}console.log("Unexpected error evaluating config on init:",t)}if(!this._config)return F`Error with this._config...`;const x={show:!0,icon:"mdi:lightbulb-outline"};"cover"===this._config.entity.split(".")[0]&&(x.icon=(null===(t=this.entity.attributes)||void 0===t?void 0:t.current_position)>=50?"mdi:blinds-open":"mdi:blinds");const C={show:!0,text:this.entity.attributes.friendly_name},$={show:!0,entity:this.entity.entity_id};this.layout=this._config.layout?this._config.layout:"vertical","cover"===this._config.entity.split(".")[0]&&(this.layout=this._config.layout?this._config.layout:"horizontal"),this.iconConfig="string"==typeof this._config.icon?Object.assign(Object.assign({},x),{icon:this._config.icon}):"object"==typeof this._config.icon?Object.assign(Object.assign({},x),this._config.icon):x,this.labelConfig="string"==typeof this._config.label?Object.assign(Object.assign({},C),{text:this._config.label}):"object"==typeof this._config.label?Object.assign(Object.assign({},C),this._config.label):C,this.sliderConfig=this._config.slider?Object.assign(Object.assign({},$),this._config.slider):$;const T=le(null===(e=this._config.styles)||void 0===e?void 0:e.card)?le(null===(i=this._config.styles)||void 0===i?void 0:i.card):{},k=le(null===(s=this._config.styles)||void 0===s?void 0:s.container)?le(null===(n=this._config.styles)||void 0===n?void 0:n.container):{},M=le(null===(o=this._config.styles)||void 0===o?void 0:o.containerColumn)?le(null===(r=this._config.styles)||void 0===r?void 0:r.containerColumn):{},E=le(null===(a=this._config.styles)||void 0===a?void 0:a.icon)?le(null===(l=this._config.styles)||void 0===l?void 0:l.icon):{},P=le(null===(c=this._config.styles)||void 0===c?void 0:c.labelWrapper)?le(null===(h=this._config.styles)||void 0===h?void 0:h.labelWrapper):{},N=le(null===(d=this._config.styles)||void 0===d?void 0:d.label)?le(null===(u=this._config.styles)||void 0===u?void 0:u.label):{},O=le(null===(p=this._config.styles)||void 0===p?void 0:p.row1)?le(null===(m=this._config.styles)||void 0===m?void 0:m.row1):{},A=le(null===(g=this._config.styles)||void 0===g?void 0:g.row2)?le(null===(f=this._config.styles)||void 0===f?void 0:f.row2):{},V=le(null===(v=this._config.styles)||void 0===v?void 0:v.row3)?le(null===(y=this._config.styles)||void 0===y?void 0:y.row3):{},j=le(null===(_=this._config.styles)||void 0===_?void 0:_.column1)?le(null===(b=this._config.styles)||void 0===b?void 0:b.column1):{},D=le(null===(w=this._config.styles)||void 0===w?void 0:w.column2)?le(null===(S=this._config.styles)||void 0===S?void 0:S.column2):{};return this.cardStl=fe("card",T),this.containerStl=fe("container",k),this.containerColumnStl=fe("container-column",M),this.iconStl=fe("icon",E),this.labelWrapperStl=fe("label-wrapper",P),this.labelStl=fe("label",N),this.row1Stl=fe("row1",O),this.row2Stl=fe("row2",A),this.row3Stl=fe("row3",V),this.column1Stl=fe("column1",j),this.column2Stl=fe("column2",D),null}_handleAction(t,e){var i;t.stopPropagation(),t.stopImmediatePropagation();if(!((new Date).getTime()-this.lastAction<100)&&(this.lastAction=(new Date).getTime(),e.entity||(e.entity=this._config.entity),null===(i=t.detail)||void 0===i?void 0:i.action))switch(t.detail.action){case"tap":e.tap_action&&this._handleTap(e);break;case"hold":e.hold_action&&this._handleHold(e);break;case"double_tap":e.double_tap_action&&this._handleDblTap(e)}}_handleTap(t){Lt(this,this.hass,this._evalActions(this._config,"tap_action"),!1,!1)}_handleHold(t){Lt(this,this.hass,this._evalActions(this._config,"hold_action"),!0,!1)}_handleDblTap(t){Lt(this,this.hass,this._evalActions(this._config,"double_tap_action"),!1,!0)}_evalActions(t,e){const i=JSON.parse(JSON.stringify(t)),s=t=>t?(Object.keys(t).forEach(e=>{"object"==typeof t[e]?t[e]=s(t[e]):t[e]=this._getTemplateOrValue(this.entity,t[e])}),t):t;return i[e]=s(i[e]),!i[e].confirmation&&i.confirmation&&(i[e].confirmation=s(i.confirmation)),i}_objectEvalTemplate(t,e){const i=JSON.parse(JSON.stringify(e));return this._getTemplateOrValue(t,i)}_getTemplateOrValue(t,e){if(["number","boolean"].includes(typeof e))return e;if(!e)return e;if("object"==typeof e)return Object.keys(e).forEach(i=>{e[i]=this._getTemplateOrValue(t,e[i])}),e;const i=e.trim();if("[[["===i.substring(0,3)&&"]]]"===i.slice(-3)){return this._evalTemplate(t,i.slice(3,-3))}return e}_evalTemplate(t,e){try{return new Function("states","entity","user","hass","html","'use strict'; "+e).call(this,this.hass.states,t,this.hass.user,this.hass,F)}catch(t){if(t instanceof Error){const i=e.length<=100?e.trim():e.trim().substring(0,98)+"...";throw t.message=`${t.name}: ${t.message} in '${i}'`,t.name="MyCardJSTemplateError",t}console.log("Unexpected error (_evalTemplate)",t)}}static get styles(){return ct``}};r([st()],Me.prototype,"_config",void 0),r([st({attribute:!1})],Me.prototype,"hass",void 0),r([ot()],Me.prototype,"config",void 0),Me=r([et("my-button")],Me),console.info(`%c  ---- MY-CARDS ---- \n%c  ${o("common.version")} 2.0.1    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: green");export{Me as MyButton,Qt as MySlider,de as MySliderV2};
