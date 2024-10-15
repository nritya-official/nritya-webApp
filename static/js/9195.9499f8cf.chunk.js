"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9195],{29195:(o,e,r)=>{r.r(e),r.d(e,{default:()=>D});var n=r(72791),t=r(697),l=r(13239),s=r(61889),a=r(20890),i=r(36314),c=r(94294),d=r(81918),h=r(13400),g=r(5574),u=r(65661),f=r(39157),x=r(79836),p=r(56890),b=r(35855),m=r(53994),k=r(53382),C=r(97123),S=r(57689),j=r(59434),E=r(83708),w=r(68449),I=r(60717),y=r(59135),O=r(75424),R=r(18406),v=r(49071),N=r(10884),Z=r(80184);const D=function(){var o,e,r,D,P,A,U;const{workshopId:T}=(0,S.UO)();console.log("From WorkShopFullPage,",T);const L=(0,S.s0)(),$=(0,O.D)(),W=(0,j.v9)(I.w),[F,B]=(0,n.useState)(null),[_,M]=(0,n.useState)(null),[H,K]=(0,n.useState)(1),[G,V]=(0,n.useState)(!1),J=null===(o=JSON.parse(localStorage.getItem("userInfo")))||void 0===o?void 0:o.UserId,Y=null===(e=JSON.parse(localStorage.getItem("userInfo")))||void 0===e?void 0:e.email,X=_&&H?_.price*H+E.lX:0;if(console.log("WorkShopFullPage before useEffect"),(0,n.useEffect)((()=>{T&&((async()=>{console.log("WorkShopFullPage fetchData");try{const o=await(0,w.Ld)(E.Ul.WORKSHOPS,T);if(console.log("WorkShopFullPage fetchData data",o),M(o),console.log("WorkShopFullPage before useEffect",o),o&&o.StudioId){const e=await(0,w.Ld)(E.Ul.STUDIO,o.StudioId);M((o=>({...o,studioDetails:e})))}}catch(o){console.error("Error fetching workshop data:",o),$("Failed to load workshop details.","error")}})(),(async()=>{try{const o=await(0,w.Us)(E.Rb.WORKSHOPICON,T);B(o||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}catch(o){console.error("Error fetching image URL:",o),B("https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}})())}),[T,$]),!_)return(0,Z.jsx)(t.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,Z.jsx)(l.Z,{color:"primary"})});const z=encodeURIComponent("Hey, I found your Studio on nritya.co.in. I'm interested"),q=()=>{V(!1)};return(0,Z.jsxs)(t.Z,{sx:{padding:"0rem",minHeight:"100vh",color:W?"white":"black"},children:[(0,Z.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,Z.jsx)(s.ZP,{item:!0,xs:12,lg:8,children:(0,Z.jsx)(t.Z,{component:"img",src:F,alt:_.workshopName||"Workshop Image",sx:{width:"100%",height:"auto",objectFit:"cover",borderRadius:"8px"}})}),(0,Z.jsx)(s.ZP,{item:!0,xs:12,lg:4,children:(0,Z.jsxs)(t.Z,{sx:{bgcolor:W?"#333333":"#efefef",p:3,borderRadius:"8px",display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"},children:[(0,Z.jsxs)(t.Z,{children:[(0,Z.jsx)(a.Z,{variant:"h4",style:{color:W?"white":"black",textTransform:"none",textDecoration:"none"},children:_.workshopName||"Workshop Name"}),(0,Z.jsx)(a.Z,{variant:"subtitle ",style:{color:W?"white":"black"},children:_.date}),(0,Z.jsx)("br",{}),(0,Z.jsx)(a.Z,{variant:"subtitle",style:{color:W?"white":"black"},children:_.time}),(0,Z.jsx)(a.Z,{variant:"body1",sx:{mt:"1rem",color:W?"white":"black"},children:_.city||"City"})]}),(0,Z.jsxs)(t.Z,{sx:{mt:"2rem",display:"flex",flexDirection:"column",gap:"1rem",color:W?"white":"black"},children:[(0,Z.jsx)("table",{style:{width:"100%",borderCollapse:"collapse"},children:(0,Z.jsxs)("tbody",{children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:{padding:"8px",color:W?"white":"black"},children:_&&_.price&&(0,Z.jsx)("span",{children:"Price per person"})}),(0,Z.jsx)("td",{style:{padding:"8px",color:W?"white":"black"},children:_&&_.price&&(0,Z.jsxs)("span",{children:[" \u20b9",_.price]})})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:{padding:"8px",color:W?"white":"black"},children:(0,Z.jsx)("span",{sx:{color:W?"white":"black"},children:"Person(s)"})}),(0,Z.jsx)("td",{style:{padding:"8px"},children:(0,Z.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",gap:"1rem"},children:(0,Z.jsxs)(i.Z,{direction:"row",spacing:0,alignItems:"center",children:[(0,Z.jsx)(c.Z,{variant:"contained",onClick:()=>K((o=>Math.max(o-1,1))),disabled:H<=1,sx:{flex:1,height:"40px",border:"1px solid",borderColor:W?"white":"black",color:W?"white":"black",backgroundColor:"red","&:hover":{backgroundColor:"darkred"}},children:(0,Z.jsx)(y.iFH,{})}),(0,Z.jsx)(c.Z,{variant:"contained",sx:{flex:1,height:"40px",border:"1px solid",borderColor:W?"white":"black",color:W?"white":"black",backgroundColor:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(10px)",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.2)"}},children:H}),(0,Z.jsx)(c.Z,{variant:"contained",onClick:()=>K((o=>Math.min(o+1,4))),disabled:H>=4,sx:{flex:1,height:"40px",border:"1px solid",borderColor:W?"white":"black",color:W?"white":"black",backgroundColor:"green","&:hover":{backgroundColor:"darkgreen"}},children:(0,Z.jsx)(y.wEH,{})})]})})})]})]})}),(0,Z.jsx)(c.Z,{variant:"contained",onClick:async()=>{if(!J)return $("Please login to book","warning"),void L("/login");try{const o={userId:J,entityType:E.Ul.WORKSHOPS,entityId:T,associatedStudioId:_.StudioId,emailLearner:Y,personsAllowed:H,pricePerPerson:_.price,internetConvCharges:E.lX,totalPrice:X},e=await(0,R.C9)(o);if(e&&200===e.nSuccessCode)$("Workshop booked","success");else if(e&&205===e.nSuccessCode){const o=e.bookedAt,r=new Date(1e3*o).toLocaleString();$(`Workshop already booked at ${r}`,"info")}else{const o=e?`Error: ${JSON.stringify(e)}`:"An unknown error occurred.";$(o,"error")}}catch(o){console.error(o),$((null===o||void 0===o?void 0:o.message)||"Something went wrong","error")}},sx:{textTransform:"none",fontSize:16,padding:"8px 16px",backgroundColor:W?"white":"black",color:W?"black":"white","&:hover":{backgroundColor:W?"#f0f0f0":"#333333"}},children:J?`Book Now @${X}`:"Login to Book"}),(0,Z.jsx)(c.Z,{variant:"text",onClick:()=>{V(!0)},sx:{textTransform:"none",fontSize:16,color:W?"white":"black","&:hover":{backgroundColor:"transparent",textDecoration:"none"}},children:"Price Breakdown (i)"}),J&&(0,Z.jsx)(a.Z,{variant:"caption",sx:{mt:"0.5rem",textAlign:"center"},children:"Book and groove at the venue"})]})]})}),(0,Z.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(a.Z,{variant:"h4",style:{color:W?"white":"black",textTransform:"none",textDecoration:"none"},gutterBottom:!0,children:_.workshopName||"Workshop Name"}),(0,Z.jsxs)(a.Z,{variant:"subtitle1",style:{color:W?"white":"black",textTransform:"none",textDecoration:"none"},gutterBottom:!0,children:["By ",(null===(r=_.studioDetails)||void 0===r?void 0:r.studioName)||"Studio Name",_.danceStyles&&_.danceStyles.length>0&&(0,Z.jsxs)(Z.Fragment,{children:[" ","| ",_.danceStyles.join(", ")]})]}),(0,Z.jsx)(d.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:(null===(D=E.RY[_.level])||void 0===D?void 0:D.backgroundColor)||"grey",color:(null===(P=E.RY[_.level])||void 0===P?void 0:P.color)||"white"},label:_.level}),(0,Z.jsxs)(t.Z,{sx:{display:"flex",gap:"0.5rem",mb:"1rem",color:W?"white":"black"},children:[(null===(A=_.studioDetails)||void 0===A?void 0:A.whatsappNumber)&&(0,Z.jsx)(h.Z,{color:"success",size:"small",target:"_blank",rel:"noopener noreferrer",href:`https://wa.me/91${_.studioDetails.whatsappNumber}?text=${z}`,children:(0,Z.jsx)(t.Z,{component:"img",src:v,alt:"WhatsApp",sx:{width:30,height:28}})}),(null===(U=_.studioDetails)||void 0===U?void 0:U.mobileNumber)&&(0,Z.jsx)(h.Z,{color:"primary",size:"small",target:"_blank",rel:"noopener noreferrer",href:`tel:${_.studioDetails.mobileNumber}`,children:(0,Z.jsx)(t.Z,{component:"img",src:N,alt:"Phone Call",sx:{width:30,height:28}})})]}),(0,Z.jsx)(a.Z,{variant:"body1 ",style:{color:W?"white":"black"},children:_.description||"Workshop Description"})]})]}),(0,Z.jsxs)(g.Z,{open:G,onClose:q,fullWidth:!0,maxWidth:"sm",children:[(0,Z.jsx)(u.Z,{children:"Price Breakdown"}),(0,Z.jsx)(f.Z,{children:(0,Z.jsxs)(x.Z,{children:[(0,Z.jsx)(p.Z,{children:(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:(0,Z.jsx)("strong",{children:"Item"})}),(0,Z.jsx)(m.Z,{align:"right",children:(0,Z.jsx)("strong",{children:"Amount (\u20b9)"})})]})}),(0,Z.jsxs)(k.Z,{children:[(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:"Price per Person"}),(0,Z.jsx)(m.Z,{align:"right",children:_.price})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:"Number of Persons"}),(0,Z.jsx)(m.Z,{align:"right",children:H})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:"Subtotal"}),(0,Z.jsx)(m.Z,{align:"right",children:_.price*H})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:"Internet Convenience Charges"}),(0,Z.jsx)(m.Z,{align:"right",children:E.lX})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(m.Z,{children:(0,Z.jsx)("strong",{children:"Total Price"})}),(0,Z.jsx)(m.Z,{align:"right",children:(0,Z.jsxs)("strong",{children:["\u20b9",X]})})]})]})]})}),(0,Z.jsx)(C.Z,{children:(0,Z.jsx)(c.Z,{onClick:q,variant:"outlined",children:"Close"})})]})]})}},83708:(o,e,r)=>{r.d(e,{A3:()=>x,DM:()=>d,QP:()=>p,RY:()=>h,Rb:()=>f,Ul:()=>u,i0:()=>s,lX:()=>i,lt:()=>g,n$:()=>l,uM:()=>c,zq:()=>a});var n=r(59135),t=r(80184);const l={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},s={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},a={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},i=30,c={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},h={[a.ALL]:d.GREEN,[a.BEGINNERS]:d.BLUE,[a.INTERMEDIATE]:d.YELLOW,[a.ADVANCED]:d.RED},g=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],u={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},f={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},x="https://nrityaserver-2b241e0a97e5.herokuapp.com/",p={AC:(0,t.jsx)(n.l51,{}),"Free Wifi":(0,t.jsx)(n._0,{}),"RO Water":(0,t.jsx)(n.EXY,{}),Toilet:(0,t.jsx)(n.Iev,{}),"Power Backup":(0,t.jsx)(n.eKD,{}),"Fire Extinguisher":(0,t.jsx)(n.Ybg,{}),"First Aid Kit":(0,t.jsx)(n.FZx,{}),"CCTV Camera":(0,t.jsx)(n.KoQ,{}),"Card Payment":(0,t.jsx)(n.ypE,{}),"Parking Space":(0,t.jsx)(n.mxg,{})}},18406:(o,e,r)=>{r.d(e,{C9:()=>t});var n=r(83708);const t=async o=>{const e=`${n.uM.PROD}bookings/bookEntity/`;try{const r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:o.userId,entityType:o.entityType,entityId:o.entityId,associatedStudioId:o.associatedStudioId,emailLearner:o.emailLearner,personsAllowed:o.personsAllowed,pricePerPerson:o.pricePerPerson})}),n=await r.json();return r.ok?(console.log("Booking successful:",n),n):(console.error("Booking failed:",n),n)}catch(r){return console.error("Error occurred while booking:",r),null}}},68449:(o,e,r)=>{r.d(e,{FV:()=>k,Km:()=>f,Ld:()=>d,Us:()=>c,XG:()=>C,Xt:()=>u,eg:()=>m,gv:()=>h,ih:()=>x,oM:()=>i,qS:()=>p,to:()=>g,xR:()=>b});var n=r(12481),t=r(10159),l=r(30276),s=r(83708),a=r(644);const i=async o=>{console.log("creatorMode uid",o);try{const e=(0,n.JU)(t.db,s.Ul.USER,o),r=await(0,n.QT)(e);if(r.exists())if(null!=r.data()){const o=r.data().CreatorMode;console.log("setCreatorMode: Is User a creator?",o),a.Z.setItem("CreatorMode",o)}else console.log("userSnap.data() null");else console.log("User not found")}catch(e){console.log(" error",e)}},c=async(o,e)=>{console.log("Debug ",`${o}/${e}`);const r=`${o}/${e}`,n=(0,l.iH)(t.tO,r);try{const o=await(0,l.aF)(n);if(o.items.length>0){const e=o.items[0],r=await(0,l.Jt)(e);return console.log("Debug URL:",r),r}return console.log("Debug No files found in the folder."),null}catch(s){return console.error("Error getting image URL:",s),null}},d=async(o,e)=>{const r=(0,n.JU)(t.db,o,e),l=await(0,n.QT)(r);return l.exists()?l.data():null},h=async(o,e,r)=>{const l=(0,n.JU)(t.db,o,e);return await(0,n.pl)(l,r,{merge:!0}),r},g=async(o,e,r)=>{const l=(0,n.JU)(t.db,o,e);return await(0,n.r7)(l,{isPhoneNumberVerified:!0,phoneNumber:r}),!0},u=async(o,e,r)=>{const l=(0,n.JU)(t.db,o,e);return await(0,n.r7)(l,r),{id:e,...r}},f=async(o,e,r,l)=>{console.log("Hiii ",o,e,r,l);const s=(0,n.IO)((0,n.hJ)(t.db,o),(0,n.ar)(e,r,l));return(await(0,n.Yp)(s)).data().count},x=async(o,e)=>{const r=`${o}/${e}`,n=(0,l.iH)(t.tO,r),s=await(0,l.aF)(n);await Promise.all(s.items.map((async o=>{await(0,l.oq)(o)})))},p=async(o,e,r)=>{const n=`${o}/${e}/${r}`,s=(0,l.iH)(t.tO,n),a=await(0,l.aF)(s);await Promise.all(a.items.map((async o=>{await(0,l.oq)(o)})))},b=async function(o,e,r,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const a=e.length;let i=0;await Promise.all(e.map((async e=>{let c=`${o}/${r}/${e.filename}`;s&&(c=`${o}/${r}/${s}/${e.filename}`);const d=(0,l.iH)(t.tO,c);await(0,l.oq)(d),i+=1,n(i/a*100)})))},m=async function(o,e,r,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(o,r);const a=e.length;let i=0;await Promise.all(e.map((async e=>{let c=`${o}/${r}`;s&&(c=`${o}/${r}/${s}`);const d=(0,l.iH)(t.tO,`${c}/${e.file.name}`);await(0,l.KV)(d,e.file),i+=1,n(i/a*100)})))},k=async function(o,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,i=`${o}/${r}`;n&&(i=`${o}/${r}/${n}`),console.log(e,e.name);const c=(0,l.iH)(t.tO,`${i}/${e.name}`),d=(0,l.B0)(c,e);d.on("state_changed",(o=>{const e=o.totalBytes,r=o.bytesTransferred,n=e>0?(r/e*100).toFixed(2):-1;switch(s(n),console.log("Upload is "+n+"% done"),o.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(o=>{o.code}),(()=>{(0,l.Jt)(d.snapshot.ref).then((o=>{console.log("File available at",o),a(o)}))}))},C=async o=>{const e=`${o}`,r=(0,l.iH)(t.tO,e);try{const o=await(0,l.aF)(r);return await Promise.all(o.items.map((async o=>{const e=await(0,l.Jt)(o);return{id:o.name,filename:o.name,fileURL:e}})))}catch(n){throw console.error("Error retrieving images:",n),n}}},10884:(o,e,r)=>{o.exports=r.p+"static/media/india_11009487.98ac2ba43166eaa84593.png"},49071:(o,e,r)=>{o.exports=r.p+"static/media/whatsapp.8d81ece5885274edfd73.png"}}]);
//# sourceMappingURL=9195.9499f8cf.chunk.js.map