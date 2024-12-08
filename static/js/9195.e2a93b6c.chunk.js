"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9195],{46022:(e,o,r)=>{r.d(o,{Z:()=>l});r(72791);var t=r(697),n=r(80184);const l=e=>{let{youtubeId:o,imageUrl:r,altText:l}=e;return o?(0,n.jsx)(t.Z,{sx:{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",borderRadius:"8px"},children:(0,n.jsx)(t.Z,{component:"iframe",src:`https://www.youtube.com/embed/${o}?autoplay=1&mute=1`,title:l||"Workshop Video",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0,borderRadius:"8px"},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):(0,n.jsx)(t.Z,{component:"img",src:r,alt:l||"Workshop Image",sx:{width:"100%",height:"auto",objectFit:"cover",borderRadius:"8px"}})}},29195:(e,o,r)=>{r.r(o),r.d(o,{default:()=>Z});var t=r(72791),n=r(697),l=r(13239),s=r(61889),a=r(20890),i=r(36314),c=r(94294),d=r(81918),h=r(13400),u=r(5574),g=r(65661),p=r(39157),x=r(79836),f=r(56890),b=r(35855),m=r(53994),S=r(53382),k=r(97123),C=r(57689),I=r(59434),E=r(83708),O=r(68449),w=r(60717),j=r(59135),R=r(75424),y=r(18406),N=r(49071),v=r(10884),P=r(46022),T=r(80184);const Z=function(){var e,o,r,Z,A,U,D;const{workshopId:_}=(0,C.UO)();console.log("From WorkShopFullPage,",_);const L=(0,C.s0)(),W=(0,R.D)(),$=(0,I.v9)(w.w),[B,M]=(0,t.useState)(null),[F,H]=(0,t.useState)(null),[K,G]=(0,t.useState)(1),[V,J]=(0,t.useState)(!1),Y=null===(e=JSON.parse(localStorage.getItem("userInfo")))||void 0===e?void 0:e.UserId,z=null===(o=JSON.parse(localStorage.getItem("userInfo")))||void 0===o?void 0:o.email,q=F&&K?F.price*K+E.rM.INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:0;if(console.log("WorkShopFullPage before useEffect"),(0,t.useEffect)((()=>{_&&((async()=>{console.log("WorkShopFullPage fetchData");try{const e=await(0,O.Ld)(E.Ul.WORKSHOPS,_);if(console.log("WorkShopFullPage fetchData data",e),H(e),console.log("WorkShopFullPage before useEffect",e),e&&e.StudioId){const o=await(0,O.Ld)(E.Ul.STUDIO,e.StudioId);H((e=>({...e,studioDetails:o})))}}catch(e){console.error("Error fetching workshop data:",e),W("Failed to load workshop details.","error")}})(),(async()=>{try{const e=await(0,O.Us)(E.Rb.WORKSHOPICON,_);M(e||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}catch(e){console.error("Error fetching image URL:",e),M("https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}})())}),[_,W]),!F)return(0,T.jsx)(n.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,T.jsx)(l.Z,{color:"primary"})});const Q=encodeURIComponent("Hey, I found your Studio on nritya.co.in. I'm interested"),X=()=>{J(!1)};return(0,T.jsxs)(n.Z,{sx:{padding:"0rem",minHeight:"100vh",color:$?"white":"black"},children:[(0,T.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,T.jsx)(s.ZP,{item:!0,xs:12,lg:8,children:(0,T.jsx)(P.Z,{youtubeId:F.youtubeId,imageUrl:B,altText:F.workshopName})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,lg:4,children:(0,T.jsxs)(n.Z,{sx:{bgcolor:$?"#333333":"#efefef",p:3,borderRadius:"8px",display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"},children:[(0,T.jsxs)(n.Z,{children:[(0,T.jsx)(a.Z,{variant:"h4",style:{color:$?"white":"black",textTransform:"none",textDecoration:"none"},children:F.workshopName||"Workshop Name"}),(0,T.jsx)(a.Z,{variant:"subtitle ",style:{color:$?"white":"black"},children:F.date}),(0,T.jsx)("br",{}),(0,T.jsx)(a.Z,{variant:"subtitle",style:{color:$?"white":"black"},children:F.time}),(0,T.jsx)(a.Z,{variant:"body1",sx:{mt:"1rem",color:$?"white":"black"},children:F.city||"City"})]}),(0,T.jsxs)(n.Z,{sx:{mt:"2rem",display:"flex",flexDirection:"column",gap:"1rem",color:$?"white":"black"},children:[(0,T.jsx)("table",{style:{width:"100%",borderCollapse:"collapse"},children:(0,T.jsxs)("tbody",{children:[(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{style:{padding:"8px",color:$?"white":"black"},children:F&&F.price&&(0,T.jsx)("span",{children:"Price per person"})}),(0,T.jsx)("td",{style:{padding:"8px",color:$?"white":"black"},children:F&&F.price&&(0,T.jsxs)("span",{children:[" \u20b9",F.price]})})]}),(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{style:{padding:"8px",color:$?"white":"black"},children:(0,T.jsx)("span",{sx:{color:$?"white":"black"},children:"Person(s)"})}),(0,T.jsx)("td",{style:{padding:"8px"},children:(0,T.jsx)(n.Z,{sx:{display:"flex",alignItems:"center",gap:"1rem"},children:(0,T.jsxs)(i.Z,{direction:"row",spacing:0,alignItems:"center",children:[(0,T.jsx)(c.Z,{variant:"contained",onClick:()=>G((e=>Math.max(e-1,1))),disabled:K<=1,sx:{flex:1,height:"40px",border:"1px solid",borderColor:$?"white":"black",color:$?"white":"black",backgroundColor:"red","&:hover":{backgroundColor:"darkred"}},children:(0,T.jsx)(j.iFH,{})}),(0,T.jsx)(c.Z,{variant:"contained",sx:{flex:1,height:"40px",border:"1px solid",borderColor:$?"white":"black",color:$?"white":"black",backgroundColor:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(10px)",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.2)"}},children:K}),(0,T.jsx)(c.Z,{variant:"contained",onClick:()=>G((e=>Math.min(e+1,E.rM.WORKSHOPS_BOOKING_LIMIT))),disabled:K>=E.rM.WORKSHOPS_BOOKING_LIMIT,sx:{flex:1,height:"40px",border:"1px solid",borderColor:$?"white":"black",color:$?"white":"black",backgroundColor:"green","&:hover":{backgroundColor:"darkgreen"}},children:(0,T.jsx)(j.wEH,{})})]})})})]})]})}),(0,T.jsx)(c.Z,{variant:"contained",onClick:async()=>{if(!Y)return W("Please login to book","warning"),void L("/login");try{const e={userId:Y,entityType:E.Ul.WORKSHOPS,entityId:_,associatedStudioId:F.StudioId,emailLearner:z,personsAllowed:K,pricePerPerson:F.price,internetConvCharges:E.rM.INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR,totalPrice:q},o=await(0,y.C9)(e);if(o&&200===o.nSuccessCode)W("Workshop booked","success");else if(o&&205===o.nSuccessCode){const e=o.bookedAt,r=new Date(1e3*e).toLocaleString();W(`Workshop already booked at ${r}`,"info")}else{const e=o?`Error: ${JSON.stringify(o)}`:"An unknown error occurred.";W(e,"error")}}catch(e){console.error(e),W((null===e||void 0===e?void 0:e.message)||"Something went wrong","error")}},sx:{textTransform:"none",fontSize:16,padding:"8px 16px",backgroundColor:$?"white":"black",color:$?"black":"white","&:hover":{backgroundColor:$?"#f0f0f0":"#333333"}},children:Y?`Book Now @${q}`:"Login to Book"}),(0,T.jsx)(c.Z,{variant:"text",onClick:()=>{J(!0)},sx:{textTransform:"none",fontSize:16,color:$?"white":"black","&:hover":{backgroundColor:"transparent",textDecoration:"none"}},children:"Price Breakdown (i)"}),Y&&(0,T.jsx)(a.Z,{variant:"caption",sx:{mt:"0.5rem",textAlign:"center"},children:"Book and groove at the venue"})]})]})}),(0,T.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,T.jsx)(a.Z,{variant:"h4",style:{color:$?"white":"black",textTransform:"none",textDecoration:"none"},gutterBottom:!0,children:F.workshopName||"Workshop Name"}),(0,T.jsxs)(a.Z,{variant:"subtitle1",style:{color:$?"white":"black",textTransform:"none",textDecoration:"none"},gutterBottom:!0,children:["By ",(null===(r=F.studioDetails)||void 0===r?void 0:r.studioName)||"Studio Name",F.danceStyles&&F.danceStyles.length>0&&(0,T.jsxs)(T.Fragment,{children:[" ","| ",F.danceStyles.join(", ")]})]}),(0,T.jsx)(d.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:(null===(Z=E.RY[F.level])||void 0===Z?void 0:Z.backgroundColor)||"grey",color:(null===(A=E.RY[F.level])||void 0===A?void 0:A.color)||"white"},label:F.level}),(0,T.jsxs)(n.Z,{sx:{display:"flex",gap:"0.5rem",mb:"1rem",color:$?"white":"black"},children:[(null===(U=F.studioDetails)||void 0===U?void 0:U.whatsappNumber)&&(0,T.jsx)(h.Z,{color:"success",size:"small",target:"_blank",rel:"noopener noreferrer",href:`https://wa.me/91${F.studioDetails.whatsappNumber}?text=${Q}`,children:(0,T.jsx)(n.Z,{component:"img",src:N,alt:"WhatsApp",sx:{width:30,height:28}})}),(null===(D=F.studioDetails)||void 0===D?void 0:D.mobileNumber)&&(0,T.jsx)(h.Z,{color:"primary",size:"small",target:"_blank",rel:"noopener noreferrer",href:`tel:${F.studioDetails.mobileNumber}`,children:(0,T.jsx)(n.Z,{component:"img",src:v,alt:"Phone Call",sx:{width:30,height:28}})})]}),(0,T.jsx)(a.Z,{variant:"body1 ",style:{color:$?"white":"black"},children:F.description||"Workshop Description"})]})]}),(0,T.jsxs)(u.Z,{open:V,onClose:X,fullWidth:!0,maxWidth:"sm",children:[(0,T.jsx)(g.Z,{children:"Price Breakdown"}),(0,T.jsx)(p.Z,{children:(0,T.jsxs)(x.Z,{children:[(0,T.jsx)(f.Z,{children:(0,T.jsxs)(b.Z,{children:[(0,T.jsx)(m.Z,{children:(0,T.jsx)("strong",{children:"Item"})}),(0,T.jsx)(m.Z,{align:"right",children:(0,T.jsx)("strong",{children:"Amount (\u20b9)"})})]})}),(0,T.jsxs)(S.Z,{children:[(0,T.jsxs)(b.Z,{children:[(0,T.jsx)(m.Z,{children:"Price per Person"}),(0,T.jsx)(m.Z,{align:"right",children:F.price})]}),(0,T.jsxs)(b.Z,{children:[(0,T.jsx)(m.Z,{children:"Number of Persons"}),(0,T.jsx)(m.Z,{align:"right",children:K})]}),(0,T.jsxs)(b.Z,{children:[(0,T.jsx)(m.Z,{children:"Subtotal"}),(0,T.jsx)(m.Z,{align:"right",children:F.price*K})]}),(0,T.jsxs)(b.Z,{children:[(0,T.jsx)(m.Z,{children:"Internet Convenience Charges"}),(0,T.jsx)(m.Z,{align:"right",children:E.rM.INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR})]}),(0,T.jsxs)(b.Z,{children:[(0,T.jsx)(m.Z,{children:(0,T.jsx)("strong",{children:"Total Price"})}),(0,T.jsx)(m.Z,{align:"right",children:(0,T.jsxs)("strong",{children:["\u20b9",q]})})]})]})]})}),(0,T.jsx)(k.Z,{children:(0,T.jsx)(c.Z,{onClick:X,variant:"outlined",children:"Close"})})]})]})}},83708:(e,o,r)=>{r.d(o,{A3:()=>x,DM:()=>d,QP:()=>f,RY:()=>h,Rb:()=>p,Ul:()=>g,i0:()=>s,lt:()=>u,n$:()=>l,rM:()=>i,uM:()=>c,zq:()=>a});var t=r(59135),n=r(80184);const l={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},s={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},a={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},i={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},c={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},h={[a.ALL]:d.GREEN,[a.BEGINNERS]:d.BLUE,[a.INTERMEDIATE]:d.YELLOW,[a.ADVANCED]:d.RED},u=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],g={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},p={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},x="https://nrityaserver-2b241e0a97e5.herokuapp.com/",f={AC:(0,n.jsx)(t.l51,{}),"Free Wifi":(0,n.jsx)(t._0,{}),"RO Water":(0,n.jsx)(t.EXY,{}),Toilet:(0,n.jsx)(t.Iev,{}),"Power Backup":(0,n.jsx)(t.eKD,{}),"Fire Extinguisher":(0,n.jsx)(t.Ybg,{}),"First Aid Kit":(0,n.jsx)(t.FZx,{}),"CCTV Camera":(0,n.jsx)(t.KoQ,{}),"Card Payment":(0,n.jsx)(t.ypE,{}),"Parking Space":(0,n.jsx)(t.mxg,{})}},18406:(e,o,r)=>{r.d(o,{C9:()=>n});var t=r(83708);const n=async e=>{const o=`${t.uM.PROD}bookings/bookEntity/`;try{const r=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e.userId,entityType:e.entityType,entityId:e.entityId,associatedStudioId:e.associatedStudioId,emailLearner:e.emailLearner,personsAllowed:e.personsAllowed,pricePerPerson:e.pricePerPerson})}),t=await r.json();return r.ok?(console.log("Booking successful:",t),t):(console.error("Booking failed:",t),t)}catch(r){return console.error("Error occurred while booking:",r),null}}},68449:(e,o,r)=>{r.d(o,{FV:()=>S,Km:()=>p,Ld:()=>d,Us:()=>c,XG:()=>k,Xt:()=>g,eg:()=>m,gv:()=>h,ih:()=>x,oM:()=>i,qS:()=>f,to:()=>u,xR:()=>b});var t=r(12481),n=r(10159),l=r(30276),s=r(83708),a=r(644);const i=async e=>{console.log("creatorMode uid",e);try{const o=(0,t.JU)(n.db,s.Ul.USER,e),r=await(0,t.QT)(o);if(r.exists())if(null!=r.data()){const e=r.data().CreatorMode;console.log("setCreatorMode: Is User a creator?",e),a.Z.setItem("CreatorMode",e)}else console.log("userSnap.data() null");else console.log("User not found")}catch(o){console.log(" error",o)}},c=async(e,o)=>{console.log("Debug ",`${e}/${o}`);const r=`${e}/${o}`,t=(0,l.iH)(n.tO,r);try{const e=await(0,l.aF)(t);if(e.items.length>0){const o=e.items[0],r=await(0,l.Jt)(o);return console.log("Debug URL:",r),r}return console.log("Debug No files found in the folder."),null}catch(s){return console.error("Error getting image URL:",s),null}},d=async(e,o)=>{const r=(0,t.JU)(n.db,e,o),l=await(0,t.QT)(r);return l.exists()?l.data():null},h=async(e,o,r)=>{const l=(0,t.JU)(n.db,e,o);return await(0,t.pl)(l,r,{merge:!0}),r},u=async(e,o,r)=>{const l=(0,t.JU)(n.db,e,o);return await(0,t.r7)(l,{isPhoneNumberVerified:!0,phoneNumber:r}),!0},g=async(e,o,r)=>{const l=(0,t.JU)(n.db,e,o);return await(0,t.r7)(l,r),{id:o,...r}},p=async(e,o,r,l)=>{console.log("Hiii ",e,o,r,l);const s=(0,t.IO)((0,t.hJ)(n.db,e),(0,t.ar)(o,r,l));return(await(0,t.Yp)(s)).data().count},x=async(e,o)=>{const r=`${e}/${o}`,t=(0,l.iH)(n.tO,r),s=await(0,l.aF)(t);await Promise.all(s.items.map((async e=>{await(0,l.oq)(e)})))},f=async(e,o,r)=>{const t=`${e}/${o}/${r}`,s=(0,l.iH)(n.tO,t),a=await(0,l.aF)(s);await Promise.all(a.items.map((async e=>{await(0,l.oq)(e)})))},b=async function(e,o,r,t){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const a=o.length;let i=0;await Promise.all(o.map((async o=>{let c=`${e}/${r}/${o.filename}`;s&&(c=`${e}/${r}/${s}/${o.filename}`);const d=(0,l.iH)(n.tO,c);await(0,l.oq)(d),i+=1,t(i/a*100)})))},m=async function(e,o,r,t){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(e,r);const a=o.length;let i=0;await Promise.all(o.map((async o=>{let c=`${e}/${r}`;s&&(c=`${e}/${r}/${s}`);const d=(0,l.iH)(n.tO,`${c}/${o.file.name}`);await(0,l.KV)(d,o.file),i+=1,t(i/a*100)})))},S=async function(e,o,r){let t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,i=`${e}/${r}`;t&&(i=`${e}/${r}/${t}`),console.log(o,o.name);const c=(0,l.iH)(n.tO,`${i}/${o.name}`),d=(0,l.B0)(c,o);d.on("state_changed",(e=>{const o=e.totalBytes,r=e.bytesTransferred,t=o>0?(r/o*100).toFixed(2):-1;switch(s(t),console.log("Upload is "+t+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(e=>{e.code}),(()=>{(0,l.Jt)(d.snapshot.ref).then((e=>{console.log("File available at",e),a(e)}))}))},k=async e=>{const o=`${e}`,r=(0,l.iH)(n.tO,o);try{const e=await(0,l.aF)(r);return await Promise.all(e.items.map((async e=>{const o=await(0,l.Jt)(e);return{id:e.name,filename:e.name,fileURL:o}})))}catch(t){throw console.error("Error retrieving images:",t),t}}},10884:(e,o,r)=>{e.exports=r.p+"static/media/india_11009487.98ac2ba43166eaa84593.png"},49071:(e,o,r)=>{e.exports=r.p+"static/media/whatsapp.8d81ece5885274edfd73.png"}}]);
//# sourceMappingURL=9195.e2a93b6c.chunk.js.map