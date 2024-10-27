"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9636],{39636:(a,e,r)=>{r.r(e),r.d(e,{default:()=>f});var s=r(72791),t=r(10159),o=r(12481),n=r(95070),i=r(61224),d=r(80184);const c={borderRadius:"10px",margin:"20px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",animation:"glowingAnimation 2s infinite"},l=[{background:"linear-gradient(to bottom right, #FFD700, #FFA500)",color:"black"},{background:"linear-gradient(to bottom right, #00BFFF, #1E90FF)",color:"black"},{background:"linear-gradient(to bottom right, #32CD32, #008000)",color:"white"},{background:"linear-gradient(to bottom right, #FFA500, #FF4500)",color:"black"},{background:"linear-gradient(to bottom right, #DC143C, #8B0000)",color:"white"}];const f=function(){const[a,e]=(0,s.useState)([]),{currentUser:r}=(0,i.a)();return(0,s.useEffect)((()=>{(async()=>{try{const a=(0,o.JU)(t.db,"User",r.uid),s=await(0,o.QT)(a);if(s.exists()){const a=s.data().TransactionIDs.map((async a=>{const e=await(0,o.QT)(a);return e.exists()?{id:e.id,...e.data()}:null})),r=await Promise.all(a),t=r.filter((a=>null!==a));console.log(r),e(t)}else console.log("User not found but workshop created... error")}catch(a){console.log(a)}})()}),[null===r||void 0===r?void 0:r.uid]),(0,d.jsx)("div",{style:{minHeight:"75vh"},children:r&&a.length>0?a.sort(((a,e)=>e.date-a.date)).map(((a,e)=>(0,d.jsx)(n.Z,{style:{...c,...l[e%l.length]},children:(0,d.jsxs)(n.Z.Body,{children:[(0,d.jsx)(n.Z.Title,{children:a.description}),(0,d.jsxs)(n.Z.Text,{children:["Amount: ",a.razorpay_amount]}),(0,d.jsxs)(n.Z.Text,{children:["Razorpay Transaction Id : ",a.razorpay_order_id]}),(0,d.jsxs)(n.Z.Text,{children:[" Nritya Transaction Id : ",a.id]}),(0,d.jsxs)(n.Z.Text,{children:[" Duration/validity : ",a.duration]}),(0,d.jsxs)(n.Z.Text,{children:[" Time GMT: ",new Date(a.date).toUTCString()]})]})},a.id))):(0,d.jsx)("p",{children:"No transactions found."})})}},95070:(a,e,r)=>{r.d(e,{Z:()=>E});var s=r(41418),t=r.n(s),o=r(72791),n=r(10162),i=r(80184);const d=o.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:o="div",...d}=a;return s=(0,n.vE)(s,"card-body"),(0,i.jsx)(o,{ref:e,className:t()(r,s),...d})}));d.displayName="CardBody";const c=d,l=o.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:o="div",...d}=a;return s=(0,n.vE)(s,"card-footer"),(0,i.jsx)(o,{ref:e,className:t()(r,s),...d})}));l.displayName="CardFooter";const f=l;var m=r(96040);const x=o.forwardRef(((a,e)=>{let{bsPrefix:r,className:s,as:d="div",...c}=a;const l=(0,n.vE)(r,"card-header"),f=(0,o.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,i.jsx)(m.Z.Provider,{value:f,children:(0,i.jsx)(d,{ref:e,...c,className:t()(s,l)})})}));x.displayName="CardHeader";const u=x,b=o.forwardRef(((a,e)=>{let{bsPrefix:r,className:s,variant:o,as:d="img",...c}=a;const l=(0,n.vE)(r,"card-img");return(0,i.jsx)(d,{ref:e,className:t()(o?"".concat(l,"-").concat(o):l,s),...c})}));b.displayName="CardImg";const g=b,N=o.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:o="div",...d}=a;return s=(0,n.vE)(s,"card-img-overlay"),(0,i.jsx)(o,{ref:e,className:t()(r,s),...d})}));N.displayName="CardImgOverlay";const h=N,v=o.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:o="a",...d}=a;return s=(0,n.vE)(s,"card-link"),(0,i.jsx)(o,{ref:e,className:t()(r,s),...d})}));v.displayName="CardLink";const y=v;var p=r(27472);const j=(0,p.Z)("h6"),w=o.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:o=j,...d}=a;return s=(0,n.vE)(s,"card-subtitle"),(0,i.jsx)(o,{ref:e,className:t()(r,s),...d})}));w.displayName="CardSubtitle";const C=w,T=o.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:o="p",...d}=a;return s=(0,n.vE)(s,"card-text"),(0,i.jsx)(o,{ref:e,className:t()(r,s),...d})}));T.displayName="CardText";const k=T,F=(0,p.Z)("h5"),Z=o.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:o=F,...d}=a;return s=(0,n.vE)(s,"card-title"),(0,i.jsx)(o,{ref:e,className:t()(r,s),...d})}));Z.displayName="CardTitle";const P=Z,R=o.forwardRef(((a,e)=>{let{bsPrefix:r,className:s,bg:o,text:d,border:l,body:f=!1,children:m,as:x="div",...u}=a;const b=(0,n.vE)(r,"card");return(0,i.jsx)(x,{ref:e,...u,className:t()(s,b,o&&"bg-".concat(o),d&&"text-".concat(d),l&&"border-".concat(l)),children:f?(0,i.jsx)(c,{children:m}):m})}));R.displayName="Card";const E=Object.assign(R,{Img:g,Title:P,Subtitle:C,Body:c,Link:y,Text:k,Header:u,Footer:f,ImgOverlay:h})},96040:(a,e,r)=>{r.d(e,{Z:()=>t});const s=r(72791).createContext(null);s.displayName="CardHeaderContext";const t=s},27472:(a,e,r)=>{r.d(e,{Z:()=>i});var s=r(72791),t=r(41418),o=r.n(t),n=r(80184);const i=a=>s.forwardRef(((e,r)=>(0,n.jsx)("div",{...e,ref:r,className:o()(e.className,a)})))}}]);
//# sourceMappingURL=9636.9b9b18b1.chunk.js.map