"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[5297],{25297:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var o=t(72791),l=t(28949),a=t(95313),n=t(89743),c=t(2677),s=t(92592),i=t(43360),d=t(59434),u=t(60717),h=t(56355),b=t(12481),f=t(30276),g=t(83708),x=t(10159),p=t(18406),y=t(80184);const m=function(){const e=(0,d.v9)(u.w),[r,t]=(0,o.useState)(null),[l,b]=(0,o.useState)(null);return(0,y.jsxs)("div",{style:{backgroundColor:e?"#202020":"white",color:e?"white":"black"},children:[(0,y.jsx)("h1",{style:{backgroundColor:e?"#202020":"white",color:e?"white":"black",textTransform:"capitalize"},children:"Add Dance Teacher"}),(0,y.jsxs)(a.Z,{onSubmit:async e=>{var t;e.preventDefault(),console.log("Hi");let o=null;JSON.parse(localStorage.getItem("userInfo"))&&JSON.parse(localStorage.getItem("userInfo")).UserId&&(o=JSON.parse(localStorage.getItem("userInfo")).UserId),o||(console.log("Created by not found"),alert("User not found"));const a=null===(t=JSON.parse(localStorage.getItem("userInfo")))||void 0===t?void 0:t.email;console.log(o);try{const t={name:e.target.name.value,danceStyles:e.target.danceStyles.value,experience:e.target.experience.value,age:e.target.age.value,email:e.target.email.value,description:e.target.description.value,facebook:e.target.facebook.value,instagram:e.target.instagram.value,twitter:e.target.twitter.value,youtube:e.target.youtube.value,createdBy:o,ownedBy:null},n=a,c={entity_name:e.target.name.value},s=await(0,p.qC)(t,g.Ul.INSTRUCTORS,n,c);if(s.ok){const e=await s.json();if(console.log("Instructor added:",e,null===e||void 0===e?void 0:e.id),r&&l&&e.id){const r=await(async(e,r)=>{console.log("Inside handleProfilePictureChange");try{const t=g.Rb.INSTRUCTORIMAGES,o="".concat(t,"/").concat(r),l=(0,f.iH)(x.tO,o);console.log("handleProfilePictureChange ",t,o),(await(0,f.aF)(l)).items.forEach((async e=>{await(0,f.oq)(e)}));const a=(0,f.iH)(x.tO,"".concat(o,"/").concat(e.name));return await(0,f.KV)(a,e),await(0,f.Jt)(a)}catch(t){throw console.error("Error handling profile picture:",t),t}})(l,e.id);console.log("Profile picture uploaded:",r)}}else console.error("Error adding instructor:",s.statusText);console.log("Instructor added successfully"),alert("Instructor added successfully")}catch(n){alert("Error",n)}},children:[(0,y.jsxs)(n.Z,{children:[(0,y.jsx)(c.Z,{md:4,children:(0,y.jsxs)(a.Z.Group,{controlId:"formFile",className:"mb-3",children:[(0,y.jsx)(a.Z.Label,{children:(0,y.jsx)(n.Z,{style:{textAlign:"center"},children:(0,y.jsx)("div",{style:{width:"22rem",height:"22rem",borderRadius:"50%",overflow:"hidden",margin:"auto",position:"relative",backgroundColor:e?"#d3d3d3":"black"},children:r&&(0,y.jsx)(s.Z,{src:r,alt:"Selected",style:{width:"100%",height:"100%",display:r?"block":"none"}})})})}),(0,y.jsx)(n.Z,{children:(0,y.jsx)("div",{style:{textAlign:"center"},children:(0,y.jsxs)("label",{htmlFor:"fileInput",style:{cursor:"pointer",display:"inline-block",padding:"8px 8px",backgroundColor:"#007bff",color:"white",borderRadius:"14px",textTransform:"capitalize",border:"1px solid #666"},children:[(0,y.jsx)("span",{style:{fontSize:"1rem"},children:"Image +"}),(0,y.jsx)("input",{type:"file",id:"fileInput",name:"picture",accept:"image/*",style:{display:"none"},onChange:e=>{const r=e.target.files[0];r&&(t(URL.createObjectURL(r)),b(r))}})]})})})]})}),(0,y.jsxs)(c.Z,{md:8,children:[(0,y.jsx)(a.Z.Label,{children:"Name"}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter name",name:"name",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Dance Styles"}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter dance styles",name:"danceStyles",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(a.Z.Label,{children:"Experience"}),(0,y.jsx)(a.Z.Control,{type:"number",placeholder:"Enter experience (in years)",name:"experience",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Age"}),(0,y.jsx)(a.Z.Control,{type:"number",placeholder:"Enter age",name:"age",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Email"}),(0,y.jsx)(a.Z.Control,{type:"email",placeholder:"Enter email Id of instructor ",name:"email",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]})]})]}),(0,y.jsxs)(n.Z,{children:[(0,y.jsx)(a.Z.Label,{children:"Description"}),(0,y.jsx)(a.Z.Control,{as:"textarea",rows:3,placeholder:"Enter description",name:"description",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"},required:!0})]}),(0,y.jsx)(a.Z.Label,{children:"Social Links"}),(0,y.jsxs)(n.Z,{children:[(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(h.Am9,{size:30,style:{color:e?"white":"black"}}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Facebook profile URL",name:"facebook",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(h.Zf_,{size:30,style:{color:e?"white":"black"}}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Instagram profile URL",name:"instagram",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(h.fWC,{size:30,style:{color:e?"white":"black"}}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Twitter profile URL",name:"twitter",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(h.V2E,{size:30,style:{color:e?"white":"black"}}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Youtube channel URL",name:"youtube",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]})]}),(0,y.jsx)(i.Z,{variant:"primary",type:"submit",style:{backgroundColor:e?"#892CDC":"black",color:"white"},children:"Submit"})]})]})};const j=function(e){let{instructors:r,setInstructors:t}=e;const l=(0,d.v9)(u.w),[m,j]=(0,o.useState)(null),[k,C]=(0,o.useState)(null),[E,I]=(0,o.useState)(null);(0,o.useEffect)((()=>{if(m){const r=m.id;if(r){const t="".concat(g.Rb.INSTRUCTORIMAGES,"/").concat(r),o=(0,f.iH)(x.tO,t);try{(0,f.aF)(o).then((e=>{if(e.items.length>0){const r=e.items[0];(0,f.Jt)(r).then((e=>{C(e),I(e)})).catch((e=>{console.error("Error fetching studio icon:",e)}))}else C(null),I(null)})).catch((e=>{console.error("Error listing files in the folder:",e)}))}catch(e){console.error("Error fetching studio icon:",e)}}}}),[m]);const S=async(e,r)=>{try{const t=g.Rb.INSTRUCTORIMAGES,o="".concat(t,"/").concat(r),l=(0,f.iH)(x.tO,o);(await(0,f.aF)(l)).items.forEach((async e=>{await(0,f.oq)(e)}));const a=(0,f.iH)(x.tO,"".concat(o,"/").concat(e.name));await(0,f.KV)(a,e);return await(0,f.Jt)(a)}catch(t){throw console.error("Error handling profile picture:",t),t}};return(0,y.jsxs)("div",{children:[(0,y.jsx)("h1",{style:{color:l?"white":"black",textTransform:"capitalize"},children:"Update Dance Teacher"}),(0,y.jsxs)(a.Z,{onSubmit:async e=>{if(e.preventDefault(),m)try{const r={name:e.target.name.value,danceStyles:e.target.danceStyles.value,experience:e.target.experience.value,age:e.target.age.value,email:e.target.email.value,description:e.target.description.value,facebook:e.target.facebook.value,instagram:e.target.instagram.value,twitter:e.target.twitter.value,youtube:e.target.youtube.value},t=await(0,p.fP)(r,g.Ul.INSTRUCTORS,m.id);if(t.ok){if(j((e=>({...e,...r}))),k&&E){await S(E,m.id)}alert("Instructor updated successfully")}else console.error("Error adding instructor:",t.statusText)}catch(r){console.error("Error updating instructor",r),alert("Error updating instructor")}else alert("Please select an instructor to update.")},children:[(0,y.jsxs)(a.Z.Control,{as:"select",onChange:async e=>{e.preventDefault();const r=e.target.value,t=await(0,b.QT)((0,b.JU)(x.db,g.Ul.INSTRUCTORS,r));j({id:t.id,...t.data()})},style:{backgroundColor:l?"#333333":"",color:l?"white":"black",height:"auto"},children:[(0,y.jsx)("option",{style:{backgroundColor:l?"#333333":"",color:l?"white":"black"},children:"Select an instructor"}),r.map((e=>(0,y.jsx)("option",{value:e.id,children:"".concat(e.name," - ").concat(e.id)},e.id)))]}),(0,y.jsxs)(n.Z,{children:[(0,y.jsx)(c.Z,{md:4,children:(0,y.jsxs)(a.Z.Group,{controlId:"formFile",className:"mb-3",children:[(0,y.jsx)(a.Z.Label,{children:(0,y.jsx)(n.Z,{children:(0,y.jsx)("div",{style:{width:"20rem",height:"20rem",borderRadius:"50%",overflow:"hidden",margin:"auto",position:"relative",backgroundColor:l?"#d3d3d3":"black"},children:k&&(0,y.jsx)(s.Z,{src:k,alt:"Selected",style:{width:"100%",height:"100%",display:k?"block":"none"}})})})}),(0,y.jsx)(n.Z,{children:(0,y.jsx)("div",{style:{textAlign:"center"},children:(0,y.jsxs)("label",{htmlFor:"fileInput",style:{cursor:"pointer"},children:[(0,y.jsx)("span",{style:{marginBottom:"2px",fontSize:"2rem"}}),(0,y.jsx)("input",{type:"file",id:"fileInput",name:"picture",accept:"image/*",style:{},onChange:e=>{const r=e.target.files[0];r&&(C(URL.createObjectURL(r)),I(r))}})]})})})]})}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(a.Z.Label,{children:"Name"}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter name",name:"name",defaultValue:m?m.name:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Dance Styles"}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter dance styles",name:"danceStyles",defaultValue:m?m.danceStyles:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Experience"}),(0,y.jsx)(a.Z.Control,{type:"number",placeholder:"Enter experience (in years)",name:"experience",defaultValue:m?m.experience:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Age"}),(0,y.jsx)(a.Z.Control,{type:"number",placeholder:"Enter age",name:"age",defaultValue:m?m.age:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Email"}),(0,y.jsx)(a.Z.Control,{type:"email",placeholder:"Enter email Id of instructor",name:"email",defaultValue:m?m.email:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}})]})]}),(0,y.jsx)(a.Z.Label,{children:"Description"}),(0,y.jsx)(a.Z.Control,{as:"textarea",rows:3,placeholder:"Enter description",name:"description",defaultValue:m?m.description:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Social Links"}),(0,y.jsxs)(n.Z,{children:[(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(h.Am9,{size:30}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Facebook profile URL",name:"facebook",defaultValue:m?m.facebook:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}})]}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(h.Zf_,{size:30}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Instagram profile URL",name:"instagram",defaultValue:m?m.instagram:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}})]}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(h.fWC,{size:30}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Twitter profile URL",name:"twitter",defaultValue:m?m.twitter:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}})]}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(h.V2E,{size:30}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Youtube channel URL",name:"youtube",defaultValue:m?m.youtube:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}})]})]}),(0,y.jsx)(i.Z,{variant:"primary",type:"submit",style:{backgroundColor:l?"#892CDC":"black",color:"white"},children:"Update Instructor"})]})]})};var k=t(95070),C=t(45736);const E=function(e){let{instructor:r,id:t}=e;const l=r.danceStyles?r.danceStyles.split(","):[],a=(0,d.v9)(u.w),[s,i]=(0,o.useState)(null),b={width:"18rem",margin:"5px",backgroundColor:a?"#333333":"black",color:a?"white":"black"},p={width:"60px",height:"60px",borderRadius:"50%",marginRight:"10px",backgroundColor:a?"#555":"#d3d3d3",display:"flex",justifyContent:"center",alignItems:"center"};return(0,o.useEffect)((()=>{(async()=>{if(r&&r.id){const t="".concat(g.Rb.INSTRUCTORIMAGES,"/").concat(r.id),o=(0,f.iH)(x.tO,t);try{(0,f.aF)(o).then((e=>{if(e.items.length>0){const r=e.items[0];(0,f.Jt)(r).then((e=>{i(e)})).catch((e=>{console.error("Error fetching studio icon:",e)}))}})).catch((e=>{console.error("Error listing files in the folder:",e)}))}catch(e){console.error("Error fetching image URL:",e)}}})()}),[]),(0,y.jsx)(k.Z,{style:b,children:(0,y.jsxs)(k.Z.Body,{children:[(0,y.jsxs)(n.Z,{children:[(0,y.jsx)(c.Z,{md:4,children:s?(0,y.jsx)(k.Z.Img,{variant:"top",src:s,alt:"Instructor",style:{width:"5rem",height:"5rem",borderRadius:"50%",marginRight:"1px"}}):(0,y.jsx)("div",{style:p,children:(0,y.jsx)("span",{style:{color:a?"white":"black"}})})}),(0,y.jsxs)(c.Z,{md:6,children:[(0,y.jsx)("h",{style:{color:"white"},children:"Instructor"}),(0,y.jsx)("br",{}),(0,y.jsx)("span",{style:{color:"white"},children:r.name})]})]}),(0,y.jsx)("br",{}),(0,y.jsxs)(n.Z,{children:[(0,y.jsx)(k.Z.Subtitle,{className:"mb-2 text-muted",style:{fontSize:"8px"},children:" ".concat(r.id)}),(0,y.jsx)("div",{children:r.description&&(0,y.jsxs)("p",{style:{fontSize:"14px",color:"white"},children:[" ",r.description," year(s)"]})}),(0,y.jsx)("div",{children:r.experience&&(0,y.jsxs)("p",{style:{fontSize:"12px",color:"white"},children:["Exp: ",r.experience," year(s)"]})}),(0,y.jsx)("div",{children:l.map(((e,r)=>(0,y.jsx)(C.Z,{pill:!0,bg:a?"light":"dark",style:{marginRight:"5px"},children:e.trim()},r)))}),(0,y.jsxs)("div",{children:[r.facebook&&(0,y.jsx)("a",{href:r.facebook,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,y.jsx)(h.Am9,{style:{marginRight:"1rem"}})}),r.instagram&&(0,y.jsx)("a",{href:r.instagram,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,y.jsx)(h.Zf_,{style:{marginRight:"1rem"}})}),r.twitter&&(0,y.jsx)("a",{href:r.twitter,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,y.jsx)(h.fWC,{style:{marginRight:"1rem"}})}),r.youtube&&(0,y.jsx)("a",{href:r.youtube,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,y.jsx)(h.V2E,{style:{marginRight:"1rem"}})})]})]})]})})};var I=t(61224),S=t(43896),w=t(83449),R=t(47283),Z=t(82851),O=t(16029);const v=function(){const e=(0,d.v9)(u.w),[r,t]=(0,o.useState)([]),{currentUser:a}=(0,I.a)(),[n,c]=o.useState("1");return(0,o.useEffect)((()=>{(async()=>{let e=a&&a.uid?a.uid:null;if(!e)return console.log("User not found"),void alert("User not found");const r=(0,b.hJ)(x.db,g.Ul.INSTRUCTORS),o=(0,b.IO)(r,(0,b.ar)("createdBy","==",e)),l=await(0,b.PL)(o),n=[];l.forEach((e=>{n.push({id:e.id,...e.data()})})),t(n)})()}),[]),(0,y.jsxs)("div",{style:{backgroundColor:e?"#202020":"",color:e?"white":"black"},children:[(0,y.jsx)(O.Z,{sx:{width:"100%",typography:"body1"},children:(0,y.jsxs)(w.ZP,{value:n,children:[(0,y.jsx)(O.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,y.jsxs)(R.Z,{style:{color:e?"white":"black"},onChange:(e,r)=>{c(r)},"aria-label":"lab API tabs example",children:[(0,y.jsx)(S.Z,{style:{color:e?"white":"black"},label:"Add Instructor",value:"1"}),(0,y.jsx)(S.Z,{style:{color:e?"white":"black"},label:"Update Instructor",value:"2"})]})}),(0,y.jsx)(Z.Z,{value:"1",children:(0,y.jsx)(m,{})}),(0,y.jsx)(Z.Z,{value:"2",children:(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(j,{instructors:r,setInstructors:t})})})]})}),(0,y.jsxs)(l.Z,{hidden:!0,defaultActiveKey:"0",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,y.jsxs)(l.Z.Item,{eventKey:"0",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,y.jsx)(l.Z.Header,{style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:"Add Instructor"}),(0,y.jsx)(l.Z.Body,{children:(0,y.jsx)(m,{})})]}),(0,y.jsxs)(l.Z.Item,{eventKey:"1",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,y.jsx)(l.Z.Header,{style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:"Update Instructor"}),(0,y.jsx)(l.Z.Body,{children:(0,y.jsx)(j,{instructors:r,setInstructors:t})})]})]}),(0,y.jsx)("br",{}),r.length>0&&(0,y.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:r.map((e=>(0,y.jsx)(E,{instructor:e},e.id)))})]})}},83708:(e,r,t)=>{t.d(r,{A3:()=>g,DM:()=>d,QP:()=>x,RY:()=>u,Rb:()=>f,Ul:()=>b,i0:()=>n,lt:()=>h,n$:()=>a,rM:()=>s,uM:()=>i,zq:()=>c});var o=t(56355),l=t(80184);const a={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},n={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},c={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},s={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},i={CLOUD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},u={[c.ALL]:d.GREEN,[c.BEGINNERS]:d.BLUE,[c.INTERMEDIATE]:d.YELLOW,[c.ADVANCED]:d.RED},h=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],b={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},f={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},g="https://nrityaserver-2b241e0a97e5.herokuapp.com/",x={AC:(0,l.jsx)(o.l51,{}),"Free Wifi":(0,l.jsx)(o._0,{}),"RO Water":(0,l.jsx)(o.EXY,{}),Toilet:(0,l.jsx)(o.Iev,{}),"Power Backup":(0,l.jsx)(o.eKD,{}),"Fire Extinguisher":(0,l.jsx)(o.Ybg,{}),"First Aid Kit":(0,l.jsx)(o.FZx,{}),"CCTV Camera":(0,l.jsx)(o.KoQ,{}),"Card Payment":(0,l.jsx)(o.ypE,{}),"Parking Space":(0,l.jsx)(o.mxg,{})}},18406:(e,r,t)=>{t.d(r,{C9:()=>n,P9:()=>c,fP:()=>a,ie:()=>s,qC:()=>l});var o=t(83708);async function l(e,r,t,l){const a=o.A3,n=localStorage.getItem("authToken");try{const o=await fetch(a+"crud/newEntity/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({data:e,collection_name:r,notify:t,metadata:l})});if(!o.ok)throw console.log("Error in postData:",o),new Error("HTTP error! status: ".concat(o.status));return o}catch(c){throw console.error("Error in postData:",c),c}}async function a(e,r,t){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const n=o.A3,c="crud/updateEntity/".concat(t),s=localStorage.getItem("authToken");try{const t=await fetch(n+c,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify({data:e,collection_name:r,notify:l,metadata:a})});if(!t.ok)throw console.log("Error in postData:",t),new Error("HTTP error! status: ".concat(t.status));return t}catch(i){throw console.error("Error in postData:",i),i}}const n=async e=>{const r="".concat(o.uM.CLOUD,"bookings/bookEntity/");try{const t=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e.userId,entityType:e.entityType,entityId:e.entityId,associatedStudioId:e.associatedStudioId,emailLearner:e.emailLearner,personsAllowed:e.personsAllowed,pricePerPerson:e.pricePerPerson})}),o=await t.json();return t.ok?(console.log("Booking successful:",o),o):(console.error("Booking failed:",o),o)}catch(t){return console.error("Error occurred while booking:",t),null}},c=e=>{if(console.log("MediaDisplay",e),!e)return null;const r=e.trim().match(/(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w\-]+)/);let t=null;return r&&(t=r[1]),console.log("MediaDisplay",t),t},s=e=>{const[r,t,o]=e.split("-");return"".concat((e=>{const r=e%10,t=1===r&&"11"!==e?"st":2===r&&"12"!==e?"nd":3===r&&"13"!==e?"rd":"th";return"".concat(e).concat(t)})(o)," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(t)-1],", ").concat(r)}}}]);
//# sourceMappingURL=5297.2ff8d0be.chunk.js.map