// console.log();
var AWITCoreVer = "7 Genesis Beta (dev build 7.5.0 | _2021_01_24_16_46_20_82)";
var AWITCoreInfo = '';
function ACInfo(func, param) {
	
//	console.log(arguments);
	if (param == 'false' || param == false || param == 'off') { return; };
	
	var result = func.toString().
	replace(/^[^\/]+\/\*!?/, '').
	replace(/\*\/[^\/]+$/, '');
	result = result.trim();
	result = result.replace(/\t+/g, '\t');
	
	if (param == 'return') { return result; }
	
	var n = '';
	if (AWITCoreInfo !== '') {
		n = '\n\n\n';
	}
	
	if (param == 'top') {
		
		AWITCoreInfo = result + n + AWITCoreInfo;
		
	} else {
		
		AWITCoreInfo = AWITCoreInfo + n + result;
		
	}
	
}
function AWITCoreInfo_logPrint() {
	
	console.groupCollapsed('Site worked on A.W.I.T.Core '+ AWITCoreVer);
	
	ACInfo(function() {/*!  About & this configuration included:
		
		Technology to simplify web development and website display.
		General styles & scripts for page, site load acceleration, and more...
		
		A.W.I.T = Alvio Wayne Innovations Technologies
		(c) Alvio Wayne
		https://alviowayne.github.io/
		https://github.com/AlvioWayne/
		The MIT License (MIT)
		
	*/}, 'top');
	
	console.log(AWITCoreInfo);
	console.groupEnd();
	
}





//! SYS MAIN
var jQuery = true;
if (jQuery) { ACInfo(function() {/*! jQuery & Plugins
	
	Version v3.3.1
	(c) JS Foundation and other contributors
	https://jquery.com/
	
	Includes Sizzle.js
	https://sizzlejs.com/
	
	Copyright JS Foundation and other contributors
	Released under the MIT license
	https://jquery.org/license
	
	Date: 2018-01-20T17:24Z
	
	By John Resig
	http://ejohn.org/'
	http://en.wikipedia.org/wiki/John_Resig
	
*/});

!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
}
{ //! SCRIPT PATH
	function getScriptPath() { // http://stackoverflow.com/questions/2161159/get-script-path
		var scripts=document.getElementsByTagName('script');
		var path=scripts[scripts.length-1].src.split('?')[0];
		return (path.split('/').length>0) ? path.split('/').slice(0,-1).join('/')+'/' : '';
	}
	var AC_path = getScriptPath();
};





