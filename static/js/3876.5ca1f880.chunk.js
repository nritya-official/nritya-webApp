(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[3876],{87472:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>h});var n=o(72791),a=o(84654),t=o(73542),i=o(30195),s=o(94294),l=o(79253),c=o(21204),d=o(80184);const h=e=>{let{dataList:r,imgOnly:o=!1}=e;const h=Array.isArray(r)?r:Object.values(r),[u,m]=(0,n.useState)(!1),[x,g]=(0,n.useState)(null),p=()=>{m(!1),g(null)},y={transform:"scale(1.01)"};return(0,d.jsxs)("div",{className:"horizontal-scroll-wrapper no-important",children:[h.map(((e,r)=>o?(0,d.jsx)("a",{className:"no-important",onClick:()=>{return r=e,console.log(r),g(r),void m(!0);var r},children:(0,d.jsx)(a.Z,{style:{marginRight:"0.5rem"},component:"li",sx:{height:300,width:534,"&:hover":{...y}},children:(0,d.jsx)(l.Z,{children:(0,d.jsx)("img",{src:e,loading:"lazy",alt:"Studio image"})})},r)},r):(0,d.jsx)("a",{href:`#/studio/${e.id}`,children:(0,d.jsx)(c.Z,{data:e,img_src:e.iconUrl},e.id)},r))),(0,d.jsx)(t.Z,{open:u,onClose:p,children:x&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z,{sx:{padding:0},children:(0,d.jsx)("img",{src:x,alt:"Image",style:{maxWidth:"100%",height:"auto"}})}),(0,d.jsx)(s.Z,{sx:{"&:hover":{backgroundColor:"#735EAB",color:"white"}},onClick:p,children:"Close"})]})})]})}},21204:(e,r,o)=>{"use strict";o.d(r,{Z:()=>p});o(72791);var n=o(92552),a=o(84654),t=o(28658),i=o(69597),s=o(18625),l=o(83168),c=o(36314),d=o(59434),h=o(60717),u=o(83708),m=o(97310),x=o(17237),g=o(80184);function p(e){let{img_src:r,data:o}=e;const p=(0,d.v9)(h.w),y=o.id?o.id:o.studioId,b={backgroundColor:p?"#444":"white",padding:"0px",color:p?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};return(0,g.jsxs)(a.Z,{variant:"solid",sx:{...b,"&:hover":{transform:"scale(1.01)"}},children:[(0,g.jsxs)(n.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,g.jsx)("img",{src:o&&o.iconUrl?o.iconUrl:"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg",loading:"lazy",alt:"Studio Image",style:{maxWidth:"100%",height:"auto",overflow:"hidden"}}),(0,g.jsx)(c.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:o&&o.danceStyles&&"string"===typeof o.danceStyles?o.danceStyles.split(",").slice(0,3).map(((e,r)=>(0,g.jsx)(i.Z,{color:r%2===0?"danger":"success",sx:{marginBottom:"10px",fontSize:"0.8rem",bgcolor:u.lt[r].backgroundColor,color:u.lt[r].color},children:e.trim()},r))):(0,g.jsx)(i.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)}),(0,g.jsx)(c.Z,{direction:"row",spacing:2,style:{position:"absolute",top:0,left:0,padding:"1px",paddingTop:"1px"},children:o&&o.freeTrialAvailable&&(0,g.jsx)(i.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:u.DM.LIME.backgroundColor,color:u.DM.LIME.color},children:"Free Trial Available"},1)})]}),(0,g.jsxs)(t.Z,{style:{padding:"10px"},children:[(0,g.jsx)(s.Z,{href:`#/studio/${y}`,fontWeight:"bold",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,style:{color:p?"white":"black"},children:o&&o.studioName?o.studioName:"    "}),(0,g.jsx)(l.ZP,{style:{color:p?"white":"black"},level:"body-xs",children:o.street?o.street:".  "}),(0,g.jsx)(m.ZP,{hidden:!0,"aria-label":"Like minimal photography",size:"md",variant:"solid",color:"danger",sx:{position:"absolute",zIndex:2,borderRadius:"50%",right:"1rem",bottom:"2rem",transform:"translateY(50%)"},children:(0,g.jsx)(x.Z,{})}),(0,g.jsxs)(l.ZP,{style:{color:p?"white":"black"},children:[(0,g.jsxs)("span",{children:["\u2b50 ",o&&o.avgRating?o.avgRating.toFixed(1):"Not rated yet"]}),o&&o.minFee&&(0,g.jsxs)("span",{style:{position:"absolute",right:2},children:["  Starts @\u20b9",o.minFee]})]})]})]})}},59894:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>G});var n=o(72791),a=o(89743),t=o(2677),i=o(95070),s=o(19275),l=o(83708),c=o(59434),d=o(60717),h=o(61224),u=o(68449),m=o(41893),x=o(57621),g=o(9585),p=o(93044),y=o(20890),b=o(20068),j=o(39504),f=o(18384),v=o(88447),Z=o(697),w=o(76989),S=o(94294),k=o(49644),C=o(68096),P=o(94925),N=o(68837),B=o(5022),D=o(93543),T=o(94070),U=o(51650),I=o(74569),O=o.n(I),W=o(32808),E=o.n(W),R=o(80184);const A="https://nrityaserver-2b241e0a97e5.herokuapp.com",z=e=>{let{open:r,onClose:o,userProfileInfo:a,setUserProfileInfo:t}=e;const{currentUser:i}=(0,h.a)(),s=U.W,[c,d]=(0,n.useState)([]),[m,x]=(0,n.useState)(),[g,p]=(0,n.useState)(!1),[b,j]=(0,n.useState)(""),[f,I]=(0,n.useState)((null===a||void 0===a?void 0:a.isPhoneNumberVerified)||!1),[W,z]=(0,n.useState)(!1),[L,F]=(0,n.useState)(!1),[V,M]=(0,n.useState)(""),[_,G]=(0,n.useState)("info");(0,n.useEffect)((()=>{a&&a.DanceStyles&&""!==a.DanceStyles&&d(a.DanceStyles),a&&a.PhoneNumber&&""!==a.setUserPhoneNumber&&x(a.PhoneNumber)}),[a]);const H=e=>{t({...a,[e.target.name]:e.target.value})},J=()=>{F(!1)};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(v.Z,{open:r,onClose:o,style:{overflow:"scroll"},children:(0,R.jsxs)(Z.Z,{sx:{p:4,backgroundColor:"white",margin:"auto",mt:5,maxWidth:400,borderRadius:2},children:[(0,R.jsx)(y.Z,{variant:"h6",gutterBottom:!0,children:"Edit Profile"}),(0,R.jsx)(w.Z,{fullWidth:!0,label:"Name",name:"Name",value:a.Name,onChange:H,margin:"normal"}),(0,R.jsx)(w.Z,{fullWidth:!0,label:"Age",name:"Age",type:"number",value:a.Age,onChange:H,margin:"normal"}),(0,R.jsx)(w.Z,{fullWidth:!0,label:"Phone Number",name:"PhoneNumber",type:"number",value:a.PhoneNumber,onChange:H,margin:"normal",InputProps:{readOnly:f||a.isPhoneNumberVerified}}),f||a.isPhoneNumberVerified?(0,R.jsx)(y.Z,{color:"green",children:"Phone Number Verified"}):(0,R.jsx)(S.Z,{variant:"outlined",onClick:async()=>{try{if(200!==(await O().post(`${A}/djSms/request_otp/`,E().stringify({phone_number:a.PhoneNumber}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).status)throw new Error("Failed to send OTP.");z(!0),p(!0),M("OTP sent to your phone number."),G("info"),F(!0)}catch(e){console.error("Error sending OTP:",e),M("Error sending OTP, please try again."),G("error"),F(!0)}},children:W?"Resend OTP":"Verify Phone Number"}),(0,R.jsx)(k.Z,{multiple:!0,id:"tags-standard",options:s,value:c,onChange:(e,r)=>{d(r)},renderInput:e=>(0,R.jsx)(w.Z,{...e,variant:"standard",placeholder:"Select Dance Styles",style:{backgroundColor:"white",color:"black"}})}),(0,R.jsxs)(C.Z,{fullWidth:!0,margin:"normal",children:[(0,R.jsx)(P.Z,{children:"Gender"}),(0,R.jsxs)(N.Z,{name:"Gender",value:a.Gender,onChange:H,children:[(0,R.jsx)(B.Z,{value:"Male",children:"Male"}),(0,R.jsx)(B.Z,{value:"Female",children:"Female"}),(0,R.jsx)(B.Z,{value:"Other",children:"Other"})]})]}),(0,R.jsx)(w.Z,{fullWidth:!0,label:"Bio",name:"Bio",value:a.Bio,onChange:H,multiline:!0,rows:4,margin:"normal"}),(0,R.jsxs)(Z.Z,{mt:2,display:"flex",justifyContent:"space-between",children:[(0,R.jsx)(S.Z,{variant:"outlined",onClick:o,children:"Cancel"}),(0,R.jsx)(S.Z,{variant:"contained",onClick:async()=>{a.DanceStyles=c;await(0,u.gv)(l.Ul.USER,i.uid,a)&&(M("Profile Updated"),G("success"),F(!0))},children:"Save"})]})]})}),(0,R.jsx)(v.Z,{open:g,onClose:()=>p(!1),children:(0,R.jsxs)(Z.Z,{sx:{p:4,backgroundColor:"white",margin:"auto",mt:5,maxWidth:300,borderRadius:2},children:[(0,R.jsx)(y.Z,{variant:"h6",gutterBottom:!0,children:"Enter OTP"}),(0,R.jsx)(w.Z,{fullWidth:!0,label:"4-Digit OTP",value:b,onChange:e=>j(e.target.value),margin:"normal"}),(0,R.jsxs)(Z.Z,{mt:2,display:"flex",justifyContent:"space-between",children:[(0,R.jsx)(S.Z,{variant:"outlined",onClick:()=>p(!1),children:"Cancel"}),(0,R.jsx)(S.Z,{variant:"contained",onClick:async()=>{try{const e=await O().post(`${A}/djSms/confirm_otp/`,E().stringify({phone_number:a.PhoneNumber,otp:b}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});console.log(e),e&&e.data&&"success"===e.data.status?(I(!0),t({...a,isPhoneNumberVerified:!0}),p(!1),(async()=>{(0,u.to)(l.Ul.USER,i.uid,a.PhoneNumber)})(),M("Phone number verified successfully."),G("success"),F(!0)):(M(e.message||"Invalid OTP."),G("error"),F(!0))}catch(e){console.error("Error verifying OTP:",e),M("Error verifying OTP, please try again."),G("error"),F(!0)}},children:"Submit OTP"})]})]})}),(0,R.jsx)(D.Z,{open:L,autoHideDuration:600,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:J,children:(0,R.jsx)(T.Z,{onClose:J,severity:_,sx:{width:"100%"},children:V})})]})};var L=o(9806),F=o(12481),V=o(11632),M=o(87472),_=o(10159);const G=function(){const[e,r]=(0,n.useState)(!1),[o,v]=(0,n.useState)({Name:"",Age:"",DanceStyles:"",Gender:"",Bio:""}),Z=(0,c.v9)(d.w),{currentUser:w}=(0,h.a)();console.log("currentUser",w);const S=[["Transactions","All","#/transactions"],["My Bookings","All","#/myBookings"],["Instructors","Creator","#/modifyInstructors"],["Studios","Creator","#/modifyStudios"],["DashBoard","Creator","#/creatorDashboard"]],[k,C]=(0,n.useState)(!1),[P,N]=(0,n.useState)([]);S.sort(((e,r)=>e[0].localeCompare(r[0]))),(0,n.useEffect)((()=>{w&&w.uid&&(async e=>{try{const r=(0,F.JU)(_.db,l.Ul.USER,e),o=await(0,F.QT)(r),n=o.exists()?o.data().recentlyWatched:{},a=Object.values(n).map((async e=>{if(!e)return console.warn("Invalid studioId:",e),null;console.log("studioId",e);const r=(0,F.JU)(_.db,l.Ul.STUDIO,e),o=await(0,F.QT)(r);return o.exists()?{id:e,...o.data()}:(console.warn(`Studio document not found for ID: ${e}`),null)})),t=(await Promise.all(a)).filter((e=>null!==e));N(t)}catch(r){console.error("Error fetching recently watched studios:",r)}})(w.uid);(async()=>{try{const e=await(0,u.Ld)(l.Ul.USER,w.uid);e?(v({Name:e.Name||"",Age:e.Age||"",DanceStyles:e.DanceStyles||"",Gender:e.Gender||"",Bio:e.Bio||"",PhoneNumber:e.PhoneNumber||"",isPhoneNumberVerified:e.isPhoneNumberVerified||!1}),r(e.CreatorMode)):console.log("User not found but workshop created... error")}catch(e){console.log(" error")}})()}),[e]);const B={background:Z?"black":"white",color:Z?"white":"black",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"10px",cursor:"pointer"};return(0,R.jsxs)("div",{children:[(0,R.jsx)("h1",{style:{color:Z?"white":"black",textTransform:"capitalize"},children:"Profile"}),(0,R.jsxs)(x.Z,{sx:{maxWidth:400,background:Z?"black":"white",color:Z?"white":"black"},children:[(0,R.jsx)(g.Z,{avatar:(0,R.jsx)(p.Z,{alt:"Picture",src:w.photoURL,sx:{width:40,height:40}}),title:(0,R.jsxs)(y.Z,{variant:"h6",component:"div",sx:{display:"flex",color:Z?"white":"black",alignItems:"center"},children:[w.displayName,e&&(0,R.jsx)(b.Z,{title:"You are a verified user.",arrow:!0,children:(0,R.jsx)(f.Z,{sx:{color:"green",marginLeft:.5,fontSize:20}})})]}),subheader:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(y.Z,{variant:"body2",component:"div",sx:{color:Z?"white":"black"},children:[w.email,o.Age].filter(Boolean).join(" || ")}),o.DanceStyles&&(0,R.jsx)(y.Z,{variant:"body2",component:"div",sx:{mt:1,color:Z?"white":"black"},children:o.DanceStyles}),o.Bio&&(0,R.jsx)(y.Z,{variant:"body2",component:"div",sx:{mt:1,color:Z?"white":"black"},children:o.Bio})]}),subheaderTypographyProps:{sx:{color:Z?"gray":"darkgray"}}}),(0,R.jsx)(s.Z,{sx:{ml:2},variant:"outlined",onClick:()=>{C(!0)},children:"Edit Profile"}),(0,R.jsx)(z,{open:k,onClose:()=>{C(!1)},userProfileInfo:o,setUserProfileInfo:v}),(0,R.jsx)(j.Z,{children:(0,R.jsx)(y.Z,{variant:"body2",color:"text.secondary",style:{color:Z?"white":"black"},children:e?"List your studios now!!":"Welcome to the Nritya! \n Verify your profile to list your studio."})})]}),(0,R.jsx)("br",{}),(0,R.jsx)(a.Z,{children:S.map((r=>{let[o,n,a]=r;return"Creator"!==n||e?(0,R.jsx)(t.Z,{xs:12,sm:6,md:6,lg:3,xl:3,className:"mb-4",children:(0,R.jsx)("a",{href:a,children:(0,R.jsx)(i.Z,{style:B,children:(0,R.jsx)(i.Z.Body,{children:(0,R.jsx)(i.Z.Title,{children:o})})})})},o):null}))}),(0,R.jsx)(m.default,{}),(0,R.jsxs)(a.Z,{hidden:!0,children:[P.length>0&&(0,R.jsxs)("h4",{style:{color:Z?"white":"black"},children:[" ",(0,R.jsx)(L.G,{icon:V.SZw,size:"1x"})," Recently Viewed"]}),P.length>0?(0,R.jsx)(M.default,{dataList:P,imgOnly:!1}):""]})]})}},24654:()=>{},51650:e=>{"use strict";e.exports=JSON.parse('{"W":["Kuchipudi","Swing","Irish Dance","Folk Dance","Street Dance","Breaking","Voguing","House Dance","Bachata","Ballet","Ballroom","Belly Dance","Bhangra","Bharatanatyam","Bihu","Bollywood","Bollyhop","Butoh","Capoeira","Chhau","Clogging","Contemporary","Dandiya Raas","Flamenco","Garba","Giddha","Heels","Hip Hop","Irish Step Dance","Jazz","Jive","Kathak","Kathakali","Kizomba","Krumping","Lavani","Line Dance","Locking","Lyrical Hip-Hop","Manipuri","Modern Dance","Mohiniyattam","Odissi","Polynesian Dance","Popping","Rouf","Salsa","Sattriya","Tango","Tap Dance","Vogue","Waacking","Whacking","Zumba"]}')}}]);
//# sourceMappingURL=3876.5ca1f880.chunk.js.map