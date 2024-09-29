"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[961],{97961:(e,s,a)=>{a.r(s),a.d(s,{default:()=>f});var l=a(72791),t=a(9806),r=a(11632),n=a(59434),o=a(47022),i=a(89743),c=a(2677),d=a(13855),m=a(43360),h=a(60717),x=a(80184);const f=()=>{const e=(0,n.v9)(h.w),[s,a]=(0,l.useState)({}),[f,p]=(0,l.useState)({}),[u,b]=(0,l.useState)({}),[y,j]=(0,l.useState)({}),[v,N]=(0,l.useState)({name:"",message:""});(0,l.useEffect)((()=>{a({backgroundColor:e?"#202020":"white",color:e?"white":"black"}),p({backgroundColor:e?"#202020":"white",color:"#00aeef"}),b({color:e?"white":"black"}),j({backgroundColor:e?"#202020":"white",color:e?"white":"black",border:"1px solid "+(e?"white":"black"),borderRadius:"5px"})}),[e]);const w=e=>{const{name:s,value:a}=e.target;N((e=>({...e,[s]:a})))};return(0,x.jsxs)("section",{children:[(0,x.jsx)("div",{children:(0,x.jsxs)(o.Z,{style:s,children:[(0,x.jsx)("h2",{style:f,children:"Contact Us"}),(0,x.jsx)("p",{style:u,children:"You may contact us via email, phone or post."})]})}),(0,x.jsx)(o.Z,{style:s,children:(0,x.jsxs)(i.Z,{children:[(0,x.jsx)(c.Z,{children:(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(t.G,{icon:r.J9Y}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h4",{style:f,children:"Address"}),(0,x.jsxs)("p",{style:u,children:["116/969, Roshan Nagar, Near Ujageshwar Mandir,",(0,x.jsx)("br",{})," Rawatpur, Kanpur Nagar, Rawatpur Gaon, ",(0,x.jsx)("br",{})," Uttar Pradesh, India, ",(0,x.jsx)("br",{})," 208019"]})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(t.G,{icon:r.j1w}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h4",{style:f,children:"Phone"}),(0,x.jsx)("p",{style:u,children:"6392074436"})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(t.G,{icon:r.FU$}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h4",{style:f,children:"Email"}),(0,x.jsx)("p",{style:u,children:"nritya@nritya.co.in"})]})]})]})}),(0,x.jsx)(c.Z,{children:(0,x.jsx)("div",{children:(0,x.jsxs)(d.Z,{style:s,onSubmit:e=>{e.preventDefault();const s=`Name: ${v.name}\n\n    Message:\n    ${v.message}`,a=`mailto:nritya@nritya.co.in?subject=${encodeURIComponent("New Contact Form Submission")}&body=${encodeURIComponent(s)}`;window.location.href=a},children:[(0,x.jsx)("h2",{style:f,children:"Send Message"}),(0,x.jsxs)(d.Z.Group,{controlId:"fullname",children:[(0,x.jsx)(d.Z.Label,{style:u,children:"Name"}),(0,x.jsx)(d.Z.Control,{required:!0,type:"text",name:"name",value:v.name,onChange:w,placeholder:"Full Name",style:y})]}),(0,x.jsxs)(d.Z.Group,{controlId:"message",children:[(0,x.jsx)(d.Z.Label,{style:u,children:"Message"}),(0,x.jsx)(d.Z.Control,{required:!0,as:"textarea",name:"message",value:v.message,onChange:w,placeholder:"Type your Message...",rows:4,style:y})]}),(0,x.jsx)(m.Z,{type:"submit",rounded:!0,className:"me-2 rounded-pill",style:{textTransform:"none",backgroundColor:e?"#892CDC":"black",color:"white"},children:"Send"})]})})})]})})]})}},13855:(e,s,a)=>{a.d(s,{Z:()=>V});var l=a(41418),t=a.n(l),r=a(52007),n=a.n(r),o=a(72791),i=a(80184);const c={type:n().string,tooltip:n().bool,as:n().elementType},d=o.forwardRef(((e,s)=>{let{as:a="div",className:l,type:r="valid",tooltip:n=!1,...o}=e;return(0,i.jsx)(a,{...o,ref:s,className:t()(l,`${r}-${n?"tooltip":"feedback"}`)})}));d.displayName="Feedback",d.propTypes=c;const m=d,h=o.createContext({});var x=a(10162);const f=o.forwardRef(((e,s)=>{let{id:a,bsPrefix:l,className:r,type:n="checkbox",isValid:c=!1,isInvalid:d=!1,as:m="input",...f}=e;const{controlId:p}=(0,o.useContext)(h);return l=(0,x.vE)(l,"form-check-input"),(0,i.jsx)(m,{...f,ref:s,type:n,id:a||p,className:t()(r,l,c&&"is-valid",d&&"is-invalid")})}));f.displayName="FormCheckInput";const p=f,u=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:l,htmlFor:r,...n}=e;const{controlId:c}=(0,o.useContext)(h);return a=(0,x.vE)(a,"form-check-label"),(0,i.jsx)("label",{...n,ref:s,htmlFor:r||c,className:t()(l,a)})}));u.displayName="FormCheckLabel";const b=u;const y=o.forwardRef(((e,s)=>{let{id:a,bsPrefix:l,bsSwitchPrefix:r,inline:n=!1,reverse:c=!1,disabled:d=!1,isValid:f=!1,isInvalid:u=!1,feedbackTooltip:y=!1,feedback:j,feedbackType:v,className:N,style:w,title:g="",type:C="checkbox",label:k,children:F,as:I="input",...R}=e;l=(0,x.vE)(l,"form-check"),r=(0,x.vE)(r,"form-switch");const{controlId:$}=(0,o.useContext)(h),S=(0,o.useMemo)((()=>({controlId:a||$})),[$,a]),P=!F&&null!=k&&!1!==k||function(e,s){return o.Children.toArray(e).some((e=>o.isValidElement(e)&&e.type===s))}(F,b),Z=(0,i.jsx)(p,{...R,type:"switch"===C?"checkbox":C,ref:s,isValid:f,isInvalid:u,disabled:d,as:I});return(0,i.jsx)(h.Provider,{value:S,children:(0,i.jsx)("div",{style:w,className:t()(N,P&&l,n&&`${l}-inline`,c&&`${l}-reverse`,"switch"===C&&r),children:F||(0,i.jsxs)(i.Fragment,{children:[Z,P&&(0,i.jsx)(b,{title:g,children:k}),j&&(0,i.jsx)(m,{type:v,tooltip:y,children:j})]})})})}));y.displayName="FormCheck";const j=Object.assign(y,{Input:p,Label:b});a(42391);const v=o.forwardRef(((e,s)=>{let{bsPrefix:a,type:l,size:r,htmlSize:n,id:c,className:d,isValid:m=!1,isInvalid:f=!1,plaintext:p,readOnly:u,as:b="input",...y}=e;const{controlId:j}=(0,o.useContext)(h);return a=(0,x.vE)(a,"form-control"),(0,i.jsx)(b,{...y,type:l,size:n,ref:s,readOnly:u,id:c||j,className:t()(d,p?`${a}-plaintext`:a,r&&`${a}-${r}`,"color"===l&&`${a}-color`,m&&"is-valid",f&&"is-invalid")})}));v.displayName="FormControl";const N=Object.assign(v,{Feedback:m}),w=o.forwardRef(((e,s)=>{let{className:a,bsPrefix:l,as:r="div",...n}=e;return l=(0,x.vE)(l,"form-floating"),(0,i.jsx)(r,{ref:s,className:t()(a,l),...n})}));w.displayName="FormFloating";const g=w,C=o.forwardRef(((e,s)=>{let{controlId:a,as:l="div",...t}=e;const r=(0,o.useMemo)((()=>({controlId:a})),[a]);return(0,i.jsx)(h.Provider,{value:r,children:(0,i.jsx)(l,{...t,ref:s})})}));C.displayName="FormGroup";const k=C;var F=a(2677);const I=o.forwardRef(((e,s)=>{let{as:a="label",bsPrefix:l,column:r=!1,visuallyHidden:n=!1,className:c,htmlFor:d,...m}=e;const{controlId:f}=(0,o.useContext)(h);l=(0,x.vE)(l,"form-label");let p="col-form-label";"string"===typeof r&&(p=`${p} ${p}-${r}`);const u=t()(c,l,n&&"visually-hidden",r&&p);return d=d||f,r?(0,i.jsx)(F.Z,{ref:s,as:"label",className:u,htmlFor:d,...m}):(0,i.jsx)(a,{ref:s,className:u,htmlFor:d,...m})}));I.displayName="FormLabel";const R=I,$=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:l,id:r,...n}=e;const{controlId:c}=(0,o.useContext)(h);return a=(0,x.vE)(a,"form-range"),(0,i.jsx)("input",{...n,type:"range",ref:s,className:t()(l,a),id:r||c})}));$.displayName="FormRange";const S=$,P=o.forwardRef(((e,s)=>{let{bsPrefix:a,size:l,htmlSize:r,className:n,isValid:c=!1,isInvalid:d=!1,id:m,...f}=e;const{controlId:p}=(0,o.useContext)(h);return a=(0,x.vE)(a,"form-select"),(0,i.jsx)("select",{...f,size:r,ref:s,className:t()(n,a,l&&`${a}-${l}`,c&&"is-valid",d&&"is-invalid"),id:m||p})}));P.displayName="FormSelect";const Z=P,E=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:l,as:r="small",muted:n,...o}=e;return a=(0,x.vE)(a,"form-text"),(0,i.jsx)(r,{...o,ref:s,className:t()(l,a,n&&"text-muted")})}));E.displayName="FormText";const L=E,T=o.forwardRef(((e,s)=>(0,i.jsx)(j,{...e,ref:s,type:"switch"})));T.displayName="Switch";const G=Object.assign(T,{Input:j.Input,Label:j.Label}),M=o.forwardRef(((e,s)=>{let{bsPrefix:a,className:l,children:r,controlId:n,label:o,...c}=e;return a=(0,x.vE)(a,"form-floating"),(0,i.jsxs)(k,{ref:s,className:t()(l,a),controlId:n,...c,children:[r,(0,i.jsx)("label",{htmlFor:n,children:o})]})}));M.displayName="FloatingLabel";const z=M,O={_ref:n().any,validated:n().bool,as:n().elementType},U=o.forwardRef(((e,s)=>{let{className:a,validated:l,as:r="form",...n}=e;return(0,i.jsx)(r,{...n,ref:s,className:t()(a,l&&"was-validated")})}));U.displayName="Form",U.propTypes=O;const V=Object.assign(U,{Group:k,Control:N,Floating:g,Check:j,Switch:G,Label:R,Text:L,Range:S,Select:Z,FloatingLabel:z})}}]);
//# sourceMappingURL=961.a2243db7.chunk.js.map