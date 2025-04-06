"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[2716],{12716:(e,o,r)=>{r.r(o),r.d(o,{default:()=>x});var t=r(72791),i=r(84654),a=r(16029),l=r(5574),n=r(39157),s=r(94294),c=r(79253),d=r(23853),p=r(16856),h=r(21204),u=r(80184);const x=e=>{let{dataList:o,imgOnly:r=!1}=e;const x=Array.isArray(o)?o:Object.values(o),[m,g]=(0,t.useState)(!1),[b,f]=(0,t.useState)(null),[v,Z]=(0,t.useState)(!1),[w,y]=(0,t.useState)(!1),S=(0,t.useRef)(null),k=()=>{const e=S.current;e&&(Z(e.scrollLeft>0),y(e.scrollLeft<e.scrollWidth-e.clientWidth))},j=e=>{const o=S.current;"left"===e?o.scrollBy({left:-330,behavior:"smooth"}):"right"===e&&o.scrollBy({left:330,behavior:"smooth"})},W=()=>{g(!1),f(null)},C={transform:"scale(1.01)"};return(0,t.useEffect)((()=>{const e=S.current;if(e)return k(),e.addEventListener("scroll",k),()=>e.removeEventListener("scroll",k)}),[]),(0,u.jsxs)(a.Z,{sx:{display:"flex",p:0,m:0,position:"relative"},children:[v&&(0,u.jsx)("button",{className:"scroll-button left",onClick:()=>j("left"),children:(0,u.jsx)(p.lrP,{})}),(0,u.jsxs)("div",{ref:S,className:"horizontal-scroll-wrapper no-important scroll-wrapper",children:[x.map(((e,o)=>r?(0,u.jsx)("a",{className:"no-important",onClick:()=>{return o=e,console.log(o),f(o),void g(!0);var o},children:(0,u.jsx)(i.Z,{style:{marginRight:"0.5rem"},component:"li",sx:{height:300,width:534,"&:hover":{...C}},children:(0,u.jsxs)(c.Z,{children:[(0,u.jsx)("img",{src:e,loading:"lazy",alt:"Studio image"}),(0,u.jsx)("div",{className:"gallery-image-overlay",children:(0,u.jsx)(d.SJS,{size:50,color:"white",className:""})})]})},o)},o):(0,u.jsx)("a",{href:"#/studio/".concat(e.id),children:(0,u.jsx)(h.Z,{data:e,img_src:e.iconUrl},e.id)},o))),(0,u.jsx)(l.Z,{open:m,onClose:W,children:b&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.Z,{sx:{padding:0},children:(0,u.jsx)("img",{src:b,alt:"Image",style:{maxWidth:"100%",height:"auto"}})}),(0,u.jsx)(s.Z,{sx:{"&:hover":{backgroundColor:"#735EAB",color:"white"}},onClick:W,children:"Close"})]})})]}),w&&(0,u.jsx)("button",{className:"scroll-button right",onClick:()=>j("right"),children:(0,u.jsx)(p.KEG,{})})]})}},21204:(e,o,r)=>{r.d(o,{Z:()=>f});r(72791);var t=r(92552),i=r(84654),a=r(28658),l=r(69597),n=r(43782),s=r(94294),c=r(18625),d=r(83168),p=r(36314),h=r(59434),u=r(60717),x=r(83708),m=r(97310),g=r(17237),b=r(80184);function f(e){let{img_src:o,data:r}=e;const f=(0,h.v9)(u.w),v=r.id?r.id:r.studioId,Z={backgroundColor:f?"#444":"white",padding:"0px",color:f?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};return(0,b.jsxs)(i.Z,{variant:"solid",sx:{...Z,"&:hover":{transform:"scale(1.01)"}},children:[(0,b.jsxs)(t.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,b.jsx)("img",{src:r&&r.iconUrl?r.iconUrl:x.Hi,loading:"lazy",alt:"Studio Image",style:{maxWidth:"100%",height:"auto",overflow:"hidden"}}),(0,b.jsx)(p.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:r&&r.danceStyles&&"string"===typeof r.danceStyles?r.danceStyles.split(",").slice(0,3).map(((e,o)=>(0,b.jsx)(l.Z,{color:o%2===0?"danger":"success",sx:{marginBottom:"10px",fontSize:"0.8rem",bgcolor:x.lt[o].backgroundColor,color:x.lt[o].color},children:e.trim()},o))):(0,b.jsx)(l.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)}),(0,b.jsx)(p.Z,{direction:"row",spacing:2,style:{position:"absolute",top:0,left:0,padding:"1px",paddingTop:"1px"},children:r&&r.freeTrialAvailable&&(0,b.jsx)(l.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:x.DM.LIME.backgroundColor,color:x.DM.LIME.color},children:"Free Trial Available"},1)})]}),(0,b.jsxs)(a.Z,{style:{padding:"10px"},children:[(0,b.jsxs)(n.Z,{display:"flex",justifyContent:"space-between",columnGap:1,children:[(0,b.jsx)(c.Z,{alignSelf:"center",href:"#/studio/".concat(v),fontWeight:"bold",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",style:{color:f?"white":"black"},children:r&&r.studioName?r.studioName:"    "}),r&&r.avgRating&&r.avgRating>0?(0,b.jsxs)(d.ZP,{width:52,flexShrink:0,alignSelf:"center",style:{color:f?"white":"black"},children:["\u2b50 ",r.avgRating.toFixed(1)]}):null]}),(0,b.jsx)(d.ZP,{style:{color:f?"white":"black"},level:"body-xs",children:r.street?r.street:".  "}),(0,b.jsx)(m.ZP,{hidden:!0,"aria-label":"Like minimal photography",size:"md",variant:"solid",color:"danger",sx:{position:"absolute",zIndex:2,borderRadius:"50%",right:"1rem",bottom:"2rem",transform:"translateY(50%)"},children:(0,b.jsx)(g.Z,{})}),(0,b.jsxs)(n.Z,{display:"flex",justifyContent:"space-between",children:[(0,b.jsx)(d.ZP,{alignSelf:"center",fontSize:12,style:{color:f?"white":"black"},children:r&&r.minFee&&r.minFee>=0&&"@ \u20b9".concat(r.minFee," onwards")}),(0,b.jsx)(s.Z,{size:"small",variant:"contained",sx:{alignSelf:"center",color:"white",backgroundColor:"#735EAB","&:hover":{backgroundColor:"#735EAB",color:"white"},"&.Mui-disabled":{backgroundColor:f?"rgba(115, 94, 171, 0.5)":"rgba(115, 94, 171, 0.3)",color:"rgba(255, 255, 255, 0.5)"}},type:"button",children:"Explore"})]})]})]})}},5574:(e,o,r)=>{r.d(o,{Z:()=>j});var t=r(63366),i=r(87462),a=r(72791),l=r(63733),n=r(20838),s=r(56046),c=r(14036),d=r(88447),p=r(60627),h=r(35527),u=r(31402),x=r(66934),m=r(17780),g=r(85090),b=r(52739),f=r(13967),v=r(80184);const Z=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],w=(0,x.ZP)(b.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),y=(0,x.ZP)(d.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),S=(0,x.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.container,o["scroll".concat((0,c.Z)(r.scroll))]]}})((e=>{let{ownerState:o}=e;return(0,i.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===o.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===o.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),k=(0,x.ZP)(h.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.paper,o["scrollPaper".concat((0,c.Z)(r.scroll))],o["paperWidth".concat((0,c.Z)(String(r.maxWidth)))],r.fullWidth&&o.paperFullWidth,r.fullScreen&&o.paperFullScreen]}})((e=>{let{theme:o,ownerState:r}=e;return(0,i.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===o.breakpoints.unit?Math.max(o.breakpoints.values.xs,444):"max(".concat(o.breakpoints.values.xs).concat(o.breakpoints.unit,", 444px)"),["&.".concat(m.Z.paperScrollBody)]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:"".concat(o.breakpoints.values[r.maxWidth]).concat(o.breakpoints.unit),["&.".concat(m.Z.paperScrollBody)]:{[o.breakpoints.down(o.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,["&.".concat(m.Z.paperScrollBody)]:{margin:0,maxWidth:"100%"}})})),j=a.forwardRef((function(e,o){const r=(0,u.Z)({props:e,name:"MuiDialog"}),d=(0,f.Z)(),x={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":b,"aria-labelledby":j,BackdropComponent:W,BackdropProps:C,children:P,className:D,disableEscapeKeyDown:M=!1,fullScreen:B=!1,fullWidth:N=!1,maxWidth:R="sm",onBackdropClick:A,onClose:E,open:F,PaperComponent:T=h.Z,PaperProps:z={},scroll:L="paper",TransitionComponent:I=p.Z,transitionDuration:K=x,TransitionProps:Y}=r,O=(0,t.Z)(r,Z),_=(0,i.Z)({},r,{disableEscapeKeyDown:M,fullScreen:B,fullWidth:N,maxWidth:R,scroll:L}),H=(e=>{const{classes:o,scroll:r,maxWidth:t,fullWidth:i,fullScreen:a}=e,l={root:["root"],container:["container","scroll".concat((0,c.Z)(r))],paper:["paper","paperScroll".concat((0,c.Z)(r)),"paperWidth".concat((0,c.Z)(String(t))),i&&"paperFullWidth",a&&"paperFullScreen"]};return(0,n.Z)(l,m.D,o)})(_),U=a.useRef(),X=(0,s.Z)(j),G=a.useMemo((()=>({titleId:X})),[X]);return(0,v.jsx)(y,(0,i.Z)({className:(0,l.Z)(H.root,D),closeAfterTransition:!0,components:{Backdrop:w},componentsProps:{backdrop:(0,i.Z)({transitionDuration:K,as:W},C)},disableEscapeKeyDown:M,onClose:E,open:F,ref:o,onClick:e=>{U.current&&(U.current=null,A&&A(e),E&&E(e,"backdropClick"))},ownerState:_},O,{children:(0,v.jsx)(I,(0,i.Z)({appear:!0,in:F,timeout:K,role:"presentation"},Y,{children:(0,v.jsx)(S,{className:(0,l.Z)(H.container),onMouseDown:e=>{U.current=e.target===e.currentTarget},ownerState:_,children:(0,v.jsx)(k,(0,i.Z)({as:T,elevation:24,role:"dialog","aria-describedby":b,"aria-labelledby":X},z,{className:(0,l.Z)(H.paper,z.className),ownerState:_,children:(0,v.jsx)(g.Z.Provider,{value:G,children:P})}))})}))}))}))},85090:(e,o,r)=>{r.d(o,{Z:()=>t});const t=r(72791).createContext({})},17780:(e,o,r)=>{r.d(o,{D:()=>a,Z:()=>l});var t=r(59703),i=r(64657);function a(e){return(0,i.ZP)("MuiDialog",e)}const l=(0,t.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"])},39157:(e,o,r)=>{r.d(o,{Z:()=>b});var t=r(63366),i=r(87462),a=r(72791),l=r(63733),n=r(20838),s=r(66934),c=r(31402),d=r(59703),p=r(64657);function h(e){return(0,p.ZP)("MuiDialogContent",e)}(0,d.Z)("MuiDialogContent",["root","dividers"]);var u=r(17673),x=r(80184);const m=["className","dividers"],g=(0,s.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.dividers&&o.dividers]}})((e=>{let{theme:o,ownerState:r}=e;return(0,i.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((o.vars||o).palette.divider),borderBottom:"1px solid ".concat((o.vars||o).palette.divider)}:{[".".concat(u.Z.root," + &")]:{paddingTop:0}})})),b=a.forwardRef((function(e,o){const r=(0,c.Z)({props:e,name:"MuiDialogContent"}),{className:a,dividers:s=!1}=r,d=(0,t.Z)(r,m),p=(0,i.Z)({},r,{dividers:s}),u=(e=>{const{classes:o,dividers:r}=e,t={root:["root",r&&"dividers"]};return(0,n.Z)(t,h,o)})(p);return(0,x.jsx)(g,(0,i.Z)({className:(0,l.Z)(u.root,a),ownerState:p,ref:o},d))}))},17673:(e,o,r)=>{r.d(o,{Z:()=>l,a:()=>a});var t=r(59703),i=r(64657);function a(e){return(0,i.ZP)("MuiDialogTitle",e)}const l=(0,t.Z)("MuiDialogTitle",["root"])}}]);
//# sourceMappingURL=2716.0db5eb79.chunk.js.map