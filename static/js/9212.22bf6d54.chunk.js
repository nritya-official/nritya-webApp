"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9212],{79212:(o,a,c)=>{c.r(a),c.d(a,{default:()=>g});var n=c(25167),e=c(43360),t=c(10159),r=c(60717),s=c(59434),l=c(61221),i=c(72791),d=c(644),f=c(68449),u=c(80184);const g=function(o){let{showProfileOffcanvas:a,closeProfileOffcanvas:c}=o;const g=(0,s.v9)(r.w);(0,i.useEffect)((()=>{(()=>{let o=0;const a=JSON.parse(localStorage.getItem("userInfoFull")),c=null===a||void 0===a?void 0:a.uid;for(;o<2&&null==d.Z.getItem("CreatorMode");)(0,f.oM)(c),o+=1})()}),[]);const E=[{action:()=>window.location.hash="#/profile",name:"Profile",show:!0},{action:()=>window.location.hash="#/transactions",name:"Transactions",show:!0},{action:()=>window.location.hash="#/creatorDashboard",name:"Dashboard",show:d.Z.getItem("CreatorMode")},{action:()=>window.location.hash="#/myBookings",name:"Bookings",show:!0},{action:async()=>{console.log("Logging out SideMenu");try{await t.I8.signOut(),localStorage.clear(),d.Z.clear()}catch(o){console.error("Error during logout:",o.message)}},name:"Sign Out",show:!0}];return(0,u.jsxs)(n.Z,{style:{width:"20rem",backgroundColor:g?"black":"white",color:g?"white":"black"},show:a,onHide:c,children:[(0,u.jsx)(n.Z.Header,{closeButton:!0,children:(0,u.jsx)("img",{style:{width:"6rem",height:"6rem",borderRadius:"50%"},src:l,alt:"Logo"})}),(0,u.jsx)(n.Z.Body,{children:(0,u.jsx)("ul",{className:"menu",children:(0,u.jsx)("ul",{className:"vertical-menu",children:E.map(((o,a)=>{let{action:c,name:n,show:t}=o;return(0,u.jsx)("li",{hidden:!t,children:(0,u.jsx)(e.Z,{variant:"outline-warning",className:"rounded-pill menu-button",onClick:c,children:n})},a)}))})})})]})}},83708:(o,a,c)=>{c.d(a,{A3:()=>I,DM:()=>d,QP:()=>C,RY:()=>f,Rb:()=>E,Ul:()=>g,i0:()=>r,lt:()=>u,n$:()=>t,rM:()=>l,uM:()=>i,zq:()=>s});var n=c(56355),e=c(80184);const t={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},r={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},s={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},l={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},i={CLOUD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},f={[s.ALL]:d.GREEN,[s.BEGINNERS]:d.BLUE,[s.INTERMEDIATE]:d.YELLOW,[s.ADVANCED]:d.RED},u=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],g={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},E={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},I="https://nrityaserver-2b241e0a97e5.herokuapp.com/",C={AC:(0,e.jsx)(n.l51,{}),"Free Wifi":(0,e.jsx)(n._0,{}),"RO Water":(0,e.jsx)(n.EXY,{}),Toilet:(0,e.jsx)(n.Iev,{}),"Power Backup":(0,e.jsx)(n.eKD,{}),"Fire Extinguisher":(0,e.jsx)(n.Ybg,{}),"First Aid Kit":(0,e.jsx)(n.FZx,{}),"CCTV Camera":(0,e.jsx)(n.KoQ,{}),"Card Payment":(0,e.jsx)(n.ypE,{}),"Parking Space":(0,e.jsx)(n.mxg,{})}},68449:(o,a,c)=>{c.d(a,{FV:()=>w,Km:()=>O,Ld:()=>g,Us:()=>u,XG:()=>b,Xt:()=>C,eg:()=>R,gG:()=>f,gY:()=>d,gv:()=>E,ih:()=>h,oM:()=>i,qS:()=>m,to:()=>I,xR:()=>S});var n=c(1413),e=c(12481),t=c(10159),r=c(30276),s=c(83708),l=c(644);const i=async o=>{const a=s.A3,c="".concat(a,"crud/getUserMode/").concat(o);try{const o=await fetch(c),a=await o.json();if(a.success){let o=!1;!0===a.data&&(o=!0),l.Z.setItem("CreatorMode",o)}else console.log("Error: ",a.message||"Unknown error")}catch(n){console.log("Error fetching user mode: ",n),l.Z.setItem("CreatorMode",!1)}},d=async(o,a,c)=>{const n=s.A3;try{const e="".concat(n,"crud/").concat(o,"/").concat(a,"/");console.log(e);const t=await fetch(e),r=await t.json();r.success?c(r.data):console.error("Error fetching ".concat(a,":"),r.error)}catch(e){console.error("Error fetching ".concat(a,":"),e)}},f=async o=>(await i(o),await(async()=>{try{const o=l.Z.getItem("CreatorMode");return console.log("getCreatorMode ",o),o||!1}catch(o){return console.log(" error"),!1}})()),u=async(o,a)=>{console.log("Debug ","".concat(o,"/").concat(a));const c="".concat(o,"/").concat(a),n=(0,r.iH)(t.tO,c);try{const o=await(0,r.aF)(n);if(o.items.length>0){const a=o.items[0],c=await(0,r.Jt)(a);return console.log("Debug URL:",c),c}return console.log("Debug No files found in the folder."),null}catch(e){return console.error("Error getting image URL:",e),null}},g=async(o,a)=>{const c=(0,e.JU)(t.db,o,a),n=await(0,e.QT)(c);return n.exists()?n.data():null},E=async(o,a,c)=>{const n=(0,e.JU)(t.db,o,a);return await(0,e.pl)(n,c,{merge:!0}),c},I=async(o,a,c)=>{const n=(0,e.JU)(t.db,o,a);return await(0,e.r7)(n,{isPhoneNumberVerified:!0,phoneNumber:c}),!0},C=async(o,a,c)=>{const r=(0,e.JU)(t.db,o,a);return await(0,e.r7)(r,c),(0,n.Z)({id:a},c)},O=async(o,a,c,n)=>{console.log("Hiii ",o,a,c,n);const r=(0,e.IO)((0,e.hJ)(t.db,o),(0,e.ar)(a,c,n));return(await(0,e.Yp)(r)).data().count},h=async(o,a)=>{const c="".concat(o,"/").concat(a),n=(0,r.iH)(t.tO,c),e=await(0,r.aF)(n);await Promise.all(e.items.map((async o=>{await(0,r.oq)(o)})))},m=async(o,a,c)=>{const n="".concat(o,"/").concat(a,"/").concat(c),e=(0,r.iH)(t.tO,n),s=await(0,r.aF)(e);await Promise.all(s.items.map((async o=>{await(0,r.oq)(o)})))},S=async function(o,a,c,n){let e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const s=a.length;let l=0;await Promise.all(a.map((async a=>{let i="".concat(o,"/").concat(c,"/").concat(a.filename);e&&(i="".concat(o,"/").concat(c,"/").concat(e,"/").concat(a.filename));const d=(0,r.iH)(t.tO,i);await(0,r.oq)(d),l+=1,n(l/s*100)})))},R=async function(o,a,c,n){let e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(o,c);const s=a.length;let l=0;await Promise.all(a.map((async a=>{let i="".concat(o,"/").concat(c);e&&(i="".concat(o,"/").concat(c,"/").concat(e));const d=(0,r.iH)(t.tO,"".concat(i,"/").concat(a.file.name));await(0,r.KV)(d,a.file),l+=1,n(l/s*100)})))},w=async function(o,a,c){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,e=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,l="".concat(o,"/").concat(c);n&&(l="".concat(o,"/").concat(c,"/").concat(n)),console.log(a,a.name);const i=(0,r.iH)(t.tO,"".concat(l,"/").concat(a.name)),d=(0,r.B0)(i,a);d.on("state_changed",(o=>{const a=o.totalBytes,c=o.bytesTransferred,n=a>0?(c/a*100).toFixed(2):-1;switch(e(n),console.log("Upload is "+n+"% done"),o.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(o=>{o.code}),(()=>{(0,r.Jt)(d.snapshot.ref).then((o=>{console.log("File available at",o),s(o)}))}))},b=async o=>{const a="".concat(o),c=(0,r.iH)(t.tO,a);try{const o=await(0,r.aF)(c);return await Promise.all(o.items.map((async o=>{const a=await(0,r.Jt)(o);return{id:o.name,filename:o.name,fileURL:a}})))}catch(n){throw console.error("Error retrieving images:",n),n}}},61221:(o,a,c)=>{o.exports=c.p+"static/media/logo.aacdd5500f6cc7277585.png"}}]);
//# sourceMappingURL=9212.22bf6d54.chunk.js.map