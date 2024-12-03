"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[1701],{26953:(o,a,e)=>{e.d(a,{Z:()=>r});e(72791);var n=e(21204),t=e(80184);const r=o=>{let{studio:a}=o;return(0,t.jsx)("a",{href:"#/studio/".concat(a.id),children:(0,t.jsx)(n.Z,{data:a,img_src:"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg"})})}},21204:(o,a,e)=>{e.d(a,{Z:()=>m});e(72791);var n=e(92552),t=e(84654),r=e(28658),c=e(69597),l=e(43782),i=e(94294),s=e(18625),d=e(83168),g=e(36314),f=e(59434),u=e(60717),p=e(83708),h=e(97310),E=e(17237),b=e(80184);function m(o){let{img_src:a,data:e}=o;const m=(0,f.v9)(u.w),S=e.id?e.id:e.studioId,C={backgroundColor:m?"#444":"white",padding:"0px",color:m?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};return(0,b.jsxs)(t.Z,{variant:"solid",sx:{...C,"&:hover":{transform:"scale(1.01)"}},children:[(0,b.jsxs)(n.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,b.jsx)("img",{src:e&&e.iconUrl?e.iconUrl:"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg",loading:"lazy",alt:"Studio Image",style:{maxWidth:"100%",height:"auto",overflow:"hidden"}}),(0,b.jsx)(g.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:e&&e.danceStyles&&"string"===typeof e.danceStyles?e.danceStyles.split(",").slice(0,3).map(((o,a)=>(0,b.jsx)(c.Z,{color:a%2===0?"danger":"success",sx:{marginBottom:"10px",fontSize:"0.8rem",bgcolor:p.lt[a].backgroundColor,color:p.lt[a].color},children:o.trim()},a))):(0,b.jsx)(c.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)}),(0,b.jsx)(g.Z,{direction:"row",spacing:2,style:{position:"absolute",top:0,left:0,padding:"1px",paddingTop:"1px"},children:e&&e.freeTrialAvailable&&(0,b.jsx)(c.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:p.DM.LIME.backgroundColor,color:p.DM.LIME.color},children:"Free Trial Available"},1)})]}),(0,b.jsxs)(r.Z,{style:{padding:"10px"},children:[(0,b.jsxs)(l.Z,{display:"flex",justifyContent:"space-between",columnGap:1,children:[(0,b.jsx)(s.Z,{alignSelf:"center",href:"#/studio/".concat(S),fontWeight:"bold",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",style:{color:m?"white":"black"},children:e&&e.studioName?e.studioName:"    "}),e&&e.avgRating?(0,b.jsxs)(d.ZP,{width:52,flexShrink:0,alignSelf:"center",style:{color:m?"white":"black"},children:["\u2b50 ",e.avgRating.toFixed(1)]}):null]}),(0,b.jsx)(d.ZP,{style:{color:m?"white":"black"},level:"body-xs",children:e.street?e.street:".  "}),(0,b.jsx)(h.ZP,{hidden:!0,"aria-label":"Like minimal photography",size:"md",variant:"solid",color:"danger",sx:{position:"absolute",zIndex:2,borderRadius:"50%",right:"1rem",bottom:"2rem",transform:"translateY(50%)"},children:(0,b.jsx)(E.Z,{})}),(0,b.jsxs)(l.Z,{display:"flex",justifyContent:"space-between",children:[(0,b.jsx)(d.ZP,{alignSelf:"center",fontSize:12,style:{color:m?"white":"black"},children:e&&e.minFee&&"@ \u20b9".concat(e.minFee," onwards")}),(0,b.jsx)(i.Z,{size:"small",variant:"contained",sx:{alignSelf:"center",color:"white",backgroundColor:"#735EAB","&:hover":{backgroundColor:"#735EAB",color:"white"},"&.Mui-disabled":{backgroundColor:m?"rgba(115, 94, 171, 0.5)":"rgba(115, 94, 171, 0.3)",color:"rgba(255, 255, 255, 0.5)"}},type:"button",children:"Explore"})]})]})]})}},83708:(o,a,e)=>{e.d(a,{A3:()=>h,DM:()=>d,QP:()=>E,RY:()=>g,Rb:()=>p,Ul:()=>u,i0:()=>c,lt:()=>f,n$:()=>r,rM:()=>i,uM:()=>s,zq:()=>l});var n=e(56355),t=e(80184);const r={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},c={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},l={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},i={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},s={CLOUD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},g={[l.ALL]:d.GREEN,[l.BEGINNERS]:d.BLUE,[l.INTERMEDIATE]:d.YELLOW,[l.ADVANCED]:d.RED},f=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],u={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},p={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},h="https://nrityaserver-2b241e0a97e5.herokuapp.com/",E={AC:(0,t.jsx)(n.l51,{}),"Free Wifi":(0,t.jsx)(n._0,{}),"RO Water":(0,t.jsx)(n.EXY,{}),Toilet:(0,t.jsx)(n.Iev,{}),"Power Backup":(0,t.jsx)(n.eKD,{}),"Fire Extinguisher":(0,t.jsx)(n.Ybg,{}),"First Aid Kit":(0,t.jsx)(n.FZx,{}),"CCTV Camera":(0,t.jsx)(n.KoQ,{}),"Card Payment":(0,t.jsx)(n.ypE,{}),"Parking Space":(0,t.jsx)(n.mxg,{})}},68449:(o,a,e)=>{e.d(a,{FV:()=>S,Km:()=>p,Ld:()=>d,Us:()=>s,XG:()=>C,Xt:()=>u,eg:()=>m,gv:()=>g,ih:()=>h,oM:()=>i,qS:()=>E,to:()=>f,xR:()=>b});var n=e(12481),t=e(10159),r=e(30276),c=e(83708),l=e(644);const i=async o=>{console.log("creatorMode uid",o);try{const a=(0,n.JU)(t.db,c.Ul.USER,o),e=await(0,n.QT)(a);if(e.exists())if(null!=e.data()){const o=e.data().CreatorMode;console.log("setCreatorMode: Is User a creator?",o),l.Z.setItem("CreatorMode",o)}else console.log("userSnap.data() null");else console.log("User not found")}catch(a){console.log(" error",a)}},s=async(o,a)=>{console.log("Debug ","".concat(o,"/").concat(a));const e="".concat(o,"/").concat(a),n=(0,r.iH)(t.tO,e);try{const o=await(0,r.aF)(n);if(o.items.length>0){const a=o.items[0],e=await(0,r.Jt)(a);return console.log("Debug URL:",e),e}return console.log("Debug No files found in the folder."),null}catch(c){return console.error("Error getting image URL:",c),null}},d=async(o,a)=>{const e=(0,n.JU)(t.db,o,a),r=await(0,n.QT)(e);return r.exists()?r.data():null},g=async(o,a,e)=>{const r=(0,n.JU)(t.db,o,a);return await(0,n.pl)(r,e,{merge:!0}),e},f=async(o,a,e)=>{const r=(0,n.JU)(t.db,o,a);return await(0,n.r7)(r,{isPhoneNumberVerified:!0,phoneNumber:e}),!0},u=async(o,a,e)=>{const r=(0,n.JU)(t.db,o,a);return await(0,n.r7)(r,e),{id:a,...e}},p=async(o,a,e,r)=>{console.log("Hiii ",o,a,e,r);const c=(0,n.IO)((0,n.hJ)(t.db,o),(0,n.ar)(a,e,r));return(await(0,n.Yp)(c)).data().count},h=async(o,a)=>{const e="".concat(o,"/").concat(a),n=(0,r.iH)(t.tO,e),c=await(0,r.aF)(n);await Promise.all(c.items.map((async o=>{await(0,r.oq)(o)})))},E=async(o,a,e)=>{const n="".concat(o,"/").concat(a,"/").concat(e),c=(0,r.iH)(t.tO,n),l=await(0,r.aF)(c);await Promise.all(l.items.map((async o=>{await(0,r.oq)(o)})))},b=async function(o,a,e,n){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const l=a.length;let i=0;await Promise.all(a.map((async a=>{let s="".concat(o,"/").concat(e,"/").concat(a.filename);c&&(s="".concat(o,"/").concat(e,"/").concat(c,"/").concat(a.filename));const d=(0,r.iH)(t.tO,s);await(0,r.oq)(d),i+=1,n(i/l*100)})))},m=async function(o,a,e,n){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(o,e);const l=a.length;let i=0;await Promise.all(a.map((async a=>{let s="".concat(o,"/").concat(e);c&&(s="".concat(o,"/").concat(e,"/").concat(c));const d=(0,r.iH)(t.tO,"".concat(s,"/").concat(a.file.name));await(0,r.KV)(d,a.file),i+=1,n(i/l*100)})))},S=async function(o,a,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,i="".concat(o,"/").concat(e);n&&(i="".concat(o,"/").concat(e,"/").concat(n)),console.log(a,a.name);const s=(0,r.iH)(t.tO,"".concat(i,"/").concat(a.name)),d=(0,r.B0)(s,a);d.on("state_changed",(o=>{const a=o.totalBytes,e=o.bytesTransferred,n=a>0?(e/a*100).toFixed(2):-1;switch(c(n),console.log("Upload is "+n+"% done"),o.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(o=>{o.code}),(()=>{(0,r.Jt)(d.snapshot.ref).then((o=>{console.log("File available at",o),l(o)}))}))},C=async o=>{const a="".concat(o),e=(0,r.iH)(t.tO,a);try{const o=await(0,r.aF)(e);return await Promise.all(o.items.map((async o=>{const a=await(0,r.Jt)(o);return{id:o.name,filename:o.name,fileURL:a}})))}catch(n){throw console.error("Error retrieving images:",n),n}}},51650:o=>{o.exports=JSON.parse('{"W":["Kuchipudi","Swing","Irish Dance","Folk Dance","Street Dance","Breaking","Voguing","House Dance","Bachata","Ballet","Ballroom","Belly Dance","Bhangra","Bharatanatyam","Bihu","Bollywood","Bollyhop","Butoh","Capoeira","Chhau","Clogging","Contemporary","Dandiya Raas","Flamenco","Garba","Giddha","Heels","Hip Hop","Irish Step Dance","Jazz","Jive","Kathak","Kathakali","Kizomba","Krumping","Lavani","Line Dance","Locking","Lyrical Hip-Hop","Manipuri","Modern Dance","Mohiniyattam","Odissi","Polynesian Dance","Popping","Rouf","Salsa","Sattriya","Tango","Tap Dance","Vogue","Waacking","Whacking","Zumba"]}')}}]);
//# sourceMappingURL=1701.9031116d.chunk.js.map