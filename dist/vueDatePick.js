!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueDatePick=e():t.VueDatePick=e()}("undefined"!=typeof self?self:this,function(){return n=[function(t,e,n){},function(t,e,n){function r(t){var e;return(o[t]||(e=o[t]={i:t,l:!1,exports:{}},i[t].call(e.exports,e,e.exports,r),e.l=!0,e)).exports}var i,o;t.exports=(i=[function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,o){"use strict";function a(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var s=o(2),n=o(0),u=o.n(n);e.a=function(r,t){var i=t.value;if(!Array.isArray(i)&&"string"!=typeof i||(i={mask:i,tokens:u.a}),"INPUT"!==r.tagName.toLocaleUpperCase()){t=r.getElementsByTagName("input");if(1!==t.length)throw new Error("v-mask directive requires 1 input, found "+t.length);r=t[0]}r.oninput=function(t){if(t.isTrusted){var e=r.selectionEnd,n=r.value[e-1];for(r.value=o.i(s.a)(r.value,i.mask,!0,i.tokens);e<r.value.length&&r.value.charAt(e-1)!==n;)e++;r===document.activeElement&&(r.setSelectionRange(e,e),setTimeout(function(){r.setSelectionRange(e,e)},0)),r.dispatchEvent(a("input"))}};t=o.i(s.a)(r.value,i.mask,!0,i.tokens);t!==r.value&&(r.value=t,r.dispatchEvent(a("input")))}},function(t,e,i){"use strict";var o=i(6),a=i(5);e.a=function(t,e){var n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],r=arguments[3];return(Array.isArray(e)?i.i(a.a)(o.a,e,r):i.i(o.a))(t,e,n,r)}},function(t,e,n){"use strict";function r(t){t.component(s.a.name,s.a),t.directive("mask",a.a)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n.n(i),a=n(1),i=n(7),s=n.n(i),u=(n.d(e,"TheMask",function(){return s.a}),n.d(e,"mask",function(){return a.a}),n.d(e,"tokens",function(){return o.a}),n.d(e,"version",function(){return u}),"0.11.1");e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(0),o=n.n(i),a=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t,(t=n.i(a.a)(t,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";e.a=function(a,s,u){return s=s.sort(function(t,e){return t.length-e.length}),function(t,e){for(var n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],r=0;r<s.length;){var i=s[r],o=s[++r];if(!(o&&a(t,o,!0,u).length>i.length))return a(t,i,n,u)}return""}}},function(t,e,n){"use strict";e.a=function(t,e){var n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",e=e||"";for(var i=0,o=0,a="";i<e.length&&o<t.length;){var s=r[c=e[i]],u=t[o];s&&!s.escape?(s.pattern.test(u)&&(a+=s.transform?s.transform(u):u,i++),o++):(s&&s.escape&&(c=e[++i]),n&&(a+=c),u===c&&o++,i++)}for(var c,l="";i<e.length&&n;){if(r[c=e[i]]){l="";break}l+=c,i++}return a+l}},function(t,e,n){n=n(8)(n(4),n(9),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,n,r){var i,o,a=t=t||{},s=typeof t.default,s="function"==typeof(a="object"!=s&&"function"!=s?a:(i=t).default)?a.options:a;return e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r&&(o=s.computed||(s.computed={}),Object.keys(r).forEach(function(t){var e=r[t];o[t]=function(){return e}})),{esModule:i,exports:a,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}],o={},r.m=i,r.c=o,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p=".",r(r.s=10))},function(t,e,n){"use strict";n(0)},function(t,e,n){"use strict";n.r(e);var r=n(1);function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){s=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(t,e)||function(t,e){var n;if(t)return"string"==typeof t?i(t,e):"Map"===(n="Object"===(n=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var h=/,|\.|-| |:|\/|\\/,v=/D+/,m=/M+/,y=/Y+/,g=/h+/i,b=/m+/,_=/s+/,a=/A/;function C(t,e){return void 0!==t?t.toString().length>e?t:new Array(e-t.toString().length+1).join("0")+t:void 0}function k(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function s(t,e){for(var n=[],r=t;r<=e;r++)n.push(r);return n}function u(t){t%=12;return 0==t?12:t}function c(t,e,n){return Math.min(Math.max(t,e),n)}r={props:{mask:{type:String,default:'["##.##.####"]'},value:{type:String,default:""},format:{type:String,default:"YYYY-MM-DD"},displayFormat:{type:String},editable:{type:Boolean,default:!0},hasInputElement:{type:Boolean,default:!0},inputAttributes:{type:Object},selectableYearRange:{type:[Number,Object,Function],default:40},startPeriod:{type:Object},parseDate:{type:Function},formatDate:{type:Function},pickTime:{type:Boolean,default:!1},pickMinutes:{type:Boolean,default:!0},pickSeconds:{type:Boolean,default:!1},use12HourClock:{type:Boolean,default:!1},isDateDisabled:{type:Function,default:function(){return!1}},nextMonthCaption:{type:String,default:"Next month"},prevMonthCaption:{type:String,default:"Previous month"},setTimeCaption:{type:String,default:"Set time:"},mobileBreakpointWidth:{type:Number,default:500},weekdays:{type:Array,default:function(){return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},months:{type:Array,default:function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}},startWeekOnSunday:{type:Boolean,default:!1}},data:function(){return{inputValue:this.valueToInputFormat(this.value),direction:void 0,positionClass:void 0,opened:!this.hasInputElement,currentPeriod:this.startPeriod||this.getPeriodFromValue(this.value,this.format)}},components:{VueTheMask:n.n(r).a},computed:{valueDate:function(){var t=this.value,e=this.format;return t?this.parseDateString(t,e):void 0},isReadOnly:function(){return!this.editable||this.inputAttributes&&this.inputAttributes.readonly},isValidValue:function(){var t=this.valueDate;return!this.value||Boolean(t)},currentPeriodDates:function(){var e=this,t=this.currentPeriod,n=t.year,r=t.month,i=[],o=new Date(n,r,1),a=new Date,t=o.getDay(),n=this.startWeekOnSunday?t:0===t?6:t-1;if(n)for(var s=n;0<s;s--){var u=new Date(o);u.setDate(-(s-1)),i.push({outOfRange:!0,date:u})}for(;o.getMonth()===r;)i.push({date:new Date(o)}),o.setDate(o.getDate()+1);t=i.length%7;if(0<t)for(var c=7-t,l=1;l<=c;l++){var p=new Date(o);p.setDate(l),i.push({outOfRange:!0,date:p})}i.forEach(function(t){t.disabled=e.isDateDisabled(t.date),t.today=k(t.date,a),t.dateKey=[t.date.getFullYear(),t.date.getMonth()+1,t.date.getDate()].join("-"),t.selected=!!e.valueDate&&k(t.date,e.valueDate)});for(var d=i,f=7,h=[];d.length;)h.push(d.splice(0,f));return h},yearRange:function(){var t=this.currentPeriod.year,e=this.selectableYearRange,n=o(e),r=[];return"number"===n?r=s(t-e,t+e):"object"===n?r=s(e.from,e.to):"function"===n&&(r=e(this)),r.indexOf(t)<0&&(r.push(t),r=r.sort()),r},currentTime:function(){var t,e,n=this.valueDate;if(n)return{hours:t=n.getHours(),minutes:e=n.getMinutes(),seconds:n=n.getSeconds(),isPM:12<=t,hoursFormatted:(this.use12HourClock?u(t):t).toString(),minutesFormatted:C(e,2),secondsFormatted:C(n,2)}},directionClass:function(){return this.direction?"vdp".concat(this.direction,"Direction"):void 0},weekdaysSorted:function(){var t;return this.startWeekOnSunday?((t=this.weekdays.slice()).unshift(t.pop()),t):this.weekdays}},watch:{value:function(t){this.isValidValue&&(this.inputValue=this.valueToInputFormat(t),this.currentPeriod=this.getPeriodFromValue(t,this.format))},currentPeriod:function(t,e){var n=new Date(t.year,t.month).getTime(),e=new Date(e.year,e.month).getTime();this.direction=n!==e?e<n?"Next":"Prev":void 0,n!==e&&this.$emit("periodChange",{year:t.year,month:t.month})}},beforeDestroy:function(){this.removeCloseEvents(),this.teardownPosition()},methods:{valueToInputFormat:function(t){return this.displayFormat&&this.formatDateToString(this.parseDateString(t,this.format),this.displayFormat)||t},getPeriodFromValue:function(t,e){t=this.parseDateString(t,e)||new Date;return{month:t.getMonth(),year:t.getFullYear()}},parseDateString:function(t,e){return t?this.parseDate?this.parseDate(t,e):this.parseSimpleDateString(t,e):void 0},formatDateToString:function(t,e){return t?this.formatDate?this.formatDate(t,e):this.formatSimpleDateToString(t,e):""},parseSimpleDateString:function(t,e){for(var n,r,i,o,a,s,u=t.split(h),c=e.split(h),l=c.length,p=0;p<l;p++)c[p].match(v)?n=parseInt(u[p],10):c[p].match(m)?r=parseInt(u[p],10):c[p].match(y)?i=parseInt(u[p],10):c[p].match(g)?o=parseInt(u[p],10):c[p].match(b)?a=parseInt(u[p],10):c[p].match(_)&&(s=parseInt(u[p],10));var d,t=new Date([C(i,4),C(r,2),C(n,2)].join("-"));if(!isNaN(t))return d=new Date(i,r-1,n),[[i,"setFullYear"],[o,"setHours"],[a,"setMinutes"],[s,"setSeconds"]].forEach(function(t){var t=f(t,2),e=t[0],t=t[1];void 0!==e&&d[t](e)}),d},formatSimpleDateToString:function(e,n){return n.replace(y,function(t){return Number(e.getFullYear().toString().slice(-t.length))}).replace(m,function(t){return C(e.getMonth()+1,t.length)}).replace(v,function(t){return C(e.getDate(),t.length)}).replace(g,function(t){return C(a.test(n)?u(e.getHours()):e.getHours(),t.length)}).replace(b,function(t){return C(e.getMinutes(),t.length)}).replace(_,function(t){return C(e.getSeconds(),t.length)}).replace(a,function(t){return 12<=e.getHours()?"PM":"AM"})},incrementMonth:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,e=new Date(this.currentPeriod.year,this.currentPeriod.month),e=new Date(e.getFullYear(),e.getMonth()+t);this.currentPeriod={month:e.getMonth(),year:e.getFullYear()}},processUserInput:function(t){var e=this.parseDateString(t,this.displayFormat||this.format);this.inputValue=t,this.$emit("input",e?this.formatDateToString(e,this.format):t)},toggle:function(){return this.opened?this.close():this.open()},open:function(){this.opened||(this.opened=!0,this.currentPeriod=this.startPeriod||this.getPeriodFromValue(this.value,this.format),this.addCloseEvents(),this.setupPosition()),this.direction=void 0},close:function(){this.opened&&(this.opened=!1,this.direction=void 0,this.removeCloseEvents(),this.teardownPosition())},closeViaOverlay:function(t){this.hasInputElement&&t.target===this.$refs.outerWrap&&this.close()},addCloseEvents:function(){var e=this;this.closeEventListener||(this.closeEventListener=function(t){return e.inspectCloseEvent(t)},["click","keyup","focusin"].forEach(function(t){return document.addEventListener(t,e.closeEventListener)}))},inspectCloseEvent:function(t){t.keyCode?27===t.keyCode&&this.close():t.target===this.$el||this.$el.contains(t.target)||this.close()},removeCloseEvents:function(){var e=this;this.closeEventListener&&(["click","keyup","focusin"].forEach(function(t){return document.removeEventListener(t,e.closeEventListener)}),delete this.closeEventListener)},setupPosition:function(){var t=this;this.positionEventListener||(this.positionEventListener=function(){return t.positionFloater()},window.addEventListener("resize",this.positionEventListener)),this.positionFloater()},positionFloater:function(){function t(){var t=(e=n.$refs.outerWrap.getBoundingClientRect()).height,e=e.width;window.innerWidth>n.mobileBreakpointWidth?(r.top+r.height+t>window.innerHeight&&0<r.top-t&&(i="vdpPositionBottom"),r.left+e>window.innerWidth&&(o="vdpPositionRight"),n.positionClass=["vdpPositionReady",i,o].join(" ")):n.positionClass="vdpPositionFixed"}var n=this,r=this.$el.getBoundingClientRect(),i="vdpPositionTop",o="vdpPositionLeft";this.$refs.outerWrap?t():this.$nextTick(t)},teardownPosition:function(){this.positionEventListener&&(this.positionClass=void 0,window.removeEventListener("resize",this.positionEventListener),delete this.positionEventListener)},clear:function(){this.$emit("input","")},selectDateItem:function(t){t.disabled||(t=new Date(t.date),this.currentTime&&(t.setHours(this.currentTime.hours),t.setMinutes(this.currentTime.minutes),t.setSeconds(this.currentTime.seconds)),this.$emit("input",this.formatDateToString(t,this.format)),this.hasInputElement&&!this.pickTime&&this.close())},set12HourClock:function(t){var e=new Date(this.valueDate),n=e.getHours();e.setHours("PM"===t?n+12:n-12),this.$emit("input",this.formatDateToString(e,this.format))},inputHours:function(t){var e,n=new Date(this.valueDate),r=n.getHours(),i=c(parseInt(t.target.value,10)||0,this.use12HourClock?1:0,this.use12HourClock?12:23);n.setHours(this.use12HourClock?(e=i,12<=r?12===e?e:e+12:12===e?0:e):i),t.target.value=C(i,1),this.$emit("input",this.formatDateToString(n,this.format))},inputTime:function(t,e){var n=new Date(this.valueDate),r=c(parseInt(e.target.value)||0,0,59);e.target.value=C(r,2),n[t](r),this.$emit("input",this.formatDateToString(n,this.format))},onTimeInputFocus:function(t){t.target.select&&t.target.select()}}};n(2);n=function(){var n=this,r=n._self._c;return r("div",{staticClass:"vdpComponent",class:{vdpWithInput:n.hasInputElement}},[n._t("default",function(){return[n.hasInputElement?r("VueTheMask",n._b({attrs:{mask:n.mask,type:"text",readonly:n.isReadOnly,value:n.inputValue},on:{input:function(t){n.editable&&n.processUserInput(t.target.value)},focus:function(t){n.editable&&n.open()},click:function(t){n.editable&&n.open()}}},"VueTheMask",n.inputAttributes,!1)):n._e(),n._v(" "),n.editable&&n.hasInputElement&&n.inputValue?r("button",{staticClass:"vdpClearInput",attrs:{type:"button"},on:{click:n.clear}}):n._e()]},{open:n.open,close:n.close,toggle:n.toggle,inputValue:n.inputValue,processUserInput:n.processUserInput,valueToInputFormat:n.valueToInputFormat}),n._v(" "),r("transition",{attrs:{name:"vdp-toggle-calendar"}},[n.opened?r("div",{ref:"outerWrap",staticClass:"vdpOuterWrap",class:[n.positionClass,{vdpFloating:n.hasInputElement}],on:{click:n.closeViaOverlay}},[r("div",{staticClass:"vdpInnerWrap"},[r("header",{staticClass:"vdpHeader"},[r("button",{staticClass:"vdpArrow vdpArrowPrev",attrs:{title:n.prevMonthCaption,type:"button"},on:{click:function(t){return n.incrementMonth(-1)}}},[n._v(n._s(n.prevMonthCaption))]),n._v(" "),r("button",{staticClass:"vdpArrow vdpArrowNext",attrs:{type:"button",title:n.nextMonthCaption},on:{click:function(t){return n.incrementMonth(1)}}},[n._v(n._s(n.nextMonthCaption))]),n._v(" "),r("div",{staticClass:"vdpPeriodControls"},[r("div",{staticClass:"vdpPeriodControl"},[r("button",{key:n.currentPeriod.month,class:n.directionClass,attrs:{type:"button"}},[n._v("\n                                "+n._s(n.months[n.currentPeriod.month])+"\n                            ")]),n._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:n.currentPeriod.month,expression:"currentPeriod.month"}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});n.$set(n.currentPeriod,"month",t.target.multiple?e:e[0])}}},n._l(n.months,function(t,e){return r("option",{key:t,domProps:{value:e}},[n._v("\n                                    "+n._s(t)+"\n                                ")])}),0)]),n._v(" "),r("div",{staticClass:"vdpPeriodControl"},[r("button",{key:n.currentPeriod.year,class:n.directionClass,attrs:{type:"button"}},[n._v("\n                                "+n._s(n.currentPeriod.year)+"\n                            ")]),n._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:n.currentPeriod.year,expression:"currentPeriod.year"}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});n.$set(n.currentPeriod,"year",t.target.multiple?e:e[0])}}},n._l(n.yearRange,function(t){return r("option",{key:t,domProps:{value:t}},[n._v("\n                                    "+n._s(t)+"\n                                ")])}),0)])])]),n._v(" "),r("table",{staticClass:"vdpTable"},[r("thead",[r("tr",n._l(n.weekdaysSorted,function(t,e){return r("th",{key:e,staticClass:"vdpHeadCell"},[r("span",{staticClass:"vdpHeadCellContent"},[n._v(n._s(t))])])}),0)]),n._v(" "),r("tbody",{key:n.currentPeriod.year+"-"+n.currentPeriod.month,class:n.directionClass},n._l(n.currentPeriodDates,function(t,e){return r("tr",{key:e,staticClass:"vdpRow"},n._l(t,function(e){return r("td",{key:e.dateKey,staticClass:"vdpCell",class:{selectable:n.editable&&!e.disabled,selected:e.selected,disabled:e.disabled,today:e.today,outOfRange:e.outOfRange},attrs:{"data-id":e.dateKey},on:{click:function(t){n.editable&&n.selectDateItem(e)}}},[n._t("cellContent",function(){return[r("div",{staticClass:"vdpCellContent"},[n._v(n._s(e.date.getDate()))])]},{item:e})],2)}),0)}),0)]),n._v(" "),n.pickTime&&n.currentTime?r("div",{staticClass:"vdpTimeControls"},[r("span",{staticClass:"vdpTimeCaption"},[n._v(n._s(n.setTimeCaption))]),n._v(" "),r("div",{staticClass:"vdpTimeUnit"},[r("pre",[r("span",[n._v(n._s(n.currentTime.hoursFormatted))]),r("br")]),n._v(" "),r("input",{staticClass:"vdpHoursInput",attrs:{type:"number",pattern:"\\d*",disabled:!n.editable},domProps:{value:n.currentTime.hoursFormatted},on:{input:function(t){return t.preventDefault(),n.inputHours.apply(null,arguments)},focusin:n.onTimeInputFocus}})]),n._v(" "),n.pickMinutes?r("span",{staticClass:"vdpTimeSeparator"},[n._v(":")]):n._e(),n._v(" "),n.pickMinutes?r("div",{staticClass:"vdpTimeUnit"},[r("pre",[r("span",[n._v(n._s(n.currentTime.minutesFormatted))]),r("br")]),n._v(" "),n.pickMinutes?r("input",{staticClass:"vdpMinutesInput",attrs:{type:"number",pattern:"\\d*",disabled:!n.editable},domProps:{value:n.currentTime.minutesFormatted},on:{input:function(t){return n.inputTime("setMinutes",t)},focusin:n.onTimeInputFocus}}):n._e()]):n._e(),n._v(" "),n.pickSeconds?r("span",{staticClass:"vdpTimeSeparator"},[n._v(":")]):n._e(),n._v(" "),n.pickSeconds?r("div",{staticClass:"vdpTimeUnit"},[r("pre",[r("span",[n._v(n._s(n.currentTime.secondsFormatted))]),r("br")]),n._v(" "),n.pickSeconds?r("input",{staticClass:"vdpSecondsInput",attrs:{type:"number",pattern:"\\d*",disabled:!n.editable},domProps:{value:n.currentTime.secondsFormatted},on:{input:function(t){return n.inputTime("setSeconds",t)},focusin:n.onTimeInputFocus}}):n._e()]):n._e(),n._v(" "),n.use12HourClock?r("button",{staticClass:"vdp12HourToggleBtn",attrs:{type:"button",disabled:!n.editable},on:{click:function(t){return n.set12HourClock(n.currentTime.isPM?"AM":"PM")}}},[n._v("\n                        "+n._s(n.currentTime.isPM?"PM":"AM")+"\n                    ")]):n._e()]):n._e()])]):n._e()])],2)},l=!(M=[]),S=d=p=null,w="function"==typeof(r=r)?r.options:r,n&&(w.render=n,w.staticRenderFns=M,w._compiled=!0),l&&(w.functional=!0),d&&(w._scopeId="data-v-"+d),S?(P=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),p&&p.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(S)},w._ssrRegister=P):p&&(P=D?function(){p.call(this,(w.functional?this.parent:this).$root.$options.shadowRoot)}:p),P&&(w.functional?(w._injectStyles=P,T=w.render,w.render=function(t,e){return P.call(e),T(t,e)}):(n=w.beforeCreate,w.beforeCreate=n?[].concat(n,P):[P]));var l,p,d,S,D,P,T,w,M={exports:r,options:w};e.default=M.exports}],r={},i.m=n,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3).default;function i(t){var e;return(r[t]||(e=r[t]={i:t,l:!1,exports:{}},n[t].call(e.exports,e,e.exports,i),e.l=!0,e)).exports}var n,r});