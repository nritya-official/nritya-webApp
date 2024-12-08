"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9212],{79212:(o,a,n)=>{n.r(a),n.d(a,{default:()=>g});var e=n(25167),c=n(43360),t=n(10159),r=n(60717),s=n(59434),l=n(61221),i=n(72791),d=n(644),f=n(68449),u=n(80184);const g=function(o){let{showProfileOffcanvas:a,closeProfileOffcanvas:n}=o;const g=(0,s.v9)(r.w);(0,i.useEffect)((()=>{(()=>{let o=0;const a=JSON.parse(localStorage.getItem("userInfoFull")),n=null===a||void 0===a?void 0:a.uid;for(;o<2&&null==d.Z.getItem("CreatorMode");)(0,f.oM)(n),o+=1})()}),[]);const E=[{action:()=>window.location.hash="#/profile",name:"Profile",show:!0},{action:()=>window.location.hash="#/transactions",name:"Transactions",show:!0},{action:()=>window.location.hash="#/creatorDashboard",name:"Dashboard",show:d.Z.getItem("CreatorMode")},{action:()=>window.location.hash="#/myBookings",name:"Bookings",show:!0},{action:async()=>{console.log("Logging out SideMenu");try{await t.I8.signOut(),localStorage.clear(),d.Z.clear()}catch(o){console.error("Error during logout:",o.message)}},name:"Sign Out",show:!0}];return(0,u.jsxs)(e.Z,{style:{width:"20rem",backgroundColor:g?"black":"white",color:g?"white":"black"},show:a,onHide:n,children:[(0,u.jsx)(e.Z.Header,{closeButton:!0,children:(0,u.jsx)("img",{style:{width:"6rem",height:"6rem",borderRadius:"50%"},src:l,alt:"Logo"})}),(0,u.jsx)(e.Z.Body,{children:(0,u.jsx)("ul",{className:"menu",children:(0,u.jsx)("ul",{className:"vertical-menu",children:E.map(((o,a)=>{let{action:n,name:e,show:t}=o;return(0,u.jsx)("li",{hidden:!t,children:(0,u.jsx)(c.Z,{variant:"outline-warning",className:"rounded-pill menu-button",onClick:n,children:e})},a)}))})})})]})}},83708:(o,a,n)=>{n.d(a,{A3:()=>I,DM:()=>d,QP:()=>O,RY:()=>f,Rb:()=>E,Ul:()=>g,i0:()=>r,lt:()=>u,n$:()=>t,rM:()=>l,uM:()=>i,zq:()=>s});var e=n(59135),c=n(80184);const t={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},r={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},s={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},l={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},i={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},f={[s.ALL]:d.GREEN,[s.BEGINNERS]:d.BLUE,[s.INTERMEDIATE]:d.YELLOW,[s.ADVANCED]:d.RED},u=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],g={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},E={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},I="https://nrityaserver-2b241e0a97e5.herokuapp.com/",O={AC:(0,c.jsx)(e.l51,{}),"Free Wifi":(0,c.jsx)(e._0,{}),"RO Water":(0,c.jsx)(e.EXY,{}),Toilet:(0,c.jsx)(e.Iev,{}),"Power Backup":(0,c.jsx)(e.eKD,{}),"Fire Extinguisher":(0,c.jsx)(e.Ybg,{}),"First Aid Kit":(0,c.jsx)(e.FZx,{}),"CCTV Camera":(0,c.jsx)(e.KoQ,{}),"Card Payment":(0,c.jsx)(e.ypE,{}),"Parking Space":(0,c.jsx)(e.mxg,{})}},68449:(o,a,n)=>{n.d(a,{FV:()=>R,Km:()=>E,Ld:()=>d,Us:()=>i,XG:()=>h,Xt:()=>g,eg:()=>S,gv:()=>f,ih:()=>I,oM:()=>l,qS:()=>O,to:()=>u,xR:()=>C});var e=n(12481),c=n(10159),t=n(30276),r=n(83708),s=n(644);const l=async o=>{console.log("creatorMode uid",o);try{const a=(0,e.JU)(c.db,r.Ul.USER,o),n=await(0,e.QT)(a);if(n.exists())if(null!=n.data()){const o=n.data().CreatorMode;console.log("setCreatorMode: Is User a creator?",o),s.Z.setItem("CreatorMode",o)}else console.log("userSnap.data() null");else console.log("User not found")}catch(a){console.log(" error",a)}},i=async(o,a)=>{console.log("Debug ","".concat(o,"/").concat(a));const n="".concat(o,"/").concat(a),e=(0,t.iH)(c.tO,n);try{const o=await(0,t.aF)(e);if(o.items.length>0){const a=o.items[0],n=await(0,t.Jt)(a);return console.log("Debug URL:",n),n}return console.log("Debug No files found in the folder."),null}catch(r){return console.error("Error getting image URL:",r),null}},d=async(o,a)=>{const n=(0,e.JU)(c.db,o,a),t=await(0,e.QT)(n);return t.exists()?t.data():null},f=async(o,a,n)=>{const t=(0,e.JU)(c.db,o,a);return await(0,e.pl)(t,n,{merge:!0}),n},u=async(o,a,n)=>{const t=(0,e.JU)(c.db,o,a);return await(0,e.r7)(t,{isPhoneNumberVerified:!0,phoneNumber:n}),!0},g=async(o,a,n)=>{const t=(0,e.JU)(c.db,o,a);return await(0,e.r7)(t,n),{id:a,...n}},E=async(o,a,n,t)=>{console.log("Hiii ",o,a,n,t);const r=(0,e.IO)((0,e.hJ)(c.db,o),(0,e.ar)(a,n,t));return(await(0,e.Yp)(r)).data().count},I=async(o,a)=>{const n="".concat(o,"/").concat(a),e=(0,t.iH)(c.tO,n),r=await(0,t.aF)(e);await Promise.all(r.items.map((async o=>{await(0,t.oq)(o)})))},O=async(o,a,n)=>{const e="".concat(o,"/").concat(a,"/").concat(n),r=(0,t.iH)(c.tO,e),s=await(0,t.aF)(r);await Promise.all(s.items.map((async o=>{await(0,t.oq)(o)})))},C=async function(o,a,n,e){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const s=a.length;let l=0;await Promise.all(a.map((async a=>{let i="".concat(o,"/").concat(n,"/").concat(a.filename);r&&(i="".concat(o,"/").concat(n,"/").concat(r,"/").concat(a.filename));const d=(0,t.iH)(c.tO,i);await(0,t.oq)(d),l+=1,e(l/s*100)})))},S=async function(o,a,n,e){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(o,n);const s=a.length;let l=0;await Promise.all(a.map((async a=>{let i="".concat(o,"/").concat(n);r&&(i="".concat(o,"/").concat(n,"/").concat(r));const d=(0,t.iH)(c.tO,"".concat(i,"/").concat(a.file.name));await(0,t.KV)(d,a.file),l+=1,e(l/s*100)})))},R=async function(o,a,n){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,l="".concat(o,"/").concat(n);e&&(l="".concat(o,"/").concat(n,"/").concat(e)),console.log(a,a.name);const i=(0,t.iH)(c.tO,"".concat(l,"/").concat(a.name)),d=(0,t.B0)(i,a);d.on("state_changed",(o=>{const a=o.totalBytes,n=o.bytesTransferred,e=a>0?(n/a*100).toFixed(2):-1;switch(r(e),console.log("Upload is "+e+"% done"),o.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(o=>{o.code}),(()=>{(0,t.Jt)(d.snapshot.ref).then((o=>{console.log("File available at",o),s(o)}))}))},h=async o=>{const a="".concat(o),n=(0,t.iH)(c.tO,a);try{const o=await(0,t.aF)(n);return await Promise.all(o.items.map((async o=>{const a=await(0,t.Jt)(o);return{id:o.name,filename:o.name,fileURL:a}})))}catch(e){throw console.error("Error retrieving images:",e),e}}},61221:(o,a,n)=>{o.exports=n.p+"static/media/logo.aacdd5500f6cc7277585.png"}}]);
//# sourceMappingURL=9212.e767c884.chunk.js.map