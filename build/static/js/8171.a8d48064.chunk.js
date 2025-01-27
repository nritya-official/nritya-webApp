"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[8171],{98171:(o,t,e)=>{e.r(t),e.d(t,{default:()=>N});var a=e(72791),n=e(59434),s=e(60717),r=e(61224),c=e(68449),l=e(83708),i=e(20890),d=e(61889),f=e(57621),u=e(39504),C=e(99875),E=e(64415),h=e(23786),p=e(68096),g=e(94925),S=e(35527),m=e(67107),y=e(44507),O=e(4708),I=e(73733),b=e(57482),x=e(80184);const k=()=>{const[o,t]=(0,a.useState)(null),[e,r]=(0,a.useState)(""),[c,d]=(0,a.useState)(!1),[f,u]=(0,a.useState)(null),[C,k]=(0,a.useState)(""),N=JSON.parse(localStorage.getItem("userInfo")).UserId,R=l.A3,T=(0,n.v9)(s.w);console.log("DataDashboard isDarkModeOn",T);const w={backgroundColor:T?"black":"#f5f5f5",color:T?"#d3d3d3":"#000000"},D=(0,m.Z)({palette:{mode:T?"dark":"light"}});(0,a.useEffect)((()=>{(async()=>{try{const o=await fetch("".concat(R,"reports/getAllOwnerStudio?user_id=").concat(N)),e=await o.json();t(e)}catch(o){console.error("Error fetching studios:",o)}})()}),[N]);const U=o=>{const t="https://nritya-official.github.io/nritya-webApp/#/",{EntityType:e,EntityId:a}=o;switch(e){case"Workshop":return"".concat(t,"workshop/").concat(a);case"Open Class":return"".concat(t,"openClass/").concat(a);case"Course":return"".concat(t,"course/").concat(a);default:return"#"}};return o&&(0,x.jsxs)("div",{children:[(0,x.jsxs)(y.Z,{theme:D,children:[(0,x.jsx)(O.ZP,{}),(0,x.jsx)(i.Z,{variant:"h4",component:"h3",gutterBottom:!0,sx:{textTransform:"none",color:T?"white":"black"},children:"Data Dashboard"}),(0,x.jsxs)("div",{className:"flex-container",style:{display:"flex",flexWrap:"wrap",gap:"20px"},children:[(0,x.jsxs)(p.Z,{fullWidth:!0,sx:{marginBottom:"20px",flex:"1 1 clamp(300px, 30%, 20rem)"},children:[(0,x.jsx)(g.Z,{id:"studio-select-label",sx:{color:T?"#ffffff":"#000000"},children:"Select Studio"}),(0,x.jsxs)(E.Z,{labelId:"studio-select-label",id:"studio-select",value:e,label:"Select Studio",onChange:async o=>{const t=o.target.value;if(console.log("DataDashboard studioId",t),r(t),d(!0),t)try{const o=await fetch("".concat(R,"reports/studioEntityBookingsReport?studio_id=").concat(t)),e=await o.json();u(e)}catch(e){console.error("Error fetching bookings:",e)}else u(null);d(!1)},children:[(0,x.jsx)(h.Z,{value:"",sx:{color:T?"#ffffff":"#000000"},children:(0,x.jsx)("em",{sx:{color:T?"#ffffff":"#000000"},children:"--Select a Studio--"})}),o&&Object.entries(o).map((o=>{let[t,e]=o;return(0,x.jsx)(h.Z,{value:t,children:e},t)}))]})]}),(0,x.jsxs)(p.Z,{fullWidth:!0,style:{marginBottom:"20px",flex:"1 1 clamp(300px, 30%, 20rem)"},children:[(0,x.jsx)(g.Z,{id:"entity-filter-label",sx:{color:T?"#ffffff":"#000000"},children:"Filter by Entity Type"}),(0,x.jsxs)(E.Z,{labelId:"entity-filter-label",id:"entity-filter",value:C,label:"Filter by Entity Type",onChange:o=>{console.log("DataDashboard setEntityFilter",o.target.value),k(o.target.value)},children:[(0,x.jsx)(h.Z,{value:"",sx:{color:T?"#ffffff":"#000000"},children:(0,x.jsx)("em",{sx:{color:T?"#ffffff":"#000000"},children:"All Entities"})}),(0,x.jsx)(h.Z,{value:"Workshop",children:"Workshop"}),(0,x.jsx)(h.Z,{value:"Open Class",children:"Open Class"}),(0,x.jsx)(h.Z,{value:"Course",children:"Course"})]})]})]})]}),(t=>{if(!f)return null;const{WORKSHOPS:e,OPEN_CLASSES:a,COURSES:n}=f,s=[...e.map((o=>({EntityName:o.EntityName,EntityType:"Workshop",Date:o.Date,Capacity:o.Capacity,Booked:o.BookingsCount,SlotsLeft:o.Capacity-o.BookingsCount,EntityId:o.EntityId}))),...a.map((o=>({EntityName:o.EntityName,EntityType:"Open Class",Date:o.Date,Capacity:o.Capacity,Booked:o.BookingsCount,SlotsLeft:o.Capacity-o.BookingsCount,EntityId:o.EntityId}))),...n.map((o=>({EntityName:o.EntityName,EntityType:"Course",Date:o.Date,Capacity:"N/A",Booked:o.BookingsCount,SlotsLeft:"N/A",EntityId:o.EntityId})))],r=[{field:"entityName",headerName:"Entity Name",flex:1,renderCell:o=>(0,x.jsx)("a",{href:U(o.row),target:"_blank",rel:"noopener noreferrer",style:{color:T?"#90caf9":"#1976d2"},children:o.value})},{field:"entityType",headerName:"Entity Type",flex:1},{field:"date",headerName:"Date",flex:1},{field:"capacity",headerName:"Capacity",flex:1},{field:"booked",headerName:"Booked",flex:1},{field:"slotsLeft",headerName:"Slots Left",flex:1}],c=(C?s.filter((o=>o.EntityType===C)):s).map(((o,t)=>({id:t,entityName:null===o||void 0===o?void 0:o.EntityName,entityType:null===o||void 0===o?void 0:o.EntityType,date:null===o||void 0===o?void 0:o.Date,capacity:null===o||void 0===o?void 0:o.Capacity,booked:null===o||void 0===o?void 0:o.Booked,slotsLeft:null===o||void 0===o?void 0:o.SlotsLeft})));return console.log(s),o&&(0,x.jsxs)(y.Z,{theme:D,children:[(0,x.jsx)(O.ZP,{}),(0,x.jsx)(S.Z,{style:w,children:(0,x.jsx)("div",{style:{height:400,width:"100%"},children:(0,x.jsx)(I._,{rows:c,columns:r,pageSize:5,rowsPerPageOptions:[5],loading:t,initialState:{sorting:{sortModel:[{field:"Date",sort:"desc"}]}},disableSelectionOnClick:!0,slotProps:{toolbar:{csvOptions:{allColumns:!0}}}})})})]})})(c),c&&(0,x.jsx)(b.Z,{})]})};const N=function(){const[o,t]=(0,a.useState)({instructorsCount:0,studiosCount:0,workshopsCount:0,openClassesCount:0,coursesCount:0}),e=(0,n.v9)(s.w),{currentUser:E}=(0,r.a)();(0,a.useEffect)((()=>{(async()=>{const o=await(0,c.Km)(l.Ul.INSTRUCTORS,"createdBy","==",E.uid),e=await(0,c.Km)(l.Ul.STUDIO,"UserId","==",E.uid),a=await(0,c.Km)(l.Ul.WORKSHOPS,"UserId","==",E.uid),n=await(0,c.Km)(l.Ul.OPEN_CLASSES,"UserId","==",E.uid),s=await(0,c.Km)(l.Ul.COURSES,"UserId","==",E.uid);t({instructorsCount:o,studiosCount:e,workshopsCount:a,openClassesCount:n,coursesCount:s})})()}),[E]);const h=[{title:"Total Studios",data:o.studiosCount,link:"#/modifyStudios"},{title:"Total Instructors",data:o.instructorsCount,link:"#/modifyInstructors"},{title:"Total Workshops",data:o.workshopsCount,link:"#/modifyWorkshops"},{title:"Total Open Classes",data:o.openClassesCount,link:"#/modifyOpenClasses"},{title:"Total Courses",data:o.coursesCount,link:"#/modifyCourses"},{title:"Studio Subscription",data:o.coursesCount,link:"#/studioSubscription"}];return(0,x.jsxs)("div",{style:{minHeight:"75vh"},children:[(0,x.jsx)(i.Z,{variant:"h4",sx:{color:e?"white":"black",textTransform:"capitalize"},children:"Dashboard"}),(0,x.jsx)(d.ZP,{container:!0,spacing:2,children:h.map(((o,t)=>(0,x.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,x.jsx)(f.Z,{sx:{backgroundColor:e?"black":"white"},children:(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(i.Z,{variant:"h6",component:"div",sx:{color:e?"white":"black"},children:(0,x.jsxs)(x.Fragment,{children:[o.title,(0,x.jsx)("a",{href:o.link,children:(0,x.jsx)(C.Z,{baseClassName:"fas",className:"fa-plus-circle",color:"primary"})})]})}),(0,x.jsx)(i.Z,{variant:"h4",sx:{color:e?"white":"black"},children:o.data})]})})},t)))}),(0,x.jsx)("br",{}),(0,x.jsx)(k,{})]})}},83708:(o,t,e)=>{e.d(t,{A3:()=>h,DM:()=>d,QP:()=>p,RY:()=>f,Rb:()=>E,Ul:()=>C,i0:()=>r,lt:()=>u,n$:()=>s,rM:()=>l,uM:()=>i,zq:()=>c});var a=e(56355),n=e(80184);const s={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},r={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},c={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},l={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},i={CLOUD:"https://djserver-production-ffe37b1b53b5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},f={[c.ALL]:d.GREEN,[c.BEGINNERS]:d.BLUE,[c.INTERMEDIATE]:d.YELLOW,[c.ADVANCED]:d.RED},u=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],C={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},E={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},h="https://djserver-production-ffe37b1b53b5.herokuapp.com/",p={AC:(0,n.jsx)(a.l51,{}),"Free Wifi":(0,n.jsx)(a._0,{}),"RO Water":(0,n.jsx)(a.EXY,{}),Toilet:(0,n.jsx)(a.Iev,{}),"Power Backup":(0,n.jsx)(a.eKD,{}),"Fire Extinguisher":(0,n.jsx)(a.Ybg,{}),"First Aid Kit":(0,n.jsx)(a.FZx,{}),"CCTV Camera":(0,n.jsx)(a.KoQ,{}),"Card Payment":(0,n.jsx)(a.ypE,{}),"Parking Space":(0,n.jsx)(a.mxg,{})}},68449:(o,t,e)=>{e.d(t,{FV:()=>y,Km:()=>h,Ld:()=>f,Us:()=>d,XG:()=>O,Xt:()=>E,eg:()=>m,gv:()=>u,ih:()=>p,oM:()=>i,qS:()=>g,to:()=>C,xR:()=>S});var a=e(1413),n=e(12481),s=e(10159),r=e(30276),c=e(83708),l=e(644);const i=async o=>{const t=c.A3,e="".concat(t,"crud/getUserMode/").concat(o);try{const o=await fetch(e),t=await o.json();if(t.success){let o=!1;!0===t.data&&(o=!0),l.Z.setItem("CreatorMode",o)}else console.log("Error: ",t.message||"Unknown error")}catch(a){console.log("Error fetching user mode: ",a),l.Z.setItem("CreatorMode",!1)}},d=async(o,t)=>{console.log("Debug ","".concat(o,"/").concat(t));const e="".concat(o,"/").concat(t),a=(0,r.iH)(s.tO,e);try{const o=await(0,r.aF)(a);if(o.items.length>0){const t=o.items[0],e=await(0,r.Jt)(t);return console.log("Debug URL:",e),e}return console.log("Debug No files found in the folder."),null}catch(n){return console.error("Error getting image URL:",n),null}},f=async(o,t)=>{const e=(0,n.JU)(s.db,o,t),a=await(0,n.QT)(e);return a.exists()?a.data():null},u=async(o,t,e)=>{const a=(0,n.JU)(s.db,o,t);return await(0,n.pl)(a,e,{merge:!0}),e},C=async(o,t,e)=>{const a=(0,n.JU)(s.db,o,t);return await(0,n.r7)(a,{isPhoneNumberVerified:!0,phoneNumber:e}),!0},E=async(o,t,e)=>{const r=(0,n.JU)(s.db,o,t);return await(0,n.r7)(r,e),(0,a.Z)({id:t},e)},h=async(o,t,e,a)=>{console.log("Hiii ",o,t,e,a);const r=(0,n.IO)((0,n.hJ)(s.db,o),(0,n.ar)(t,e,a));return(await(0,n.Yp)(r)).data().count},p=async(o,t)=>{const e="".concat(o,"/").concat(t),a=(0,r.iH)(s.tO,e),n=await(0,r.aF)(a);await Promise.all(n.items.map((async o=>{await(0,r.oq)(o)})))},g=async(o,t,e)=>{const a="".concat(o,"/").concat(t,"/").concat(e),n=(0,r.iH)(s.tO,a),c=await(0,r.aF)(n);await Promise.all(c.items.map((async o=>{await(0,r.oq)(o)})))},S=async function(o,t,e,a){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const c=t.length;let l=0;await Promise.all(t.map((async t=>{let i="".concat(o,"/").concat(e,"/").concat(t.filename);n&&(i="".concat(o,"/").concat(e,"/").concat(n,"/").concat(t.filename));const d=(0,r.iH)(s.tO,i);await(0,r.oq)(d),l+=1,a(l/c*100)})))},m=async function(o,t,e,a){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(o,e);const c=t.length;let l=0;await Promise.all(t.map((async t=>{let i="".concat(o,"/").concat(e);n&&(i="".concat(o,"/").concat(e,"/").concat(n));const d=(0,r.iH)(s.tO,"".concat(i,"/").concat(t.file.name));await(0,r.KV)(d,t.file),l+=1,a(l/c*100)})))},y=async function(o,t,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,l="".concat(o,"/").concat(e);a&&(l="".concat(o,"/").concat(e,"/").concat(a)),console.log(t,t.name);const i=(0,r.iH)(s.tO,"".concat(l,"/").concat(t.name)),d=(0,r.B0)(i,t);d.on("state_changed",(o=>{const t=o.totalBytes,e=o.bytesTransferred,a=t>0?(e/t*100).toFixed(2):-1;switch(n(a),console.log("Upload is "+a+"% done"),o.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(o=>{o.code}),(()=>{(0,r.Jt)(d.snapshot.ref).then((o=>{console.log("File available at",o),c(o)}))}))},O=async o=>{const t="".concat(o),e=(0,r.iH)(s.tO,t);try{const o=await(0,r.aF)(e);return await Promise.all(o.items.map((async o=>{const t=await(0,r.Jt)(o);return{id:o.name,filename:o.name,fileURL:t}})))}catch(a){throw console.error("Error retrieving images:",a),a}}}}]);
//# sourceMappingURL=8171.a8d48064.chunk.js.map