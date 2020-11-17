parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RG75":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=a(require("react")),e=require("../../../common/utils.js"),r=a(require("d3"));function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}function a(t){if(t&&t.__esModule)return t;var e=n();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=a?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=t[o]}}return r.default=t,e&&e.set(t,r),r}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return l(t)||s(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,e,r){return e&&f(t.prototype,e),r&&f(t,r),t}function d(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)}function b(t){return null==t||null==t||"string"==typeof t&&"na"==t.toLowerCase()}var k=function(e){function n(e){var r;return c(this,n),(r=d(this,y(n).call(this,e))).self=t.default.createRef(),r.maxTime=Number.NEGATIVE_INFINITY,r.state={margin:{top:35,right:20,bottom:45,left:45},loading:!0,error:null},r.props.filter?r.state.data=r.transform(r.props.data.filter(function(t){return t[r.props.filter.field]==r.props.filter.value}),r.props.fields):r.state.data=r.transform(r.props.data,r.props.fields),r}return m(n,t.Component),p(n,[{key:"transform",value:function(t,e){var n=e.eventValue,a=e.censoredValue,o=e.group.field,u=e.time.field,s=e.event.field;t=t.filter(function(t){return"stage_x/NR"!=t.collapsed_stage&&!b(t[u])&&!b(t[s])&&!b(t[o])}),this.maxTime=Math.max.apply(Math,i(t.map(function(t){return t[u]})));var l=r.nest().key(function(t){return t[o]}).entries(t),c=[];return l.forEach(function(t){var e=t.key,o=t.values.length,i=r.nest().key(function(t){return+t[u]}).sortKeys(function(t,e){return+t-+e}).rollup(function(t){return{event:t.filter(function(t){return t[s]==n}).length,censor:t.filter(function(t){return t[s]==a}).length}}).entries(t.values),l=1,f=[];i.forEach(function(t){var e=+t.key,r=t.value.event,n=t.value.censor;if(!(e<0)){if(r>0){l*=1-r/o;f.push({p:l,time:e,censored:!1})}if(n>0){f.push({p:l,time:e,censored:!0})}o-=r+n}}),c.push({key:e,points:f})}),c}},{key:"shouldComponentUpdate",value:function(t,e){return!0}},{key:"drawLine",value:function(t,e,n){var a=this,o=r.line().curve(r.curveStepAfter).x(function(t){return a.xScale(t.time)}).y(function(t){return a.yScale(t.p)});t.append("path").datum(e).attr("class","line").style("stroke",n).attr("d",o),e.forEach(function(e){if(e.censored){var r=[{p:e.p-.015,time:e.time},{p:e.p+.015,time:e.time}];t.append("path").datum(r).attr("class","mark").style("stroke",n).attr("d",o)}})}},{key:"drawCensoredMark",value:function(t,e,r){}},{key:"drawKMCurve",value:function(t,e){this.drawLine(t,e.points,this.color(e.key))}},{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var t=this,e=this.self.current.getBoundingClientRect(),n=e.width-this.state.margin.left-this.state.margin.right,a=e.height-this.state.margin.top-this.state.margin.bottom,o=r.select(this.self.current).append("svg").attr("width",e.width).attr("height",e.height),i=o.append("g").attr("transform","translate("+this.state.margin.left+","+this.state.margin.top+")");this.xScale=r.scaleLinear().domain([0,this.maxTime]).range([0,n]),this.yScale=r.scaleLinear().domain([0,1]).range([a,0]),this.color=r.scaleOrdinal().domain(this.state.data.map(function(t){return t.key})).range(r.quantize(function(t){return r.interpolateSpectral(t)},this.state.data.length)),i.append("g").attr("transform","translate(0,"+a+")").call(r.axisBottom(this.xScale).ticks(4)).append("text").attr("y",30).attr("x",n/2).attr("fill","black").attr("font-size",13).text("Time ".concat(this.props.fields.time.unit?"(".concat(this.props.fields.time.unit,")"):"")),i.append("g").call(r.axisLeft(this.yScale).ticks(4)).append("text").attr("y",-30).attr("x",-a/3).attr("fill","black").attr("font-size",13).attr("transform","rotate(-90)").text("Survival Probability"),this.state.data.forEach(function(e){return t.drawKMCurve(i,e)});var u=o.append("g").attr("class","legend").attr("transform","translate(".concat(this.state.margin.left+n/2,",0)")).selectAll("g").data(this.state.data).enter().append("g").attr("transform",function(t,e){return"translate(".concat(100*e,",").concat(15,")")});u.append("rect").style("fill",function(e){return t.color(e.key)}).attr("x",0).attr("y",0).attr("width",10).attr("height",10),u.append("text").style("font-family","Georgia").style("font-size","13px").attr("x",17.5).attr("y",10).text(function(t){return t.key});var s=0;u.attr("transform",function(t,e){var r=s;return s+=function(t){return t.getBBox().width}(this)+10,"translate(".concat(r,",").concat(10,")")})}},{key:"render",value:function(){return t.default.createElement("div",{id:this.props.id,ref:this.self,style:{width:"100%",height:"100%"}})}}]),n}();exports.default=k;
},{"react":"n8MK","../../../common/utils.js":"by1F","d3":"UzF0"}]},{},[], null)
//# sourceMappingURL=KMCurve.711f9082.js.map