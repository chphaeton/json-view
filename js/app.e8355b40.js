(function(e){function t(t){for(var r,s,i=t[0],l=t[1],u=t[2],c=0,p=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/json-view/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0789":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,'.json-view[data-v-1c50072e]{color:#660e7a}.json-view .row[data-v-1c50072e]{display:flex;padding:4px 10px 4px 20px;line-height:20px}.json-view .hover[data-v-1c50072e]{background:#def}.json-view .number[data-v-1c50072e]{color:#00f}.json-view .string[data-v-1c50072e]{color:green}.json-view .symbol[data-v-1c50072e]{color:#c10000}.json-view .null[data-v-1c50072e]{color:#a10f85}.json-view .undefined[data-v-1c50072e]{color:#2a323a}.json-view .boolean[data-v-1c50072e],.json-view .function[data-v-1c50072e]{color:navy}.json-view .bolder[data-v-1c50072e]{font-weight:500}.json-view .colon[data-v-1c50072e]{padding:0 3px}.json-view .tab[data-v-1c50072e]{position:relative}.json-view .tab i[data-v-1c50072e]{font-style:normal;position:absolute;right:4px;top:50%;transform:translateY(-50%);border:1px solid #660e7a;cursor:pointer;width:10px;height:10px}.json-view .tab i[data-v-1c50072e]:after,.json-view .tab i[data-v-1c50072e]:before{display:block;width:8px;height:2px;background:#660e7a;content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.json-view .tab i[data-v-1c50072e]:after{width:2px;height:8px}.json-view .tab .minus[data-v-1c50072e]:after{display:none}',""]),e.exports=t},"092e":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,".app[data-v-43fa4f6a]{display:flex}.app .json-view[data-v-43fa4f6a]{flex:1 0 200px}.app .textarea[data-v-43fa4f6a]{flex:0 0 200px}.app .textarea textarea[data-v-43fa4f6a]{resize:none}",""]),e.exports=t},"27dd":function(e,t,a){var r=a("0789");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("499e").default;n("7bd62f36",r,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app",attrs:{id:"app"}},[t("div",{staticClass:"textarea"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.textarea,expression:"textarea"}],attrs:{rows:"12",cols:"30"},domProps:{value:e.textarea},on:{blur:e.blur,input:function(t){t.target.composing||(e.textarea=t.target.value)}}}),e.err?t("div",[e._v("你输入的json有误")]):e._e()]),t("json-view",{attrs:{data:e.data}})],1)},o=[],s=a("9224");s.g1=[void 0],s.g2=[null],s.g3=[!0],s.g4=["3"],s.g5=[];var i={name:"App",data(){return{data:s,err:!1,textarea:""}},methods:{blur(){if(this.err=!1,this.textarea=this.textarea.trim(),!this.textarea)return;this.textarea=this.textarea.replace(/\s+/g,e=>e[0]).replace(/\s+,/g,",").replace(/\n+,/g,",").replace(/,\n+/g,",\n").replace(/\n+,/g,",").replace(/[[{]\n+/g,e=>e.trim()+"\n").replace(/[\]}]\n+/g,e=>e.trim()+"\n");const e=this.textarea.replaceAll("\n","").replace(/({.+?:)|(,.+?:)/g,e=>e.includes('"')?e:e.substr(0,1)+'"'+e.substr(1,e.length-2).trim()+'":');try{const t=JSON.parse(e);if("object"!==typeof t)throw new Error;this.data=t}catch(t){this.err=!0}}}},l=i,u=(a("86e8"),a("2877")),d=Object(u["a"])(l,n,o,!1,null,"43fa4f6a",null),c=d.exports,p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"json-view"},[e._l(e.domArr,(function(a,r){return[a.hide?e._e():t("div",{key:r,staticClass:"row",class:{hover:a.hover},on:{mouseenter:function(t){return e.mouseenter(a)},mouseleave:function(t){return e.mouseenter(a,"out")}}},[t("span",{staticClass:"tab",style:{paddingLeft:16*a.tab+"px"}},[a.hasChildren?t("span",{on:{click:function(t){return e.getFold(a)}}},[a.fold?t("i",{staticClass:"plus"}):t("i",{staticClass:"minus"})]):e._e()]),a.hideKey?e._e():t("span",{staticClass:"key"},[e._v(" "+e._s(a.key))]),a.hasColon?t("span",{staticClass:"colon"},[e._v(":")]):e._e(),t("span",{staticClass:"value",class:a.type},[e._v(e._s(a.fold?a.foldView:a.value))]),a.noComma?e._e():t("span",{},[e._v(",")])])]}))],2)},v=[];function f(e,t=1,a){const r=Object.keys(e),n=[];1===t&&(a=Array.isArray(e)?"array":typeof e);for(let o=0;o<r.length;o++){const s=r[o],i=e[s],l=Array.isArray(i);let u=typeof i;l&&(u="array");const d=!l&&"object"===u,c={tab:t,key:`"${s}"`,type:u,fartherType:a,hasColon:!0};"array"===a&&(c.hideKey=!0,c.hasColon=!1);const p="object"===typeof i&&i?Object.keys(i).length:0;"symbol"===u?c.value=String(i):"boolean"===u?(c.value=String(i),c.type="boolean bolder"):"function"===u?c.value=String(i):i||0===i||""===i?l?(c.value=p?"[":"[]",c.noComma=!!p,1!==p||null!==i[0]&&!["number","string","undefined","boolean"].includes(typeof i[0])||(c.value=""+i[0],c.shortArr=!0)):d?(c.value=p?"{":"{}",c.noComma=!!p):"string"===u?c.value=`"${e[s]}"`:"number"===u&&(c.value=e[s]):(c.value=String(i),c.type=c.value),n.push(c),(l&&i.length>1||d&&i&&Object.keys(i).length)&&(c.hasChildren=!0,n.push(...f(i,t+1,u)),l?n.push({value:"]",tab:t,bracketEnd:!0}):n.push({value:"}",tab:t,bracketEnd:!0}))}if(1===t){Array.isArray(e)?(n.unshift({value:"[",tab:0,noComma:!0,hasChildren:!0}),n.push({value:"]",tab:0,noComma:!0,bracketEnd:!0})):"object"===typeof e&&(n.unshift({value:"{",tab:0,noComma:!0,hasChildren:!0}),n.push({value:"}",tab:0,noComma:!0,bracketEnd:!0}));for(let e=1;e<n.length;e++){const t=n[e];["]","}","],","},"].includes(t.value)&&(n[e-1].noComma=!0)}}return n}var h=f,b={data(){return{domArr:[]}},watch:{data(e){e&&(this.domArr=h(e))}},created(){this.data&&(this.domArr=h(this.data))},methods:{buildArr(e,t=1,a){const r=Object.keys(e),n=[];1===t&&(a=Array.isArray(e)?"array":typeof e);for(let o=0;o<r.length;o++){const s=r[o],i=e[s],l=Array.isArray(i);let u=typeof i;l&&(u="array");const d=!l&&"object"===u,c={tab:t,key:`"${s}"`,type:u,fartherType:a,hasColon:!0};"array"===a&&(c.hideKey=!0,c.hasColon=!1);const p="object"===typeof i&&i?Object.keys(i).length:0;"symbol"===u?c.value=String(i):"boolean"===u?(c.value=String(i),c.type="boolean bolder"):"function"===u?c.value=String(i):i||0===i||""===i?l?(c.value=p?"[":"[]",c.hasChildren=!!p):d?(c.value=p?"{":"{}",c.hasChildren=!!p):"string"===u?c.value=`"${e[s]}"`:"number"===u&&(c.value=e[s]):(c.value=String(i),c.type=c.value),n.push(c),(l&&i.length||d&&i&&Object.keys(i).length)&&(n.push(...this.buildArr(i,t+1,u)),l?n.push({value:"]",tab:t,childrenEnd:!0}):n.push({value:"}",tab:t,childrenEnd:!0}))}if(1===t){Array.isArray(e)?(n.unshift({value:"[",tab:0,noComma:!0,hasChildren:!0}),n.push({value:"]",tab:0,noComma:!0,childrenEnd:!0})):"object"===typeof e&&(n.unshift({value:"{",tab:0,noComma:!0,hasChildren:!0}),n.push({value:"}",tab:0,noComma:!0,childrenEnd:!0}));for(let e=1;e<n.length;e++){const t=n[e];["]","}","],","},"].includes(t.value)&&(n[e-1].noComma=!0)}this.domArr=n}return n},mouseenter(e,t){e.hover="out"!==t,this.$forceUpdate();const a=this.domArr.indexOf(e);let r;if(e.hasChildren)for(r=a+1;r<this.domArr.length;r++){const a=this.domArr[r];if(!(a.tab>e.tab))break;a.hover="out"!==t}if(e.childrenEnd)for(r=a-1;r>-1;r--){const a=this.domArr[r];if(!(a.tab>e.tab))break;a.hover="out"!==t}this.domArr[r]&&(this.domArr[r].hover="out"!==t),this.$forceUpdate()},getFold(e){e.fold=!e.fold,"["===e.value?e.foldView="[...]":e.foldView="{...}";for(let t=this.domArr.indexOf(e)+1;t<this.domArr.length;t++){const a=this.domArr[t];if(a.fold=e.fold,!(a.tab>e.tab)){a.hide=e.fold;break}a.hide=e.fold}this.$forceUpdate()}},props:{data:{type:[Object,Array]}},name:"JsonView"},m=b,y=(a("6a7a"),Object(u["a"])(m,p,v,!1,null,"1c50072e",null)),g=y.exports;g.install=e=>{e.component(g.name,g)};var w=g;const j=[w],x=e=>{x.installed||j.map(t=>e.component(t.name,t))};"undefined"!==typeof window&&window.Vue&&x(window.Vue);var C={install:x,JsonView:w};r["a"].config.productionTip=!1,r["a"].use(C),new r["a"]({render:e=>e(c)}).$mount("#app")},"6a7a":function(e,t,a){"use strict";a("27dd")},"86e8":function(e,t,a){"use strict";a("bd45")},9224:function(e){e.exports=JSON.parse('{"name":"json-view-lu","repository":"git@github.com:chphaeton/json-view.git","version":"0.1.7","scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","lib":"vue-cli-service build --target lib --name json-view --dest lib publish/index.js"},"dependencies":{"core-js":"^3.6.5","vue":"^2.6.11"},"devDependencies":{"@vue/cli-plugin-babel":"~4.5.13","@vue/cli-plugin-eslint":"~4.5.13","@vue/cli-service":"~4.5.13","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-vue":"^6.2.2","json-view-lu":"^0.1.5","less":"^4.1.3","less-loader":"7.x","vue-template-compiler":"^2.6.11"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"parserOptions":{"parser":"babel-eslint"},"rules":{}},"browserslist":["> 1%","last 2 versions","not dead"],"main":"lib/json-view.umd.min.js"}')},bd45:function(e,t,a){var r=a("092e");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("499e").default;n("770b053a",r,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.e8355b40.js.map