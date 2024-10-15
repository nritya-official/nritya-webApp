"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9212],{79212:(o,e,a)=>{a.r(e),a.d(e,{default:()=>g});var r=a(25167),n=a(43360),t=a(10159),s=a(60717),c=a(59434),l=a(61221),i=a(72791),d=a(644),f=a(68449),u=a(80184);const g=function(o){let{showProfileOffcanvas:e,closeProfileOffcanvas:a}=o;const g=(0,c.v9)(s.w);(0,i.useEffect)((()=>{(()=>{let o=0;const e=JSON.parse(localStorage.getItem("userInfoFull")),a=null===e||void 0===e?void 0:e.uid;for(;o<2&&null==d.Z.getItem("CreatorMode");)(0,f.oM)(a),o+=1})()}),[]);const E=[{action:()=>window.location.hash="#/profile",name:"Profile",show:!0},{action:()=>window.location.hash="#/transactions",name:"Transactions",show:!0},{action:()=>window.location.hash="#/creatorDashboard",name:"Dashboard",show:d.Z.getItem("CreatorMode")},{action:()=>window.location.hash="#/myBookings",name:"Bookings",show:!0},{action:async()=>{console.log("Logging out SideMenu");try{await t.I8.signOut(),localStorage.clear(),d.Z.clear()}catch(o){console.error("Error during logout:",o.message)}},name:"Sign Out",show:!0}];return(0,u.jsxs)(r.Z,{style:{width:"20rem",backgroundColor:g?"black":"white",color:g?"white":"black"},show:e,onHide:a,children:[(0,u.jsx)(r.Z.Header,{closeButton:!0,children:(0,u.jsx)("img",{style:{width:"6rem",height:"6rem",borderRadius:"50%"},src:l,alt:"Logo"})}),(0,u.jsx)(r.Z.Body,{children:(0,u.jsx)("ul",{className:"menu",children:(0,u.jsx)("ul",{className:"vertical-menu",children:E.map(((o,e)=>{let{action:a,name:r,show:t}=o;return(0,u.jsx)("li",{hidden:!t,children:(0,u.jsx)(n.Z,{variant:"outline-warning",className:"rounded-pill menu-button",onClick:a,children:r})},e)}))})})})]})}},83708:(o,e,a)=>{a.d(e,{A3:()=>C,DM:()=>d,QP:()=>h,RY:()=>f,Rb:()=>E,Ul:()=>g,i0:()=>s,lX:()=>l,lt:()=>u,n$:()=>t,uM:()=>i,zq:()=>c});var r=a(59135),n=a(80184);const t={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},s={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},c={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},l=30,i={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},f={[c.ALL]:d.GREEN,[c.BEGINNERS]:d.BLUE,[c.INTERMEDIATE]:d.YELLOW,[c.ADVANCED]:d.RED},u=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],g={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},E={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},C="https://nrityaserver-2b241e0a97e5.herokuapp.com/",h={AC:(0,n.jsx)(r.l51,{}),"Free Wifi":(0,n.jsx)(r._0,{}),"RO Water":(0,n.jsx)(r.EXY,{}),Toilet:(0,n.jsx)(r.Iev,{}),"Power Backup":(0,n.jsx)(r.eKD,{}),"Fire Extinguisher":(0,n.jsx)(r.Ybg,{}),"First Aid Kit":(0,n.jsx)(r.FZx,{}),"CCTV Camera":(0,n.jsx)(r.KoQ,{}),"Card Payment":(0,n.jsx)(r.ypE,{}),"Parking Space":(0,n.jsx)(r.mxg,{})}},68449:(o,e,a)=>{a.d(e,{FV:()=>O,Km:()=>E,Ld:()=>d,Us:()=>i,XG:()=>R,Xt:()=>g,eg:()=>I,gv:()=>f,ih:()=>C,oM:()=>l,qS:()=>h,to:()=>u,xR:()=>m});var r=a(12481),n=a(10159),t=a(30276),s=a(83708),c=a(644);const l=async o=>{console.log("creatorMode uid",o);try{const e=(0,r.JU)(n.db,s.Ul.USER,o),a=await(0,r.QT)(e);if(a.exists())if(null!=a.data()){const o=a.data().CreatorMode;console.log("setCreatorMode: Is User a creator?",o),c.Z.setItem("CreatorMode",o)}else console.log("userSnap.data() null");else console.log("User not found")}catch(e){console.log(" error",e)}},i=async(o,e)=>{console.log("Debug ",`${o}/${e}`);const a=`${o}/${e}`,r=(0,t.iH)(n.tO,a);try{const o=await(0,t.aF)(r);if(o.items.length>0){const e=o.items[0],a=await(0,t.Jt)(e);return console.log("Debug URL:",a),a}return console.log("Debug No files found in the folder."),null}catch(s){return console.error("Error getting image URL:",s),null}},d=async(o,e)=>{const a=(0,r.JU)(n.db,o,e),t=await(0,r.QT)(a);return t.exists()?t.data():null},f=async(o,e,a)=>{const t=(0,r.JU)(n.db,o,e);return await(0,r.pl)(t,a,{merge:!0}),a},u=async(o,e,a)=>{const t=(0,r.JU)(n.db,o,e);return await(0,r.r7)(t,{isPhoneNumberVerified:!0,phoneNumber:a}),!0},g=async(o,e,a)=>{const t=(0,r.JU)(n.db,o,e);return await(0,r.r7)(t,a),{id:e,...a}},E=async(o,e,a,t)=>{console.log("Hiii ",o,e,a,t);const s=(0,r.IO)((0,r.hJ)(n.db,o),(0,r.ar)(e,a,t));return(await(0,r.Yp)(s)).data().count},C=async(o,e)=>{const a=`${o}/${e}`,r=(0,t.iH)(n.tO,a),s=await(0,t.aF)(r);await Promise.all(s.items.map((async o=>{await(0,t.oq)(o)})))},h=async(o,e,a)=>{const r=`${o}/${e}/${a}`,s=(0,t.iH)(n.tO,r),c=await(0,t.aF)(s);await Promise.all(c.items.map((async o=>{await(0,t.oq)(o)})))},m=async function(o,e,a,r){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const c=e.length;let l=0;await Promise.all(e.map((async e=>{let i=`${o}/${a}/${e.filename}`;s&&(i=`${o}/${a}/${s}/${e.filename}`);const d=(0,t.iH)(n.tO,i);await(0,t.oq)(d),l+=1,r(l/c*100)})))},I=async function(o,e,a,r){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(o,a);const c=e.length;let l=0;await Promise.all(e.map((async e=>{let i=`${o}/${a}`;s&&(i=`${o}/${a}/${s}`);const d=(0,t.iH)(n.tO,`${i}/${e.file.name}`);await(0,t.KV)(d,e.file),l+=1,r(l/c*100)})))},O=async function(o,e,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,l=`${o}/${a}`;r&&(l=`${o}/${a}/${r}`),console.log(e,e.name);const i=(0,t.iH)(n.tO,`${l}/${e.name}`),d=(0,t.B0)(i,e);d.on("state_changed",(o=>{const e=o.totalBytes,a=o.bytesTransferred,r=e>0?(a/e*100).toFixed(2):-1;switch(s(r),console.log("Upload is "+r+"% done"),o.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(o=>{o.code}),(()=>{(0,t.Jt)(d.snapshot.ref).then((o=>{console.log("File available at",o),c(o)}))}))},R=async o=>{const e=`${o}`,a=(0,t.iH)(n.tO,e);try{const o=await(0,t.aF)(a);return await Promise.all(o.items.map((async o=>{const e=await(0,t.Jt)(o);return{id:o.name,filename:o.name,fileURL:e}})))}catch(r){throw console.error("Error retrieving images:",r),r}}},61221:(o,e,a)=>{o.exports=a.p+"static/media/logo.aacdd5500f6cc7277585.png"}}]);
//# sourceMappingURL=9212.816ae05b.chunk.js.map