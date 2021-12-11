import{r as a,f as t,h as e,H as i,g as c,c as o}from"./p-3125ea46.js";import{a as n,g as r,b as l}from"./p-4230ce12.js";import{c as p}from"./p-1a0cace4.js";import{C as s}from"./p-eb15fcdb.js";const d=class{constructor(e){a(this,e),this.appearance="solid",this.active=!1,this.compact=!1,this.disabled=!1,this.indicator=!1,this.loading=!1,this.scale="m",this.textEnabled=!1,this.observer=new MutationObserver(()=>t(this))}connectedCallback(){this.observer.observe(this.el,{childList:!0,subtree:!0})}componentDidUnload(){this.observer.disconnect()}async setFocus(){this.buttonEl.focus()}renderTextContainer(){const{text:a,textEnabled:t}=this;return a?e("div",{key:"text-container",class:p("text-container",{"text-container--visible":t})},a):null}renderIconContainer(){var a;const{loading:t,icon:i,scale:c,el:o}=this,n="l"===c?"m":"s",r=t?e("calcite-loader",{"is-active":!0,inline:!0}):null,l=i?e("calcite-icon",{icon:i,scale:n}):null,s=r||l,d=s||(null===(a=o.children)||void 0===a?void 0:a.length),b=e("div",{class:p("slot-container",{"slot-container--hidden":t})},e("slot",null));return d?e("div",{key:"icon-container","aria-hidden":"true",class:"icon-container"},s,b):null}render(){const{compact:a,disabled:t,loading:c,el:o,textEnabled:r,label:l,text:d}=this,b=l||d,u="rtl"===n(o);return e(i,null,e("button",{class:p("button",{"button--text-visible":r,"button--compact":a,[s.rtl]:u}),"aria-label":b,disabled:t,"aria-disabled":t.toString(),"aria-busy":c.toString(),ref:a=>this.buttonEl=a},this.renderIconContainer(),this.renderTextContainer()))}get el(){return c(this)}};d.style=':host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;background-color:var(--calcite-app-background-clear)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.button{font-family:var(--calcite-app-font-family);display:-ms-flexbox;display:flex;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground);background-color:var(--calcite-app-background);outline-offset:var(--calcite-app-outline-inset);margin:0;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;border:none;width:auto;cursor:pointer;font-size:var(--calcite-app-font-size--1);line-height:normal;-webkit-transition:color 125ms ease-in-out, fill 125ms ease-in-out, background-color 125ms ease-in-out;transition:color 125ms ease-in-out, fill 125ms ease-in-out, background-color 125ms ease-in-out;text-align:unset;position:relative}.button:hover,.button:focus{background-color:var(--calcite-app-background-hover);color:var(--calcite-app-foreground-hover);fill:var(--calcite-app-foreground-hover)}.button:focus{outline-offset:var(--calcite-app-outline-inset)}.button .icon-container{min-width:var(--calcite-app-icon-size);min-height:var(--calcite-app-icon-size);margin:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;pointer-events:none}.button .text-container{line-height:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;opacity:0;width:0;-webkit-transition:opacity var(--calcite-app-animation-time) var(--calcite-app-easing-function), margin var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), width var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:opacity var(--calcite-app-animation-time) var(--calcite-app-easing-function), margin var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), width var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}.button .text-container--visible{-ms-flex:1 1 auto;flex:1 1 auto;opacity:1;width:auto}:host([scale=s]) .button{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}:host([scale=m]) .button{padding:var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing)}:host([scale=l]) .button{padding:var(--calcite-app-cap-spacing-plus-half) var(--calcite-app-side-spacing-plus-half)}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-left:var(--calcite-app-side-spacing-quarter);padding-right:var(--calcite-app-side-spacing-quarter)}.slot-container{display:-ms-flexbox;display:flex}.slot-container--hidden{display:none}.button--text-visible{width:100%}.button--text-visible .icon-container{margin:0 var(--calcite-app-side-spacing-half) 0 0}.button--text-visible .text-container--visible{margin:0 var(--calcite-app-side-spacing-half) 0 0}.button--text-visible.calcite--rtl .icon-container{margin:0 0 0 var(--calcite-app-side-spacing-half)}.button--text-visible.calcite--rtl .text-container--visible{margin:0 0 0 var(--calcite-app-side-spacing-half)}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{color:var(--calcite-app-foreground-active);fill:var(--calcite-app-foreground-active);background-color:var(--calcite-app-background-active)}:host([appearance=clear]) .button{background-color:var(--calcite-app-background-clear);-webkit-transition:-webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:-webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), -webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}:host([appearance=clear]) .button:hover,:host([appearance=clear]) .button:focus{background-color:var(--calcite-app-background-clear);-webkit-box-shadow:0 0 0 2px var(--calcite-app-border-hover) inset;box-shadow:0 0 0 2px var(--calcite-app-border-hover) inset}:host([active][appearance=clear]) .button,:host([active][appearance=clear]) .button:hover,:host([active][appearance=clear]) .button:focus{color:var(--calcite-app-foreground-active);fill:var(--calcite-app-foreground-active);background-color:var(--calcite-app-background-active);-webkit-box-shadow:none;box-shadow:none}:host([appearance=clear][loading]) .button,:host([appearance=clear][disabled]) .button{background-color:var(--calcite-app-background-clear)}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-app-background)}:host([loading]) calcite-loader[inline]{color:var(--calcite-app-foreground-subtle);margin-right:0}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;opacity:var(--calcite-app-disabled-opacity);background-color:var(--calcite-app-background)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{opacity:var(--calcite-app-disabled-opacity);background-color:var(--calcite-app-background-active)}:host([indicator]) .button--text-visible,:host([indicator][scale=s]) .button--text-visible,:host([indicator][scale=l]) .button--text-visible{padding-right:var(--calcite-app-side-spacing)}:host([indicator]) .button::after{content:"";border-radius:50%;width:var(--calcite-app-side-spacing-half);height:var(--calcite-app-side-spacing-half);border:var(--calcite-app-side-spacing-eighth) solid var(--calcite-app-background);background-color:var(--calcite-app-foreground-active);position:absolute;bottom:var(--calcite-app-cap-spacing-half);right:var(--calcite-app-side-spacing-half);z-index:1}:host([indicator][scale=s]) .button::after{bottom:var(--calcite-app-cap-spacing-quarter);right:var(--calcite-app-side-spacing-quarter)}:host([indicator][scale=l]) .button::after{bottom:var(--calcite-app-cap-spacing-half);right:var(--calcite-app-side-spacing-half)}:host([indicator]) .calcite--rtl::after{right:unset;left:var(--calcite-app-side-spacing-quarter)}:host([indicator]) .button--text-visible.calcite--rtl{padding-right:var(--calcite-app-side-spacing-three-quarters);padding-left:var(--calcite-app-side-spacing)}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-app-background-hover)}:host([indicator][active]) .button::after{border-color:var(--calcite-app-background-active)}:host([indicator]) .button--text-visible::after,:host([indicator][scale=s]) .button--text-visible::after,:host([indicator][scale=l]) .button--text-visible::after{bottom:unset;right:var(--calcite-app-side-spacing-half)}:host([indicator]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=s]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=l]) .button--text-visible.calcite--rtl::after{right:unset;left:var(--calcite-app-side-spacing-half)}';function b({parent:a,expanded:t}){a.querySelectorAll("calcite-action").forEach(a=>a.textEnabled=t)}const u=({expanded:a,intlExpand:t,intlCollapse:i,toggleExpand:c,el:o,position:r,tooltipExpand:l})=>{const p="rtl"===n(o),s=a?i:t,d=["chevrons-left","chevrons-right"];p&&d.reverse();const b="end"===function(a,t){return a||function(a){const t=a.closest("calcite-shell-panel");if(t)return t.position?t.position:t.layout?"trailing"===t.layout?"end":"start":void 0}(t)||"start"}(r,o),u=e("calcite-action",{ref:t=>((a,t,e)=>(a&&(a.referenceElement=!e&&t),t))(l,t,a),onClick:c,textEnabled:a,text:s,icon:a?b?d[1]:d[0]:b?d[0]:d[1]});return l?e("calcite-tooltip-manager",null,u):u},f=class{constructor(t){a(this,t),this.expand=!0,this.expanded=!1,this.toggleExpand=()=>{this.expanded=!this.expanded},this.calciteActionBarToggle=o(this,"calciteActionBarToggle",7)}expandHandler(a){a&&b({parent:this.el,expanded:this.expanded})}expandedHandler(a){this.expand&&b({parent:this.el,expanded:a}),this.calciteActionBarToggle.emit()}componentWillLoad(){const{el:a,expand:t,expanded:e}=this;t&&b({parent:a,expanded:e})}renderBottomActionGroup(){const{expanded:a,expand:t,intlExpand:i,intlCollapse:c,textExpand:o,textCollapse:n,el:p,layout:s,position:d,toggleExpand:b,tooltipExpand:f}=this,g=t?e(u,{expanded:a,intlExpand:i||o||"Expand",intlCollapse:c||n||"Collapse",el:p,position:l(d,s),toggleExpand:b,tooltipExpand:f}):null;return r(p,"bottom-actions")||g?e("calcite-action-group",{class:"action-group--bottom"},e("slot",{name:"bottom-actions"}),g):null}render(){return e(i,null,e("slot",null),this.renderBottomActionGroup())}get el(){return c(this)}static get watchers(){return{expand:["expandHandler"],expanded:["expandedHandler"]}}};f.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex-item-align:stretch;align-self:stretch;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;max-width:15vw;overflow-y:auto;pointer-events:auto}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-bottom:1px solid var(--calcite-app-border)}::slotted(calcite-action-group:last-child){border-bottom:none}.action-group--bottom{padding-bottom:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end}";const g=class{constructor(t){a(this,t)}render(){return e(i,null,e("slot",null))}};g.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0;padding:var(--calcite-app-cap-spacing-half) 0}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host(:first-child){padding-top:0}::slotted(calcite-action){display:-ms-flexbox;display:flex;width:100%}";const h=class{constructor(t){a(this,t),this.expand=!0,this.expanded=!1,this.toggleExpand=()=>{this.expanded=!this.expanded},this.calciteActionPadToggle=o(this,"calciteActionPadToggle",7)}expandHandler(a){a&&b({parent:this.el,expanded:this.expanded})}expandedHandler(a){this.expand&&b({parent:this.el,expanded:a}),this.calciteActionPadToggle.emit()}componentWillLoad(){const{el:a,expand:t,expanded:e}=this;t&&b({parent:a,expanded:e})}renderBottomActionGroup(){const{expanded:a,expand:t,intlExpand:i,intlCollapse:c,textExpand:o,textCollapse:n,el:r,layout:p,position:s,toggleExpand:d,tooltipExpand:b}=this,f=t?e(u,{expanded:a,intlExpand:i||o||"Expand",intlCollapse:c||n||"Collapse",el:r,position:l(s,p),toggleExpand:d,tooltipExpand:b}):null;return f?e("calcite-action-group",{class:"action-group--bottom"},f):null}render(){return e(i,null,e("slot",null),this.renderBottomActionGroup())}get el(){return c(this)}static get watchers(){return{expand:["expandHandler"],expanded:["expandedHandler"]}}};h.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:var(--calcite-app-shadow-2);box-shadow:var(--calcite-app-shadow-2);max-width:15vw;overflow-y:auto;-webkit-animation:calcite-app-fade-in var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);animation:calcite-app-fade-in var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-bottom:1px solid var(--calcite-app-border);padding-bottom:0;padding-top:0}::slotted(calcite-action-group:last-child){border-bottom:none}.action-group--bottom{padding-bottom:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end}";export{d as calcite_action,f as calcite_action_bar,g as calcite_action_group,h as calcite_action_pad}