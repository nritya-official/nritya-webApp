"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[5297],{25297:(e,r,t)=>{t.r(r),t.d(r,{default:()=>T});var o=t(1413),l=t(72791),a=t(28949),n=t(95313),c=t(89743),s=t(2677),i=t(92592),d=t(43360),u=t(59434),h=t(60717),b=t(56355),f=t(12481),g=t(30276),x=t(83708),p=t(10159),y=t(18406),m=t(80184);const j=function(){const e=(0,u.v9)(h.w),[r,t]=(0,l.useState)(null),[o,a]=(0,l.useState)(null);return(0,m.jsxs)("div",{style:{backgroundColor:e?"#202020":"white",color:e?"white":"black"},children:[(0,m.jsx)("h1",{style:{backgroundColor:e?"#202020":"white",color:e?"white":"black",textTransform:"capitalize"},children:"Add Dance Teacher"}),(0,m.jsxs)(n.Z,{onSubmit:async e=>{var t;e.preventDefault(),console.log("Hi");let l=null;JSON.parse(localStorage.getItem("userInfo"))&&JSON.parse(localStorage.getItem("userInfo")).UserId&&(l=JSON.parse(localStorage.getItem("userInfo")).UserId),l||(console.log("Created by not found"),alert("User not found"));const a=null===(t=JSON.parse(localStorage.getItem("userInfo")))||void 0===t?void 0:t.email;console.log(l);try{const t={name:e.target.name.value,danceStyles:e.target.danceStyles.value,experience:e.target.experience.value,age:e.target.age.value,email:e.target.email.value,description:e.target.description.value,facebook:e.target.facebook.value,instagram:e.target.instagram.value,twitter:e.target.twitter.value,youtube:e.target.youtube.value,createdBy:l,ownedBy:null},n=a,c={entity_name:e.target.name.value},s=await(0,y.qC)(t,x.Ul.INSTRUCTORS,n,c);if(s.ok){const e=await s.json();if(console.log("Instructor added:",e,null===e||void 0===e?void 0:e.id),r&&o&&e.id){const r=await(async(e,r)=>{console.log("Inside handleProfilePictureChange");try{const t=x.Rb.INSTRUCTORIMAGES,o="".concat(t,"/").concat(r),l=(0,g.iH)(p.tO,o);console.log("handleProfilePictureChange ",t,o),(await(0,g.aF)(l)).items.forEach((async e=>{await(0,g.oq)(e)}));const a=(0,g.iH)(p.tO,"".concat(o,"/").concat(e.name));return await(0,g.KV)(a,e),await(0,g.Jt)(a)}catch(t){throw console.error("Error handling profile picture:",t),t}})(o,e.id);console.log("Profile picture uploaded:",r)}}else console.error("Error adding instructor:",s.statusText);console.log("Instructor added successfully"),alert("Instructor added successfully")}catch(n){alert("Error",n)}},children:[(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(s.Z,{md:4,children:(0,m.jsxs)(n.Z.Group,{controlId:"formFile",className:"mb-3",children:[(0,m.jsx)(n.Z.Label,{children:(0,m.jsx)(c.Z,{style:{textAlign:"center"},children:(0,m.jsx)("div",{style:{width:"22rem",height:"22rem",borderRadius:"50%",overflow:"hidden",margin:"auto",position:"relative",backgroundColor:e?"#d3d3d3":"black"},children:r&&(0,m.jsx)(i.Z,{src:r,alt:"Selected",style:{width:"100%",height:"100%",display:r?"block":"none"}})})})}),(0,m.jsx)(c.Z,{children:(0,m.jsx)("div",{style:{textAlign:"center"},children:(0,m.jsxs)("label",{htmlFor:"fileInput",style:{cursor:"pointer",display:"inline-block",padding:"8px 8px",backgroundColor:"#007bff",color:"white",borderRadius:"14px",textTransform:"capitalize",border:"1px solid #666"},children:[(0,m.jsx)("span",{style:{fontSize:"1rem"},children:"Image +"}),(0,m.jsx)("input",{type:"file",id:"fileInput",name:"picture",accept:"image/*",style:{display:"none"},onChange:e=>{const r=e.target.files[0];r&&(t(URL.createObjectURL(r)),a(r))}})]})})})]})}),(0,m.jsxs)(s.Z,{md:8,children:[(0,m.jsx)(n.Z.Label,{children:"Name"}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter name",name:"name",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,m.jsx)(n.Z.Label,{children:"Dance Styles"}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter dance styles",name:"danceStyles",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(n.Z.Label,{children:"Experience"}),(0,m.jsx)(n.Z.Control,{type:"number",placeholder:"Enter experience (in years)",name:"experience",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,m.jsx)(n.Z.Label,{children:"Age"}),(0,m.jsx)(n.Z.Control,{type:"number",placeholder:"Enter age",name:"age",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,m.jsx)(n.Z.Label,{children:"Email"}),(0,m.jsx)(n.Z.Control,{type:"email",placeholder:"Enter email Id of instructor ",name:"email",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]})]})]}),(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(n.Z.Label,{children:"Description"}),(0,m.jsx)(n.Z.Control,{as:"textarea",rows:3,placeholder:"Enter description",name:"description",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"},required:!0})]}),(0,m.jsx)(n.Z.Label,{children:"Social Links"}),(0,m.jsxs)(c.Z,{children:[(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(b.Am9,{size:30,style:{color:e?"white":"black"}}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter Facebook profile URL",name:"facebook",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(b.Zf_,{size:30,style:{color:e?"white":"black"}}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter Instagram profile URL",name:"instagram",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(b.fWC,{size:30,style:{color:e?"white":"black"}}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter Twitter profile URL",name:"twitter",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(b.V2E,{size:30,style:{color:e?"white":"black"}}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter Youtube channel URL",name:"youtube",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]})]}),(0,m.jsx)(d.Z,{variant:"primary",type:"submit",style:{backgroundColor:e?"#892CDC":"black",color:"white"},children:"Submit"})]})]})};const k=function(e){let{instructors:r,setInstructors:t}=e;const a=(0,u.v9)(h.w),[j,k]=(0,l.useState)(null),[C,E]=(0,l.useState)(null),[I,S]=(0,l.useState)(null);(0,l.useEffect)((()=>{if(j){const r=j.id;if(r){const t="".concat(x.Rb.INSTRUCTORIMAGES,"/").concat(r),o=(0,g.iH)(p.tO,t);try{(0,g.aF)(o).then((e=>{if(e.items.length>0){const r=e.items[0];(0,g.Jt)(r).then((e=>{E(e),S(e)})).catch((e=>{console.error("Error fetching studio icon:",e)}))}else E(null),S(null)})).catch((e=>{console.error("Error listing files in the folder:",e)}))}catch(e){console.error("Error fetching studio icon:",e)}}}}),[j]);const w=async(e,r)=>{try{const t=x.Rb.INSTRUCTORIMAGES,o="".concat(t,"/").concat(r),l=(0,g.iH)(p.tO,o);(await(0,g.aF)(l)).items.forEach((async e=>{await(0,g.oq)(e)}));const a=(0,g.iH)(p.tO,"".concat(o,"/").concat(e.name));await(0,g.KV)(a,e);return await(0,g.Jt)(a)}catch(t){throw console.error("Error handling profile picture:",t),t}};return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{style:{color:a?"white":"black",textTransform:"capitalize"},children:"Update Dance Teacher"}),(0,m.jsxs)(n.Z,{onSubmit:async e=>{if(e.preventDefault(),j)try{const r={name:e.target.name.value,danceStyles:e.target.danceStyles.value,experience:e.target.experience.value,age:e.target.age.value,email:e.target.email.value,description:e.target.description.value,facebook:e.target.facebook.value,instagram:e.target.instagram.value,twitter:e.target.twitter.value,youtube:e.target.youtube.value},t=await(0,y.fP)(r,x.Ul.INSTRUCTORS,j.id);if(t.ok){if(k((e=>(0,o.Z)((0,o.Z)({},e),r))),C&&I){await w(I,j.id)}alert("Instructor updated successfully")}else console.error("Error adding instructor:",t.statusText)}catch(r){console.error("Error updating instructor",r),alert("Error updating instructor")}else alert("Please select an instructor to update.")},children:[(0,m.jsxs)(n.Z.Control,{as:"select",onChange:async e=>{e.preventDefault();const r=e.target.value,t=await(0,f.QT)((0,f.JU)(p.db,x.Ul.INSTRUCTORS,r));k((0,o.Z)({id:t.id},t.data()))},style:{backgroundColor:a?"#333333":"",color:a?"white":"black",height:"auto"},children:[(0,m.jsx)("option",{style:{backgroundColor:a?"#333333":"",color:a?"white":"black"},children:"Select an instructor"}),r.map((e=>(0,m.jsx)("option",{value:e.id,children:"".concat(e.name," - ").concat(e.id)},e.id)))]}),(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(s.Z,{md:4,children:(0,m.jsxs)(n.Z.Group,{controlId:"formFile",className:"mb-3",children:[(0,m.jsx)(n.Z.Label,{children:(0,m.jsx)(c.Z,{children:(0,m.jsx)("div",{style:{width:"20rem",height:"20rem",borderRadius:"50%",overflow:"hidden",margin:"auto",position:"relative",backgroundColor:a?"#d3d3d3":"black"},children:C&&(0,m.jsx)(i.Z,{src:C,alt:"Selected",style:{width:"100%",height:"100%",display:C?"block":"none"}})})})}),(0,m.jsx)(c.Z,{children:(0,m.jsx)("div",{style:{textAlign:"center"},children:(0,m.jsxs)("label",{htmlFor:"fileInput",style:{cursor:"pointer"},children:[(0,m.jsx)("span",{style:{marginBottom:"2px",fontSize:"2rem"}}),(0,m.jsx)("input",{type:"file",id:"fileInput",name:"picture",accept:"image/*",style:{},onChange:e=>{const r=e.target.files[0];r&&(E(URL.createObjectURL(r)),S(r))}})]})})})]})}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(n.Z.Label,{children:"Name"}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter name",name:"name",defaultValue:j?j.name:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}}),(0,m.jsx)(n.Z.Label,{children:"Dance Styles"}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter dance styles",name:"danceStyles",defaultValue:j?j.danceStyles:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}}),(0,m.jsx)(n.Z.Label,{children:"Experience"}),(0,m.jsx)(n.Z.Control,{type:"number",placeholder:"Enter experience (in years)",name:"experience",defaultValue:j?j.experience:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}}),(0,m.jsx)(n.Z.Label,{children:"Age"}),(0,m.jsx)(n.Z.Control,{type:"number",placeholder:"Enter age",name:"age",defaultValue:j?j.age:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}}),(0,m.jsx)(n.Z.Label,{children:"Email"}),(0,m.jsx)(n.Z.Control,{type:"email",placeholder:"Enter email Id of instructor",name:"email",defaultValue:j?j.email:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]})]}),(0,m.jsx)(n.Z.Label,{children:"Description"}),(0,m.jsx)(n.Z.Control,{as:"textarea",rows:3,placeholder:"Enter description",name:"description",defaultValue:j?j.description:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}}),(0,m.jsx)(n.Z.Label,{children:"Social Links"}),(0,m.jsxs)(c.Z,{children:[(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(b.Am9,{size:30}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter Facebook profile URL",name:"facebook",defaultValue:j?j.facebook:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(b.Zf_,{size:30}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter Instagram profile URL",name:"instagram",defaultValue:j?j.instagram:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(b.fWC,{size:30}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter Twitter profile URL",name:"twitter",defaultValue:j?j.twitter:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(b.V2E,{size:30}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter Youtube channel URL",name:"youtube",defaultValue:j?j.youtube:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]})]}),(0,m.jsx)(d.Z,{variant:"primary",type:"submit",style:{backgroundColor:a?"#892CDC":"black",color:"white"},children:"Update Instructor"})]})]})};var C=t(95070),E=t(45736);const I=function(e){let{instructor:r,id:t}=e;const o=r.danceStyles?r.danceStyles.split(","):[],a=(0,u.v9)(h.w),[n,i]=(0,l.useState)(null),d={width:"18rem",margin:"5px",backgroundColor:a?"#333333":"black",color:a?"white":"black"},f={width:"60px",height:"60px",borderRadius:"50%",marginRight:"10px",backgroundColor:a?"#555":"#d3d3d3",display:"flex",justifyContent:"center",alignItems:"center"};return(0,l.useEffect)((()=>{(async()=>{if(r&&r.id){const t="".concat(x.Rb.INSTRUCTORIMAGES,"/").concat(r.id),o=(0,g.iH)(p.tO,t);try{(0,g.aF)(o).then((e=>{if(e.items.length>0){const r=e.items[0];(0,g.Jt)(r).then((e=>{i(e)})).catch((e=>{console.error("Error fetching studio icon:",e)}))}})).catch((e=>{console.error("Error listing files in the folder:",e)}))}catch(e){console.error("Error fetching image URL:",e)}}})()}),[]),(0,m.jsx)(C.Z,{style:d,children:(0,m.jsxs)(C.Z.Body,{children:[(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(s.Z,{md:4,children:n?(0,m.jsx)(C.Z.Img,{variant:"top",src:n,alt:"Instructor",style:{width:"5rem",height:"5rem",borderRadius:"50%",marginRight:"1px"}}):(0,m.jsx)("div",{style:f,children:(0,m.jsx)("span",{style:{color:a?"white":"black"}})})}),(0,m.jsxs)(s.Z,{md:6,children:[(0,m.jsx)("h",{style:{color:"white"},children:"Instructor"}),(0,m.jsx)("br",{}),(0,m.jsx)("span",{style:{color:"white"},children:r.name})]})]}),(0,m.jsx)("br",{}),(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(C.Z.Subtitle,{className:"mb-2 text-muted",style:{fontSize:"8px"},children:" ".concat(r.id)}),(0,m.jsx)("div",{children:r.description&&(0,m.jsxs)("p",{style:{fontSize:"14px",color:"white"},children:[" ",r.description," year(s)"]})}),(0,m.jsx)("div",{children:r.experience&&(0,m.jsxs)("p",{style:{fontSize:"12px",color:"white"},children:["Exp: ",r.experience," year(s)"]})}),(0,m.jsx)("div",{children:o.map(((e,r)=>(0,m.jsx)(E.Z,{pill:!0,bg:a?"light":"dark",style:{marginRight:"5px"},children:e.trim()},r)))}),(0,m.jsxs)("div",{children:[r.facebook&&(0,m.jsx)("a",{href:r.facebook,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,m.jsx)(b.Am9,{style:{marginRight:"1rem"}})}),r.instagram&&(0,m.jsx)("a",{href:r.instagram,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,m.jsx)(b.Zf_,{style:{marginRight:"1rem"}})}),r.twitter&&(0,m.jsx)("a",{href:r.twitter,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,m.jsx)(b.fWC,{style:{marginRight:"1rem"}})}),r.youtube&&(0,m.jsx)("a",{href:r.youtube,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,m.jsx)(b.V2E,{style:{marginRight:"1rem"}})})]})]})]})})};var S=t(61224),w=t(43896),R=t(83449),Z=t(47283),O=t(82851),v=t(16029);const T=function(){const e=(0,u.v9)(h.w),[r,t]=(0,l.useState)([]),{currentUser:n}=(0,S.a)(),[c,s]=l.useState("1");return(0,l.useEffect)((()=>{(async()=>{let e=n&&n.uid?n.uid:null;if(!e)return console.log("User not found"),void alert("User not found");const r=(0,f.hJ)(p.db,x.Ul.INSTRUCTORS),l=(0,f.IO)(r,(0,f.ar)("createdBy","==",e)),a=await(0,f.PL)(l),c=[];a.forEach((e=>{c.push((0,o.Z)({id:e.id},e.data()))})),t(c)})()}),[]),(0,m.jsxs)("div",{style:{backgroundColor:e?"#202020":"",color:e?"white":"black"},children:[(0,m.jsx)(v.Z,{sx:{width:"100%",typography:"body1"},children:(0,m.jsxs)(R.ZP,{value:c,children:[(0,m.jsx)(v.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,m.jsxs)(Z.Z,{style:{color:e?"white":"black"},onChange:(e,r)=>{s(r)},"aria-label":"lab API tabs example",children:[(0,m.jsx)(w.Z,{style:{color:e?"white":"black"},label:"Add Instructor",value:"1"}),(0,m.jsx)(w.Z,{style:{color:e?"white":"black"},label:"Update Instructor",value:"2"})]})}),(0,m.jsx)(O.Z,{value:"1",children:(0,m.jsx)(j,{})}),(0,m.jsx)(O.Z,{value:"2",children:(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(k,{instructors:r,setInstructors:t})})})]})}),(0,m.jsxs)(a.Z,{hidden:!0,defaultActiveKey:"0",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,m.jsxs)(a.Z.Item,{eventKey:"0",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,m.jsx)(a.Z.Header,{style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:"Add Instructor"}),(0,m.jsx)(a.Z.Body,{children:(0,m.jsx)(j,{})})]}),(0,m.jsxs)(a.Z.Item,{eventKey:"1",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,m.jsx)(a.Z.Header,{style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:"Update Instructor"}),(0,m.jsx)(a.Z.Body,{children:(0,m.jsx)(k,{instructors:r,setInstructors:t})})]})]}),(0,m.jsx)("br",{}),r.length>0&&(0,m.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:r.map((e=>(0,m.jsx)(I,{instructor:e},e.id)))})]})}},83708:(e,r,t)=>{t.d(r,{A3:()=>g,DM:()=>d,QP:()=>x,RY:()=>u,Rb:()=>f,Ul:()=>b,i0:()=>n,lt:()=>h,n$:()=>a,rM:()=>s,uM:()=>i,zq:()=>c});var o=t(56355),l=t(80184);const a={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},n={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},c={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},s={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},i={CLOUD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},u={[c.ALL]:d.GREEN,[c.BEGINNERS]:d.BLUE,[c.INTERMEDIATE]:d.YELLOW,[c.ADVANCED]:d.RED},h=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],b={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},f={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},g="https://nrityaserver-2b241e0a97e5.herokuapp.com/",x={AC:(0,l.jsx)(o.l51,{}),"Free Wifi":(0,l.jsx)(o._0,{}),"RO Water":(0,l.jsx)(o.EXY,{}),Toilet:(0,l.jsx)(o.Iev,{}),"Power Backup":(0,l.jsx)(o.eKD,{}),"Fire Extinguisher":(0,l.jsx)(o.Ybg,{}),"First Aid Kit":(0,l.jsx)(o.FZx,{}),"CCTV Camera":(0,l.jsx)(o.KoQ,{}),"Card Payment":(0,l.jsx)(o.ypE,{}),"Parking Space":(0,l.jsx)(o.mxg,{})}},18406:(e,r,t)=>{t.d(r,{C9:()=>n,P9:()=>c,fP:()=>a,ie:()=>s,qC:()=>l});var o=t(83708);async function l(e,r,t,l){const a=o.A3,n=localStorage.getItem("authToken");try{const o=await fetch(a+"crud/newEntity/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({data:e,collection_name:r,notify:t,metadata:l})});if(!o.ok)throw console.log("Error in postData:",o),new Error("HTTP error! status: ".concat(o.status));return o}catch(c){throw console.error("Error in postData:",c),c}}async function a(e,r,t){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const n=o.A3,c="crud/updateEntity/".concat(t),s=localStorage.getItem("authToken");try{const t=await fetch(n+c,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify({data:e,collection_name:r,notify:l,metadata:a})});if(!t.ok)throw console.log("Error in postData:",t),new Error("HTTP error! status: ".concat(t.status));return t}catch(i){throw console.error("Error in postData:",i),i}}const n=async e=>{const r="".concat(o.uM.CLOUD,"bookings/bookEntity/");try{const t=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e.userId,entityType:e.entityType,entityId:e.entityId,associatedStudioId:e.associatedStudioId,emailLearner:e.emailLearner,personsAllowed:e.personsAllowed,pricePerPerson:e.pricePerPerson})}),o=await t.json();return t.ok?(console.log("Booking successful:",o),o):(console.error("Booking failed:",o),o)}catch(t){return console.error("Error occurred while booking:",t),null}},c=e=>{if(console.log("MediaDisplay",e),!e)return null;const r=e.trim().match(/(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w\-]+)/);let t=null;return r&&(t=r[1]),console.log("MediaDisplay",t),t},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const[r,t,o]=e.split("-");return"".concat((e=>{const r=e%10,t=1===r&&"11"!==e?"st":2===r&&"12"!==e?"nd":3===r&&"13"!==e?"rd":"th";return"".concat(e).concat(t)})(o)," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(t)-1],", ").concat(r)}}}]);
//# sourceMappingURL=5297.240fa2e0.chunk.js.map