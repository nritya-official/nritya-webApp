"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9298],{81918:(e,t,o)=>{o.d(t,{Z:()=>C});var r=o(63366),n=o(87462),a=o(72791),i=o(63733),l=o(20838),s=o(54131),c=o(74223),p=o(80184);const d=(0,c.Z)((0,p.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var f=o(42071),u=o(14036),v=o(95080),m=o(31402),h=o(66934),b=o(59703),y=o(64657);function g(e){return(0,y.ZP)("MuiChip",e)}const Z=(0,b.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),w=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],x=(0,h.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{color:r,iconColor:n,clickable:a,onDelete:i,size:l,variant:s}=o;return[{[`& .${Z.avatar}`]:t.avatar},{[`& .${Z.avatar}`]:t[`avatar${(0,u.Z)(l)}`]},{[`& .${Z.avatar}`]:t[`avatarColor${(0,u.Z)(r)}`]},{[`& .${Z.icon}`]:t.icon},{[`& .${Z.icon}`]:t[`icon${(0,u.Z)(l)}`]},{[`& .${Z.icon}`]:t[`iconColor${(0,u.Z)(n)}`]},{[`& .${Z.deleteIcon}`]:t.deleteIcon},{[`& .${Z.deleteIcon}`]:t[`deleteIcon${(0,u.Z)(l)}`]},{[`& .${Z.deleteIcon}`]:t[`deleteIconColor${(0,u.Z)(r)}`]},{[`& .${Z.deleteIcon}`]:t[`deleteIcon${(0,u.Z)(s)}Color${(0,u.Z)(r)}`]},t.root,t[`size${(0,u.Z)(l)}`],t[`color${(0,u.Z)(r)}`],a&&t.clickable,a&&"default"!==r&&t[`clickableColor${(0,u.Z)(r)})`],i&&t.deletable,i&&"default"!==r&&t[`deletableColor${(0,u.Z)(r)}`],t[s],t[`${s}${(0,u.Z)(r)}`]]}})((e=>{let{theme:t,ownerState:o}=e;const r="light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300];return(0,n.Z)({maxWidth:"100%",fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(t.vars||t).palette.text.primary,backgroundColor:(t.vars||t).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${Z.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${Z.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:t.vars?t.vars.palette.Chip.defaultAvatarColor:r,fontSize:t.typography.pxToRem(12)},[`& .${Z.avatarColorPrimary}`]:{color:(t.vars||t).palette.primary.contrastText,backgroundColor:(t.vars||t).palette.primary.dark},[`& .${Z.avatarColorSecondary}`]:{color:(t.vars||t).palette.secondary.contrastText,backgroundColor:(t.vars||t).palette.secondary.dark},[`& .${Z.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)},[`& .${Z.icon}`]:(0,n.Z)({marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&(0,n.Z)({color:t.vars?t.vars.palette.Chip.defaultIconColor:r},"default"!==o.color&&{color:"inherit"})),[`& .${Z.deleteIcon}`]:(0,n.Z)({WebkitTapHighlightColor:"transparent",color:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / 0.26)`:(0,s.Fq)(t.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / 0.4)`:(0,s.Fq)(t.palette.text.primary,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:t.vars?`rgba(${t.vars.palette[o.color].contrastTextChannel} / 0.7)`:(0,s.Fq)(t.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(t.vars||t).palette[o.color].contrastText}})},"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:(t.vars||t).palette[o.color].main,color:(t.vars||t).palette[o.color].contrastText},o.onDelete&&{[`&.${Z.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,s.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},o.onDelete&&"default"!==o.color&&{[`&.${Z.focusVisible}`]:{backgroundColor:(t.vars||t).palette[o.color].dark}})}),(e=>{let{theme:t,ownerState:o}=e;return(0,n.Z)({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)},[`&.${Z.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,s.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},"&:active":{boxShadow:(t.vars||t).shadows[1]}},o.clickable&&"default"!==o.color&&{[`&:hover, &.${Z.focusVisible}`]:{backgroundColor:(t.vars||t).palette[o.color].dark}})}),(e=>{let{theme:t,ownerState:o}=e;return(0,n.Z)({},"outlined"===o.variant&&{backgroundColor:"transparent",border:t.vars?`1px solid ${t.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[700]}`,[`&.${Z.clickable}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${Z.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`& .${Z.avatar}`]:{marginLeft:4},[`& .${Z.avatarSmall}`]:{marginLeft:2},[`& .${Z.icon}`]:{marginLeft:4},[`& .${Z.iconSmall}`]:{marginLeft:2},[`& .${Z.deleteIcon}`]:{marginRight:5},[`& .${Z.deleteIconSmall}`]:{marginRight:3}},"outlined"===o.variant&&"default"!==o.color&&{color:(t.vars||t).palette[o.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / 0.7)`:(0,s.Fq)(t.palette[o.color].main,.7)}`,[`&.${Z.clickable}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,s.Fq)(t.palette[o.color].main,t.palette.action.hoverOpacity)},[`&.${Z.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.focusOpacity})`:(0,s.Fq)(t.palette[o.color].main,t.palette.action.focusOpacity)},[`& .${Z.deleteIcon}`]:{color:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / 0.7)`:(0,s.Fq)(t.palette[o.color].main,.7),"&:hover, &:active":{color:(t.vars||t).palette[o.color].main}}})})),O=(0,h.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:o}=e,{size:r}=o;return[t.label,t[`label${(0,u.Z)(r)}`]]}})((e=>{let{ownerState:t}=e;return(0,n.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"outlined"===t.variant&&{paddingLeft:11,paddingRight:11},"small"===t.size&&{paddingLeft:8,paddingRight:8},"small"===t.size&&"outlined"===t.variant&&{paddingLeft:7,paddingRight:7})}));function $(e){return"Backspace"===e.key||"Delete"===e.key}const C=a.forwardRef((function(e,t){const o=(0,m.Z)({props:e,name:"MuiChip"}),{avatar:s,className:c,clickable:h,color:b="default",component:y,deleteIcon:Z,disabled:C=!1,icon:k,label:P,onClick:R,onDelete:S,onKeyDown:j,onKeyUp:E,size:I="medium",variant:D="filled",tabIndex:M,skipFocusWhenDisabled:F=!1}=o,L=(0,r.Z)(o,w),V=a.useRef(null),T=(0,f.Z)(V,t),A=e=>{e.stopPropagation(),S&&S(e)},W=!(!1===h||!R)||h,z=W||S?v.Z:y||"div",N=(0,n.Z)({},o,{component:z,disabled:C,size:I,color:b,iconColor:a.isValidElement(k)&&k.props.color||b,onDelete:!!S,clickable:W,variant:D}),q=(e=>{const{classes:t,disabled:o,size:r,color:n,iconColor:a,onDelete:i,clickable:s,variant:c}=e,p={root:["root",c,o&&"disabled",`size${(0,u.Z)(r)}`,`color${(0,u.Z)(n)}`,s&&"clickable",s&&`clickableColor${(0,u.Z)(n)}`,i&&"deletable",i&&`deletableColor${(0,u.Z)(n)}`,`${c}${(0,u.Z)(n)}`],label:["label",`label${(0,u.Z)(r)}`],avatar:["avatar",`avatar${(0,u.Z)(r)}`,`avatarColor${(0,u.Z)(n)}`],icon:["icon",`icon${(0,u.Z)(r)}`,`iconColor${(0,u.Z)(a)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,u.Z)(r)}`,`deleteIconColor${(0,u.Z)(n)}`,`deleteIcon${(0,u.Z)(c)}Color${(0,u.Z)(n)}`]};return(0,l.Z)(p,g,t)})(N),B=z===v.Z?(0,n.Z)({component:y||"div",focusVisibleClassName:q.focusVisible},S&&{disableRipple:!0}):{};let H=null;S&&(H=Z&&a.isValidElement(Z)?a.cloneElement(Z,{className:(0,i.Z)(Z.props.className,q.deleteIcon),onClick:A}):(0,p.jsx)(d,{className:(0,i.Z)(q.deleteIcon),onClick:A}));let K=null;s&&a.isValidElement(s)&&(K=a.cloneElement(s,{className:(0,i.Z)(q.avatar,s.props.className)}));let _=null;return k&&a.isValidElement(k)&&(_=a.cloneElement(k,{className:(0,i.Z)(q.icon,k.props.className)})),(0,p.jsxs)(x,(0,n.Z)({as:z,className:(0,i.Z)(q.root,c),disabled:!(!W||!C)||void 0,onClick:R,onKeyDown:e=>{e.currentTarget===e.target&&$(e)&&e.preventDefault(),j&&j(e)},onKeyUp:e=>{e.currentTarget===e.target&&(S&&$(e)?S(e):"Escape"===e.key&&V.current&&V.current.blur()),E&&E(e)},ref:T,tabIndex:F&&C?-1:M,ownerState:N},B,L,{children:[K||_,(0,p.jsx)(O,{className:(0,i.Z)(q.label),ownerState:N,children:P}),H]}))}))},5336:(e,t,o)=>{o.d(t,{Z:()=>_});var r=o(87462),n=o(63366),a=o(72791),i=o(73626),l=o(62060),s=o(42530),c=o(40761),p=o(71217),d=o(60545),f=o(19224),u=o(43120),v=o(39265);const m={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},r=t.attributes[e]||{},n=t.elements[e];(0,v.Re)(n)&&(0,u.Z)(n)&&(Object.assign(n.style,o),Object.keys(r).forEach((function(e){var t=r[e];!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],n=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});(0,v.Re)(r)&&(0,u.Z)(r)&&(Object.assign(r.style,a),Object.keys(n).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};var h=o(5934),b=o(95468),y=o(81694),g=o(78702),Z=o(41668),w=[p.Z,d.Z,f.Z,m,h.Z,b.Z,y.Z,g.Z,Z.Z],x=(0,c.kZ)({defaultModifiers:w}),O=o(20838),$=o(96174),C=o(64657);const k="base";function P(e,t){const o=C._v[t];return o?`${k}--${o}`:function(e,t){return`${k}-${e}-${t}`}(e,t)}const R="Popper";function S(e){return P(R,e)}!function(e,t){const o={};t.forEach((t=>{o[t]=P(e,t)}))}(R,["root"]);var j=o(78832),E=o(80184);const I={disableDefaultClasses:!1},D=a.createContext(I);const M=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],F=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function L(e){return"function"===typeof e?e():e}function V(e){return void 0!==e.nodeType}const T=()=>(0,O.Z)({root:["root"]},function(e){const{disableDefaultClasses:t}=a.useContext(D);return o=>t?"":e(o)}(S)),A={},W=a.forwardRef((function(e,t){var o;const{anchorEl:s,children:c,direction:p,disablePortal:d,modifiers:f,open:u,placement:v,popperOptions:m,popperRef:h,slotProps:b={},slots:y={},TransitionProps:g}=e,Z=(0,n.Z)(e,M),w=a.useRef(null),O=(0,i.Z)(w,t),$=a.useRef(null),C=(0,i.Z)($,h),k=a.useRef(C);(0,l.Z)((()=>{k.current=C}),[C]),a.useImperativeHandle(h,(()=>$.current),[]);const P=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(v,p),[R,S]=a.useState(P),[I,D]=a.useState(L(s));a.useEffect((()=>{$.current&&$.current.forceUpdate()})),a.useEffect((()=>{s&&D(L(s))}),[s]),(0,l.Z)((()=>{if(!I||!u)return;let e=[{name:"preventOverflow",options:{altBoundary:d}},{name:"flip",options:{altBoundary:d}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:e=>{let{state:t}=e;S(t.placement)}}];null!=f&&(e=e.concat(f)),m&&null!=m.modifiers&&(e=e.concat(m.modifiers));const t=x(I,w.current,(0,r.Z)({placement:P},m,{modifiers:e}));return k.current(t),()=>{t.destroy(),k.current(null)}}),[I,d,f,u,m,P]);const F={placement:R};null!==g&&(F.TransitionProps=g);const V=T(),A=null!=(o=y.root)?o:"div",W=(0,j.y)({elementType:A,externalSlotProps:b.root,externalForwardedProps:Z,additionalProps:{role:"tooltip",ref:O},ownerState:e,className:V.root});return(0,E.jsx)(A,(0,r.Z)({},W,{children:"function"===typeof c?c(F):c}))})),z=a.forwardRef((function(e,t){const{anchorEl:o,children:i,container:l,direction:c="ltr",disablePortal:p=!1,keepMounted:d=!1,modifiers:f,open:u,placement:v="bottom",popperOptions:m=A,popperRef:h,style:b,transition:y=!1,slotProps:g={},slots:Z={}}=e,w=(0,n.Z)(e,F),[x,O]=a.useState(!0);if(!d&&!u&&(!y||x))return null;let C;if(l)C=l;else if(o){const e=L(o);C=e&&V(e)?(0,s.Z)(e).body:(0,s.Z)(null).body}const k=u||!d||y&&!x?void 0:"none",P=y?{in:u,onEnter:()=>{O(!1)},onExited:()=>{O(!0)}}:void 0;return(0,E.jsx)($.h,{disablePortal:p,container:C,children:(0,E.jsx)(W,(0,r.Z)({anchorEl:o,direction:c,disablePortal:p,modifiers:f,ref:t,open:y?!x:u,placement:v,popperOptions:m,popperRef:h,slotProps:g,slots:Z},w,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:k},b),TransitionProps:P,children:i}))})}));var N=o(85410),q=o(66934),B=o(31402);const H=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],K=(0,q.ZP)(z,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),_=a.forwardRef((function(e,t){var o;const a=(0,N.Z)(),i=(0,B.Z)({props:e,name:"MuiPopper"}),{anchorEl:l,component:s,components:c,componentsProps:p,container:d,disablePortal:f,keepMounted:u,modifiers:v,open:m,placement:h,popperOptions:b,popperRef:y,transition:g,slots:Z,slotProps:w}=i,x=(0,n.Z)(i,H),O=null!=(o=null==Z?void 0:Z.root)?o:null==c?void 0:c.Root,$=(0,r.Z)({anchorEl:l,container:d,disablePortal:f,keepMounted:u,modifiers:v,open:m,placement:h,popperOptions:b,popperRef:y,transition:g},x);return(0,E.jsx)(K,(0,r.Z)({as:s,direction:null==a?void 0:a.direction,slots:{root:O},slotProps:null!=w?w:p},$,{ref:t}))}))},5402:(e,t,o)=>{o.d(t,{V:()=>c,Z:()=>p});var r=o(87462),n=o(63366),a=o(72791),i=o(80184);const l=["value"],s=a.createContext();const c=()=>{const e=a.useContext(s);return null!=e&&e},p=function(e){let{value:t}=e,o=(0,n.Z)(e,l);return(0,i.jsx)(s.Provider,(0,r.Z)({value:null==t||t},o))}},85410:(e,t,o)=>{t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=a(t);if(o&&o.has(e))return o.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=n?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,o&&o.set(e,r),r}(o(72791)),n=o(96649);function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(a=function(e){return e?o:t})(e)}t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const t=r.useContext(n.ThemeContext);return t&&(o=t,0!==Object.keys(o).length)?t:e;var o}},40761:(e,t,o)=>{o.d(t,{kZ:()=>w});var r=o(85652),n=o(44801),a=o(93265),i=o(39265);var l=o(43120),s=o(77902),c=o(10881),p=o(10543),d=o(3676);function f(e,t,o){void 0===o&&(o=!1);var f=(0,i.Re)(t),u=(0,i.Re)(t)&&function(e){var t=e.getBoundingClientRect(),o=(0,d.NM)(t.width)/e.offsetWidth||1,r=(0,d.NM)(t.height)/e.offsetHeight||1;return 1!==o||1!==r}(t),v=(0,c.Z)(t),m=(0,r.Z)(e,u,o),h={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(f||!f&&!o)&&(("body"!==(0,l.Z)(t)||(0,p.Z)(v))&&(h=function(e){return e!==(0,a.Z)(e)&&(0,i.Re)(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:(0,n.Z)(e);var t}(t)),(0,i.Re)(t)?((b=(0,r.Z)(t,!0)).x+=t.clientLeft,b.y+=t.clientTop):v&&(b.x=(0,s.Z)(v))),{x:m.left+h.scrollLeft-b.x,y:m.top+h.scrollTop-b.y,width:m.width,height:m.height}}var u=o(79818),v=o(37467),m=o(35411),h=o(22570);function b(e){var t=new Map,o=new Set,r=[];function n(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var r=t.get(e);r&&n(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||n(e)})),r}function y(e){var t;return function(){return t||(t=new Promise((function(o){Promise.resolve().then((function(){t=void 0,o(e())}))}))),t}}var g={placement:"bottom",modifiers:[],strategy:"absolute"};function Z(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function w(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,r=void 0===o?[]:o,n=t.defaultOptions,a=void 0===n?g:n;return function(e,t,o){void 0===o&&(o=a);var n={placement:"bottom",orderedModifiers:[],options:Object.assign({},g,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],s=!1,c={state:n,setOptions:function(o){var s="function"===typeof o?o(n.options):o;p(),n.options=Object.assign({},a,n.options,s),n.scrollParents={reference:(0,i.kK)(e)?(0,v.Z)(e):e.contextElement?(0,v.Z)(e.contextElement):[],popper:(0,v.Z)(t)};var d=function(e){var t=b(e);return h.xs.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}(function(e){var t=e.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,n.options.modifiers)));return n.orderedModifiers=d.filter((function(e){return e.enabled})),n.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,r=void 0===o?{}:o,a=e.effect;if("function"===typeof a){var i=a({state:n,name:t,instance:c,options:r}),s=function(){};l.push(i||s)}})),c.update()},forceUpdate:function(){if(!s){var e=n.elements,t=e.reference,o=e.popper;if(Z(t,o)){n.rects={reference:f(t,(0,m.Z)(o),"fixed"===n.options.strategy),popper:(0,u.Z)(o)},n.reset=!1,n.placement=n.options.placement,n.orderedModifiers.forEach((function(e){return n.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<n.orderedModifiers.length;r++)if(!0!==n.reset){var a=n.orderedModifiers[r],i=a.fn,l=a.options,p=void 0===l?{}:l,d=a.name;"function"===typeof i&&(n=i({state:n,options:p,name:d,instance:c})||n)}else n.reset=!1,r=-1}}},update:y((function(){return new Promise((function(e){c.forceUpdate(),e(n)}))})),destroy:function(){p(),s=!0}};if(!Z(e,t))return c;function p(){l.forEach((function(e){return e()})),l=[]}return c.setOptions(o).then((function(e){!s&&o.onFirstUpdate&&o.onFirstUpdate(e)})),c}}},71942:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(39265);function n(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&(0,r.Zq)(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}},85652:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(39265),n=o(3676),a=o(93265),i=o(38044);function l(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var l=e.getBoundingClientRect(),s=1,c=1;t&&(0,r.Re)(e)&&(s=e.offsetWidth>0&&(0,n.NM)(l.width)/e.offsetWidth||1,c=e.offsetHeight>0&&(0,n.NM)(l.height)/e.offsetHeight||1);var p=((0,r.kK)(e)?(0,a.Z)(e):window).visualViewport,d=!(0,i.Z)()&&o,f=(l.left+(d&&p?p.offsetLeft:0))/s,u=(l.top+(d&&p?p.offsetTop:0))/c,v=l.width/s,m=l.height/c;return{width:v,height:m,top:u,right:f+v,bottom:u+m,left:f,x:f,y:u}}},7427:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(93265);function n(e){return(0,r.Z)(e).getComputedStyle(e)}},10881:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(39265);function n(e){return(((0,r.kK)(e)?e.ownerDocument:e.document)||window.document).documentElement}},79818:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(85652);function n(e){var t=(0,r.Z)(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}},43120:(e,t,o)=>{function r(e){return e?(e.nodeName||"").toLowerCase():null}o.d(t,{Z:()=>r})},35411:(e,t,o)=>{o.d(t,{Z:()=>d});var r=o(93265),n=o(43120),a=o(7427),i=o(39265);function l(e){return["table","td","th"].indexOf((0,n.Z)(e))>=0}var s=o(48779),c=o(33118);function p(e){return(0,i.Re)(e)&&"fixed"!==(0,a.Z)(e).position?e.offsetParent:null}function d(e){for(var t=(0,r.Z)(e),o=p(e);o&&l(o)&&"static"===(0,a.Z)(o).position;)o=p(o);return o&&("html"===(0,n.Z)(o)||"body"===(0,n.Z)(o)&&"static"===(0,a.Z)(o).position)?t:o||function(e){var t=/firefox/i.test((0,c.Z)());if(/Trident/i.test((0,c.Z)())&&(0,i.Re)(e)&&"fixed"===(0,a.Z)(e).position)return null;var o=(0,s.Z)(e);for((0,i.Zq)(o)&&(o=o.host);(0,i.Re)(o)&&["html","body"].indexOf((0,n.Z)(o))<0;){var r=(0,a.Z)(o);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return o;o=o.parentNode}return null}(e)||t}},48779:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(43120),n=o(10881),a=o(39265);function i(e){return"html"===(0,r.Z)(e)?e:e.assignedSlot||e.parentNode||((0,a.Zq)(e)?e.host:null)||(0,n.Z)(e)}},93265:(e,t,o)=>{function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}o.d(t,{Z:()=>r})},44801:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(93265);function n(e){var t=(0,r.Z)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}},77902:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(85652),n=o(10881),a=o(44801);function i(e){return(0,r.Z)((0,n.Z)(e)).left+(0,a.Z)(e).scrollLeft}},39265:(e,t,o)=>{o.d(t,{Re:()=>a,Zq:()=>i,kK:()=>n});var r=o(93265);function n(e){return e instanceof(0,r.Z)(e).Element||e instanceof Element}function a(e){return e instanceof(0,r.Z)(e).HTMLElement||e instanceof HTMLElement}function i(e){return"undefined"!==typeof ShadowRoot&&(e instanceof(0,r.Z)(e).ShadowRoot||e instanceof ShadowRoot)}},38044:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(33118);function n(){return!/^((?!chrome|android).)*safari/i.test((0,r.Z)())}},10543:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(7427);function n(e){var t=(0,r.Z)(e),o=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+a+n)}},37467:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(48779),n=o(10543),a=o(43120),i=o(39265);function l(e){return["html","body","#document"].indexOf((0,a.Z)(e))>=0?e.ownerDocument.body:(0,i.Re)(e)&&(0,n.Z)(e)?e:l((0,r.Z)(e))}var s=o(93265);function c(e,t){var o;void 0===t&&(t=[]);var a=l(e),i=a===(null==(o=e.ownerDocument)?void 0:o.body),p=(0,s.Z)(a),d=i?[p].concat(p.visualViewport||[],(0,n.Z)(a)?a:[]):a,f=t.concat(d);return i?f:f.concat(c((0,r.Z)(d)))}},22570:(e,t,o)=>{o.d(t,{BL:()=>c,Ct:()=>h,F2:()=>a,I:()=>n,Pj:()=>f,YP:()=>v,bw:()=>m,d7:()=>l,k5:()=>u,mv:()=>s,t$:()=>i,ut:()=>p,we:()=>r,xs:()=>b,zV:()=>d});var r="top",n="bottom",a="right",i="left",l="auto",s=[r,n,a,i],c="start",p="end",d="clippingParents",f="viewport",u="popper",v="reference",m=s.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+p])}),[]),h=[].concat(s,[l]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+p])}),[]),b=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},78702:(e,t,o)=>{o.d(t,{Z:()=>f});var r=o(65532),n=o(79818),a=o(71942),i=o(35411),l=o(65376),s=o(84666),c=o(1340),p=o(42031),d=o(22570);const f={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,a=e.name,f=e.options,u=o.elements.arrow,v=o.modifiersData.popperOffsets,m=(0,r.Z)(o.placement),h=(0,l.Z)(m),b=[d.t$,d.F2].indexOf(m)>=0?"height":"width";if(u&&v){var y=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,(0,c.Z)("number"!==typeof e?e:(0,p.Z)(e,d.mv))}(f.padding,o),g=(0,n.Z)(u),Z="y"===h?d.we:d.t$,w="y"===h?d.I:d.F2,x=o.rects.reference[b]+o.rects.reference[h]-v[h]-o.rects.popper[b],O=v[h]-o.rects.reference[h],$=(0,i.Z)(u),C=$?"y"===h?$.clientHeight||0:$.clientWidth||0:0,k=x/2-O/2,P=y[Z],R=C-g[b]-y[w],S=C/2-g[b]/2+k,j=(0,s.u)(P,S,R),E=h;o.modifiersData[a]=((t={})[E]=j,t.centerOffset=j-S,t)}},effect:function(e){var t=e.state,o=e.options.element,r=void 0===o?"[data-popper-arrow]":o;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&(0,a.Z)(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},19224:(e,t,o)=>{o.d(t,{Z:()=>u});var r=o(22570),n=o(35411),a=o(93265),i=o(10881),l=o(7427),s=o(65532),c=o(35227),p=o(3676),d={top:"auto",right:"auto",bottom:"auto",left:"auto"};function f(e){var t,o=e.popper,s=e.popperRect,c=e.placement,f=e.variation,u=e.offsets,v=e.position,m=e.gpuAcceleration,h=e.adaptive,b=e.roundOffsets,y=e.isFixed,g=u.x,Z=void 0===g?0:g,w=u.y,x=void 0===w?0:w,O="function"===typeof b?b({x:Z,y:x}):{x:Z,y:x};Z=O.x,x=O.y;var $=u.hasOwnProperty("x"),C=u.hasOwnProperty("y"),k=r.t$,P=r.we,R=window;if(h){var S=(0,n.Z)(o),j="clientHeight",E="clientWidth";if(S===(0,a.Z)(o)&&(S=(0,i.Z)(o),"static"!==(0,l.Z)(S).position&&"absolute"===v&&(j="scrollHeight",E="scrollWidth")),c===r.we||(c===r.t$||c===r.F2)&&f===r.ut)P=r.I,x-=(y&&S===R&&R.visualViewport?R.visualViewport.height:S[j])-s.height,x*=m?1:-1;if(c===r.t$||(c===r.we||c===r.I)&&f===r.ut)k=r.F2,Z-=(y&&S===R&&R.visualViewport?R.visualViewport.width:S[E])-s.width,Z*=m?1:-1}var I,D=Object.assign({position:v},h&&d),M=!0===b?function(e,t){var o=e.x,r=e.y,n=t.devicePixelRatio||1;return{x:(0,p.NM)(o*n)/n||0,y:(0,p.NM)(r*n)/n||0}}({x:Z,y:x},(0,a.Z)(o)):{x:Z,y:x};return Z=M.x,x=M.y,m?Object.assign({},D,((I={})[P]=C?"0":"",I[k]=$?"0":"",I.transform=(R.devicePixelRatio||1)<=1?"translate("+Z+"px, "+x+"px)":"translate3d("+Z+"px, "+x+"px, 0)",I)):Object.assign({},D,((t={})[P]=C?x+"px":"",t[k]=$?Z+"px":"",t.transform="",t))}const u={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,r=o.gpuAcceleration,n=void 0===r||r,a=o.adaptive,i=void 0===a||a,l=o.roundOffsets,p=void 0===l||l,d={placement:(0,s.Z)(t.placement),variation:(0,c.Z)(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,f(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:p})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,f(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}},71217:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(93265),n={passive:!0};const a={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,a=e.options,i=a.scroll,l=void 0===i||i,s=a.resize,c=void 0===s||s,p=(0,r.Z)(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return l&&d.forEach((function(e){e.addEventListener("scroll",o.update,n)})),c&&p.addEventListener("resize",o.update,n),function(){l&&d.forEach((function(e){e.removeEventListener("scroll",o.update,n)})),c&&p.removeEventListener("resize",o.update,n)}},data:{}}},95468:(e,t,o)=>{o.d(t,{Z:()=>d});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function n(e){return e.replace(/left|right|bottom|top/g,(function(e){return r[e]}))}var a=o(65532),i={start:"end",end:"start"};function l(e){return e.replace(/start|end/g,(function(e){return i[e]}))}var s=o(79913),c=o(35227),p=o(22570);const d={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=o.mainAxis,d=void 0===i||i,f=o.altAxis,u=void 0===f||f,v=o.fallbackPlacements,m=o.padding,h=o.boundary,b=o.rootBoundary,y=o.altBoundary,g=o.flipVariations,Z=void 0===g||g,w=o.allowedAutoPlacements,x=t.options.placement,O=(0,a.Z)(x),$=v||(O===x||!Z?[n(x)]:function(e){if((0,a.Z)(e)===p.d7)return[];var t=n(e);return[l(e),t,l(t)]}(x)),C=[x].concat($).reduce((function(e,o){return e.concat((0,a.Z)(o)===p.d7?function(e,t){void 0===t&&(t={});var o=t,r=o.placement,n=o.boundary,i=o.rootBoundary,l=o.padding,d=o.flipVariations,f=o.allowedAutoPlacements,u=void 0===f?p.Ct:f,v=(0,c.Z)(r),m=v?d?p.bw:p.bw.filter((function(e){return(0,c.Z)(e)===v})):p.mv,h=m.filter((function(e){return u.indexOf(e)>=0}));0===h.length&&(h=m);var b=h.reduce((function(t,o){return t[o]=(0,s.Z)(e,{placement:o,boundary:n,rootBoundary:i,padding:l})[(0,a.Z)(o)],t}),{});return Object.keys(b).sort((function(e,t){return b[e]-b[t]}))}(t,{placement:o,boundary:h,rootBoundary:b,padding:m,flipVariations:Z,allowedAutoPlacements:w}):o)}),[]),k=t.rects.reference,P=t.rects.popper,R=new Map,S=!0,j=C[0],E=0;E<C.length;E++){var I=C[E],D=(0,a.Z)(I),M=(0,c.Z)(I)===p.BL,F=[p.we,p.I].indexOf(D)>=0,L=F?"width":"height",V=(0,s.Z)(t,{placement:I,boundary:h,rootBoundary:b,altBoundary:y,padding:m}),T=F?M?p.F2:p.t$:M?p.I:p.we;k[L]>P[L]&&(T=n(T));var A=n(T),W=[];if(d&&W.push(V[D]<=0),u&&W.push(V[T]<=0,V[A]<=0),W.every((function(e){return e}))){j=I,S=!1;break}R.set(I,W)}if(S)for(var z=function(e){var t=C.find((function(t){var o=R.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},N=Z?3:1;N>0;N--){if("break"===z(N))break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},41668:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(22570),n=o(79913);function a(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function i(e){return[r.we,r.F2,r.I,r.t$].some((function(t){return e[t]>=0}))}const l={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,r=t.rects.reference,l=t.rects.popper,s=t.modifiersData.preventOverflow,c=(0,n.Z)(t,{elementContext:"reference"}),p=(0,n.Z)(t,{altBoundary:!0}),d=a(c,r),f=a(p,l,s),u=i(d),v=i(f);t.modifiersData[o]={referenceClippingOffsets:d,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":v})}}},5934:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(65532),n=o(22570);const a={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,a=e.name,i=o.offset,l=void 0===i?[0,0]:i,s=n.Ct.reduce((function(e,o){return e[o]=function(e,t,o){var a=(0,r.Z)(e),i=[n.t$,n.we].indexOf(a)>=0?-1:1,l="function"===typeof o?o(Object.assign({},t,{placement:e})):o,s=l[0],c=l[1];return s=s||0,c=(c||0)*i,[n.t$,n.F2].indexOf(a)>=0?{x:c,y:s}:{x:s,y:c}}(o,t.rects,l),e}),{}),c=s[t.placement],p=c.x,d=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=d),t.modifiersData[a]=s}}},60545:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(76425);const n={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=(0,r.Z)({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}}},81694:(e,t,o)=>{o.d(t,{Z:()=>u});var r=o(22570),n=o(65532),a=o(65376);var i=o(84666),l=o(79818),s=o(35411),c=o(79913),p=o(35227),d=o(59139),f=o(3676);const u={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,u=e.name,v=o.mainAxis,m=void 0===v||v,h=o.altAxis,b=void 0!==h&&h,y=o.boundary,g=o.rootBoundary,Z=o.altBoundary,w=o.padding,x=o.tether,O=void 0===x||x,$=o.tetherOffset,C=void 0===$?0:$,k=(0,c.Z)(t,{boundary:y,rootBoundary:g,padding:w,altBoundary:Z}),P=(0,n.Z)(t.placement),R=(0,p.Z)(t.placement),S=!R,j=(0,a.Z)(P),E="x"===j?"y":"x",I=t.modifiersData.popperOffsets,D=t.rects.reference,M=t.rects.popper,F="function"===typeof C?C(Object.assign({},t.rects,{placement:t.placement})):C,L="number"===typeof F?{mainAxis:F,altAxis:F}:Object.assign({mainAxis:0,altAxis:0},F),V=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(I){if(m){var A,W="y"===j?r.we:r.t$,z="y"===j?r.I:r.F2,N="y"===j?"height":"width",q=I[j],B=q+k[W],H=q-k[z],K=O?-M[N]/2:0,_=R===r.BL?D[N]:M[N],U=R===r.BL?-M[N]:-D[N],Y=t.elements.arrow,X=O&&Y?(0,l.Z)(Y):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:(0,d.Z)(),J=G[W],Q=G[z],ee=(0,i.u)(0,D[N],X[N]),te=S?D[N]/2-K-ee-J-L.mainAxis:_-ee-J-L.mainAxis,oe=S?-D[N]/2+K+ee+Q+L.mainAxis:U+ee+Q+L.mainAxis,re=t.elements.arrow&&(0,s.Z)(t.elements.arrow),ne=re?"y"===j?re.clientTop||0:re.clientLeft||0:0,ae=null!=(A=null==V?void 0:V[j])?A:0,ie=q+te-ae-ne,le=q+oe-ae,se=(0,i.u)(O?(0,f.VV)(B,ie):B,q,O?(0,f.Fp)(H,le):H);I[j]=se,T[j]=se-q}if(b){var ce,pe="x"===j?r.we:r.t$,de="x"===j?r.I:r.F2,fe=I[E],ue="y"===E?"height":"width",ve=fe+k[pe],me=fe-k[de],he=-1!==[r.we,r.t$].indexOf(P),be=null!=(ce=null==V?void 0:V[E])?ce:0,ye=he?ve:fe-D[ue]-M[ue]-be+L.altAxis,ge=he?fe+D[ue]+M[ue]-be-L.altAxis:me,Ze=O&&he?(0,i.q)(ye,fe,ge):(0,i.u)(O?ye:ve,fe,O?ge:me);I[E]=Ze,T[E]=Ze-fe}t.modifiersData[u]=T}},requiresIfExists:["offset"]}},76425:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(65532),n=o(35227),a=o(65376),i=o(22570);function l(e){var t,o=e.reference,l=e.element,s=e.placement,c=s?(0,r.Z)(s):null,p=s?(0,n.Z)(s):null,d=o.x+o.width/2-l.width/2,f=o.y+o.height/2-l.height/2;switch(c){case i.we:t={x:d,y:o.y-l.height};break;case i.I:t={x:d,y:o.y+o.height};break;case i.F2:t={x:o.x+o.width,y:f};break;case i.t$:t={x:o.x-l.width,y:f};break;default:t={x:o.x,y:o.y}}var u=c?(0,a.Z)(c):null;if(null!=u){var v="y"===u?"height":"width";switch(p){case i.BL:t[u]=t[u]-(o[v]/2-l[v]/2);break;case i.ut:t[u]=t[u]+(o[v]/2-l[v]/2)}}return t}},79913:(e,t,o)=>{o.d(t,{Z:()=>$});var r=o(22570),n=o(93265),a=o(10881),i=o(77902),l=o(38044);var s=o(7427),c=o(44801),p=o(3676);var d=o(37467),f=o(35411),u=o(39265),v=o(85652),m=o(48779),h=o(71942),b=o(43120);function y(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function g(e,t,o){return t===r.Pj?y(function(e,t){var o=(0,n.Z)(e),r=(0,a.Z)(e),s=o.visualViewport,c=r.clientWidth,p=r.clientHeight,d=0,f=0;if(s){c=s.width,p=s.height;var u=(0,l.Z)();(u||!u&&"fixed"===t)&&(d=s.offsetLeft,f=s.offsetTop)}return{width:c,height:p,x:d+(0,i.Z)(e),y:f}}(e,o)):(0,u.kK)(t)?function(e,t){var o=(0,v.Z)(e,!1,"fixed"===t);return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}(t,o):y(function(e){var t,o=(0,a.Z)(e),r=(0,c.Z)(e),n=null==(t=e.ownerDocument)?void 0:t.body,l=(0,p.Fp)(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),d=(0,p.Fp)(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),f=-r.scrollLeft+(0,i.Z)(e),u=-r.scrollTop;return"rtl"===(0,s.Z)(n||o).direction&&(f+=(0,p.Fp)(o.clientWidth,n?n.clientWidth:0)-l),{width:l,height:d,x:f,y:u}}((0,a.Z)(e)))}function Z(e,t,o,r){var n="clippingParents"===t?function(e){var t=(0,d.Z)((0,m.Z)(e)),o=["absolute","fixed"].indexOf((0,s.Z)(e).position)>=0&&(0,u.Re)(e)?(0,f.Z)(e):e;return(0,u.kK)(o)?t.filter((function(e){return(0,u.kK)(e)&&(0,h.Z)(e,o)&&"body"!==(0,b.Z)(e)})):[]}(e):[].concat(t),a=[].concat(n,[o]),i=a[0],l=a.reduce((function(t,o){var n=g(e,o,r);return t.top=(0,p.Fp)(n.top,t.top),t.right=(0,p.VV)(n.right,t.right),t.bottom=(0,p.VV)(n.bottom,t.bottom),t.left=(0,p.Fp)(n.left,t.left),t}),g(e,i,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}var w=o(76425),x=o(1340),O=o(42031);function $(e,t){void 0===t&&(t={});var o=t,n=o.placement,i=void 0===n?e.placement:n,l=o.strategy,s=void 0===l?e.strategy:l,c=o.boundary,p=void 0===c?r.zV:c,d=o.rootBoundary,f=void 0===d?r.Pj:d,m=o.elementContext,h=void 0===m?r.k5:m,b=o.altBoundary,g=void 0!==b&&b,$=o.padding,C=void 0===$?0:$,k=(0,x.Z)("number"!==typeof C?C:(0,O.Z)(C,r.mv)),P=h===r.k5?r.YP:r.k5,R=e.rects.popper,S=e.elements[g?P:h],j=Z((0,u.kK)(S)?S:S.contextElement||(0,a.Z)(e.elements.popper),p,f,s),E=(0,v.Z)(e.elements.reference),I=(0,w.Z)({reference:E,element:R,strategy:"absolute",placement:i}),D=y(Object.assign({},R,I)),M=h===r.k5?D:E,F={top:j.top-M.top+k.top,bottom:M.bottom-j.bottom+k.bottom,left:j.left-M.left+k.left,right:M.right-j.right+k.right},L=e.modifiersData.offset;if(h===r.k5&&L){var V=L[i];Object.keys(F).forEach((function(e){var t=[r.F2,r.I].indexOf(e)>=0?1:-1,o=[r.we,r.I].indexOf(e)>=0?"y":"x";F[e]+=V[o]*t}))}return F}},42031:(e,t,o)=>{function r(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}o.d(t,{Z:()=>r})},65532:(e,t,o)=>{function r(e){return e.split("-")[0]}o.d(t,{Z:()=>r})},59139:(e,t,o)=>{function r(){return{top:0,right:0,bottom:0,left:0}}o.d(t,{Z:()=>r})},65376:(e,t,o)=>{function r(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}o.d(t,{Z:()=>r})},35227:(e,t,o)=>{function r(e){return e.split("-")[1]}o.d(t,{Z:()=>r})},3676:(e,t,o)=>{o.d(t,{Fp:()=>r,NM:()=>a,VV:()=>n});var r=Math.max,n=Math.min,a=Math.round},1340:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(59139);function n(e){return Object.assign({},(0,r.Z)(),e)}},33118:(e,t,o)=>{function r(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}o.d(t,{Z:()=>r})},84666:(e,t,o)=>{o.d(t,{q:()=>a,u:()=>n});var r=o(3676);function n(e,t,o){return(0,r.Fp)(e,(0,r.VV)(t,o))}function a(e,t,o){var r=n(e,t,o);return r>o?o:r}}}]);
//# sourceMappingURL=9298.2cd35258.chunk.js.map