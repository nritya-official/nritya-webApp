"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[1701],{26953:(o,a,e)=>{e.d(a,{Z:()=>n});e(72791);var r=e(21204),t=e(80184);const n=o=>{let{studio:a}=o;return(0,t.jsx)("a",{href:`#/studio/${a.id}`,children:(0,t.jsx)(r.Z,{data:a,img_src:"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg"})})}},21204:(o,a,e)=>{e.d(a,{Z:()=>h});e(72791);var r=e(92552),t=e(84654),n=e(28658),i=e(69597),l=e(18625),s=e(83168),c=e(36314),d=e(59434),g=e(60717),f=e(83708),u=e(97310),p=e(17237),E=e(80184);function h(o){let{img_src:a,data:e}=o;const h=(0,d.v9)(g.w),m=e.id?e.id:e.studioId,S={backgroundColor:h?"#444":"white",padding:"0px",color:h?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};return(0,E.jsxs)(t.Z,{variant:"solid",sx:{...S,"&:hover":{transform:"scale(1.01)"}},children:[(0,E.jsxs)(r.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,E.jsx)("img",{src:e&&e.iconUrl?e.iconUrl:"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg",loading:"lazy",alt:"Studio Image",style:{maxWidth:"100%",height:"auto",overflow:"hidden"}}),(0,E.jsx)(c.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:e&&e.danceStyles&&"string"===typeof e.danceStyles?e.danceStyles.split(",").slice(0,3).map(((o,a)=>(0,E.jsx)(i.Z,{color:a%2===0?"danger":"success",sx:{marginBottom:"10px",fontSize:"0.8rem",bgcolor:f.lt[a].backgroundColor,color:f.lt[a].color},children:o.trim()},a))):(0,E.jsx)(i.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)}),(0,E.jsx)(c.Z,{direction:"row",spacing:2,style:{position:"absolute",top:0,left:0,padding:"1px",paddingTop:"1px"},children:e&&e.freeTrialAvailable&&(0,E.jsx)(i.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:f.DM.LIME.backgroundColor,color:f.DM.LIME.color},children:"Free Trial Available"},1)})]}),(0,E.jsxs)(n.Z,{style:{padding:"10px"},children:[(0,E.jsx)(l.Z,{href:`#/studio/${m}`,fontWeight:"bold",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,style:{color:h?"white":"black"},children:e&&e.studioName?e.studioName:"    "}),(0,E.jsx)(s.ZP,{style:{color:h?"white":"black"},level:"body-xs",children:e.street?e.street:".  "}),(0,E.jsx)(u.ZP,{hidden:!0,"aria-label":"Like minimal photography",size:"md",variant:"solid",color:"danger",sx:{position:"absolute",zIndex:2,borderRadius:"50%",right:"1rem",bottom:"2rem",transform:"translateY(50%)"},children:(0,E.jsx)(p.Z,{})}),(0,E.jsxs)(s.ZP,{style:{color:h?"white":"black"},children:[(0,E.jsxs)("span",{children:["\u2b50 ",e&&e.avgRating?e.avgRating.toFixed(1):"Not rated yet"]}),e&&e.minFee&&(0,E.jsxs)("span",{style:{position:"absolute",right:2},children:["  Starts @\u20b9",e.minFee]})]})]})]})}},83708:(o,a,e)=>{e.d(a,{A3:()=>E,DM:()=>d,QP:()=>h,RY:()=>g,Rb:()=>p,Ul:()=>u,i0:()=>i,lt:()=>f,n$:()=>n,rM:()=>s,uM:()=>c,zq:()=>l});var r=e(59135),t=e(80184);const n={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},i={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},l={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},s={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},c={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},g={[l.ALL]:d.GREEN,[l.BEGINNERS]:d.BLUE,[l.INTERMEDIATE]:d.YELLOW,[l.ADVANCED]:d.RED},f=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],u={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},p={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},E="https://nrityaserver-2b241e0a97e5.herokuapp.com/",h={AC:(0,t.jsx)(r.l51,{}),"Free Wifi":(0,t.jsx)(r._0,{}),"RO Water":(0,t.jsx)(r.EXY,{}),Toilet:(0,t.jsx)(r.Iev,{}),"Power Backup":(0,t.jsx)(r.eKD,{}),"Fire Extinguisher":(0,t.jsx)(r.Ybg,{}),"First Aid Kit":(0,t.jsx)(r.FZx,{}),"CCTV Camera":(0,t.jsx)(r.KoQ,{}),"Card Payment":(0,t.jsx)(r.ypE,{}),"Parking Space":(0,t.jsx)(r.mxg,{})}},68449:(o,a,e)=>{e.d(a,{FV:()=>b,Km:()=>p,Ld:()=>d,Us:()=>c,XG:()=>C,Xt:()=>u,eg:()=>S,gv:()=>g,ih:()=>E,oM:()=>s,qS:()=>h,to:()=>f,xR:()=>m});var r=e(12481),t=e(10159),n=e(30276),i=e(83708),l=e(644);const s=async o=>{console.log("creatorMode uid",o);try{const a=(0,r.JU)(t.db,i.Ul.USER,o),e=await(0,r.QT)(a);if(e.exists())if(null!=e.data()){const o=e.data().CreatorMode;console.log("setCreatorMode: Is User a creator?",o),l.Z.setItem("CreatorMode",o)}else console.log("userSnap.data() null");else console.log("User not found")}catch(a){console.log(" error",a)}},c=async(o,a)=>{console.log("Debug ",`${o}/${a}`);const e=`${o}/${a}`,r=(0,n.iH)(t.tO,e);try{const o=await(0,n.aF)(r);if(o.items.length>0){const a=o.items[0],e=await(0,n.Jt)(a);return console.log("Debug URL:",e),e}return console.log("Debug No files found in the folder."),null}catch(i){return console.error("Error getting image URL:",i),null}},d=async(o,a)=>{const e=(0,r.JU)(t.db,o,a),n=await(0,r.QT)(e);return n.exists()?n.data():null},g=async(o,a,e)=>{const n=(0,r.JU)(t.db,o,a);return await(0,r.pl)(n,e,{merge:!0}),e},f=async(o,a,e)=>{const n=(0,r.JU)(t.db,o,a);return await(0,r.r7)(n,{isPhoneNumberVerified:!0,phoneNumber:e}),!0},u=async(o,a,e)=>{const n=(0,r.JU)(t.db,o,a);return await(0,r.r7)(n,e),{id:a,...e}},p=async(o,a,e,n)=>{console.log("Hiii ",o,a,e,n);const i=(0,r.IO)((0,r.hJ)(t.db,o),(0,r.ar)(a,e,n));return(await(0,r.Yp)(i)).data().count},E=async(o,a)=>{const e=`${o}/${a}`,r=(0,n.iH)(t.tO,e),i=await(0,n.aF)(r);await Promise.all(i.items.map((async o=>{await(0,n.oq)(o)})))},h=async(o,a,e)=>{const r=`${o}/${a}/${e}`,i=(0,n.iH)(t.tO,r),l=await(0,n.aF)(i);await Promise.all(l.items.map((async o=>{await(0,n.oq)(o)})))},m=async function(o,a,e,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const l=a.length;let s=0;await Promise.all(a.map((async a=>{let c=`${o}/${e}/${a.filename}`;i&&(c=`${o}/${e}/${i}/${a.filename}`);const d=(0,n.iH)(t.tO,c);await(0,n.oq)(d),s+=1,r(s/l*100)})))},S=async function(o,a,e,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(o,e);const l=a.length;let s=0;await Promise.all(a.map((async a=>{let c=`${o}/${e}`;i&&(c=`${o}/${e}/${i}`);const d=(0,n.iH)(t.tO,`${c}/${a.file.name}`);await(0,n.KV)(d,a.file),s+=1,r(s/l*100)})))},b=async function(o,a,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,s=`${o}/${e}`;r&&(s=`${o}/${e}/${r}`),console.log(a,a.name);const c=(0,n.iH)(t.tO,`${s}/${a.name}`),d=(0,n.B0)(c,a);d.on("state_changed",(o=>{const a=o.totalBytes,e=o.bytesTransferred,r=a>0?(e/a*100).toFixed(2):-1;switch(i(r),console.log("Upload is "+r+"% done"),o.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(o=>{o.code}),(()=>{(0,n.Jt)(d.snapshot.ref).then((o=>{console.log("File available at",o),l(o)}))}))},C=async o=>{const a=`${o}`,e=(0,n.iH)(t.tO,a);try{const o=await(0,n.aF)(e);return await Promise.all(o.items.map((async o=>{const a=await(0,n.Jt)(o);return{id:o.name,filename:o.name,fileURL:a}})))}catch(r){throw console.error("Error retrieving images:",r),r}}},51650:o=>{o.exports=JSON.parse('{"W":["Kuchipudi","Swing","Irish Dance","Folk Dance","Street Dance","Breaking","Voguing","House Dance","Bachata","Ballet","Ballroom","Belly Dance","Bhangra","Bharatanatyam","Bihu","Bollywood","Bollyhop","Butoh","Capoeira","Chhau","Clogging","Contemporary","Dandiya Raas","Flamenco","Garba","Giddha","Heels","Hip Hop","Irish Step Dance","Jazz","Jive","Kathak","Kathakali","Kizomba","Krumping","Lavani","Line Dance","Locking","Lyrical Hip-Hop","Manipuri","Modern Dance","Mohiniyattam","Odissi","Polynesian Dance","Popping","Rouf","Salsa","Sattriya","Tango","Tap Dance","Vogue","Waacking","Whacking","Zumba"]}')}}]);
//# sourceMappingURL=1701.1e4a1c31.chunk.js.map