"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[4841],{44841:(e,a,r)=>{r.r(a),r.d(a,{default:()=>y});var o=r(72791),s=r(47022),t=r(89743),n=r(2677),l=r(95070),c=r(47047),i=r(94294),d=r(83708),f=r(11632),m=r(59434),h=r(60717),u=r(24813),E=r(57689),g=r(68449),S=r(5403),x=r(80184);const b=(0,o.lazy)((()=>Promise.all([r.e(8113),r.e(3236)]).then(r.bind(r,60275)))),p=(0,o.lazy)((()=>Promise.all([r.e(7946),r.e(2916),r.e(8446),r.e(9770)]).then(r.bind(r,87472)))),N=(0,o.lazy)((()=>Promise.all([r.e(7946),r.e(2916),r.e(220),r.e(2184),r.e(8231)]).then(r.bind(r,60792)))),C=[{name:"Bollywood",icon:f.Xig},{name:"Bharatnatyam",icon:f.Xig},{name:"Odisi",icon:f.WwZ},{name:"Kathak",icon:f.BDt},{name:"Salsa",icon:f.WwZ},{name:"Hip Hop",icon:f.BDt},{name:"Ballet",icon:f.e6E},{name:"Jazz",icon:f.e6E},{name:"Tango",icon:f.e6E},{name:"Tap Dance",icon:f.e6E}],O="filterDanceForms";const y=function(){const[e,a]=(0,o.useState)({[d.Ul.STUDIO]:{},[d.Ul.WORKSHOPS]:{},[d.Ul.OPEN_CLASSES]:{},[d.Ul.COURSES]:{}}),[r,f]=(0,o.useState)({}),[y,R]=(0,o.useState)([]),j=(0,m.v9)(h.w),I=(0,E.s0)(),U={background:j?"#333333":"white",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"10px",cursor:"pointer"},w={textTransform:"none",borderColor:j?"white":"black",color:j?"white":"black",borderWidth:"1px",height:"2rem",width:"100%"};return(0,o.useEffect)((()=>{const e=async(e,a)=>{try{const r=a.map((a=>fetch(`https://nrityaserver-2b241e0a97e5.herokuapp.com/api/search/?&city=${e}&entity=${a}`).then((e=>{if(!e.ok)throw new Error(`Network response for ${a} was not ok`);return e.json()})).then((e=>({[a]:e}))))),o=await Promise.all(r);return Object.assign({},...o)}catch(r){throw console.error("Fetch error:",r),r}},r=async e=>{try{const a=`https://nrityaserver-2b241e0a97e5.herokuapp.com/api/autocomplete/?&city=${e}`,r=await fetch(a);if(!r.ok)throw new Error("Failed to fetch data");return await r.json()}catch(a){throw console.error("Error in processing:",a),a}};(async()=>{try{let o=localStorage.getItem("filterLocation");o&&"null"!==o||(o="New Delhi");const s=[d.Ul.STUDIO,d.Ul.WORKSHOPS,d.Ul.COURSES,d.Ul.OPEN_CLASSES],[t,n]=await Promise.all([r(o),e(o,s)]);f(t),a(n)}catch(o){console.error("Error fetching data:",o)}})()}),[]),(0,o.useEffect)((()=>{(async()=>{try{const e=await(0,g.XG)("LandingPageImages");if(Array.isArray(e)){const a=e.map((e=>e.fileURL));R(a)}else console.error("Expected an array but got:",e)}catch(e){console.error("Error fetching images:",e)}})()}),[]),(0,x.jsx)("div",{children:(0,x.jsxs)(s.Z,{className:"my-0",children:[(0,x.jsx)(t.Z,{className:"pb-1 pl-0 pr-0",children:(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)(c.Z,{width:"100%",height:"40vh",variant:"rectangular"}),children:y.length>0?(0,x.jsx)(b,{danceImages:y}):(0,x.jsx)(c.Z,{sx:{width:"100%",height:"40vh",bgcolor:j?"#202020":"gray"},variant:"rectangular",animation:"wave"})})}),(0,x.jsx)(t.Z,{className:"d-lg-none pb-2",children:(0,x.jsx)(i.Z,{endIcon:(0,x.jsx)(S.Z,{style:{color:j?"white":"black"}}),variant:"outlined",className:"me-2 rounded-3",href:"#/search/studios",style:w,children:"Search"})}),(0,x.jsx)(u.Z,{}),(0,x.jsx)("br",{}),e[d.Ul.STUDIO]&&Object.keys(e[d.Ul.STUDIO]).length>0&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h3",{style:{color:j?"white":"black",textTransform:"none"},children:"Explore Studios"}),(0,x.jsx)(t.Z,{children:(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading Studios..."}),children:(0,x.jsx)(p,{dataList:e[d.Ul.STUDIO],imgOnly:!1})})})]}),e[d.Ul.WORKSHOPS]&&Object.keys(e[d.Ul.WORKSHOPS]).length>0&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h3",{style:{color:j?"white":"black",textTransform:"none"},children:"Explore Workshops"}),(0,x.jsx)(t.Z,{children:(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading Workshops..."}),children:(0,x.jsx)(N,{dataList:e[d.Ul.WORKSHOPS],studioIdName:r,type:d.Ul.WORKSHOPS})})})]}),e[d.Ul.OPEN_CLASSES]&&Object.keys(e[d.Ul.OPEN_CLASSES]).length>0&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h3",{style:{color:j?"white":"black",textTransform:"none"},children:"Explore Open Classes"}),(0,x.jsx)(t.Z,{children:(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading Open Classes..."}),children:(0,x.jsx)(N,{dataList:e[d.Ul.OPEN_CLASSES],studioIdName:r,type:d.Ul.OPEN_CLASSES})})})]}),e[d.Ul.COURSES]&&Object.keys(e[d.Ul.COURSES]).length>0&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h3",{style:{color:j?"white":"black",textTransform:"none"},children:"Explore Courses"}),(0,x.jsx)(t.Z,{children:(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading Courses..."}),children:(0,x.jsx)(N,{dataList:e[d.Ul.COURSES],studioIdName:r,type:d.Ul.COURSES})})})]}),(0,x.jsx)("br",{}),(0,x.jsx)("h3",{style:{color:j?"white":"black",textTransform:"none"},children:"BROWSE BY DANCE FORMS"}),(0,x.jsx)(t.Z,{children:C.map(((e,a)=>(0,x.jsxs)(n.Z,{sm:6,md:4,lg:3,children:[(0,x.jsx)(l.Z,{className:"card-hover",style:U,onClick:()=>{return a=e.name,localStorage.removeItem("filterDistances"),localStorage.setItem(O,JSON.stringify([a])),localStorage.getItem(O),void setTimeout((()=>{I("/search/studio")}),100);var a},children:(0,x.jsx)(l.Z.Body,{style:{textAlign:"center"},children:(0,x.jsx)("h4",{style:{color:j?"white":"black"},children:e.name})})}),(0,x.jsx)("br",{})]},a)))})]})})}},83708:(e,a,r)=>{r.d(a,{A3:()=>u,QP:()=>E,RY:()=>d,Rb:()=>h,Ul:()=>m,i0:()=>n,lt:()=>f,n$:()=>t,uM:()=>c,zq:()=>l});var o=r(59135),s=r(80184);const t={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},n={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},l={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},c={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},i={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},d={[l.ALL]:i.GREEN,[l.BEGINNERS]:i.BLUE,[l.INTERMEDIATE]:i.YELLOW,[l.ADVANCED]:i.RED},f=[i.PURPLE,i.ORANGE,i.TEAL,i.LIME],m={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},h={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},u="https://nrityaserver-2b241e0a97e5.herokuapp.com/",E={AC:(0,s.jsx)(o.l51,{}),"Free Wifi":(0,s.jsx)(o._0,{}),"RO Water":(0,s.jsx)(o.EXY,{}),Toilet:(0,s.jsx)(o.Iev,{}),"Power Backup":(0,s.jsx)(o.eKD,{}),"Fire Extinguisher":(0,s.jsx)(o.Ybg,{}),"First Aid Kit":(0,s.jsx)(o.FZx,{}),"CCTV Camera":(0,s.jsx)(o.KoQ,{}),"Card Payment":(0,s.jsx)(o.ypE,{}),"Parking Space":(0,s.jsx)(o.mxg,{})}},68449:(e,a,r)=>{r.d(a,{FV:()=>b,Km:()=>u,Ld:()=>d,Us:()=>i,XG:()=>p,Xt:()=>h,eg:()=>x,gv:()=>f,ih:()=>E,oM:()=>c,qS:()=>g,to:()=>m,xR:()=>S});var o=r(12481),s=r(10159),t=r(30276),n=r(83708),l=r(644);const c=async e=>{console.log("creatorMode uid",e);try{const a=(0,o.JU)(s.db,n.Ul.USER,e),r=await(0,o.QT)(a);if(r.exists())if(null!=r.data()){const e=r.data().CreatorMode;console.log("setCreatorMode: Is User a creator?",e),l.Z.setItem("CreatorMode",e)}else console.log("userSnap.data() null");else console.log("User not found")}catch(a){console.log(" error",a)}},i=async(e,a)=>{console.log("Debug ",`${e}/${a}`);const r=`${e}/${a}`,o=(0,t.iH)(s.tO,r);try{const e=await(0,t.aF)(o);if(e.items.length>0){const a=e.items[0],r=await(0,t.Jt)(a);return console.log("Debug URL:",r),r}return console.log("Debug No files found in the folder."),null}catch(n){return console.error("Error getting image URL:",n),null}},d=async(e,a)=>{const r=(0,o.JU)(s.db,e,a),t=await(0,o.QT)(r);return t.exists()?t.data():null},f=async(e,a,r)=>{const t=(0,o.JU)(s.db,e,a);return await(0,o.pl)(t,r,{merge:!0}),r},m=async(e,a,r)=>{const t=(0,o.JU)(s.db,e,a);return await(0,o.r7)(t,{isPhoneNumberVerified:!0,phoneNumber:r}),!0},h=async(e,a,r)=>{const t=(0,o.JU)(s.db,e,a);return await(0,o.r7)(t,r),{id:a,...r}},u=async(e,a,r,t)=>{console.log("Hiii ",e,a,r,t);const n=(0,o.IO)((0,o.hJ)(s.db,e),(0,o.ar)(a,r,t));return(await(0,o.Yp)(n)).data().count},E=async(e,a)=>{const r=`${e}/${a}`,o=(0,t.iH)(s.tO,r),n=await(0,t.aF)(o);await Promise.all(n.items.map((async e=>{await(0,t.oq)(e)})))},g=async(e,a,r)=>{const o=`${e}/${a}/${r}`,n=(0,t.iH)(s.tO,o),l=await(0,t.aF)(n);await Promise.all(l.items.map((async e=>{await(0,t.oq)(e)})))},S=async function(e,a,r,o){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const l=a.length;let c=0;await Promise.all(a.map((async a=>{let i=`${e}/${r}/${a.filename}`;n&&(i=`${e}/${r}/${n}/${a.filename}`);const d=(0,t.iH)(s.tO,i);await(0,t.oq)(d),c+=1,o(c/l*100)})))},x=async function(e,a,r,o){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(e,r);const l=a.length;let c=0;await Promise.all(a.map((async a=>{let i=`${e}/${r}`;n&&(i=`${e}/${r}/${n}`);const d=(0,t.iH)(s.tO,`${i}/${a.file.name}`);await(0,t.KV)(d,a.file),c+=1,o(c/l*100)})))},b=async function(e,a,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,c=`${e}/${r}`;o&&(c=`${e}/${r}/${o}`),console.log(a,a.name);const i=(0,t.iH)(s.tO,`${c}/${a.name}`),d=(0,t.B0)(i,a);d.on("state_changed",(e=>{const a=e.totalBytes,r=e.bytesTransferred,o=a>0?(r/a*100).toFixed(2):-1;switch(n(o),console.log("Upload is "+o+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(e=>{e.code}),(()=>{(0,t.Jt)(d.snapshot.ref).then((e=>{console.log("File available at",e),l(e)}))}))},p=async e=>{const a=`${e}`,r=(0,t.iH)(s.tO,a);try{const e=await(0,t.aF)(r);return await Promise.all(e.items.map((async e=>{const a=await(0,t.Jt)(e);return{id:e.name,filename:e.name,fileURL:a}})))}catch(o){throw console.error("Error retrieving images:",o),o}}},5403:(e,a,r)=>{var o=r(64836);a.Z=void 0;var s=o(r(45649)),t=r(80184);a.Z=(0,s.default)((0,t.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},95070:(e,a,r)=>{r.d(a,{Z:()=>v});var o=r(41418),s=r.n(o),t=r(72791),n=r(10162),l=r(80184);const c=t.forwardRef(((e,a)=>{let{className:r,bsPrefix:o,as:t="div",...c}=e;return o=(0,n.vE)(o,"card-body"),(0,l.jsx)(t,{ref:a,className:s()(r,o),...c})}));c.displayName="CardBody";const i=c,d=t.forwardRef(((e,a)=>{let{className:r,bsPrefix:o,as:t="div",...c}=e;return o=(0,n.vE)(o,"card-footer"),(0,l.jsx)(t,{ref:a,className:s()(r,o),...c})}));d.displayName="CardFooter";const f=d;var m=r(96040);const h=t.forwardRef(((e,a)=>{let{bsPrefix:r,className:o,as:c="div",...i}=e;const d=(0,n.vE)(r,"card-header"),f=(0,t.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,l.jsx)(m.Z.Provider,{value:f,children:(0,l.jsx)(c,{ref:a,...i,className:s()(o,d)})})}));h.displayName="CardHeader";const u=h,E=t.forwardRef(((e,a)=>{let{bsPrefix:r,className:o,variant:t,as:c="img",...i}=e;const d=(0,n.vE)(r,"card-img");return(0,l.jsx)(c,{ref:a,className:s()(t?`${d}-${t}`:d,o),...i})}));E.displayName="CardImg";const g=E,S=t.forwardRef(((e,a)=>{let{className:r,bsPrefix:o,as:t="div",...c}=e;return o=(0,n.vE)(o,"card-img-overlay"),(0,l.jsx)(t,{ref:a,className:s()(r,o),...c})}));S.displayName="CardImgOverlay";const x=S,b=t.forwardRef(((e,a)=>{let{className:r,bsPrefix:o,as:t="a",...c}=e;return o=(0,n.vE)(o,"card-link"),(0,l.jsx)(t,{ref:a,className:s()(r,o),...c})}));b.displayName="CardLink";const p=b;var N=r(27472);const C=(0,N.Z)("h6"),O=t.forwardRef(((e,a)=>{let{className:r,bsPrefix:o,as:t=C,...c}=e;return o=(0,n.vE)(o,"card-subtitle"),(0,l.jsx)(t,{ref:a,className:s()(r,o),...c})}));O.displayName="CardSubtitle";const y=O,R=t.forwardRef(((e,a)=>{let{className:r,bsPrefix:o,as:t="p",...c}=e;return o=(0,n.vE)(o,"card-text"),(0,l.jsx)(t,{ref:a,className:s()(r,o),...c})}));R.displayName="CardText";const j=R,I=(0,N.Z)("h5"),U=t.forwardRef(((e,a)=>{let{className:r,bsPrefix:o,as:t=I,...c}=e;return o=(0,n.vE)(o,"card-title"),(0,l.jsx)(t,{ref:a,className:s()(r,o),...c})}));U.displayName="CardTitle";const w=U,k=t.forwardRef(((e,a)=>{let{bsPrefix:r,className:o,bg:t,text:c,border:d,body:f=!1,children:m,as:h="div",...u}=e;const E=(0,n.vE)(r,"card");return(0,l.jsx)(h,{ref:a,...u,className:s()(o,E,t&&`bg-${t}`,c&&`text-${c}`,d&&`border-${d}`),children:f?(0,l.jsx)(i,{children:m}):m})}));k.displayName="Card";const v=Object.assign(k,{Img:g,Title:w,Subtitle:y,Body:i,Link:p,Text:j,Header:u,Footer:f,ImgOverlay:x})},96040:(e,a,r)=>{r.d(a,{Z:()=>s});const o=r(72791).createContext(null);o.displayName="CardHeaderContext";const s=o},2677:(e,a,r)=>{r.d(a,{Z:()=>i});var o=r(41418),s=r.n(o),t=r(72791),n=r(10162),l=r(80184);const c=t.forwardRef(((e,a)=>{const[{className:r,...o},{as:t="div",bsPrefix:c,spans:i}]=function(e){let{as:a,bsPrefix:r,className:o,...t}=e;r=(0,n.vE)(r,"col");const l=(0,n.pi)(),c=(0,n.zG)(),i=[],d=[];return l.forEach((e=>{const a=t[e];let o,s,n;delete t[e],"object"===typeof a&&null!=a?({span:o,offset:s,order:n}=a):o=a;const l=e!==c?`-${e}`:"";o&&i.push(!0===o?`${r}${l}`:`${r}${l}-${o}`),null!=n&&d.push(`order${l}-${n}`),null!=s&&d.push(`offset${l}-${s}`)})),[{...t,className:s()(o,...i,...d)},{as:a,bsPrefix:r,spans:i}]}(e);return(0,l.jsx)(t,{...o,ref:a,className:s()(r,!i.length&&c)})}));c.displayName="Col";const i=c},89743:(e,a,r)=>{r.d(a,{Z:()=>i});var o=r(41418),s=r.n(o),t=r(72791),n=r(10162),l=r(80184);const c=t.forwardRef(((e,a)=>{let{bsPrefix:r,className:o,as:t="div",...c}=e;const i=(0,n.vE)(r,"row"),d=(0,n.pi)(),f=(0,n.zG)(),m=`${i}-cols`,h=[];return d.forEach((e=>{const a=c[e];let r;delete c[e],null!=a&&"object"===typeof a?({cols:r}=a):r=a;const o=e!==f?`-${e}`:"";null!=r&&h.push(`${m}${o}-${r}`)})),(0,l.jsx)(t,{ref:a,...c,className:s()(o,i,...h)})}));c.displayName="Row";const i=c},27472:(e,a,r)=>{r.d(a,{Z:()=>l});var o=r(72791),s=r(41418),t=r.n(s),n=r(80184);const l=e=>o.forwardRef(((a,r)=>(0,n.jsx)("div",{...a,ref:r,className:t()(a.className,e)})))}}]);
//# sourceMappingURL=4841.af738389.chunk.js.map