"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[5297],{25297:(e,r,o)=>{o.r(r),o.d(r,{default:()=>U});var t=o(1413),l=o(72791),a=o(28949),n=o(89743),c=o(2677),s=o(95313),i=o(92592),d=o(43360),u=o(59434),h=o(60717),p=o(56355),g=o(12481),x=o(30276),b=o(83708),m=o(10159),f=o(18406),y=o(51650),j=o(5712),k=o(76989),C=o(67107),E=o(44507),I=o(80184);const S=function(){const e=(0,u.v9)(h.w),[r,o]=(0,l.useState)(null),[a,g]=(0,l.useState)(null),[S,w]=(0,l.useState)([]),Z=y.W,R=(0,C.Z)({palette:{mode:e?"dark":"light"}});return(0,I.jsxs)("div",{style:{backgroundColor:e?"#202020":"white",color:e?"white":"black"},children:[(0,I.jsx)(n.Z,{children:(0,I.jsx)(c.Z,{md:4,children:(0,I.jsx)("h1",{style:{backgroundColor:e?"#202020":"white",color:e?"white":"black",textTransform:"capitalize",textAlign:"center"},children:"Add Dance Teacher"})})}),(0,I.jsxs)(s.Z,{className:"mt-4",onSubmit:async e=>{var o;e.preventDefault(),console.log("Hi");let t=null;JSON.parse(localStorage.getItem("userInfo"))&&JSON.parse(localStorage.getItem("userInfo")).UserId&&(t=JSON.parse(localStorage.getItem("userInfo")).UserId),t||(console.log("Created by not found"),alert("User not found"));const l=null===(o=JSON.parse(localStorage.getItem("userInfo")))||void 0===o?void 0:o.email;console.log(t);try{const o={name:e.target.name.value,danceStyles:(null===S||void 0===S?void 0:S.join(","))||"",experience:e.target.experience.value,age:e.target.age.value,email:e.target.email.value,description:e.target.description.value,facebook:e.target.facebook.value,instagram:e.target.instagram.value,twitter:e.target.twitter.value,youtube:e.target.youtube.value,createdBy:t,ownedBy:null},n=l,c={entity_name:e.target.name.value},s=await(0,f.qC)(o,b.Ul.INSTRUCTORS,n,c);if(s.ok){const e=await s.json();if(console.log("Instructor added:",e,null===e||void 0===e?void 0:e.id),r&&a&&e.id){const r=await(async(e,r)=>{console.log("Inside handleProfilePictureChange");try{const o=b.Rb.INSTRUCTORIMAGES,t="".concat(o,"/").concat(r),l=(0,x.iH)(m.tO,t);console.log("handleProfilePictureChange ",o,t),(await(0,x.aF)(l)).items.forEach((async e=>{await(0,x.oq)(e)}));const a=(0,x.iH)(m.tO,"".concat(t,"/").concat(e.name));return await(0,x.KV)(a,e),await(0,x.Jt)(a)}catch(o){throw console.error("Error handling profile picture:",o),o}})(a,e.id);console.log("Profile picture uploaded:",r)}}else console.error("Error adding instructor:",s.statusText);console.log("Instructor added successfully"),alert("Instructor added successfully")}catch(n){alert("Error",n)}},children:[(0,I.jsxs)(n.Z,{className:"gy-3",children:[(0,I.jsx)(c.Z,{md:4,className:"text-center",children:(0,I.jsxs)(s.Z.Group,{controlId:"formFile",children:[(0,I.jsx)(s.Z.Label,{children:(0,I.jsx)("div",{style:{width:"18rem",height:"18rem",borderRadius:"1rem",overflow:"hidden",margin:"auto",backgroundColor:e?"#d3d3d3":"#000",display:"flex",alignItems:"center",justifyContent:"center"},children:r?(0,I.jsx)(i.Z,{src:r,alt:"Selected",style:{width:"100%",height:"100%",display:r?"block":"none"}}):(0,I.jsx)("span",{style:{color:"white",fontSize:"1rem"},children:"No Image"})})}),(0,I.jsx)("div",{className:"mt-3",children:(0,I.jsxs)("label",{htmlFor:"fileInput",className:"btn btn-primary",style:{cursor:"pointer",borderRadius:"14px",textTransform:"capitalize"},children:["Image +",(0,I.jsx)("input",{type:"file",id:"fileInput",name:"picture",accept:"image/*",style:{display:"none"},onChange:e=>{const r=e.target.files[0];r&&(o(URL.createObjectURL(r)),g(r))}})]})})]})}),(0,I.jsxs)(c.Z,{md:8,children:[(0,I.jsxs)(s.Z.Group,{children:[(0,I.jsx)(s.Z.Label,{children:"Name"}),(0,I.jsx)(s.Z.Control,{type:"text",placeholder:"Enter name",name:"name",style:{backgroundColor:e?"#333":"",color:e?"white":"black"}})]}),(0,I.jsxs)(n.Z,{className:"mt-3",children:[(0,I.jsx)(c.Z,{md:6,children:(0,I.jsxs)(s.Z.Group,{children:[(0,I.jsx)(s.Z.Label,{children:"Age"}),(0,I.jsx)(s.Z.Control,{type:"number",placeholder:"Enter age",name:"age",style:{backgroundColor:e?"#333":"",color:e?"white":"black"}})]})}),(0,I.jsx)(c.Z,{md:6,children:(0,I.jsxs)(s.Z.Group,{children:[(0,I.jsx)(s.Z.Label,{children:"Experience (Years)"}),(0,I.jsx)(s.Z.Control,{type:"number",placeholder:"Enter experience",name:"experience",style:{backgroundColor:e?"#333":"",color:e?"white":"black"}})]})})]}),(0,I.jsxs)(s.Z.Group,{className:"mt-3",children:[(0,I.jsx)(s.Z.Label,{children:"Dance Styles"}),(0,I.jsx)(E.Z,{theme:R,children:(0,I.jsx)(j.Z,{style:{backgroundColor:e?"#333333":"",color:e?"white":"black"},multiple:!0,options:Z,value:S,onChange:(e,r)=>{w(r)},renderInput:r=>(0,I.jsx)(k.Z,(0,t.Z)((0,t.Z)({},r),{},{variant:"standard",placeholder:"Select Dance Styles",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}}))})})]}),(0,I.jsxs)(s.Z.Group,{className:"mt-3",children:[(0,I.jsx)(s.Z.Label,{children:"Email"}),(0,I.jsx)(s.Z.Control,{type:"email",placeholder:"Enter email ID of instructor",name:"email",style:{backgroundColor:e?"#333":"",color:e?"white":"black"}})]})]})]}),(0,I.jsxs)(n.Z,{children:[(0,I.jsx)(s.Z.Label,{children:"Description"}),(0,I.jsx)(s.Z.Control,{as:"textarea",rows:3,placeholder:"Enter description",name:"description",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"},required:!0})]}),(0,I.jsx)(s.Z.Label,{children:"Social Links"}),(0,I.jsxs)(n.Z,{children:[(0,I.jsxs)(c.Z,{children:[(0,I.jsx)(p.Am9,{size:30,style:{color:e?"white":"black"}}),(0,I.jsx)(s.Z.Control,{type:"text",placeholder:"Enter Facebook profile URL",name:"facebook",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,I.jsxs)(c.Z,{children:[(0,I.jsx)(p.Zf_,{size:30,style:{color:e?"white":"black"}}),(0,I.jsx)(s.Z.Control,{type:"text",placeholder:"Enter Instagram profile URL",name:"instagram",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,I.jsxs)(c.Z,{children:[(0,I.jsx)(p.fWC,{size:30,style:{color:e?"white":"black"}}),(0,I.jsx)(s.Z.Control,{type:"text",placeholder:"Enter Twitter profile URL",name:"twitter",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]}),(0,I.jsxs)(c.Z,{children:[(0,I.jsx)(p.V2E,{size:30,style:{color:e?"white":"black"}}),(0,I.jsx)(s.Z.Control,{type:"text",placeholder:"Enter Youtube channel URL",name:"youtube",style:{backgroundColor:e?"#333333":"",color:e?"white":"black"}})]})]}),(0,I.jsx)(d.Z,{variant:"primary",type:"submit",style:{backgroundColor:e?"#892CDC":"black",color:"white"},children:"Submit"})]})]})};const w=function(e){let{instructors:r,setInstructors:o}=e;const a=(0,u.v9)(h.w),[S,w]=(0,l.useState)(null),[Z,R]=(0,l.useState)(null),[v,O]=(0,l.useState)(null),[N,T]=(0,l.useState)([]),L=y.W,A=(0,C.Z)({palette:{mode:a?"dark":"light"}});(0,l.useEffect)((()=>{if(S){const r=S.id;if(r){const o="".concat(b.Rb.INSTRUCTORIMAGES,"/").concat(r),t=(0,x.iH)(m.tO,o);try{(0,x.aF)(t).then((e=>{if(e.items.length>0){const r=e.items[0];(0,x.Jt)(r).then((e=>{R(e),O(e)})).catch((e=>{console.error("Error fetching studio icon:",e)}))}else R(null),O(null)})).catch((e=>{console.error("Error listing files in the folder:",e)}))}catch(e){console.error("Error fetching studio icon:",e)}}}}),[S]);const D=async(e,r)=>{try{const o=b.Rb.INSTRUCTORIMAGES,t="".concat(o,"/").concat(r),l=(0,x.iH)(m.tO,t);(await(0,x.aF)(l)).items.forEach((async e=>{await(0,x.oq)(e)}));const a=(0,x.iH)(m.tO,"".concat(t,"/").concat(e.name));await(0,x.KV)(a,e);return await(0,x.Jt)(a)}catch(o){throw console.error("Error handling profile picture:",o),o}};return(0,I.jsxs)("div",{children:[(0,I.jsx)("h1",{style:{color:a?"white":"black",textTransform:"capitalize"},children:"Update Dance Teacher"}),(0,I.jsxs)(s.Z,{className:"mt-4",onSubmit:async e=>{if(e.preventDefault(),S)try{var r;const o={name:e.target.name.value,danceStyles:(null===N||void 0===N||null===(r=N.join)||void 0===r?void 0:r.call(N,","))||"",experience:e.target.experience.value,age:e.target.age.value,email:e.target.email.value,description:e.target.description.value,facebook:e.target.facebook.value,instagram:e.target.instagram.value,twitter:e.target.twitter.value,youtube:e.target.youtube.value},l=await(0,f.fP)(o,b.Ul.INSTRUCTORS,S.id);if(l.ok){if(w((e=>(0,t.Z)((0,t.Z)({},e),o))),Z&&v){await D(v,S.id)}alert("Instructor updated successfully")}else console.error("Error adding instructor:",l.statusText)}catch(o){console.error("Error updating instructor",o),alert("Error updating instructor")}else alert("Please select an instructor to update.")},children:[(0,I.jsxs)(s.Z.Control,{as:"select",onChange:async e=>{var r,o;e.preventDefault();const l=e.target.value,a=await(0,g.QT)((0,g.JU)(m.db,b.Ul.INSTRUCTORS,l)),n=a.data();w((0,t.Z)({id:a.id},n)),T((null===n||void 0===n||null===(r=n.danceStyles)||void 0===r||null===(o=r.split)||void 0===o?void 0:o.call(r,","))||[])},style:{backgroundColor:a?"#333333":"",color:a?"white":"black",height:"auto",marginBottom:"1rem"},children:[(0,I.jsx)("option",{style:{backgroundColor:a?"#333333":"",color:a?"white":"black"},children:"Select an instructor"}),r.map((e=>(0,I.jsx)("option",{value:e.id,children:"".concat(e.name," - ").concat(e.id)},e.id)))]}),(0,I.jsxs)(n.Z,{className:"gy-3",children:[(0,I.jsx)(c.Z,{md:4,className:"text-center",children:(0,I.jsxs)(s.Z.Group,{controlId:"formFile",className:"mb-3",children:[(0,I.jsx)(s.Z.Label,{children:(0,I.jsx)(n.Z,{children:(0,I.jsx)("div",{style:{width:"18rem",height:"18rem",borderRadius:"1rem",overflow:"hidden",margin:"auto",backgroundColor:a?"#d3d3d3":"#000",display:"flex",alignItems:"center",justifyContent:"center"},children:Z&&(0,I.jsx)(i.Z,{src:Z,alt:"Selected",style:{width:"100%",height:"100%",display:Z?"block":"none"}})})})}),(0,I.jsx)("div",{className:"mt-3",children:(0,I.jsxs)("label",{htmlFor:"fileInput",className:"btn btn-primary",style:{cursor:"pointer",borderRadius:"14px",textTransform:"capitalize"},children:["Image +",(0,I.jsx)("input",{type:"file",id:"fileInput",name:"picture",accept:"image/*",style:{display:"none"},onChange:e=>{const r=e.target.files[0];r&&(R(URL.createObjectURL(r)),O(r))}})]})})]})}),(0,I.jsxs)(c.Z,{md:8,children:[(0,I.jsxs)(s.Z.Group,{children:[(0,I.jsx)(s.Z.Label,{children:"Name"}),(0,I.jsx)(s.Z.Control,{type:"text",placeholder:"Enter name",name:"name",defaultValue:S?S.name:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]}),(0,I.jsxs)(n.Z,{className:"mt-3",children:[(0,I.jsx)(c.Z,{md:6,children:(0,I.jsxs)(s.Z.Group,{children:[(0,I.jsx)(s.Z.Label,{children:"Age"}),(0,I.jsx)(s.Z.Control,{type:"number",placeholder:"Enter age",name:"age",defaultValue:S?S.age:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]})}),(0,I.jsx)(c.Z,{md:6,children:(0,I.jsxs)(s.Z.Group,{children:[(0,I.jsx)(s.Z.Label,{children:"Experience"}),(0,I.jsx)(s.Z.Control,{type:"number",placeholder:"Enter experience (in years)",name:"experience",defaultValue:S?S.experience:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]})})]}),(0,I.jsxs)(s.Z.Group,{className:"mt-3",children:[(0,I.jsx)(s.Z.Label,{children:"Dance Styles"}),(0,I.jsx)(E.Z,{theme:A,children:(0,I.jsx)(j.Z,{style:{backgroundColor:a?"#333333":"",color:a?"white":"black"},multiple:!0,options:L,value:N,onChange:(e,r)=>{T(r)},renderInput:e=>(0,I.jsx)(k.Z,(0,t.Z)((0,t.Z)({},e),{},{variant:"standard",placeholder:"Select Dance Styles",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}}))})})]}),(0,I.jsxs)(s.Z.Group,{className:"mt-3",children:[(0,I.jsx)(s.Z.Label,{children:"Email"}),(0,I.jsx)(s.Z.Control,{type:"email",placeholder:"Enter email Id of instructor",name:"email",defaultValue:S?S.email:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]})]})]}),(0,I.jsx)(s.Z.Label,{children:"Description"}),(0,I.jsx)(s.Z.Control,{as:"textarea",rows:3,placeholder:"Enter description",name:"description",defaultValue:S?S.description:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}}),(0,I.jsx)(s.Z.Label,{children:"Social Links"}),(0,I.jsxs)(n.Z,{children:[(0,I.jsxs)(c.Z,{children:[(0,I.jsx)(p.Am9,{size:30}),(0,I.jsx)(s.Z.Control,{type:"text",placeholder:"Enter Facebook profile URL",name:"facebook",defaultValue:S?S.facebook:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]}),(0,I.jsxs)(c.Z,{children:[(0,I.jsx)(p.Zf_,{size:30}),(0,I.jsx)(s.Z.Control,{type:"text",placeholder:"Enter Instagram profile URL",name:"instagram",defaultValue:S?S.instagram:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]}),(0,I.jsxs)(c.Z,{children:[(0,I.jsx)(p.fWC,{size:30}),(0,I.jsx)(s.Z.Control,{type:"text",placeholder:"Enter Twitter profile URL",name:"twitter",defaultValue:S?S.twitter:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]}),(0,I.jsxs)(c.Z,{children:[(0,I.jsx)(p.V2E,{size:30}),(0,I.jsx)(s.Z.Control,{type:"text",placeholder:"Enter Youtube channel URL",name:"youtube",defaultValue:S?S.youtube:"",style:{backgroundColor:a?"#333333":"",color:a?"white":"black"}})]})]}),(0,I.jsx)(d.Z,{variant:"primary",type:"submit",style:{backgroundColor:a?"#892CDC":"black",color:"white"},children:"Update Instructor"})]})]})};var Z=o(95070),R=o(45736);const v=function(e){let{instructor:r,id:o}=e;const t=r.danceStyles?r.danceStyles.split(","):[],a=(0,u.v9)(h.w),[s,i]=(0,l.useState)(null),d={width:"18rem",margin:"5px",backgroundColor:a?"#333333":"black",color:a?"white":"black"},g={width:"60px",height:"60px",borderRadius:"50%",marginRight:"10px",backgroundColor:a?"#555":"#d3d3d3",display:"flex",justifyContent:"center",alignItems:"center"};return(0,l.useEffect)((()=>{(async()=>{if(r&&r.id){const o="".concat(b.Rb.INSTRUCTORIMAGES,"/").concat(r.id),t=(0,x.iH)(m.tO,o);try{(0,x.aF)(t).then((e=>{if(e.items.length>0){const r=e.items[0];(0,x.Jt)(r).then((e=>{i(e)})).catch((e=>{console.error("Error fetching studio icon:",e)}))}})).catch((e=>{console.error("Error listing files in the folder:",e)}))}catch(e){console.error("Error fetching image URL:",e)}}})()}),[]),(0,I.jsx)(Z.Z,{style:d,children:(0,I.jsxs)(Z.Z.Body,{children:[(0,I.jsxs)(n.Z,{children:[(0,I.jsx)(c.Z,{md:4,children:s?(0,I.jsx)(Z.Z.Img,{variant:"top",src:s,alt:"Instructor",style:{width:"5rem",height:"5rem",borderRadius:"50%",marginRight:"1px"}}):(0,I.jsx)("div",{style:g,children:(0,I.jsx)("span",{style:{color:a?"white":"black"}})})}),(0,I.jsxs)(c.Z,{md:6,children:[(0,I.jsx)("h",{style:{color:"white"},children:"Instructor"}),(0,I.jsx)("br",{}),(0,I.jsx)("span",{style:{color:"white"},children:r.name})]})]}),(0,I.jsx)("br",{}),(0,I.jsxs)(n.Z,{children:[(0,I.jsx)(Z.Z.Subtitle,{className:"mb-2 text-muted",style:{fontSize:"8px"},children:" ".concat(r.id)}),(0,I.jsx)("div",{children:r.description&&(0,I.jsxs)("p",{style:{fontSize:"14px",color:"white"},children:[" ",r.description," year(s)"]})}),(0,I.jsx)("div",{children:r.experience&&(0,I.jsxs)("p",{style:{fontSize:"12px",color:"white"},children:["Exp: ",r.experience," year(s)"]})}),(0,I.jsx)("div",{children:t.map(((e,r)=>(0,I.jsx)(R.Z,{pill:!0,bg:a?"light":"dark",style:{marginRight:"5px"},children:e.trim()},r)))}),(0,I.jsxs)("div",{children:[r.facebook&&(0,I.jsx)("a",{href:r.facebook,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,I.jsx)(p.Am9,{style:{marginRight:"1rem"}})}),r.instagram&&(0,I.jsx)("a",{href:r.instagram,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,I.jsx)(p.Zf_,{style:{marginRight:"1rem"}})}),r.twitter&&(0,I.jsx)("a",{href:r.twitter,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,I.jsx)(p.fWC,{style:{marginRight:"1rem"}})}),r.youtube&&(0,I.jsx)("a",{href:r.youtube,target:"_blank",rel:"noopener noreferrer",style:{color:a?"white":"black"},children:(0,I.jsx)(p.V2E,{style:{marginRight:"1rem"}})})]})]})]})})};var O=o(61224),N=o(43896),T=o(83449),L=o(47283),A=o(82851),D=o(16029);const U=function(){const e=(0,u.v9)(h.w),[r,o]=(0,l.useState)([]),{currentUser:n}=(0,O.a)(),[c,s]=l.useState("1");return(0,l.useEffect)((()=>{(async()=>{let e=n&&n.uid?n.uid:null;if(!e)return console.log("User not found"),void alert("User not found");const r=(0,g.hJ)(m.db,b.Ul.INSTRUCTORS),l=(0,g.IO)(r,(0,g.ar)("createdBy","==",e)),a=await(0,g.PL)(l),c=[];a.forEach((e=>{c.push((0,t.Z)({id:e.id},e.data()))})),o(c)})()}),[]),(0,I.jsxs)("div",{style:{backgroundColor:e?"#202020":"",color:e?"white":"black"},children:[(0,I.jsx)(D.Z,{sx:{width:"100%",typography:"body1"},children:(0,I.jsxs)(T.ZP,{value:c,children:[(0,I.jsx)(D.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,I.jsxs)(L.Z,{style:{color:e?"white":"black"},onChange:(e,r)=>{s(r)},"aria-label":"lab API tabs example",children:[(0,I.jsx)(N.Z,{style:{color:e?"white":"black"},label:"Add Instructor",value:"1"}),(0,I.jsx)(N.Z,{style:{color:e?"white":"black"},label:"Update Instructor",value:"2"})]})}),(0,I.jsx)(A.Z,{value:"1",children:(0,I.jsx)(S,{})}),(0,I.jsx)(A.Z,{value:"2",children:(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(w,{instructors:r,setInstructors:o})})})]})}),(0,I.jsxs)(a.Z,{hidden:!0,defaultActiveKey:"0",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,I.jsxs)(a.Z.Item,{eventKey:"0",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,I.jsx)(a.Z.Header,{style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:"Add Instructor"}),(0,I.jsx)(a.Z.Body,{children:(0,I.jsx)(S,{})})]}),(0,I.jsxs)(a.Z.Item,{eventKey:"1",style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:[(0,I.jsx)(a.Z.Header,{style:{backgroundColor:e?"#181818":"",color:e?"white":"black"},children:"Update Instructor"}),(0,I.jsx)(a.Z.Body,{children:(0,I.jsx)(w,{instructors:r,setInstructors:o})})]})]}),(0,I.jsx)("br",{}),r.length>0&&(0,I.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:r.map((e=>(0,I.jsx)(v,{instructor:e},e.id)))})]})}},83708:(e,r,o)=>{o.d(r,{A3:()=>x,DM:()=>d,QP:()=>b,RY:()=>u,Rb:()=>g,Ul:()=>p,i0:()=>n,lt:()=>h,n$:()=>a,rM:()=>s,uM:()=>i,zq:()=>c});var t=o(56355),l=o(80184);const a={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},n={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},c={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},s={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},i={CLOUD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},d={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},u={[c.ALL]:d.GREEN,[c.BEGINNERS]:d.BLUE,[c.INTERMEDIATE]:d.YELLOW,[c.ADVANCED]:d.RED},h=[d.PURPLE,d.ORANGE,d.TEAL,d.LIME],p={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},g={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},x="https://nrityaserver-2b241e0a97e5.herokuapp.com/",b={AC:(0,l.jsx)(t.l51,{}),"Free Wifi":(0,l.jsx)(t._0,{}),"RO Water":(0,l.jsx)(t.EXY,{}),Toilet:(0,l.jsx)(t.Iev,{}),"Power Backup":(0,l.jsx)(t.eKD,{}),"Fire Extinguisher":(0,l.jsx)(t.Ybg,{}),"First Aid Kit":(0,l.jsx)(t.FZx,{}),"CCTV Camera":(0,l.jsx)(t.KoQ,{}),"Card Payment":(0,l.jsx)(t.ypE,{}),"Parking Space":(0,l.jsx)(t.mxg,{})}},18406:(e,r,o)=>{o.d(r,{C9:()=>n,P9:()=>c,fP:()=>a,ie:()=>s,qC:()=>l});var t=o(83708);async function l(e,r,o,l){const a=t.A3,n=localStorage.getItem("authToken");try{const t=await fetch(a+"crud/newEntity/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({data:e,collection_name:r,notify:o,metadata:l})});if(!t.ok)throw console.log("Error in postData:",t),new Error("HTTP error! status: ".concat(t.status));return t}catch(c){throw console.error("Error in postData:",c),c}}async function a(e,r,o){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const n=t.A3,c="crud/updateEntity/".concat(o),s=localStorage.getItem("authToken");try{const o=await fetch(n+c,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify({data:e,collection_name:r,notify:l,metadata:a})});if(!o.ok)throw console.log("Error in postData:",o),new Error("HTTP error! status: ".concat(o.status));return o}catch(i){throw console.error("Error in postData:",i),i}}const n=async e=>{const r="".concat(t.uM.CLOUD,"bookings/bookEntity/");try{const o=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e.userId,entityType:e.entityType,entityId:e.entityId,associatedStudioId:e.associatedStudioId,emailLearner:e.emailLearner,personsAllowed:e.personsAllowed,pricePerPerson:e.pricePerPerson})}),t=await o.json();return o.ok?(console.log("Booking successful:",t),t):(console.error("Booking failed:",t),t)}catch(o){return console.error("Error occurred while booking:",o),null}},c=e=>{if(console.log("MediaDisplay",e),!e)return null;const r=e.trim().match(/(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w\-]+)/);let o=null;return r&&(o=r[1]),console.log("MediaDisplay",o),o},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const[r,o,t]=e.split("-");return"".concat((e=>{const r=e%10,o=1===r&&"11"!==e?"st":2===r&&"12"!==e?"nd":3===r&&"13"!==e?"rd":"th";return"".concat(e).concat(o)})(t)," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(o)-1],", ").concat(r)}},51650:e=>{e.exports=JSON.parse('{"W":["Kuchipudi","Swing","Irish Dance","Folk Dance","Street Dance","Breaking","Voguing","House Dance","Bachata","Ballet","Ballroom","Belly Dance","Bhangra","Bharatanatyam","Bihu","Bollywood","Bollyhop","Butoh","Capoeira","Chhau","Clogging","Contemporary","Dandiya Raas","Flamenco","Garba","Giddha","Heels","Hip Hop","Irish Step Dance","Jazz","Jive","Kathak","Kathakali","Kizomba","Krumping","Lavani","Line Dance","Locking","Lyrical Hip-Hop","Manipuri","Modern Dance","Mohiniyattam","Odissi","Polynesian Dance","Popping","Rouf","Salsa","Sattriya","Tango","Tap Dance","Vogue","Waacking","Whacking","Zumba"]}')}}]);
//# sourceMappingURL=5297.215b4f53.chunk.js.map