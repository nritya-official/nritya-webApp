"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9164],{70830:(e,o,t)=>{t.r(o),t.d(o,{default:()=>D});var s=t(72791),r=t(12481),n=t(61224),i=t(59434),c=t(60717),a=t(10159),l=t(47022),d=t(95070),h=t(89743),f=t(2677),m=t(95316),u=t(73528),g=t.n(u),x=t(25498),A=t.n(x),k=t(80925),I=t(92592),S=t(43360),C=t(83708);const b=t.p+"static/media/ticket-logo.af24ee631d260bbbf4b9.png",p=t.p+"static/media/ticket-dance-image-1.c724b50d879e15d44648.png",E=t.p+"static/media/ticket-dance-image-2.e3ad1b92ff7555c543aa.png",j=t.p+"static/media/ticket-dance-image-3.24b4c6f2248645e0cf6a.png",N=t.p+"static/media/ticket-dance-image-4.412a071f48395e8e75fa.png";var R=t(80184);const y={IST:"Asia/Kolkata"};const O=function(e){let{studioName:o,className:t,address:s,timing:r,days:n,customerName:i,timestamp:c,bookingId:a}=e;console.log("Received data:",{studioName:o,className:t,address:s,timing:r,days:n,customerName:i,timestamp:c,bookingId:a});const l=C.A3+"bookings/availFreeTrial/"+a;return(0,R.jsxs)("div",{style:{width:"100%"},children:[(0,R.jsxs)("div",{id:"nritya-ticket-container",className:"nritya-ticket-card",children:[(0,R.jsxs)("div",{className:"nritya-ticket-card-header",children:[(0,R.jsx)(I.Z,{style:{width:120,height:104},src:b,alt:"Logo",roundedCircle:!0}),(0,R.jsx)("br",{}),(0,R.jsx)("h4",{style:{fontSize:"30px"},className:"ticket-text",children:t}),(0,R.jsx)("p",{style:{fontSize:"20px"},className:"ticket-text",children:o}),(0,R.jsx)("p",{style:{fontSize:"18px"},className:"ticket-text",children:s}),(0,R.jsxs)("div",{style:{marginTop:"10px",marginBottom:"26px"},className:"d-flex justify-content-around",children:[(0,R.jsx)(I.Z,{style:{width:70,height:70},src:p,alt:"",roundedCircle:!0}),(0,R.jsx)(I.Z,{style:{width:70,height:70},src:E,alt:"",roundedCircle:!0}),(0,R.jsx)(I.Z,{style:{width:70,height:70},src:j,alt:"",roundedCircle:!0}),(0,R.jsx)(I.Z,{style:{width:70,height:70},src:N,alt:"",roundedCircle:!0})]})]}),(0,R.jsxs)("div",{className:"nritya-ticket-card-body",children:[(0,R.jsxs)("p",{className:"ticket-text",children:["Booked by: ",i]}),(0,R.jsx)("div",{style:{margin:"10px 0"},children:(0,R.jsx)(k.ZP,{value:l,style:{height:"150px",width:"150px"}})}),(0,R.jsxs)("p",{className:"ticket-text",children:["Booking ID:",(0,R.jsx)("br",{}),a]}),(0,R.jsxs)("p",{style:{marginTop:20},className:"ticket-text",children:["Valid till 30 days",(0,R.jsx)("br",{}),function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"IST";return g().unix(e).tz(y[o]).format("DD-MM-YYYY HH:mm:ss")}(c)]}),(0,R.jsx)(I.Z,{style:{width:60,height:60},src:"data:image/png;base64,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",alt:"",roundedCircle:!0}),(0,R.jsx)("p",{style:{fontSize:24},className:"ticket-text",children:"Admit One for Once"})]})]}),(0,R.jsx)(S.Z,{style:{marginTop:12},variant:"primary",onClick:()=>{const e=document.getElementById("nritya-ticket-container");A()(e,{backgroundColor:null}).then((e=>{const o=e.toDataURL("image/png"),t=document.createElement("a");t.href=o,t.download="my-image.png",t.click()}))},children:"Download Ticket"})]})};const D=function(){const{currentUser:e}=(0,n.a)(),o=e.uid,t=(0,i.v9)(c.w),[u,g]=(0,s.useState)([]),[x,A]=(0,s.useState)(!1),[I,S]=(0,s.useState)(null);(0,s.useEffect)((()=>{(async()=>{const e=(0,r.IO)((0,r.hJ)(a.db,C.Ul.FREE_TRIAL_BOOKINGS),(0,r.ar)("user_id","==",o)),t=await(0,r.PL)(e),s=[];t.forEach((e=>{console.log("Bookings....");const o=e.data();console.log(e.id," => ",o),s.push({...o,id:e.id})})),s.sort(((e,o)=>new Date(o.timestamp)-new Date(e.timestamp))),console.log(s),g(s)})()}),[o]);const b=C.A3+"bookings/availFreeTrial/";return(0,R.jsxs)("div",{style:{backgroundColor:t?"#202020":"white"},children:[0===u.length?(0,R.jsxs)("div",{children:[(0,R.jsx)("h2",{style:{color:t?"white":"black"},children:"My Bookings"}),(0,R.jsx)("p",{style:{color:t?"white":"black"},children:"No bookings till now."})]}):(0,R.jsxs)("div",{children:[(0,R.jsx)("h2",{style:{color:t?"white":"black"},children:"My Bookings"}),u.map((e=>(0,R.jsxs)("div",{children:[(0,R.jsxs)(l.Z,{fluid:!0,children:[(0,R.jsx)(d.Z,{style:{backgroundColor:t?"black":"white",color:t?"white":"black",borderBlockColor:t?"white":"black"},onClick:()=>(e=>{console.log(I),S(e),A(!0)})(e),children:(0,R.jsxs)(h.Z,{className:"row-3 text-center",children:[(0,R.jsx)(f.Z,{md:2,className:"text-center",children:(0,R.jsx)("div",{style:{background:"#E60023",color:"white",alignItems:"center",width:"100%",height:"100%"},children:(0,R.jsxs)("p",{style:{fontSize:"small"},children:["Booked On",(0,R.jsx)("br",{}),(0,R.jsx)("span",{style:{fontSize:"3rem"},children:new Date(1e3*e.timestamp).getDate()}),(0,R.jsx)("br",{}),(0,R.jsx)("span",{style:{fontSize:"small"},children:new Date(1e3*e.timestamp).toLocaleDateString("en-US",{month:"short",year:"numeric",timeZone:"Asia/Kolkata"})})]})})}),(0,R.jsxs)(f.Z,{md:4,className:"text-center",children:[(0,R.jsx)("p",{children:e.name_class}),(0,R.jsx)("p",{children:e.name_studio}),(0,R.jsx)("p",{children:e.studio_address})]}),(0,R.jsx)(f.Z,{md:2,className:"text-center",children:(0,R.jsx)("div",{style:{justifyContent:"center",alignItems:"center",display:"flex",paddingTop:"1rem"},children:(0,R.jsx)(k.ZP,{value:b+e.id,size:100})})}),(0,R.jsxs)(f.Z,{md:4,children:[(0,R.jsx)("p",{children:e.name_learner}),(0,R.jsx)("p",{children:"Admit One for Once"}),(0,R.jsx)("h5",{style:{color:e.used?"green":"inherit"},children:e.used&&"Free class Availed"})]})]})}),(0,R.jsx)("p",{style:{textDecoration:"none"},children:(0,R.jsx)("a",{href:`https://nritya-official.github.io/nritya-webApp/#/studio/${e.studio_id}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:t?"cyan":"black"},children:"Check out the latest class timings?"})})]}),(0,R.jsx)("br",{})]},e.id)))]}),(0,R.jsxs)(m.Z,{show:x,onHide:()=>{A(!1)},children:[(0,R.jsx)(m.Z.Header,{closeButton:!0,children:(0,R.jsx)(m.Z.Title,{children:"Ticket Details"})}),(0,R.jsx)(m.Z.Body,{children:I&&(0,R.jsx)(O,{studioName:I.name_studio,className:I.name_class,address:I.studio_address,timing:I.studio_timing,days:I.studio_days,customerName:I.name_learner,timestamp:I.timestamp,bookingId:I.id})})]})]})}},83708:(e,o,t)=>{t.d(o,{A3:()=>u,QP:()=>g,RY:()=>d,Rb:()=>m,Ul:()=>f,i0:()=>i,lt:()=>h,n$:()=>n,uM:()=>a,zq:()=>c});var s=t(59135),r=t(80184);const n={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},i={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},c={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},a={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},l={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},d={[c.ALL]:l.GREEN,[c.BEGINNERS]:l.BLUE,[c.INTERMEDIATE]:l.YELLOW,[c.ADVANCED]:l.RED},h=[l.PURPLE,l.ORANGE,l.TEAL,l.LIME],f={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},m={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},u="https://nrityaserver-2b241e0a97e5.herokuapp.com/",g={AC:(0,r.jsx)(s.l51,{}),"Free Wifi":(0,r.jsx)(s._0,{}),"RO Water":(0,r.jsx)(s.EXY,{}),Toilet:(0,r.jsx)(s.Iev,{}),"Power Backup":(0,r.jsx)(s.eKD,{}),"Fire Extinguisher":(0,r.jsx)(s.Ybg,{}),"First Aid Kit":(0,r.jsx)(s.FZx,{}),"CCTV Camera":(0,r.jsx)(s.KoQ,{}),"Card Payment":(0,r.jsx)(s.ypE,{}),"Parking Space":(0,r.jsx)(s.mxg,{})}}}]);
//# sourceMappingURL=9164.48b7eacc.chunk.js.map