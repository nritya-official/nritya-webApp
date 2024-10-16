"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[7889],{1269:(e,o,r)=>{r.d(o,{Z:()=>O});var t=r(72791),n=r(61889),l=r(697),a=r(20890),s=r(36314),i=r(94294),c=r(5574),d=r(65661),h=r(39157),u=r(79836),g=r(56890),x=r(35855),b=r(53994),p=r(53382),f=r(97123),E=r(59135),I=r(83708),m=r(60717),C=r(59434),S=r(80184);const O=e=>{var o,r;let{dataItem:O,personsAllowed:N,setPersonsAllowed:R,totalPrice:k,handleBook:j,entityType:w}=e;const T=(0,C.v9)(m.w),[y,_]=(0,t.useState)(!1),A=null===(o=JSON.parse(localStorage.getItem("userInfo")))||void 0===o?void 0:o.UserId,{BOOKING_LIMIT:v,INTERNET_CONV_CHARGES_INR:Z}=(null===(r=JSON.parse(localStorage.getItem("userInfo")))||void 0===r||r.email,(0,t.useMemo)((()=>{switch(w){case I.Ul.COURSES:return{BOOKING_LIMIT:I.rM.COURSES_BOOKING_LIMIT,INTERNET_CONV_CHARGES_INR:I.rM.INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR};case I.Ul.WORKSHOPS:return{BOOKING_LIMIT:I.rM.WORKSHOPS_BOOKING_LIMIT,INTERNET_CONV_CHARGES_INR:I.rM.INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR};case I.Ul.OPEN_CLASSES:return{BOOKING_LIMIT:I.rM.OPEN_CLASSES_BOOKING_LIMIT,INTERNET_CONV_CHARGES_INR:I.rM.INTERNET_CONV_CHARGES_OPEN_CLASS_INR};default:return{BOOKING_LIMIT:1,INTERNET_CONV_CHARGES_INR:0}}}),[w])),P=()=>{_(!1)};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n.ZP,{item:!0,xs:12,lg:4,children:(0,S.jsxs)(l.Z,{sx:{bgcolor:T?"black":"#efefef",p:3,borderRadius:"8px",display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"},children:[(0,S.jsxs)(l.Z,{children:[(0,S.jsx)(a.Z,{variant:"h4",style:{color:T?"white":"black",textTransform:"none",textDecoration:"none"},children:O.courseName||O.workshopName||"Open Class Name"}),(0,S.jsx)("br",{}),(0,S.jsx)(a.Z,{variant:"subtitle",style:{color:T?"white":"black"},children:O.date}),(0,S.jsx)("br",{}),(0,S.jsx)(a.Z,{variant:"subtitle",style:{color:T?"white":"black"},children:O.time}),(0,S.jsx)(a.Z,{variant:"body1",sx:{mt:"1rem",color:T?"white":"black"},children:O.city||"City"})]}),(0,S.jsxs)(l.Z,{sx:{mt:"2rem",display:"flex",flexDirection:"column",gap:"1rem",color:T?"white":"black"},children:[(0,S.jsx)("table",{style:{width:"100%",borderCollapse:"collapse"},children:(0,S.jsxs)("tbody",{children:[(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{style:{padding:"8px",color:T?"white":"black"},children:O&&O.price&&(0,S.jsx)("span",{children:"Price per person"})}),(0,S.jsx)("td",{style:{padding:"8px",color:T?"white":"black"},children:O&&O.price&&(0,S.jsxs)("span",{children:[" \u20b9",O.price]})})]}),(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{style:{padding:"8px",color:T?"white":"black"},children:(0,S.jsx)("span",{children:"Person(s)"})}),(0,S.jsx)("td",{style:{padding:"8px"},children:(0,S.jsx)(l.Z,{sx:{display:"flex",alignItems:"center",gap:"1rem"},children:(0,S.jsxs)(s.Z,{direction:"row",spacing:0,alignItems:"center",children:[(0,S.jsx)(i.Z,{variant:"contained",onClick:()=>R((e=>Math.max(e-1,1))),disabled:N<=1,sx:{flex:1,height:"40px",border:"1px solid",borderColor:T?"white":"black",color:"white",backgroundColor:"#735EAB","&:hover":{backgroundColor:"#735EAB",color:"white"},"&.Mui-disabled":{backgroundColor:T?"rgba(115, 94, 171, 0.5)":"rgba(115, 94, 171, 0.3)",color:"rgba(255, 255, 255, 0.5)",borderColor:T?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)"}},children:(0,S.jsx)(E.iFH,{})}),(0,S.jsx)(i.Z,{variant:"contained",sx:{flex:1,height:"40px",border:"1px solid",borderColor:T?"white":"black",color:T?"white":"black",backgroundColor:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(10px)",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.2)"}},children:N}),(0,S.jsx)(i.Z,{variant:"contained",onClick:()=>R((e=>Math.min(e+1,v))),disabled:N>=v,sx:{flex:1,height:"40px",border:"1px solid",borderColor:T?"white":"black",color:"white",backgroundColor:"#735EAB","&:hover":{backgroundColor:"#735EAB",color:"white"},"&.Mui-disabled":{backgroundColor:T?"rgba(115, 94, 171, 0.5)":"rgba(115, 94, 171, 0.3)",color:"rgba(255, 255, 255, 0.5)",borderColor:T?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)"}},children:(0,S.jsx)(E.wEH,{})})]})})})]})]})}),(0,S.jsx)(i.Z,{variant:"contained",onClick:j,sx:{textTransform:"none",fontSize:16,padding:"8px 16px",backgroundColor:T?"white":"black",color:T?"black":"white","&:hover":{backgroundColor:T?"#f0f0f0":"#333333"}},children:A?`Book Now @${k}`:"Login to Book"}),(0,S.jsx)(i.Z,{hidden:0===k,variant:"text",onClick:()=>{_(!0)},sx:{textTransform:"none",fontSize:16,color:T?"white":"black","&:hover":{backgroundColor:"transparent",textDecoration:"none"}},children:"Price Breakdown (i)"}),A&&(0,S.jsx)(a.Z,{variant:"caption",sx:{mt:"0.5rem",textAlign:"center"},children:"Book and groove at the venue"})]})]})}),(0,S.jsxs)(c.Z,{open:y,onClose:P,fullWidth:!0,maxWidth:"sm",children:[(0,S.jsx)(d.Z,{children:"Price Breakdown"}),(0,S.jsx)(h.Z,{children:(0,S.jsxs)(u.Z,{children:[(0,S.jsx)(g.Z,{children:(0,S.jsxs)(x.Z,{children:[(0,S.jsx)(b.Z,{children:(0,S.jsx)("strong",{children:"Item"})}),(0,S.jsx)(b.Z,{align:"right",children:(0,S.jsx)("strong",{children:"Amount (\u20b9)"})})]})}),(0,S.jsxs)(p.Z,{children:[(0,S.jsxs)(x.Z,{children:[(0,S.jsx)(b.Z,{children:"Price per Person"}),(0,S.jsx)(b.Z,{align:"right",children:O.price})]}),(0,S.jsxs)(x.Z,{children:[(0,S.jsx)(b.Z,{children:"Number of Persons"}),(0,S.jsx)(b.Z,{align:"right",children:N})]}),(0,S.jsxs)(x.Z,{children:[(0,S.jsx)(b.Z,{children:"Subtotal"}),(0,S.jsx)(b.Z,{align:"right",children:O.price*N})]}),(0,S.jsxs)(x.Z,{children:[(0,S.jsx)(b.Z,{children:"Internet Convenience Charges"}),(0,S.jsx)(b.Z,{align:"right",children:Z})]}),(0,S.jsxs)(x.Z,{children:[(0,S.jsx)(b.Z,{children:(0,S.jsx)("strong",{children:"Total Price"})}),(0,S.jsx)(b.Z,{align:"right",children:(0,S.jsxs)("strong",{children:["\u20b9",k]})})]})]})]})}),(0,S.jsx)(f.Z,{children:(0,S.jsx)(i.Z,{onClick:P,variant:"outlined",children:"Close"})})]})]})}},52039:(e,o,r)=>{r.d(o,{Z:()=>x});r(72791);var t=r(61889),n=r(20890),l=r(81918),a=r(697),s=r(13400),i=r(60717),c=r(49071),d=r(10884),h=r(83708),u=r(59434),g=r(80184);const x=function(e){var o,r,x,b,p;let{dataItem:f,whatsappMessage:E}=e;const I=(0,u.v9)(i.w);return(0,g.jsxs)(t.ZP,{item:!0,xs:12,children:[(0,g.jsx)(n.Z,{variant:"h4",style:{color:I?"white":"black",textTransform:"none",textDecoration:"none"},gutterBottom:!0,children:f.openClassName||f.workshopName||f.courseName||"Name "}),(0,g.jsxs)(n.Z,{variant:"subtitle1",style:{color:I?"white":"black",textTransform:"none",textDecoration:"none"},gutterBottom:!0,children:["By ",(null===(o=f.studioDetails)||void 0===o?void 0:o.studioName)||"Studio Name",f.danceStyles&&f.danceStyles.length>0&&(0,g.jsxs)(g.Fragment,{children:[" ","| ",f.danceStyles.join(", ")]})]}),(0,g.jsx)(l.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:(null===(r=h.RY[f.level])||void 0===r?void 0:r.backgroundColor)||"grey",color:(null===(x=h.RY[f.level])||void 0===x?void 0:x.color)||"white"},label:f.level}),(0,g.jsxs)(a.Z,{sx:{display:"flex",gap:"0.5rem",mb:"1rem",color:I?"white":"black"},children:[(null===(b=f.studioDetails)||void 0===b?void 0:b.whatsappNumber)&&(0,g.jsx)(s.Z,{color:"success",size:"small",target:"_blank",rel:"noopener noreferrer",href:`https://wa.me/91${f.studioDetails.whatsappNumber}?text=${E}`,children:(0,g.jsx)(a.Z,{component:"img",src:c,alt:"WhatsApp",sx:{width:30,height:28}})}),(null===(p=f.studioDetails)||void 0===p?void 0:p.mobileNumber)&&(0,g.jsx)(s.Z,{color:"primary",size:"small",target:"_blank",rel:"noopener noreferrer",href:`tel:${f.studioDetails.mobileNumber}`,children:(0,g.jsx)(a.Z,{component:"img",src:d,alt:"Phone Call",sx:{width:30,height:28}})})]}),(0,g.jsx)(n.Z,{variant:"body1 ",style:{color:I?"white":"black"},children:f.description||"Workshop Description"})]})}},46022:(e,o,r)=>{r.d(o,{Z:()=>l});r(72791);var t=r(697),n=r(80184);const l=e=>{let{youtubeId:o,imageUrl:r,altText:l}=e;return o?(0,n.jsx)(t.Z,{sx:{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",borderRadius:"8px"},children:(0,n.jsx)(t.Z,{component:"iframe",src:`https://www.youtube.com/embed/${o}?autoplay=1&mute=1`,title:l||"Workshop Video",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0,borderRadius:"8px"},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):(0,n.jsx)(t.Z,{component:"img",src:r,alt:l||"Workshop Image",sx:{width:"100%",height:"auto",objectFit:"cover",borderRadius:"8px"}})}},83708:(e,o,r)=>{r.d(o,{A3:()=>b,DM:()=>d,QP:()=>p,RY:()=>h,Rb:()=>x,Ul:()=>g,i0:()=>a,lt:()=>u,n$:()=>l,rM:()=>i,uM:()=>c,zq:()=>s});var t=r(59135),n=r(80184);const l={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},a={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},s={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},i={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},c={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},h={[s.ALL]:d.GREEN,[s.BEGINNERS]:d.BLUE,[s.INTERMEDIATE]:d.YELLOW,[s.ADVANCED]:d.RED},u=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],g={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},x={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},b="https://nrityaserver-2b241e0a97e5.herokuapp.com/",p={AC:(0,n.jsx)(t.l51,{}),"Free Wifi":(0,n.jsx)(t._0,{}),"RO Water":(0,n.jsx)(t.EXY,{}),Toilet:(0,n.jsx)(t.Iev,{}),"Power Backup":(0,n.jsx)(t.eKD,{}),"Fire Extinguisher":(0,n.jsx)(t.Ybg,{}),"First Aid Kit":(0,n.jsx)(t.FZx,{}),"CCTV Camera":(0,n.jsx)(t.KoQ,{}),"Card Payment":(0,n.jsx)(t.ypE,{}),"Parking Space":(0,n.jsx)(t.mxg,{})}},18406:(e,o,r)=>{r.d(o,{C9:()=>n});var t=r(83708);const n=async e=>{const o=`${t.uM.PROD}bookings/bookEntity/`;try{const r=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e.userId,entityType:e.entityType,entityId:e.entityId,associatedStudioId:e.associatedStudioId,emailLearner:e.emailLearner,personsAllowed:e.personsAllowed,pricePerPerson:e.pricePerPerson})}),t=await r.json();return r.ok?(console.log("Booking successful:",t),t):(console.error("Booking failed:",t),t)}catch(r){return console.error("Error occurred while booking:",r),null}}},68449:(e,o,r)=>{r.d(o,{FV:()=>I,Km:()=>x,Ld:()=>d,Us:()=>c,XG:()=>m,Xt:()=>g,eg:()=>E,gv:()=>h,ih:()=>b,oM:()=>i,qS:()=>p,to:()=>u,xR:()=>f});var t=r(12481),n=r(10159),l=r(30276),a=r(83708),s=r(644);const i=async e=>{console.log("creatorMode uid",e);try{const o=(0,t.JU)(n.db,a.Ul.USER,e),r=await(0,t.QT)(o);if(r.exists())if(null!=r.data()){const e=r.data().CreatorMode;console.log("setCreatorMode: Is User a creator?",e),s.Z.setItem("CreatorMode",e)}else console.log("userSnap.data() null");else console.log("User not found")}catch(o){console.log(" error",o)}},c=async(e,o)=>{console.log("Debug ",`${e}/${o}`);const r=`${e}/${o}`,t=(0,l.iH)(n.tO,r);try{const e=await(0,l.aF)(t);if(e.items.length>0){const o=e.items[0],r=await(0,l.Jt)(o);return console.log("Debug URL:",r),r}return console.log("Debug No files found in the folder."),null}catch(a){return console.error("Error getting image URL:",a),null}},d=async(e,o)=>{const r=(0,t.JU)(n.db,e,o),l=await(0,t.QT)(r);return l.exists()?l.data():null},h=async(e,o,r)=>{const l=(0,t.JU)(n.db,e,o);return await(0,t.pl)(l,r,{merge:!0}),r},u=async(e,o,r)=>{const l=(0,t.JU)(n.db,e,o);return await(0,t.r7)(l,{isPhoneNumberVerified:!0,phoneNumber:r}),!0},g=async(e,o,r)=>{const l=(0,t.JU)(n.db,e,o);return await(0,t.r7)(l,r),{id:o,...r}},x=async(e,o,r,l)=>{console.log("Hiii ",e,o,r,l);const a=(0,t.IO)((0,t.hJ)(n.db,e),(0,t.ar)(o,r,l));return(await(0,t.Yp)(a)).data().count},b=async(e,o)=>{const r=`${e}/${o}`,t=(0,l.iH)(n.tO,r),a=await(0,l.aF)(t);await Promise.all(a.items.map((async e=>{await(0,l.oq)(e)})))},p=async(e,o,r)=>{const t=`${e}/${o}/${r}`,a=(0,l.iH)(n.tO,t),s=await(0,l.aF)(a);await Promise.all(s.items.map((async e=>{await(0,l.oq)(e)})))},f=async function(e,o,r,t){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const s=o.length;let i=0;await Promise.all(o.map((async o=>{let c=`${e}/${r}/${o.filename}`;a&&(c=`${e}/${r}/${a}/${o.filename}`);const d=(0,l.iH)(n.tO,c);await(0,l.oq)(d),i+=1,t(i/s*100)})))},E=async function(e,o,r,t){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(e,r);const s=o.length;let i=0;await Promise.all(o.map((async o=>{let c=`${e}/${r}`;a&&(c=`${e}/${r}/${a}`);const d=(0,l.iH)(n.tO,`${c}/${o.file.name}`);await(0,l.KV)(d,o.file),i+=1,t(i/s*100)})))},I=async function(e,o,r){let t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,i=`${e}/${r}`;t&&(i=`${e}/${r}/${t}`),console.log(o,o.name);const c=(0,l.iH)(n.tO,`${i}/${o.name}`),d=(0,l.B0)(c,o);d.on("state_changed",(e=>{const o=e.totalBytes,r=e.bytesTransferred,t=o>0?(r/o*100).toFixed(2):-1;switch(a(t),console.log("Upload is "+t+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(e=>{e.code}),(()=>{(0,l.Jt)(d.snapshot.ref).then((e=>{console.log("File available at",e),s(e)}))}))},m=async e=>{const o=`${e}`,r=(0,l.iH)(n.tO,o);try{const e=await(0,l.aF)(r);return await Promise.all(e.items.map((async e=>{const o=await(0,l.Jt)(e);return{id:e.name,filename:e.name,fileURL:o}})))}catch(t){throw console.error("Error retrieving images:",t),t}}},10884:(e,o,r)=>{e.exports=r.p+"static/media/india_11009487.98ac2ba43166eaa84593.png"},49071:(e,o,r)=>{e.exports=r.p+"static/media/whatsapp.8d81ece5885274edfd73.png"}}]);
//# sourceMappingURL=7889.4d651d29.chunk.js.map