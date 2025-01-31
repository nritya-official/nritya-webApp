"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[1446],{26953:(e,o,t)=>{t.d(o,{Z:()=>r});t(72791);var a=t(21204),n=t(80184);const r=e=>{let{studio:o}=e;return(0,n.jsx)("a",{href:"#/studio/".concat(o.id),children:(0,n.jsx)(a.Z,{data:o,img_src:"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg"})})}},21204:(e,o,t)=>{t.d(o,{Z:()=>y});var a=t(1413),n=(t(72791),t(92552)),r=t(84654),l=t(28658),s=t(69597),c=t(43782),i=t(94294),d=t(18625),g=t(83168),u=t(36314),m=t(59434),p=t(60717),h=t(83708),x=t(97310),f=t(17237),S=t(80184);function y(e){let{img_src:o,data:t}=e;const y=(0,m.v9)(p.w),j=t.id?t.id:t.studioId,b={backgroundColor:y?"#444":"white",padding:"0px",color:y?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};return(0,S.jsxs)(r.Z,{variant:"solid",sx:(0,a.Z)((0,a.Z)({},b),{},{"&:hover":{transform:"scale(1.01)"}}),children:[(0,S.jsxs)(n.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,S.jsx)("img",{src:t&&t.iconUrl?t.iconUrl:"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg",loading:"lazy",alt:"Studio Image",style:{maxWidth:"100%",height:"auto",overflow:"hidden"}}),(0,S.jsx)(u.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:t&&t.danceStyles&&"string"===typeof t.danceStyles?t.danceStyles.split(",").slice(0,3).map(((e,o)=>(0,S.jsx)(s.Z,{color:o%2===0?"danger":"success",sx:{marginBottom:"10px",fontSize:"0.8rem",bgcolor:h.lt[o].backgroundColor,color:h.lt[o].color},children:e.trim()},o))):(0,S.jsx)(s.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)}),(0,S.jsx)(u.Z,{direction:"row",spacing:2,style:{position:"absolute",top:0,left:0,padding:"1px",paddingTop:"1px"},children:t&&t.freeTrialAvailable&&(0,S.jsx)(s.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:h.DM.LIME.backgroundColor,color:h.DM.LIME.color},children:"Free Trial Available"},1)})]}),(0,S.jsxs)(l.Z,{style:{padding:"10px"},children:[(0,S.jsxs)(c.Z,{display:"flex",justifyContent:"space-between",columnGap:1,children:[(0,S.jsx)(d.Z,{alignSelf:"center",href:"#/studio/".concat(j),fontWeight:"bold",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",style:{color:y?"white":"black"},children:t&&t.studioName?t.studioName:"    "}),t&&t.avgRating?(0,S.jsxs)(g.ZP,{width:52,flexShrink:0,alignSelf:"center",style:{color:y?"white":"black"},children:["\u2b50 ",t.avgRating.toFixed(1)]}):null]}),(0,S.jsx)(g.ZP,{style:{color:y?"white":"black"},level:"body-xs",children:t.street?t.street:".  "}),(0,S.jsx)(x.ZP,{hidden:!0,"aria-label":"Like minimal photography",size:"md",variant:"solid",color:"danger",sx:{position:"absolute",zIndex:2,borderRadius:"50%",right:"1rem",bottom:"2rem",transform:"translateY(50%)"},children:(0,S.jsx)(f.Z,{})}),(0,S.jsxs)(c.Z,{display:"flex",justifyContent:"space-between",children:[(0,S.jsx)(g.ZP,{alignSelf:"center",fontSize:12,style:{color:y?"white":"black"},children:t&&t.minFee&&"@ \u20b9".concat(t.minFee," onwards")}),(0,S.jsx)(i.Z,{size:"small",variant:"contained",sx:{alignSelf:"center",color:"white",backgroundColor:"#735EAB","&:hover":{backgroundColor:"#735EAB",color:"white"},"&.Mui-disabled":{backgroundColor:y?"rgba(115, 94, 171, 0.5)":"rgba(115, 94, 171, 0.3)",color:"rgba(255, 255, 255, 0.5)"}},type:"button",children:"Explore"})]})]})]})}},33467:(e,o,t)=>{t.r(o),t.d(o,{default:()=>H});var a=t(1413),n=t(72791),r=t(59434),l=t(60717),s=t(47022),c=t(89743),i=t(2677),d=t(95316),g=t(95313),u=t(56144),m=t(43360),p=t(67107),h=t(61889),x=t(44507),f=t(36314),S=t(5712),y=t(76989),j=t(29472),b=t(81918),I=t(16029),C=t(88335),E=t(74569),v=t.n(E),w=t(51650),Z=t(26953),O=t(5403),R=t(63466),N=t(83708),k=t(1734),L=t(51321),D=t(99637),A=t(56510),U=t(80184);const T="filterSearchType",P="filterDistances",F="filterDanceForms",B="browserGeoLoc",_=[N.zq.ALL,N.zq.BEGINNERS,N.zq.INTERMEDIATE,N.zq.ADVANCED],M=10**10,W=[1,2,3,4,5,6,7,8,9,10],G=[{name:"studio",label:"Studios",collection:N.Ul.STUDIO},{name:"workshop",label:"Workshops",collection:N.Ul.WORKSHOPS},{name:"openClass",label:"Open Classes",collection:N.Ul.OPEN_CLASSES},{name:"course",label:"Courses",collection:N.Ul.COURSES}];const H=()=>{const{setIsLoading:e}=(0,A.U)(),[o,t]=(0,n.useState)(""),[E,H]=(0,n.useState)([]),[K,z]=(0,n.useState)(""),V=(0,r.v9)(l.w),[q,J]=(0,n.useState)(!1),[Y,Q]=(0,n.useState)({}),[X,$]=(0,n.useState)("distances"),[ee,oe]=(0,n.useState)(0),[te,ae]=(0,n.useState)([]),[ne,re]=(0,n.useState)([]),[le,se]=(0,n.useState)("studio"),[ce,ie]=(0,n.useState)("All"),[de,ge]=(0,n.useState)(M),[ue,me]=(0,n.useState)({workshop:[],openClass:[],course:[]}),pe=w.W.map((e=>({value:e,label:e}))),he={valueContainer:e=>(0,a.Z)((0,a.Z)({},e),{},{maxHeight:100,overflowY:"auto"}),multiValue:(e,o)=>o.data.isFixed?(0,a.Z)((0,a.Z)({},e),{},{backgroundColor:"gray"}):e,multiValueLabel:(e,o)=>o.data.isFixed?(0,a.Z)((0,a.Z)({},e),{},{fontWeight:"bold",color:"white",paddingRight:6}):e,multiValueRemove:(e,o)=>o.data.isFixed?(0,a.Z)((0,a.Z)({},e),{},{display:"none"}):e},xe=()=>{J(!q)},fe=(0,p.Z)({palette:{mode:V?"dark":"light"}}),Se=()=>{let e=0;localStorage.getItem(P)&&e++,ce&&ce!==N.zq.ALL&&e++,de&&de!==M&&e++;const o=localStorage.getItem(F);return o&&(e+=JSON.parse(o).length),e},ye=()=>{e(!0);const a=localStorage.getItem(T)||le||"studio";null==o&&t("");let n="".concat(N.A3,"api/search/?query=").concat(o);const r=(e=>{const o=G.find((o=>o.name===e));return o?o.collection:N.Ul.STUDIO})(a),l=localStorage.getItem("filterLocation")||"New Delhi";n+="&city=".concat(encodeURIComponent(l)),(async e=>{try{const o="".concat(N.A3,"api/autocomplete/?&city=").concat(e),t=await fetch(o);if(!t.ok)throw new Error("Failed to fetch data");const a=await t.json();Q(a)}catch(o){console.error("Error in processing:",o)}})(l),a&&(n+="&entity=".concat(encodeURIComponent(r)));const s=JSON.parse(localStorage.getItem(F)||"[]");s.length>0&&(n+="&danceStyle=".concat(encodeURIComponent(s.join(",")))),r!==N.Ul.STUDIO&&ce&&ce!==N.zq.ALL&&(n+="&level=".concat(encodeURIComponent(ce))),r!==N.Ul.WORKSHOPS&&r!==N.Ul.COURSES||!de||de===M||(n+="&price=".concat(encodeURIComponent(de)));const c=function(){var e=localStorage.getItem(B);if(null!==e)try{var o=JSON.parse(e);if(o&&o.latitude&&o.longitude)return{latitude:o.latitude,longitude:o.longitude}}catch(t){console.error("Error parsing JSON:",t)}return null}();K&&c&&localStorage.getItem(P)&&(n+="&distance=".concat(encodeURIComponent(K),"&user_lat=").concat(encodeURIComponent(c.latitude),"&user_lon=").concat(encodeURIComponent(c.longitude))),console.log("apiEndpoint ",n),fetch(n).then((e=>e.json())).then((e=>{const o=Array.isArray(e)?e:Object.values(e);H(o)})).catch((e=>console.error("Error fetching search results:",e))).finally((()=>{e(!1)}))},je=()=>{z(""),re([]),se("studio"),ge(M),ie(N.zq.ALL),localStorage.removeItem(P),localStorage.removeItem(F),localStorage.setItem(T,"studio"),oe(Se()),J(!1),ye()};(0,n.useEffect)((()=>{const e=localStorage.getItem(P),o=localStorage.getItem(F),t=localStorage.getItem(T);t?se(t):(se("studio"),localStorage.setItem(T,"studio")),e&&z(e),o&&re(JSON.parse(o)),oe(Se()),ye()}),[ce,de]);const[be,Ie]=(0,n.useState)("Search studios, workshops, open classes, courses..."),Ce=()=>{window.innerWidth<600?Ie("Search..."):Ie("Search studios, workshops, open classes, courses...")};return(0,n.useEffect)((()=>(Ce(),window.addEventListener("resize",Ce),()=>{window.removeEventListener("resize",Ce)})),[]),(0,U.jsxs)("div",{style:{backgroundColor:V?"#202020":"white",padding:"10px",minHeight:"75vh"},children:[(0,U.jsx)("header",{children:(0,U.jsxs)(s.Z,{style:{width:"100%"},children:[(0,U.jsx)(h.ZP,{container:!0,alignItems:"center",children:(0,U.jsx)(h.ZP,{item:!0,xs:12,children:(0,U.jsx)(x.Z,{theme:fe,children:(0,U.jsx)(f.Z,{style:{width:"100%",paddingRight:0,marginTop:0,marginLeft:0,marginBottom:0},direction:"row",spacing:1,children:(0,U.jsx)(S.Z,{value:o,onInputChange:async(e,o)=>{const a="".concat(N.A3,"api");if(t(o),o.length>=3)try{const e="filterLocation",t="New Delhi",n=localStorage.getItem(e)||t,r=encodeURIComponent(n||t),l="".concat(a,"/autocomplete?query=").concat(o,"&city=").concat(r),s=await v().get(l);console.log("Response :",s.data);const c=Object.values(s.data).filter((e=>null!==e));ae(c)}catch(n){console.error("Error fetching autocomplete suggestions:",n)}else ae([])},onChange:(e,o)=>{t(o)},options:te,getOptionLabel:e=>e.toString(),renderInput:e=>(0,U.jsx)(y.Z,(0,a.Z)((0,a.Z)({className:"autocomplete-input"},e),{},{label:be,variant:"outlined",InputProps:(0,a.Z)((0,a.Z)({},e.InputProps),{},{endAdornment:(0,U.jsx)(R.Z,{position:"end",style:{marginRight:0,marginTop:0,marginLeft:0,marginBottom:0},children:(0,U.jsx)(O.Z,{style:{cursor:"pointer",color:V?"#892CDC":"black",marginRight:1,width:"40px"},onClick:ye})}),style:{paddingRight:0,marginTop:0,marginLeft:0,marginBottom:0}})})),style:{flex:1}})})})})}),(0,U.jsx)("br",{}),(0,U.jsx)(c.Z,{className:"align-items-center",children:(0,U.jsx)("div",{className:"horizontal-scroll-wrapper-for-filters",children:G.map((e=>(0,U.jsx)(i.Z,{xs:"auto",style:{marginTop:"0.5rem"},children:(0,U.jsx)("button",{onClick:()=>{return o=e.name,localStorage.setItem(T,o),localStorage.removeItem(P),z(""),ie(N.zq.ALL),ge(M),se(o),oe(Se()),void ye();var o},style:{cursor:"pointer",backgroundColor:le===e.name?V?"white":"black":V?"black":"white",color:le===e.name?V?"black":"white":V?"white":"black",borderRadius:"10px",fontWeight:"bold",border:"1px solid ".concat(V?"white":"black"),padding:"5px 10px",transition:"background-color 0.3s, color 0.3s"},children:e.label})},e.name)))})}),(0,U.jsx)(c.Z,{className:"align-items-center",children:(0,U.jsxs)("div",{className:"horizontal-scroll-wrapper-for-filters",children:[(0,U.jsx)(i.Z,{xs:"auto",style:{marginTop:"0.5rem"},children:(0,U.jsx)(j.Z,{onClick:xe,badgeContent:ee,color:V?"warning":"secondary",pill:!0,children:(0,U.jsx)(b.Z,{className:"rounded-3",color:V?"warning":"secondary",label:"\u2630 filters",variant:V?"outlined":"contained"})})}),(ne.length||K||ce&&ce!==N.zq.ALL||de&&de!==M)&&(0,U.jsx)(i.Z,{xs:"auto",style:{marginTop:"0.5rem"},children:(0,U.jsx)(j.Z,{color:"error",onClick:je,style:{cursor:"pointer"},pill:!0,children:(0,U.jsx)(b.Z,{color:"error",label:"Clear All",onDelete:je,style:{cursor:"pointer"},variant:V?"outlined":"contained",className:"rounded-3"})})}),(0,U.jsxs)(I.Z,{display:"flex",children:[K&&(0,U.jsx)(i.Z,{xs:"auto",style:{marginTop:"0.5rem"},children:(0,U.jsx)(j.Z,{color:"success",pill:!0,children:(0,U.jsx)(b.Z,{className:"rounded-3",color:"success",label:"Distance: ".concat(K," km"),variant:V?"outlined":"contained",onDelete:()=>{z(null),localStorage.removeItem(P),oe(Se()),ye()}})})}),ce&&ce!==N.zq.ALL&&(0,U.jsx)(i.Z,{xs:"auto",children:(0,U.jsx)(j.Z,{color:"info",style:{marginLeft:"0",marginTop:"0.5rem"},pill:!0,children:(0,U.jsx)(b.Z,{className:"rounded-3",color:"info",label:"Level: ".concat(ce),variant:V?"outlined":"contained",onDelete:()=>ie(N.zq.ALL)})},ce)}),de&&de!==M&&(0,U.jsx)(i.Z,{xs:"auto",children:(0,U.jsx)(j.Z,{color:"info",style:{marginLeft:"0",marginTop:"0.5rem"},pill:!0,children:(0,U.jsx)(b.Z,{className:"rounded-3",color:"info",label:"Prices Upto: ".concat(de),variant:V?"outlined":"contained",onDelete:()=>ge(M)})},de)}),ne&&(0,U.jsx)(i.Z,{xs:"auto",children:ne.map(((e,o)=>(0,U.jsx)(j.Z,{color:"info",style:{marginLeft:0!==o?"0.25rem":"0",marginTop:"0.5rem"},pill:!0,children:(0,U.jsx)(b.Z,{className:"rounded-3",color:"info",label:"Dance Form: ".concat(e),variant:V?"outlined":"contained",onDelete:()=>(e=>{const o=ne.filter((o=>o!==e));re(o),localStorage.setItem(F,JSON.stringify(o)),oe(Se()),ye()})(e)})},o)))})]})]})})]})}),(0,U.jsxs)(d.Z,{show:q,onHide:xe,backdrop:"static",children:[(0,U.jsx)(d.Z.Header,{closeButton:!0,children:(0,U.jsx)(d.Z.Title,{children:"Filters"})}),(0,U.jsxs)(d.Z.Body,{children:[(0,U.jsxs)(c.Z,{children:[(0,U.jsxs)(i.Z,{md:4,children:[(0,U.jsx)("h5",{children:"Filter By:"}),(0,U.jsxs)("ul",{style:{listStyleType:"none",padding:0},children:["studio"===le&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("hr",{style:{margin:"5px 0"}}),(0,U.jsx)("li",{style:{cursor:"pointer",margin:"5px 0"},onClick:()=>($("distances"),J(!0)),children:"Distances"})]}),("workshop"===le||"course"===le)&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("hr",{style:{margin:"5px 0"}}),(0,U.jsx)("li",{style:{cursor:"pointer",margin:"5px 0"},onClick:()=>($("price"),J(!0)),children:"Price"})]}),"studio"!==le&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("hr",{style:{margin:"5px 0"}}),(0,U.jsx)("li",{style:{cursor:"pointer",margin:"5px 0"},onClick:()=>($("level"),J(!0)),children:"Level"})]}),(0,U.jsx)("hr",{style:{margin:"5px 0"}}),(0,U.jsx)("li",{style:{cursor:"pointer",margin:"5px 0"},onClick:()=>($("danceForm"),J(!0)),children:"Dance Forms"}),(0,U.jsx)("hr",{style:{margin:"5px 0"}})]})]}),(0,U.jsxs)(i.Z,{md:8,children:[q&&"distances"===X&&(0,U.jsxs)(g.Z.Group,{controlId:"filterDistances",children:[(0,U.jsx)(g.Z.Label,{children:"Distances:"}),(0,U.jsxs)(g.Z.Control,{className:"p-0",as:"select",value:K,onChange:e=>z(e.target.value),children:[(0,U.jsx)("option",{value:"",children:"Select distance"}),W.map((e=>(0,U.jsxs)("option",{value:e,children:[e," km"]},e)))]})]}),q&&"level"===X&&(0,U.jsxs)(g.Z.Group,{controlId:"filterLevel",children:[(0,U.jsx)(g.Z.Label,{children:"Level :"}),(0,U.jsxs)(g.Z.Control,{className:"p-0",as:"select",value:ce,onChange:e=>ie(e.target.value),children:[(0,U.jsx)("option",{value:"",children:"Select Lavel"}),_.map((e=>(0,U.jsx)("option",{value:e,children:e},e)))]})]}),q&&"price"===X&&(0,U.jsxs)(g.Z.Group,{controlId:"filterPrice",children:[(0,U.jsx)(g.Z.Label,{children:"Prices :"}),(0,U.jsxs)(g.Z.Control,{className:"p-0",as:"select",value:de,onChange:e=>ge(e.target.value),children:[(0,U.jsx)("option",{value:"",children:"Prices below"}),[499,999,1499,1999,2999,4999,9999,M].map((e=>(0,U.jsx)("option",{value:e,children:e>=M?"All":e},e)))]})]}),q&&"danceForm"===X&&(0,U.jsxs)(g.Z.Group,{controlId:"filterDanceForms",children:[(0,U.jsx)(g.Z.Label,{children:"Dance Forms:"}),(0,U.jsx)(C.ZP,{isMulti:!0,value:pe.filter((e=>ne.includes(e.value))),onChange:e=>{re(e?e.map((e=>e.value)):[])},options:pe,closeMenuOnSelect:!1,placeholder:"Select Dance Forms",styles:he})]})]})]}),(0,U.jsxs)(u.Z,{style:{marginTop:"1rem"},children:[(0,U.jsx)(m.Z,{variant:"primary",onClick:()=>{localStorage.setItem(P,K),localStorage.setItem(T,le),localStorage.setItem(F,JSON.stringify(ne)),oe(Se()),J(!1),ye()},children:"Apply"}),(0,U.jsx)(m.Z,{variant:"danger",onClick:je,style:{marginLeft:"10px"},children:"Clear All Filters"})]})]})]}),(0,U.jsx)("hr",{}),"studio"===le&&(0,U.jsx)("div",{style:{display:"flex",flexWrap:"wrap",padding:"10px"},children:0===E.length?(0,U.jsx)("div",{className:"",style:{minHeight:"30vh"}}):E.map(((e,o)=>(0,U.jsx)("div",{className:"studio-card-container",style:{padding:"0.2rem"},md:2,children:(0,U.jsx)("a",{href:"#/studio/".concat(e.studioId),style:{textDecoration:"none"},children:(0,U.jsx)(Z.Z,{studio:e})})},o)))}),"workshop"===le&&(0,U.jsx)("div",{style:{display:"flex",flexWrap:"wrap",padding:"10px"},children:0===E.length?(0,U.jsx)("div",{className:"",style:{minHeight:"30vh"}}):E.map(((e,o)=>(0,U.jsx)("div",{className:"studio-card-container",style:{padding:"0.2rem"},md:2,children:(0,U.jsx)(k.Z,{dataItem:e,studioIdName:Y},e.id)},o)))}),"openClass"===le&&(0,U.jsx)("div",{style:{display:"flex",flexWrap:"wrap",padding:"10px"},children:0===E.length?(0,U.jsx)("div",{className:"",style:{minHeight:"30vh"}}):E.map(((e,o)=>(0,U.jsx)("div",{className:"studio-card-container",style:{padding:"0.2rem"},md:2,children:(0,U.jsx)(L.Z,{dataItem:e,studioIdName:Y},e.id)},o)))}),"course"===le&&(0,U.jsx)("div",{style:{display:"flex",flexWrap:"wrap",padding:"10px"},children:0===E.length?(0,U.jsx)("div",{className:"",style:{minHeight:"30vh"}}):E.map(((e,o)=>(0,U.jsx)("div",{className:"studio-card-container",style:{padding:"0.2rem"},md:2,children:(0,U.jsx)(D.Z,{dataItem:e,studioIdName:Y},e.id)},o)))})]})}},83708:(e,o,t)=>{t.d(o,{A3:()=>h,DM:()=>d,QP:()=>x,RY:()=>g,Rb:()=>p,Ul:()=>m,i0:()=>l,lt:()=>u,n$:()=>r,rM:()=>c,uM:()=>i,zq:()=>s});var a=t(56355),n=t(80184);const r={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},l={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},s={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},c={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},i={CLOUD:"https://djserver-production-ffe37b1b53b5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},g={[s.ALL]:d.GREEN,[s.BEGINNERS]:d.BLUE,[s.INTERMEDIATE]:d.YELLOW,[s.ADVANCED]:d.RED},u=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],m={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},p={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},h="https://djserver-production-ffe37b1b53b5.herokuapp.com/",x={AC:(0,n.jsx)(a.l51,{}),"Free Wifi":(0,n.jsx)(a._0,{}),"RO Water":(0,n.jsx)(a.EXY,{}),Toilet:(0,n.jsx)(a.Iev,{}),"Power Backup":(0,n.jsx)(a.eKD,{}),"Fire Extinguisher":(0,n.jsx)(a.Ybg,{}),"First Aid Kit":(0,n.jsx)(a.FZx,{}),"CCTV Camera":(0,n.jsx)(a.KoQ,{}),"Card Payment":(0,n.jsx)(a.ypE,{}),"Parking Space":(0,n.jsx)(a.mxg,{})}},68449:(e,o,t)=>{t.d(o,{FV:()=>b,Km:()=>x,Ld:()=>u,Us:()=>g,XG:()=>I,Xt:()=>h,eg:()=>j,gG:()=>d,gv:()=>m,ih:()=>f,oM:()=>i,qS:()=>S,to:()=>p,xR:()=>y});var a=t(1413),n=t(12481),r=t(10159),l=t(30276),s=t(83708),c=t(644);const i=async e=>{const o=s.A3,t="".concat(o,"crud/getUserMode/").concat(e);try{const e=await fetch(t),o=await e.json();if(o.success){let e=!1;!0===o.data&&(e=!0),c.Z.setItem("CreatorMode",e)}else console.log("Error: ",o.message||"Unknown error")}catch(a){console.log("Error fetching user mode: ",a),c.Z.setItem("CreatorMode",!1)}},d=async e=>(await i(e),await(async()=>{try{const e=c.Z.getItem("CreatorMode");return console.log("getCreatorMode ",e),e||!1}catch(e){return console.log(" error"),!1}})()),g=async(e,o)=>{console.log("Debug ","".concat(e,"/").concat(o));const t="".concat(e,"/").concat(o),a=(0,l.iH)(r.tO,t);try{const e=await(0,l.aF)(a);if(e.items.length>0){const o=e.items[0],t=await(0,l.Jt)(o);return console.log("Debug URL:",t),t}return console.log("Debug No files found in the folder."),null}catch(n){return console.error("Error getting image URL:",n),null}},u=async(e,o)=>{const t=(0,n.JU)(r.db,e,o),a=await(0,n.QT)(t);return a.exists()?a.data():null},m=async(e,o,t)=>{const a=(0,n.JU)(r.db,e,o);return await(0,n.pl)(a,t,{merge:!0}),t},p=async(e,o,t)=>{const a=(0,n.JU)(r.db,e,o);return await(0,n.r7)(a,{isPhoneNumberVerified:!0,phoneNumber:t}),!0},h=async(e,o,t)=>{const l=(0,n.JU)(r.db,e,o);return await(0,n.r7)(l,t),(0,a.Z)({id:o},t)},x=async(e,o,t,a)=>{console.log("Hiii ",e,o,t,a);const l=(0,n.IO)((0,n.hJ)(r.db,e),(0,n.ar)(o,t,a));return(await(0,n.Yp)(l)).data().count},f=async(e,o)=>{const t="".concat(e,"/").concat(o),a=(0,l.iH)(r.tO,t),n=await(0,l.aF)(a);await Promise.all(n.items.map((async e=>{await(0,l.oq)(e)})))},S=async(e,o,t)=>{const a="".concat(e,"/").concat(o,"/").concat(t),n=(0,l.iH)(r.tO,a),s=await(0,l.aF)(n);await Promise.all(s.items.map((async e=>{await(0,l.oq)(e)})))},y=async function(e,o,t,a){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const s=o.length;let c=0;await Promise.all(o.map((async o=>{let i="".concat(e,"/").concat(t,"/").concat(o.filename);n&&(i="".concat(e,"/").concat(t,"/").concat(n,"/").concat(o.filename));const d=(0,l.iH)(r.tO,i);await(0,l.oq)(d),c+=1,a(c/s*100)})))},j=async function(e,o,t,a){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(e,t);const s=o.length;let c=0;await Promise.all(o.map((async o=>{let i="".concat(e,"/").concat(t);n&&(i="".concat(e,"/").concat(t,"/").concat(n));const d=(0,l.iH)(r.tO,"".concat(i,"/").concat(o.file.name));await(0,l.KV)(d,o.file),c+=1,a(c/s*100)})))},b=async function(e,o,t){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,c="".concat(e,"/").concat(t);a&&(c="".concat(e,"/").concat(t,"/").concat(a)),console.log(o,o.name);const i=(0,l.iH)(r.tO,"".concat(c,"/").concat(o.name)),d=(0,l.B0)(i,o);d.on("state_changed",(e=>{const o=e.totalBytes,t=e.bytesTransferred,a=o>0?(t/o*100).toFixed(2):-1;switch(n(a),console.log("Upload is "+a+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(e=>{e.code}),(()=>{(0,l.Jt)(d.snapshot.ref).then((e=>{console.log("File available at",e),s(e)}))}))},I=async e=>{const o="".concat(e),t=(0,l.iH)(r.tO,o);try{const e=await(0,l.aF)(t);return await Promise.all(e.items.map((async e=>{const o=await(0,l.Jt)(e);return{id:e.name,filename:e.name,fileURL:o}})))}catch(a){throw console.error("Error retrieving images:",a),a}}},51650:e=>{e.exports=JSON.parse('{"W":["Kuchipudi","Swing","Irish Dance","Folk Dance","Street Dance","Breaking","Voguing","House Dance","Bachata","Ballet","Ballroom","Belly Dance","Bhangra","Bharatanatyam","Bihu","Bollywood","Bollyhop","Butoh","Capoeira","Chhau","Clogging","Contemporary","Dandiya Raas","Flamenco","Garba","Giddha","Heels","Hip Hop","Irish Step Dance","Jazz","Jive","Kathak","Kathakali","Kizomba","Krumping","Lavani","Line Dance","Locking","Lyrical Hip-Hop","Manipuri","Modern Dance","Mohiniyattam","Odissi","Polynesian Dance","Popping","Rouf","Salsa","Sattriya","Tango","Tap Dance","Vogue","Waacking","Whacking","Zumba"]}')}}]);
//# sourceMappingURL=1446.88aff9f4.chunk.js.map