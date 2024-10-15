"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[6853],{66853:(e,o,r)=>{r.r(o),r.d(o,{default:()=>D});var n=r(72791),t=r(697),s=r(13239),l=r(61889),a=r(20890),i=r(36314),c=r(94294),d=r(81918),h=r(13400),u=r(5574),g=r(65661),f=r(39157),x=r(79836),p=r(56890),b=r(35855),m=r(53994),C=r(53382),k=r(97123),j=r(57689),E=r(59434),S=r(83708),w=r(68449),I=r(60717),y=r(59135),R=r(75424),O=r(18406),v=r(49071),N=r(10884),Z=r(80184);const D=function(){var e,o,r,D,U,A,P;const{courseId:T}=(0,j.UO)();console.log("From CourseFullPage,",T);const L=(0,j.s0)(),$=(0,R.D)(),F=(0,E.v9)(I.w),[B,_]=(0,n.useState)(null),[M,W]=(0,n.useState)(null),[G,H]=(0,n.useState)(1),[K,V]=(0,n.useState)(!1),J=null===(e=JSON.parse(localStorage.getItem("userInfo")))||void 0===e?void 0:e.UserId,Y=null===(o=JSON.parse(localStorage.getItem("userInfo")))||void 0===o?void 0:o.email,X=M&&G?M.price*G+S.lX:0;if(console.log("CourseFullPage before useEffect"),(0,n.useEffect)((()=>{T&&((async()=>{console.log("CourseFullPage fetchData");try{const e=await(0,w.Ld)(S.Ul.COURSES,T);if(console.log("CourseFullPage fetchData data",e),W(e),console.log("CourseFullPage before useEffect",e),e&&e.StudioId){const o=await(0,w.Ld)(S.Ul.STUDIO,e.StudioId);W((e=>({...e,studioDetails:o})))}}catch(e){console.error("Error fetching workshop data:",e),$("Failed to load workshop details.","error")}})(),(async()=>{try{const e=await(0,w.Us)(S.Rb.COURSEICON,T);_(e||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}catch(e){console.error("Error fetching image URL:",e),_("https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}})())}),[T,$]),!M)return(0,Z.jsx)(t.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,Z.jsx)(s.Z,{color:"primary"})});const z=encodeURIComponent("Hey, I found your Studio on nritya.co.in. I'm interested"),q=()=>{V(!1)};return(0,Z.jsxs)(t.Z,{sx:{padding:"0rem",minHeight:"100vh",color:F?"white":"black"},children:[(0,Z.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,Z.jsx)(l.ZP,{item:!0,xs:12,lg:8,children:(0,Z.jsx)(t.Z,{component:"img",src:B,alt:M.courseName||M.workshopName||"Course Image",sx:{width:"100%",height:"auto",objectFit:"cover",borderRadius:"8px"}})}),(0,Z.jsx)(l.ZP,{item:!0,xs:12,lg:4,children:(0,Z.jsxs)(t.Z,{sx:{bgcolor:F?"#333333":"#efefef",p:3,borderRadius:"8px",display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"},children:[(0,Z.jsxs)(t.Z,{children:[(0,Z.jsx)(a.Z,{variant:"h4",style:{color:F?"white":"black",textTransform:"none",textDecoration:"none"},children:M.courseName||M.workshopName||"Open Class Name"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(a.Z,{variant:"subtitle ",style:{color:F?"white":"black"},children:M.date}),(0,Z.jsx)("br",{}),(0,Z.jsx)(a.Z,{variant:"subtitle",style:{color:F?"white":"black"},children:M.time}),(0,Z.jsx)(a.Z,{variant:"body1",sx:{mt:"1rem",color:F?"white":"black"},children:M.city||"City"})]}),(0,Z.jsxs)(t.Z,{sx:{mt:"2rem",display:"flex",flexDirection:"column",gap:"1rem",color:F?"white":"black"},children:[(0,Z.jsx)("table",{style:{width:"100%",borderCollapse:"collapse"},children:(0,Z.jsxs)("tbody",{children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:{padding:"8px",color:F?"white":"black"},children:M&&M.price&&(0,Z.jsx)("span",{children:"Price per person"})}),(0,Z.jsx)("td",{style:{padding:"8px",color:F?"white":"black"},children:M&&M.price&&(0,Z.jsxs)("span",{children:[" \u20b9",M.price]})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:{padding:"8px",color:F?"white":"black"},children:(0,Z.jsx)("span",{sx:{color:F?"white":"black"},children:"Person(s)"})}),(0,Z.jsx)("td",{style:{padding:"8px"},children:(0,Z.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",gap:"1rem"},children:(0,Z.jsxs)(i.Z,{direction:"row",spacing:0,alignItems:"center",children:[(0,Z.jsx)(c.Z,{variant:"contained",onClick:()=>H((e=>Math.max(e-1,1))),disabled:G<=1,sx:{flex:1,height:"40px",border:"1px solid",borderColor:F?"white":"black",color:F?"white":"black",backgroundColor:"red","&:hover":{backgroundColor:"darkred"}},children:(0,Z.jsx)(y.iFH,{})}),(0,Z.jsx)(c.Z,{variant:"contained",sx:{flex:1,height:"40px",border:"1px solid",borderColor:F?"white":"black",color:F?"white":"black",backgroundColor:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(10px)",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.2)"}},children:G}),(0,Z.jsx)(c.Z,{variant:"contained",onClick:()=>H((e=>Math.min(e+1,4))),disabled:G>=4,sx:{flex:1,height:"40px",border:"1px solid",borderColor:F?"white":"black",color:F?"white":"black",backgroundColor:"green","&:hover":{backgroundColor:"darkgreen"}},children:(0,Z.jsx)(y.wEH,{})})]})})})]})]})}),(0,Z.jsx)(c.Z,{variant:"contained",onClick:async()=>{if(!J)return $("Please login to book","warning"),void L("/login");try{const e={userId:J,entityType:S.Ul.COURSES,courseId:T,associatedStudioId:M.StudioId,emailLearner:Y,personsAllowed:G,pricePerPerson:M.price,internetConvCharges:S.lX,totalPrice:X},o=await(0,O.C9)(e);if(o&&200===o.nSuccessCode)$("Workshop booked","success");else if(o&&205===o.nSuccessCode){const e=o.bookedAt,r=new Date(1e3*e).toLocaleString();$(`Workshop already booked at ${r}`,"info")}else{const e=o?`Error: ${JSON.stringify(o)}`:"An unknown error occurred.";$(e,"error")}}catch(e){console.error(e),$((null===e||void 0===e?void 0:e.message)||"Something went wrong","error")}},sx:{textTransform:"none",fontSize:16,padding:"8px 16px",backgroundColor:F?"white":"black",color:F?"black":"white","&:hover":{backgroundColor:F?"#f0f0f0":"#333333"}},children:J?`Book Now @${X}`:"Login to Book"}),(0,Z.jsx)(c.Z,{hidden:0===X,variant:"text",onClick:()=>{V(!0)},sx:{textTransform:"none",fontSize:16,color:F?"white":"black","&:hover":{backgroundColor:"transparent",textDecoration:"none"}},children:"Price Breakdown (i)"}),J&&(0,Z.jsx)(a.Z,{variant:"caption",sx:{mt:"0.5rem",textAlign:"center"},children:"Book and groove at the venue"})]})]})}),(0,Z.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(a.Z,{variant:"h4",style:{color:F?"white":"black",textTransform:"none",textDecoration:"none"},gutterBottom:!0,children:M.courseName||M.workshopName||"Open Class Name "}),(0,Z.jsxs)(a.Z,{variant:"subtitle1",style:{color:F?"white":"black",textTransform:"none",textDecoration:"none"},gutterBottom:!0,children:["By ",(null===(r=M.studioDetails)||void 0===r?void 0:r.studioName)||"Studio Name",M.danceStyles&&M.danceStyles.length>0&&(0,Z.jsxs)(Z.Fragment,{children:[" ","| ",M.danceStyles.join(", ")]})]}),(0,Z.jsx)(d.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:(null===(D=S.RY[M.level])||void 0===D?void 0:D.backgroundColor)||"grey",color:(null===(U=S.RY[M.level])||void 0===U?void 0:U.color)||"white"},label:M.level}),(0,Z.jsxs)(t.Z,{sx:{display:"flex",gap:"0.5rem",mb:"1rem",color:F?"white":"black"},children:[(null===(A=M.studioDetails)||void 0===A?void 0:A.whatsappNumber)&&(0,Z.jsx)(h.Z,{color:"success",size:"small",target:"_blank",rel:"noopener noreferrer",href:`https://wa.me/91${M.studioDetails.whatsappNumber}?text=${z}`,children:(0,Z.jsx)(t.Z,{component:"img",src:v,alt:"WhatsApp",sx:{width:30,height:28}})}),(null===(P=M.studioDetails)||void 0===P?void 0:P.mobileNumber)&&(0,Z.jsx)(h.Z,{color:"primary",size:"small",target:"_blank",rel:"noopener noreferrer",href:`tel:${M.studioDetails.mobileNumber}`,children:(0,Z.jsx)(t.Z,{component:"img",src:N,alt:"Phone Call",sx:{width:30,height:28}})})]}),(0,Z.jsx)(a.Z,{variant:"body1 ",style:{color:F?"white":"black"},children:M.description||"Workshop Description"})]})]}),(0,Z.jsxs)(u.Z,{open:K,onClose:q,fullWidth:!0,maxWidth:"sm",children:[(0,Z.jsx)(g.Z,{children:"Price Breakdown"}),(0,Z.jsx)(f.Z,{children:(0,Z.jsxs)(x.Z,{children:[(0,Z.jsx)(p.Z,{children:(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:(0,Z.jsx)("strong",{children:"Item"})}),(0,Z.jsx)(m.Z,{align:"right",children:(0,Z.jsx)("strong",{children:"Amount (\u20b9)"})})]})}),(0,Z.jsxs)(C.Z,{children:[(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:"Price per Person"}),(0,Z.jsx)(m.Z,{align:"right",children:M.price})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:"Number of Persons"}),(0,Z.jsx)(m.Z,{align:"right",children:G})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:"Subtotal"}),(0,Z.jsx)(m.Z,{align:"right",children:M.price*G})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:"Internet Convenience Charges"}),(0,Z.jsx)(m.Z,{align:"right",children:S.lX})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:(0,Z.jsx)("strong",{children:"Total Price"})}),(0,Z.jsx)(m.Z,{align:"right",children:(0,Z.jsxs)("strong",{children:["\u20b9",X]})})]})]})]})}),(0,Z.jsx)(k.Z,{children:(0,Z.jsx)(c.Z,{onClick:q,variant:"outlined",children:"Close"})})]})]})}},83708:(e,o,r)=>{r.d(o,{A3:()=>x,DM:()=>d,QP:()=>p,RY:()=>h,Rb:()=>f,Ul:()=>g,i0:()=>l,lX:()=>i,lt:()=>u,n$:()=>s,uM:()=>c,zq:()=>a});var n=r(59135),t=r(80184);const s={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},l={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},a={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},i=30,c={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},h={[a.ALL]:d.GREEN,[a.BEGINNERS]:d.BLUE,[a.INTERMEDIATE]:d.YELLOW,[a.ADVANCED]:d.RED},u=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],g={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},f={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},x="https://nrityaserver-2b241e0a97e5.herokuapp.com/",p={AC:(0,t.jsx)(n.l51,{}),"Free Wifi":(0,t.jsx)(n._0,{}),"RO Water":(0,t.jsx)(n.EXY,{}),Toilet:(0,t.jsx)(n.Iev,{}),"Power Backup":(0,t.jsx)(n.eKD,{}),"Fire Extinguisher":(0,t.jsx)(n.Ybg,{}),"First Aid Kit":(0,t.jsx)(n.FZx,{}),"CCTV Camera":(0,t.jsx)(n.KoQ,{}),"Card Payment":(0,t.jsx)(n.ypE,{}),"Parking Space":(0,t.jsx)(n.mxg,{})}},18406:(e,o,r)=>{r.d(o,{C9:()=>t});var n=r(83708);const t=async e=>{const o=`${n.uM.PROD}bookings/bookEntity/`;try{const r=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e.userId,entityType:e.entityType,entityId:e.entityId,associatedStudioId:e.associatedStudioId,emailLearner:e.emailLearner,personsAllowed:e.personsAllowed,pricePerPerson:e.pricePerPerson})}),n=await r.json();return r.ok?(console.log("Booking successful:",n),n):(console.error("Booking failed:",n),n)}catch(r){return console.error("Error occurred while booking:",r),null}}},68449:(e,o,r)=>{r.d(o,{FV:()=>C,Km:()=>f,Ld:()=>d,Us:()=>c,XG:()=>k,Xt:()=>g,eg:()=>m,gv:()=>h,ih:()=>x,oM:()=>i,qS:()=>p,to:()=>u,xR:()=>b});var n=r(12481),t=r(10159),s=r(30276),l=r(83708),a=r(644);const i=async e=>{console.log("creatorMode uid",e);try{const o=(0,n.JU)(t.db,l.Ul.USER,e),r=await(0,n.QT)(o);if(r.exists())if(null!=r.data()){const e=r.data().CreatorMode;console.log("setCreatorMode: Is User a creator?",e),a.Z.setItem("CreatorMode",e)}else console.log("userSnap.data() null");else console.log("User not found")}catch(o){console.log(" error",o)}},c=async(e,o)=>{console.log("Debug ",`${e}/${o}`);const r=`${e}/${o}`,n=(0,s.iH)(t.tO,r);try{const e=await(0,s.aF)(n);if(e.items.length>0){const o=e.items[0],r=await(0,s.Jt)(o);return console.log("Debug URL:",r),r}return console.log("Debug No files found in the folder."),null}catch(l){return console.error("Error getting image URL:",l),null}},d=async(e,o)=>{const r=(0,n.JU)(t.db,e,o),s=await(0,n.QT)(r);return s.exists()?s.data():null},h=async(e,o,r)=>{const s=(0,n.JU)(t.db,e,o);return await(0,n.pl)(s,r,{merge:!0}),r},u=async(e,o,r)=>{const s=(0,n.JU)(t.db,e,o);return await(0,n.r7)(s,{isPhoneNumberVerified:!0,phoneNumber:r}),!0},g=async(e,o,r)=>{const s=(0,n.JU)(t.db,e,o);return await(0,n.r7)(s,r),{id:o,...r}},f=async(e,o,r,s)=>{console.log("Hiii ",e,o,r,s);const l=(0,n.IO)((0,n.hJ)(t.db,e),(0,n.ar)(o,r,s));return(await(0,n.Yp)(l)).data().count},x=async(e,o)=>{const r=`${e}/${o}`,n=(0,s.iH)(t.tO,r),l=await(0,s.aF)(n);await Promise.all(l.items.map((async e=>{await(0,s.oq)(e)})))},p=async(e,o,r)=>{const n=`${e}/${o}/${r}`,l=(0,s.iH)(t.tO,n),a=await(0,s.aF)(l);await Promise.all(a.items.map((async e=>{await(0,s.oq)(e)})))},b=async function(e,o,r,n){let l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const a=o.length;let i=0;await Promise.all(o.map((async o=>{let c=`${e}/${r}/${o.filename}`;l&&(c=`${e}/${r}/${l}/${o.filename}`);const d=(0,s.iH)(t.tO,c);await(0,s.oq)(d),i+=1,n(i/a*100)})))},m=async function(e,o,r,n){let l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(e,r);const a=o.length;let i=0;await Promise.all(o.map((async o=>{let c=`${e}/${r}`;l&&(c=`${e}/${r}/${l}`);const d=(0,s.iH)(t.tO,`${c}/${o.file.name}`);await(0,s.KV)(d,o.file),i+=1,n(i/a*100)})))},C=async function(e,o,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,i=`${e}/${r}`;n&&(i=`${e}/${r}/${n}`),console.log(o,o.name);const c=(0,s.iH)(t.tO,`${i}/${o.name}`),d=(0,s.B0)(c,o);d.on("state_changed",(e=>{const o=e.totalBytes,r=e.bytesTransferred,n=o>0?(r/o*100).toFixed(2):-1;switch(l(n),console.log("Upload is "+n+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(e=>{e.code}),(()=>{(0,s.Jt)(d.snapshot.ref).then((e=>{console.log("File available at",e),a(e)}))}))},k=async e=>{const o=`${e}`,r=(0,s.iH)(t.tO,o);try{const e=await(0,s.aF)(r);return await Promise.all(e.items.map((async e=>{const o=await(0,s.Jt)(e);return{id:e.name,filename:e.name,fileURL:o}})))}catch(n){throw console.error("Error retrieving images:",n),n}}},10884:(e,o,r)=>{e.exports=r.p+"static/media/india_11009487.98ac2ba43166eaa84593.png"},49071:(e,o,r)=>{e.exports=r.p+"static/media/whatsapp.8d81ece5885274edfd73.png"}}]);
//# sourceMappingURL=6853.10f67139.chunk.js.map