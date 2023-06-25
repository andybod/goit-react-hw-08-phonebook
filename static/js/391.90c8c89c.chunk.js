"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[391],{2391:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var r=n(9434),a=n(6052),o="NOT_FOUND";var i=function(e,t){return e===t};function s(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?i:r,s=n.maxSize,c=void 0===s?1:s,l=n.resultEqualityCheck,d=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),u=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:o},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(d):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return o}return{get:r,put:function(t,a){r(t)===o&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,d);function p(){var t=u.get(arguments);if(t===o){if(t=e.apply(null,arguments),l){var n=u.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}u.put(arguments,t)}return t}return p.clearCache=function(){return u.clear()},p}function c(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,i=0,s={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(s=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var d=s,u=d.memoizeOptions,p=void 0===u?n:u,m=Array.isArray(p)?p:[p],v=c(r),y=e.apply(void 0,[function(){return i++,l.apply(null,arguments)}].concat(m)),f=e((function(){for(var e=[],t=v.length,n=0;n<t;n++)e.push(v[n].apply(null,arguments));return o=y.apply(null,e)}));return Object.assign(f,{resultFunc:l,memoizedResultFunc:y,dependencies:v,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),f};return a}var d=l(s),u=function(e){return e.contacts.contacts},p=function(e){return e.contacts.isLoading},m=d([u,function(e){return e.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),v=n(4554),y=n(3385),f=n(6151),g="ContactForm_form__dhl+T",h="ContactForm_label__-cVXI",b=n(184),Z=function(){var e=(0,r.I0)(),t=(0,r.v9)(u);return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(v.Z,{className:g,component:"form",onSubmit:function(n){n.preventDefault();var r=n.target;t.map((function(e){return e.name})).includes(r.elements.name.value)?alert("".concat(r.elements.name.value," is already in contacts.")):(e((0,a.uK)({name:r.elements.name.value,number:r.elements.number.value})),r.reset())},children:[(0,b.jsx)(y.Z,{className:h,label:"Name",id:"inputName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,b.jsx)(y.Z,{className:h,label:"Number",id:"inputNumber",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,b.jsx)(f.Z,{type:"submit",variant:"contained",children:"Add contact"})]})})};v.Z,y.Z,y.Z,y.Z,y.Z,y.Z,y.Z,y.Z;var x=n(493),C=n(4942),w=n(3366),A=n(7462),S=n(2791),j=n(8182),I=n(4419),N=n(627),k=n(2065),P=n(7630),F=n(1046),M=n(2982),R=n(9103),L=n(162),T=n(2071),B=n(6199),O=n(5878),G=n(1217);function z(e){return(0,G.Z)("MuiListItem",e)}var q=(0,O.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var W=(0,O.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function _(e){return(0,G.Z)("MuiListItemSecondaryAction",e)}(0,O.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var V=["className"],E=(0,P.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,A.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),D=S.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=n.className,a=(0,w.Z)(n,V),o=S.useContext(B.Z),i=(0,A.Z)({},n,{disableGutters:o.disableGutters}),s=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,I.Z)(r,_,n)}(i);return(0,b.jsx)(E,(0,A.Z)({className:(0,j.Z)(s.root,r),ownerState:i,ref:t},a))}));D.muiName="ListItemSecondaryAction";var J=D,K=["className"],Y=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],$=(0,P.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,A.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,A.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,C.Z)({},"& > .".concat(W.root),{paddingRight:48}),(t={},(0,C.Z)(t,"&.".concat(q.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,C.Z)(t,"&.".concat(q.selected),(0,C.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,k.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(q.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,k.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,C.Z)(t,"&.".concat(q.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},r.button&&(0,C.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(q.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,k.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,k.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),U=(0,P.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),X=S.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItem"}),r=n.alignItems,a=void 0===r?"center":r,o=n.autoFocus,i=void 0!==o&&o,s=n.button,c=void 0!==s&&s,l=n.children,d=n.className,u=n.component,p=n.components,m=void 0===p?{}:p,v=n.componentsProps,y=void 0===v?{}:v,f=n.ContainerComponent,g=void 0===f?"li":f,h=n.ContainerProps,Z=(h=void 0===h?{}:h).className,x=n.dense,C=void 0!==x&&x,k=n.disabled,P=void 0!==k&&k,O=n.disableGutters,G=void 0!==O&&O,W=n.disablePadding,_=void 0!==W&&W,V=n.divider,E=void 0!==V&&V,D=n.focusVisibleClassName,X=n.secondaryAction,H=n.selected,Q=void 0!==H&&H,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,re=void 0===ne?{}:ne,ae=(0,w.Z)(n.ContainerProps,K),oe=(0,w.Z)(n,Y),ie=S.useContext(B.Z),se=S.useMemo((function(){return{dense:C||ie.dense||!1,alignItems:a,disableGutters:G}}),[a,ie.dense,C,G]),ce=S.useRef(null);(0,L.Z)((function(){i&&ce.current&&ce.current.focus()}),[i]);var le=S.Children.toArray(l),de=le.length&&(0,R.Z)(le[le.length-1],["ListItemSecondaryAction"]),ue=(0,A.Z)({},n,{alignItems:a,autoFocus:i,button:c,dense:se.dense,disabled:P,disableGutters:G,disablePadding:_,divider:E,hasSecondaryAction:de,selected:Q}),pe=function(e){var t=e.alignItems,n=e.button,r=e.classes,a=e.dense,o=e.disabled,i={root:["root",a&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,I.Z)(i,z,r)}(ue),me=(0,T.Z)(ce,t),ve=re.root||m.Root||$,ye=te.root||y.root||{},fe=(0,A.Z)({className:(0,j.Z)(pe.root,ye.className,d),disabled:P},oe),ge=u||"li";return c&&(fe.component=u||"div",fe.focusVisibleClassName=(0,j.Z)(q.focusVisible,D),ge=M.Z),de?(ge=fe.component||u?ge:"div","li"===g&&("li"===ge?ge="div":"li"===fe.component&&(fe.component="div")),(0,b.jsx)(B.Z.Provider,{value:se,children:(0,b.jsxs)(U,(0,A.Z)({as:g,className:(0,j.Z)(pe.container,Z),ref:me,ownerState:ue},ae,{children:[(0,b.jsx)(ve,(0,A.Z)({},ye,!(0,N.Z)(ve)&&{as:ge,ownerState:(0,A.Z)({},ue,ye.ownerState)},fe,{children:le})),le.pop()]}))})):(0,b.jsx)(B.Z.Provider,{value:se,children:(0,b.jsxs)(ve,(0,A.Z)({},ye,{as:ge,ref:me},!(0,N.Z)(ve)&&{ownerState:(0,A.Z)({},ue,ye.ownerState)},fe,{children:[le,X&&(0,b.jsx)(J,{children:X})]}))})})),H=n(8519),Q=n(4036);function ee(e){return(0,G.Z)("MuiTypography",e)}(0,O.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var te=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],ne=(0,P.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,Q.Z)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((function(e){var t=e.theme,n=e.ownerState;return(0,A.Z)({margin:0},n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),re={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ae={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},oe=S.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiTypography"}),r=function(e){return ae[e]||e}(n.color),a=(0,H.Z)((0,A.Z)({},n,{color:r})),o=a.align,i=void 0===o?"inherit":o,s=a.className,c=a.component,l=a.gutterBottom,d=void 0!==l&&l,u=a.noWrap,p=void 0!==u&&u,m=a.paragraph,v=void 0!==m&&m,y=a.variant,f=void 0===y?"body1":y,g=a.variantMapping,h=void 0===g?re:g,Z=(0,w.Z)(a,te),x=(0,A.Z)({},a,{align:i,color:r,className:s,component:c,gutterBottom:d,noWrap:p,paragraph:v,variant:f,variantMapping:h}),C=c||(v?"p":h[f]||re[f])||"span",S=function(e){var t=e.align,n=e.gutterBottom,r=e.noWrap,a=e.paragraph,o=e.variant,i=e.classes,s={root:["root",o,"inherit"!==e.align&&"align".concat((0,Q.Z)(t)),n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,I.Z)(s,ee,i)}(x);return(0,b.jsx)(ne,(0,A.Z)({as:C,ref:t,ownerState:x,className:(0,j.Z)(S.root,s)},Z))}));function ie(e){return(0,G.Z)("MuiListItemText",e)}var se=(0,O.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),ce=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],le=(0,P.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,C.Z)({},"& .".concat(se.primary),t.primary),(0,C.Z)({},"& .".concat(se.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,A.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),de=S.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItemText"}),r=n.children,a=n.className,o=n.disableTypography,i=void 0!==o&&o,s=n.inset,c=void 0!==s&&s,l=n.primary,d=n.primaryTypographyProps,u=n.secondary,p=n.secondaryTypographyProps,m=(0,w.Z)(n,ce),v=S.useContext(B.Z).dense,y=null!=l?l:r,f=u,g=(0,A.Z)({},n,{disableTypography:i,inset:c,primary:!!y,secondary:!!f,dense:v}),h=function(e){var t=e.classes,n=e.inset,r=e.primary,a=e.secondary,o={root:["root",n&&"inset",e.dense&&"dense",r&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,I.Z)(o,ie,t)}(g);return null==y||y.type===oe||i||(y=(0,b.jsx)(oe,(0,A.Z)({variant:v?"body2":"body1",className:h.primary,component:null!=d&&d.variant?void 0:"span",display:"block"},d,{children:y}))),null==f||f.type===oe||i||(f=(0,b.jsx)(oe,(0,A.Z)({variant:"body2",className:h.secondary,color:"text.secondary",display:"block"},p,{children:f}))),(0,b.jsxs)(le,(0,A.Z)({className:(0,j.Z)(h.root,a),ownerState:g,ref:t},m,{children:[y,f]}))})),ue=function(){var e=(0,r.I0)(),t=(0,r.v9)(m),n=function(t){return e((0,a.GK)(t.target.id))};return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(x.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:t.map((function(e){return(0,b.jsxs)(X,{children:[(0,b.jsx)(de,{primary:e.name,secondary:e.number}),(0,b.jsx)(f.Z,{id:e.id,onClick:n,children:"Delete"})]},e.id)}))})})},pe=n(4808),me=function(){var e=(0,r.I0)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(y.Z,{label:"Find contacts by name",id:"findName",type:"text",name:"filter",onChange:function(t){return e((0,pe.T)(t.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})})},ve=n(4270);function ye(){var e=(0,r.I0)(),t=(0,r.v9)(p);return(0,S.useEffect)((function(){e((0,a.yF)())}),[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(ve.q,{children:(0,b.jsx)("title",{children:"Your contacts"})}),(0,b.jsx)(Z,{}),(0,b.jsx)(me,{}),(0,b.jsx)("div",{children:t&&"Request in progress..."}),(0,b.jsx)(ue,{})]})}}}]);
//# sourceMappingURL=391.90c8c89c.chunk.js.map