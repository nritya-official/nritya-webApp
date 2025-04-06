"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[7295],{88726:(e,r,t)=>{t.d(r,{Z:()=>c});var o=t(72791),s=t(56355),a=t(59434),n=t(60717),l=t(80184);const i={small:16,medium:24,large:32},c=e=>{let{rating:r,onRatingChange:t,viewMode:c,starSize:d="small"}=e;const[f,m]=(0,o.useState)(0),u=(0,a.v9)(n.w),x=()=>{c||m(0)},g=e=>{const o=(f||r)>=e,a=e-.5<=(f||r)&&(f||r)<e,n={key:e,style:c?{cursor:"default"}:{cursor:"pointer"},onClick:()=>(e=>{c||t(e)})(e),onMouseOver:()=>(e=>{c||m(e)})(e),onMouseLeave:x};return(0,l.jsx)("span",{...n,children:o?(0,l.jsx)(s.QJe,{size:i[d],color:"#ffc107"}):a?(0,l.jsx)(s._on,{size:i[d],color:"#ffc107"}):(0,l.jsx)(s.QJe,{size:i[d],color:"#e4e5e9"})})};return(0,l.jsx)("div",{style:{color:u?"white":"black"},children:(()=>{const e=[];for(let r=1;r<=5;r++)e.push(g(r));return e})()})}},37295:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var o=t(72791),s=t(95070),a=t(45736),n=t(56144),l=t(43360),i=t(56355),c=t(80184);const d=function(e){const r=Math.round(2*parseFloat(e.rating))/2;console.log(r,e.rating);const t=Math.floor(r),o=r-t,s=5-t-o,a=[];for(let n=0;n<t;n++)a.push((0,c.jsx)(i.QJe,{color:"yellow"},"star-".concat(n)));o>0&&a.push((0,c.jsx)(i.QJe,{color:"yellow"},"star-half"));for(let n=0;n<s;n++)a.push((0,c.jsx)(i.jJN,{color:"yellow"},"star-empty-".concat(n)));return(0,c.jsx)(c.Fragment,{children:a})};var f=t(30276),m=t(10159),u=t(83708),x=t(88726),g=t(59434),h=t(60717);const p=function(e){let{studioName:r,studioAddress:t,studioTiming:p,studioPrice:b,studioInstructors:N,studioDanceStyles:j,studioContactNumber:E,studioId:S,averageRating:y,forceSmallView:C}=e;const v=(0,g.v9)(h.w),[I,R]=(0,o.useState)(null);(0,o.useEffect)((()=>{if(S){const r="".concat(u.Rb.STUDIOICON,"/").concat(S),t=(0,f.iH)(m.tO,r);try{(0,f.aF)(t).then((e=>{if(e.items.length>0){const r=e.items[0];(0,f.Jt)(r).then((e=>{R(e)})).catch((e=>{console.error("Error fetching studio icon:",e)}))}else console.log("No files found in the folder.")})).catch((e=>{console.error("Error listing files in the folder:",e)}))}catch(e){console.error("Error fetching studio icon:",e)}}}),[S]);const k=(0,c.jsxs)(s.Z,{className:"cardContainer ".concat(v?"darkMode":""),children:[(0,c.jsx)(s.Z.Img,{variant:"top",src:I||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg",className:"cardImg"}),(0,c.jsxs)(s.Z.Body,{children:[(0,c.jsx)(s.Z.Text,{className:"cardText",children:r}),j&&j.split(",").slice(0,3).map(((e,r)=>(0,c.jsx)(a.Z,{bg:r%2===0?"danger":"warning",className:"badge me-2 rounded-pill",children:e.trim()},r))),(0,c.jsx)(x.Z,{rating:y,viewMode:!0}),(0,c.jsxs)("div",{className:"starRatingContainer",children:[(0,c.jsx)(i.Pau,{size:14,className:"mapMarkerIcon me-2"}),(0,c.jsx)(s.Z.Text,{children:t})]})]})]}),O=(0,c.jsx)(s.Z,{style:{backgroundColor:v?"#333333":"white"},text:v?"white":"dark",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"d-block d-md-none",children:(0,c.jsx)("div",{style:{borderRadius:"5%",overflow:"hidden",border:"1px solid #64FFDA",marginBottom:"10px",height:"250px",width:"100%"},children:(0,c.jsx)("img",{className:"d-block w-100",src:I||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg",style:{height:"100%",width:"100%",objectFit:"cover"},alt:"pic"})})}),(0,c.jsxs)(s.Z.Body,{children:[(0,c.jsxs)("div",{className:"d-block d-md-none",children:[(0,c.jsx)(s.Z.Title,{style:{fontSize:"1.5rem",textAlign:"left",marginBottom:"10px"},children:r}),(0,c.jsx)(s.Z.Subtitle,{style:{fontSize:"0.8rem",textAlign:"left",marginBottom:"10px",textTransform:"none",wordBreak:"break-word"},children:S}),(0,c.jsxs)(s.Z.Subtitle,{style:{fontSize:"0.9rem",textAlign:"left",marginBottom:"10px",textTransform:"none",wordBreak:"break-word"},children:["4.2 ",(0,c.jsx)(d,{rating:"4.2"})," 350(ratings)"]}),(0,c.jsxs)(s.Z.Text,{style:{fontSize:"1.0rem",color:"#E4A11B",textAlign:"left",wordBreak:"break-word"},children:["Instructor: ",N]}),(0,c.jsx)(s.Z.Text,{style:{fontSize:"1.0rem",textAlign:"left"},children:t}),(0,c.jsxs)(s.Z.Text,{style:{fontSize:"1.0rem",textAlign:"left"},children:["Timing: ",p]}),(0,c.jsxs)(s.Z.Text,{style:{fontSize:"1.0rem",textAlign:"left"},children:["Price: ",b]}),console.log(j),j&&j.split(",").map(((e,r)=>(0,c.jsx)(a.Z,{bg:r%2===0?"danger":"info",className:"me-2 rounded-pill",style:{marginBottom:"10px",fontSize:"0.8rem"},children:e.trim()},r))),(0,c.jsx)("div",{className:"d-flex justify-content-center",children:(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(l.Z,{variant:"outline-info",className:"me-2 rounded-pill",size:"sm",style:{fontSize:"0.6rem"},children:(0,c.jsx)("a",{href:"tel:"+E,style:{textDecoration:"none",color:"inherit"},children:"Call"})}),(0,c.jsx)(l.Z,{variant:"outline-info",className:"me-2 rounded-pill",size:"sm",style:{fontSize:"0.6rem"},children:(0,c.jsx)("a",{href:"https://wa.me/"+E,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:"WhatsApp"})})]})})]}),(0,c.jsxs)("div",{style:{backgroundColor:"#000000",display:"grid",gridTemplateColumns:"1fr 2fr"},children:[(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px"},children:[(0,c.jsx)("div",{className:"d-none d-md-block",children:(0,c.jsx)("div",{style:{overflow:"hidden",marginBottom:"10px",height:"100%",width:"100%"},children:(0,c.jsx)("img",{className:"d-block w-100",src:I||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg",style:{height:"100%",width:"100%",objectFit:"cover"},alt:"pic"})})}),(0,c.jsx)("a",{href:"#/studio/"+S,children:(0,c.jsx)(l.Z,{variant:"outline-warning",className:"me-2 rounded-pill mb-2 d-flex justify-content-center align-items-center",size:"sm",style:{fontSize:"1.4rem"},children:"Explore"})}),(0,c.jsx)("div",{className:"d-none d-md-flex justify-content-center",children:(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(l.Z,{variant:"outline-info",className:"me-2 rounded-pill",size:"sm",style:{fontSize:"0.6rem"},children:(0,c.jsx)("a",{href:"tel:"+E,style:{textDecoration:"none",color:"inherit"},children:"Call"})}),(0,c.jsx)(l.Z,{variant:"outline-info",className:"me-2 rounded-pill",size:"sm",style:{fontSize:"0.6rem"},children:(0,c.jsx)("a",{href:"https://wa.me/"+E,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:"WhatsApp"})})]})})]}),(0,c.jsxs)("div",{className:"d-none d-md-block",style:{padding:"20px"},children:[(0,c.jsx)(s.Z.Title,{style:{fontSize:"1.5rem",textAlign:"left",marginBottom:"10px"},children:r}),(0,c.jsx)(s.Z.Subtitle,{style:{fontSize:"0.8rem",textAlign:"left",marginBottom:"10px",textTransform:"none",wordBreak:"break-word"},children:S}),(0,c.jsxs)(s.Z.Subtitle,{style:{fontSize:"0.9rem",textAlign:"left",marginBottom:"10px",textTransform:"none",wordBreak:"break-word"},children:["4.2 ",(0,c.jsx)(d,{rating:"4.2"})," 350(ratings)"]}),(0,c.jsxs)(s.Z.Text,{style:{fontSize:"1.0rem",color:"#E4A11B",textAlign:"left",wordBreak:"break-word"},children:["Instructor: ",N]}),(0,c.jsx)(s.Z.Text,{style:{fontSize:"1.0rem",textAlign:"left"},children:t}),console.log(j),j&&j.split(",").map(((e,r)=>(0,c.jsx)(a.Z,{bg:r%2===0?"danger":"info",className:"me-2 rounded-pill",style:{marginBottom:"10px",fontSize:"0.8rem"},children:e.trim()},r))),(0,c.jsx)("br",{})]})]})]})]})},"dark1");return(0,c.jsx)("div",{children:1===C?k:O})};const b=function(){const[e,r]=(0,o.useState)([]),[t,s]=(0,o.useState)(""),[a,n]=(0,o.useState)(!1),[l,i]=(0,o.useState)(null),d=(0,o.useCallback)((async()=>{n(!0),i(null);try{const e=await fetch("http://localhost:5000/search?query=".concat(t));if(!e.ok)throw new Error("Network response was not ok");const o=await e.json();r(o)}catch(l){i(l)}finally{n(!1)}}),[t]);return(0,o.useEffect)((()=>{d(),console.log(e)}),[d]),(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"Search"}),(0,c.jsx)("input",{type:"text",placeholder:"Search...",value:t,onChange:e=>s(e.target.value)}),a?(0,c.jsx)("p",{children:"Loading..."}):l?(0,c.jsxs)("p",{children:["Error: ",l.message]}):(0,c.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:e.map((e=>(0,c.jsx)("div",{style:{flex:"50%",padding:"10px"},children:(0,c.jsx)(p,{studioName:e.studioName,studioAddress:e.address,studioTiming:e.timing,studioPrice:e.price,studioInstructors:e.instructors,studioDanceStyles:e.danceStyles,studioContactNumber:e.contactNumber,studioId:e.studioId})},e.UserId)))})]})}},83708:(e,r,t)=>{t.d(r,{A3:()=>g,DM:()=>d,Hi:()=>h,QP:()=>p,RY:()=>f,Rb:()=>x,Ul:()=>u,i0:()=>n,lt:()=>m,n$:()=>a,rM:()=>i,uM:()=>c,zq:()=>l});var o=t(56355),s=t(80184);const a={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},n={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},l={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},i={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},c={CLOUD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},f={[l.ALL]:d.GREEN,[l.BEGINNERS]:d.BLUE,[l.INTERMEDIATE]:d.YELLOW,[l.ADVANCED]:d.RED},m=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],u={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},x={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},g="https://nrityaserver-2b241e0a97e5.herokuapp.com/",h="https://firebasestorage.googleapis.com/v0/b/nritya-7e526.appspot.com/o/RichEmailImages%2FDance3.jpg?alt=media&token=d7d41929-39c1-40d1-ad6a-1b2281769e84",p={AC:(0,s.jsx)(o.l51,{}),"Free Wifi":(0,s.jsx)(o._0,{}),"RO Water":(0,s.jsx)(o.EXY,{}),Toilet:(0,s.jsx)(o.Iev,{}),"Power Backup":(0,s.jsx)(o.eKD,{}),"Fire Extinguisher":(0,s.jsx)(o.Ybg,{}),"First Aid Kit":(0,s.jsx)(o.FZx,{}),"CCTV Camera":(0,s.jsx)(o.KoQ,{}),"Card Payment":(0,s.jsx)(o.ypE,{}),"Parking Space":(0,s.jsx)(o.mxg,{})}},15341:(e,r,t)=>{t.d(r,{FT:()=>n,ZP:()=>i});var o=t(72791),s=t(80184);const a=["as","disabled"];function n(e){let{tagName:r,disabled:t,href:o,target:s,rel:a,role:n,onClick:l,tabIndex:i=0,type:c}=e;r||(r=null!=o||null!=s||null!=a?"a":"button");const d={tagName:r};if("button"===r)return[{type:c||"button",disabled:t},d];const f=e=>{(t||"a"===r&&function(e){return!e||"#"===e.trim()}(o))&&e.preventDefault(),t?e.stopPropagation():null==l||l(e)};return"a"===r&&(o||(o="#"),t&&(o=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:t?void 0:i,href:o,target:"a"===r?s:void 0,"aria-disabled":t||void 0,rel:"a"===r?a:void 0,onClick:f,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),f(e))}},d]}const l=o.forwardRef(((e,r)=>{let{as:t,disabled:o}=e,l=function(e,r){if(null==e)return{};var t,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);const[i,{tagName:c}]=n(Object.assign({tagName:t,disabled:o},l));return(0,s.jsx)(c,Object.assign({},l,i,{ref:r}))}));l.displayName="Button";const i=l},45736:(e,r,t)=>{t.d(r,{Z:()=>c});var o=t(41418),s=t.n(o),a=t(72791),n=t(10162),l=t(80184);const i=a.forwardRef(((e,r)=>{let{bsPrefix:t,bg:o="primary",pill:a=!1,text:i,className:c,as:d="span",...f}=e;const m=(0,n.vE)(t,"badge");return(0,l.jsx)(d,{ref:r,...f,className:s()(c,m,a&&"rounded-pill",i&&"text-".concat(i),o&&"bg-".concat(o))})}));i.displayName="Badge";const c=i},43360:(e,r,t)=>{t.d(r,{Z:()=>d});var o=t(41418),s=t.n(o),a=t(72791),n=t(15341),l=t(10162),i=t(80184);const c=a.forwardRef(((e,r)=>{let{as:t,bsPrefix:o,variant:a="primary",size:c,active:d=!1,disabled:f=!1,className:m,...u}=e;const x=(0,l.vE)(o,"btn"),[g,{tagName:h}]=(0,n.FT)({tagName:t,disabled:f,...u}),p=h;return(0,i.jsx)(p,{...g,...u,ref:r,disabled:f,className:s()(m,x,d&&"active",a&&"".concat(x,"-").concat(a),c&&"".concat(x,"-").concat(c),u.href&&f&&"disabled")})}));c.displayName="Button";const d=c},56144:(e,r,t)=>{t.d(r,{Z:()=>c});var o=t(41418),s=t.n(o),a=t(72791),n=t(10162),l=t(80184);const i=a.forwardRef(((e,r)=>{let{bsPrefix:t,size:o,vertical:a=!1,className:i,role:c="group",as:d="div",...f}=e;const m=(0,n.vE)(t,"btn-group");let u=m;return a&&(u="".concat(m,"-vertical")),(0,l.jsx)(d,{...f,ref:r,role:c,className:s()(i,u,o&&"".concat(m,"-").concat(o))})}));i.displayName="ButtonGroup";const c=i},95070:(e,r,t)=>{t.d(r,{Z:()=>w});var o=t(41418),s=t.n(o),a=t(72791),n=t(10162),l=t(80184);const i=a.forwardRef(((e,r)=>{let{className:t,bsPrefix:o,as:a="div",...i}=e;return o=(0,n.vE)(o,"card-body"),(0,l.jsx)(a,{ref:r,className:s()(t,o),...i})}));i.displayName="CardBody";const c=i,d=a.forwardRef(((e,r)=>{let{className:t,bsPrefix:o,as:a="div",...i}=e;return o=(0,n.vE)(o,"card-footer"),(0,l.jsx)(a,{ref:r,className:s()(t,o),...i})}));d.displayName="CardFooter";const f=d;var m=t(96040);const u=a.forwardRef(((e,r)=>{let{bsPrefix:t,className:o,as:i="div",...c}=e;const d=(0,n.vE)(t,"card-header"),f=(0,a.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,l.jsx)(m.Z.Provider,{value:f,children:(0,l.jsx)(i,{ref:r,...c,className:s()(o,d)})})}));u.displayName="CardHeader";const x=u,g=a.forwardRef(((e,r)=>{let{bsPrefix:t,className:o,variant:a,as:i="img",...c}=e;const d=(0,n.vE)(t,"card-img");return(0,l.jsx)(i,{ref:r,className:s()(a?"".concat(d,"-").concat(a):d,o),...c})}));g.displayName="CardImg";const h=g,p=a.forwardRef(((e,r)=>{let{className:t,bsPrefix:o,as:a="div",...i}=e;return o=(0,n.vE)(o,"card-img-overlay"),(0,l.jsx)(a,{ref:r,className:s()(t,o),...i})}));p.displayName="CardImgOverlay";const b=p,N=a.forwardRef(((e,r)=>{let{className:t,bsPrefix:o,as:a="a",...i}=e;return o=(0,n.vE)(o,"card-link"),(0,l.jsx)(a,{ref:r,className:s()(t,o),...i})}));N.displayName="CardLink";const j=N;var E=t(27472);const S=(0,E.Z)("h6"),y=a.forwardRef(((e,r)=>{let{className:t,bsPrefix:o,as:a=S,...i}=e;return o=(0,n.vE)(o,"card-subtitle"),(0,l.jsx)(a,{ref:r,className:s()(t,o),...i})}));y.displayName="CardSubtitle";const C=y,v=a.forwardRef(((e,r)=>{let{className:t,bsPrefix:o,as:a="p",...i}=e;return o=(0,n.vE)(o,"card-text"),(0,l.jsx)(a,{ref:r,className:s()(t,o),...i})}));v.displayName="CardText";const I=v,R=(0,E.Z)("h5"),k=a.forwardRef(((e,r)=>{let{className:t,bsPrefix:o,as:a=R,...i}=e;return o=(0,n.vE)(o,"card-title"),(0,l.jsx)(a,{ref:r,className:s()(t,o),...i})}));k.displayName="CardTitle";const O=k,A=a.forwardRef(((e,r)=>{let{bsPrefix:t,className:o,bg:a,text:i,border:d,body:f=!1,children:m,as:u="div",...x}=e;const g=(0,n.vE)(t,"card");return(0,l.jsx)(u,{ref:r,...x,className:s()(o,g,a&&"bg-".concat(a),i&&"text-".concat(i),d&&"border-".concat(d)),children:f?(0,l.jsx)(c,{children:m}):m})}));A.displayName="Card";const w=Object.assign(A,{Img:h,Title:O,Subtitle:C,Body:c,Link:j,Text:I,Header:x,Footer:f,ImgOverlay:b})},96040:(e,r,t)=>{t.d(r,{Z:()=>s});const o=t(72791).createContext(null);o.displayName="CardHeaderContext";const s=o},27472:(e,r,t)=>{t.d(r,{Z:()=>l});var o=t(72791),s=t(41418),a=t.n(s),n=t(80184);const l=e=>o.forwardRef(((r,t)=>(0,n.jsx)("div",{...r,ref:t,className:a()(r.className,e)})))}}]);
//# sourceMappingURL=7295.d3f89c98.chunk.js.map