"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9212],{79212:(o,a,e)=>{e.r(a),e.d(a,{default:()=>g});var n=e(25167),c=e(43360),t=e(10159),r=e(60717),s=e(59434),l=e(61221),i=e(72791),d=e(644),f=e(68449),u=e(80184);const g=function(o){let{showProfileOffcanvas:a,closeProfileOffcanvas:e}=o;const g=(0,s.v9)(r.w);(0,i.useEffect)((()=>{(()=>{let o=0;const a=JSON.parse(localStorage.getItem("userInfoFull")),e=null===a||void 0===a?void 0:a.uid;for(;o<2&&null==d.Z.getItem("CreatorMode");)(0,f.oM)(e),o+=1})()}),[]);const E=[{action:()=>window.location.hash="#/profile",name:"Profile",show:!0},{action:()=>window.location.hash="#/transactions",name:"Transactions",show:!0},{action:()=>window.location.hash="#/creatorDashboard",name:"Dashboard",show:d.Z.getItem("CreatorMode")},{action:()=>window.location.hash="#/myBookings",name:"Bookings",show:!0},{action:async()=>{console.log("Logging out SideMenu");try{await t.I8.signOut(),localStorage.clear(),d.Z.clear()}catch(o){console.error("Error during logout:",o.message)}},name:"Sign Out",show:!0}];return(0,u.jsxs)(n.Z,{style:{width:"20rem",backgroundColor:g?"black":"white",color:g?"white":"black"},show:a,onHide:e,children:[(0,u.jsx)(n.Z.Header,{closeButton:!0,children:(0,u.jsx)("img",{style:{width:"6rem",height:"6rem",borderRadius:"50%"},src:l,alt:"Logo"})}),(0,u.jsx)(n.Z.Body,{children:(0,u.jsx)("ul",{className:"menu",children:(0,u.jsx)("ul",{className:"vertical-menu",children:E.map(((o,a)=>{let{action:e,name:n,show:t}=o;return(0,u.jsx)("li",{hidden:!t,children:(0,u.jsx)(c.Z,{variant:"outline-warning",className:"rounded-pill menu-button",onClick:e,children:n})},a)}))})})})]})}},83708:(o,a,e)=>{e.d(a,{A3:()=>I,DM:()=>d,QP:()=>C,RY:()=>f,Rb:()=>E,Ul:()=>g,i0:()=>r,lt:()=>u,n$:()=>t,rM:()=>l,uM:()=>i,zq:()=>s});var n=e(56355),c=e(80184);const t={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},r={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},s={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},l={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},i={CLOUD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},f={[s.ALL]:d.GREEN,[s.BEGINNERS]:d.BLUE,[s.INTERMEDIATE]:d.YELLOW,[s.ADVANCED]:d.RED},u=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],g={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},E={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},I="https://nrityaserver-2b241e0a97e5.herokuapp.com/",C={AC:(0,c.jsx)(n.l51,{}),"Free Wifi":(0,c.jsx)(n._0,{}),"RO Water":(0,c.jsx)(n.EXY,{}),Toilet:(0,c.jsx)(n.Iev,{}),"Power Backup":(0,c.jsx)(n.eKD,{}),"Fire Extinguisher":(0,c.jsx)(n.Ybg,{}),"First Aid Kit":(0,c.jsx)(n.FZx,{}),"CCTV Camera":(0,c.jsx)(n.KoQ,{}),"Card Payment":(0,c.jsx)(n.ypE,{}),"Parking Space":(0,c.jsx)(n.mxg,{})}},68449:(o,a,e)=>{e.d(a,{FV:()=>R,Km:()=>C,Ld:()=>u,Us:()=>f,XG:()=>b,Xt:()=>I,eg:()=>h,gG:()=>d,gv:()=>g,ih:()=>O,oM:()=>i,qS:()=>m,to:()=>E,xR:()=>S});var n=e(1413),c=e(12481),t=e(10159),r=e(30276),s=e(83708),l=e(644);const i=async o=>{const a=s.A3,e="".concat(a,"crud/getUserMode/").concat(o);try{const o=await fetch(e),a=await o.json();if(a.success){let o=!1;!0===a.data&&(o=!0),l.Z.setItem("CreatorMode",o)}else console.log("Error: ",a.message||"Unknown error")}catch(n){console.log("Error fetching user mode: ",n),l.Z.setItem("CreatorMode",!1)}},d=async o=>(await i(o),await(async()=>{try{const o=l.Z.getItem("CreatorMode");return console.log("getCreatorMode ",o),o||!1}catch(o){return console.log(" error"),!1}})()),f=async(o,a)=>{console.log("Debug ","".concat(o,"/").concat(a));const e="".concat(o,"/").concat(a),n=(0,r.iH)(t.tO,e);try{const o=await(0,r.aF)(n);if(o.items.length>0){const a=o.items[0],e=await(0,r.Jt)(a);return console.log("Debug URL:",e),e}return console.log("Debug No files found in the folder."),null}catch(c){return console.error("Error getting image URL:",c),null}},u=async(o,a)=>{const e=(0,c.JU)(t.db,o,a),n=await(0,c.QT)(e);return n.exists()?n.data():null},g=async(o,a,e)=>{const n=(0,c.JU)(t.db,o,a);return await(0,c.pl)(n,e,{merge:!0}),e},E=async(o,a,e)=>{const n=(0,c.JU)(t.db,o,a);return await(0,c.r7)(n,{isPhoneNumberVerified:!0,phoneNumber:e}),!0},I=async(o,a,e)=>{const r=(0,c.JU)(t.db,o,a);return await(0,c.r7)(r,e),(0,n.Z)({id:a},e)},C=async(o,a,e,n)=>{console.log("Hiii ",o,a,e,n);const r=(0,c.IO)((0,c.hJ)(t.db,o),(0,c.ar)(a,e,n));return(await(0,c.Yp)(r)).data().count},O=async(o,a)=>{const e="".concat(o,"/").concat(a),n=(0,r.iH)(t.tO,e),c=await(0,r.aF)(n);await Promise.all(c.items.map((async o=>{await(0,r.oq)(o)})))},m=async(o,a,e)=>{const n="".concat(o,"/").concat(a,"/").concat(e),c=(0,r.iH)(t.tO,n),s=await(0,r.aF)(c);await Promise.all(s.items.map((async o=>{await(0,r.oq)(o)})))},S=async function(o,a,e,n){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const s=a.length;let l=0;await Promise.all(a.map((async a=>{let i="".concat(o,"/").concat(e,"/").concat(a.filename);c&&(i="".concat(o,"/").concat(e,"/").concat(c,"/").concat(a.filename));const d=(0,r.iH)(t.tO,i);await(0,r.oq)(d),l+=1,n(l/s*100)})))},h=async function(o,a,e,n){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(o,e);const s=a.length;let l=0;await Promise.all(a.map((async a=>{let i="".concat(o,"/").concat(e);c&&(i="".concat(o,"/").concat(e,"/").concat(c));const d=(0,r.iH)(t.tO,"".concat(i,"/").concat(a.file.name));await(0,r.KV)(d,a.file),l+=1,n(l/s*100)})))},R=async function(o,a,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,l="".concat(o,"/").concat(e);n&&(l="".concat(o,"/").concat(e,"/").concat(n)),console.log(a,a.name);const i=(0,r.iH)(t.tO,"".concat(l,"/").concat(a.name)),d=(0,r.B0)(i,a);d.on("state_changed",(o=>{const a=o.totalBytes,e=o.bytesTransferred,n=a>0?(e/a*100).toFixed(2):-1;switch(c(n),console.log("Upload is "+n+"% done"),o.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(o=>{o.code}),(()=>{(0,r.Jt)(d.snapshot.ref).then((o=>{console.log("File available at",o),s(o)}))}))},b=async o=>{const a="".concat(o),e=(0,r.iH)(t.tO,a);try{const o=await(0,r.aF)(e);return await Promise.all(o.items.map((async o=>{const a=await(0,r.Jt)(o);return{id:o.name,filename:o.name,fileURL:a}})))}catch(n){throw console.error("Error retrieving images:",n),n}}},61221:(o,a,e)=>{o.exports=e.p+"static/media/logo.aacdd5500f6cc7277585.png"}}]);
//# sourceMappingURL=9212.1248b8bf.chunk.js.map