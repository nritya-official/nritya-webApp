"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9164],{70830:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Z});var r=t(72791),o=t(12481),n=t(61224),l=t(59434),i=t(60717),a=t(10159),c=t(47022),d=t(95070),h=t(89743),x=t(2677),p=t(95316),g=t(73528),m=t.n(g),u=t(25498),f=t.n(u),j=t(80925),k=t(92592),b=t(43360),A=t(83708);const y=t.p+"static/media/ticket-logo.af24ee631d260bbbf4b9.png",C=t.p+"static/media/ticket-dance-image-1.c724b50d879e15d44648.png",S=t.p+"static/media/ticket-dance-image-2.e3ad1b92ff7555c543aa.png",I=t.p+"static/media/ticket-dance-image-3.24b4c6f2248645e0cf6a.png",E=t.p+"static/media/ticket-dance-image-4.412a071f48395e8e75fa.png";var N=t(80184);const O={IST:"Asia/Kolkata"};const R=function(e){let{studioName:s,className:t,address:r,timing:o,days:n,customerName:l,timestamp:i,bookingId:a}=e;console.log("Received data:",{studioName:s,className:t,address:r,timing:o,days:n,customerName:l,timestamp:i,bookingId:a});const c=A.A3+"bookings/availFreeTrial/"+a;return(0,N.jsxs)("div",{style:{width:"100%"},children:[(0,N.jsxs)("div",{id:"nritya-ticket-container",className:"nritya-ticket-card",children:[(0,N.jsxs)("div",{className:"nritya-ticket-card-header",children:[(0,N.jsx)(k.Z,{style:{width:120,height:104},src:y,alt:"Logo",roundedCircle:!0}),(0,N.jsx)("br",{}),(0,N.jsx)("h4",{style:{fontSize:"30px"},className:"ticket-text",children:t}),(0,N.jsx)("p",{style:{fontSize:"20px"},className:"ticket-text",children:s}),(0,N.jsx)("p",{style:{fontSize:"18px"},className:"ticket-text",children:r}),(0,N.jsxs)("div",{style:{marginTop:"10px",marginBottom:"26px"},className:"d-flex justify-content-around",children:[(0,N.jsx)(k.Z,{style:{width:70,height:70},src:C,alt:"",roundedCircle:!0}),(0,N.jsx)(k.Z,{style:{width:70,height:70},src:S,alt:"",roundedCircle:!0}),(0,N.jsx)(k.Z,{style:{width:70,height:70},src:I,alt:"",roundedCircle:!0}),(0,N.jsx)(k.Z,{style:{width:70,height:70},src:E,alt:"",roundedCircle:!0})]})]}),(0,N.jsxs)("div",{className:"nritya-ticket-card-body",children:[(0,N.jsxs)("p",{className:"ticket-text",children:["Booked by: ",l]}),(0,N.jsx)("div",{style:{margin:"10px 0"},children:(0,N.jsx)(j.ZP,{value:c,style:{height:"150px",width:"150px"}})}),(0,N.jsxs)("p",{className:"ticket-text",children:["Booking ID:",(0,N.jsx)("br",{}),a]}),(0,N.jsxs)("p",{style:{marginTop:20},className:"ticket-text",children:["Valid till 30 days",(0,N.jsx)("br",{}),function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"IST";return m().unix(e).tz(O[s]).format("DD-MM-YYYY HH:mm:ss")}(i)]}),(0,N.jsx)(k.Z,{style:{width:60,height:60},src:"data:image/png;base64,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",alt:"",roundedCircle:!0}),(0,N.jsx)("p",{style:{fontSize:24},className:"ticket-text",children:"Admit One for Once"})]})]}),(0,N.jsx)(b.Z,{style:{marginTop:12},variant:"primary",onClick:()=>{const e=document.getElementById("nritya-ticket-container");f()(e,{backgroundColor:null}).then((e=>{const s=e.toDataURL("image/png"),t=document.createElement("a");t.href=s,t.download="my-image.png",t.click()}))},children:"Download Ticket"})]})};var D=t(697),w=t(17173),T=t(43896),B=t(20890),L=t(74569),v=t.n(L);const Z=function(){var e,s,t;const{currentUser:g}=(0,n.a)(),m=g.uid,u=(0,l.v9)(i.w),[f,k]=(0,r.useState)([]),[b,y]=(0,r.useState)(!1),[C,S]=(0,r.useState)(null),[I,E]=(0,r.useState)([]),[O,L]=(0,r.useState)(0);(0,r.useEffect)((()=>{const e=`${A.A3}bookings/getUserBookings/${m}`;console.log(e);console.log("fetchBookings ran"),(async()=>{try{const s=await v().get(e);E(s.data)}catch(s){console.error("Error fetching bookings:",s)}})()}),[m]),(0,r.useEffect)((()=>{(async()=>{const e=(0,o.IO)((0,o.hJ)(a.db,A.Ul.FREE_TRIAL_BOOKINGS),(0,o.ar)("user_id","==",m)),s=await(0,o.PL)(e),t=[];s.forEach((e=>{console.log("Bookings....");const s=e.data();console.log(e.id," => ",s),t.push({...s,id:e.id})})),t.sort(((e,s)=>new Date(s.timestamp)-new Date(e.timestamp))),k(t)})()}),[m]);const Z=(e,s)=>(0,N.jsxs)("div",{children:[(0,N.jsx)(c.Z,{fluid:!0,children:(0,N.jsx)(d.Z,{style:{backgroundColor:u?"black":"white",color:u?"white":"black",borderBlockColor:u?"white":"black"},onClick:()=>M(e),children:(0,N.jsxs)(h.Z,{className:"row-3 text-center",children:[(0,N.jsx)(x.Z,{md:2,className:"text-center",children:(0,N.jsx)("div",{style:{background:"#E60023",color:"white",width:"100%",height:"100%"},children:(0,N.jsxs)("p",{style:{fontSize:"small"},children:["Booked On",(0,N.jsx)("br",{}),(0,N.jsx)("span",{style:{fontSize:"3rem"},children:new Date(1e3*e.timestamp).getDate()}),(0,N.jsx)("br",{}),(0,N.jsx)("span",{style:{fontSize:"small"},children:new Date(1e3*e.timestamp).toLocaleDateString("en-US",{month:"short",year:"numeric",timeZone:"Asia/Kolkata"})})]})})}),(0,N.jsxs)(x.Z,{md:4,className:"text-center",children:[(0,N.jsx)("p",{children:e.name_class||e.entity_type}),(0,N.jsx)("p",{children:e.name_studio||"Studio"}),(0,N.jsx)("p",{children:e.studio_address||"Address"}),(0,N.jsxs)("p",{children:["Admit ",e.persons_allowed," for Once"]}),(0,N.jsxs)("p",{children:["Ticket ID: ",e.id]})]}),(0,N.jsxs)(x.Z,{md:4,children:[(0,N.jsxs)("div",{style:{color:u?"#fff":"#000"},children:[(0,N.jsx)("h3",{style:{textAlign:"center",textTransform:"none"},children:"Bill Details"}),(0,N.jsx)("hr",{}),(0,N.jsx)("table",{style:{width:"100%",borderCollapse:"collapse"},children:(0,N.jsxs)("tbody",{children:[(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{style:{padding:"8px 0"},children:(0,N.jsx)("strong",{children:"Price per person:"})}),(0,N.jsxs)("td",{style:{padding:"8px 0",textAlign:"right"},children:["\u20b9",parseInt(e.price_per_person)]})]}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{style:{padding:"8px 0"},children:(0,N.jsx)("strong",{children:"Number of persons:"})}),(0,N.jsx)("td",{style:{padding:"8px 0",textAlign:"right"},children:parseInt(e.persons_allowed)})]}),(0,N.jsx)("tr",{children:(0,N.jsx)("td",{colSpan:"2",style:{padding:"8px 0",textAlign:"center"},children:(0,N.jsx)("hr",{style:{border:"none",borderTop:"1px dotted cyan",margin:"10px 0"}})})}),(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{style:{padding:"8px 0"},children:(0,N.jsx)("strong",{children:"Total Price:"})}),(0,N.jsxs)("td",{style:{padding:"8px 0",textAlign:"right"},children:["\u20b9",parseInt(e.price_per_person)*parseInt(e.persons_allowed)]})]})]})})]}),(0,N.jsx)("h5",{style:{color:e.used?"green":"inherit"},children:e.used&&"Free class Availed"})]})]})})}),(0,N.jsx)("br",{}),(0,N.jsx)("p",{style:{textDecoration:"none"},children:(0,N.jsx)("a",{href:`https://nritya-official.github.io/nritya-webApp/#/studio/${e.associated_studio_id}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:u?"cyan":"black"},children:"Check out the latest details?"})})]},e.id),U={Workshops:null!==I&&void 0!==I&&null!==(e=I.data)&&void 0!==e&&e.Workshops?Object.entries(I.data.Workshops).map((e=>{let[s,t]=e;return{...t,id:s}})):[],OpenClasses:null!==I&&void 0!==I&&null!==(s=I.data)&&void 0!==s&&s.OpenClasses?Object.entries(I.data.OpenClasses).map((e=>{let[s,t]=e;return{...t,id:s}})):[],Courses:null!==I&&void 0!==I&&null!==(t=I.data)&&void 0!==t&&t.Courses?Object.entries(I.data.Courses).map((e=>{let[s,t]=e;return{...t,id:s}})):[]},M=e=>{console.log(C),S(e),y(!0)},G=A.A3+"bookings/availFreeTrial/",P={color:u?"white":"black",textTransform:"none"};return(0,N.jsxs)("div",{style:{backgroundColor:u?"#202020":"white"},children:[(0,N.jsx)("h2",{style:{color:u?"white":"black",textTransform:"none"},children:"My Bookings"}),(0,N.jsxs)(D.Z,{children:[(0,N.jsxs)(w.Z,{value:O,onChange:(e,s)=>L(s),children:[(0,N.jsx)(T.Z,{style:P,label:"Free Trial Bookings"}),(0,N.jsx)(T.Z,{style:P,label:"Workshops"}),(0,N.jsx)(T.Z,{style:P,label:"Open Classes"}),(0,N.jsx)(T.Z,{style:P,label:"Courses"})]}),0===O&&(0,N.jsx)(D.Z,{p:3,children:(0,N.jsxs)("div",{style:{backgroundColor:u?"#202020":"white"},children:[0===f.length?(0,N.jsxs)("div",{children:[(0,N.jsx)("h2",{style:{color:u?"white":"black"},children:"My Bookings"}),(0,N.jsx)("p",{style:{color:u?"white":"black"},children:"No bookings till now."})]}):(0,N.jsx)("div",{children:f.map((e=>(0,N.jsxs)("div",{children:[(0,N.jsxs)(c.Z,{fluid:!0,children:[(0,N.jsx)(d.Z,{style:{backgroundColor:u?"black":"white",color:u?"white":"black",borderBlockColor:u?"white":"black"},onClick:()=>M(e),children:(0,N.jsxs)(h.Z,{className:"row-3 text-center",children:[(0,N.jsx)(x.Z,{md:2,className:"text-center",children:(0,N.jsx)("div",{style:{background:"#E60023",color:"white",alignItems:"center",width:"100%",height:"100%"},children:(0,N.jsxs)("p",{style:{fontSize:"small"},children:["Booked On",(0,N.jsx)("br",{}),(0,N.jsx)("span",{style:{fontSize:"3rem"},children:new Date(1e3*e.timestamp).getDate()}),(0,N.jsx)("br",{}),(0,N.jsx)("span",{style:{fontSize:"small"},children:new Date(1e3*e.timestamp).toLocaleDateString("en-US",{month:"short",year:"numeric",timeZone:"Asia/Kolkata"})})]})})}),(0,N.jsxs)(x.Z,{md:4,className:"text-center",children:[(0,N.jsx)("p",{children:e.name_class}),(0,N.jsx)("p",{children:e.name_studio}),(0,N.jsx)("p",{children:e.studio_address})]}),(0,N.jsx)(x.Z,{md:2,className:"text-center",children:(0,N.jsx)("div",{style:{justifyContent:"center",alignItems:"center",display:"flex",paddingTop:"1rem"},children:(0,N.jsx)(j.ZP,{value:G+e.id,size:100})})}),(0,N.jsxs)(x.Z,{md:4,children:[(0,N.jsx)("p",{children:e.name_learner}),(0,N.jsx)("p",{children:"Admit One for Once"}),(0,N.jsx)("h5",{style:{color:e.used?"green":"inherit"},children:e.used&&"Free class Availed"})]})]})}),(0,N.jsx)("p",{style:{textDecoration:"none"},children:(0,N.jsx)("a",{href:`https://nritya-official.github.io/nritya-webApp/#/studio/${e.studio_id}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:u?"cyan":"black"},children:"Check out the latest class timings?"})})]}),(0,N.jsx)("br",{})]},e.id)))}),(0,N.jsxs)(p.Z,{show:b,onHide:()=>{y(!1)},children:[(0,N.jsx)(p.Z.Header,{closeButton:!0,children:(0,N.jsx)(p.Z.Title,{children:"Ticket Details"})}),(0,N.jsx)(p.Z.Body,{children:C&&(0,N.jsx)(R,{studioName:C.name_studio,className:C.name_class,address:C.studio_address,timing:C.studio_timing,days:C.studio_days,customerName:C.name_learner,timestamp:C.timestamp,bookingId:C.id})})]})]})}),1===O&&(0,N.jsx)(D.Z,{p:3,children:U.Workshops.length>0?U.Workshops.map((e=>Z(e))):(0,N.jsx)(B.Z,{style:{color:u?"white":"black"},children:"No Workshop bookings available."})}),2===O&&(0,N.jsx)(D.Z,{p:3,children:U.OpenClasses.length>0?U.OpenClasses.map((e=>Z(e))):(0,N.jsx)(B.Z,{style:{color:u?"white":"black"},children:"No Open Classes bookings available."})}),3===O&&(0,N.jsx)(D.Z,{p:3,children:U.Courses.length>0?U.Courses.map((e=>Z(e))):(0,N.jsx)(B.Z,{style:{color:u?"white":"black"},children:"No Courses bookings available."})})]})]})}},83708:(e,s,t)=>{t.d(s,{A3:()=>g,DM:()=>c,QP:()=>m,RY:()=>d,Rb:()=>p,Ul:()=>x,i0:()=>l,lt:()=>h,n$:()=>n,uM:()=>a,zq:()=>i});var r=t(59135),o=t(80184);const n={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},l={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},i={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},a={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},c={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},d={[i.ALL]:c.GREEN,[i.BEGINNERS]:c.BLUE,[i.INTERMEDIATE]:c.YELLOW,[i.ADVANCED]:c.RED},h=[c.PURPLE,c.ORANGE,c.TEAL,c.LIME],x={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},p={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},g="https://nrityaserver-2b241e0a97e5.herokuapp.com/",m={AC:(0,o.jsx)(r.l51,{}),"Free Wifi":(0,o.jsx)(r._0,{}),"RO Water":(0,o.jsx)(r.EXY,{}),Toilet:(0,o.jsx)(r.Iev,{}),"Power Backup":(0,o.jsx)(r.eKD,{}),"Fire Extinguisher":(0,o.jsx)(r.Ybg,{}),"First Aid Kit":(0,o.jsx)(r.FZx,{}),"CCTV Camera":(0,o.jsx)(r.KoQ,{}),"Card Payment":(0,o.jsx)(r.ypE,{}),"Parking Space":(0,o.jsx)(r.mxg,{})}}}]);
//# sourceMappingURL=9164.99014d8b.chunk.js.map