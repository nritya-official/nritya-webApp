(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[5618],{12716:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x});var r=a(1413),o=a(72791),n=a(84654),s=a(16029),l=a(5574),i=a(39157),c=a(94294),d=a(79253),h=a(23853),u=a(16856),m=a(21204),g=a(80184);const x=e=>{let{dataList:t,imgOnly:a=!1}=e;const x=Array.isArray(t)?t:Object.values(t),[p,b]=(0,o.useState)(!1),[f,y]=(0,o.useState)(null),[j,Z]=(0,o.useState)(!1),[v,S]=(0,o.useState)(!1),w=(0,o.useRef)(null),C=()=>{const e=w.current;e&&(Z(e.scrollLeft>0),S(e.scrollLeft<e.scrollWidth-e.clientWidth))},k=e=>{const t=w.current;"left"===e?t.scrollBy({left:-330,behavior:"smooth"}):"right"===e&&t.scrollBy({left:330,behavior:"smooth"})},E=()=>{b(!1),y(null)},N={transform:"scale(1.01)"};return(0,o.useEffect)((()=>{const e=w.current;if(e)return C(),e.addEventListener("scroll",C),()=>e.removeEventListener("scroll",C)}),[]),(0,g.jsxs)(s.Z,{sx:{display:"flex",p:0,m:0,position:"relative"},children:[j&&(0,g.jsx)("button",{className:"scroll-button left",onClick:()=>k("left"),children:(0,g.jsx)(u.lrP,{})}),(0,g.jsxs)("div",{ref:w,className:"horizontal-scroll-wrapper no-important scroll-wrapper",children:[x.map(((e,t)=>a?(0,g.jsx)("a",{className:"no-important",onClick:()=>{return t=e,console.log(t),y(t),void b(!0);var t},children:(0,g.jsx)(n.Z,{style:{marginRight:"0.5rem"},component:"li",sx:{height:300,width:534,"&:hover":(0,r.Z)({},N)},children:(0,g.jsxs)(d.Z,{children:[(0,g.jsx)("img",{src:e,loading:"lazy",alt:"Studio image"}),(0,g.jsx)("div",{className:"gallery-image-overlay",children:(0,g.jsx)(h.SJS,{size:50,color:"white",className:""})})]})},t)},t):(0,g.jsx)("a",{href:"#/studio/".concat(e.id),children:(0,g.jsx)(m.Z,{data:e,img_src:e.iconUrl},e.id)},t))),(0,g.jsx)(l.Z,{open:p,onClose:E,children:f&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Z,{sx:{padding:0},children:(0,g.jsx)("img",{src:f,alt:"Image",style:{maxWidth:"100%",height:"auto"}})}),(0,g.jsx)(c.Z,{sx:{"&:hover":{backgroundColor:"#735EAB",color:"white"}},onClick:E,children:"Close"})]})})]}),v&&(0,g.jsx)("button",{className:"scroll-button right",onClick:()=>k("right"),children:(0,g.jsx)(u.KEG,{})})]})}},41893:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>O});var r=a(1413),o=a(72791),n=a(47022),s=a(95313),l=a(43360),i=a(59434),c=a(60717),d=a(68449),h=a(83708),u=a(67107),m=a(44507),g=a(35527),x=a(20890),p=a(63875),b=a(74512),f=a(15825),y=a(66934),j=a(56856),Z=a(23285),v=a(80184);const S=(0,y.ZP)(j.Z)((e=>{let{theme:t}=e;return{["&.".concat(Z.Z.alternativeLabel)]:{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"},["&.".concat(Z.Z.active)]:{["& .".concat(Z.Z.line)]:{borderColor:"green"}},["&.".concat(Z.Z.completed)]:{["& .".concat(Z.Z.line)]:{borderColor:"green"}},["& .".concat(Z.Z.line)]:{borderColor:"dark"===t.palette.mode?t.palette.grey[800]:"#eaeaf0",borderTopWidth:3,borderRadius:1}}})),w=[h.n$.SUBMITTED,h.n$.UNDER_REVIEW,h.n$.REVIEWED,h.n$.VERIFIED],C={[h.n$.SUBMITTED]:0,[h.n$.UNDER_REVIEW]:1,[h.n$.REVIEWED]:2,[h.n$.VERIFIED]:3,[h.n$.VERIFICATION_FAILED]:3},k=e=>{let{kycId:t,status:a}=e;const r=(0,i.v9)(c.w),[n,s]=(0,o.useState)({});console.log(a);const l=(0,u.Z)({palette:{mode:r?"dark":"light",primary:{main:r?"#90caf9":"#1976d2"}}});return(0,o.useEffect)((()=>{(async()=>{try{const e=await(0,d.Ld)(h.Ul.USER_KYC,t);s(e)}catch(e){console.error("Error fetching KYC data for KYC ID ".concat(t,":"),e)}})()}),[t]),(0,v.jsx)(m.Z,{theme:l,children:(0,v.jsxs)(g.Z,{sx:{textAlign:"center",marginBottom:"1rem"},elevation:2,children:[(0,v.jsxs)(x.Z,{variant:"h5",component:"p",children:["Application Status: ",a]}),(0,v.jsx)("br",{}),(0,v.jsx)(p.Z,{activeStep:C[a],alternativeLabel:!0,connector:(0,v.jsx)(S,{}),children:w.map(((e,t)=>(0,v.jsx)(b.Z,{children:(0,v.jsx)(f.Z,{error:e===h.n$.VERIFIED&&a===h.n$.VERIFICATION_FAILED,children:e===h.n$.VERIFIED&&a===h.n$.VERIFICATION_FAILED?"Failed Verification":e})},t)))}),(0,v.jsx)("br",{})]})})};var E=a(89704),N=a.n(E);const I=(e,t)=>{let a="";switch(console.log(e,t),e){case"phone_number":/^\d{10}$/.test(t)||(a="Phone number must be exactly 10 digits.");break;case"zip_pin_code":/^\d{6}$/.test(t)||(a="ZIP/Pin code must be exactly 6 digits.");break;case"aadhar":/^\d{12}$/.test(t)||(a="Aadhar number must be exactly 12 digits.");break;case"gstin":/^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[1-9A-Za-z]{1}[Zz]{1}[0-9A-Za-z]{1}$/.test(t)||(a="GSTIN must be a valid format (e.g., 22ABCDE0000A1Z5).")}return console.log(a),a};var _=a(18406),R=a(57482),P=a(82873),A=a(65202);const D=new Map([["first_name","First Name"],["middle_last_name","Middle & Last Name"],["phone_number","Phone Number"],["street_address","Street Address"],["city","City"],["state_province","State"],["state","State"],["zip_pin_code","PIN Code/ZIP"],["aadhar","Aadhar Number"],["gstin","GST Number"],["comments","Remark(s)"]]),U=[["first_name"],["middle_last_name"],["phone_number"],["street_address"],["city"],["state_province","state"],["zip_pin_code"]],T=P.c,B=A.$;const O=function(){var e;const[t,a]=(0,o.useState)({first_name:"",middle_last_name:"",phone_number:"",street_address:"",city:"",state_province:"",zip_pin_code:"",country:"India",aadhar:"",gstin:"",comments:"",status:h.n$.SUBMITTED,tncAgreed:!1,hash:""}),[u,m]=(0,o.useState)(null),g=(0,i.v9)(c.w),[p,b]=(0,o.useState)({}),f=JSON.parse(localStorage.getItem("userInfo")).UserId,y="".concat(f,"_Kyc"),[j,Z]=(0,o.useState)(null),[S,w]=(0,o.useState)(null),[C,E]=(0,o.useState)([]),[P,A]=(0,o.useState)([]),[O,L]=(0,o.useState)(!1),[V,F]=(0,o.useState)(-1),[G,z]=(0,o.useState)(-1),[W,K]=(0,o.useState)(!1),M=JSON.parse(localStorage.getItem("userInfo")).email,$=null===(e=JSON.parse(localStorage.getItem("userInfo")))||void 0===e?void 0:e.displayName,Y=e=>{const{name:t,value:o}=e.target,n=I(t,o);b((e=>(0,r.Z)((0,r.Z)({},e),{},{[t]:n}))),a((e=>(0,r.Z)((0,r.Z)({},e),{},{[t]:o})))};(0,o.useEffect)((()=>{(async()=>{const e=await(0,d.Ld)(h.Ul.USER_KYC,y);e?(m(e),a((0,r.Z)((0,r.Z)({},e),{},{status:e.status||h.n$.SUBMITTED}))):m(null)})(),(async()=>{const e="".concat(h.Rb.CREATORS_KYC_DOCUMENTS,"/").concat(f);try{const[t,a]=await Promise.all([(0,d.XG)("".concat(e,"/Aadhar/")),(0,d.XG)("".concat(e,"/Gst/"))]);t&&t.length>0?Z(t):(Z(null),console.warn("No Aadhar documents found.")),a&&a.length>0?w(a):(w(null),console.warn("No GST documents found."))}catch(t){console.error("Error fetching KYC documents:",t)}})()}),[y]);const q=["status","hash","country","tncAgreed","comments","UserId","gstin","aadhar"];return(0,v.jsxs)("div",{style:{color:g?"white":"black"},children:[(0,v.jsxs)(n.Z,{className:"glassmorphic-container",style:{margin:"auto",border:g?"1px solid white":"1px solid black",borderRadius:"5px",padding:"20px"},children:[(0,v.jsxs)(s.Z,{onSubmit:async e=>{e.preventDefault(),K(!0);try{const a=Object.keys(t).filter((e=>!["hash","status","country","comments","UserId"].includes(e)));let o=!0,n=[],s=0;if(a.forEach((e=>{const a=I(e,t[e]);a&&(o=!1,s+=1,n.push("".concat(s,": ").concat(a)),b((t=>(0,r.Z)((0,r.Z)({},t),{},{[e]:a}))))})),!o)return void alert("Please correct the following errors before submitting:\n\n".concat(n.join("\n")));const l=await(0,d.Ld)(h.Ul.USER_KYC,y),i=(e=>{const t=Object.keys(e).filter((e=>"hash"!==e&&"status"!==e)).sort().map((t=>"".concat(t,":").concat(e[t]))).join("|");return N().SHA256(t).toString()})(t);console.log(i,null===l||void 0===l?void 0:l.hash);const c=M,u={user_name:$,user_id:f};if(l){if(l.hash!==i){const e=(0,r.Z)((0,r.Z)({},t),{},{hash:i});await(0,_.qC)(e,h.Ul.USER_KYC,c,u)}}else{const e=(0,r.Z)((0,r.Z)({},t),{},{hash:i});await(0,_.qC)(e,h.Ul.USER_KYC,c,u)}C&&(console.log(C),await(0,d.qS)(h.Rb.CREATORS_KYC_DOCUMENTS,f,"Aadhar"),F(0),await(0,d.FV)(h.Rb.CREATORS_KYC_DOCUMENTS,C,f,"Aadhar",(e=>F(e)),(e=>{Z(e),console.log(e)}))),P&&(console.log(P),await(0,d.qS)(h.Rb.CREATORS_KYC_DOCUMENTS,f,"Gst"),z(0),await(0,d.FV)(h.Rb.CREATORS_KYC_DOCUMENTS,P,f,"Gst",(e=>z(e)),(e=>{w(e),console.log(e)}))),await(0,d.Xt)(h.Ul.USER,f,{KycIdList:{[y]:t.status}}),e.target.reset()}catch(a){console.error("Error processing KYC: ",a)}finally{K(!1)}},children:[(0,v.jsx)("h1",{style:{color:g?"white":"black",textTransform:"capitalize"},children:"Verify yourself"}),(0,v.jsx)("div",{className:"row",children:U.map((e=>{const a=e.find((e=>!q.includes(e)&&void 0!==t[e]));return a?(0,v.jsx)("div",{className:"col-md-6 col-lg-4",children:(0,v.jsxs)(s.Z.Group,{controlId:"formBasic".concat(a),children:[(0,v.jsx)(x.Z,{style:{color:g?"white":"black"},children:D.get(a)}),["city","state_province"].includes(a)?(0,v.jsxs)(s.Z.Control,{as:"select",placeholder:"Enter ".concat(D.get(a)),name:a,value:t[a],onChange:Y,required:!0,className:"glassmorphic-input",style:{backgroundColor:g?"#181818":"#e5e5e5",color:g?"white":"black",paddingTop:0,paddingBottom:0},children:[(0,v.jsxs)("option",{value:"",children:["Select a ",D.get(a)]}),[..."city"===a?T:B].map(((e,t)=>(0,v.jsx)("option",{value:e,children:e},t)))]}):(0,v.jsx)(s.Z.Control,{type:"age"===a||"phone_number"===a?"number":"text",placeholder:"Enter ".concat(D.get(a)),name:a,value:t[a],onChange:Y,required:!0,className:"glassmorphic-input",style:{backgroundColor:g?"#181818":"#e5e5e5",color:g?"white":"black"}}),p[a]&&(0,v.jsx)("span",{style:{color:"red"},children:p[a]})," "]})},a):null}))}),(0,v.jsx)("div",{className:"row",children:(0,v.jsxs)("div",{className:"col-md-6 col-lg-4",children:[(0,v.jsxs)(s.Z.Group,{controlId:"formBasicAadhar",children:[(0,v.jsx)(s.Z.Label,{style:{color:g?"white":"black"},children:"Aadhar"}),(0,v.jsxs)("div",{className:"d-flex align-items-center",children:[(0,v.jsx)(s.Z.Control,{type:"text",placeholder:"Enter Aadhar Number",name:"aadhar",className:"glassmorphic-input",value:t.aadhar,onChange:Y,required:!0,style:{backgroundColor:g?"#181818":"#e5e5e5",color:g?"white":"black",marginRight:"10px"}}),(0,v.jsx)(l.Z,{disable:"Verified"===t.status,variant:"light",onClick:()=>document.getElementById("aadharUpload").click(),style:{padding:"0.5rem",backgroundColor:g?"#333":"#f8f9fa",color:g?"white":"black",cursor:"pointer"},children:"Upload"}),(0,v.jsx)("input",{type:"file",id:"aadharUpload",accept:".pdf",style:{display:"none"},onChange:e=>(e=>{E(e.target.files[0]),L(!0)})(e)})]}),j&&j.length>0&&j[0].fileURL?(0,v.jsx)(l.Z,{variant:"link",style:{color:"#007bff",textDecoration:"none"},onClick:()=>window.open(j[0].fileURL,"_blank"),children:"Download Aadhar Document"}):(0,v.jsx)("p",{style:{color:g?"white":"black"},children:(null===C||void 0===C?void 0:C.name)||"No new Aadhar file uploaded."})]}),p.aadhar&&(0,v.jsx)("span",{style:{color:"red"},children:p.aadhar}),(0,v.jsx)("div",{children:V>=0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("progress",{value:V,max:"100"}),(0,v.jsxs)("p",{children:[V,"% uploaded"]})]})})]})}),(0,v.jsx)("div",{className:"row",children:(0,v.jsxs)("div",{className:"col-md-6 col-lg-4",children:[(0,v.jsxs)(s.Z.Group,{controlId:"formBasicGst",children:[(0,v.jsx)(s.Z.Label,{style:{color:g?"white":"black"},children:"GST"}),(0,v.jsxs)("div",{className:"d-flex align-items-center",children:[(0,v.jsx)(s.Z.Control,{type:"text",placeholder:"Enter GST Number",name:"gstin",value:t.gstin,onChange:Y,className:"glassmorphic-input",required:!0,style:{backgroundColor:g?"#181818":"#e5e5e5",color:g?"white":"black",marginRight:"10px"}}),(0,v.jsx)(l.Z,{disable:"Verified"===t.status,variant:"light",onClick:()=>document.getElementById("gstUpload").click(),style:{padding:"0.5rem",backgroundColor:g?"#333":"#f8f9fa",color:g?"white":"black",cursor:"pointer"},children:"Upload"}),(0,v.jsx)("input",{type:"file",id:"gstUpload",accept:".pdf",style:{display:"none"},onChange:e=>(e=>{A(e.target.files[0]),L(!0)})(e)})]}),S&&S.length>0&&S[0].fileURL?(0,v.jsx)(l.Z,{variant:"link",style:{color:"#007bff",textDecoration:"none"},onClick:()=>window.open(S[0].fileURL,"_blank"),children:"Download GST Document"}):(0,v.jsxs)("p",{style:{color:g?"white":"black"},children:[" ",(null===P||void 0===P?void 0:P.name)||"No new GST file uploaded."]})]}),p.gstin&&(0,v.jsx)("span",{style:{color:"red"},children:p.gstin}),(0,v.jsx)("div",{children:G>=0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("progress",{value:G,max:"100"}),(0,v.jsxs)("p",{children:[G,"% uploaded"]})]})})]})}),(0,v.jsxs)("div",{class:"form-check",children:[(0,v.jsx)("input",{type:"checkbox",class:"form-check-input",id:"tnc-switch",checked:t.tncAgreed,onChange:e=>{a((t=>(0,r.Z)((0,r.Z)({},t),{},{tncAgreed:e.target.checked})))}}),(0,v.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:(0,v.jsxs)("span",{style:{color:g?"white":"black"},children:["I agree to the ",(0,v.jsx)("a",{href:"#/npoliciesStudio",style:{color:g?"lightblue":"blue"},children:"Terms and Conditions. Click to read."})]})})]}),(0,v.jsx)("br",{}),t.comments&&(0,v.jsxs)("div",{className:"col-md-12 col-lg-12",children:[(0,v.jsx)("br",{}),(0,v.jsxs)(s.Z.Group,{controlId:"formBasicComments",children:[(0,v.jsx)(s.Z.Label,{children:D.get("comments")}),(0,v.jsx)(s.Z.Control,{as:"textarea",name:"comments",value:t.comments,readOnly:!0,style:{backgroundColor:g?"#181818":"#e5e5e5",color:g?"white":"black"}})]})]}),(0,v.jsx)(l.Z,{variant:"info",type:"submit",disabled:"Verified"===t.status||!t.tncAgreed,children:"Submit"})]}),W&&(0,v.jsx)(R.Z,{}),(0,v.jsx)("br",{}),(0,v.jsx)(v.Fragment,{children:t.hash&&(0,v.jsx)(k,{kycId:y,status:t.status})})]}),(0,v.jsx)("br",{})]})}},21204:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var r=a(1413),o=(a(72791),a(92552)),n=a(84654),s=a(28658),l=a(69597),i=a(43782),c=a(94294),d=a(18625),h=a(83168),u=a(36314),m=a(59434),g=a(60717),x=a(83708),p=a(97310),b=a(17237),f=a(80184);function y(e){let{img_src:t,data:a}=e;const y=(0,m.v9)(g.w),j=a.id?a.id:a.studioId,Z={backgroundColor:y?"#444":"white",padding:"0px",color:y?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};return(0,f.jsxs)(n.Z,{variant:"solid",sx:(0,r.Z)((0,r.Z)({},Z),{},{"&:hover":{transform:"scale(1.01)"}}),children:[(0,f.jsxs)(o.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,f.jsx)("img",{src:a&&a.iconUrl?a.iconUrl:"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg",loading:"lazy",alt:"Studio Image",style:{maxWidth:"100%",height:"auto",overflow:"hidden"}}),(0,f.jsx)(u.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:a&&a.danceStyles&&"string"===typeof a.danceStyles?a.danceStyles.split(",").slice(0,3).map(((e,t)=>(0,f.jsx)(l.Z,{color:t%2===0?"danger":"success",sx:{marginBottom:"10px",fontSize:"0.8rem",bgcolor:x.lt[t].backgroundColor,color:x.lt[t].color},children:e.trim()},t))):(0,f.jsx)(l.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)}),(0,f.jsx)(u.Z,{direction:"row",spacing:2,style:{position:"absolute",top:0,left:0,padding:"1px",paddingTop:"1px"},children:a&&a.freeTrialAvailable&&(0,f.jsx)(l.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:x.DM.LIME.backgroundColor,color:x.DM.LIME.color},children:"Free Trial Available"},1)})]}),(0,f.jsxs)(s.Z,{style:{padding:"10px"},children:[(0,f.jsxs)(i.Z,{display:"flex",justifyContent:"space-between",columnGap:1,children:[(0,f.jsx)(d.Z,{alignSelf:"center",href:"#/studio/".concat(j),fontWeight:"bold",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",style:{color:y?"white":"black"},children:a&&a.studioName?a.studioName:"    "}),a&&a.avgRating?(0,f.jsxs)(h.ZP,{width:52,flexShrink:0,alignSelf:"center",style:{color:y?"white":"black"},children:["\u2b50 ",a.avgRating.toFixed(1)]}):null]}),(0,f.jsx)(h.ZP,{style:{color:y?"white":"black"},level:"body-xs",children:a.street?a.street:".  "}),(0,f.jsx)(p.ZP,{hidden:!0,"aria-label":"Like minimal photography",size:"md",variant:"solid",color:"danger",sx:{position:"absolute",zIndex:2,borderRadius:"50%",right:"1rem",bottom:"2rem",transform:"translateY(50%)"},children:(0,f.jsx)(b.Z,{})}),(0,f.jsxs)(i.Z,{display:"flex",justifyContent:"space-between",children:[(0,f.jsx)(h.ZP,{alignSelf:"center",fontSize:12,style:{color:y?"white":"black"},children:a&&a.minFee&&"@ \u20b9".concat(a.minFee," onwards")}),(0,f.jsx)(c.Z,{size:"small",variant:"contained",sx:{alignSelf:"center",color:"white",backgroundColor:"#735EAB","&:hover":{backgroundColor:"#735EAB",color:"white"},"&.Mui-disabled":{backgroundColor:y?"rgba(115, 94, 171, 0.5)":"rgba(115, 94, 171, 0.3)",color:"rgba(255, 255, 255, 0.5)"}},type:"button",children:"Explore"})]})]})]})}},59894:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>K});var r=a(1413),o=a(72791),n=a(89743),s=a(2677),l=a(95070),i=a(19275),c=a(83708),d=a(59434),h=a(60717),u=a(61224),m=a(68449),g=a(41893),x=a(57621),p=a(9585),b=a(93044),f=a(20890),y=a(20068),j=a(39504),Z=a(18384),v=a(88447),S=a(16029),w=a(76989),C=a(94294),k=a(5712),E=a(68096),N=a(94925),I=a(64415),_=a(23786),R=a(25351),P=a(94070),A=a(51650),D=a(74569),U=a.n(D),T=a(32808),B=a.n(T),O=a(80184);const L=c.A3,V=e=>{let{open:t,onClose:a,userProfileInfo:n,setUserProfileInfo:s}=e;const{currentUser:l}=(0,u.a)(),i=A.W,[d,h]=(0,o.useState)([]),[g,x]=(0,o.useState)(),[p,b]=(0,o.useState)(!1),[y,j]=(0,o.useState)(""),[Z,D]=(0,o.useState)((null===n||void 0===n?void 0:n.isPhoneNumberVerified)||!1),[T,V]=(0,o.useState)(!1),[F,G]=(0,o.useState)(!1),[z,W]=(0,o.useState)(""),[K,M]=(0,o.useState)("info");(0,o.useEffect)((()=>{n&&n.DanceStyles&&""!==n.DanceStyles&&h(n.DanceStyles),n&&n.PhoneNumber&&""!==n.setUserPhoneNumber&&x(n.PhoneNumber)}),[n]);const $=e=>{s((0,r.Z)((0,r.Z)({},n),{},{[e.target.name]:e.target.value}))},Y=()=>{G(!1)};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(v.Z,{open:t,onClose:a,style:{overflow:"scroll"},children:(0,O.jsxs)(S.Z,{sx:{p:4,backgroundColor:"white",margin:"auto",mt:5,maxWidth:400,borderRadius:2},children:[(0,O.jsx)(f.Z,{variant:"h6",gutterBottom:!0,children:"Edit Profile"}),(0,O.jsx)(w.Z,{fullWidth:!0,label:"Name",name:"Name",value:n.Name,onChange:$,margin:"normal"}),(0,O.jsx)(w.Z,{fullWidth:!0,label:"Age",name:"Age",type:"number",value:n.Age,onChange:$,margin:"normal"}),(0,O.jsx)(w.Z,{fullWidth:!0,label:"Phone Number",name:"PhoneNumber",type:"number",value:n.PhoneNumber,onChange:$,margin:"normal",InputProps:{readOnly:Z||n.isPhoneNumberVerified}}),Z||n.isPhoneNumberVerified?(0,O.jsx)(f.Z,{color:"green",children:"Phone Number Verified"}):(0,O.jsx)(C.Z,{variant:"outlined",onClick:async()=>{try{if(200!==(await U().post("".concat(L,"djSms/request_otp/"),B().stringify({phone_number:n.PhoneNumber}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).status)throw new Error("Failed to send OTP.");V(!0),b(!0),W("OTP sent to your phone number."),M("info"),G(!0)}catch(e){console.error("Error sending OTP:",e),W("Error sending OTP, please try again."),M("error"),G(!0)}},children:T?"Resend OTP":"Verify Phone Number"}),(0,O.jsx)(k.Z,{multiple:!0,id:"tags-standard",options:i,value:d,onChange:(e,t)=>{h(t)},renderInput:e=>(0,O.jsx)(w.Z,(0,r.Z)((0,r.Z)({},e),{},{variant:"standard",placeholder:"Select Dance Styles",style:{backgroundColor:"white",color:"black"}}))}),(0,O.jsxs)(E.Z,{fullWidth:!0,margin:"normal",children:[(0,O.jsx)(N.Z,{children:"Gender"}),(0,O.jsxs)(I.Z,{name:"Gender",value:n.Gender,onChange:$,children:[(0,O.jsx)(_.Z,{value:"Male",children:"Male"}),(0,O.jsx)(_.Z,{value:"Female",children:"Female"}),(0,O.jsx)(_.Z,{value:"Other",children:"Other"})]})]}),(0,O.jsx)(w.Z,{fullWidth:!0,label:"Bio",name:"Bio",value:n.Bio,onChange:$,multiline:!0,rows:4,margin:"normal"}),(0,O.jsxs)(S.Z,{mt:2,display:"flex",justifyContent:"space-between",children:[(0,O.jsx)(C.Z,{variant:"outlined",onClick:a,children:"Cancel"}),(0,O.jsx)(C.Z,{variant:"contained",onClick:async()=>{n.DanceStyles=d;await(0,m.gv)(c.Ul.USER,l.uid,n)&&(W("Profile Updated"),M("success"),G(!0))},children:"Save"})]})]})}),(0,O.jsx)(v.Z,{open:p,onClose:()=>b(!1),children:(0,O.jsxs)(S.Z,{sx:{p:4,backgroundColor:"white",margin:"auto",mt:5,maxWidth:300,borderRadius:2},children:[(0,O.jsx)(f.Z,{variant:"h6",gutterBottom:!0,children:"Enter OTP"}),(0,O.jsx)(w.Z,{fullWidth:!0,label:"4-Digit OTP",value:y,onChange:e=>j(e.target.value),margin:"normal"}),(0,O.jsxs)(S.Z,{mt:2,display:"flex",justifyContent:"space-between",children:[(0,O.jsx)(C.Z,{variant:"outlined",onClick:()=>b(!1),children:"Cancel"}),(0,O.jsx)(C.Z,{variant:"contained",onClick:async()=>{try{const e=await U().post("".concat(L,"djSms/confirm_otp/"),B().stringify({phone_number:n.PhoneNumber,otp:y}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});console.log(e),e&&e.data&&"success"===e.data.status?(D(!0),s((0,r.Z)((0,r.Z)({},n),{},{isPhoneNumberVerified:!0})),b(!1),(async()=>{(0,m.to)(c.Ul.USER,l.uid,n.PhoneNumber)})(),W("Phone number verified successfully."),M("success"),G(!0)):(W(e.message||"Invalid OTP."),M("error"),G(!0))}catch(e){console.error("Error verifying OTP:",e),W("Error verifying OTP, please try again."),M("error"),G(!0)}},children:"Submit OTP"})]})]})}),(0,O.jsx)(R.Z,{open:F,autoHideDuration:600,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:Y,children:(0,O.jsx)(P.Z,{onClose:Y,severity:K,sx:{width:"100%"},children:z})})]})};var F=a(9806),G=(a(12481),a(11632)),z=a(12716),W=(a(10159),a(56510));const K=function(){const[e,t]=(0,o.useState)(!1),[a,r]=(0,o.useState)({Name:"",Age:"",DanceStyles:"",Gender:"",Bio:""}),v=(0,d.v9)(h.w),{currentUser:S}=(0,u.a)();console.log("currentUser",S);const w=[["Transactions","All","#/transactions"],["My Bookings","All","#/myBookings"],["Instructors","Creator","#/modifyInstructors"],["Studios","Creator","#/modifyStudios"],["DashBoard","Creator","#/creatorDashboard"]],{setIsLoading:C}=(0,W.U)(),[k,E]=(0,o.useState)(!1),[N,I]=(0,o.useState)([]);w.sort(((e,t)=>e[0].localeCompare(t[0]))),(0,o.useEffect)((()=>{S&&S.uid&&console.log("Recently watched disabled");(async()=>{try{C(!0);const e=await(0,m.Ld)(c.Ul.USER,S.uid);if(e){r({Name:e.Name||"",Age:e.Age||"",DanceStyles:e.DanceStyles||"",Gender:e.Gender||"",Bio:e.Bio||"",PhoneNumber:e.PhoneNumber||"",isPhoneNumberVerified:e.isPhoneNumberVerified||!1});const a=await(0,m.gG)(S.uid);t(a)}else console.log("User not found but workshop created... error")}catch(e){console.log("Error fetching user data or creator mode: ",e)}finally{C(!1)}})()}),[e]);const _={background:v?"black":"white",color:v?"white":"black",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"10px",cursor:"pointer"};return(0,O.jsxs)("div",{children:[(0,O.jsx)("h1",{style:{color:v?"white":"black",textTransform:"capitalize"},children:"Profile"}),(0,O.jsxs)(x.Z,{sx:{maxWidth:400,background:v?"black":"white",color:v?"white":"black"},children:[(0,O.jsx)(p.Z,{avatar:(0,O.jsx)(b.Z,{alt:"Picture",src:S.photoURL,sx:{width:40,height:40}}),title:(0,O.jsxs)(f.Z,{variant:"h6",component:"div",sx:{display:"flex",color:v?"white":"black",alignItems:"center"},children:[S.displayName,e&&(0,O.jsx)(y.Z,{title:"You are a verified user.",arrow:!0,children:(0,O.jsx)(Z.Z,{sx:{color:"green",marginLeft:.5,fontSize:20}})})]}),subheader:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f.Z,{variant:"body2",component:"div",sx:{color:v?"white":"black"},children:[S.email,a.Age].filter(Boolean).join(" || ")}),a.DanceStyles&&(0,O.jsx)(f.Z,{variant:"body2",component:"div",sx:{mt:1,color:v?"white":"black"},children:a.DanceStyles}),a.Bio&&(0,O.jsx)(f.Z,{variant:"body2",component:"div",sx:{mt:1,color:v?"white":"black"},children:a.Bio})]}),subheaderTypographyProps:{sx:{color:v?"gray":"darkgray"}}}),(0,O.jsx)(i.Z,{sx:{ml:2},variant:"outlined",onClick:()=>{E(!0)},children:"Edit Profile"}),(0,O.jsx)(V,{open:k,onClose:()=>{E(!1)},userProfileInfo:a,setUserProfileInfo:r}),(0,O.jsx)(j.Z,{children:(0,O.jsx)(f.Z,{variant:"body2",color:"text.secondary",style:{color:v?"white":"black"},children:e?"List your studios now!!":"Welcome to the Nritya! \n Verify your profile to list your studio."})})]}),(0,O.jsx)("br",{}),(0,O.jsx)(n.Z,{children:w.map((t=>{let[a,r,o]=t;return"Creator"!==r||e?(0,O.jsx)(s.Z,{xs:12,sm:6,md:6,lg:3,xl:3,className:"mb-4",children:(0,O.jsx)("a",{href:o,children:(0,O.jsx)(l.Z,{style:_,children:(0,O.jsx)(l.Z.Body,{children:(0,O.jsx)(l.Z.Title,{children:a})})})})},a):null}))}),(0,O.jsx)(g.default,{}),(0,O.jsxs)(n.Z,{hidden:!0,children:[N.length>0&&(0,O.jsxs)("h4",{style:{color:v?"white":"black"},children:[" ",(0,O.jsx)(F.G,{icon:G.SZw,size:"1x"})," Recently Viewed"]}),N.length>0?(0,O.jsx)(z.default,{dataList:N,imgOnly:!1}):""]})]})}},24654:()=>{},51650:e=>{"use strict";e.exports=JSON.parse('{"W":["Kuchipudi","Swing","Irish Dance","Folk Dance","Street Dance","Breaking","Voguing","House Dance","Bachata","Ballet","Ballroom","Belly Dance","Bhangra","Bharatanatyam","Bihu","Bollywood","Bollyhop","Butoh","Capoeira","Chhau","Clogging","Contemporary","Dandiya Raas","Flamenco","Garba","Giddha","Heels","Hip Hop","Irish Step Dance","Jazz","Jive","Kathak","Kathakali","Kizomba","Krumping","Lavani","Line Dance","Locking","Lyrical Hip-Hop","Manipuri","Modern Dance","Mohiniyattam","Odissi","Polynesian Dance","Popping","Rouf","Salsa","Sattriya","Tango","Tap Dance","Vogue","Waacking","Whacking","Zumba"]}')}}]);
//# sourceMappingURL=5618.68ff28df.chunk.js.map