"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[5297],{25297:(e,r,o)=>{o.r(r),o.d(r,{default:()=>v});var t=o(72791),l=o(28949),a=o(13855),n=o(89743),s=o(2677),c=o(92592),i=o(43360),d=o(59434),u=o(60717),h=o(59135),b=o(12481),f=o(30276),x=o(83708),g=o(10159),p=o(18406),y=o(80184);const m=function(){const e=(0,d.v9)(u.w),[r,o]=(0,t.useState)(null),[l,b]=(0,t.useState)(null);return(0,y.jsxs)("div",{style:{backgroundColor:e?"#202020":"white",color:e?"white":"black"},children:[(0,y.jsx)("h1",{style:{backgroundColor:e?"#202020":"white",color:e?"white":"black",textTransform:"capitalize"},children:"Add Dance Teacher"}),(0,y.jsxs)(a.Z,{onSubmit:async e=>{var o;e.preventDefault(),console.log("Hi");let t=null;JSON.parse(localStorage.getItem("userInfo"))&&JSON.parse(localStorage.getItem("userInfo")).UserId&&(t=JSON.parse(localStorage.getItem("userInfo")).UserId),t||(console.log("Created by not found"),alert("User not found"));const a=null===(o=JSON.parse(localStorage.getItem("userInfo")))||void 0===o?void 0:o.email;console.log(t);try{const o={name:e.target.name.value,danceStyles:e.target.danceStyles.value,experience:e.target.experience.value,age:e.target.age.value,email:e.target.email.value,description:e.target.description.value,facebook:e.target.facebook.value,instagram:e.target.instagram.value,twitter:e.target.twitter.value,youtube:e.target.youtube.value,createdBy:t,ownedBy:null},n=a,s={entity_name:e.target.name.value},c=await(0,p.qC)(o,x.Ul.INSTRUCTORS,n,s);if(c.ok){const e=await c.json();if(console.log("Instructor added:",e,null===e||void 0===e?void 0:e.id),r&&l&&e.id){const r=await(async(e,r)=>{console.log("Inside handleProfilePictureChange");try{const o=x.Rb.INSTRUCTORIMAGES,t=`${o}/${r}`,l=(0,f.iH)(g.tO,t);console.log("handleProfilePictureChange ",o,t),(await(0,f.aF)(l)).items.forEach((async e=>{await(0,f.oq)(e)}));const a=(0,f.iH)(g.tO,`${t}/${e.name}`);return await(0,f.KV)(a,e),await(0,f.Jt)(a)}catch(o){throw console.error("Error handling profile picture:",o),o}})(l,e.id);console.log("Profile picture uploaded:",r)}}else console.error("Error adding instructor:",c.statusText);console.log("Instructor added successfully"),alert("Instructor added successfully")}catch(n){alert("Error",n)}},children:[(0,y.jsxs)(n.Z,{children:[(0,y.jsx)(s.Z,{md:4,children:(0,y.jsxs)(a.Z.Group,{controlId:"formFile",className:"mb-3",children:[(0,y.jsx)(a.Z.Label,{children:(0,y.jsx)(n.Z,{style:{textAlign:"center"},children:(0,y.jsx)("div",{style:{width:"22rem",height:"22rem",borderRadius:"50%",overflow:"hidden",margin:"auto",position:"relative",backgroundColor:e?"#d3d3d3":"black"},children:r&&(0,y.jsx)(c.Z,{src:r,alt:"Selected",style:{width:"100%",height:"100%",display:r?"block":"none"}})})})}),(0,y.jsx)(n.Z,{children:(0,y.jsx)("div",{style:{textAlign:"center"},children:(0,y.jsxs)("label",{htmlFor:"fileInput",style:{cursor:"pointer",display:"inline-block",padding:"8px 8px",backgroundColor:"#007bff",color:"white",borderRadius:"14px",textTransform:"capitalize",border:"1px solid #666"},children:[(0,y.jsx)("span",{style:{fontSize:"1rem"},children:"Image +"}),(0,y.jsx)("input",{type:"file",id:"fileInput",name:"picture",accept:"image/*",style:{display:"none"},onChange:e=>{const r=e.target.files[0];r&&(o(URL.createObjectURL(r)),b(r))}})]})})})]})}),(0,y.jsxs)(s.Z,{md:8,children:[(0,y.jsx)(a.Z.Label,{children:"Name"}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter name",name:"name",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Dance Styles"}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter dance styles",name:"danceStyles",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(a.Z.Label,{children:"Experience"}),(0,y.jsx)(a.Z.Control,{type:"number",placeholder:"Enter experience (in years)",name:"experience",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Age"}),(0,y.jsx)(a.Z.Control,{type:"number",placeholder:"Enter age",name:"age",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Email"}),(0,y.jsx)(a.Z.Control,{type:"email",placeholder:"Enter email Id of instructor ",name:"email",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]})]})]}),(0,y.jsxs)(n.Z,{children:[(0,y.jsx)(a.Z.Label,{children:"Description"}),(0,y.jsx)(a.Z.Control,{as:"textarea",rows:3,placeholder:"Enter description",name:"description",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"},required:!0})]}),(0,y.jsx)(a.Z.Label,{children:"Social Links"}),(0,y.jsxs)(n.Z,{children:[(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(h.Am9,{size:30,style:{color:e?"white":"black"}}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Facebook profile URL",name:"facebook",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(h.Zf_,{size:30,style:{color:e?"white":"black"}}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Instagram profile URL",name:"instagram",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(h.fWC,{size:30,style:{color:e?"white":"black"}}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Twitter profile URL",name:"twitter",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(h.V2E,{size:30,style:{color:e?"white":"black"}}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Youtube channel URL",name:"youtube",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]})]}),(0,y.jsx)(i.Z,{variant:"primary",type:"submit",style:{backgroundColor:e?"#892CDC":"black",color:"white"},children:"Submit"})]})]})};const j=function(e){let{instructors:r,setInstructors:o}=e;const l=(0,d.v9)(u.w),[p,m]=(0,t.useState)(null),[j,k]=(0,t.useState)(null),[C,E]=(0,t.useState)(null);(0,t.useEffect)((()=>{if(p){const r=p.id;if(r){const o=`${x.Rb.INSTRUCTORIMAGES}/${r}`,t=(0,f.iH)(g.tO,o);try{(0,f.aF)(t).then((e=>{if(e.items.length>0){const r=e.items[0];(0,f.Jt)(r).then((e=>{k(e),E(e)})).catch((e=>{console.error("Error fetching studio icon:",e)}))}else k(null),E(null)})).catch((e=>{console.error("Error listing files in the folder:",e)}))}catch(e){console.error("Error fetching studio icon:",e)}}}}),[p]);const I=async(e,r)=>{try{const o=`${x.Rb.INSTRUCTORIMAGES}/${r}`,t=(0,f.iH)(g.tO,o);(await(0,f.aF)(t)).items.forEach((async e=>{await(0,f.oq)(e)}));const l=(0,f.iH)(g.tO,`${o}/${e.name}`);await(0,f.KV)(l,e);return await(0,f.Jt)(l)}catch(o){throw console.error("Error handling profile picture:",o),o}};return(0,y.jsxs)("div",{children:[(0,y.jsx)("h1",{style:{color:l?"white":"black",textTransform:"capitalize"},children:"Update Dance Teacher"}),(0,y.jsxs)(a.Z,{onSubmit:async e=>{if(e.preventDefault(),p)try{const r={name:e.target.name.value,danceStyles:e.target.danceStyles.value,experience:e.target.experience.value,age:e.target.age.value,email:e.target.email.value,description:e.target.description.value,facebook:e.target.facebook.value,instagram:e.target.instagram.value,twitter:e.target.twitter.value,youtube:e.target.youtube.value};if(m((e=>({...e,...r}))),await(0,b.r7)((0,b.JU)(g.db,x.Ul.INSTRUCTORS,p.id),r),j&&C){await I(C,p.id)}alert("Instructor updated successfully")}catch(r){console.error("Error updating instructor",r),alert("Error updating instructor")}else alert("Please select an instructor to update.")},children:[(0,y.jsxs)(a.Z.Control,{as:"select",onChange:async e=>{e.preventDefault();const r=e.target.value,o=await(0,b.QT)((0,b.JU)(g.db,x.Ul.INSTRUCTORS,r));m({id:o.id,...o.data()})},style:{backgroundColor:l?"#333333":"",color:l?"white":"black"},children:[(0,y.jsx)("option",{style:{backgroundColor:l?"#333333":"",color:l?"white":"black"},children:"Select an instructor"}),r.map((e=>(0,y.jsx)("option",{value:e.id,children:`${e.name} - ${e.id}`},e.id)))]}),(0,y.jsxs)(n.Z,{children:[(0,y.jsx)(s.Z,{md:4,children:(0,y.jsxs)(a.Z.Group,{controlId:"formFile",className:"mb-3",children:[(0,y.jsx)(a.Z.Label,{children:(0,y.jsx)(n.Z,{children:(0,y.jsx)("div",{style:{width:"20rem",height:"20rem",borderRadius:"50%",overflow:"hidden",margin:"auto",position:"relative",backgroundColor:l?"#d3d3d3":"black"},children:j&&(0,y.jsx)(c.Z,{src:j,alt:"Selected",style:{width:"100%",height:"100%",display:j?"block":"none"}})})})}),(0,y.jsx)(n.Z,{children:(0,y.jsx)("div",{style:{textAlign:"center"},children:(0,y.jsxs)("label",{htmlFor:"fileInput",style:{cursor:"pointer"},children:[(0,y.jsx)("span",{style:{marginBottom:"2px",fontSize:"2rem"}}),(0,y.jsx)("input",{type:"file",id:"fileInput",name:"picture",accept:"image/*",style:{},onChange:e=>{const r=e.target.files[0];r&&(k(URL.createObjectURL(r)),E(r))}})]})})})]})}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(a.Z.Label,{children:"Name"}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter name",name:"name",defaultValue:p?p.name:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Dance Styles"}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter dance styles",name:"danceStyles",defaultValue:p?p.danceStyles:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Experience"}),(0,y.jsx)(a.Z.Control,{type:"number",placeholder:"Enter experience (in years)",name:"experience",defaultValue:p?p.experience:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Age"}),(0,y.jsx)(a.Z.Control,{type:"number",placeholder:"Enter age",name:"age",defaultValue:p?p.age:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Email"}),(0,y.jsx)(a.Z.Control,{type:"email",placeholder:"Enter email Id of instructor",name:"email",defaultValue:p?p.email:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}})]})]}),(0,y.jsx)(a.Z.Label,{children:"Description"}),(0,y.jsx)(a.Z.Control,{as:"textarea",rows:3,placeholder:"Enter description",name:"description",defaultValue:p?p.description:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}}),(0,y.jsx)(a.Z.Label,{children:"Social Links"}),(0,y.jsxs)(n.Z,{children:[(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(h.Am9,{size:30}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Facebook profile URL",name:"facebook",defaultValue:p?p.facebook:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}})]}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(h.Zf_,{size:30}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Instagram profile URL",name:"instagram",defaultValue:p?p.instagram:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}})]}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(h.fWC,{size:30}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Twitter profile URL",name:"twitter",defaultValue:p?p.twitter:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}})]}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(h.V2E,{size:30}),(0,y.jsx)(a.Z.Control,{type:"text",placeholder:"Enter Youtube channel URL",name:"youtube",defaultValue:p?p.youtube:"",style:{backgroundColor:l?"#333333":"",color:l?"white":"black"}})]})]}),(0,y.jsx)(i.Z,{variant:"primary",type:"submit",style:{backgroundColor:l?"#892CDC":"black",color:"white"},children:"Update Instructor"})]})]})};var k=o(95070),C=o(45736);const E=function(e){let{instructor:r,id:o}=e;const l=r.danceStyles?r.danceStyles.split(","):[],a=(0,d.v9)(u.w),[c,i]=(0,t.useState)(null),b={width:"18rem",margin:"5px",backgroundColor:a?"#333333":"black",color:a?"white":"black"},p={width:"60px",height:"60px",borderRadius:"50%",marginRight:"10px",backgroundColor:a?"#555":"#d3d3d3",display:"flex",justifyContent:"center",alignItems:"center"};return(0,t.useEffect)((()=>{(async()=>{if(r&&r.id){const o=`${x.Rb.INSTRUCTORIMAGES}/${r.id}`,t=(0,f.iH)(g.tO,o);try{(0,f.aF)(t).then((e=>{if(e.items.length>0){const r=e.items[0];(0,f.Jt)(r).then((e=>{i(e)})).catch((e=>{console.error("Error fetching studio icon:",e)}))}})).catch((e=>{console.error("Error listing files in the folder:",e)}))}catch(e){console.error("Error fetching image URL:",e)}}})()}),[]),(0,y.jsx)(k.Z,{style:b,children:(0,y.jsxs)(k.Z.Body,{children:[(0,y.jsxs)(n.Z,{children:[(0,y.jsx)(s.Z,{md:4,children:c?(0,y.jsx)(k.Z.Img,{variant:"top",src:c,alt:"Instructor",style:{width:"5rem",height:"5rem",borderRadius:"50%",marginRight:"1px"}}):(0,y.jsx)("div",{style:p,children:(0,y.jsx)("span",{style:{color:a?"white":"black"}})})}),(0,y.jsxs)(s.Z,{md:6,children:[(0,y.jsx)("h",{style:{color:"white"},children:"Instructor"}),(0,y.jsx)("br",{}),(0,y.jsx)("span",{style:{color:"white"},children:r.name})]})]}),(0,y.jsx)("br",{}),(0,y.jsxs)(n.Z,{children:[(0,y.jsx)(k.Z.Subtitle,{className:"mb-2 text-muted",style:{fontSize:"8px"},children:` ${r.id}`}),(0,y.jsx)("div",{children:r.description&&(0,y.jsxs)("p",{style:{fontSize:"14px",color:"white"},children:[" ",r.description," year(s)"]})}),(0,y.jsx)("div",{children:r.experience&&(0,y.jsxs)("p",{style:{fontSize:"12px",color:"white"},children:["Exp: ",r.experience," year(s)"]})}),(0,y.jsx)("div",{children:l.map(((e,r)=>(0,y.jsx)(C.Z,{pill:!0,bg:a?"light":"dark",style:{marginRight:"5px"},children:e.trim()},r)))}),(0,y.jsxs)("div",{children:[r.facebook&&(0,y.jsx)("a",{href:r.facebook,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,y.jsx)(h.Am9,{style:{marginRight:"1rem"}})}),r.instagram&&(0,y.jsx)("a",{href:r.instagram,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,y.jsx)(h.Zf_,{style:{marginRight:"1rem"}})}),r.twitter&&(0,y.jsx)("a",{href:r.twitter,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,y.jsx)(h.fWC,{style:{marginRight:"1rem"}})}),r.youtube&&(0,y.jsx)("a",{href:r.youtube,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,y.jsx)(h.V2E,{style:{marginRight:"1rem"}})})]})]})]})})};var I=o(61224),S=o(43896),w=o(83449),R=o(47283),Z=o(82851),O=o(697);const v=function(){const e=(0,d.v9)(u.w),[r,o]=(0,t.useState)([]),{currentUser:a}=(0,I.a)(),[n,s]=t.useState("1");return(0,t.useEffect)((()=>{(async()=>{let e=a&&a.uid?a.uid:null;if(!e)return console.log("User not found"),void alert("User not found");const r=(0,b.hJ)(g.db,x.Ul.INSTRUCTORS),t=(0,b.IO)(r,(0,b.ar)("createdBy","==",e)),l=await(0,b.PL)(t),n=[];l.forEach((e=>{n.push({id:e.id,...e.data()})})),o(n)})()}),[]),(0,y.jsxs)("div",{style:{backgroundColor:e?"#202020":"",color:e?"white":"black"},children:[(0,y.jsx)(O.Z,{sx:{width:"100%",typography:"body1"},children:(0,y.jsxs)(w.ZP,{value:n,children:[(0,y.jsx)(O.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,y.jsxs)(R.Z,{style:{color:e?"white":"black"},onChange:(e,r)=>{s(r)},"aria-label":"lab API tabs example",children:[(0,y.jsx)(S.Z,{style:{color:e?"white":"black"},label:"Add Instructor",value:"1"}),(0,y.jsx)(S.Z,{style:{color:e?"white":"black"},label:"Update Instructor",value:"2"})]})}),(0,y.jsx)(Z.Z,{value:"1",children:(0,y.jsx)(m,{})}),(0,y.jsx)(Z.Z,{value:"2",children:(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(j,{instructors:r,setInstructors:o})})})]})}),(0,y.jsxs)(l.Z,{hidden:!0,defaultActiveKey:"0",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,y.jsxs)(l.Z.Item,{eventKey:"0",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,y.jsx)(l.Z.Header,{style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:"Add Instructor"}),(0,y.jsx)(l.Z.Body,{children:(0,y.jsx)(m,{})})]}),(0,y.jsxs)(l.Z.Item,{eventKey:"1",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,y.jsx)(l.Z.Header,{style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:"Update Instructor"}),(0,y.jsx)(l.Z.Body,{children:(0,y.jsx)(j,{instructors:r,setInstructors:o})})]})]}),(0,y.jsx)("br",{}),r.length>0&&(0,y.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:r.map((e=>(0,y.jsx)(E,{instructor:e},e.id)))})]})}},83708:(e,r,o)=>{o.d(r,{A3:()=>x,DM:()=>d,QP:()=>g,RY:()=>u,Rb:()=>f,Ul:()=>b,i0:()=>n,lt:()=>h,n$:()=>a,rM:()=>c,uM:()=>i,zq:()=>s});var t=o(59135),l=o(80184);const a={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},n={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},s={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},c={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},i={PROD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},u={[s.ALL]:d.GREEN,[s.BEGINNERS]:d.BLUE,[s.INTERMEDIATE]:d.YELLOW,[s.ADVANCED]:d.RED},h=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],b={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},f={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},x="https://nrityaserver-2b241e0a97e5.herokuapp.com/",g={AC:(0,l.jsx)(t.l51,{}),"Free Wifi":(0,l.jsx)(t._0,{}),"RO Water":(0,l.jsx)(t.EXY,{}),Toilet:(0,l.jsx)(t.Iev,{}),"Power Backup":(0,l.jsx)(t.eKD,{}),"Fire Extinguisher":(0,l.jsx)(t.Ybg,{}),"First Aid Kit":(0,l.jsx)(t.FZx,{}),"CCTV Camera":(0,l.jsx)(t.KoQ,{}),"Card Payment":(0,l.jsx)(t.ypE,{}),"Parking Space":(0,l.jsx)(t.mxg,{})}},18406:(e,r,o)=>{o.d(r,{C9:()=>a,P9:()=>n,qC:()=>l});var t=o(83708);async function l(e,r,o,l){const a=t.A3,n=localStorage.getItem("authToken");try{const t=await fetch(a+"crud/newEntity/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({data:e,collection_name:r,notify:o,metadata:l})});if(!t.ok)throw console.log("Error in postData:",t),new Error(`HTTP error! status: ${t.status}`);return t}catch(s){throw console.error("Error in postData:",s),s}}const a=async e=>{const r=`${t.uM.PROD}bookings/bookEntity/`;try{const o=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e.userId,entityType:e.entityType,entityId:e.entityId,associatedStudioId:e.associatedStudioId,emailLearner:e.emailLearner,personsAllowed:e.personsAllowed,pricePerPerson:e.pricePerPerson})}),t=await o.json();return o.ok?(console.log("Booking successful:",t),t):(console.error("Booking failed:",t),t)}catch(o){return console.error("Error occurred while booking:",o),null}},n=e=>{if(console.log("MediaDisplay",e),!e)return null;const r=e.trim().match(/(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w\-]+)/);let o=null;return r&&(o=r[1]),console.log("MediaDisplay",o),o}}}]);
//# sourceMappingURL=5297.6b803c70.chunk.js.map