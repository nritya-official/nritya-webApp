"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[8393],{68393:(o,e,t)=>{t.r(e),t.d(e,{default:()=>h});var a=t(72791),r=t(57689),n=t(10159),c=t(98255),s=t(12481),l=t(83708),i=t(89743),d=t(2677),u=t(59434),f=t(60717),g=t(89164),E=t(94294),m=t(68449),I=t(18406),p=t(80184);const h=function(o){let{onLogin:e,setIsLoggedIn:t}=o;const[h,C]=(0,a.useState)(!1),S=((0,u.v9)(f.w),(0,r.s0)()),y=async()=>{try{const a=await(0,c.rh)(n.I8,n.Ap),r=c.hJ.credentialFromResult(a),i=r.accessToken,d=r.idToken;console.log("Access token",i),console.log("Id token",d);const u=a.user;if(console.log("Post login :",u),console.log("UserId",u.uid),console.log("Result ",a),a){var o;let e=await(null===(o=n.I8.currentUser)||void 0===o?void 0:o.getIdToken());console.log("token",e),localStorage.setItem("authToken",e)}e({UserId:u.uid,email:u.email,isPremium:u.isPremium,displayName:u.displayName,WorkshopCreated:u.WorkshopCreated,WorkshopEnrolled:u.WorkshopEnrolled,CreatorMode:!1,photoURL:u.photoURL},u),t(!0),await(async o=>{try{const e=(0,s.JU)(n.db,l.Ul.USER,o.uid);if((await(0,s.QT)(e)).exists())console.log("User there");else{console.log("No such document!");const e={Name:o.displayName,Email:o.email,DoB:null,UserId:o.uid,WorkshopCreated:[],WorkshopEnrolled:[],Cart:[],CreatorMode:!1,KycIdList:{},StudioCreated:[],premiumTill:!1,TransactionIDs:[],recentlyWatched:{0:"",1:"",2:"",3:"",4:""}},t=o.email,a={user_id:o.uid},r=await(0,I.qC)(e,l.Ul.USER,t,a);r.ok?console.log("User added successfully"):console.error(r)}const t=(0,s.JU)(n.db,l.Ul.USER,o.uid),a=await(0,s.QT)(t);localStorage.setItem("userDetails",JSON.stringify({UserId:o.uid,email:o.email,isPremium:a.data().isPremium,displayName:a.data().displayName,WorkshopCreated:a.data().WorkshopCreated,WorkshopEnrolled:a.data().WorkshopEnrolled}))}catch(e){console.error("Error adding user: ",e)}})(u),await(0,m.oM)(u.uid),S("/")}catch(a){a.code,a.message;console.log("Invalid username or password"),C(!0)}};return(0,p.jsx)(g.Z,{fluid:!0,className:"custom-container-main",children:(0,p.jsx)(i.Z,{children:(0,p.jsx)(d.Z,{xs:12,md:12,children:(0,p.jsx)("div",{children:(0,p.jsx)("form",{className:"custom-login-form",onSubmit:o=>{o.preventDefault(),y()},style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"15px 0"},children:(0,p.jsxs)(E.Z,{type:"submit",style:{backgroundColor:"#D9D9D9",color:"#000",borderRadius:"6px",textTransform:"none",border:"1px solid #777",padding:"8px 16px"},children:[(0,p.jsx)("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google Icon",style:{marginRight:"10px",height:"20px"}}),"Sign In with Google"]})})})})})})}},83708:(o,e,t)=>{t.d(e,{A3:()=>m,DM:()=>d,QP:()=>I,RY:()=>u,Rb:()=>E,Ul:()=>g,i0:()=>c,lt:()=>f,n$:()=>n,rM:()=>l,uM:()=>i,zq:()=>s});var a=t(59135),r=t(80184);const n={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},c={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},s={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},l={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},i={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},u={[s.ALL]:d.GREEN,[s.BEGINNERS]:d.BLUE,[s.INTERMEDIATE]:d.YELLOW,[s.ADVANCED]:d.RED},f=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],g={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},E={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},m="https://nrityaserver-2b241e0a97e5.herokuapp.com/",I={AC:(0,r.jsx)(a.l51,{}),"Free Wifi":(0,r.jsx)(a._0,{}),"RO Water":(0,r.jsx)(a.EXY,{}),Toilet:(0,r.jsx)(a.Iev,{}),"Power Backup":(0,r.jsx)(a.eKD,{}),"Fire Extinguisher":(0,r.jsx)(a.Ybg,{}),"First Aid Kit":(0,r.jsx)(a.FZx,{}),"CCTV Camera":(0,r.jsx)(a.KoQ,{}),"Card Payment":(0,r.jsx)(a.ypE,{}),"Parking Space":(0,r.jsx)(a.mxg,{})}},18406:(o,e,t)=>{t.d(e,{C9:()=>c,P9:()=>s,fP:()=>n,qC:()=>r});var a=t(83708);async function r(o,e,t,r){const n=a.A3,c=localStorage.getItem("authToken");try{const a=await fetch(n+"crud/newEntity/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},body:JSON.stringify({data:o,collection_name:e,notify:t,metadata:r})});if(!a.ok)throw console.log("Error in postData:",a),new Error("HTTP error! status: ".concat(a.status));return a}catch(s){throw console.error("Error in postData:",s),s}}async function n(o,e,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const c=a.A3,s="crud/updateEntity/".concat(t),l=localStorage.getItem("authToken");try{const t=await fetch(c+s,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l)},body:JSON.stringify({data:o,collection_name:e,notify:r,metadata:n})});if(!t.ok)throw console.log("Error in postData:",t),new Error("HTTP error! status: ".concat(t.status));return t}catch(i){throw console.error("Error in postData:",i),i}}const c=async o=>{const e="".concat(a.uM.PROD,"bookings/bookEntity/");try{const t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:o.userId,entityType:o.entityType,entityId:o.entityId,associatedStudioId:o.associatedStudioId,emailLearner:o.emailLearner,personsAllowed:o.personsAllowed,pricePerPerson:o.pricePerPerson})}),a=await t.json();return t.ok?(console.log("Booking successful:",a),a):(console.error("Booking failed:",a),a)}catch(t){return console.error("Error occurred while booking:",t),null}},s=o=>{if(console.log("MediaDisplay",o),!o)return null;const e=o.trim().match(/(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w\-]+)/);let t=null;return e&&(t=e[1]),console.log("MediaDisplay",t),t}},68449:(o,e,t)=>{t.d(e,{FV:()=>C,Km:()=>E,Ld:()=>d,Us:()=>i,XG:()=>S,Xt:()=>g,eg:()=>h,gv:()=>u,ih:()=>m,oM:()=>l,qS:()=>I,to:()=>f,xR:()=>p});var a=t(12481),r=t(10159),n=t(30276),c=t(83708),s=t(644);const l=async o=>{console.log("creatorMode uid",o);try{const e=(0,a.JU)(r.db,c.Ul.USER,o),t=await(0,a.QT)(e);if(t.exists())if(null!=t.data()){const o=t.data().CreatorMode;console.log("setCreatorMode: Is User a creator?",o),s.Z.setItem("CreatorMode",o)}else console.log("userSnap.data() null");else console.log("User not found")}catch(e){console.log(" error",e)}},i=async(o,e)=>{console.log("Debug ","".concat(o,"/").concat(e));const t="".concat(o,"/").concat(e),a=(0,n.iH)(r.tO,t);try{const o=await(0,n.aF)(a);if(o.items.length>0){const e=o.items[0],t=await(0,n.Jt)(e);return console.log("Debug URL:",t),t}return console.log("Debug No files found in the folder."),null}catch(c){return console.error("Error getting image URL:",c),null}},d=async(o,e)=>{const t=(0,a.JU)(r.db,o,e),n=await(0,a.QT)(t);return n.exists()?n.data():null},u=async(o,e,t)=>{const n=(0,a.JU)(r.db,o,e);return await(0,a.pl)(n,t,{merge:!0}),t},f=async(o,e,t)=>{const n=(0,a.JU)(r.db,o,e);return await(0,a.r7)(n,{isPhoneNumberVerified:!0,phoneNumber:t}),!0},g=async(o,e,t)=>{const n=(0,a.JU)(r.db,o,e);return await(0,a.r7)(n,t),{id:e,...t}},E=async(o,e,t,n)=>{console.log("Hiii ",o,e,t,n);const c=(0,a.IO)((0,a.hJ)(r.db,o),(0,a.ar)(e,t,n));return(await(0,a.Yp)(c)).data().count},m=async(o,e)=>{const t="".concat(o,"/").concat(e),a=(0,n.iH)(r.tO,t),c=await(0,n.aF)(a);await Promise.all(c.items.map((async o=>{await(0,n.oq)(o)})))},I=async(o,e,t)=>{const a="".concat(o,"/").concat(e,"/").concat(t),c=(0,n.iH)(r.tO,a),s=await(0,n.aF)(c);await Promise.all(s.items.map((async o=>{await(0,n.oq)(o)})))},p=async function(o,e,t,a){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const s=e.length;let l=0;await Promise.all(e.map((async e=>{let i="".concat(o,"/").concat(t,"/").concat(e.filename);c&&(i="".concat(o,"/").concat(t,"/").concat(c,"/").concat(e.filename));const d=(0,n.iH)(r.tO,i);await(0,n.oq)(d),l+=1,a(l/s*100)})))},h=async function(o,e,t,a){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(o,t);const s=e.length;let l=0;await Promise.all(e.map((async e=>{let i="".concat(o,"/").concat(t);c&&(i="".concat(o,"/").concat(t,"/").concat(c));const d=(0,n.iH)(r.tO,"".concat(i,"/").concat(e.file.name));await(0,n.KV)(d,e.file),l+=1,a(l/s*100)})))},C=async function(o,e,t){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,l="".concat(o,"/").concat(t);a&&(l="".concat(o,"/").concat(t,"/").concat(a)),console.log(e,e.name);const i=(0,n.iH)(r.tO,"".concat(l,"/").concat(e.name)),d=(0,n.B0)(i,e);d.on("state_changed",(o=>{const e=o.totalBytes,t=o.bytesTransferred,a=e>0?(t/e*100).toFixed(2):-1;switch(c(a),console.log("Upload is "+a+"% done"),o.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(o=>{o.code}),(()=>{(0,n.Jt)(d.snapshot.ref).then((o=>{console.log("File available at",o),s(o)}))}))},S=async o=>{const e="".concat(o),t=(0,n.iH)(r.tO,e);try{const o=await(0,n.aF)(t);return await Promise.all(o.items.map((async o=>{const e=await(0,n.Jt)(o);return{id:o.name,filename:o.name,fileURL:e}})))}catch(a){throw console.error("Error retrieving images:",a),a}}}}]);
//# sourceMappingURL=8393.124c445b.chunk.js.map