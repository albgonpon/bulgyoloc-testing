var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,c){function a(e){try{l(i.next(e))}catch(t){c(t)}}function s(e){try{l(i["throw"](e))}catch(t){c(t)}}function l(e){e.done?n(e.value):r(e.value).then(a,s)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},i,r,c,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(c=a[0]&2?r["return"]:a[0]?r["throw"]||((c=r["return"])&&c.call(r),0):r.next)&&!(c=c.call(r,a[1])).done)return c;if(r=0,c)a=[a[0]&2,c.value];switch(a[0]){case 0:case 1:c=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(c=n.trys,c=c.length>0&&c[c.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!c||a[1]>c[0]&&a[1]<c[3])){n.label=a[1];break}if(a[0]===6&&n.label<c[1]){n.label=c[1];c=a;break}if(c&&n.label<c[2]){n.label=c[2];n.ops.push(a);break}if(c[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(s){a=[6,s];r=0}finally{i=c=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-0bde2a81.system.js","./p-12ec9e50.system.js","./p-5bf0b67a.system.js"],(function(e){"use strict";var t,n,i,r,c,a,s,l,o;return{setters:[function(e){t=e.r;n=e.c;i=e.h;r=e.H;c=e.g},function(e){a=e.I},function(e){s=e.C;l=e.S;o=e.I}],execute:function(){var u=e("calcite_pick_list_item",function(){function e(e){var i=this;t(this,e);this.compact=false;this.disabled=false;this.disableDeselect=false;this.icon=null;this.selected=false;this.pickListClickHandler=function(e){if(i.disabled||i.disableDeselect&&i.selected){return}i.shiftPressed=e.shiftKey;i.selected=!i.selected};this.pickListKeyDownHandler=function(e){if(e.key===" "){e.preventDefault();if(i.disableDeselect&&i.selected){return}i.selected=!i.selected}};this.calciteListItemChange=n(this,"calciteListItemChange",7);this.calciteListItemPropsChange=n(this,"calciteListItemPropsChange",7);this.calciteListItemValueChange=n(this,"calciteListItemValueChange",7)}e.prototype.metadataWatchHandler=function(){this.calciteListItemPropsChange.emit()};e.prototype.selectedWatchHandler=function(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed});this.shiftPressed=false};e.prototype.textDescriptionWatchHandler=function(){this.calciteListItemPropsChange.emit()};e.prototype.textLabelWatchHandler=function(){this.calciteListItemPropsChange.emit()};e.prototype.valueWatchHandler=function(e,t){this.calciteListItemValueChange.emit({oldValue:t,newValue:e})};e.prototype.toggleSelected=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.disabled){return[2]}this.selected=typeof e==="boolean"?e:!this.selected;return[2]}))}))};e.prototype.renderIcon=function(){var e=this,t=e.compact,n=e.icon,r=e.selected;if(!n||t){return null}var c=n===a.square?r?o.checked:o.unchecked:r?o.selected:o.unselected;return i("span",{class:s.icon},i("calcite-icon",{scale:"s",icon:c}))};e.prototype.renderSecondaryAction=function(){var e=this.el.querySelector("[slot="+l.secondaryAction+"]");return e?i("div",{class:s.action},i("slot",{name:l.secondaryAction})):null};e.prototype.render=function(){var e=this.textDescription&&!this.compact?i("span",{class:s.description},this.textDescription):null;return i(r,{role:"menuitemcheckbox","aria-checked":this.selected.toString()},i("label",{class:s.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,tabIndex:0,"aria-label":this.textLabel},this.renderIcon(),i("div",{class:s.textContainer},i("span",{class:s.title},this.textLabel),e)),this.renderSecondaryAction())};Object.defineProperty(e.prototype,"el",{get:function(){return c(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],textDescription:["textDescriptionWatchHandler"],textLabel:["textLabelWatchHandler"],value:["valueWatchHandler"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex-align:center;align-items:center;background-color:var(--calcite-app-background-clear);display:-ms-flexbox;display:flex;margin:0;color:var(--calcite-app-foreground);-webkit-transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);-webkit-animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host(:hover),:host(:focus){background-color:var(--calcite-app-background-hover)}.icon{color:var(--calcite-app-foreground-link);-ms-flex:0 0 0%;flex:0 0 0%;line-height:0;width:var(--calcite-app-icon-size);margin:0 var(--calcite-app-side-spacing-quarter);opacity:0}:host([selected]) .icon{-webkit-transition:opacity var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:opacity var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);opacity:1}.label{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);-ms-flex-align:center;align-items:center;cursor:pointer}.label:focus{outline-offset:var(--calcite-app-outline-inset)}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;overflow:hidden;pointer-events:none;padding:0 var(--calcite-app-side-spacing-quarter)}.title{font-size:var(--calcite-app-font-size-0);display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical}.description{color:var(--calcite-app-foreground-subtle);font-family:var(--calcite-app-font-family-monospace);font-size:var(--calcite-app-font-size--1);margin-top:var(--calcite-app-cap-spacing-quarter);display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical}.action{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;justify-self:flex-end;margin:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-half)}"},enumerable:true,configurable:true});return e}())}}}));