(function($) { $AWITCore = function(useroptions) {
	
	{//! OPTIONS (AC_self) & INIT (AWITCore on / off)
		
		var AC_self = { // true, false
			
			Init: true,
			
			WowNew: true,
			ImgAfterLoad: true,
			
	//		SCROLLBAR
			ScrolllToID: true,
			
	//		FOT DEVELOPERS
			ShowFPS: false,
			
			// Device block
			desktopBlock: false,
			tabletBlock: false,
			mobileBlock: false,
				deviceBlockText: "For now,<br>site (or page) temporary<br>not supported on this device.",
			
			
			
			
			
			
			
			
			// 0THER CODE (from prev ver)
			
	//		UP: false,
			
	//		waitDOM: true,
	//		waitStyles: true,
			
	//		waitPageReady: true,
	//		BaseStyle: true,
	//		CustomStylesScripts: ['pages.css'],
	/* 		CustomStylesScripts: [],
			StyleVer: '', */
			BodyAbsoluteCenter: false,
			
	//		FONTS
			FontLoad: "",
				fl_name: "",
				fl_pageShowWhait: true,
			FontAwesome: false,
			
	//		BACKGROUND
			FullPageBackground: false,
	//			Back_Type: "fullpage", // fullpage, container (just type id of container)
				Back_HD: "background.jpg", // if 'background' core use 'background.jpg' before the core.
				Back_Low: "background_low.jpg", // if 'background_low' core use 'background_low.jpg' before the core.
				Back_Overlay: false,
					Back_Size: "cover",
					Back_Repeat: "no-repeat",
					Back_Position: "center center",
					Back_Animation: "ac_fadeIn", // 'none', 'fadeIn'
					Back_AnimSpeed: "700", // in ms
			
			
			
		};
		$.extend(AC_self, useroptions);
		if (!AC_self.Init) {return false;}
		
	}
	{//! $.onCreate & AC_PAGE PREPARE
		
		{/*! jQuery onMutate plugin v1.4 | $.onCreate('body', function(elements) {},true);
			
			http://jquery.com/
			
			Copyright 2016 CROmetrics
			https://github.com/eclecto/jQuery-onMutate
			Released under the MIT license
			https://github.com/eclecto/jQuery-onCreate/blob/master/LICENSE
			
			Date: 2016-08-23T13:12Z
			
			*/
			
			/* global define, module, setTimeout */
			(function (factory) {
			  'use strict';
			  if (typeof define === 'function' && define.amd) {
				define(['jquery'], factory);
			  } else if (typeof exports !== 'undefined') {
				module.exports = factory;
			  } else {
				factory(jQuery);
			  }

			}(function ($, MutationObserver) {
			  if (!$) $ = ($.fn.jquery ? $ : jQuery);
			  if (!MutationObserver) MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;
			  var cbid = 0;

			  // Uncomment this to easily test the setInterval fallback.
			  // MutationObserver = false;

			  // Constants for mutation types.
			  var CREATE = 'create',
				MODIFY = 'modify',
				TEXT = 'text';

			  // Observer class.
			  function Observer(mutcallback) {
				var realObserver;

				// MutationObserver.observe() polyfill
				this.observe = function (element, init) {
				  if (MutationObserver) {
					realObserver = realObserver || new MutationObserver(mutcallback);
					realObserver.observe(element, init);
				  } else {
					realObserver = setInterval(mutcallback, 50);
				  }
				};

				// MutationObserver.disconnect() polyfill
				this.disconnect = function () {
				  if (realObserver) {
					if (MutationObserver) {
					  realObserver.disconnect();
					} else {
					  clearInterval(realObserver);
					}
				  }
				};
			  }

			  // Callback class to wrap a callback and its properties
			  function Callback(callback, conditions, multi) {
				this.callback = callback;
				this.conditions = conditions;
				this.multi = multi || false;
				this.cbid = cbid++;
				this.processed = $([]);
			  }

			  // Create a map of an element's attributes so we can poll for changes (non-MutationObserver browsers)
			  function attributeMap(element) {
				var map = {};

				if (element.attributes) {
				  $.each(element.attributes, function (index, attr) {
					map[attr.name] = attr.value;
				  });
				}

				return map;
			  }

			  // Returns a set of MutationRecord-like objects by comparing two attribute maps.
			  function mapCompare(map1, map2) {
				var mutations = [];
				$.each(map1, function (key, value) {
				  if (typeof (map2[key]) === 'undefined' || value !== map2[key]) {
					mutations.push({
					  attributeName: key
					});
				  }
				});
				$.each(map2, function (key) {
				  if (typeof (map1[key]) === 'undefined') {
					mutations.push({
					  attributeName: key
					});
				  }
				});
				return mutations;
			  }

			  // Check attributes
			  function checkAttrs(mutation, $el, callback) {
				var attrname = mutation.attributeName,
				  attrval = $el.attr(attrname),
				  conditions = callback.conditions || false,
				  attrs = conditions ? conditions[0] : false,
				  match = conditions && conditions[1] ? conditions[1] : false;
				// If no attrs are set or the mutation affects one of the targeted attributes
				if (!attrs || attrs.indexOf(attrname) > -1) {
				  if (match) {
					return (attrval.search(match) >= 0);
				  } else {
					return true;
				  }
				}
				return false;
			  }


			  // Possible methods to invoke with $().on[Create|Modify|Text]()
			  var methods = {
				// Attach observers.
				attach: function (options) {
				  var type = options.type,
					callback = options.callback,
					multi = options.multi || false,
					conditions = options.conditions;

				  // Get/initiate the element's onMutate data.
				  if(!this.data('onMutate')) this.data('onMutate', {
					create: {
					  callbacks: [],
					  ignore: false
					},
					modify: {
					  callbacks: [],
					  ignore: false
					},
					text: {
					  callbacks: [],
					  ignore: false
					}
				  });
				  var om = this.data('onMutate')[type],
					callbacks = om.callbacks,
					// Add the callback to the array of callbacks for the current type.
					newcb = new Callback(callback, conditions, multi);
				  callbacks.unshift(newcb);

				  // Store the element's current text or attributes if needed.
				  if (!MutationObserver && type === MODIFY) {
					om.attributeMap = attributeMap(this[0]);
				  }
				  if (type === TEXT) om.text = this.text();

				  var $this = this,
					i, changematch;

				  // Define our callback for when a mutation is detected.
				  var mutcallback = om.mutcallback = om.mutcallback || function (mutations) {
					callbacks = om.callbacks; // Refresh the callback list.
					// Ignore any DOM changes that this callback makes to prevent infinite loops.
					if (!om.ignore) {
					  om.ignore = true;
					} else {
					  return;
					}
					
					var newmap, newtext;
					if (type === MODIFY) newmap = attributeMap($this[0]);
					if (type === TEXT) newtext = $this.text();

					for (i = callbacks.length - 1; i >= 0; i--) {
			 //         console.log(callbacks[i]);
					  var selected = (type === CREATE ? $(callbacks[i].conditions, $this) : $this);
					  var proc = callbacks[i].processed;
					  var elements = selected.not(proc);

					  // Validate changed attributes for modify observers.
					  if (type === MODIFY) {
						changematch = false;
						if (!MutationObserver) {
						  mutations = mapCompare(newmap, om.attributeMap);
						}
						for (var j = 0; j < mutations.length; j++) {
						  changematch = changematch || checkAttrs(mutations[j], $this, callbacks[i]);
						}
					  }

					  // Compare the text contents of the element to its original text.
					  if (type === TEXT) {
						changematch = false;
						var cond = callbacks[i].conditions;
						if (newtext !== om.text) {
						  if (cond) {
							changematch = newtext.search(cond) > -1;
						  } else {
							changematch = true;
						  }
						}
					  }

					  if (elements.length > 0 && (type === CREATE || changematch)) {
						if (type === CREATE) proc = proc.add(elements);
						callbacks[i].processed = proc;
						callbacks[i].callback.call($this, elements);
						// Remove callback from the list if it only runs once.
						if (!callbacks[i].multi) {
						  callbacks.splice(i, 1);
						}
					  }
					  // Update the current values, accounting for any changes the callback(s) might have made.
					  if (type === MODIFY) om.attributeMap = attributeMap($this[0]);
					  if (type === TEXT) om.text = $this.text();
					}

					// We've safely iterated through the callbacks, so don't ignore this master Callback anymore.
					// Additional mutation events apparently fire after this entire function, so we set ignore to false with an extremely small delay.
					if (om.ignore) setTimeout(function () {
					  om.ignore = false;
					}, 1);
					if (callbacks.length === 0) {
					  if (observer) {
						observer.disconnect();
					  } else {
						return true;
					  }
					}
				  };
				  // Sanity Check: If this is a create listener, run the callback on initialization to see if there is already a valid element.
				  if (type === CREATE && mutcallback()) {
					return this;
				  }

				  var observer = om.observer = om.observer || new Observer(mutcallback),
					init;
				  switch (type) {
				  case CREATE:
					init = {
					  childList: true,
					  subtree: true
					};
					break;
				  case MODIFY:
					init = {
					  attributes: true
					};
					if (conditions) {
					  init.attributeFilter = conditions[0].split(' ');
					}
					break;
				  case TEXT:
					init = {
					  childList: true,
					  characterData: true,
					  subtree: true
					};
					break;
				  }
				  observer.observe($this[0], init);
				  return this;
				},

				// Detach observers.
				detach: function (options) {
				  if (!this.data('onMutate')) return this;

				  var type = options.type,
					om = this.data('onMutate')[type],
					callbacks = om.callbacks,
					callback = options.callback;
				  if (callback) {
					for (var i = callbacks.length - 1; i >= 0; i--) {
					  if (callbacks[i].callback.prototype.cbid === callback.prototype.cbid) {
						callbacks.splice(i, i + 1);
					  }
					}
				  } else {
					om.callbacks = [];
				  }
				  if (!callbacks.length) {
					om.observer.disconnect();
				  }
				  return this;
				}
			  };

			  $.fn.extend({
				// $(parent).onCreate(selector, callback[, multi]);
				onCreate: function () {

				  var args = Array.prototype.slice.call(arguments);

				  // Invalid argument
				  if (typeof (args[0]) !== 'string') {
					return this;
				  }

				  if (args[0] === 'detach') {
					return methods.detach.call(this, {
					  type: CREATE,
					  callback: args[1]
					});
				  } else
				  // Default init functionality.
				  if (typeof (args[0]) === 'string' && typeof (args[1]) === 'function') {
					return methods.attach.call(this, {
					  type: CREATE,
					  conditions: args[0],
					  callback: args[1],
					  multi: args[2]
					});
				  } else {
					return this;
				  }
				},

				// onModify. Usage: .onModify([attributes[, match,]] callback, multi)
				onModify: function () {

				  var args = Array.prototype.slice.call(arguments),
					method;
				  if (methods[args[0]]) {
					method = args.shift();
				  } else {
					method = 'attach';
				  }

				  if (typeof (args[0]) === 'function') {
					return methods[method].call(this, {
					  type: MODIFY,
					  callback: args[0],
					  multi: args[1]
					});
				  } else if (typeof (args[0]) === 'string') {
					if (typeof (args[1]) === 'function') {
					  return methods[method].call(this, {
						type: MODIFY,
						conditions: [args[0]],
						callback: args[1],
						multi: args[2]
					  });
					} else if (typeof (args[1]) === 'string' || args[1] instanceof RegExp) {
					  return methods[method].call(this, {
						type: MODIFY,
						conditions: [args[0], args[1]],
						callback: args[2],
						multi: args[3]
					  });
					}
				  } else if (method === 'attach') {
					return this;
				  } else {
					methods[method].call(this, {
					  type: MODIFY
					});
				  }
				},

				// onText. Usage: onText([match,] callback, multi);
				onText: function () {
				  if (this.length === 0) {
					return this;
				  }

				  var args = Array.prototype.slice.call(arguments),
					method;

				  if (methods[args[0]]) {
					method = args.shift();
				  } else {
					method = 'attach';
				  }

				  if (typeof (args[0]) === 'function') {
					return methods[method].call(this, {
					  type: TEXT,
					  callback: args[0],
					  multi: args[1]
					});
				  } else if (typeof (args[0]) === 'string' || args[0] instanceof RegExp && typeof (args[1]) === 'function') {
					return methods[method].call(this, {
					  type: TEXT,
					  conditions: args[0],
					  callback: args[1],
					  multi: args[2]
					});
				  } else if (method === 'attach') {
					return this;
				  } else {
					methods[method].call(this, {
					  type: TEXT
					});
				  }
				},

				// onText. Usage: onMutate(type, ...);
				onMutate: function () {
				  var args = Array.prototype.slice.call(arguments),
					type = args.shift(),
					typeMethod = 'on' + type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
				  if ($.fn[typeMethod]) $.fn[typeMethod].apply(this, args);
				}
			  });
			  // Use $.onCreate as a shortcut to onCreate at the document level.
			  $.onCreate = function (selector, callback, multi) {
				$(document).onCreate(selector, callback, multi);
			  };
			}));
			
		}
		{/*! AC_page prepare & ready
			
			Last upadate _2020_12_02_22_48_58_27
			(c) Alvio Wayne
			
			*/
			
			AC_page('prepare');
			function AC_page(option) {
				
				switch(option) {
					
					case 'prepare':
						
						if (!$('head #AC_page_prepare').length) {
							$('head').append('<style id="AC_page_prepare">html.AC_page_prepare * {animation-name:none!important;animation:none!important;}html.AC_page_prepare body * {visibility:hidden!important;overflow:hidden!important;}html.AC_page_prepare body, html.AC_page_prepare body * {pointer-events:none!important;}</style>');
	//						$('head').append('<style id="AC_page_prepare">html.AC_page_prepare * {animation-name:none!important;animation:none!important;}html.AC_page_prepare body * {opacity:0!important;overflow:hidden!important;}html.AC_page_prepare body, html.AC_page_prepare body * {pointer-events:none!important;}</style>');
						}
						$('html').addClass('AC_page_prepare');
						$('head').append('<style type="text/css" id="AC_addon_styles"></style>');
						
					break;
					case 'ready':
						
						setTimeout(function() {
							$("html").addClass('AC_page_ready');
							$("html").removeClass('AC_page_prepare');
							$(document).trigger("AC_page_ready");
							$(document).trigger("pageReady"); // for old code compatibility
						}, 100);
						
					break;
					
					default:
					break;
					
				}
				
			}
			
			var AC_Styles_objs = [];
			var AC_Styles_count = 0;
			var AC_Styles_count_true = 0;
			var AC_Styles_try_count = 5;
			
			$.onCreate('script[type="text/javascript"], link[type="text/css"], link[rel="stylesheet"]', function(elements) {
				
	//			console.log(elements);
	//			console.log($(elements) ? true : false);
				
				$.each(elements, function(index, item) {
					AC_Styles_objs.push(item);
				});
				
			},true);
			$.onCreate('body', function(elements) {
				
	//			console.log(elements);
				$(document).trigger("AC_body_ready");
				AC_Styles_load_tf();
				
			},true);
			function AC_Styles_load_tf() {
				
	//			console.log(AC_Styles_objs);
				
				AC_Styles_count = $(AC_Styles_objs).length;
	//			console.log(AC_Styles_count);
				
				$.each(AC_Styles_objs, function(index, item) {
					
	//				console.log($(item));
	//				console.log($(item) ? true : false);
					
					if ($(item) ? true : false) {
						
						AC_Styles_count_true++;
						
					}
					
				});
				
				if (AC_Styles_count_true == AC_Styles_count) {
					
					console.log('Styles & scipts count: ' + AC_Styles_count);
					console.log('Styles & scipts loaded: ' + AC_Styles_count_true);
					AC_page('ready');
					
				} else if (AC_Styles_try_count) {
					
					setTimeout(function() {
						AC_Styles_try_count--;
						AC_Styles_load_tf();
					}, 50);
					
				}
				
				
				
			}
			
		}
		
	}
	
	
	
	
	
	{//! SYS DEVICE MAIN FUNCTIONS
		
		(function(name, definition) { ACInfo(function() {/*! Lightweight plugin to get information about browser, version and OS
			
			(c) sub2home
			https://github.com/sub2home
			https://github.com/sub2home/browser-detection
			The MIT License (MIT)
			
		*/});
		
		  if (typeof define === 'function' && define.amd) { // AMD
			define(name,[],definition);
		  } else if (typeof module !== 'undefined' && module.exports) { // Node.js
			module.exports = definition();
		  } else { // Browser
			var theModule = definition(),
			  global = this,
			  old = global[name];
			theModule.noConflict = function() {
			  global[name] = old;
			  return theModule;
			};
			global[name] = theModule;
		  }
		})('browserDetection', function() {
		  "use strict";
		  return function(options) {

			var data = {};
			var browser = null;
			var version = null;
			var os = null;
			var webkit = null;

			parseUserAgent();

			// exception rules
			renameOsx();
			cutSafariVersion();

			prepareData();
			processOptions();

			return data;

			function parseUserAgent() {
			  var userAgent = navigator.userAgent.toLowerCase(),
				browserParts = /(ie|firefox|chrome|safari|opera|edge)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(userAgent),
				osParts = /(mac|win|linux|freebsd|mobile|iphone|ipod|ipad|android|blackberry|j2me|webtv)/.exec(userAgent);

			  if ( !! userAgent.match(/trident\/7\./)) {
				browser = "ie";
				version = 11;
			  } else if ( !! userAgent.match(/edge\/\d+/)) {
				browserParts = /(edge)\/([\w.]+)/.exec(userAgent),
				browser = browserParts[1];
				version = browserParts[2];
			  }else if (browserParts && browserParts.length > 2) {
				browser = browserParts[1];
				version = browserParts[2];
			  }

			  if (osParts && osParts.length > 1) {
				os = osParts[1];
			  }

			  webkit = navigator.userAgent.toLowerCase().match(/webkit\/(\d+)\.(\d+)\.(\d+)/);
			}

			function prepareData() {
			  data.browser = browser;
			  data.version = parseInt(version, 10) || null;
			  data.os = os;
			  if (webkit && webkit.length >= 3) {
				data.webkit = {
				  major: parseInt(webkit[1], 10),
				  minor: parseInt(webkit[2], 10),
				  patch: webkit[3] ? parseInt(webkit[3], 10) : undefined
				};
			  }
			}

			function renameOsx() {
			  if (os === 'mac') {
				os = 'osx';
			  }
			}

			function cutSafariVersion() {
			  if (os === 'safari') {
				version = version.substring(0, 1);
			  }
			}

			function processOptions() {
			  options = options || {};

			  if (options.addClasses && data.os && data.browser && data.version) {
				document.body.parentNode.classList.add(data.os, data.browser, data.browser, data.version);
			  }
			}

		  };

		});
		{ ACInfo(function() {/*! UAParser.js v0.7.18 Lightweight JavaScript-based User-Agent string parser
			
			https://github.com/faisalman/ua-parser-js
			Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
			Dual licensed under GPLv2 or MIT
			
		*/});
		
		!function(i,s){"use strict";var e="0.7.18",o="",r="?",n="function",a="undefined",d="object",t="string",l="major",w="model",u="name",c="type",m="vendor",p="version",b="architecture",g="console",f="mobile",h="tablet",v="smarttv",x="wearable",k="embedded",y={extend:function(i,s){var e={};for(var o in i)s[o]&&s[o].length%2===0?e[o]=s[o].concat(i[o]):e[o]=i[o];return e},has:function(i,s){return"string"==typeof i&&s.toLowerCase().indexOf(i.toLowerCase())!==-1},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i===t?i.replace(/[^\d\.]/g,"").split(".")[0]:s},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},T={rgx:function(i,e){for(var o,r,a,t,l,w,u=0;u<e.length&&!l;){var c=e[u],m=e[u+1];for(o=r=0;o<c.length&&!l;)if(l=c[o++].exec(i))for(a=0;a<m.length;a++)w=l[++r],t=m[a],typeof t===d&&t.length>0?2==t.length?typeof t[1]==n?this[t[0]]=t[1].call(this,w):this[t[0]]=t[1]:3==t.length?typeof t[1]!==n||t[1].exec&&t[1].test?this[t[0]]=w?w.replace(t[1],t[2]):s:this[t[0]]=w?t[1].call(this,w,t[2]):s:4==t.length&&(this[t[0]]=w?t[3].call(this,w.replace(t[1],t[2])):s):this[t]=w?w:s;u+=2}},str:function(i,e){for(var o in e)if(typeof e[o]===d&&e[o].length>0){for(var n=0;n<e[o].length;n++)if(y.has(e[o][n],i))return o===r?s:o}else if(y.has(e[o],i))return o===r?s:o;return i}},S={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},E={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[u,p],[/(opios)[\/\s]+([\w\.]+)/i],[[u,"Opera Mini"],p],[/\s(opr)\/([\w\.]+)/i],[[u,"Opera"],p],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[u,p],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[u,"IE"],p],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[u,"Edge"],p],[/(yabrowser)\/([\w\.]+)/i],[[u,"Yandex"],p],[/(puffin)\/([\w\.]+)/i],[[u,"Puffin"],p],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[u,"UCBrowser"],p],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],p],[/(micromessenger)\/([\w\.]+)/i],[[u,"WeChat"],p],[/(qqbrowserlite)\/([\w\.]+)/i],[u,p],[/(QQ)\/([\d\.]+)/i],[u,p],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[u,p],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[u,p],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[u,p],[/(MetaSr)[\/\s]?([\w\.]+)/i],[u],[/(LBBROWSER)/i],[u],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[p,[u,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[p,[u,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[p,[u,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[u,/(.+)/,"$1 WebView"],p],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[u,/(.+(?:g|us))(.+)/,"$1 $2"],p],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[p,[u,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[u,p],[/(dolfin)\/([\w\.]+)/i],[[u,"Dolphin"],p],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[u,"Chrome"],p],[/(coast)\/([\w\.]+)/i],[[u,"Opera Coast"],p],[/fxios\/([\w\.-]+)/i],[p,[u,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[p,[u,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[p,u],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[u,"GSA"],p],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[p,T.str,S.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[u,p],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],p],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,p]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[b,"amd64"]],[/(ia32(?=;))/i],[[b,y.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[b,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[b,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[b,/ower/,"",y.lowerize]],[/(sun4\w)[;\)]/i],[[b,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[b,y.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[w,m,[c,h]],[/applecoremedia\/[\w\.]+ \((ipad)/],[w,[m,"Apple"],[c,h]],[/(apple\s{0,1}tv)/i],[[w,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,w,[c,h]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[w,[m,"Amazon"],[c,h]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[w,T.str,S.device.amazon.model],[m,"Amazon"],[c,f]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[w,m,[c,f]],[/\((ip[honed|\s\w*]+);/i],[w,[m,"Apple"],[c,f]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,w,[c,f]],[/\(bb10;\s(\w+)/i],[w,[m,"BlackBerry"],[c,f]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[w,[m,"Asus"],[c,h]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[w,"Xperia Tablet"],[c,h]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[w,[m,"Sony"],[c,f]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,w,[c,g]],[/android.+;\s(shield)\sbuild/i],[w,[m,"Nvidia"],[c,g]],[/(playstation\s[34portablevi]+)/i],[w,[m,"Sony"],[c,g]],[/(sprint\s(\w+))/i],[[m,T.str,S.device.sprint.vendor],[w,T.str,S.device.sprint.model],[c,f]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,w,[c,h]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[m,[w,/_/g," "],[c,f]],[/(nexus\s9)/i],[w,[m,"HTC"],[c,h]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[w,[m,"Huawei"],[c,f]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,w,[c,f]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[w,[m,"Microsoft"],[c,g]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[m,"Microsoft"],[c,f]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[w,[m,"Motorola"],[c,f]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[w,[m,"Motorola"],[c,h]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,y.trim],[w,y.trim],[c,v]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[m,"Samsung"],[c,v]],[/\(dtv[\);].+(aquos)/i],[w,[m,"Sharp"],[c,v]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],w,[c,h]],[/smart-tv.+(samsung)/i],[m,[c,v],w],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[m,"Samsung"],w,[c,f]],[/sie-(\w*)/i],[w,[m,"Siemens"],[c,f]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[m,"Nokia"],w,[c,f]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[w,[m,"Acer"],[c,h]],[/android.+([vl]k\-?\d{3})\s+build/i],[w,[m,"LG"],[c,h]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],w,[c,h]],[/(lg) netcast\.tv/i],[m,w,[c,v]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[w,[m,"LG"],[c,f]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[w,[m,"Lenovo"],[c,h]],[/linux;.+((jolla));/i],[m,w,[c,f]],[/((pebble))app\/[\d\.]+\s/i],[m,w,[c,x]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[m,w,[c,f]],[/crkey/i],[[w,"Chromecast"],[m,"Google"]],[/android.+;\s(glass)\s\d/i],[w,[m,"Google"],[c,x]],[/android.+;\s(pixel c)\s/i],[w,[m,"Google"],[c,h]],[/android.+;\s(pixel xl|pixel)\s/i],[w,[m,"Google"],[c,f]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[w,/_/g," "],[m,"Xiaomi"],[c,f]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[w,/_/g," "],[m,"Xiaomi"],[c,h]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[w,[m,"Meizu"],[c,h]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[w,[m,"OnePlus"],[c,f]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[w,[m,"RCA"],[c,h]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[w,[m,"Dell"],[c,h]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[w,[m,"Verizon"],[c,h]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[m,"Barnes & Noble"],w,[c,h]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[w,[m,"NuVision"],[c,h]],[/android.+;\s(k88)\sbuild/i],[w,[m,"ZTE"],[c,h]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[w,[m,"Swiss"],[c,f]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[w,[m,"Swiss"],[c,h]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[w,[m,"Zeki"],[c,h]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[m,"Dragon Touch"],w,[c,h]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[w,[m,"Insignia"],[c,h]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[w,[m,"NextBook"],[c,h]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[m,"Voice"],w,[c,f]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[m,"LvTel"],w,[c,f]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[w,[m,"Envizen"],[c,h]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[m,w,[c,h]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[w,[m,"MachSpeed"],[c,h]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[m,w,[c,h]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[w,[m,"Rotor"],[c,h]],[/android.+(KS(.+))\s+build/i],[w,[m,"Amazon"],[c,h]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[m,w,[c,h]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,y.lowerize],m,w],[/(android[\w\.\s\-]{0,9});.+build/i],[w,[m,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[p,[u,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,p],[/rv\:([\w\.]{1,9}).+(gecko)/i],[p,u]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[u,p],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[u,[p,T.str,S.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[p,T.str,S.os.windows.version]],[/\((bb)(10);/i],[[u,"BlackBerry"],p],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[u,p],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[u,"Symbian"],p],[/\((series40);/i],[u],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"],p],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[u,p],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],p],[/(sunos)\s?([\w\.\d]*)/i],[[u,"Solaris"],p],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[u,p],[/(haiku)\s(\w+)/i],[u,p],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[p,/_/g,"."],[u,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[u,"Mac OS"],[p,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[u,p]]},A=function(e,r){if("object"==typeof e&&(r=e,e=s),!(this instanceof A))return new A(e,r).getResult();var n=e||(i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:o),a=r?y.extend(E,r):E;return this.getBrowser=function(){var i={name:s,version:s};return T.rgx.call(i,n,a.browser),i.major=y.major(i.version),i},this.getCPU=function(){var i={architecture:s};return T.rgx.call(i,n,a.cpu),i},this.getDevice=function(){var i={vendor:s,model:s,type:s};return T.rgx.call(i,n,a.device),i},this.getEngine=function(){var i={name:s,version:s};return T.rgx.call(i,n,a.engine),i},this.getOS=function(){var i={name:s,version:s};return T.rgx.call(i,n,a.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(i){return n=i,this},this};A.VERSION=e,A.BROWSER={NAME:u,MAJOR:l,VERSION:p},A.CPU={ARCHITECTURE:b},A.DEVICE={MODEL:w,VENDOR:m,TYPE:c,CONSOLE:g,MOBILE:f,SMARTTV:v,TABLET:h,WEARABLE:x,EMBEDDED:k},A.ENGINE={NAME:u,VERSION:p},A.OS={NAME:u,VERSION:p},typeof exports!==a?(typeof module!==a&&module.exports&&(exports=module.exports=A),exports.UAParser=A):typeof define===n&&define.amd?define(function(){return A}):i&&(i.UAParser=A);var N=i&&(i.jQuery||i.Zepto);if(typeof N!==a){var z=new A;N.ua=z.getResult(),N.ua.get=function(){return z.getUA()},N.ua.set=function(i){z.setUA(i);var s=z.getResult();for(var e in s)N.ua[e]=s[e]}}}("object"==typeof window?window:this);
		}
		{ ACInfo(function() {/*! ifDevice realtime orientation change functions _2018_05_18_15_08_45_76
			
			(c) Alvio Wayne
			version: v2 _2018_05_18_15_08_45_76

			Based on Device.js
			(c) 2014 Matthew Hudson
			Device.js is freely distributable under the MIT license.
			For all details and documentation:
			http://matthewhudson.me/projects/device.js/
			https://github.com/matthewhudson/device.js
			Freely distributable under the MIT license.
			
		*/});
		
		var ua = navigator.userAgent;
		var tablet = /Tablet|iPad/i.test(ua);
		var mobile = ""
			|| /IEMobile|Windows Phone|Lumia/i.test(ua)
			|| /iPhone|iP[oa]d/.test(ua)
			|| /Android/.test(ua)
			|| /BlackBerry|PlayBook|BB10/.test(ua)
			|| /Mobile Safari/.test(ua)
			|| /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua)
		;
		var bd_data = browserDetection();

		function ifDevice(property, callback) {
				switch (property) {
					case 'callbackTest':
						callback();
					break
					case 'orientationChange':
						$(window).on('resize', function(){
							callback();
						});
					break
					case 'orientationChangeReady':
						$(document).ready(function() {
							callback();
						});
						$(window).on('resize', function(){
							callback();
						});
					break
					
					
					case 'landscape':
						return (window.innerHeight / window.innerWidth) < 1;
					break
					case 'portrait':
						return (window.innerHeight / window.innerWidth) > 1;
					break
					
					
					case 'width':
						return Math.max(document.documentElement.clientWidth);
					break
					case 'height':
						return Math.max(document.documentElement.clientHeight);
					break
					
					
					case 'type':
						if (tablet) {
							return 'tablet'
						}
						else if (mobile) {
							return 'mobile'
						}
						else if (!mobile && !tablet) {
							return 'desktop'
						};
					break
					case 'mobile':
						if (tablet) {
							return false
						}
						else if (mobile) {
							return true
						};
					break
					case 'tablet':
						if (tablet) {
							return true
						};
					break
					case 'desktop':
						if (!mobile && !tablet) {
							return true
						};
					break
					
					
					case 'browser':
						return bd_data.browser
					break
					case 'browser_version':
						return bd_data.version
					break
					case 'os':
						return bd_data.os
					break
					
					
					default:
					break;
				};
		};
		function ifDeviceRealtime() {
			
			function ifDeviceAllClassRem() {
				$("html").removeClass("desktop");
				$("html").removeClass("laptop");
				$("html").removeClass("tablet");
				$("html").removeClass("mobile");
				
				$("html").removeClass("mobileL");
				$("html").removeClass("mobileM");
				$("html").removeClass("mobileS");
				
				$("html").removeClass("laptopL");
				$("html").removeClass("4K");
			}
			
			if (ifDevice('landscape')) {

				$("html").removeClass("portrait");
				$("html").addClass("landscape");
				
			} else {

				$("html").removeClass("landscape");
				$("html").addClass("portrait");
				
			};
			if (ifDevice('mobile')) {

			//	console.log('device mobile');
				ifDeviceAllClassRem();
				$("html").addClass("mobile");

				if (ifDevice('width') === 425 || ifDevice('width') < 425 && ifDevice('width') > 375) {
					$("html").addClass("mobileL");
				} else if (ifDevice('width') === 375 || ifDevice('width') < 375 && ifDevice('width') > 320) {
					$("html").addClass("mobileM");
				} else if (ifDevice('width') === 320 || ifDevice('width') < 320) {
					$("html").addClass("mobileS");
				};
				
			} else if (ifDevice('tablet')) {

			//	console.log('device tablet');
				ifDeviceAllClassRem();
				$("html").addClass("tablet");
				
			} else if (ifDevice('desktop')) {

			//	console.log('device desktop');
				ifDeviceAllClassRem();
			//	$("html").addClass("desktop");
				
				if (ifDevice('width') === 425 || ifDevice('width') < 425) {
					$("html").addClass("mobile");
				} else if (ifDevice('width') === 768 || ifDevice('width') > 425 && ifDevice('width') < 1024) {
					$("html").addClass("tablet");
				} else if (ifDevice('width') === 1024 || ifDevice('width') > 1024) {
					$("html").addClass("desktop");
					$("html").addClass("laptop");
				};
				
				if (ifDevice('width') === 425 || ifDevice('width') < 425 && ifDevice('width') > 375) {
					$("html").addClass("mobileL");
				} else if (ifDevice('width') === 375 || ifDevice('width') < 375 && ifDevice('width') > 320) {
					$("html").addClass("mobileM");
				} else if (ifDevice('width') === 320 || ifDevice('width') < 320) {
					$("html").addClass("mobileS");
				};
				
				if (ifDevice('width') === 1440 || ifDevice('width') < 1440 && ifDevice('width') > 1024) {
					$("html").addClass("laptopL");
				} else if (ifDevice('width') === 2560 || ifDevice('width') > 1440) {
					$("html").addClass("4K");
				};
				
			};
			
		};

		ifDeviceRealtime();
		$(window).on('resize', function(){ ifDeviceRealtime(); });

		function BrowserDetect() {
			
		//	var bd_data = browserDetection();
		//	console.log(bd_data.browser); // chrome
		//	console.log(bd_data.version); // 29
		//	console.log(bd_data.os); // osx
			
		//	$('html').addClass(bd_data.browser);
		//	$('html').addClass(bd_data.os);
			
			$('html').addClass(ifDevice('browser'));
			$('html').addClass(ifDevice('os'));


			
		}
		BrowserDetect();

		function ifDeviceWHStyle() {
			$('.ifDeviceHeight').css('height',ifDevice('height')+'px');
			$('.ifDeviceWidth').css('width',ifDevice('width')+'px');
		};



		};
		
		{ ACInfo(function() {/*! modernizr 3.5.0 (Custom Build)
			
			https://modernizr.com/download/?-csstransforms-csstransforms3d-csstransitions-flexbox-preserve3d-svg-setclasses
			The MIT License (MIT)
			
		*/});
		
		!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,o,i,a;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),C.push((s?"":"no-")+a.join("-"))}}function o(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?x.className.baseVal=t:x.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function l(e,n,r,s){var o,l,f,u,d="modernizr",p=i("div"),c=a();if(parseInt(r,10))for(;r--;)f=i("div"),f.id=s?s[r]:d+(r+1),p.appendChild(f);return o=i("style"),o.type="text/css",o.id="s"+d,(c.fake?c:p).appendChild(o),c.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),l=n(p,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=u,x.offsetHeight):p.parentNode.removeChild(p),!!l}function f(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var s;for(var o in e)if(e[o]in t)return n===!1?e[o]:(s=t[e[o]],r(s,"function")?d(s,n||t):s);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}function g(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+c(t[s])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function h(e,t,s,o){function a(){d&&(delete A.style,delete A.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var l=g(e,s);if(!r(l,"undefined"))return l}for(var d,p,c,m,h,v=["modernizr","tspan","samp"];!A.style&&v.length;)d=!0,A.modElem=i(v.shift()),A.style=A.modElem.style;for(c=e.length,p=0;c>p;p++)if(m=e[p],h=A.style[m],f(m,"-")&&(m=u(m)),A.style[m]!==n){if(o||r(s,"undefined"))return a(),"pfx"==t?m:!0;try{A.style[m]=s}catch(y){}if(A.style[m]!=h)return a(),"pfx"==t?m:!0}return a(),!1}function v(e,t,n,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,s,o):(a=(e+" "+k.join(i+" ")+i).split(" "),p(a,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var C=[],S=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var x=t.documentElement,b="svg"===x.nodeName.toLowerCase(),_="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",_||T),Modernizr.addTest("preserve3d",function(){var t,n,r=e.CSS,s=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(t=i("a"),n=i("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),x.appendChild(t),s=n.getBoundingClientRect(),x.removeChild(t),s=s.width&&s.width<4)});var P=w.testStyles=l,z="Moz O ms Webkit",E=w._config.usePrefixes?z.split(" "):[];w._cssomPrefixes=E;var k=w._config.usePrefixes?z.toLowerCase().split(" "):[];w._domPrefixes=k;var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem});var A={style:N.elem.style};Modernizr._q.unshift(function(){delete A.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in x.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",P(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),s(),o(C),delete w.addTest,delete w.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);
		}
		/* if (Modernizr.flexbox) {
		//	console.log('flexbox');
		} */
		
		(function($){ ACInfo(function() {/*! jQuery viewport checker
			
			Copyright (c) 2014 Dirk Groenen
			https://github.com/dirkgroenen/jQuery-viewport-checker
			The MIT License (MIT)
			
		*/});
		
		$.fn.viewportChecker = function(useroptions){
			// Define options and extend with user
			var options = {
				classToAdd: 'visible',
				classToRemove : 'invisible',
				classToAddForFullView : 'full-visible',
				removeClassAfterAnimation: false,
				offset: 100,
				repeat: false,
				invertBottomOffset: true,
				callbackFunction: function(elem, action){},
				scrollHorizontal: false,
				scrollBox: window
			};
			$.extend(options, useroptions);

			// Cache the given element and height of the browser
			var $elem = this,
				boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};

			/*
			 * Main method that checks the elements and adds or removes the class(es)
			 */
			this.checkElements = function(){
				var viewportStart, viewportEnd;

				// Set some vars to check with
				if (!options.scrollHorizontal){
					viewportStart = Math.max(
						$('html').scrollTop(),
						$('body').scrollTop(),
						$(window).scrollTop()
					);
					viewportEnd = (viewportStart + boxSize.height);
				}
				else{
					viewportStart = Math.max(
						$('html').scrollLeft(),
						$('body').scrollLeft(),
						$(window).scrollLeft()
					);
					viewportEnd = (viewportStart + boxSize.width);
				}

				// Loop through all given dom elements
				$elem.each(function(){
					var $obj = $(this),
						objOptions = {},
						attrOptions = {};

					//  Get any individual attribution data
					if ($obj.data('vp-add-class'))
						attrOptions.classToAdd = $obj.data('vp-add-class');
					if ($obj.data('vp-remove-class'))
						attrOptions.classToRemove = $obj.data('vp-remove-class');
					if ($obj.data('vp-add-class-full-view'))
						attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
					if ($obj.data('vp-keep-add-class'))
						attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
					if ($obj.data('vp-offset'))
						attrOptions.offset = $obj.data('vp-offset');
					if ($obj.data('vp-repeat'))
						attrOptions.repeat = $obj.data('vp-repeat');
					if ($obj.data('vp-scrollHorizontal'))
						attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
					if ($obj.data('vp-invertBottomOffset'))
						attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');

					// Extend objOptions with data attributes and default options
					$.extend(objOptions, options);
					$.extend(objOptions, attrOptions);

					// If class already exists; quit
					if ($obj.data('vp-animated') && !objOptions.repeat){
						return;
					}

					// Check if the offset is percentage based
					if (String(objOptions.offset).indexOf("%") > 0)
						objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;

					// Get the raw start and end positions
					var rawStart = (!objOptions.scrollHorizontal) ? $obj.offset().top : $obj.offset().left,
						rawEnd = (!objOptions.scrollHorizontal) ? rawStart + $obj.height() : rawStart + $obj.width();

					// Add the defined offset
					var elemStart = Math.round( rawStart ) + objOptions.offset,
						elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();

					if (objOptions.invertBottomOffset)
						elemEnd -= (objOptions.offset * 2);

					// Add class if in viewport
					if ((elemStart < viewportEnd) && (elemEnd > viewportStart)){

						// Remove class
						$obj.removeClass(objOptions.classToRemove);
						$obj.addClass(objOptions.classToAdd);

						// Do the callback function. Callback wil send the jQuery object as parameter
						objOptions.callbackFunction($obj, "add");

						// Check if full element is in view
						if (rawEnd <= viewportEnd && rawStart >= viewportStart)
							$obj.addClass(objOptions.classToAddForFullView);
						else
							$obj.removeClass(objOptions.classToAddForFullView);

						// Set element as already animated
						$obj.data('vp-animated', true);

						if (objOptions.removeClassAfterAnimation) {
							$obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
								$obj.removeClass(objOptions.classToAdd);
							});
						}

					// Remove class if not in viewport and repeat is true
					} else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)){
						$obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);

						// Do the callback function.
						objOptions.callbackFunction($obj, "remove");

						// Remove already-animated-flag
						$obj.data('vp-animated', false);
					}
				});

			};

			/**
			 * Binding the correct event listener is still a tricky thing.
			 * People have expierenced sloppy scrolling when both scroll and touch
			 * events are added, but to make sure devices with both scroll and touch
			 * are handles too we always have to add the window.scroll event
			 *
			 * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/25
			 * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/27
			 */

			// Select the correct events
			if( 'ontouchstart' in window || 'onmsgesturechange' in window ){
				// Device with touchscreen
				$(document).bind("touchmove MSPointerMove pointermove", this.checkElements);
			}

			// Always load on window load
	//		$(options.scrollBox).bind("load scroll", this.checkElements);
			$(options.scrollBox).on('load pageReady scroll', function(e) { // AW for AWITCore
				boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};
				$elem.checkElements();
			});
			
			// On resize change the height var
			$(window).resize(function(e){
				boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};
				$elem.checkElements();
			});

			// trigger inital check if elements already visible
			this.checkElements();

			// Default jquery plugin behaviour
			return this;
		};
		
		})(jQuery);
		
	}
	
//! OTHER FUNCTIONS
	{ ACInfo(function() {/*! jQuery Mousewheel 3.1.13
		
		Copyright 2015 jQuery Foundation and other contributors
		Released under the MIT license.
		
	*/});
	
	!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
	
	}
	{ ACInfo(function() {/*! Auto-ellipsis (example: text...) plugin for jQuery (jquery.autoellipsis)
		
		pvdspek
		https://github.com/pvdspek/jquery.autoellipsis
		http://pvdspek.github.io/jquery.autoellipsis/
		Copyright (c) 2011 Peter van der Spek
		The MIT License (MIT)
		
		The example code below shows how to use the ellipsis plugin. It uses jGFeed to retrieve the Global News RSS feed from the New York Times.
		The feed items are rendered in fixed-height blocks, after which the ellipsis is applied. Using the default .ellipsis() call with no arguments, the ellipsis method works on all sub-elements.
		
	*/});
	
	(function(a){function m(){if(!d){d=!0;for(var c in b)a(c).each(function(){var d,e;d=a(this),e=d.data("jqae"),(e.containerWidth!=d.width()||e.containerHeight!=d.height())&&f(d,b[c])});d=!1}}function l(a){b[a]&&(delete b[a],b.length||c&&(window.clearInterval(c),c=undefined))}function k(a,d){b[a]=d,c||(c=window.setInterval(function(){m()},200))}function j(){return this.nodeType===3}function i(b){if(b.contents().length){var c=b.contents(),d=c.eq(c.length-1);if(d.filter(j).length){var e=d.get(0).nodeValue;e=a.trim(e);if(e==""){d.remove();return!0}return!1}while(i(d));if(d.contents().length)return!1;d.remove();return!0}return!1}function h(a){if(a.contents().length){var b=a.contents(),c=b.eq(b.length-1);return c.filter(j).length?c:h(c)}a.append("");var b=a.contents();return b.eq(b.length-1)}function g(b){var c=h(b);if(c.length){var d=c.get(0).nodeValue,e=d.lastIndexOf(" ");e>-1?(d=a.trim(d.substring(0,e)),c.get(0).nodeValue=d):c.get(0).nodeValue="";return!0}return!1}function f(b,c){var d=b.data("jqae");d||(d={});var e=d.wrapperElement;e||(e=b.wrapInner("<div/>").find(">div"),e.css({margin:0,padding:0,border:0}));var f=e.data("jqae");f||(f={});var j=f.originalContent;j?e=f.originalContent.clone(!0).data("jqae",{originalContent:j}).replaceAll(e):e.data("jqae",{originalContent:e.clone(!0)}),b.data("jqae",{wrapperElement:e,containerWidth:b.width(),containerHeight:b.height()});var k=b.height(),l=(parseInt(b.css("padding-top"),10)||0)+(parseInt(b.css("border-top-width"),10)||0)-(e.offset().top-b.offset().top),m=!1,n=e;c.selector&&(n=a(e.find(c.selector).get().reverse())),n.each(function(){var b=a(this),d=b.text(),f=!1;if(e.innerHeight()-b.innerHeight()>k+l)b.remove();else{i(b);if(b.contents().length){m&&(h(b).get(0).nodeValue+=c.ellipsis,m=!1);while(e.innerHeight()>k+l){f=g(b);if(!f){m=!0,b.remove();break}i(b);if(b.contents().length)h(b).get(0).nodeValue+=c.ellipsis;else{m=!0,b.remove();break}}c.setTitle=="onEllipsis"&&f||c.setTitle=="always"?b.attr("title",d):c.setTitle!="never"&&b.removeAttr("title")}}})}var b={},c,d=!1,e={ellipsis:"...",setTitle:"never",live:!1};a.fn.ellipsis=function(b,c){var d,g;d=a(this),typeof b!="string"&&(c=b,b=undefined),g=a.extend({},e,c),g.selector=b,d.each(function(){var b=a(this);f(b,g)}),g.live?k(d.selector,g):l(d.selector);return this}})(jQuery);
	
	}
	{ ACInfo(function() {/*! dragula.js Drag and drop so simple it hurts
		
		bevacqua
		https://github.com/bevacqua/dragula
		https://bevacqua.github.io/dragula/
		The MIT License (MIT)
		
	*/});
	
	!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.dragula=e()}}(function(){return function e(n,t,r){function o(u,c){if(!t[u]){if(!n[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=t[u]={exports:{}};n[u][0].call(l.exports,function(e){var t=n[u][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,t){"use strict";function r(e){var n=u[e];return n?n.lastIndex=0:u[e]=n=new RegExp(c+e+a,"g"),n}function o(e,n){var t=e.className;t.length?r(n).test(t)||(e.className+=" "+n):e.className=n}function i(e,n){e.className=e.className.replace(r(n)," ").trim()}var u={},c="(?:^|\\s)",a="(?:\\s|$)";n.exports={add:o,rm:i}},{}],2:[function(e,n,t){(function(t){"use strict";function r(e,n){function t(e){return-1!==le.containers.indexOf(e)||fe.isContainer(e)}function r(e){var n=e?"remove":"add";o(S,n,"mousedown",O),o(S,n,"mouseup",L)}function c(e){var n=e?"remove":"add";o(S,n,"mousemove",N)}function m(e){var n=e?"remove":"add";w[n](S,"selectstart",C),w[n](S,"click",C)}function h(){r(!0),L({})}function C(e){ce&&e.preventDefault()}function O(e){ne=e.clientX,te=e.clientY;var n=1!==i(e)||e.metaKey||e.ctrlKey;if(!n){var t=e.target,r=T(t);r&&(ce=r,c(),"mousedown"===e.type&&(p(t)?t.focus():e.preventDefault()))}}function N(e){if(ce){if(0===i(e))return void L({});if(void 0===e.clientX||e.clientX!==ne||void 0===e.clientY||e.clientY!==te){if(fe.ignoreInputTextSelection){var n=y("clientX",e),t=y("clientY",e),r=x.elementFromPoint(n,t);if(p(r))return}var o=ce;c(!0),m(),D(),B(o);var a=u(W);Z=y("pageX",e)-a.left,ee=y("pageY",e)-a.top,E.add(ie||W,"gu-transit"),K(),U(e)}}}function T(e){if(!(le.dragging&&J||t(e))){for(var n=e;v(e)&&t(v(e))===!1;){if(fe.invalid(e,n))return;if(e=v(e),!e)return}var r=v(e);if(r&&!fe.invalid(e,n)){var o=fe.moves(e,r,n,g(e));if(o)return{item:e,source:r}}}}function X(e){return!!T(e)}function Y(e){var n=T(e);n&&B(n)}function B(e){$(e.item,e.source)&&(ie=e.item.cloneNode(!0),le.emit("cloned",ie,e.item,"copy")),Q=e.source,W=e.item,re=oe=g(e.item),le.dragging=!0,le.emit("drag",W,Q)}function P(){return!1}function D(){if(le.dragging){var e=ie||W;M(e,v(e))}}function I(){ce=!1,c(!0),m(!0)}function L(e){if(I(),le.dragging){var n=ie||W,t=y("clientX",e),r=y("clientY",e),o=a(J,t,r),i=q(o,t,r);i&&(ie&&fe.copySortSource||!ie||i!==Q)?M(n,i):fe.removeOnSpill?R():A()}}function M(e,n){var t=v(e);ie&&fe.copySortSource&&n===Q&&t.removeChild(W),k(n)?le.emit("cancel",e,Q,Q):le.emit("drop",e,n,Q,oe),j()}function R(){if(le.dragging){var e=ie||W,n=v(e);n&&n.removeChild(e),le.emit(ie?"cancel":"remove",e,n,Q),j()}}function A(e){if(le.dragging){var n=arguments.length>0?e:fe.revertOnSpill,t=ie||W,r=v(t),o=k(r);o===!1&&n&&(ie?r&&r.removeChild(ie):Q.insertBefore(t,re)),o||n?le.emit("cancel",t,Q,Q):le.emit("drop",t,r,Q,oe),j()}}function j(){var e=ie||W;I(),z(),e&&E.rm(e,"gu-transit"),ue&&clearTimeout(ue),le.dragging=!1,ae&&le.emit("out",e,ae,Q),le.emit("dragend",e),Q=W=ie=re=oe=ue=ae=null}function k(e,n){var t;return t=void 0!==n?n:J?oe:g(ie||W),e===Q&&t===re}function q(e,n,r){function o(){var o=t(i);if(o===!1)return!1;var u=H(i,e),c=V(i,u,n,r),a=k(i,c);return a?!0:fe.accepts(W,i,Q,c)}for(var i=e;i&&!o();)i=v(i);return i}function U(e){function n(e){le.emit(e,f,ae,Q)}function t(){s&&n("over")}function r(){ae&&n("out")}if(J){e.preventDefault();var o=y("clientX",e),i=y("clientY",e),u=o-Z,c=i-ee;J.style.left=u+"px",J.style.top=c+"px";var f=ie||W,l=a(J,o,i),d=q(l,o,i),s=null!==d&&d!==ae;(s||null===d)&&(r(),ae=d,t());var p=v(f);if(d===Q&&ie&&!fe.copySortSource)return void(p&&p.removeChild(f));var m,h=H(d,l);if(null!==h)m=V(d,h,o,i);else{if(fe.revertOnSpill!==!0||ie)return void(ie&&p&&p.removeChild(f));m=re,d=Q}(null===m&&s||m!==f&&m!==g(f))&&(oe=m,d.insertBefore(f,m),le.emit("shadow",f,d,Q))}}function _(e){E.rm(e,"gu-hide")}function F(e){le.dragging&&E.add(e,"gu-hide")}function K(){if(!J){var e=W.getBoundingClientRect();J=W.cloneNode(!0),J.style.width=d(e)+"px",J.style.height=s(e)+"px",E.rm(J,"gu-transit"),E.add(J,"gu-mirror"),fe.mirrorContainer.appendChild(J),o(S,"add","mousemove",U),E.add(fe.mirrorContainer,"gu-unselectable"),le.emit("cloned",J,W,"mirror")}}function z(){J&&(E.rm(fe.mirrorContainer,"gu-unselectable"),o(S,"remove","mousemove",U),v(J).removeChild(J),J=null)}function H(e,n){for(var t=n;t!==e&&v(t)!==e;)t=v(t);return t===S?null:t}function V(e,n,t,r){function o(){var n,o,i,u=e.children.length;for(n=0;u>n;n++){if(o=e.children[n],i=o.getBoundingClientRect(),c&&i.left+i.width/2>t)return o;if(!c&&i.top+i.height/2>r)return o}return null}function i(){var e=n.getBoundingClientRect();return u(c?t>e.left+d(e)/2:r>e.top+s(e)/2)}function u(e){return e?g(n):n}var c="horizontal"===fe.direction,a=n!==e?i():o();return a}function $(e,n){return"boolean"==typeof fe.copy?fe.copy:fe.copy(e,n)}var G=arguments.length;1===G&&Array.isArray(e)===!1&&(n=e,e=[]);var J,Q,W,Z,ee,ne,te,re,oe,ie,ue,ce,ae=null,fe=n||{};void 0===fe.moves&&(fe.moves=l),void 0===fe.accepts&&(fe.accepts=l),void 0===fe.invalid&&(fe.invalid=P),void 0===fe.containers&&(fe.containers=e||[]),void 0===fe.isContainer&&(fe.isContainer=f),void 0===fe.copy&&(fe.copy=!1),void 0===fe.copySortSource&&(fe.copySortSource=!1),void 0===fe.revertOnSpill&&(fe.revertOnSpill=!1),void 0===fe.removeOnSpill&&(fe.removeOnSpill=!1),void 0===fe.direction&&(fe.direction="vertical"),void 0===fe.ignoreInputTextSelection&&(fe.ignoreInputTextSelection=!0),void 0===fe.mirrorContainer&&(fe.mirrorContainer=x.body);var le=b({containers:fe.containers,start:Y,end:D,cancel:A,remove:R,destroy:h,canMove:X,dragging:!1});return fe.removeOnSpill===!0&&le.on("over",_).on("out",F),r(),le}function o(e,n,r,o){var i={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},u={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},c={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};t.navigator.pointerEnabled?w[n](e,u[r],o):t.navigator.msPointerEnabled?w[n](e,c[r],o):(w[n](e,i[r],o),w[n](e,r,o))}function i(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function u(e){var n=e.getBoundingClientRect();return{left:n.left+c("scrollLeft","pageXOffset"),top:n.top+c("scrollTop","pageYOffset")}}function c(e,n){return"undefined"!=typeof t[n]?t[n]:S.clientHeight?S[e]:x.body[e]}function a(e,n,t){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=x.elementFromPoint(n,t),o.className=i,r}function f(){return!1}function l(){return!0}function d(e){return e.width||e.right-e.left}function s(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===x?null:e.parentNode}function p(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||m(e)}function m(e){return e?"false"===e.contentEditable?!1:"true"===e.contentEditable?!0:m(v(e)):!1}function g(e){function n(){var n=e;do n=n.nextSibling;while(n&&1!==n.nodeType);return n}return e.nextElementSibling||n()}function h(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function y(e,n){var t=h(n),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in t)&&r[e]in t&&(e=r[e]),t[e]}var b=e("contra/emitter"),w=e("crossvent"),E=e("./classes"),x=document,S=x.documentElement;n.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(e,n,t){n.exports=function(e,n){return Array.prototype.slice.call(e,n)}},{}],4:[function(e,n,t){"use strict";var r=e("ticky");n.exports=function(e,n,t){e&&r(function(){e.apply(t||null,n||[])})}},{ticky:9}],5:[function(e,n,t){"use strict";var r=e("atoa"),o=e("./debounce");n.exports=function(e,n){var t=n||{},i={};return void 0===e&&(e={}),e.on=function(n,t){return i[n]?i[n].push(t):i[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var r=arguments.length;if(1===r)delete i[n];else if(0===r)i={};else{var o=i[n];if(!o)return e;o.splice(o.indexOf(t),1)}return e},e.emit=function(){var n=r(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var u=(i[n]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===n&&t["throws"]!==!1&&!u.length)throw 1===i.length?i[0]:i;return u.forEach(function(r){t.async?o(r,i,c):r.apply(c,i),r._once&&e.off(n,r)}),e}},e}},{"./debounce":4,atoa:3}],6:[function(e,n,t){(function(t){"use strict";function r(e,n,t,r){return e.addEventListener(n,t,r)}function o(e,n,t){return e.attachEvent("on"+n,f(e,n,t))}function i(e,n,t,r){return e.removeEventListener(n,t,r)}function u(e,n,t){var r=l(e,n,t);return r?e.detachEvent("on"+n,r):void 0}function c(e,n,t){function r(){var e;return p.createEvent?(e=p.createEvent("Event"),e.initEvent(n,!0,!0)):p.createEventObject&&(e=p.createEventObject()),e}function o(){return new s(n,{detail:t})}var i=-1===v.indexOf(n)?o():r();e.dispatchEvent?e.dispatchEvent(i):e.fireEvent("on"+n,i)}function a(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}function f(e,n,t){var r=l(e,n,t)||a(e,n,t);return h.push({wrapper:r,element:e,type:n,fn:t}),r}function l(e,n,t){var r=d(e,n,t);if(r){var o=h[r].wrapper;return h.splice(r,1),o}}function d(e,n,t){var r,o;for(r=0;r<h.length;r++)if(o=h[r],o.element===e&&o.type===n&&o.fn===t)return r}var s=e("custom-event"),v=e("./eventmap"),p=t.document,m=r,g=i,h=[];t.addEventListener||(m=o,g=u),n.exports={add:m,remove:g,fabricate:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(e,n,t){(function(e){"use strict";var t=[],r="",o=/^on/;for(r in e)o.test(r)&&t.push(r.slice(2));n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,n,t){(function(e){function t(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(n){}return!1}var r=e.CustomEvent;n.exports=t()?r:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,n,t){var r,o="function"==typeof setImmediate;r=o?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},n.exports=r},{}]},{},[2])(2)});
	
	}
	
//! SYS OTHER FUNCTIONS
	$(window).on("scroll", function() {
		
		if ($(this).scrollTop() > 25) {
			$('html').addClass('scroll');
		} else {
			$('html').removeClass('scroll');
		}
		
	});
	{ ACInfo(function() {/*! date-and-time.js A Minimalist DateTime utility for Node.js and the browser
		
		(c) KNOWLEDGECODE
		https://github.com/knowledgecode/date-and-time
		The MIT License (MIT)
		
	*/});
	
	(function(p){var b={},n="en",k={en:{MMMM:"January February March April May June July August September October November December".split(" "),MMM:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),dddd:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ddd:"Sun Mon Tue Wed Thu Fri Sat".split(" "),dd:"Su Mo Tu We Th Fr Sa".split(" "),A:["a.m.","p.m."],formatter:{YYYY:function(a){return("000"+a.getFullYear()).slice(-4)},YY:function(a){return("0"+a.getFullYear()).slice(-2)},
	Y:function(a){return""+a.getFullYear()},MMMM:function(a){return this.MMMM[a.getMonth()]},MMM:function(a){return this.MMM[a.getMonth()]},MM:function(a){return("0"+(a.getMonth()+1)).slice(-2)},M:function(a){return""+(a.getMonth()+1)},DD:function(a){return("0"+a.getDate()).slice(-2)},D:function(a){return""+a.getDate()},HH:function(a){return("0"+a.getHours()).slice(-2)},H:function(a){return""+a.getHours()},A:function(a){return this.A[11<a.getHours()|0]},hh:function(a){return("0"+(a.getHours()%12||12)).slice(-2)},
	h:function(a){return""+(a.getHours()%12||12)},mm:function(a){return("0"+a.getMinutes()).slice(-2)},m:function(a){return""+a.getMinutes()},ss:function(a){return("0"+a.getSeconds()).slice(-2)},s:function(a){return""+a.getSeconds()},SSS:function(a){return("00"+a.getMilliseconds()).slice(-3)},SS:function(a){return("0"+(a.getMilliseconds()/10|0)).slice(-2)},S:function(a){return""+(a.getMilliseconds()/100|0)},dddd:function(a){return this.dddd[a.getDay()]},ddd:function(a){return this.ddd[a.getDay()]},dd:function(a){return this.dd[a.getDay()]},
	Z:function(a){a=a.utc?0:a.getTimezoneOffset()/.6;return(0<a?"-":"+")+("000"+Math.abs(a-a%100*.4)).slice(-4)},post:function(a){return a}},parser:{find:function(a,c){for(var b=-1,e=0,g=0,h=a.length,f;g<h;g++)f=a[g],!c.indexOf(f)&&f.length>e&&(b=g,e=f.length);return{index:b,length:e}},MMMM:function(a){return this.parser.find(this.MMMM,a)},MMM:function(a){return this.parser.find(this.MMM,a)},A:function(a){return this.parser.find(this.A,a)},h:function(a,c){return(12===a?0:a)+12*c},pre:function(a){return a}}}};
	b.format=function(a,c,q){var e=b.addMinutes(a,q?a.getTimezoneOffset():0),g=k[n],h=g.formatter;e.utc=q;return c.replace(/(\[[^\[\]]*]|\[.*\][^\[]*\]|YYYY|YY|MMM?M?|DD|HH|hh|mm|ss|SSS?|ddd?d?|.)/g,function(a){var b=h[a];return b?h.post(b.call(g,e,c)):a.replace(/\[(.*)]/,"$1")})};b.parse=function(a,c,q){var e=k[n],g=e.parser.pre(a),h=0,f,m,v=/(MMMM?|A)|(YYYY)|(SSS)|(MM|DD|HH|hh|mm|ss)|(YY|M|D|H|h|m|s|SS)|(S)|(.)/g,p={2:/^\d{1,4}/,3:/^\d{1,3}/,4:/^\d\d/,5:/^\d\d?/,6:/^\d/};a=[31,28,31,30,31,30,31,31,
	30,31,30,31];for(var d={Y:1970,M:1,D:1,H:0,m:0,s:0,S:0};f=v.exec(c);){var r=0;var t=1;for(m="";!m;)m=f[++r];f=m.charAt(0);var u=g.slice(h);if(2>r){var l=e.parser[m].call(e,u,c);d[f]=l.index;"M"===f&&d[f]++;t=l.length}else if(7>r)l=(u.match(p[r])||[""])[0],d[f]=("S"===f?(l+"000").slice(0,-m.length):l)|0,t=l.length;else if(" "!==f&&f!==u[0])return NaN;if(!t)return NaN;h+=t}if(h!==g.length||!l)return NaN;d.Y+=70>d.Y?2E3:100>d.Y?1900:0;d.H=d.H||e.parser.h(d.h||0,d.A||0);c=new Date(d.Y,d.M-1,d.D,d.H,d.m,
	d.s,d.S);a[1]+=b.isLeapYear(c)|0;return 1>d.M||12<d.M||1>d.D||d.D>a[d.M-1]||23<d.H||59<d.m||59<d.s?NaN:q?b.addMinutes(c,-c.getTimezoneOffset()):c};b.isValid=function(a,c){return!!b.parse(a,c)};b.addYears=function(a,c){return b.addMonths(a,12*c)};b.addMonths=function(a,c){var b=new Date(a.getTime());b.setMonth(b.getMonth()+c);return b};b.addDays=function(a,c){var b=new Date(a.getTime());b.setDate(b.getDate()+c);return b};b.addHours=function(a,c){return b.addMilliseconds(a,36E5*c)};b.addMinutes=function(a,
	c){return b.addMilliseconds(a,6E4*c)};b.addSeconds=function(a,c){return b.addMilliseconds(a,1E3*c)};b.addMilliseconds=function(a,b){return new Date(a.getTime()+b)};b.subtract=function(a,b){var c=a.getTime()-b.getTime();return{toMilliseconds:function(){return c},toSeconds:function(){return c/1E3|0},toMinutes:function(){return c/6E4|0},toHours:function(){return c/36E5|0},toDays:function(){return c/864E5|0}}};b.isLeapYear=function(a){a=a.getFullYear();return!(a%4)&&!!(a%100)||!(a%400)};b.isSameDay=function(a,
	c){return b.format(a,"YYYYMMDD")===b.format(c,"YYYYMMDD")};b.locale=function(a){a&&(!k[a]&&"function"===typeof require&&p&&require("./locale/"+a),n=a);return n};b.getLocales=function(a){return k[a||n]};b.setLocales=function(a,b){var c=function(a,b){var c=function(){},e;c.prototype=b;c=new c;for(e in a)a.hasOwnProperty(e)&&(c[e]=a[e]);return c},e=k[a]||k.en,g=c(b,e);b.formatter&&(g.formatter=c(b.formatter,e.formatter));b.parser&&(g.parser=c(b.parser,e.parser));k[a]=g};"object"===typeof module&&"object"===
	typeof module.exports?module.exports=b:"function"===typeof define&&define.amd?define([],function(){return b}):p.date=b})(this);
	}
	(function($) { ACInfo(function() {/*! Addition of numbers on jQuery
		
		(c) artem testerov
		https://ru.stackoverflow.com/a/515502
		$.sum(1,2,3,4);
		
	*/});
	
		$.sum = function() {    
			return Array.prototype.reduce.call(arguments, function (sum, current) {
				return sum + parseInt(current);
			}, 0);
		};

	})(jQuery);
	function loadExt(files, after) {
	/* {logAdd(''
		
		
		
		+'loadExt'
		+'<br/> To load JS and CSS files with vanilla JavaScript'
		+'<br/> (c) Aymkdn'
		+'<br/> https://gist.github.com/Aymkdn/98acfbb46fbe7c1f00cdd3c753520ea8'
		+'<br/>'
		
		
		
	)}; */

	  var _this=this; 
	  _this.files = files;
	  _this.js = [];
	  _this.head = document.getElementsByTagName("head")[0];
	  _this.after = after || function(){};
	  _this.loadStyle = function(file) {
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = file;
		_this.head.appendChild(link);
//		console.log(link);
//		console.log(file.length);
	  };
	  _this.loadScript = function(i) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = _this.js[i];
		var loadNextScript = function() {
		  if (++i < _this.js.length) _this.loadScript(i);  
		  else _this.after();  
		};
		script.onload = function() { loadNextScript() };
		_this.head.appendChild(script);
	  }
	  for (var i=0;i<_this.files.length;i++) {
		if (/\.js$|\.js\?/.test(_this.files[i])) _this.js.push(_this.files[i])
		if (/\.css$|\.css\?/.test(_this.files[i])) _this.loadStyle(_this.files[i])
	  }
	  if (_this.js.length>0) _this.loadScript(0);
	  else _this.after();
	  
	};
	(function( w, $ ) { ACInfo(function() {/*! jQuery-FontSpy.js v3.0.0
		
		https://github.com/patrickmarabeas/jQuery-FontSpy.js
		
		Copyright 2013, Patrick Marabeas http://pulse-dev.com
		Released under the MIT license
		http://opensource.org/licenses/mit-license.php
		
		Date: 02/11/2015
		
	*/});
	
	  fontSpy = function  ( fontName, conf ) {
		var $html = $('html'),
			$body = $('body'),
			fontFamilyName = fontName;

			// Throw error if fontName is not a string or not is left as an empty string
			if (typeof fontFamilyName !== 'string' || fontFamilyName === '') {
			  throw 'A valid fontName is required. fontName must be a string and must not be an empty string.';
			}

		var defaults = {
			font: fontFamilyName,
			fontClass: fontFamilyName.toLowerCase().replace( /\s/g, '' ),
			success: function() {},
			failure: function() {},
			testFont: 'Courier New',
			testString: 'QW@HhsXJ',
			glyphs: '',
			delay: 50,
			timeOut: 1000,
			callback: $.noop
		};

		var config = $.extend( defaults, conf );

		var $tester = $('<span>' + config.testString+config.glyphs + '</span>')
			.css('position', 'absolute')
			.css('top', '-9999px')
			.css('left', '-9999px')
			.css('visibility', 'hidden')
			.css('fontFamily', config.testFont)
			.css('fontSize', '250px');

		$body.append($tester);

		var fallbackFontWidth = $tester.outerWidth();

		$tester.css('fontFamily', config.font + ',' + config.testFont);

		var failure = function () {
		  $html.addClass("no-"+config.fontClass);
		  if( config && config.failure ) {
			config.failure();
		  }
		  config.callback(new Error('FontSpy timeout'));
		  $tester.remove();
		};

		var success = function () {
		  config.callback();
		  $html.addClass(config.fontClass);
		  if( config && config.success ) {
			config.success();
		  }
		  $tester.remove();
		};

		var retry = function () {
		  setTimeout(checkFont, config.delay);
		  config.timeOut = config.timeOut - config.delay;
		};

		var checkFont = function () {
		  var loadedFontWidth = $tester.outerWidth();

		  if (fallbackFontWidth !== loadedFontWidth){
			success();
		  } else if(config.timeOut < 0) {
			failure();
		  } else {
			retry();
		  }
		}

		checkFont();
		}

	})( this, jQuery );
	{ ACInfo(function() {/*! jQuery.scrollTo
		
		Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
		Licensed under MIT
		https://github.com/flesler/jquery.scrollTo
		@projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
		@author Ariel Flesler
		@version 2.1.2
		
	*/});
	
(function(factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof module !== 'undefined' && module.exports) {
		// CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Global
		factory(jQuery);
	}
})(function($) {
	'use strict';

	var $scrollTo = $.scrollTo = function(target, duration, settings) {
		return $(window).scrollTo(target, duration, settings);
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: 0,
		limit:true
	};

	function isWin(elem) {
		return !elem.nodeName ||
			$.inArray(elem.nodeName.toLowerCase(), ['iframe','#document','html','body']) !== -1;
	}

	$.fn.scrollTo = function(target, duration, settings) {
		if (typeof duration === 'object') {
			settings = duration;
			duration = 0;
		}
		if (typeof settings === 'function') {
			settings = { onAfter:settings };
		}
		if (target === 'max') {
			target = 9e9;
		}

		settings = $.extend({}, $scrollTo.defaults, settings);
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.duration;
		// Make sure the settings are given right
		var queue = settings.queue && settings.axis.length > 1;
		if (queue) {
			// Let's keep the overall duration
			duration /= 2;
		}
		settings.offset = both(settings.offset);
		settings.over = both(settings.over);

		return this.each(function() {
			// Null target yields nothing, just like jQuery does
			if (target === null) return;

			var win = isWin(this),
				elem = win ? this.contentWindow || window : this,
				$elem = $(elem),
				targ = target,
				attr = {},
				toff;

			switch (typeof targ) {
				// A number will pass the regex
				case 'number':
				case 'string':
					if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
						targ = both(targ);
						// We are done
						break;
					}
					// Relative/Absolute selector
					targ = win ? $(targ) : $(targ, elem);
					/* falls through */
				case 'object':
					if (targ.length === 0) return;
					// DOMElement / jQuery
					if (targ.is || targ.style) {
						// Get the real position of the target
						toff = (targ = $(targ)).offset();
					}
			}

			var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;

			$.each(settings.axis.split(''), function(i, axis) {
				var Pos	= axis === 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					prev = $elem[key](),
					max = $scrollTo.max(elem, axis);

				if (toff) {// jQuery / DOMElement
					attr[key] = toff[pos] + (win ? 0 : prev - $elem.offset()[pos]);

					// If it's a dom element, reduce the margin
					if (settings.margin) {
						attr[key] -= parseInt(targ.css('margin'+Pos), 10) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width'), 10) || 0;
					}

					attr[key] += offset[pos] || 0;

					if (settings.over[pos]) {
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis === 'x'?'width':'height']() * settings.over[pos];
					}
				} else {
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) === '%' ?
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if (settings.limit && /^\d+$/.test(attr[key])) {
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
				}

				// Don't waste time animating, if there's no need.
				if (!i && settings.axis.length > 1) {
					if (prev === attr[key]) {
						// No animation needed
						attr = {};
					} else if (queue) {
						// Intermediate animation
						animate(settings.onAfterFirst);
						// Don't animate this axis again in the next iteration.
						attr = {};
					}
				}
			});

			animate(settings.onAfter);

			function animate(callback) {
				var opts = $.extend({}, settings, {
					// The queue setting conflicts with animate()
					// Force it to always be true
					queue: true,
					duration: duration,
					complete: callback && function() {
						callback.call(elem, targ, settings);
					}
				});
				$elem.animate(attr, opts);
			}
		});
	};

	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function(elem, axis) {
		var Dim = axis === 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;

		if (!isWin(elem))
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();

		var size = 'client' + Dim,
			doc = elem.ownerDocument || elem.document,
			html = doc.documentElement,
			body = doc.body;

		return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
	};

	function both(val) {
		return $.isFunction(val) || $.isPlainObject(val) ? val : { top:val, left:val };
	}

	// Add special hooks so that window scroll properties can be animated
	$.Tween.propHooks.scrollLeft =
	$.Tween.propHooks.scrollTop = {
		get: function(t) {
			return $(t.elem)[t.prop]();
		},
		set: function(t) {
			var curr = this.get(t);
			// If interrupt is true and user scrolled, stop animating
			if (t.options.interrupt && t._last && t._last !== curr) {
				return $(t.elem).stop();
			}
			var next = Math.round(t.now);
			// Don't waste CPU
			// Browsers don't render floating point scroll
			if (curr !== next) {
				$(t.elem)[t.prop](next);
				t._last = this.get(t);
			}
		}
	};

	// AMD requirement
	return $scrollTo;
});
	
	}
	{ ACInfo(function() {/*! jQuery.query - Query String Modification and Creation for jQuery
		
		Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
		Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
		Date: 2009/8/13
		
		@author Blair Mitchelmore
		@version 2.2.3
		
		https://github.com/alrusdi/jquery-plugin-query-object
		
	*/});
	
new function(settings) { 
  // Various Settings
  var $separator = settings.separator || '&';
  var $spaces = settings.spaces === false ? false : true;
  var $suffix = settings.suffix === false ? '' : '[]';
  var $prefix = settings.prefix === false ? false : true;
  var $hash = $prefix ? settings.hash === true ? "#" : "?" : "";
  var $numbers = settings.numbers === false ? false : true;

  jQuery.query = new function() {
    var is = function(o, t) {
      return o != undefined && o !== null && (!!t ? o.constructor == t : true);
    };
    var parse = function(path) {
      var m, rx = /\[([^[]*)\]/g, match = /^([^[]+)(\[.*\])?$/.exec(path), base = match[1], tokens = [];
      while (m = rx.exec(match[2])) tokens.push(m[1]);
      return [base, tokens];
    };
    var set = function(target, tokens, value) {
      var o, token = tokens.shift();
      if (typeof target != 'object') target = null;
      if (token === "") {
        if (!target) target = [];
        if (is(target, Array)) {
          target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));
        } else if (is(target, Object)) {
          var i = 0;
          while (target[i++] != null);
          target[--i] = tokens.length == 0 ? value : set(target[i], tokens.slice(0), value);
        } else {
          target = [];
          target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));
        }
      } else if (token && token.match(/^\s*[0-9]+\s*$/)) {
        var index = parseInt(token, 10);
        if (!target) target = [];
        target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);
      } else if (token) {
        var index = token.replace(/^\s*|\s*$/g, "");
        if (!target) target = {};
        if (is(target, Array)) {
          var temp = {};
          for (var i = 0; i < target.length; ++i) {
            temp[i] = target[i];
          }
          target = temp;
        }
        target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);
      } else {
        return value;
      }
      return target;
    };
    
    var queryObject = function(a) {
      var self = this;
      self.keys = {};
      
      if (a.queryObject) {
        jQuery.each(a.get(), function(key, val) {
          self.SET(key, val);
        });
      } else {
        self.parseNew.apply(self, arguments);
      }
      return self;
    };
    
    queryObject.prototype = {
      queryObject: true,
      parseNew: function(){
        var self = this;
        self.keys = {};
        jQuery.each(arguments, function() {
          var q = "" + this;
          q = q.replace(/^[?#]/,''); // remove any leading ? || #
          q = q.replace(/[;&]$/,''); // remove any trailing & || ;
          if ($spaces) q = q.replace(/[+]/g,' '); // replace +'s with spaces
          
          jQuery.each(q.split(/[&;]/), function(){
            var key = decodeURIComponent(this.split('=')[0] || "");
            var val = decodeURIComponent(this.split('=')[1] || "");
            
            if (!key) return;
            
            if ($numbers) {
              if (/^[+-]?[0-9]+\.[0-9]*$/.test(val)) // simple float regex
                val = parseFloat(val);
              else if (/^[+-]?[1-9][0-9]*$/.test(val)) // simple int regex
                val = parseInt(val, 10);
            }
            
            val = (!val && val !== 0) ? true : val;
            
            self.SET(key, val);
          });
        });
        return self;
      },
      has: function(key, type) {
        var value = this.get(key);
        return is(value, type);
      },
      GET: function(key) {
        if (!is(key)) return this.keys;
        var parsed = parse(key), base = parsed[0], tokens = parsed[1];
        var target = this.keys[base];
        while (target != null && tokens.length != 0) {
          target = target[tokens.shift()];
        }
        return typeof target == 'number' ? target : target || "";
      },
      get: function(key) {
        var target = this.GET(key);
        if (is(target, Object))
          return jQuery.extend(true, {}, target);
        else if (is(target, Array))
          return target.slice(0);
        return target;
      },
      SET: function(key, val) {
        var value = !is(val) ? null : val;
        var parsed = parse(key), base = parsed[0], tokens = parsed[1];
        var target = this.keys[base];
        this.keys[base] = set(target, tokens.slice(0), value);
        return this;
      },
      set: function(key, val) {
        return this.copy().SET(key, val);
      },
      REMOVE: function(key, val) {
        if (val) {
          var target = this.GET(key);
          if (is(target, Array)) {
            for (tval in target) {
                target[tval] = target[tval].toString();
            }
            var index = $.inArray(val, target);
            if (index >= 0) {
              key = target.splice(index, 1);
              key = key[index];
            } else {
              return;
            }
          } else if (val != target) {
              return;
          }
        }
        return this.SET(key, null).COMPACT();
      },
      remove: function(key, val) {
        return this.copy().REMOVE(key, val);
      },
      EMPTY: function() {
        var self = this;
        jQuery.each(self.keys, function(key, value) {
          delete self.keys[key];
        });
        return self;
      },
      load: function(url) {
        var hash = url.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");
        var search = url.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
        return new queryObject(url.length == search.length ? '' : search, url.length == hash.length ? '' : hash);
      },
      empty: function() {
        return this.copy().EMPTY();
      },
      copy: function() {
        return new queryObject(this);
      },
      COMPACT: function() {
        function build(orig) {
          var obj = typeof orig == "object" ? is(orig, Array) ? [] : {} : orig;
          if (typeof orig == 'object') {
            function add(o, key, value) {
              if (is(o, Array))
                o.push(value);
              else
                o[key] = value;
            }
            jQuery.each(orig, function(key, value) {
              if (!is(value)) return true;
              add(obj, key, build(value));
            });
          }
          return obj;
        }
        this.keys = build(this.keys);
        return this;
      },
      compact: function() {
        return this.copy().COMPACT();
      },
      toString: function() {
        var i = 0, queryString = [], chunks = [], self = this;
        var encode = function(str) {
          str = str + "";
          str = encodeURIComponent(str);
          if ($spaces) str = str.replace(/%20/g, "+");
          return str;
        };
        var addFields = function(arr, key, value) {
          if (!is(value) || value === false) return;
          var o = [encode(key)];
          if (value !== true) {
            o.push("=");
            o.push(encode(value));
          }
          arr.push(o.join(""));
        };
        var build = function(obj, base) {
          var newKey = function(key) {
            return !base || base == "" ? [key].join("") : [base, "[", key, "]"].join("");
          };
          jQuery.each(obj, function(key, value) {
            if (typeof value == 'object') 
              build(value, newKey(key));
            else
              addFields(chunks, newKey(key), value);
          });
        };
        
        build(this.keys);
        
        if (chunks.length > 0) queryString.push($hash);
        queryString.push(chunks.join($separator));
        
        return queryString.join("");
      }
    };
    
    return new queryObject(location.search, location.hash);
  };
}(jQuery.query || {}); // Pass in jQuery.query as settings object
	
	}
	
	
	
	

//! ADDONS FUNCTIONS & AW FUNCTIONS BETA

	{ //! UI FUNCTIONS
		
		{/*! jQuery Textarea AutoSize plugin
			
			Author: Javier Julio
			Licensed under the MIT license
			https://github.com/javierjulio/textarea-autosize
			
			modify by Alvio Wayne
			_2021_01_08_18_44_24_46
			
			*/
			
			(function ($, window, document, undefined) {

			  var pluginName = "AC_textareaAutoSize";
			  var pluginDataName = "plugin_" + pluginName;

			  var containsText = function (value) {
				return (value.replace(/\s/g, '').length > 0);
			  };

			  function Plugin(element, options) {
				this.element = element;
				this.$element = $(element);
				this.init();
			  }

			  Plugin.prototype = {
				init: function() {
					
				  var height = this.$element.outerHeight();
				  var diff = parseInt(this.$element.css('paddingBottom')) +
							 parseInt(this.$element.css('paddingTop')) || 0;
					
//					console.log(this.$element);
//					this.$element.addClass('textarea_autosize_on');
					
				  if (containsText(this.element.value)) {
					this.$element.height(this.element.scrollHeight - diff);
				  }

				  // keyup is required for IE to properly reset height when deleting text
				  this.$element.on('input keyup blur', function(event) {
					  
					var $window = $(window);
					var currentScrollPosition = $window.scrollTop();

					$(this)
					  .height(0)
					  .height(this.scrollHeight - diff);

					$window.scrollTop(currentScrollPosition);
					
				  });
				  
				  this.$element.on('blur', function(event) {
					  
//					  console.log($(this));
					  
					  if ($(this).hasClass('AC_extended_input')) {
						  
//						  console.log('hasClass');
						  
//						  console.log($(this).val());
//						  console.log($AC_trim($(this).val()));
						  
						  $(this).val($AC_trim($(this).val())).keyup();
						  
					  }
					  
				  });
				  
				}
			  };

			  $.fn[pluginName] = function (options) {
				this.each(function() {
				  if (!$.data(this, pluginDataName)) {
					$.data(this, pluginDataName, new Plugin(this, options));
				  }
				});
				return this;
			  };

			})(jQuery, window, document);
			
		}
		
		(function($) {/*! Restricts input for each element in the set of matched elements to the given inputFilter. (AC_input_filter)
			
			Last upadate 
			The MIT License (MIT)
			
			https://stackoverflow.com/a/995193
			https://jsfiddle.net/emkey08/tvx5e7q3
			
			*/
			
		  $.fn.AC_input_filter = $.fn.AC_inputFilter = $.fn.inputFilter = function(inputFilter) {
			return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
			  if (inputFilter(this.value)) {
				this.oldValue = this.value;
				this.oldSelectionStart = this.selectionStart;
				this.oldSelectionEnd = this.selectionEnd;
			  } else if (this.hasOwnProperty("oldValue")) {
				this.value = this.oldValue;
				this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
			  } else {
				this.value = "";
			  }
			});
		  };
		  
		}(jQuery));
		
		{/*! jquery-input-mask-phone-number 1.0.14 (usPhoneFormat)
			
			Licensed (The MIT License)
			Copyright © Raja Rama Mohan Thavalam <rajaram.tavalam@gmail.com>
			Last Updated On: 22/Aug/2020 IST  12:05 AM 
			
			*/
			
			$.fn.usPhoneFormat = function (options) {
				var params = $.extend({
					format: 'xxx-xxx-xxxx',
					international: false,

				}, options);

				if (params.format === 'xxx-xxx-xxxx') {
					$(this).bind('paste', function (e) {

						e.preventDefault();
						var inputValue = e.originalEvent && e.originalEvent.clipboardData.getData('Text');
						inputValue = inputValue.replace(/\D/g, '');
						if (!$.isNumeric(inputValue)) {
							return false;
						} else {
							if (inputValue.length > 9) {
								inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
							} else {
								inputValue = String(inputValue.replace(/(\d{3})(?=\d)/g, '$1-'));
							}
							$(this).val(inputValue);
							$(this).val('');
							inputValue = inputValue.substring(0, 12);
							$(this).val(inputValue);
						}
					});
					$(this).on('keydown touchend', function (e) {

						e = e || window.event;
						var key = e.which || e.keyCode; // keyCode detection
						var ctrl = e.ctrlKey || e.metaKey || key === 17; // ctrl detection
						if (key == 86 && ctrl) { // Ctrl + V Pressed !

						} else if (key == 67 && ctrl) { // Ctrl + C Pressed !

						} else if (key == 88 && ctrl) { // Ctrl + x Pressed !

						} else if (key == 65 && ctrl) { // Ctrl + a Pressed !
							$(this).trigger("paste");
						} else if (key != 9 && e.which != 8 && e.which != 0 && !(e.keyCode >= 96 && e.keyCode <= 105) && !(e.keyCode >= 48 && e.keyCode <= 57)) {
							return false;
						}
						var curchr = this.value.length;
						var curval = $(this).val();
						if (curchr == 3 && e.which != 8 && e.which != 0) {
							$(this).val(curval + "-");
						} else if (curchr == 7 && e.which != 8 && e.which != 0) {
							$(this).val(curval + "-");
						}
						$(this).attr('maxlength', '12');
					});

				} else if (params.format === '(xxx) xxx-xxxx') {
					$(this).on('keydown touchend', function (e) {

						e = e || window.event;
						var key = e.which || e.keyCode; // keyCode detection
						var ctrl = e.ctrlKey || e.metaKey || key === 17; // ctrl detection
						if (key == 86 && ctrl) { // Ctrl + V Pressed !

						} else if (key == 67 && ctrl) { // Ctrl + C Pressed !

						} else if (key == 88 && ctrl) { //Ctrl + x Pressed

						} else if (key == 65 && ctrl) { //Ctrl + a Pressed !
							$(this).trigger("paste");
						} else if (key != 9 && e.which != 8 && e.which != 0 && !(e.keyCode >= 96 && e.keyCode <= 105) && !(e.keyCode >= 48 && e.keyCode <= 57)) {
							return false;
						}
						var curchr = this.value.length;
						var curval = $(this).val();
						if (curchr == 3 && e.which != 8 && e.which != 0) {
							$(this).val('(' + curval + ')' + " ");
						} else if (curchr == 9 && e.which != 8 && e.which != 0) {
							$(this).val(curval + "-");
						}
						$(this).attr('maxlength', '14');

					});
					$(this).bind('paste', function (e) {

						e.preventDefault();
						var inputValue = e.originalEvent && e.originalEvent.clipboardData.getData('Text');
						inputValue = inputValue.replace(/\D/g, '');

						if (!$.isNumeric(inputValue)) {
							return false;
						} else {

							if (inputValue.length > 9) {
								inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"));
							} else if (inputValue.length > 6) {
								inputValue = String(inputValue.replace(/(\d{3})(\d{3})(?=\d)/g, '($1) $2-'));
							} else if (inputValue.length > 3) {
								inputValue = String(inputValue.replace(/(\d{3})(?=\d)/g, '($1) '));
							}

							$(this).val(inputValue);
							$(this).val('');
							inputValue = inputValue.substring(0, 14);
							$(this).val(inputValue);
						}
					});

				}
				
			}
			
		}
		
		
		
		
		
		
	}
	(function($){  //! UI AW FUNCTIONS
		
		// php functions in js
		$AC_isset = $AW_AC_isset = $isset = function(data) {/*! AC_isset
			
			Last upadate _2021_01_08_20_40_03_68
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			var result = false;
			
//			console.log(typeof data);
			
//			if (typeof data !== 'undefined' && typeof data.length !== 'undefined' && typeof data.length !== '0' && typeof data.length !== 0) {
			if (typeof(data) !== "undefined" && data !== null && data.length !== 0) {
				result = true;
			}
			
			return result;
			
		}
		$AC_empty = $AW_AC_empty = $empty = function(data) {/*! AC_empty
			
			Last upadate _2020_12_18_19_00_26_45
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			var result = false;
			
			if (typeof data == 'string' || typeof data == 'number') {
				data = data.trim();
			}
			
			if (data == '') {
				result = true;
			}
			
			return result;
			
		}
		$AC_trim = $AW_AC_trim = $AC_trimChar = $AW_AC_trimChar = function(string, charToRemove, charSplit) {/*! AC_trim
			
			Create _2020_12_26_13_18_43_95
			Last upadate _2021_01_10_18_55_20_21
			(c) Alvio Wayne
			The MIT License (MIT)
			
			$AC_trim(data, 'px');
			$AC_trim(data, '.#');
			$AC_trim('.class', '.#', '');
			$AC_trim('.class', '.#', true);
			$AC_trim('.class', '. #', ' ');
			
			$AC_trim('100px', 'px');
			
			*/
			
//			console.log('AC_trim');
//			console.log(charToRemove.split(''));
//			console.log(charSplit);
//			console.log(typeof(charSplit));
//			console.log(charToRemove);
//			console.log(typeof(charToRemove));
//			console.log($AC_isset(charToRemove));
			
//			console.log(typeof(charToRemove) !== "undefined");
			
			
			
 			if (!$AC_isset(charToRemove)) {
				
				string = string.replace(/^\s+|\s+$/g, '');
				
			}
			else if ($AC_isset(charToRemove) && typeof(charSplit) !== "string" && typeof(charSplit) !== "boolean") {
				
				let re = new RegExp('^'+charToRemove+'+|'+charToRemove+'+$', 'g');
//				console.log(re);
				
				string = string.replace(re, '');
//				console.log(string);
				
			}			
			else {
				
				var charToRemove_arr = [charToRemove];
				
				if (typeof(charSplit) == "string") {
					
					charToRemove_arr = charToRemove.split(charSplit);
					
				}
				else if (typeof(charSplit) == "boolean") {
					
					charToRemove_arr = charToRemove.split('');
					
				}
//				console.log(charToRemove_arr);
				
				$.each(charToRemove_arr, function (index, charToRemove_val) {
					
 					while(string.charAt(0)==charToRemove_val) {
						string = string.substring(1);
					}
					
					while(string.charAt(string.length-1)==charToRemove_val) {
						string = string.substring(0,string.length-1);
					}
					
/* 					var string = '100px';
					var charToRemove_val = 'px';
					let re = new RegExp('^'+charToRemove_val+'+|'+charToRemove_val+'+$', 'g');
					string = string.replace(re, ''); */
					
//					let re = new RegExp('^'+charToRemove_val+'+|'+charToRemove_val+'+$', 'g');
//					console.log(re);
					
//					string = string.replace(re, '');
//					console.log(string);
					
				});
				
			}
			
			
			
/* 			var charToRemove_arr = charToRemove.split('');
			
			$.each(charToRemove_arr, function (index, charToRemove_val) {
				
				while(string.charAt(0)==charToRemove_val) {
					string = string.substring(1);
				}
				
				while(string.charAt(string.length-1)==charToRemove_val) {
					string = string.substring(0,string.length-1);
				}
				
			}); */
			
			
//			console.log(string);
			return string;
			
			
			
		}
		
		// Classes & IDs, AC_addClass, AC_removeClass, AC_trimChar
		$AC_toClass = $AW_AC_toClass = function(data) {/*! AC_toClass
			
			Last upadate _2020_12_11_13_20_59_41
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			return '.' + data;
			
		}
		$AC_toID = $AW_AC_toID = function(data) {/*! AC_toID
			
			Last upadate _2020_12_11_13_20_59_41
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			return '#' + data;
			
		}
		$AC_woCID = $AC_woClassID = $AW_AC_woClassID = function(data) {/*! AC_woClassID
			
			Last upadate _2020_12_11_13_20_59_41
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
//			data = data.replace(".", "");
//			data = data.replace("#", "");
			
//			data = data.trim('.');
//			data = data.trim('#');
			
//			console.log('AC_woCID');
			
			data = $AC_trim(data, '.#[]', '');
			
			return data;
			
		}
		
		// addClass, removeClass, hasClass MODIFY
		$.fn.AC_addClass = $.fn.AW_AC_addClass = function(data) {/*! AC_addClass
			
			Create _2020_12_26_12_19_50_82
			Last upadate _2020_12_26_13_18_43_95
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
//			console.log(this);
//			console.log(data);
			
			data = $AC_trim(data, '.#', '');
//			console.log(data);
			
			$(this).addClass(data);
			
			
			
		}
		$.fn.AC_removeClass = $.fn.AW_AC_removeClass = function(data) {/*! AC_removeClass
			
			Create _2020_12_26_12_19_50_82
			Last upadate _2020_12_26_13_18_43_95
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
//			console.log(this);
			
			data = $AC_trim(data, '.#', '');
			$(this).removeClass(data);
			
			
			
		}
		$.fn.AC_hasClass = $.fn.AW_AC_hasClass = function(data) {/*! AC_hasClass
			
			Create _2021_01_05_02_38_30_57
			Last upadate _2021_01_05_02_38_30_57
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
//			console.log(this);
			
			data = $AC_trim(data, '.#', '');
			return $(this).hasClass(data);
			
			
			
		}
		
		$.fn.AC_serialize = function () {/*! AC_serialize
			
			Create _2021_01_14_23_45_28_36
			Last upadate _2021_01_14_23_45_28_36
			(c) Alvio Wayne
			The MIT License (MIT)
			
			based on https://stackoverflow.com/a/17809361
			
			*/
			
//			console.log($(this));
			
 			var checkboxes = $(this).find('input[type="checkbox"][name]');
//			console.log($(checkboxes));
			
			$.each(checkboxes, function(key, value) {
				if (value.checked === false) {
					value.value = 0;
				} else {
					value.value = 1;
				}
				$(value).attr('type', 'hidden');
			});
			
			var serialize = $(this).serialize();
			
			$(checkboxes).attr('type', 'checkbox');
			
			return serialize;
			
		}
		$.fn.AC_serializeArray = function () {/*! AC_serializeArray
			
			Create _2021_01_14_23_45_28_36
			Last upadate _2021_01_14_23_45_28_36
			(c) Alvio Wayne
			The MIT License (MIT)
			
			based on https://stackoverflow.com/a/17809361
			
			*/
			
//			console.log($(this));
			
 			var checkboxes = $(this).find('input[type="checkbox"][name]');
//			console.log($(checkboxes));
			
			$.each(checkboxes, function(key, value) {
				if (value.checked === false) {
					value.value = 0;
				} else {
					value.value = 1;
				}
				$(value).attr('type', 'hidden');
			});
			
			var serialize = $(this).serializeArray();
			
			$(checkboxes).attr('type', 'checkbox');
			
			return serialize;
			
		}
		
		
		
		
		
		// INPUTS
		{/*! AC_material
			
			Last upadate _2021_01_20_21_47_43_57
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			{/*! selectRange
				
				(c) https://stackoverflow.com/a/841121
				
				*/
				$.fn.selectRange = function(start, end) {
					if(end === undefined) {
						end = start;
					}
					return this.each(function() {
						if('selectionStart' in this) {
							this.selectionStart = start;
							this.selectionEnd = end;
						} else if(this.setSelectionRange) {
							this.setSelectionRange(start, end);
						} else if(this.createTextRange) {
							var range = this.createTextRange();
							range.collapse(true);
							range.moveEnd('character', end);
							range.moveStart('character', start);
							range.select();
						}
					});
				};
			}
			$.fn.AC_material = $.fn.AW_AC_material = $.fn.inputText = function(option) {/*! AW material input
				
				(c) Alvio Wayne
				The MIT License (MIT)
				
				*/
				
				var This = $(this);
				
				var mainName = 'AC_material';
				var mainClass = '.'+mainName;
				
				var wrapName = 'AC_material_wrap';
				var wrapClass = '.'+wrapName;
				
				var lineName = 'AC_material_underLine';
				var lineClass = '.'+lineName;
				
				var focusName = 'inputfocus';
				var focusClass = '.'+focusName;
				
				var labelName = 'AC_material_floatlabel';
				var labelClass = '.'+labelName;
				
				var floatwrapName = 'AC_material_floatwrap';
				var floatwrapClass = '.'+floatwrapName;
				
				var dcName = 'AC_material_dc';
				var dcClass = '.'+dcName;
				
				var ignore_wrapName = 'AC_material_ignore_wrap';
				var ignore_wrapClass = '.'+ignore_wrapName;
				
				
				
				if (option == 'disabled') {
					
					$.each($(This), function(index, item) {
						
						if ($(item).attr('disabled') !== 'disabled') {
							$(item).prop('disabled', true);
							$(item).closest(wrapClass).addClass('AC_material_disabled');
						}
						
					});
					
					return false;
				}
				if (option == 'reset') {
					
					$.each($(This), function(index, item) {
						
						if ($(item).attr('disabled') == 'disabled') {
							$(item).prop('disabled', false);
	//						$(item).closest(mainClass).find(labelClass).removeClass('disabled');
							$(item).closest(wrapClass).removeClass('AC_material_disabled');
						}
						
					});
					
					return false;
				}
				
				
				
				$(this).each(function(){
					
//					console.log($(this));
//					console.log($(this).css("display") != "none" && $(this).css("visibility") != "hidden");
					
					if (
						
						!$(this).hasClass('AC_noMaterial') && !$(this).closest(wrapClass).length
//						&& ($(this).css("display") != "none" && $(this).css("visibility") != "hidden")
//						&& ($(this).css("display") != "none")
						&& !$(this).closest(ignore_wrapClass).length
						
					){
						
 						if (!$(this).closest('.ac_selectric-wrapper').length) {
							$(this).wrap('<div class="'+wrapName+' '+mainName+'"></div>');
						} else {
							$(this).closest('.ac_selectric-wrapper').wrap('<div class="'+wrapName+' '+mainName+'"></div>');
						}
						
						var wrap = $(this).closest(wrapClass);
//						console.log(wrap);
						
//						$(this).wrap('<div class="'+wrapName+' '+mainName+'"></div>');
	//					$(this).wrap('<div class="'+wrapName+'"></div>');
						
						
						
						if ($(this).hasClass(dcName)) {
							
							$(this).prop('readonly', true);
							$(this).closest(wrapClass).addClass('AC_material_readonly');
							
						};
						if ($(this).closest('.ac_selectric-wrapper').length) {
							
							$(this).closest(wrapClass).addClass('AC_material_readonly');
							
						};
						
						// select
//						var iwidth = $(this).css('width');
//						$(this).closest(wrapClass).css('width',iwidth);
						
						
						
						var input = $(this);
//						var wrap = $(this).closest(wrapClass);
						var inputline = $(this).closest(lineClass);
						
						if ($(this).is('input') && typeof $(this).attr("placeholder") !== 'undefined') {
							var inputph = $(this).attr("placeholder");
							$(this).removeAttr("placeholder");
						} else if (($(this).is('div') || $(this).is('textarea') || $(this).is('select')) && typeof $(this).attr("data-placeholder") !== 'undefined') {
							var inputph = $(this).attr("data-placeholder");
//							console.log(inputph);
							$(this).removeAttr("data-placeholder");
						}
//						var fontsize = $(this).css('font-size');
						
						
						
					
						
						
						// AC_material_floatwrap ac_selectric
						wrap.append('<div class="'+floatwrapName+'"></div>');
//						$(wrap).find(floatwrapClass).css('font-size', fontsize);
						
						
						
						
						
						if ($(this).closest('.ac_selectric-wrapper').length) {
							
							var bLeft = $(this).closest(wrapClass).find('.ac_selectric-wrapper div.ac_selectric').css('border-left').split('px')[0] + 'px';
							var bRight = $(this).closest(wrapClass).find('.ac_selectric-wrapper div.ac_selectric').css('border-right').split('px')[0] + 'px';
							
//							console.log(bLeft);
							
							if (bLeft !== '0px') {
								$(wrap).find(floatwrapClass).css('left', bLeft);
							}
							if (bRight !== '0px') {
								$(wrap).find(floatwrapClass).css('right', bRight);
							}
							
						}
						else {
							
							var pLeft = $(this).css('padding-left');
							var pRight = $(this).css('padding-right');
							
							if (pLeft !== '0px') {
								$(wrap).find(floatwrapClass).css('left', pLeft);
							}
							if (pRight !== '0px') {
								$(wrap).find(floatwrapClass).css('right', pRight);
							}
							
						}
						
						
						
						
						
						var floatwrap = $(this).closest(wrapClass).find(floatwrapClass);
						
						
						
						// AC_material_underLine
 						if (!$(this).closest('.ac_selectric-wrapper').length) {
							if ($(this).hasClass('AC_material_preUnderLine')) {
								wrap.addClass('AC_material_preUnderLine');
							}
							floatwrap.append('<div class="'+lineName+'"></div>');
						}
						
						
						
						// AC_material_placeholder

						var AC_material_floatlabel_css = '';
						
//						console.log($(this));
//						console.log(typeof $(this).attr("data-AC_material_floatlabel_css") !== 'undefined');
//						console.log(($(this).is('input') || $(this).is('div') || $(this).is('textarea') || $(this).is('select')));
//						console.log(($(this).is('input') || $(this).is('div') || $(this).is('textarea') || $(this).is('select')) && typeof $(this).attr("data-AC_material_floatlabel_css") !== 'undefined');
						
						if (($(this).is('input') || $(this).is('div') || $(this).is('textarea') || $(this).is('select')) && typeof $(this).attr("data-AC_material_floatlabel_css") !== 'undefined') {
							AC_material_floatlabel_css = $(this).attr("data-AC_material_floatlabel_css");
							$(this).removeAttr("data-AC_material_floatlabel_css");
						}
						
						if (inputph) {
							floatwrap.append('<div class="'+labelName+'" style="'+AC_material_floatlabel_css+'">'+inputph+'</div>');
						}
	/* 					var label = $(this).closest(wrapClass).find(labelClass);
						if ($(this).prop('required') || $(this).hasClass('.required')) {
							label.append(' *');
						} */
						
						
						
						// AC_material_focus ...
						if ($(this).val() || This.is('div')) {
							wrap.addClass(focusName);
						}
						$(this).focus(function(){
							
							console.log('focus');
							
							if ($(this).attr('readonly')) { return false };
							
							wrap.addClass(focusName);
							wrap.addClass("inputfocusline");
							wrap.addClass("AC_material_focus");
							
						});
						$(this).blur(function() {
							
							wrap.removeClass("inputfocusline");
							wrap.removeClass("AC_material_focus");
							
							if ($(this).attr('readonly')) { return false };
							if ($(this).val()) {
								wrap.addClass(focusName);
							} else {
								wrap.removeClass(focusName);
							}
							
							if ($(this).hasClass(dcName)) {
								
								$(this).prop('readonly', true);
								$(this).closest(wrapClass).addClass('AC_material_readonly');
								
							};
							
						});
						$(this).change(function() {
							
							if ($(this).attr('readonly')) { return false };
							
							wrap.addClass('animOff');
							if ($(this).val()) {
								wrap.addClass(focusName);
							} else {
								wrap.removeClass(focusName);
							}
							
							setTimeout(function(){ wrap.removeClass('animOff'); }, 50);
							
						});
						
						
						
						if ( $(this).css('display') == 'none' ) {
							wrap.css('display', 'none');
						}
						if ($(this).attr('readonly') == 'readonly') {
							$(wrap).addClass('AC_material_readonly');
						}
						if ($(this).attr('disabled') == 'disabled') {
							$(wrap).addClass('AC_material_disabled');
						}
						
						
						
					}
					else if ($(this).closest(wrapClass).length) {
						
						var wrap = $(this).closest(wrapClass);
						if ($(this).val() || This.is('div')) {
							wrap.addClass(focusName);
						}
						
					}
					
				});
				
				
				
			};
			var AC_material_dcName = 'AC_material_dc';
			var AC_material_dcClass = '.'+AC_material_dcName;
			var AC_material_dcTarget = 'input.'+AC_material_dcName + ', textarea.'+AC_material_dcName;
			
			$(document).on('dblclick', AC_material_dcTarget, function(e) {
				
//				console.log('dblclick');
				
				var This = $(e.target).closest(AC_material_dcClass);
				
				$(This).prop('readonly', false);
				$(This).closest('.AC_material_wrap').removeClass('AC_material_readonly');
				
//				if (!$(This).hasClass("AC_material_focus")) {
					$(This).selectRange($(This).val().length);
//				}
				
				$(This).focus();
				
			});
			
		}
		
		$AC_typing = $AW_AC_typing = function(elements) {/*! AC_typing
			
			Last upadate _2021_01_14_16_24_52_87
			(c) Alvio Wayne
			The MIT License (MIT)
			
			Based on:
			https://stackoverflow.com/a/4220182
			
			*/
			
			
			
			var AC_typing_timer; // timer identifier
			var AC_typing_done_interval = 500; //time in ms, 5 second for example
			var class_AC_typing_active = '.AC_typing_active';
			
			
			
			
			
//			console.log($(elements));
			
			
			if (!$(elements).AC_hasClass(class_AC_typing_active)) {
				
				$(elements).AC_addClass(class_AC_typing_active);
				
				
	/*  			$.each($(elements), function(index, item) {
					
					if ($(item).hasAttr('data-AC_typing_interval')) {
						AC_typing_done_interval = $(item).attr('data-AC_typing_interval');
					}
					
				}); */
				
	//				$(document).on('keyup cut paste', $(item), function(e) {
				$(elements).on('keyup cut paste', function(e) {
					
	//				console.log($(elements));
	//				console.log($(elements).is(":focus"));
					
					clearTimeout(AC_typing_timer);
					
					if ($(elements).is(":focus")) {
						
						$(elements).trigger("AC_typing");
						
	//					console.log("AC_typing");
						
	//					AC_typing_timer = setTimeout(AC_typing_done_event, AC_typing_done_interval);
						
						if ($(this).hasAttr('data-AC_typing_interval')) {
							AC_typing_done_interval = $(this).attr('data-AC_typing_interval');
						}
						
						AC_typing_timer = setTimeout(AC_typing_done_event, AC_typing_done_interval);
						
					}
					
				});
	//				$(document).on('keydown', $(elements), function(e) {
				$(elements).on('keydown', function(e) {
					
					if ($(elements).is(":focus")) {
						clearTimeout(AC_typing_timer);
					}
					
				});
	/* 				$(document).on('click', function(e) {
					
					if (!$(e.target).closest(elements).length) {
						clearTimeout(AC_typing_timer);
					}
					
				}); */
				$(elements).on('blur', function(e) {
					
					clearTimeout(AC_typing_timer);
					
				});
				
				$(elements).on('change', function(e) {
					
					AC_typing_done_event();
					
				});
				
				function AC_typing_done_event() {
					
					console.log('AC_typing_done AC_typing_done_event()');
					$(elements).trigger("AC_typing_done");
					
				}
				
			}
			
/* 			$(document).on('keyup cut paste', $input, function(e) {
				
//				console.log($input);
				
				clearTimeout(typingTimer);
				typingTimer = setTimeout(doneTyping, doneTypingInterval);
				
				$input.trigger("AC_typing_start");
				
			});
			$(document).on('keydown', $input, function(e) {
				
				clearTimeout(typingTimer);
				
			});
			
			function doneTyping () {
				
//				console.log('doneTyping');
				$input.trigger("AC_typing_done");
				
			} */
			
			
			
			
			
		}
		$.fn.AC_autocomplete = $.fn.AW_AC_autocomplete = $.fn.AC_ac = function(uOption) {/*! AC_autocomplete
			
			Create _2021_01_05_02_43_49_15
			Last upadate _2021_01_08_20_40_03_68
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			var iOption_prepare_arr = {
				
				type: 'ajax',
				get: '',
				data_get: '',
				input_val_min: 3,
				
				data_send_post: {},
				
				preloader: true,
				max_height: '', // 400px
				
			}
			var iOption = {
				
//				type: 'ajax', // ajax, (data, datalist)
				prepare: function(input, input_val) { // url if ajax, obj if data
					
					/*
						
						if ( if something ) {return false;}; // no get, no ajax
						
						options = {
							
							type: 'ajax',
							get: url,
							data_get: 'customer_search',
							input_val_min: 0,
							
							data_send_post: {
								
								firstname_search: input_val,
								
							},
							
							preloader: true,
							max_height: '', // 400px
							
						}
						
						return options;
						
					*/
					
				},
				get: function(input_val) { // url if ajax, obj if data
					
					/*
					
 					get = '';
					get = $(obj);
					
					return get;
					
					*/
					
				},
				data_send: function(input_val) { // url if ajax, obj if data
					
					/*
					
					data = {
						filter_name: input_val,
					}
					
					return data;
					
					*/
					
				},
//				data_get: '',
//				input_val_min: 3,
//				preloader: true,
//				max_height: '', // 400px
				
				beforeSend: function(get, input_val) {},
				success: function(data, input_val) {},
				error: function(data, input_val) {},
				item_click: function(item, input_val) {},
				
			};
			$.extend(iOption, uOption);
//			console.log(iOption);
//			get = iOption.get();
//			console.log(get);
			
			
			
			var This_id = '#'+$(this).attr('id');
//			console.log($(this));
//			console.log(This_id);
			
			var AC_autocomplete_wrap = '.AC_autocomplete_wrap';
			var AC_autocomplete_input_focus = '.AC_autocomplete_input_focus';
			var AC_autocomplete = '.AC_autocomplete';
			var AC_autocomplete_list = '.AC_autocomplete_list';
			var AC_autocomplete_list_item = '.AC_autocomplete_list_item';
			var AC_autocomplete_close_b = '.AC_autocomplete_close_b';
			var AC_autocomplete_with_preloader = '.AC_autocomplete_with_preloader';
			var AC_autocomplete_preloader = '.AC_autocomplete_preloader';
			var AC_autocomplete_show = '.AC_autocomplete_list_show';
			
			
			
			if (!$(this).closest(AC_autocomplete_wrap).length) {
				
				$AC_typing($(this));
				AC_autocomplete_apply($(this));
				
			}
 			$.onCreate(This_id, function(elements) {
				
//				console.log(elements);
				
				if (!$(elements).closest(AC_autocomplete_wrap).length) {
					
					$AC_typing(elements);
					AC_autocomplete_apply(elements);
					
				}
				
			},true);
			
			
			
			function AC_autocomplete_apply(element) {
				
				if (!$(This).closest(AC_autocomplete_wrap).length) {
					
					var This = element;
					
					var AC_autocomplete_wrap_obj;
					var AC_autocomplete_list_obj;
					var AC_autocomplete_close_button_obj;
					
					
					
//					console.log('AC_autocomplete_wrap AC_woCID');
//					console.log($AC_woCID(AC_autocomplete_wrap));
					
		//			console.log($(This).closest(AC_autocomplete_wrap).length);
					if (!$(This).closest(AC_autocomplete_wrap).length) {
						
						AC_autocomplete_wrap_obj = $(This).wrap('<div class="'+$AC_woCID(AC_autocomplete_wrap)+'"></div>').closest(AC_autocomplete_wrap);
		//				console.log(AC_autocomplete_wrap_obj);
						
					}
					if (iOption_prepare_arr.preloader) {
						
						$(AC_autocomplete_wrap_obj).AC_addClass(AC_autocomplete_with_preloader);
						AC_autocomplete_preloader_obj = $('<div class="'+$AC_woCID(AC_autocomplete_preloader)+'"></div>').appendTo(AC_autocomplete_wrap_obj);
						
					}
					if (!$(AC_autocomplete_wrap_obj).find(AC_autocomplete_list).length) {
						
						AC_autocomplete_list_obj = $('<div class="'+$AC_woCID(AC_autocomplete_list)+'"></div>').appendTo(AC_autocomplete_wrap_obj);
						
					}
					if (!$AC_empty(iOption.max_height)) {
						
						$(AC_autocomplete_list_obj).css('max-height', iOption.max_height);
						
					}
					if (!$(This).hasClass('AC_typing')) {
						
						$(This).addClass('AC_typing');
						
					}
					
					
					
					function list_open() {
						
						$(AC_autocomplete_wrap_obj).AC_addClass(AC_autocomplete_show);
						
					}
					function list_close() {
						
						$(AC_autocomplete_wrap_obj).AC_removeClass(AC_autocomplete_show);
						
					}
					
					
					
					$(This).on('focus', function(e) { // get list
						
//						console.log('focus');
						
						if ($(this).attr('readonly') || $(this).attr('disable')) {return;};
						
						if (!$(this).AC_hasClass(AC_autocomplete_input_focus)) {
							$(this).AC_addClass(AC_autocomplete_input_focus);
//							console.log('AC_addClass AC_autocomplete_input_focus');
						}
						
					});
					$(This).on('AC_typing_done focus', function(e) { // get list
						
						if ($(This).AC_hasClass(AC_autocomplete_input_focus)) {
							
		//					if (iOption.prepare() == false) {return;};
							
							var input_val = $(This).val();
//							console.log('AC_typing_done focus');
//							console.log(input_val);
							
//							$.extend(iOption_prepare_arr, iOption.prepare(input_val));
//							$.extend(iOption_prepare_arr, uOption_prepare_arr);
	//						console.log(iOption_prepare_arr);
							
		//					get = iOption.get(input_val);
		//					data_send = iOption.data_send(input_val);
							
		//					get = iOption_prepare_arr.get;
		//					data_send_post = iOption_prepare_arr.data_send_post;
							
		//					console.log(get);
		//					console.log(data_send);
							
			//				if (get obj or str) {}
							
/* 							console.log(input_val);
							console.log(input_val.length);
							console.log(iOption.input_val_min);
							console.log(input_val.length >= iOption.input_val_min);
							console.log(input_val.length = iOption.input_val_min); */
							
							
							
 							var uOption_prepare_arr = iOption.prepare($(This), input_val);
//							console.log('uOption_prepare_arr');
//							console.log(uOption_prepare_arr);
							
							$.extend(iOption_prepare_arr, uOption_prepare_arr);
//							console.log('iOption_prepare_arr');
//							console.log(iOption_prepare_arr);
							
							var get = iOption_prepare_arr.get;
							var data_send_post = iOption_prepare_arr.data_send_post;
							
							
							
							
//							if (input_val.length && (input_val.length >= iOption.input_val_min)) {
							if (input_val.length >= iOption_prepare_arr.input_val_min) {
								
								if (typeof get === 'string' && iOption_prepare_arr.type == 'ajax') {
									
//									console.log('ajax');
									$.ajax({
										
										type: "POST",
										method:"POST",
										dataType: 'json',
										cache: false,
										
										url: get,
										data: data_send_post,
										
										beforeSend: function() {
											
											iOption.beforeSend(input_val);
											
	//										console.log($(this).closest(AC_autocomplete_wrap).find(AC_autocomplete_preloader));
											
											$materialLoader('spinner', $(This).closest(AC_autocomplete_wrap).find(AC_autocomplete_preloader), {
												
												method: 'html',
							//					position: 'relative',
												color: '#e0b15b',
												scale: '0.5',
												strokeWidth: '5',
							//					backColor: '#fff',
												
											});
											
										},
										success: function(data) {
											
//											console.log('success');
											
											if ($(This).AC_hasClass(AC_autocomplete_input_focus)) {
												
			//									console.log(AC_autocomplete_list_obj);
												iOption.success(data, AC_autocomplete_list_obj);
												
												if (!$AC_empty(data) && !$AC_empty(data[iOption_prepare_arr.data_get])) {
													
													$(AC_autocomplete_list_obj).html(data[iOption_prepare_arr.data_get]);
													list_open();
													
												}
												else if (!$AC_empty(data)) {
													
													$(AC_autocomplete_list_obj).html(data);
													list_open();
													
												}
												else {
													
													list_close();
													
												}
												
												$(This).closest(AC_autocomplete_wrap).find(AC_autocomplete_list_item).on('pointerdown', function(e) {
													
//													console.log('pointerdown');
//													console.log($(this));
													
													if (e.which==1) {
														iOption.item_click($(this), input_val, data);
													}
													
												});
												
												$materialLoader('remove', $(This).closest(AC_autocomplete_wrap).find(AC_autocomplete_preloader));
												
											}
											
											
											
										},
										error: function(data) {
											
											console.log(data);
											iOption.error(data, input_val);
											
											$materialLoader('remove', $(This).closest(AC_autocomplete_wrap).find(AC_autocomplete_preloader));
											
										}
										
									});
									
								}
/* 								else if (typeof get === 'object' && (iOption.type == 'object' || iOption.type == 'obj' || iOption.type == 'element' || iOption.type == 'elem')) {
									
									
									
								} */
								
							}
							else {
								
								list_close();
								
							}
							
						} else {
							
							list_close();
							
						}
						
						
						
					});
					$(This).on('blur', function(e) {
						
						$(This).AC_removeClass(AC_autocomplete_input_focus);
//						console.log('AC_removeClass AC_autocomplete_input_focus');
						
						list_close();
						
					});
					
				}
				
				
				
			}
			
			
			
			
			
		}
		
		{/*! AC_inputAutoWidth
			
			Last upadate _2021_01_10_18_55_20_21
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			$.fn.AC_input_autowidth = $.fn.AC_inputAutoWidth = $.fn.AW_AC_inputAutoWidth = function() {
				
 				var $inputs = $(this);
//				console.log($inputs);
				
 				var input = '.AC_input_autowidth';
 				var wrap = '.AC_input_autowidth_wrap';
 				var buffer = '.AC_input_autowidth_buffer';
				
				
				
				// wrap
				if (!$inputs.closest(wrap).length) {
					
					$inputs.wrap('<div class="'+$AC_woCID(wrap)+'"/>');
					$inputs.closest(wrap).append('<span class="'+$AC_woCID(buffer)+'"/>');
					
				}
				
				$inputs.each(function () {
					
					var $this = $(this);
					var rspace = $this.attr('data-AC_input_autowidth_rspace');
					rspace = Number(rspace);
					
					$this.closest(wrap).find(buffer).css({
						
						'font-size': $this.css('font-size'),
						'font-family': $this.css('font-family'),
						'white-space': $this.css('white-space'),
						'padding': $this.css('padding'),
						'min-width': $this.css('min-width'),
						
					});
					
					var this_val = $this.val() + rspace;
					
					var $span = $this.closest(wrap).find(buffer);
					$span.text(this_val);
					
					var $inputSize = $span.outerWidth();
					
					if ($inputSize > Number($AC_trim($this.css("min-width"), 'px'))) {
						$this.css("width", $inputSize);
					}
					else {
						$this.css("width", $this.css("min-width"));
					}
					
//					$this.css("width", $inputSize);
					
				});
				
				$inputs.on('keydown', function(e) {
					
//					console.log('keydown');
//					console.log(e.which);
//					console.log(e.charCode);
//					console.log(e.which && e.charCode);
					
 					if (e.which || e.charCode) {
						
//						console.log('keydown if');
						
//						var c = String.fromCharCode(e.keyCode | e.charCode);
						var $this = $(this);
						
						var rspace = $this.attr('data-AC_input_autowidth_rspace');
						rspace = Number(rspace);
						
//						var this_val = $this.val() + rspace + c;
						var this_val = $this.val() + rspace;
//						AC_resizeForText.call($this, $this.val() + c);
						
/* 						if (!this_val.trim()) {
						  this_val = $this.attr('placeholder').trim();
						} */
						
						var $span = $this.closest(wrap).find(buffer);
						$span.text(this_val);
						
						var $inputSize = $span.outerWidth();
						
/* 						console.log($this);
						console.log($span);
						console.log($inputSize);
						console.log($this.css("min-width"));
						console.log($AC_trim($this.css("min-width"), 'px'));
						console.log(Number($AC_trim($this.css("min-width"), 'px')));
						console.log($inputSize > Number($AC_trim($this.css("min-width"), 'px'))); */
					
						if ($inputSize > Number($AC_trim($this.css("min-width"), 'px'))) {
							$this.css("width", $inputSize);
						}
						else {
							$this.css("width", $this.css("min-width"));
						}
						
					}
					
				});
				
				// Backspace event only fires for keyup
 				$inputs.on('keyup', function(e) {
					
					if (e.keyCode === 8 || e.keyCode === 46) {
						
						var $this = $(this);
						
						var rspace = $this.attr('data-AC_input_autowidth_rspace');
						rspace = Number(rspace);
						
						var this_val = $this.val() + rspace;
						
						var $span = $this.closest(wrap).find(buffer);
						$span.text(this_val);
						
						var $inputSize = $span.outerWidth();
						
						if ($inputSize > Number($AC_trim($this.css("min-width"), 'px'))) {
							$this.css("width", $inputSize);
						}
						else {
							$this.css("width", $this.css("min-width"));
						}
						
					}
					
				});
				
				
				
				
				
			}
			
		}
		
		
		
		
		
		// OTHER
		$materialLoader = function(type, target, uOption) {/*! AW materialLoader
			
			Last upadate _2021_01_14_16_48_15_55
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			var iOption = {
				
				method: 'append', // or html
				position: 'absolute', // or relative
				color: '#c9aa71',
				strokeWidth: '4',
				scale: '1',
				backColor: '',
				zIndex: '',
				varf: function(){
					return $(target).find('.materialLoader_wrap')[0];
				},
				done: function(){},
				
			};
			$.extend(iOption, uOption);
			
			switch(type) {
				
				case 'spinner': {
					
					if (!$(target).find('.materialLoader_wrap').length) {
						
						if (iOption.method == 'append' && iOption.position == 'absolute' && $(target).css('position') == 'static') {
							$(target).css('position','relative');
						}
						
						var style_scale = 'transform: scale('+iOption.scale+'); -webkit-transform: scale('+iOption.scale+');';
						
						var style_backColor = '';
 						if (iOption.backColor !== '') {
							style_backColor = 'background-color: '+iOption.backColor+';';
						}
						
						var style_zIndex = '';
 						if (iOption.zIndex !== '') {
							style_zIndex = 'z-index: '+iOption.zIndex+';';
						}
						
						var style_position = 'position: '+iOption.position+';';
						
/* 						if (iOption.backColor == 'auto') {
							
							function getBackColor(elem) {
								
								var elemParrent = $(elem).parent();
								var bgColor = $(elemParrent).css('background-color');
	//							console.log(bgColor);
								
								if (bgColor == 'transparent' || bgColor == 'rgba(0, 0, 0, 0)') {
									
									getBackColor($(elemParrent));
									
								} else {
									
									return bgColor;
									
								}
								
							}
							
							var backColor = getBackColor($(target));
							console.log('backColor');
							console.log(backColor);
							
						} */
						
						var code = '<div class="materialLoader_wrap" style="'+style_zIndex+style_backColor+style_position+'"><div class="materialLoader" style="'+style_scale+'"><svg class="materialLoader_svg"><circle class="materialLoader_circle" cx="50" cy="50" r="20" fill="none" stroke-width="'+iOption.strokeWidth+'" stroke-miterlimit="10" style="stroke:'+iOption.color+';"></circle></svg></div></div>';
						
						
						if (iOption.method == 'append') {
							
							$(target).append(code);
							
						} else if (iOption.method == 'html') {
							
							$(target).html(code);
							
						}
						
						iOption.done($(target).find('.materialLoader_wrap')[0]);
						
					}
					
				} break;
				case 'remove': {
					
					if ($(target).find('.materialLoader_wrap').length) {
						
						$(target).find('.materialLoader_wrap').remove();
						
					}
					
				} break;
				
				default:
				break;
				
			}
			
		}
		$.fn.AC_buttonConfirm = $.fn.AW_AC_buttonConfirm = function(property) {/*! AW_buttonConfirm
			
			Last upadate _2021_01_01_14_47_07_31
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			
			
			// clases
			function toClass(param) {
				return '.' + param;
			}
			var main = 'AC_button_confirm';
			var statusLine = 'AC_button_confirm_statusLine';
			var hold = 'AC_button_confirm_hold';
			var done = 'AC_button_confirm_done';
			var off = 'AC_button_confirm_off';
			var off2 = 'AC_button_confirm_disable';
			
			
			
			// settings
			var holdTime = 600;
			var attr_holdTime = 'data-AC_button_confirm_holdTime';
			
			var statusLine_color = '#e0b15b';
			var attr_statusLine_color = 'data-AC_button_confirm_color';
			
			var AC_button_confirm_help_icon = 'AC_button_confirm_help_icon';
			var AC_button_confirm_help_icon_position = 'data-AC_button_confirm_help_icon_position';
			
			
			
			switch (property) {
				
				case 'prepare': {
					
					$.each($(this), function(index, item) {
						
						holdTime = $(this).attr('data-AC_button_confirm_holdTime');
						
						if (!$(this).find(toClass(statusLine)).length) {
							
							$(this).append('<div class="'+statusLine+'"></div>');
//							$(this).find(toClass(statusLine)).css("transition", "all "+ holdTime +"ms ease-in-out");
							
						}
						
						if ($(this).attr('data-'+AC_button_confirm_help_icon) && $(this).attr('data-'+AC_button_confirm_help_icon) == 'true' && !$(this).find(toClass(AC_button_confirm_help_icon)).length) {
							
//							var t_html = $(this).html();
//							$(this).html('<div style="display: flex;"><div>'+t_html+'</div><div class="'+AC_button_confirm_help_icon+'"></div></div>');
							
//							$(this).append('<div class="'+AC_button_confirm_help_icon+'"></div>');
							
//							console.log($(this).attr(AC_button_confirm_help_icon_position));
							if ($isset($(this).attr(AC_button_confirm_help_icon_position)) && $(this).attr(AC_button_confirm_help_icon_position) == 'absolute') {
								
//								console.log($(this).attr(AC_button_confirm_help_icon_position));
								
								$(this).append('<div class="'+AC_button_confirm_help_icon+'"></div>');
								
								$(this).find(toClass(AC_button_confirm_help_icon)).addClass('AC_button_confirm_help_icon_absolute');
								
								var t_div = $(this).css('padding-right');
								t_div = $AC_trim(t_div, 'px');
								t_div = parseInt(t_div, 0);
//								console.log(t_div);
								
								$(this).css('padding-right', t_div + 30 + 'px');
								
							}
							else {
								
								$(this).append('<div class="'+AC_button_confirm_help_icon+'"></div>');
								
							}
							
						}
						
					});
					
				} break
				case 'events': {
					
					
					if (!ifDevice('mobile')) {
	//					var AC_buttonConfirm_hover = false;
						$(document).on('mouseover', $(this), function(e) {
							
	//						AC_buttonConfirm_hover = true;
							
							var This = $(e.target).closest(toClass(main));
							$(This).addClass('AC_buttonConfirm_hover');
	//						$(This).css("background-color", "yellow");
							
						});
						$(document).on('mouseout', $(this), function(e) {
							
	//						AC_buttonConfirm_hover = false;
							
							var This = $(e.target).closest(toClass(main));
							$(This).removeClass('AC_buttonConfirm_hover');
	//						$(This).css("background-color", "lightgray");
							
						});
					}
					
					$(document).on('pointerdown', $(this), function(e) { if (e.which==1) {
						
//						console.log('pointerdown');
						
						clearTimeout(window.AC_buttonConfirm_cConfirm);
						
						var This = $(e.target).closest(toClass(main));
						
						if ($(This).hasClass(off) || $(This).hasClass(off2)) {return;};
						
						if ($(This).attr(attr_statusLine_color) && $(This).attr(attr_statusLine_color) !== '') {
							
							statusLine_color = $(This).attr(attr_statusLine_color);
							
						}
						$(This).find(toClass(statusLine)).css("background-color", statusLine_color);
						
						if ($(This).attr(attr_holdTime) && $(This).attr(attr_holdTime) !== '') {
							
							holdTime = $(This).attr(attr_holdTime);
							
						}
//						$(This).find(toClass(statusLine)).css("transition", "width, height "+ holdTime +"ms ease-in-out");
						$(This).find(toClass(statusLine)).css("transition", "width "+ holdTime +"ms ease-in-out, height "+ holdTime +"ms ease-in-out");
						
						$(This).addClass(hold);
								
		//				var holdTimeT = 100;
						holdTimeT=holdTime;
		//				holdTimeT=parseInt(holdTime, 0);
		//				console.log(holdTimeT);
						AC_buttonConfirm_cConfirm = setTimeout(function () {
							
							clearTimeout(AC_buttonConfirm_cConfirm);
							$(This).removeClass(hold);
							
//							console.log($(This));
//							console.log($(This).is(':hover'));
//							console.log(AC_buttonConfirm_hover);
//							console.log($(This).hasClass('AC_buttonConfirm_hover'));
							
//							if ($(This).is(':hover') === true) {
//							if ($(This).is(':hover')) {
							if ($(This).hasClass('AC_buttonConfirm_hover')) {
								
								$(This).trigger({ // callback
									type: done,
									click: $(This),
								});
								
							} else if (ifDevice('mobile')) {
								
								$(This).trigger({ // callback
									type: done,
									click: $(This),
								});
								
							}
							
						},
						holdTimeT);
						
					}});
					$(document).on('pointerup', $(this), function(e) { if (e.which==1) {
						
//						console.log('pointerup');
						
						clearTimeout(window.AC_buttonConfirm_cConfirm);
						
//						var This = $(e.target).closest(toClass(main));
						
//						if ($(toClass(main)).hasClass(off) || $(toClass(main)).hasClass(off2)) {return;};
						
						$(toClass(main)).find(toClass(statusLine)).css("transition", "none");
						
						$(toClass(main)).removeClass(hold);
						clearTimeout(window.AC_buttonConfirm_cConfirm);
						
					}});
					
				} break
				
				default:
				break;
				
			}
			
			
			
		}
		
		
		
		
		
		
		
		{/*! AC_NAV // DEV
			
			Last upadate 
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			$AC_NAV = $AW_AC_NAV = function() {
				
				// VARS
				var iOption = {
					
					
					
				};
//				$.extend(iOption, uOption);
				
				var AC_NAV_prefix = 'AC_NAV';
				var AC_NAV_prefix_class = '.'+AC_NAV_prefix+'_';
				
				var click_data_attr = '[data-'+AC_NAV_prefix+']';
				var target_id = '';
				
				var disable_all = AC_NAV_prefix_class + 'disable_all';
				var main = AC_NAV_prefix_class + 'main';
				var wrap = AC_NAV_prefix_class + 'wrap';
				var back = AC_NAV_prefix_class + 'back';
				var open = AC_NAV_prefix_class + 'open';
				
				var event_open = AC_NAV_prefix + '_open';
				var event_close = AC_NAV_prefix + '_close';
				
				
				
				// ACTIONS
				$(document).on('click', click_data_attr, function(e) { if (e.which !== 3) { // CREATE AND OPEN
					
					e.preventDefault();
					click = $(this);
					
					
					
					{ // PREPARE OPTIONS ARR
						
						click_data_attr_uOptions = $(click).attr($AC_woCID(click_data_attr));
						click_data_attr_uOptions = click_data_attr_uOptions.replaceAll(/\s/g,'');
	//					console.log(uOptions);
						
						click_data_attr_uOptions_arr = click_data_attr_uOptions.split(';');
	//					console.log(uOptions_arr);
						
						var iOption_new_arr = {};
						$.each(click_data_attr_uOptions_arr, function(index, item) {
							
							item_arr = item.split(':');
							iOption_new_arr[item_arr[0]] = item_arr[1];
							
						});
	//					console.log(iOption_new_arr);
						
						iOption_new_arr['target_id'] = '#' + iOption_new_arr['target_id'];
						
						$.extend(iOption, iOption_new_arr);
						console.log(iOption);
						
					}
					
					
					// CREATE AND OPEN
					if (!$('html').AC_hasClass(disable_all) && !$(iOption.target_id).length) {
						$('body').append('<div class="'+$AC_woCID(main)+'" id="'+$AC_woCID(iOption.target_id)+'" style="display:none;"></div>');
					}
					if (!$('html').AC_hasClass(disable_all) && iOption['target_id'].length && $(iOption.target_id).length) {
						AC_NAV_open();
					}
					
					
					
				}});
				
				var AC_NAV_close_allow = 1;
				$(document).on('pointerdown', function(e){ // CLOSE
					
					AC_NAV_close_allow = 1;
					if (typeof iOption.target_id !== 'undefined' && $(e.target).closest(iOption.target_id).length) {
						AC_NAV_close_allow = 0;
					}
					
				});
				$(document).on('pointerup', function(e){ // if pointerup just out modal - close
					
					if (typeof iOption.target_id !== 'undefined' && $(e.target).closest(iOption.target_id).length) {
						AC_NAV_close_allow = 0;
					}
					if (typeof iOption.target_id !== 'undefined' && (!$(e.target).closest(click_data_attr).length && !$(e.target).closest(iOption.target_id).length && AC_NAV_close_allow)) {
						AC_NAV_close(e);
					}
					
				});
				
				
				
				// FUNCTIONS
				function AC_NAV_open() {
					
//					console.log('AC_NAV_open');
					
					if (!$(iOption.target_id).closest(wrap).length) { $(iOption.target_id).wrap('<div class="'+$AC_woCID(wrap)+'"></div>'); }
					if ($(iOption.target_id).closest(wrap).length && !$(iOption.target_id).closest(wrap).find(back).length) { $(wrap).append('<div class="'+$AC_woCID(back)+'"></div>'); }
					
					$(iOption.target_id).closest(wrap).AC_addClass(open);
					$(iOption.target_id).css('display','');
					
					if ($(iOption.target_id).closest(wrap).length) {
						$SCROLL2('hide');
					};
					
					$(target_id).trigger({
						type: event_open,
					});
					
					
					
				}
				function AC_NAV_close(e) {
					
//					console.log('AC_NAV_close');
//					console.log($(e.target));
//					console.log($(e.target).closest(iOption.wrap).length);
//					console.log($(e.target).AC_hasClass(wrap));
					
					if ($(e.target).closest(iOption.wrap).length || $(e.target).AC_hasClass(wrap)) {
						
						$(e.target).closest(wrap).AC_removeClass(open);
						
						$(e.target).closest(wrap).find(target_id).trigger({
							type: event_close,
						});
						
					}
					
					
					
				}
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
			}
			
		}
//		$AC_NAV();
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})(jQuery);
	
	
	
	
	
//! AW FUNCTIONS COMPATIBILITY v6
	(function($){
		
		$AW_extLoad = function(files, callback) {/*! AW_extLoad css/js
			
			Last upadate _2020_12_01_17_54_43_32
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			var fCount = files.length;
			var fCountLoad = 0;
			
			function cssLoad(file) {
				
				var link = $('<link>', {rel: 'stylesheet', type: 'text/css', 'href': file}).appendTo('head');
				var link = link[0];
//				console.log(link);
				
				link.onload = function () {
					
//					console.log('onload');
//					console.log(link);
					ifCallback();
					
				};
				link.onerror = function () {
					
//					console.log('onerror');
//					console.log(link);
					ifCallback();
					
				};
				
			}
			function jsLoad(file) {
				
/* 				var script = $('<script>', {type:'text/javascript', 'src': file}).appendTo('head');
				var script = script[0];
				console.log(script);
				
				script.onload = function () {
					
					console.log('onload');
					console.log(script);
					ifCallback();
					
				};
				script.onerror = function () {
					
					console.log('onerror');
					console.log(script);
					ifCallback();
					
				}; */
				
				var script = document.createElement("script");
				script.src = file;
				script.type = 'text/javascript';
				script.onload = function() {
					
//					console.log('onload');
//					console.log(script);
					ifCallback();
					
				};
				script.onload = function() {
					
//					console.log('onload');
//					console.log(script);
					ifCallback();
					
				};
				document.getElementsByTagName("head")[0].appendChild(script);
				
			}
			function ifCallback() {
				
				fCountLoad++
				if (fCount == fCountLoad) {
					
					callback();
					
				} else {
					
					
					
				}
				
			}
			
			$(files).each(function() {
				
				var This = this;
				var ext = This.substr( (This.lastIndexOf('.') +1) );
	//			console.log(ext);
				
//				if (ext == 'css') {
				if (ext.includes('css')) {
					
					cssLoad(This);
					
//				} else if (ext == 'js') {
				} else if (ext.includes('js')) {
					
					jsLoad(This);
					
				}
				
			});
			
		}
		
		
		
		$AW_SCROLL = $SCROLL = $SCROLL2 = function(option, param) {/*! AW_SCROLL
			
			Last upadate _2019_05_19_14_55_01_00
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			switch(option) {
				
				case 'hide': {
					
//					console.log('scrollHide');
					
					if (document.body.scrollHeight > document.body.clientHeight && !$('html').hasClass("scrollHide")) {
						
						$('html').addClass("scrollHide");
						
						// создадим элемент с прокруткой
						var div = document.createElement('div');
						
						div.style.overflowY = 'scroll';
						div.style.width = '50px';
						div.style.height = '50px';
						
						// при display:none размеры нельзя узнать
						// нужно, чтобы элемент был видим,
						// visibility:hidden - можно, т.к. сохраняет геометрию
						div.style.visibility = 'hidden';
						
						document.body.appendChild(div);
						var scrollWidth = div.offsetWidth - div.clientWidth;
						document.body.removeChild(div);
						
						if (!$('#onScrollHideFix').length) {
							$('head').append('<style type="text/css" id="onScrollHideFix"></style>');
						}
						$('#onScrollHideFix').html('html.scrollHide .onScrollHideFix {margin-right: '+scrollWidth+'px;}');
						
						$('body').css("margin-right", scrollWidth);
		//				$('html, body').css("overflow", 'hidden');
						$('html').css("overflow", 'hidden');
						
					}
					
				} break;
				case 'reset': {
					
					$('html').removeClass("scrollHide");
					
					$('body').css("margin-right", '');
	//				$('html, body').css("overflow", '');
					$('html').css("overflow", '');
					
				} break;
				
				case 'scrollTo_init': {
					
					$(document).on('click', '*[data-scrollTo]', function(e) {
						
						e.preventDefault();
						
//						var target = $(this);
						var href = '#' + $(this).attr('data-scrollTo');
						var href = $(href);
//						var offset = $(this).attr('data-scrollTo_offset');
						
//						console.log(target);
//						console.log(href);
//						console.log($(href));
//						console.log(offset);
						
						
						
						function getScrollParent(node) { // Find first scrollable parent
							
//							console.log(node);
//							console.log(node.parent());
							
							if ($(node).css('overflow-y') == 'auto') {
								return node;
							} else {
								return getScrollParent(node.parent());
							}
							
						};
//						console.log(getScrollParent(href));
						var $container = $(getScrollParent(href));
//						var $target_offset = $(href).offset().top;
//						console.log($(href).offset().top);
						
						var speed = 600;
						if ($(this).hasAttr('data-scrollTo-speed')) {
							speed = $(this).attr('data-scrollTo-speed');
						}
						
						
						
						var container_border_top = $container.css("border-top-width");
						container_border_top = parseInt(container_border_top);
//						console.log(container_border_top);
//						console.log($target_offset - offset_border_top);
						
/* 						var href_paddong_top = $(href).css("padding-top");
						href_paddong_top = parseInt(href_paddong_top);
						console.log('href_paddong_top');
						console.log(href_paddong_top); */
						
						
						
//						console.log($(href).offset().top - $container.offset().top + $container.scrollTop());
						
//						console.log('$(href).offset().top');
//						console.log($(href).offset().top);
						
//						console.log('$container.offset().top');
//						console.log($container.offset().top);
						
//						console.log('$container.scrollTop()');
//						console.log($container.scrollTop());
						
//						console.log('$(href).offset().top - $container.offset().top');
//						console.log($(href).offset().top - $container.offset().top);
						
						
						
						$($container).scrollTo(
							href,
							speed,
//							{axis: 'y'},
//							{margin:true},
//							{offset: {top: -container_border_top} }
//							{axis: 'y', margin: true, offset: {top: -container_border_top}},
							{axis: 'y', offset: {top: -container_border_top}},
						);
						
						
						
					});
					
				} break;
/* 				case 'to': {
					
				} break; */
				
				default:
				break;
				
			}
			
//			$SCROLL2('to', '');
			
		}
		$SCROLL2('scrollTo_init');
		
		$getUrlParameter = function(sParam) {
			var sPageURL = decodeURIComponent(window.location.search.substring(1)),
				sURLVariables = sPageURL.split('&'),
				sParameterName,
				i;

			for (i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split('=');

				if (sParameterName[0] === sParam) {
					return sParameterName[1] === undefined ? true : sParameterName[1];
				}
			}
		};
		$AW_URL = $URL = function(option, param, param1) {/*! AW_URL
			
			Last upadate _2019_04_17_15_28_53_68
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			switch(option) {
				case 'noparam':
					
					return window.location.protocol + '//' + window.location.hostname + window.location.pathname;
					
				break;
				case 'location':
					
					return window.location.href;
					
				break;
				case 'href':
					
					return window.location.href;
					
				break;
				case 'hostname':
					
					return window.location.hostname;
					
				break;
				case 'pathname':
					
					return window.location.pathname;
					
				break;
				case 'protocol':
					
					return window.location.protocol;
					
				break;
				case 'assign':
					
					return window.location.assign;
					
				break;
				case 'parameter':
					
					return $getUrlParameter(param);
					
				break;
				
				
				
				case 'get':
					
					return $.query.get(param);
					
				break;
				case 'set':
					
					return $.query.set(param, param1).toString();
					
				break;
				case 'unset':
					
					return $.query.remove(param).toString();
					
				break;
				case 'remove':
					
					return $.query.remove(param).toString();
					
				break;
/* 				case 'query':
					
					return $.query.set(param, param1);
					
				break; */
				case 'query':
					
					return $.query.set(param, param1).toString();
					
				break;
//				$URL('query','test','test');
				
				
				default:
					
					return window.location.href;
					
				break;
			}
			
		}
		
		$AWIT_NAV = $AN = function(type, param){/*! AWIT_NAV
			
			Last upadate _2019_08_11_15_34_08_05
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			var data_navb_attr = 'data-awit_nav';
			var data_navb = '['+data_navb_attr+']';
			var awit_nav = 'awit_nav';
			var awit_nav_class = '.'+awit_nav;
			var awit_nav_open = 'awit_nav_open';
			var awit_nav_open_class = '.'+awit_nav_open;
			var awit_nav_close = 'awit_nav_close';
			
			var awit_nav_disable = 'awit_nav_disable';
			var awit_nav_disable_class = '.'+awit_nav_disable;
			
			var click;
			var click_obj;
			var target_wh;
			var target;
			var target_obj;
			var awit_nav_anim_target;
			var awit_nav_anim_target_class;
			
			
			
			
			
			if (type == 'close') {
				an_close();
				return;
			}
			if (type == 'disable') {
				$('html').addClass('awit_nav_disable');
			}
			if (type == 'enable') {
				$('html').removeClass('awit_nav_disable');
			}
			
			
			
			
			
			// FUNCTIONS
			function an_width() {
				
//				var target_width = $(target).width();
				var target_width = $(target).width();
//				console.log(target);
//				console.log(target_width);
				return target_width + 'px';
				
			}
			function an_close() {
				
/* 				clearInterval(window.x);
				clearInterval(window.xqq);
				xqq = setInterval(function () {
					root.classList.remove("contextmenu");
				},
				500); */
				
//				var target_id = '#'+$(awit_nav_class+awit_nav_open_class).attr('id');
				var target_id = $(awit_nav_class+awit_nav_open_class);
				
				// close all
/* 				if ($(target_id).hasClass(awit_nav_open)) {
					setTimeout(function(){ $SCROLL2('reset'); }, 200);
				} */
				$(awit_nav_open_class).removeClass(awit_nav_open).css('transform', '');
				
				
//				console.log(target_id);
				$(target_id).trigger({
					type: awit_nav_close,
					id: target_id,
				});
				
			}
			
			function an_open() {
				
				if (!$('html').hasClass('awit_nav_disable')) { if (click.length) { if (click !== '') {
					
//					console.log(click);
//					console.log(target);
//					console.log($(target));
					
					if ($(target).hasClass(awit_nav_open)) {
						
						$(awit_nav_open_class).removeClass(awit_nav_open).css('transform', '');
						return;
						
					}
					
					
					
					// close all
					$(awit_nav_open_class).removeClass(awit_nav_open).css('transform', '');
					
					
					// open
					$('html').addClass(awit_nav_open);
					var an_width = $(target).width()+'px';
//					console.log(an_width);
					
					if ($(target).hasClass('awit_nav_right')) { // awit_nav_right
						
						$(target).css({
							'transform': 'translateX(-'+an_width+')',
							'transition': 'transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1)',
						}).addClass(awit_nav_open);
						
					} else { // awit_nav_left
						
						$(target).css({
							'transform': 'translateX('+an_width+')',
							'transition': 'transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1)',
						}).addClass(awit_nav_open);
						
					}
					
/* 					if ($(target).hasClass(awit_nav_open)) {
						$SCROLL2('hide');
					} */
					
					// event
//					$(document).trigger({
					$(target).trigger({
						type: awit_nav_open,
						click: click_obj,
//						target: target_obj,
						id: target,
					});
					
					
					
				}}};
				
			}
			$(window).on('resize', function(){
				
//				var win = $(this); // this = window
				
//				console.log($(target));
				var an_width = $(target).width()+'px';
				
				if ($(target).hasClass(awit_nav_open)) {
				
					if ($(target).hasClass('awit_nav_right')) { // awit_nav_right
						
						$(target).css({
							'transform': 'translateX(-'+an_width+')',
						});
						
					} else { // awit_nav_left
						
						$(target).css({
							'transform': 'translateX('+an_width+')',
						});
						
					}
				
				}
				
			});
			
			
			
			
			
			// ON CLICK
			$(document).on('click', function(e) { if (e.which !== 3) { // NAV OPEN
				
//				e.preventDefault();
				
//				console.log(e.target);
				
				click = $(e.target).closest(data_navb);
//				console.log(click);
				
				click_obj = click[0];
//				console.log(click_obj);
				
				target_wh = $(e.target).closest(data_navb).attr(data_navb_attr);
//				console.log(target_wh);
				
				target = '#'+target_wh;
//				console.log(target);
				
				target_obj = $(target)[0];
//				console.log(target_obj);
				
				if ($(e.target).closest(data_navb).length) {
					e.preventDefault();
				}
				
				an_open();
				
			}});
			$(document).on('click', function(e) { if (e.which !== 3) { // NAV CLOSE
				
//				e.preventDefault();
				
	//			console.log('CLOSE');
	//			console.log(e.target);
	//			console.log(data_navb);
	//			console.log($(e.target).closest(data_navb).length);
				
				if (!$(e.target).is('.awit_nav.'+awit_nav_open) && !$(e.target).closest('.awit_nav.'+awit_nav_open).length && !$(e.target).closest(data_navb).length) {
					an_close();
				}
				
			}});
			$(document).on('keydown', function(e) { // NAV CLOSE [ESC]
	//			console.log(e.keyCode);
				var code = (e.keyCode ? e.keyCode : e.which);
				if ($('html').hasClass(awit_nav_open) && code === 27) {
					awit_nav_close();
				}
			});
			
			
			
			
			
			// RC MENU // open .awit_nav_rc or open on data-awit_nav_rc_click
			var awit_nav_rc_class = '.awit_nav_rc';
			var awit_nav_rc_click_attr_name = 'data-awit_nav_rc_click';
			var awit_nav_rc_click_attr = '['+awit_nav_rc_click_attr_name+']';
			
			$(document).on('pointerdown', function(e) { if (e.which==3) {
				
				if ($('html').hasClass(awit_nav_disable)) {return false};
				
				if ($(e.target).closest(awit_nav_rc_click_attr).length || $(awit_nav_rc_class).length || $(awit_nav_open_class).length) {
					
					clearTimeout(window.awit_nav_rc_sT1);
					clearTimeout(window.awit_nav_rc_sT2);
					
					document.oncontextmenu=function(){return false};
					awit_nav_rc_sT1 = setTimeout(function () {
						document.oncontextmenu=function(){return true};
						$('html').addClass('contextmenu');
					}, 500);
					
				}
				else if (!$(e.target).closest(awit_nav_rc_click_attr).length || !$(awit_nav_rc_class).length && !$(awit_nav_open_class).length) {
					document.oncontextmenu=function(){return true};
				};
				
			}});
			$(document).on('pointerup', function(e) { if (e.which==3) {
				
				if ($('html').hasClass(awit_nav_disable)) {return false};
				
				clearTimeout(window.awit_nav_rc_sT1);
				clearTimeout(window.awit_nav_rc_sT2);
				
				awit_nav_rc_sT2 = setTimeout(function () {
					$('html').removeClass('contextmenu');
				}, 300);
				
				if (!$('html').hasClass('contextmenu')) {
					
					var awit_nav_rc_click = $(e.target).closest(awit_nav_rc_click_attr);
					var awit_nav_rc_click_id = '#'+$(awit_nav_rc_click).attr(awit_nav_rc_click_attr_name);
					
					if (e.which==3 && $(awit_nav_rc_click).length && !$(awit_nav_rc_click_id).hasClass(awit_nav_open)) {
						
						click = $(awit_nav_rc_click_id);
			//			console.log(click);
						
						click_obj = click[0];
			//			console.log(click_obj);
						
						target = $(awit_nav_rc_click_id);
			//			console.log(target);
						
						target_obj = $(target)[0];
			//			console.log(target_obj);
						
						an_open();
						
					}
					else if (e.which==3 && $(awit_nav_rc_class).length && !$(awit_nav_rc_class).hasClass(awit_nav_open)) {
						
						click = $(document);
			//			console.log(click);
						
						click_obj = click[0];
			//			console.log(click_obj);
						
						target_wh = 'awit_nav_rc';
			//			console.log(target_wh);
						
						target = '.'+target_wh;
			//			console.log(target);
						
						target_obj = $(target)[0];
			//			console.log(target_obj);
						
						an_open();
						
					}
					else if (e.which==3) {
						
						an_close();
						
					}
					
				}
				
				
				
				
				
				
				
				
				
				
				
				
				
				
			}});
			
			
			
			
			
		}
		
		$AWIT_MODAL = $AM = function(type, param){/*! AWIT_MODAL
			
			Last upadate _2020_12_03_11_33_45_74
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			
			
			// VARS
			// '+VAR+'
			var main = 'awit_modal';
			var main_class = '.'+main;
			
			var wrap = 'awit_modal_wrap';
			var wrap_class = '.'+wrap;
			
			var content = 'awit_modal_content';
			var content_class = '.'+main;
			
			var open = 'awit_modal_open';
			var open_class = '.'+open;
			
			var close = 'awit_modal_close';
			var close_class = '.'+close;
			
			var disable = 'awit_modal_disable';
			var disable_class = '.'+main;
			
			
			
			var dataAttr = 'data-awit_modal';
			var dataAttr_class = '['+dataAttr+']';
			var dataAttr_class_all = '*'+dataAttr_class;
			
			
			
			var click;
			var target;
			var target_id;
			
			
			
			// TYPES
			if (type == 'close') {
				close_modal();
				return;
			}
/* 			if (type == 'open') {
				
				target_id = '#'+param;
				click = '';
				
				open_modal();
				return;
				
			} */
			
			
			
			// ACTIONS
			$(document).on('click', dataAttr_class_all, function(e) { if (e.which !== 3) {
				
//				console.log($(this));
				
				e.preventDefault();
				
				click = $(this);
				target = $(this).attr(dataAttr).trim();
				target_id = '#'+target;
//				console.log(target_id);
//				console.log($(target_id).length);
//				console.log(target);
//				console.log($(target));
				
				if (!$('html').hasClass(disable) && target_id.trim() !== '#' && !$(target_id).length) {
					$('body').append('<div class="'+main+'" id="'+target+'" style="display:none;"><div class="'+content+'"></div></div>');
				}
				if (!$('html').hasClass(disable) && target.length && $(target_id).length) {
					open_modal();
				}
				
			}});
/* 			$(document).on('click', function(e){ // close
				
//				e.preventDefault();
				
//				console.log(e);
//				console.log(target_id);
//				console.log($(e.target).closest(target_id));
				
				if (!$(e.target).closest(click).length && !$(e.target).closest(target_id).length) {
					$AWIT_MODAL('close');
				}
				
			}); */
			
			// if pointerdown and (select text) go out modal dont close
			var close_allow = 1;
			$(document).on('pointerdown', function(e){ // close
				
				var awit_modal_ic = $(click).attr('data-awit_modal_ic');
//				console.log(click);
//				console.log(awit_modal_ic);
//				console.log($(e.target).closest(awit_modal_ic).length);
				
				close_allow = 1;
				
//				console.log(target_id);
				
				if (typeof target_id !== 'undefined' && target_id.trim() !== '#' && ($(e.target).closest(target_id).length || $(e.target).closest(awit_modal_ic).length)) {
					close_allow = 0;
				}
//				console.log(close_allow);
//				console.log($(e.target).closest(target_id).length);
				
			});
			$(document).on('pointerup', function(e){ // if pointerup just out modal - close
				
				var awit_modal_ic = $(click).attr('data-awit_modal_ic');
				
//				console.log(close_allow);
				
//				e.preventDefault();
				
//				console.log(e);
//				console.log(target_id);
//				console.log($(e.target).closest(target_id));
				
				if (typeof target_id !== 'undefined' && target_id.trim() !== '#' && ($(e.target).closest(target_id).length || $(e.target).closest(awit_modal_ic).length)) {
					close_allow = 0;
				}
				if (typeof target_id !== 'undefined' && target_id.trim() !== '#' && (!$(e.target).closest(click).length && !$(e.target).closest(target_id).length && close_allow)) {
					$AWIT_MODAL('close');
				}
				
			});
/* 			$(document).on('click', function(e){ // if click just out modal - close
				
				console.log(close_allow);
				
//				e.preventDefault();
				
//				console.log(e);
//				console.log(target_id);
//				console.log($(e.target).closest(target_id));
				
				if (!$(e.target).closest(click).length && !$(e.target).closest(target_id).length && close_allow) {
					$AWIT_MODAL('close');
				}
				close_allow = 1;
				
			}); */
			
			
			
			
			
			
			// FUNCTIONS
			function open_modal() {
				
//				console.log('open');
//				console.log(target_id);
//				console.log($(target_id));
//				console.log(click);
				
				$AWIT_NAV('close');
//				$AWIT_NAV('disable');
				
				if (!$(target_id).closest(wrap_class).length) { $(target_id).wrap('<div class="'+wrap+'"></div>'); }
				
				$(target_id).css('display','');
				$(target_id).closest(wrap_class).addClass(open);
				if ($(target_id).closest(wrap_class).length) {
					
//					console.log('scrollHide call');
					$SCROLL2('hide');
					
				};
				
				$(target_id).trigger({
					type: open,
					click: click,
				});
//				console.log(target_id);
//				console.log(open);
				
			}
			function close_modal() {
				
//				$AWIT_NAV('enable');
				
				var target_id = '#'+$('.awit_modal_wrap.awit_modal_open .awit_modal').attr('id');
				
				if ($(open_class).closest(wrap_class).length) { $SCROLL2('reset'); };
				$(open_class).removeClass(open);
				
//				console.log(target_id);
				
				$(target_id).trigger({
					type: close,
				});
				
			}
			
			
			
			
			
		}
		
		if (typeof(Storage) !== "undefined") {/*! AW Browser Storage
			
			Code for localStorage/sessionStorage.
			
			Last upadate _2019_03_14_23_11_55_21
			(c) Alvio Wayne
			The MIT License (MIT)
			
			$storage('set','title','data');
			$storage('get','title');
			$storage('remove','title');
			
			*/
			
			$('html').addClass('storage');
			$storage = function(type, name, data) {
				
				switch(type) {
					case 'set':
						
						localStorage.setItem(name, data);
						
					break;
					case 'get':
						
						return localStorage.getItem(name);
						
					break;
					case 'remove':
						
						localStorage.removeItem(name);
						
					break;
					default:
					break;
				}
				
			}
			
		} else {
			// Sorry! No Web Storage support..
		}
		
		$.fn.hasAttr = $.fn.AW_hasAttr = function(attrName){/*! AW hasAttr v1.0
			
			
			Based on https://stackoverflow.com/a/1318091
			Answered Aug 23 '09 at 8:42
			strager
			
			Last upadate _2019_04_07_12_35_32_18
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
//			console.log($(this));
			
			var attr = $(this).attr(attrName);

			// For some browsers, `attr` is undefined; for others,
			// `attr` is false.  Check for both.
			if (typeof attr !== typeof undefined && attr !== false) {
				return true;
			} else {
				return false;
			}
			
		}
		
		$AW_animList = function() {/*! AW animList
			
			Last upadate _2019_08_01_19_35_27_37
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			var main_name = 'animList';
			var main_name_class = '.'+main_name;
			
			$.onCreate(main_name_class, function(elements) {
				
//				console.log(elements);
				
				$(elements).each(function() {
					
					var animDelay = -100;
					
					var delay = 100;
					if ($(this).attr("data-animList-delay")) {
						delay = $(this).attr("data-animList-delay");
					}
					
//					var animList_elem = $(this).find('> .animList_elem');
					var animList_elem = $(this).find('> *');
//					console.log(animList_elem);
					
					$(animList_elem).each(function() {
						
//						console.log($(this));
						
						$(this).addClass('animList_elem');
						
//						animDelay = animDelay + 100;
						animDelay = animDelay + delay;
						$(this).css('animation-delay', animDelay + 'ms');
						
					});
					
				});
				
			},true);
			
		}
		
		
		
		

		$AW_URL2 = $URL2 = function(option, param, param1, param2) {/*! AW_URL
		$AW_URL2 = $.fn.URL2 = function(option, param, param1) {/*! AW_URL
			
			Last upadate _2021_01_06_21_16_02_71
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
/* 			var loc = '';
			if ($(this) !== $(document)) {
				loc = $(this);
			} */
			
			
			
			function get(param) {
				
				var search_arr = Object.fromEntries(new URLSearchParams(window.location.search));
//				console.log(search_arr);
//				console.log(param);
				
				if (param) {
					
					if (typeof search_arr[param] != 'undefined') {
						return search_arr[param];
					} else {
						return false;
					}
					
				} else {
					return search_arr;
				}
				
			}
			function set_str(param) {
				
//				param = param.trim();
//				param = param.replace(/\n/g, "");
				
				param = param.replace(/\s\s+/g, '');
				
				var search_arr = Object.fromEntries(new URLSearchParams(window.location.search));
//				console.log(search_arr);
				
				var newstr_arr = Object.fromEntries(new URLSearchParams(param));
//				console.log(newstr_arr);
				
				var new_arr = jQuery.extend(search_arr, newstr_arr);
				var new_params = $.param(new_arr);
				new_params = new_params.replace(/%2F/g, '/'); // url decode only slash
//				console.log(new_params);
				
				var newUrl = window.location.origin + window.location.pathname + '?' + new_params;
				
				if (param2) {
					newUrl = decodeURI(newUrl);
				}
				
				return newUrl;
				
			}
 			function set(param, param1) {
				
				var search_arr = Object.fromEntries(new URLSearchParams(window.location.search));
//				console.log(search_arr);
				
				var newstr_arr = {};
				newstr_arr[param] = param1;
//				console.log(newstr_arr);
				
				var new_arr = jQuery.extend(search_arr, newstr_arr);
				
				var new_params = $.param(new_arr);
				new_params = new_params.replace(/%2F/g, '/'); // url decode only slash
				
				return window.location.origin + window.location.pathname + '?' + new_params;
				
			}
			function unset(param) {
				
				var search_arr = Object.fromEntries(new URLSearchParams(window.location.search));
//				console.log(search_arr);
				
				delete search_arr[param];
				
				var new_params = $.param(search_arr);
				new_params = new_params.replace(/%2F/g, '/'); // url decode only slash
				
				return window.location.origin + window.location.pathname + '?' + new_params;
				
			}
			
//			$URL2('noparam');
//			$URL2('query','test','test');
//			$URL2();
//			$URL2('array');
//			$URL2('get');
//			$URL2('get', 'route');
//			$URL2('set_str', 'test=test1');
//			$URL2('set_str_push', 'test=test1');
//			$URL2('set', 'test', 'test1');
//			$URL2('unset', 'token');
//			$URL2('unset_auto', 'token');
//			history.pushState(null, '', $URL2('set_str', 'test=test1'));
			
			switch(option) {
				
				default:
				case 'href':
				case 'location':
					
					return window.location.href;
					
				break;
				case 'noparam':
					
					return window.location.origin + window.location.pathname;
					
				break;
				case 'array':
				case 'arr':
					
					return window.location;
					
				break;
				
				
				
				case 'protocol':
					
					return window.location.protocol;
					
				break;
				case 'host':
					
					return window.location.host;
					
				break;
				case 'hostname':
					
					return window.location.hostname;
					
				break;
				case 'origin':
					
					return window.location.origin;
					
				break;
				case 'pathname':
					
					return window.location.pathname;
					
				break;
				case 'search':
					
					return window.location.search;
					
				break;
				
				
				
				case 'get':
					
					return get(param);
					
				break;
				case 'set':
					
					return set(param, param1);
					
				break;
				case 'set_instant':
				case 'set_inst':
				case 'set_auto':
				case 'set_push':
					
					var set = set(param, param1);
					history.pushState(null, '', set);
					return set;
					
				break;
				case 'set_str':
					
					return set_str(param);
					
				break;
				case 'set_str_instant':
				case 'set_str_inst':
				case 'set_str_auto':
				case 'set_str_push':
					
					var set = set_str(param);
					history.pushState(null, '', set);
					return set;
					
				break;
				case 'unset':
					
					return unset(param);
					
				break;
				case 'unset_instant':
				case 'unset_inst':
				case 'unset_auto':
				case 'unset_push':
					
					var unset = unset(param);
					history.pushState(null, '', unset);
					return unset;
					
				break;
				
				
				
				case 'encode':
					
					return encodeURI(param);
					
				break;
				case 'decode':
					
					return decodeURI(param);
					
				break;
//				$URL2('decode','test');
				
				
				
				
				
				
				
				
				
				
			}
			
		}
		
		$.event.special.rightclick = {
		  bindType: "pointerup",
		  delegateType: "pointerup",
		  handle: function (evt) {
			
			if ($(evt.target).closest('textarea').length) {return;}
			
			if (evt.button === 2) {
			  var handleObj = evt.handleObj;
			  
			  $(document).one('contextmenu', false);
			
			  evt.type = handleObj.origType;
			  ret = handleObj.handler.apply(this, arguments);
			  evt.type = handleObj.type;
			  
			  return ret;
			}
		  }
		};
		$.fn.serializeObject = function () {/*! serializeArray() alternative
			
			serializeArray()
			https://stackoverflow.com/a/44177543
			https://stackoverflow.com/a/31751351
			
			var Form_Data = $("form").serializeObject();
			console.log(Form_Data);
			
			Last upadate
			_2020_06_04_19_46_48_52
			
			*/
			
			var o = {};
			var a = this.serializeArray();
			$.each(a, function () {
				if (o[this.name] !== undefined) {
					if (!o[this.name].push) {
						o[this.name] = [o[this.name]];
					}      
					o[this.name].push(this.value || '');
				} else {
					o[this.name] = this.value || '';
				}
			});
			return o;
		};
		
/* 		var context_menu = 'context_menu';
		var context_menu_id = '#'+context_menu;
		$(document).on('rightclick', '.context_menu', function(e){
			
			if (!$(context_menu_id).length) {
				('body').append('<div id="'+context_menu+'"></div>');
			}
			
			$(context_menu_id).css({
				'top': e.pageY  - $(document).scrollTop() +1+'px',
				'left': e.pageX  - $(document).scrollLeft() +1+'px',
				'display': 'block',
			});
			
		}); */
		
		
		
		

		$.fn.aw_materialInput = $.fn.materialInput = $.fn.inputText = function(option) {/*! AW materialInput
			
			Last upadate _2020_06_03_22_31_27_25
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			var This = $(this);
			
			var mainName = 'materialInput';
			var mainClass = '.'+mainName;
			
			var wrapName = 'inputwrap';
			var wrapClass = '.'+wrapName;
			
			var lineName = 'inputline';
			var lineClass = '.'+lineName;
			
			var focusName = 'inputfocus';
			var focusClass = '.'+focusName;
			
			var labelName = 'floatlabel';
			var labelClass = '.'+labelName;
			
			
			
			if (option == 'disabled') {
				
				$.each($(This), function(index, item) {
					
					if ($(item).attr('disabled') !== 'disabled') {
						$(item).prop('disabled', true);
						$(item).closest(mainClass).find(labelClass).addClass('disabled');
					}
					
				});
				
				return false;
			}
			if (option == 'reset') {
				
				$.each($(This), function(index, item) {
					
					if ($(item).attr('disabled') == 'disabled') {
						$(item).prop('disabled', false);
						$(item).closest(mainClass).find(labelClass).removeClass('disabled');
					}
					
				});
				
				return false;
			}
			
			
			
			$(this).each(function(){
				
				if ( !$(this).hasClass('noMStyle') && !$(this).closest('.inputwrap').length ) {
					
					$(this).wrap('<div class="'+mainName+' inputwrap"></div>');
					
					var input = $(this);
					var wrap = $(this).closest(".inputwrap");
					var inputline = $(this).closest(".inputline");
	//				var wmainClass = $(this).closest(mainClass);
					
					if ($(this).is('input')) {
						var inputph = $(this).attr("placeholder");
						$(this).removeAttr("placeholder");
					} else if ($(this).is('div')) {
						var inputph = $(this).attr("data-placeholder");
						$(this).removeAttr("data-placeholder");
					}
					
	//				console.log($(this));
	//				console.log($(this).css('padding-left'));
	//				console.log($(this).closest(mainClass));
					
					if (!$(this).hasClass('materialInput_noAutoSize')) {
						
						var width = $(this).outerWidth();
						var height = $(this).outerHeight();
						
						$(wrap).css({
							'max-width': width,
							'max-height': height
						});
						
					}
					
					var pLeft = $(this).css('padding-left');
					var pRight = $(this).css('padding-right');
					
					if (inputph) {
						wrap.append('<div class="'+labelName+'">'+inputph+'</div>');
						if (pLeft !== '0px') {
							$(wrap).find(labelClass).css('left', pLeft);
						}
						if (pRight !== '0px') {
							$(wrap).find(labelClass).css('right', pRight);
						}
					}
					wrap.append('<div class="inputline"></div>');
					if (pLeft !== '0px') {
						$(wrap).find(lineClass).css('left', pLeft);
					}
					if (pRight !== '0px') {
						$(wrap).find(lineClass).css('right', pRight);
					}
					
					if ($(this).val() || This.is('div')) {
						wrap.addClass("inputfocus");
					}
					
		//			if (!$(this).attr('readonly')) {
					$(this).focus(function(){
						
		//				var pLeft = $(this).css('padding-left');
		//				if (pLeft !== '0px') { $(labelClass).css('left', pLeft); }
						
		//				console.log(ilfalse);
		//				if (ilfalse || $(this).attr('readonly')) { return false };
						if ($(this).attr('readonly')) { return false };
						
						wrap.addClass("inputfocus");
						wrap.addClass("inputfocusline");
						
					});
					$(this).blur(function() {
						
						wrap.removeClass("inputfocusline");
						
		//				if (ilfalse || $(this).attr('readonly')) { return false };
						if ($(this).attr('readonly')) { return false };
						if ($(this).val()) {
							wrap.addClass('inputfocus');
						} else {
							wrap.removeClass('inputfocus');
						}
						
					});
					$(this).change(function() {
						
						if ($(this).attr('readonly')) { return false };
						
						wrap.addClass('animOff');
						if ($(this).val()) {
							wrap.addClass('inputfocus');
						} else {
							wrap.removeClass('inputfocus');
						}
	//					wrap.removeClass('animOff');
						
						setTimeout(function(){ wrap.removeClass('animOff'); }, 50);
						
					});
		//			}
					
					if ( $(this).css('display') == 'none' ) {
						wrap.css('display', 'none');
					}
					if ( $(this).attr('disabled') == 'disabled' ) {
						$(wrap).find(labelClass).addClass('disabled');
					}
					
				}
				else if ($(this).closest('.inputwrap').length) {
					
					var wrap = $(this).closest(".inputwrap");
					if ($(this).val() || This.is('div')) {
						wrap.addClass("inputfocus");
					}
					
/* 					var width = $(this).outerWidth();
					var height = $(this).outerHeight();
					
					$(wrap).css({
						'max-width': width,
						'max-height': height
					}); */
					
				}
				
			});
			
			
			
		};
		$.fn.AW_buttonConfirm = $.fn.buttonConfirm = function(property) {/*! AW_buttonConfirm
			
			Last upadate _2020_05_24_18_40_15_33
			(c) Alvio Wayne
			The MIT License (MIT)
			
			*/
			
			
			
			// clases
			function toClass(param) {
				return '.' + param;
			}
			var main = 'buttonConfirm';
			var statusLine = 'buttonConfirm_statusLine';
			var hold = 'buttonConfirm_hold';
			var done = 'buttonConfirm_done';
			var off = 'buttonConfirm_off';
			var off2 = 'buttonConfirm_disable';
			
			
			
			// settings
			var holdTime = 600;
			var attr_holdTime = 'data-buttonConfirm_holdTime';
			
			var statusLine_color = '#e0b15b';
			var attr_statusLine_color = 'data-buttonConfirm_color';
			
			
			
			switch (property) {
				
				case 'prepare': {
					
					$.each($(this), function(index, item) {
						
						holdTime = $(this).attr('data-buttonConfirm_holdTime');
						
						if (!$(this).find(toClass(statusLine)).length) {
							
							$(this).append('<div class="'+statusLine+'"></div>');
//							$(this).find(toClass(statusLine)).css("transition", "all "+ holdTime +"ms ease-in-out");
							
						}
						
					});
					
				} break
				case 'events': {
					
					$(document).on('pointerdown', $(this), function(e) { if (e.which==1) {
						
						clearTimeout(window.buttonConfirm_cConfirm);
						
						var This = $(e.target).closest(toClass(main));
						
						if ($(This).hasClass(off) || $(This).hasClass(off2)) {return;};
						
						if ($(This).attr(attr_statusLine_color) && $(This).attr(attr_statusLine_color) !== '') {
							
							statusLine_color = $(This).attr(attr_statusLine_color);
							
						}
						$(This).find(toClass(statusLine)).css("background-color", statusLine_color);
						
						if ($(This).attr(attr_holdTime) && $(This).attr(attr_holdTime) !== '') {
							
							holdTime = $(This).attr(attr_holdTime);
							
						}
//						$(This).find(toClass(statusLine)).css("transition", "width, height "+ holdTime +"ms ease-in-out");
						$(This).find(toClass(statusLine)).css("transition", "width "+ holdTime +"ms ease-in-out, height "+ holdTime +"ms ease-in-out");
						
						$(This).addClass(hold);
								
		//				var holdTimeT = 100;
						holdTimeT=holdTime;
		//				holdTimeT=parseInt(holdTime, 0);
		//				console.log(holdTimeT);
						buttonConfirm_cConfirm = setTimeout(function () {
							
							clearTimeout(buttonConfirm_cConfirm);
							$(This).removeClass(hold);
							
							if ($(This).is(":hover")) {
								$(This).trigger({ // callback
									type: done,
									click: $(This),
								});
							};
							
						},
						holdTimeT);
						
					}});
					$(document).on('pointerup', $(this), function(e) { if (e.which==1) {
						
//						console.log('pointerup');
						
						clearTimeout(window.buttonConfirm_cConfirm);
						
//						var This = $(e.target).closest(toClass(main));
						
//						if ($(toClass(main)).hasClass(off) || $(toClass(main)).hasClass(off2)) {return;};
						
						$(toClass(main)).find(toClass(statusLine)).css("transition", "none");
						
						$(toClass(main)).removeClass(hold);
						clearTimeout(window.buttonConfirm_cConfirm);
						
					}});
					
				} break
				
				default:
				break;
				
			}
			
			
			
		}
		
		
		
		
		
	})(jQuery);
	
	
	
	
	
//!	OTHER FUNCTIONS 2
//	Scroll
	function ScrolllToID() {/*! AW ScrolllToID // ?X
		
		(c) Alvio Wayne
		The MIT License (MIT)
		
		*/
		
/* 	   $('a.scrollTo[href^="#"]').click(function(){
			var target = $(this).attr('href');
			$([document.documentElement, document.body]).animate({scrollTop: $(target).offset().top}, 600);
			return false; 
	   }); */
		
		$(document).on('click', 'a.scrollTo[href^="#"]', function(e) {
			
			e.preventDefault();
			
			var target = $(this);
			var href = $(this).attr('href');
			var offset = $(this).attr('data-scrollTo_offset');
			if (offset) {
				offset = parseInt($(this).attr('data-scrollTo_offset'));
			} else {
				offset = 0;
			}
			
//			console.log(target);
//			console.log($scrollTo);
//			console.log(offset);
			
			function getScrollParent(node) { // Find first scrollable parent
				
//				console.log(node);
//				console.log(node.parent());
				
				if ($(node).css('overflow-y') == 'auto') {
					return node;
				} else {
					return getScrollParent(node.parent());
				}
			};
//			console.log(getScrollParent(target));
			
			var $container = $(getScrollParent(target));
			var $scrollTo = $($(this).attr('href'));
//			console.log($container);
			
//			$(container).animate({scrollTop: $(container).offset().top}, 600);
//			$([document.documentElement, document.body]).animate({scrollTop: $(href).offset().top}, 600);
			
//			console.log($scrollTo.offset().top - $container.offset().top + $container.scrollTop());
			
			$container.animate({
//				scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop() -80
//				scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop() + offset
				scrollTop: $scrollTo.offset().top + offset
			}, 600);
			
			return false;
			
		});
		
		
		
		// container
//		$('#aw_modal_buy .awm_content').css('overflow-y') == 'auto';
		
	};
	
	/*! Full Page Background ~ in dev
		
		Last upadate _2018_05_18_12_01_57_57
		(c) Alvio Wayne
		The MIT License (MIT)
		
	*/
	function backBaseStyle() {
	$("#awitcore").append( '<div id="background"></div>' );
	$('head #AWITCoreH').append(
		'#background, #background_low {'
		
	//	Img style
		+ " content: ''; "
		+ ' -webkit-background-size' + AC_self.Back_Size + ';'
		+ ' -moz-background-size' + AC_self.Back_Size + ';'
		+ ' -o-background-size' + AC_self.Back_Size + ';'
		+ ' background-size:' + AC_self.Back_Size + ';'
		+ ' background-repeat:' + AC_self.Back_Repeat + ';'
		+ ' background-position:' + AC_self.Back_Position + ';'
		+ ' transform: translateZ(0);'
		
	//	Div style
		+ ' z-index:-1; '
		+ ' position:fixed; '
		+ ' left:0; '
		+ ' right:0; '
		+ ' top:0; '
		+ ' bottom: 0; '
		+ ' width:100%; '
		+ ' height:100%; '
		
		+ '}'
	//	+ 'body { background-color: transparent !important; }'
		+ '#background {display: none;}'
		+ '#background_overlay {'
			+ 'position: fixed;'
			+ 'top: 0;'
			+ 'left: 0;'
			+ 'right: 0;'
			+ 'bottom: 0;'
		+ '}'
	);
	}
	function backLow() {
		var back_url_low = ''; // if Back_Low empty // AC_self.Back_Low // background.jpg
			var backhttp=AC_self.Back_Low.search('http://');
			if (backhttp!=-1) {
				console.log('Background Low load');
				back_url_low = "style/" + AC_self.Back_Low
			} else {
				back_url_low = AC_path + "style/" + AC_self.Back_Low
			};
		$('<img/>').attr('src', back_url_low).on('load', function() { // background-image url
			$(this).remove();
			$('#awitcore #background').before($('<div id="background_low"></div>'));
			$('#awitcore #background_low').css('background-image','url(' + back_url_low + ')');
		});
	}
	function backHD() {
		var back_url = ''; // if Back_HD empty // AC_self.Back_HD // background.jpg
			var backhttp=AC_self.Back_HD.search('http://');
			if (backhttp!=-1) {
				console.log('Background HD load');
				back_url = "style/" + AC_self.Back_HD
			} else {
				back_url = AC_path + "style/" + AC_self.Back_HD
			};
		$('<img/>').attr('src', back_url).on('load', function() {
			$(this).remove();
			$('#background').css('background-image','url(' + back_url + ')');
			switch (AC_self.Back_Animation) {
				case '':
//					$('#awitcore #background').fadeIn(0);
					$('#awitcore #background').css('display','block');
				break
				case 'none':
					$('#awitcore #background').css('display','block');
				break
//				case 'fadeIn':
//					$('#awitcore #background').fadeIn(AC_self.Back_AnimSpeed);
//					$('#awitcore #background').addClass('ac_fadeIn');
/* 					if (!AC_self.Back_Anim_custom) {
						$('head #AWITCoreH').append('#background'
							+'{@keyframes fadeIn {0%{opacity:0;}100%{opacity:1;}}}'
						+'');
						var = ;
					} */
//				break
			};
			$('head #AWITCoreH').append('#background'
				+'{display:block;'
				+'animation-name: '+AC_self.Back_Animation+'; animation-duration: '+AC_self.Back_AnimSpeed+'ms; }'
				+'-webkit-animation-name: '+AC_self.Back_Animation+'; -webkit-animation-duration: '+AC_self.Back_AnimSpeed+'ms; }'
				+'-moz-animation-name: '+AC_self.Back_Animation+'; -moz-animation-duration: '+AC_self.Back_AnimSpeed+'ms; }'
				+'-o-animation-name: '+AC_self.Back_Animation+'; -o-animation-duration: '+AC_self.Back_AnimSpeed+'ms; }'
			+'');
			setTimeout(function() {
				$('#awitcore #background_low').remove();
			}, 1500);
		});
		
	};
	function backOverlay() {
		$('#awitcore').append( '<div id="background_overlay"></div>' );
//		$('<div id="background_overlay"></div>').insertAfter( '#awitcore #background' );
	};
	
//	Other
	(function($){/*! AW ImgAfterLoad v5.5
		
		Last upadate _2019_05_21_15_50_22_36
		(c) Alvio Wayne
		The MIT License (MIT)
		
		*/
		
		$ImgAfterLoad = function(property){
			switch (property) {
				case 'init':
					
					$('html').addClass('imgAfterLoad');
					
					$.onCreate('img', function(elements) {
						
//						console.log(elements);
						
						$(elements).each(function(index, item) {
							
 							$(item).attr({
								"data-src" : $(item).attr('src'),
							})
							.attr({
								"src" : 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
							});
							
						});
						
						$ImgAfterLoad('update');
						
					},true);
					
//					$ImgAfterLoad('update');
					
				break
				case 'update':
					
//					$('img:not(.visible)').viewportChecker({
					$('img').viewportChecker({
						classToAdd: '', // Class to add to the elements when they are visible,
						classToAddForFullView: '', // Class to add when an item is completely visible in the viewport
						classToRemove: '', // Class to remove before adding 'classToAdd' to the elements
						removeClassAfterAnimation: false, // Remove added classes after animation has finished
						invertBottomOffset: false, // Add the offset as a negative number to the element's bottom
						repeat: false, // Add the possibility to remove the class if the elements are not visible
						callbackFunction: function(elem, action){
							
//							console.log(elem);
							
 							$(elem).attr({
								"src" : $(elem).attr('data-src'),
							});
							
							$(elem).on('load', function() {
								
								setTimeout(function() {
									$(elem).addClass("visible");
//									$(this).addClass("visible");
								}, 150);
								
							});
							
						}, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
						offset: 0, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
					});
					
				break
				default:
				break;
			};
		};
		
	})(jQuery);
	function WowNew() {/*! AW WowNew v2
		
		Last upadate 15/01/2017
		(c) Alvio Wayne
		The MIT License (MIT)
		
		*/
		
		var wownewClass = '.wownew'
		$('head #AWITCoreH').append( '.unvisible { animation-name:none!important; visibility:hidden!important; }' );
		$(wownewClass).addClass('unvisible');
		$(wownewClass).viewportChecker({
			classToAdd: 'visible', // Class to add to the elements when they are visible,
			classToAddForFullView: '', // Class to add when an item is completely visible in the viewport
			classToRemove: 'unvisible', // Class to remove before adding 'classToAdd' to the elements
			removeClassAfterAnimation: false, // Remove added classes after animation has finished
			invertBottomOffset: false, // Add the offset as a negative number to the element's bottom
			repeat: true, // Add the possibility to remove the class if the elements are not visible
			callbackFunction: function(elem, action){
				
				var wownewDelay = elem.attr("data-wownew-delay");
				
				if ($(elem).hasClass( "visible" )) {
					elem.css('animation-delay', wownewDelay);
				} else {
					$(elem).addClass('unvisible');
				}
				
			}, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
			offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
		});
		
	};
	function BodyAbsoluteCenter() {/*! AW BodyAbsoluteCenter v2.1
		
		Last upadate _2018_05_17_16_28_04_32
		(c) Alvio Wayne
		The MIT License (MIT)
		
		*/
		
		$('head #AWITCoreH').append(
		
		' html { '
		+ '		height: 100%; '
		+ '		width: 100%; '
		+ ' } '
		+ ' body { '
//		+ '		height: auto!important; '
		+ '		min-height: 100%; '
		+ '		display: flex; '
		+ '		justify-content: center; '
		+ '		align-items: center; '
		+ '		flex-direction: column; '
		+ ' } '
		
		);
	}
	
	{ ACInfo(function() {/*! BeefUp v1.1.7 - A jQuery Accordion Plugin
		
		Copyright 2016 Sascha Künstler http://www.schaschaweb.de/
		https://github.com/Schascha/BeefUp
		Alvio Wayne modyfication _2019_08_24_20_06_01_63
		
	*/});
	
(function($) {
	
    'use strict';

    // BeefUp object
    var beefup = {};

    // Defaults
    beefup.defaults = {
        trigger: '.beefup__head',       // String: Name of the trigger element
        content: '.beefup__body',       // String: Name of the collapsible content
        openClass: 'beefup__open',           // String: Name of the class which shows if a accordion is triggered or not
        stayOpenClass: 'beefup__stayopen',
        openSingleClass: 'beefup__opensingle',
        selfBlockClass: 'beefup__selfblock',
        animation: 'slide',             // String: Set animation type to "slide", "fade" or leave empty ""
        openSpeed: 200,                 // Integer: Set the speed of the open animation
        closeSpeed: 200,                // Integer: Set the speed of the close animation
        scroll: false,                  // Boolean: Scroll to accordion
        scrollSpeed: 400,               // Integer: Set the speed of the scroll feature
        scrollOffset: 0,                // Integer: Additional offset to accordion position
        openSingle: false,              // Boolean: Open just one accordion at once
        stayOpen: null,                 // Mixed: Leave one item open, accepts null, integer or string
        selfClose: false,               // Boolean: Close on click outside
        selfBlock: false,               // Boolean: Block close event on click
        hash: true,                     // Boolean: Open accordion with id on hash change
        breakpoints: null,              // Mixed: Null or array of objects
        onInit: function() {},          // Callback: Fires after the accordions initially setup
        onOpen: function() {},          // Callback: Fires after accordion opens content
        onClose: function() {},         // Callback: Fires after accordion close content
        onScroll: function() {}         // Callback: Fires after scroll animation
    };

    // Private methods
    beefup.methods = {

        /**
         * Extend options
         *
         * @param {jQuery} $el
         */
        getVars: function($el) {
            var vars = $.extend(true, {}, $el.data('beefup'), $el.data('beefup-options'));

            if (vars.breakpoints) {
                vars = beefup.methods.getResponsiveVars(vars);
            }

            return vars;
        },

        /**
         * Overwrite options depending on breakpoints
         *
         * @param {object} vars
         * @returns {*}
         */
        getResponsiveVars: function(vars) {
            var windowWidth = window.innerWidth || $(window).width();

            // Sort
            vars.breakpoints.sort(function(a, b) {
                return ((a.breakpoint < b.breakpoint) ? -1 : ((a.breakpoint > b.breakpoint) ? 1 : 0));
            });

            $.each(vars.breakpoints, function(index, value) {
                if (windowWidth > value.breakpoint) {
                    vars = $.extend({}, vars, value.settings);
                }
            });

            return vars;
        },

        /**
         * Animation types
         *
         * @param {string} type
         * @param {jQuery} $el
         * @param {number} speed
         * @param {function} callback
         */
        animation: function(type, $el, speed, callback) {
            switch (type) {
                case 'slideDown':
                    $el.slideDown(speed, callback);
                    break;
                case 'slideUp':
                    $el.slideUp(speed, callback);
                    break;
                case 'fadeIn':
                    $el.fadeIn(speed, callback);
                    break;
                case 'fadeOut':
                    $el.fadeOut(speed, callback);
                    break;
                case 'show':
                    $el.show(speed, callback);
                    break;
                case 'hide':
                    $el.hide(speed, callback);
                    break;
            }
        },

        /**
         * Get stayOpen element
         *
         * @param {jQuery} $obj
         * @param {number|string} value
         * @returns {*}
         */
        getStayOpen: function($obj, value) {
            var $el;

            if (typeof value === 'number') {
                $el = $obj.eq(value);
            } else if (typeof value === 'string') {
                $el = $obj.filter(value);
            }

            return $el;
        },

        /**
         * Add self close event
         *
         * @param {jQuery} $obj
         * @param {object} vars
         */
        selfClose: function($obj, vars) {
            $(document).on('click', function(e) {
                var $el;

                if (!$(e.target).closest($obj).length) {

                    // Find open items
                    $el = $obj.filter('.' + vars.openClass);
					
					// AW
					$el = $el.not($('.stayOpen'));
					
                    // Exclude stayOpen item
                    if (vars.stayOpen !== null) {
                        $el = $el.not(beefup.methods.getStayOpen($obj, vars.stayOpen));
                    }

                    // Close remaining items
                    if ($el.length) {
                        $obj.close($el);
                    }
					
					// AW
					$('.stayOpen').addClass(vars.openClass);
					$('.stayOpen').find('.beefup__body').css('display','');
//					$beefup.open($('.stayOpen'));
					
                }
            });
        },

        /**
         * Add hash change event
         *
         * @param {jQuery} $obj
         * @param {object} vars
         */
        hash: function($obj, vars) {
            var hashChange = function() {
                var $el = $obj.filter(window.location.hash);

                if ($el.length && !$el.hasClass(vars.openClass)) {
                    $obj.click($el);
                }
            };

            hashChange();
            $(window).on('hashchange', hashChange);
        }
    };

    $.fn.beefup = function(options) {
        var $obj = this;

        /**
         * Open
         *
         * @param {jQuery} [$el]
         * @param {function} [callback]
         * @returns {jQuery}
         */
        this.open = function($el, callback) {
            if (!$el || !$el.length) {
                $el = $obj;
            }

            $el.each(function() {
                var $this = $(this),
                    vars = beefup.methods.getVars($this),
                    $content = $this.find(vars.content + ':first'),
                    animation = (vars.animation === 'slide') ? 'slideDown' :
                        (vars.animation === 'fade') ? 'fadeIn' : 'show';
						
				// AW
				$this.addClass(vars.openClass);
				
                // Animation
                beefup.methods.animation(animation, $content, vars.openSpeed, function() {
//					$this.addClass(vars.openClass);
                    $content.css('overflow', '');

                    // Callbacks
                    if (callback && typeof callback === 'function') {
                        callback();
                    }

                    if (vars.onOpen && typeof vars.onOpen === 'function') {
                        vars.onOpen($this);
                    }
                });
            });

            return $obj;
        };

        /**
         * Close
         *
         * @param {jQuery} [$el]
         * @param {function} [callback]
         * @returns {jQuery}
         */
        this.close = function($el, callback) {
            if (!$el || !$el.length) {
                $el = $obj;
            }

            $el.each(function() {
                var $this = $(this),
                    vars = beefup.methods.getVars($this),
                    $content = $this.find(vars.content + ':first'),
                    animation = (vars.animation === 'slide') ? 'slideUp' :
                        (vars.animation === 'fade') ? 'fadeOut' : 'hide';

				// AW
				$this.removeClass(vars.openClass);
				
                // Animation
                beefup.methods.animation(animation, $content, vars.closeSpeed, function() {
//					$this.removeClass(vars.openClass);
                    $content.css('overflow', '');

                    // Callbacks
                    if (callback && typeof callback === 'function') {
                        callback();
                    }

                    if (vars.onClose && typeof vars.onClose === 'function') {
                        vars.onClose($this);
                    }
                });
            });

            return $obj;
        };

        /**
         * Scroll
         *
         * @param {jQuery} $el
         * @returns {jQuery}
         */
        this.scroll = function($el) {
            var vars = beefup.methods.getVars($el);

            $('html, body').animate(
                {scrollTop: $el.offset().top + vars.scrollOffset},
                vars.scrollSpeed
            ).promise().done(function() {
                if (vars.onScroll && typeof vars.onScroll === 'function') {
                    vars.onScroll($el);
                }
            });

            return $obj;
        };

        /**
         * Click
         *
         * @param {jQuery} $el
         * @returns {jQuery}
         */
        this.click = function($el) {
            var vars = beefup.methods.getVars($el);

            if (vars.openSingle || $el.hasClass(vars.openSingleClass)) {
                if (vars.stayOpen !== null) {
                    $obj.close($obj.not($el).not(beefup.methods.getStayOpen($obj, vars.stayOpen)));
                } else {
                    $obj.close($obj.not($el));
                }
            }

            if (!$el.hasClass(vars.openClass)) {
                $obj.open($el, function() {
                    if (vars.scroll) {
                        $obj.scroll($el);
                    }
                });
            } else {
                if (!vars.selfBlock || !$el.hasClass(vars.selfBlockClass)) {
                    $obj.close($el);
                }
            }

            return $obj;
        };

        return this.each(function(index, el) {
            var $el = $(el),
                vars = $.extend({}, beefup.defaults, options, $el.data('beefup-options'));

            if ($el.data('beefup')) {
                return;
            }

            $el.data('beefup', vars);

            if (vars.breakpoints) {
                vars = beefup.methods.getResponsiveVars(vars);
            }

            if (vars.stayOpen !== null && $el.is(beefup.methods.getStayOpen($obj, vars.stayOpen))) {
                $el.addClass(vars.openClass);
            }
            else if ($el.hasClass(vars.stayOpenClass)) {
                $el.addClass(vars.openClass);
            }

            $el.not('.' + vars.openClass).find(vars.content + ':first').hide();

            // Callback
            if (vars.onInit && typeof vars.onInit === 'function') {
                vars.onInit($el);
            }

            // Click event
            $el.on('click', vars.trigger + ':first', function(e) {
                e.preventDefault();
                $obj.click($el);
            });

            // Trigger only once
            if (index === 0) {

                // Hash
                if (vars.hash) {
                    beefup.methods.hash($obj, vars);
                }

                // Self close
                if (vars.selfClose) {
                    beefup.methods.selfClose($obj, vars);
                }
            }
        });
    };

})(jQuery);
	
	}
	{ ACInfo(function() {/*! Selectric ϟ v1.13.0 (Aug 22 2017)
		
		Copyright (c) 2017 Leonardo Santos; MIT License
		http://lcdsantos.github.io/jQuery-Selectric/
		Alvio Wayne modyfication _2021_01_20_21_47_43_57
		
	*/});
		
		(function(factory) {
		  /* global define */
		  /* istanbul ignore next */
		  if ( typeof define === 'function' && define.amd ) {
			define(['jquery'], factory);
		  } else if ( typeof module === 'object' && module.exports ) {
			// Node/CommonJS
			module.exports = function( root, jQuery ) {
			  if ( jQuery === undefined ) {
				if ( typeof window !== 'undefined' ) {
				  jQuery = require('jquery');
				} else {
				  jQuery = require('jquery')(root);
				}
			  }
			  factory(jQuery);
			  return jQuery;
			};
		  } else {
			// Browser globals
			factory(jQuery);
		  }
		}(function($) {
		  'use strict';

		  var $doc = $(document);
		  var $win = $(window);

		  var pluginName = 'ac_selectric';
		  var classList = 'Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel';
		  var eventNamespaceSuffix = '.sl';

		  var chars = ['a', 'e', 'i', 'o', 'u', 'n', 'c', 'y'];
		  var diacritics = [
			/[\xE0-\xE5]/g, // a
			/[\xE8-\xEB]/g, // e
			/[\xEC-\xEF]/g, // i
			/[\xF2-\xF6]/g, // o
			/[\xF9-\xFC]/g, // u
			/[\xF1]/g,      // n
			/[\xE7]/g,      // c
			/[\xFD-\xFF]/g  // y
		  ];

		  /**
		   * Create an instance of Selectric
		   *
		   * @constructor
		   * @param {Node} element - The &lt;select&gt; element
		   * @param {object}  opts - Options
		   */
		  var ac_selectric = function(element, opts) {
			var _this = this;
			
//			if ($(_this).css("display") == "none" || $(_this).css("visibility") == "hidden") {return;};

			_this.element = element;
			_this.$element = $(element);

			_this.state = {
			  multiple       : !!_this.$element.attr('multiple'),
			  enabled        : false,
			  opened         : false,
			  currValue      : -1,
			  selectedIdx    : -1,
			  highlightedIdx : -1
			};

			_this.eventTriggers = {
			  open    : _this.open,
			  close   : _this.close,
			  destroy : _this.destroy,
			  refresh : _this.refresh,
			  init    : _this.init
			};

			_this.init(opts);
		  };

		  ac_selectric.prototype = {
			utils: {
			  /**
			   * Detect mobile browser
			   *
			   * @return {boolean}
			   */
			  isMobile: function() {
				return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
			  },

			  /**
			   * Escape especial characters in string (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
			   *
			   * @param  {string} str - The string to be escaped
			   * @return {string}       The string with the special characters escaped
			   */
			  escapeRegExp: function(str) {
				return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
			  },

			  /**
			   * Replace diacritics
			   *
			   * @param  {string} str - The string to replace the diacritics
			   * @return {string}       The string with diacritics replaced with ascii characters
			   */
			  replaceDiacritics: function(str) {
				var k = diacritics.length;

				while (k--) {
				  str = str.toLowerCase().replace(diacritics[k], chars[k]);
				}

				return str;
			  },

			  /**
			   * Format string
			   * https://gist.github.com/atesgoral/984375
			   *
			   * @param  {string} f - String to be formated
			   * @return {string}     String formated
			   */
			  format: function(f) {
				var a = arguments; // store outer arguments
				return ('' + f) // force format specifier to String
				  .replace( // replace tokens in format specifier
					/\{(?:(\d+)|(\w+))\}/g, // match {token} references
					function(
					  s, // the matched string (ignored)
					  i, // an argument index
					  p // a property name
					) {
					  return p && a[1] // if property name and first argument exist
						? a[1][p] // return property from first argument
						: a[i]; // assume argument index and return i-th argument
					});
			  },

			  /**
			   * Get the next enabled item in the options list.
			   *
			   * @param  {object} selectItems - The options object.
			   * @param  {number}    selected - Index of the currently selected option.
			   * @return {object}               The next enabled item.
			   */
			  nextEnabledItem: function(selectItems, selected) {
				while ( selectItems[ selected = (selected + 1) % selectItems.length ].disabled ) {
				  // empty
				}
				return selected;
			  },

			  /**
			   * Get the previous enabled item in the options list.
			   *
			   * @param  {object} selectItems - The options object.
			   * @param  {number}    selected - Index of the currently selected option.
			   * @return {object}               The previous enabled item.
			   */
			  previousEnabledItem: function(selectItems, selected) {
				while ( selectItems[ selected = (selected > 0 ? selected : selectItems.length) - 1 ].disabled ) {
				  // empty
				}
				return selected;
			  },

			  /**
			   * Transform camelCase string to dash-case.
			   *
			   * @param  {string} str - The camelCased string.
			   * @return {string}       The string transformed to dash-case.
			   */
			  toDash: function(str) {
				return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
			  },

			  /**
			   * Calls the events registered with function name.
			   *
			   * @param {string}    fn - The name of the function.
			   * @param {number} scope - Scope that should be set on the function.
			   */
			  triggerCallback: function(fn, scope) {
				var elm = scope.element;
				var func = scope.options['on' + fn];
				var args = [elm].concat([].slice.call(arguments).slice(1));

				if ( $.isFunction(func) ) {
				  func.apply(elm, args);
				}

				$(elm).trigger(pluginName + '-' + this.toDash(fn), args);
			  },

			  /**
			   * Transform array list to concatenated string and remove empty values
			   * @param  {array} arr - Class list
			   * @return {string}      Concatenated string
			   */
			  arrayToClassname: function(arr) {
				var newArr = $.grep(arr, function(item) {
				  return !!item;
				});

				return $.trim(newArr.join(' '));
			  }
			},

			/** Initializes */
			init: function(opts) {
			  var _this = this;
			  
//			  if ($(_this).css("display") == "none" || $(_this).css("visibility") == "hidden") {return;};
			  
//				console.log(this);
//				console.log($(_this.$element).height());
//				.css('height', $(_this.$element).attr('data-height'))

			  // Set options
			  _this.options = $.extend(true, {}, $.fn[pluginName].defaults, _this.options, opts);

			  _this.utils.triggerCallback('BeforeInit', _this);

			  // Preserve data
			  _this.destroy(true);

			  // Disable on mobile browsers
			  if ( _this.options.disableOnMobile && _this.utils.isMobile() ) {
				_this.disableOnMobile = true;
				return;
			  }

			  // Get classes
			  _this.classes = _this.getClassNames();


			  // Create elements
			  var input              = $('<input/>', { 'class': _this.classes.input, 'readonly': _this.utils.isMobile() });
			  var items              = $('<div/>',   { 'class': _this.classes.items, 'tabindex': -1 });
			  var itemsScroll        = $('<div/>',   { 'class': _this.classes.scroll });
			  var wrapper            = $('<div/>',   { 'class': _this.classes.prefix, 'html': _this.options.arrowButtonMarkup });
			  var label              = $('<span/>',  { 'class': 'label' });
			  var outerWrapper       = _this.$element.wrap('<div/>').parent().append(wrapper.prepend(label), items, input);
			  var hideSelectWrapper  = $('<div/>',   { 'class': _this.classes.hideselect });

			  _this.elements = {
				input        : input,
				items        : items,
				itemsScroll  : itemsScroll,
				wrapper      : wrapper,
				label        : label,
				outerWrapper : outerWrapper
			  };
			  
			  
			  
			  // AW_modify
			  
//			  var d_height = $(_this.$element).attr('data-height');
//			  console.log(d_height);
			  
/* 			  if (typeof d_height !== 'undefined' && d_height.trim() !== '') {
				  
				  _this.elements.outerWrapper.css('height', d_height);
				  
			  } */
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  if ( _this.options.nativeOnMobile && _this.utils.isMobile() ) {
				_this.elements.input = undefined;
				hideSelectWrapper.addClass(_this.classes.prefix + '-is-native');

				_this.$element.on('change', function() {
				  _this.refresh();
				});
			  }

			  _this.$element
				.on(_this.eventTriggers)
				.wrap(hideSelectWrapper);

			  _this.originalTabindex = _this.$element.prop('tabindex');
			  _this.$element.prop('tabindex', -1);

			  _this.populate();
			  _this.activate();

			  _this.utils.triggerCallback('Init', _this);
			},

			/** Activates the plugin */
			activate: function() {
			  var _this = this;
			  var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
			  var originalWidth = _this.$element.width();

			  hiddenChildren.removeClass(_this.classes.tempshow);

			  _this.utils.triggerCallback('BeforeActivate', _this);

			  _this.elements.outerWrapper.prop('class',
				_this.utils.arrayToClassname([
				  _this.classes.wrapper,
				  _this.$element.prop('class').replace(/\S+/g, _this.classes.prefix + '-$&'),
				  _this.options.responsive ? _this.classes.responsive : ''
				])
			  );

			  if ( _this.options.inheritOriginalWidth && originalWidth > 0 ) {
				_this.elements.outerWrapper.width(originalWidth);
			  }

			  _this.unbindEvents();

			  if ( !_this.$element.prop('disabled') ) {
				_this.state.enabled = true;

				// Not disabled, so... Removing disabled class
				_this.elements.outerWrapper.removeClass(_this.classes.disabled);

				// Remove styles from items box
				// Fix incorrect height when refreshed is triggered with fewer options
				_this.$li = _this.elements.items.removeAttr('style').find('li');

				_this.bindEvents();
			  } else {
				_this.elements.outerWrapper.addClass(_this.classes.disabled);

				if ( _this.elements.input ) {
				  _this.elements.input.prop('disabled', true);
				}
			  }

			  _this.utils.triggerCallback('Activate', _this);
			},

			/**
			 * Generate classNames for elements
			 *
			 * @return {object} Classes object
			 */
			getClassNames: function() {
			  var _this = this;
			  var customClass = _this.options.customClass;
			  var classesObj = {};

			  $.each(classList.split(' '), function(i, currClass) {
				var c = customClass.prefix + currClass;
				classesObj[currClass.toLowerCase()] = customClass.camelCase ? c : _this.utils.toDash(c);
			  });

			  classesObj.prefix = customClass.prefix;

			  return classesObj;
			},

			/** Set the label text */
			setLabel: function() {
			  var _this = this;
			  var labelBuilder = _this.options.labelBuilder;

			  if ( _this.state.multiple ) {
				// Make sure currentValues is an array
				var currentValues = $.isArray(_this.state.currValue) ? _this.state.currValue : [_this.state.currValue];
				// I'm not happy with this, but currentValues can be an empty
				// array and we need to fallback to the default option.
				currentValues = currentValues.length === 0 ? [0] : currentValues;

				var labelMarkup = $.map(currentValues, function(value) {
				  return $.grep(_this.lookupItems, function(item) {
					return item.index === value;
				  })[0]; // we don't want nested arrays here
				});

				labelMarkup = $.grep(labelMarkup, function(item) {
				  // Hide default (please choose) if more then one element were selected.
				  // If no option value were given value is set to option text by default
				  if ( labelMarkup.length > 1 || labelMarkup.length === 0 ) {
					return $.trim(item.value) !== '';
				  }
				  return item;
				});

				labelMarkup = $.map(labelMarkup, function(item) {
				  return $.isFunction(labelBuilder)
					? labelBuilder(item)
					: _this.utils.format(labelBuilder, item);
				});

				// Limit the amount of selected values shown in label
				if ( _this.options.multiple.maxLabelEntries ) {
				  if ( labelMarkup.length >= _this.options.multiple.maxLabelEntries + 1 ) {
					labelMarkup = labelMarkup.slice(0, _this.options.multiple.maxLabelEntries);
					labelMarkup.push(
					  $.isFunction(labelBuilder)
						? labelBuilder({ text: '...' })
						: _this.utils.format(labelBuilder, { text: '...' }));
				  } else {
					labelMarkup.slice(labelMarkup.length - 1);
				  }
				}
				_this.elements.label.html(labelMarkup.join(_this.options.multiple.separator));

			  } else {
				var currItem = _this.lookupItems[_this.state.currValue];

				_this.elements.label.html(
				  $.isFunction(labelBuilder)
					? labelBuilder(currItem)
					: _this.utils.format(labelBuilder, currItem)
				);
			  }
			},

			/** Get and save the available options */
			populate: function() {
			  var _this = this;
			  var $options = _this.$element.children();
			  var $justOptions = _this.$element.find('option');
			  var $selected = $justOptions.filter(':selected');
			  var selectedIndex = $justOptions.index($selected);
			  var currIndex = 0;
			  var emptyValue = (_this.state.multiple ? [] : 0);

			  if ( $selected.length > 1 && _this.state.multiple ) {
				selectedIndex = [];
				$selected.each(function() {
				  selectedIndex.push($(this).index());
				});
			  }

			  _this.state.currValue = (~selectedIndex ? selectedIndex : emptyValue);
			  _this.state.selectedIdx = _this.state.currValue;
			  _this.state.highlightedIdx = _this.state.currValue;
			  _this.items = [];
			  _this.lookupItems = [];

			  if ( $options.length ) {
				// Build options markup
				$options.each(function(i) {
				  var $elm = $(this);

				  if ( $elm.is('optgroup') ) {

					var optionsGroup = {
					  element       : $elm,
					  label         : $elm.prop('label'),
					  groupDisabled : $elm.prop('disabled'),
					  items         : []
					};

					$elm.children().each(function(i) {
					  var $elm = $(this);

					  optionsGroup.items[i] = _this.getItemData(currIndex, $elm, optionsGroup.groupDisabled || $elm.prop('disabled'));

					  _this.lookupItems[currIndex] = optionsGroup.items[i];

					  currIndex++;
					});

					_this.items[i] = optionsGroup;

				  } else {

					_this.items[i] = _this.getItemData(currIndex, $elm, $elm.prop('disabled'));

					_this.lookupItems[currIndex] = _this.items[i];

					currIndex++;

				  }
				});

				_this.setLabel();
				_this.elements.items.append( _this.elements.itemsScroll.html( _this.getItemsMarkup(_this.items) ) );
			  }
			},

			/**
			 * Generate items object data
			 * @param  {integer} index      - Current item index
			 * @param  {node}    $elm       - Current element node
			 * @param  {boolean} isDisabled - Current element disabled state
			 * @return {object}               Item object
			 */
			getItemData: function(index, $elm, isDisabled) {
			  var _this = this;

			  return {
				index     : index,
				element   : $elm,
				value     : $elm.val(),
				className : $elm.prop('class'),
				text      : $elm.html(),
				slug      : $.trim(_this.utils.replaceDiacritics($elm.html())),
				alt       : $elm.attr('data-alt'),
				selected  : $elm.prop('selected'),
				disabled  : isDisabled
			  };
			},

			/**
			 * Generate options markup
			 *
			 * @param  {object} items - Object containing all available options
			 * @return {string}         HTML for the options box
			 */
			getItemsMarkup: function(items) {
			  var _this = this;
			  var markup = '<ul>';

			  if ( $.isFunction(_this.options.listBuilder) && _this.options.listBuilder ) {
				items = _this.options.listBuilder(items);
			  }

			  $.each(items, function(i, elm) {
				if ( elm.label !== undefined ) {

				  markup += _this.utils.format('<ul class="{1}"><li class="{2}">{3}</li>',
					_this.utils.arrayToClassname([
					  _this.classes.group,
					  elm.groupDisabled ? 'disabled' : '',
					  elm.element.prop('class')
					]),
					_this.classes.grouplabel,
					elm.element.prop('label')
				  );

				  $.each(elm.items, function(i, elm) {
					markup += _this.getItemMarkup(elm.index, elm);
				  });

				  markup += '</ul>';

				} else {

				  markup += _this.getItemMarkup(elm.index, elm);

				}
			  });

			  return markup + '</ul>';
			},

			/**
			 * Generate every option markup
			 *
			 * @param  {number} index    - Index of current item
			 * @param  {object} itemData - Current item
			 * @return {string}            HTML for the option
			 */
			getItemMarkup: function(index, itemData) {
			  var _this = this;
			  var itemBuilder = _this.options.optionsItemBuilder;
			  // limit access to item data to provide a simple interface
			  // to most relevant options.
			  var filteredItemData = {
				value: itemData.value,
				text : itemData.text,
				slug : itemData.slug,
				index: itemData.index
			  };

			  return _this.utils.format('<li data-index="{1}" class="{2}">{3}</li>',
				index,
				_this.utils.arrayToClassname([
				  itemData.className,
				  index === _this.items.length - 1  ? 'last'     : '',
				  itemData.disabled                 ? 'disabled' : '',
				  itemData.selected                 ? 'selected' : ''
				]),
				$.isFunction(itemBuilder)
				  ? _this.utils.format(itemBuilder(itemData, this.$element, index), itemData)
				  : _this.utils.format(itemBuilder, filteredItemData)
			  );
			},

			/** Remove events on the elements */
			unbindEvents: function() {
			  var _this = this;

			  _this.elements.wrapper
				.add(_this.$element)
				.add(_this.elements.outerWrapper)
				.add(_this.elements.input)
				.off(eventNamespaceSuffix);
			},

			/** Bind events on the elements */
			bindEvents: function() {
			  var _this = this;

			  _this.elements.outerWrapper.on('mouseenter' + eventNamespaceSuffix + ' mouseleave' + eventNamespaceSuffix, function(e) {
				$(this).toggleClass(_this.classes.hover, e.type === 'mouseenter');

				// Delay close effect when openOnHover is true
				if ( _this.options.openOnHover ) {
				  clearTimeout(_this.closeTimer);

				  if ( e.type === 'mouseleave' ) {
					_this.closeTimer = setTimeout($.proxy(_this.close, _this), _this.options.hoverIntentTimeout);
				  } else {
					_this.open();
				  }
				}
			  });

			  // Toggle open/close
		//		_this.elements.wrapper.on('pointerup' + eventNamespaceSuffix, function(e) {
			  _this.elements.wrapper.on('click' + eventNamespaceSuffix, function(e) {
				_this.state.opened ? _this.close() : _this.open(e);
			  });

			  // Translate original element focus event to dummy input.
			  // Disabled on mobile devices because the default option list isn't
			  // shown due the fact that hidden input gets focused
			  if ( !(_this.options.nativeOnMobile && _this.utils.isMobile()) ) {
				_this.$element.on('focus' + eventNamespaceSuffix, function() {
				  _this.elements.input.focus();
				});

				_this.elements.input
				  .prop({ tabindex: _this.originalTabindex, disabled: false })
				  .on('keydown' + eventNamespaceSuffix, $.proxy(_this.handleKeys, _this))
				  .on('focusin' + eventNamespaceSuffix, function(e) {
					_this.elements.outerWrapper.addClass(_this.classes.focus);

					// Prevent the flicker when focusing out and back again in the browser window
					_this.elements.input.one('blur', function() {
					  _this.elements.input.blur();
					});

					if ( _this.options.openOnFocus && !_this.state.opened ) {
					  _this.open(e);
					}
				  })
				  .on('focusout' + eventNamespaceSuffix, function() {
					_this.elements.outerWrapper.removeClass(_this.classes.focus);
				  })
				  .on('input propertychange', function() {
					var val = _this.elements.input.val();
					var searchRegExp = new RegExp('^' + _this.utils.escapeRegExp(val), 'i');

					// Clear search
					clearTimeout(_this.resetStr);
					_this.resetStr = setTimeout(function() {
					  _this.elements.input.val('');
					}, _this.options.keySearchTimeout);

					if ( val.length ) {
					  // Search in select options
					  $.each(_this.items, function(i, elm) {
						if (elm.disabled) {
						  return;
						}
						if (searchRegExp.test(elm.text) || searchRegExp.test(elm.slug)) {
						  _this.highlight(i);
						  return;
						}
						if (!elm.alt) {
						  return;
						}
						var altItems = elm.alt.split('|');
						for (var ai = 0; ai < altItems.length; ai++) {
						  if (!altItems[ai]) {
							break;
						  }
						  if (searchRegExp.test(altItems[ai].trim())) {
							_this.highlight(i);
							return;
						  }
						}
					  });
					}
				  });
			  }

			  _this.$li.on({
				// Prevent <input> blur on Chrome
				mousedown: function(e) {
				  e.preventDefault();
				  e.stopPropagation();
				},
				click: function() {
				  _this.select($(this).data('index'));

				  // Chrome doesn't close options box if select is wrapped with a label
				  // We need to 'return false' to avoid that
				  return false;
				}
			  });
			},

			/**
			 * Behavior when keyboard keys is pressed
			 *
			 * @param {object} e - Event object
			 */
			handleKeys: function(e) {
			  var _this = this;
			  var key = e.which;
			  var keys = _this.options.keys;

			  var isPrevKey = $.inArray(key, keys.previous) > -1;
			  var isNextKey = $.inArray(key, keys.next) > -1;
			  var isSelectKey = $.inArray(key, keys.select) > -1;
			  var isOpenKey = $.inArray(key, keys.open) > -1;
			  var idx = _this.state.highlightedIdx;
			  var isFirstOrLastItem = (isPrevKey && idx === 0) || (isNextKey && (idx + 1) === _this.items.length);
			  var goToItem = 0;

			  // Enter / Space
			  if ( key === 13 || key === 32 ) {
				e.preventDefault();
			  }

			  // If it's a directional key
			  if ( isPrevKey || isNextKey ) {
				if ( !_this.options.allowWrap && isFirstOrLastItem ) {
				  return;
				}

				if ( isPrevKey ) {
				  goToItem = _this.utils.previousEnabledItem(_this.lookupItems, idx);
				}

				if ( isNextKey ) {
				  goToItem = _this.utils.nextEnabledItem(_this.lookupItems, idx);
				}

				_this.highlight(goToItem);
			  }

			  // Tab / Enter / ESC
			  if ( isSelectKey && _this.state.opened ) {
				_this.select(idx);

				if ( !_this.state.multiple || !_this.options.multiple.keepMenuOpen ) {
				  _this.close();
				}

				return;
			  }

			  // Space / Enter / Left / Up / Right / Down
			  if ( isOpenKey && !_this.state.opened ) {
				_this.open();
			  }
			},

			/** Update the items object */
			refresh: function() {
			  var _this = this;

			  _this.populate();
			  _this.activate();
			  _this.utils.triggerCallback('Refresh', _this);
			},

			/** Set options box width/height */
			setOptionsDimensions: function() {
			  var _this = this;

			  // Calculate options box height
			  // Set a temporary class on the hidden parent of the element
			  var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
			  var maxHeight = _this.options.maxHeight;
			  var itemsWidth = _this.elements.items.outerWidth();
			  var wrapperWidth = _this.elements.wrapper.outerWidth() - (itemsWidth - _this.elements.items.width());

			  // Set the dimensions, minimum is wrapper width, expand for long items if option is true
			  if ( !_this.options.expandToItemText || wrapperWidth > itemsWidth ) {
				_this.finalWidth = wrapperWidth;
			  } else {
				// Make sure the scrollbar width is included
				_this.elements.items.css('overflow', 'scroll');

				// Set a really long width for _this.elements.outerWrapper
				_this.elements.outerWrapper.width(9e4);
				_this.finalWidth = _this.elements.items.width();
				// Set scroll bar to auto
				_this.elements.items.css('overflow', '');
				_this.elements.outerWrapper.width('');
			  }

			  _this.elements.items.width(_this.finalWidth).height() > maxHeight && _this.elements.items.height(maxHeight);

			  // Remove the temporary class
			  hiddenChildren.removeClass(_this.classes.tempshow);
			},

			/** Detect if the options box is inside the window */
			isInViewport: function() {
			  var _this = this;

			  if (_this.options.forceRenderAbove === true) {
				  
				_this.elements.outerWrapper.addClass(_this.classes.above);
				
		/* 		_this.elements.items.css({
					'position' : 'fixed',
					'width' : _this_outerWidth+'px',
					'left' : _this_position_left+'px',
					'top' : '',
					'bottom' : _this_position_bottom+'px',
				}); */
				
			  } else if (_this.options.forceRenderBelow === true) {
				  
				_this.elements.outerWrapper.addClass(_this.classes.below);
				
		/* 		_this.elements.items.css({
					'position' : 'fixed',
					'width' : _this_outerWidth+'px',
					'left' : _this_position_left+'px',
					'top' : _this_position_top+'px',
					'bottom' : '',
				}); */
				
			  } else {
				  
				var scrollTop = $win.scrollTop();
				var winHeight = $win.height();
				var uiPosX = _this.elements.outerWrapper.offset().top;
				var uiHeight = _this.elements.outerWrapper.outerHeight();

				var fitsDown = (uiPosX + uiHeight + _this.itemsHeight) <= (scrollTop + winHeight);
				var fitsAbove = (uiPosX - _this.itemsHeight) > scrollTop;

				// If it does not fit below, only render it
				// above it fit's there.
				// It's acceptable that the user needs to
				// scroll the viewport to see the cut off UI
				var renderAbove = !fitsDown && fitsAbove;
				var renderBelow = !renderAbove;

				_this.elements.outerWrapper.toggleClass(_this.classes.above, renderAbove);
				_this.elements.outerWrapper.toggleClass(_this.classes.below, renderBelow);
				
				
				
				// AW modify
				var _this_outerWidth = _this.elements.outerWrapper.outerWidth();
				var _this_position_left = _this.elements.outerWrapper.offset().left;
				var _this_position_top = _this.elements.outerWrapper.offset().top - $(window).scrollTop();
				var _this_position_bottom =  $(window).height() - ( $(_this.elements.outerWrapper).offset().top + $(_this.elements.outerWrapper).height() );
				if (_this.elements.outerWrapper.hasClass(_this.classes.above)) {
					
					_this.elements.items.css({
						'position' : 'fixed',
						'width' : _this_outerWidth+'px',
						'left' : _this_position_left+'px',
						'top' : '',
						'bottom' : _this_position_bottom+'px',
					});
					
				} else if (_this.elements.outerWrapper.hasClass(_this.classes.below)) {
					
					_this.elements.items.css({
						'position' : 'fixed',
						'width' : _this_outerWidth+'px',
						'left' : _this_position_left+'px',
						'top' : _this_position_top+'px',
						'bottom' : '',
					});
					
				}
				
				
				
			  }
			},

			/**
			 * Detect if currently selected option is visible and scroll the options box to show it
			 *
			 * @param {Number|Array} index - Index of the selected items
			 */
			detectItemVisibility: function(index) {
			  var _this = this;
			  var $filteredLi = _this.$li.filter('[data-index]');

			  if ( _this.state.multiple ) {
				// If index is an array, we can assume a multiple select and we
				// want to scroll to the uppermost selected item!
				// Math.min.apply(Math, index) returns the lowest entry in an Array.
				index = ($.isArray(index) && index.length === 0) ? 0 : index;
				index = $.isArray(index) ? Math.min.apply(Math, index) : index;
			  }

			  var liHeight = $filteredLi.eq(index).outerHeight();
			  var liTop = $filteredLi[index].offsetTop;
			  var itemsScrollTop = _this.elements.itemsScroll.scrollTop();
			  var scrollT = liTop + liHeight * 2;

			  _this.elements.itemsScroll.scrollTop(
				scrollT > itemsScrollTop + _this.itemsHeight ? scrollT - _this.itemsHeight :
				  liTop - liHeight < itemsScrollTop ? liTop - liHeight :
					itemsScrollTop
			  );
			},

			/**
			 * Open the select options box
			 *
			 * @param {Event} e - Event
			 */
			open: function(e) {
			  var _this = this;

			  if ( _this.options.nativeOnMobile && _this.utils.isMobile()) {
				return false;
			  }

			  _this.utils.triggerCallback('BeforeOpen', _this);

			  if ( e ) {
				e.preventDefault();
				if (_this.options.stopPropagation) {
				  e.stopPropagation();
				}
			  }

			  if ( _this.state.enabled ) {
				_this.setOptionsDimensions();

				// Find any other opened instances of select and close it
				$('.' + _this.classes.hideselect, '.' + _this.classes.open).children()[pluginName]('close');

				_this.state.opened = true;
				_this.itemsHeight = _this.elements.items.outerHeight();
				_this.itemsInnerHeight = _this.elements.items.height();
				
				// Toggle options box visibility
				_this.elements.outerWrapper.addClass(_this.classes.open);

				// Give dummy input focus
				_this.elements.input.val('');
				if ( e && e.type !== 'focusin' ) {
				  _this.elements.input.focus();
				}

				// Delayed binds events on Document to make label clicks work
				setTimeout(function() {
				  $doc
					.on('click' + eventNamespaceSuffix, $.proxy(_this.close, _this))
					.on('scroll' + eventNamespaceSuffix, $.proxy(_this.isInViewport, _this));
				}, 1);

				_this.isInViewport();

				// Prevent window scroll when using mouse wheel inside items box
				if ( _this.options.preventWindowScroll ) {
				  /* istanbul ignore next */
				  $doc.on('mousewheel' + eventNamespaceSuffix + ' DOMMouseScroll' + eventNamespaceSuffix, '.' + _this.classes.scroll, function(e) {
					var orgEvent = e.originalEvent;
					var scrollTop = $(this).scrollTop();
					var deltaY = 0;

					if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1; }
					if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;  }
					if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY; }
					if ( 'deltaY'      in orgEvent ) { deltaY = orgEvent.deltaY * -1; }

					if ( scrollTop === (this.scrollHeight - _this.itemsInnerHeight) && deltaY < 0 || scrollTop === 0 && deltaY > 0 ) {
					  e.preventDefault();
					}
				  });
				}
				
				_this.detectItemVisibility(_this.state.selectedIdx);

				_this.highlight(_this.state.multiple ? -1 : _this.state.selectedIdx);
				
				// AW modify
		//		console.log('selectric_open');
				$('html').addClass('ac_selectric_open');

				_this.utils.triggerCallback('Open', _this);
			  }
			},

			/** Close the select options box */
			close: function() {
			  var _this = this;

			  _this.utils.triggerCallback('BeforeClose', _this);

			  // Remove custom events on document
			  $doc.off(eventNamespaceSuffix);

			  // Remove visible class to hide options box
			  _this.elements.outerWrapper.removeClass(_this.classes.open);

			  _this.state.opened = false;
				
				// AW modify
				$('html').removeClass('ac_selectric_open');

			  _this.utils.triggerCallback('Close', _this);
			},

			/** Select current option and change the label */
			change: function() {
			  var _this = this;

			  _this.utils.triggerCallback('BeforeChange', _this);

			  if ( _this.state.multiple ) {
				// Reset old selected
				$.each(_this.lookupItems, function(idx) {
				  _this.lookupItems[idx].selected = false;
				  _this.$element.find('option').prop('selected', false);
				});

				// Set new selected
				$.each(_this.state.selectedIdx, function(idx, value) {
				  _this.lookupItems[value].selected = true;
				  _this.$element.find('option').eq(value).prop('selected', true);
				});

				_this.state.currValue = _this.state.selectedIdx;

				_this.setLabel();

				_this.utils.triggerCallback('Change', _this);
			  } else if ( _this.state.currValue !== _this.state.selectedIdx ) {
				// Apply changed value to original select
				_this.$element
				  .prop('selectedIndex', _this.state.currValue = _this.state.selectedIdx)
				  .data('value', _this.lookupItems[_this.state.selectedIdx].text);

				// Change label text
				_this.setLabel();

				_this.utils.triggerCallback('Change', _this);
			  }
			},

			/**
			 * Highlight option
			 * @param {number} index - Index of the options that will be highlighted
			 */
			highlight: function(index) {
			  var _this = this;
			  var $filteredLi = _this.$li.filter('[data-index]').removeClass('highlighted');

			  _this.utils.triggerCallback('BeforeHighlight', _this);

			  // Parameter index is required and should not be a disabled item
			  if ( index === undefined || index === -1 || _this.lookupItems[index].disabled ) {
				return;
			  }

			  $filteredLi
				.eq(_this.state.highlightedIdx = index)
				.addClass('highlighted');

			  _this.detectItemVisibility(index);

			  _this.utils.triggerCallback('Highlight', _this);
			},

			/**
			 * Select option
			 *
			 * @param {number} index - Index of the option that will be selected
			 */
			select: function(index) {
			  var _this = this;
			  var $filteredLi = _this.$li.filter('[data-index]');

			  _this.utils.triggerCallback('BeforeSelect', _this, index);

			  // Parameter index is required and should not be a disabled item
			  if ( index === undefined || index === -1 || _this.lookupItems[index].disabled ) {
				return;
			  }

			  if ( _this.state.multiple ) {
				// Make sure selectedIdx is an array
				_this.state.selectedIdx = $.isArray(_this.state.selectedIdx) ? _this.state.selectedIdx : [_this.state.selectedIdx];

				var hasSelectedIndex = $.inArray(index, _this.state.selectedIdx);
				if ( hasSelectedIndex !== -1 ) {
				  _this.state.selectedIdx.splice(hasSelectedIndex, 1);
				} else {
				  _this.state.selectedIdx.push(index);
				}

				$filteredLi
				  .removeClass('selected')
				  .filter(function(index) {
					return $.inArray(index, _this.state.selectedIdx) !== -1;
				  })
				  .addClass('selected');
			  } else {
				$filteredLi
				  .removeClass('selected')
				  .eq(_this.state.selectedIdx = index)
				  .addClass('selected');
			  }

			  if ( !_this.state.multiple || !_this.options.multiple.keepMenuOpen ) {
				_this.close();
			  }

			  _this.change();

			  _this.utils.triggerCallback('Select', _this, index);
			},

			/**
			 * Unbind and remove
			 *
			 * @param {boolean} preserveData - Check if the data on the element should be removed too
			 */
			destroy: function(preserveData) {
			  var _this = this;

			  if ( _this.state && _this.state.enabled ) {
				_this.elements.items.add(_this.elements.wrapper).add(_this.elements.input).remove();

				if ( !preserveData ) {
				  _this.$element.removeData(pluginName).removeData('value');
				}

				_this.$element.prop('tabindex', _this.originalTabindex).off(eventNamespaceSuffix).off(_this.eventTriggers).unwrap().unwrap();

				_this.state.enabled = false;
			  }
			}
		  };

		  // A really lightweight plugin wrapper around the constructor,
		  // preventing against multiple instantiations
		  $.fn[pluginName] = function(args) {
			return this.each(function() {
			  var data = $.data(this, pluginName);

				// AW_modify
//				if ($(this).css("display") == "none" || $(this).css("visibility") == "hidden") {return;};
//				if ($(this).css("display") == "none") {return;};
				if ($(this).closest('.AC_selectric_ignore_wrap').length) {return;};

			  if ( data && !data.disableOnMobile ) {
				(typeof args === 'string' && data[args]) ? data[args]() : data.init(args);
			  } else {
				$.data(this, pluginName, new ac_selectric(this, args));
			  }
			});
		  };

		  /**
		   * Default plugin options
		   *
		   * @type {object}
		   */
		  $.fn[pluginName].defaults = {
			onChange             : function(elm) { $(elm).change(); },
			maxHeight            : 300,
			keySearchTimeout     : 500,
			
			
			// AW modify
//			arrowButtonMarkup    : '<b class="button">&#x25be;</b>',
			arrowButtonMarkup    : '<div class="ac_selectric_chevrons_wrap"><div class="ac_selectric_chevrons"><i class="fas fa-chevron-up"></i> <i class="fas fa-chevron-down"></i></div></div>',
			
			
			
			
			disableOnMobile      : false,
			nativeOnMobile       : true,
			openOnFocus          : true,
			openOnHover          : false,
			hoverIntentTimeout   : 500,
			expandToItemText     : false,
			responsive           : false,
			preventWindowScroll  : false,
			inheritOriginalWidth : false,
			allowWrap            : true,
			forceRenderAbove     : false,
			forceRenderBelow     : false,
			stopPropagation      : true,
			optionsItemBuilder   : '{text}', // function(itemData, element, index)
			labelBuilder         : '{text}', // function(currItem)
			listBuilder          : false,    // function(items)
			keys                 : {
			  previous : [37, 38],                 // Left / Up
			  next     : [39, 40],                 // Right / Down
			  select   : [9, 13, 27],              // Tab / Enter / Escape
			  open     : [13, 32, 37, 38, 39, 40], // Enter / Space / Left / Up / Right / Down
			  close    : [9, 27]                   // Tab / Escape
			},
			customClass          : {
			  prefix: pluginName,
			  camelCase: false
			},
			multiple              : {
			  separator: ', ',
			  keepMenuOpen: true,
			  maxLabelEntries: false
			}
		  };
		}));
		
	}
	
	
	
	
	
	
	
//! DEV FUNCTIONS
	function ShowFPS() {/*! AW ShowFPS
		
		Last upadate _2019_04_17_16_39_03_94
		(c) Alvio Wayne
		The MIT License (MIT)
		
		*/
		
		$("head #AC_addon_styles").append( '#ShowFPS {position: fixed;top: 20px;left: 20px;padding: 10px;background: rgba(0, 0, 0, 0.7);color: #fff;font-family: sans-serif;font-size: 13px;z-index:999999999999999999999;}' );
		$("body").append( '<output id="ShowFPS"></output>' );
		window.countFPS = (function () {
		  var lastLoop = (new Date()).getMilliseconds();
		  var count = 1;
		  var fps = 0;

		  return function () {
			var currentLoop = (new Date()).getMilliseconds();
			if (lastLoop > currentLoop) {
			  fps = count;
			  count = 1;
			} else {
			  count += 1;
			}
			lastLoop = currentLoop;
			return fps;
		  };
		}());

		var $out = $('#ShowFPS');
		(function loop() {
			requestAnimationFrame(function () {
			  $out.html(countFPS());
			  loop();
			});
		}());
		
	}
	function DeviceBlock() {/*! AW DeviceBlock
		
		Last upadate _2019_04_17_16_39_03_94
		(c) Alvio Wayne
		The MIT License (MIT)
		
		*/
		
		if (AC_self.desktopBlock && ifDevice('desktop') || AC_self.tabletBlock && ifDevice('tablet') || AC_self.mobileBlock && ifDevice('mobile')) {
			$("head #AWITCoreH").append( '#DeviceBlock {z-index: 999999999;position: absolute;top: 0;bottom: 0;left: 0;right: 0;height: 100%;width: 100%;background: #fff;border: 20px solid #F2F2F2;font-family: sans-serif;font-weight: bold;font-size: 15px;line-height:21px;color: #777;text-align: center;}#DeviceBlock h1 {font-size: 1.25rem;font-weight: normal;margin-bottom: 2rem;color: #2796BC;}' );
			$('body').empty();
			$("body").append( '<button type="button" id="DeviceBlock"><h1 class="bounceIn">Sorry (:</h1><span>'+AC_self.deviceBlockText+'</span></button>' );
		};
		
	};
	
	
	
	
	
	
	
//!	INIT
	{ // instant before $(function() (DOM ready), AC_body_ready & AC_page_ready
		
		if (!ifDevice('mobile')) { AWITCoreInfo_logPrint(); }
		if (AC_self.ImgAfterLoad) { $ImgAfterLoad('init'); }
		
		
		
		
		
		
		
		
//		$('input.numberInput').numberInput();
		$.onCreate('input.numberInput', function(elements) {
	//		console.log(elements);
			$('input.numberInput').numberInput();
		},true);
		
		
		
		// AC_innerCode
		$.onCreate('.AC_innerCode', function(elements) {
			
//			console.log(elements);
			
			$(elements).each(function() {
				$(this).text($(this).html().trim());
			});
			
		},true);
		
		
		
		
		
		
		
		{ // AC_button_confirm
			
			$.onCreate('.AC_button_confirm, .buttonConfirm', function(elements) {
	//			console.log(elements);
				$(elements).AC_buttonConfirm('prepare');
			},true);
			
			$(document).AC_buttonConfirm('events');
			
			$.onCreate('.AC_button_confirm_help_icon', function(elements) {
	//			console.log(elements);
				
				$(elements).each(function() {
					$(this).html('<i class="fas fa-circle"></i><div>HOLD</div>');
				});
				
			},true);
			
		}
		
		
		
		
		
		// AC_Selectric
		$.onCreate('select.AC_Selectric', function(elements) {
			
//			console.log(elements);
			$('select.AC_Selectric').ac_selectric();
			
		},true);
		
		// AC_material_dc add readonly
		$.onCreate('input.AC_material_dc', function(elements) {
//			console.log(elements);
			$(elements).prop('readonly', true);
		},true);
		
		// AC_material beta (after AC_Selectric & AC_material_dc)
		$.onCreate('input.AC_material, textarea.AC_material, select.AC_material', function(elements) {
//			console.log('AC_material elements');
//			console.log(elements);
			$(elements).AC_material();
		},true);
		
/* 		// AC_extended_input
		var AC_extended_input_class = 'input.AC_extended_input';
		$.onCreate(AC_extended_input_class, function(elements) {
			
			console.log(elements);
			
			$.each($(elements), function(index, element) {
				
				console.log($(element));
				
				// create a new <a> element
				var new_element = $("<textarea/>");
				
				// iterate over every attribute of the #some_id span element
				$.each($(element).get(0).attributes, function(i, attrib) {
					// set each attribute to the specific value
					$(new_element).attr(attrib.name, attrib.value);
				});
				
				// carry over the html content
				new_element.val($(element).val());
				
				new_element.removeAttr('type').removeAttr('value');
				
				// finally, swap the elements   
				$(element).replaceWith(new_element);
				
				console.log($(new_element));
				
			});
			
//			$(AC_extended_input_class).AC_textareaAutoSize();
			
		},true); */
		
		// AC_textareaAutoSize
		var textareaAutoSize_targets = 'textarea.textareaAutoSize, textarea.AC_textareaAutoSize, textarea.AC_textarea_autosize, textarea.AC_extended_input';
		$.onCreate(textareaAutoSize_targets, function(elements) {
			
//			console.log(elements);
			$(textareaAutoSize_targets).AC_textareaAutoSize();
			
		},true);
		
		// AC_inputAutoWidth
		$.onCreate('input.AC_inputAutoWidth', function(elements) {
			
//			console.log(elements);
			$(elements).AC_inputAutoWidth();
			
		},true);
		
		
		
		
		
		
		
		
		// beefup
		$.onCreate('.beefup', function(elements) {
			
//			console.log(elements);
			
/* 			$.each(elements, function(index, value) {
				
				
				
			}); */
			
			$(elements).beefup({
	//			openSingle: true,
	//			selfClose: true,
			});
			
		},true);
		
		// AC_typing
		$.onCreate('.AC_typing', function(elements) {
			
//			console.log(elements);
			$AC_typing(elements);
			
		},true);
		
		
		
		
		
		
		
		{ // data-AC_input_filter="num" (num, a-z)
			
			$.onCreate('input[data-AC_input_filter="num"]', function(elements) {
				
	//			console.log(elements);
				
				$('input[data-AC_input_filter="num"]').inputFilter(function(value) {
					return /^-?\d*$/.test(value);
				});
				
			},true);
			$.onCreate('input[data-AC_input_filter="a-z"]', function(elements) {
				
	//			console.log(elements);
				
				$('input[data-AC_input_filter="a-z"]').inputFilter(function(value) {
					return /^[a-z]*$/i.test(value);
				});
				
			},true);
			
		}
		{ // data-AC_input_format="phone" (phone, num)
			
			$.onCreate('input[data-AC_input_format="phone"]', function(elements) {
				
	//			console.log(elements);
				
				$(elements).usPhoneFormat({
					format: '(xxx) xxx-xxxx',
				});
				
			},true);
			$.onCreate('input[data-AC_input_format="num"]', function(elements) {
				
//				console.log(elements);
				
				$(elements).AC_input_filter(function(val) {
					return /^-?\d*$/.test(val);
				});
				
				if ($(elements).val().trim() == '') {
					$(elements).val('0');
				}
				
			},true);
			$(document).on('change', 'input[data-AC_input_format="num"]', function(e) {
				
//				console.log(e);
//				console.log(this);
				
				if ($(this).val().trim() == '') {
					$(this).val('0');
				}
				
			});
			
		}
		
		
		
		
		
		
		
		
		
		
		
		
		// for compatibility with AWIT.Core.6
		
		// materialInput
		$.onCreate('input.materialInput', function(elements) {
//			console.log(elements);
			$('input.materialInput').materialInput();
		},true);
		
		// buttonConfirm
		$.onCreate('.buttonConfirm', function(elements) {
//			console.log(elements);
			$(elements).AW_buttonConfirm('prepare');
		},true);
		$(document).AW_buttonConfirm('events');
		
		
		
		
		
		
		
		
		
		
	}
	function INIT() {
		
		DeviceBlock();
		
		$AWIT_NAV();
		$AWIT_MODAL();
		$AW_animList();
		if (ifDevice('desktop') || ifDevice('tablet')) {
			
			if (AC_self.WowNew) { WowNew(); }
			
		}
//		FontLoad();
//		if (AC_self.FontAwesome) { FontLoad('FontAwesome'); }
/* 		if (!ifDevice('mobile')) {
			if (AC_scrollbar.ScrollTop) { scrollTop(); };
		}; */
		if (AC_self.FullPageBackground) {
			backBaseStyle();
			backHD();
			if (AC_self.Back_Overlay) { backOverlay(); }
		}
//		ScrolllToID(); // passive
		if (AC_self.ShowFPS) { ShowFPS(); };
		if (AC_self.BodyAbsoluteCenter) { BodyAbsoluteCenter(); };
		
	}
	if (AC_self.waitDOM) {
		
		$(function() {
			
			INIT();
			
		});
		
	} else {
		
		$(document).on('AC_body_ready', function(e) {
			
			INIT();
			
		});
		
	}
/*  	$(document).on('AC_page_ready', function(e) {
		
		console.log('AC_page_ready');
		
	}); */
	
	
	
	
	
	
	
	
	
}})(jQuery);



























