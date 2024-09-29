"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[763],{59777:(e,t,l)=>{l.d(t,{Z:()=>E});l(11518);var o=l(72791),r=l(92552),a=l(84654),n=l(28658),s=l(69597),i=l(83168),d=l(88447),c=l(697),u=l(61889),h=l(20890),x=l(94294),p=l(13400),v=l(36314),m=l(59434),b=l(83708),j=l(68449),g=l(60717),Z=l(97892),S=l.n(Z),w=l(12481),y=l(10159),C=l(75424),k=l(49071),f=l(10884),I=l(80184);function U(e){var t,l,r,a,n,s;let{open:i,handleClose:v,dataItem:j,activateCourse:Z,deactivateCourse:U,actionsAllowed:D}=e;const E=(0,C.D)(),N=(0,m.v9)(g.w),[O,L]=(0,o.useState)(!1),[J,P]=(0,o.useState)(null),R=null===(t=JSON.parse(localStorage.getItem("userInfo")))||void 0===t?void 0:t.UserId;(0,o.useEffect)((()=>{(async()=>{try{const e=(0,w.JU)(y.db,"User",R),t=await(0,w.QT)(e);t.exists()&&P(t.data())}catch(e){console.log(" error")}})()}),[]);const A=j.UserId===R,F=null===J||void 0===J||null===(l=J.BookedCourses)||void 0===l||null===(r=l.includes)||void 0===r?void 0:r.call(l,null===j||void 0===j?void 0:j.id),T=encodeURIComponent("Hey, I found your Studio on nritya.co.in. I'm interested");return(0,I.jsx)(d.Z,{open:i,onClose:v,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,I.jsxs)(c.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"90%",overflow:"auto",width:{xs:"90%",md:"60%"},bgcolor:N?"black":"background.paper",borderWidth:"2px",borderStyle:"solid",borderColor:N?"white":"black",boxShadow:24,p:"1rem",borderRadius:"8px"},children:[(0,I.jsxs)(u.ZP,{container:!0,spacing:"8px",rowGap:2,children:[(0,I.jsx)(u.ZP,{item:!0,xs:12,lg:8,children:(0,I.jsx)("img",{src:j.imageUrl,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:"8px"}})}),(0,I.jsxs)(u.ZP,{item:!0,xs:12,lg:4,children:[(0,I.jsxs)(c.Z,{sx:{height:"100%",bgcolor:N?"#333333":"#efefef",p:2,borderRadius:"8px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,I.jsxs)(c.Z,{sx:{flex:1},children:[(0,I.jsx)(h.Z,{variant:"h6",component:"p",sx:{color:N?"white":"black"},children:S()(j.date).format("LL")}),(0,I.jsx)(h.Z,{variant:"h6",component:"p",sx:{color:N?"white":"black"},children:j.time}),(0,I.jsx)(h.Z,{variant:"body1",component:"p",sx:{mt:"2rem",color:N?"white":"black"},children:j.venue}),(0,I.jsxs)(h.Z,{variant:"body1",component:"p",sx:{mt:"2rem",color:N?"white":"black"},children:[j.duration," ",j.durationUnit]})]}),(0,I.jsxs)(c.Z,{sx:{mt:"2rem",display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,I.jsxs)(h.Z,{variant:"h5",sx:{alignSelf:"center",color:N?"white":"black"},children:["\u20b9",j.price]}),!D&&!A&&R&&(0,I.jsx)(x.Z,{variant:"outlined",onClick:async()=>{try{L(!0),(0,w.ET)((0,w.hJ)(y.db,b.Ul.BOOKINGS),{StudioId:j.StudioId,CourseId:j.id,UserId:R,bookingDate:Date.now()});const e=(0,w.JU)(y.db,"User",R),t=await(0,w.QT)(e);t.exists()&&null!=t.data()&&await(0,w.r7)(e,{BookedCourses:[...t.data().BookedCourses||[],j.id]}),P((e=>({...e,BookedCourses:[...(null===e||void 0===e?void 0:e.BookedCourses)||[],j.id]}))),E("Course booked","success")}catch(e){console.error(e),E((null===e||void 0===e?void 0:e.message)||"Something went wrong","error")}finally{L(!1)}},disabled:F||O,sx:{alignSelf:"center",boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"transparent",borderColor:N?"white":"black",color:N?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:N?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:N?"white":"black"},"&:focus":{boxShadow:"none"}},children:F?"Booked":"Book Now"})]})]}),!D&&!A&&R&&(0,I.jsx)(h.Z,{component:"p",variant:"caption",sx:{my:"2px",color:N?"white":"black",textAlign:"center"},children:"Book here and pay at the venue"})]}),(0,I.jsxs)(u.ZP,{item:!0,sx:{mt:1},children:[(0,I.jsxs)(h.Z,{variant:"h5",component:"p",sx:{color:N?"white":"black"},children:[j.name||"",j.danceStyles.map((e=>` | ${e}`))]}),(0,I.jsxs)(h.Z,{variant:"body1",component:"p",sx:{mt:1,color:N?"white":"black"},children:[(0,I.jsxs)("span",{children:["By ",(null===(a=j.studioDetails)||void 0===a?void 0:a.studioName)||""]}),j.studioDetails&&(null===(n=j.studioDetails)||void 0===n?void 0:n.whatsappNumber)&&(0,I.jsx)(p.Z,{color:"success",size:"small",target:"_blank",href:`https://wa.me/91${j.studioDetails.whatsappNumber}?text=${T}`,children:(0,I.jsx)("img",{src:k,alt:"Whatsapp call",style:{width:30,height:28}})}),j.studioDetails&&(null===(s=j.studioDetails)||void 0===s?void 0:s.mobileNumber)&&(0,I.jsx)(p.Z,{color:"primary",size:"small",target:"_blank",href:`tel:${j.studioDetails.mobileNumber}`,children:(0,I.jsx)("img",{src:f,alt:"Phone call",style:{width:30,height:28}})})]}),(0,I.jsx)(h.Z,{variant:"body1",component:"p",sx:{mt:2,color:N?"white":"black"},children:j.description||""})]})]}),(0,I.jsxs)(c.Z,{sx:{mt:"1rem",textAlign:"right"},children:[D&&A&&(0,I.jsx)(x.Z,{onClick:()=>null!==j&&void 0!==j&&j.active?U(null===j||void 0===j?void 0:j.id):Z(null===j||void 0===j?void 0:j.id),variant:"outlined",sx:{mr:"1rem",color:"white",boxShadow:"none",border:"1px solid",backgroundColor:null!==j&&void 0!==j&&j.active?"red":"green",borderColor:"white",color:"white","&:hover":{backgroundColor:null!==j&&void 0!==j&&j.active?"red":"green",borderColor:"white",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:null!==j&&void 0!==j&&j.active?"red":"green",borderColor:"white"},"&:focus":{boxShadow:"none"}},children:null!==j&&void 0!==j&&j.active?"Deactivate":"Activate"}),(0,I.jsx)(x.Z,{onClick:v,variant:"outlined",sx:{color:"white",boxShadow:"none",border:"1px solid",backgroundColor:"transparent",borderColor:N?"white":"black",color:N?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:N?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:N?"white":"black"},"&:focus":{boxShadow:"none"}},children:"Close"})]})]})})}function D(e){var t;let{dataItem:l,activateCourse:d,deactivateCourse:u,actionsAllowed:h}=e;const x=(0,m.v9)(g.w),[p,Z]=(0,o.useState)(null),[S,w]=(0,o.useState)(!1),y=l.id;(0,o.useEffect)((()=>{(async()=>{try{const e=await(0,j.Us)(b.Rb.COURSEICON,y);Z(e||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}catch(e){console.error("Error fetching image URL:",e)}})()}),[l.id]);const C={backgroundColor:x?"#444":"white",padding:"0px",color:x?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(a.Z,{variant:"solid",sx:{...C,"&:hover":{transform:"scale(1.01)",cursor:"pointer"}},onClick:()=>w(!0),children:[(0,I.jsxs)(r.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,I.jsx)("img",{src:p,loading:"lazy",alt:"Studio Image",style:{maxWidth:"100%",objectFit:"cover",overflow:"hidden"}}),(0,I.jsx)(v.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:l&&l.danceStyles?l.danceStyles.slice(0,3).map(((e,t)=>(0,I.jsx)(s.Z,{color:t%2===0?"danger":"success",style:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem"},children:e.trim()},t))):(0,I.jsx)(s.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)})]}),(0,I.jsxs)(n.Z,{style:{padding:"10px",paddingTop:"5px"},children:[(0,I.jsxs)(c.Z,{fontWeight:"md",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,style:{color:x?"white":"black",extDecoder:"one"},children:[(0,I.jsx)("span",{children:l&&l.name?l.name:""}),!(null!==l&&void 0!==l&&l.active)&&(0,I.jsx)("span",{style:{marginLeft:"2px",padding:"2px 4px",fontSize:"14px",borderRadius:"4px",background:"red"},children:"Inactive"})]}),(0,I.jsxs)(i.ZP,{style:{color:x?"white":"black"},level:"body-xs",noWrap:!0,children:["By ",null!==(t=l.studioDetails)&&void 0!==t&&t.studioName?l.studioDetails.studioName:""]}),(0,I.jsx)(i.ZP,{style:{marginTop:10,color:x?"white":"black"},level:"body-xs",noWrap:!0,children:l.venue?l.venue:""}),(0,I.jsxs)(i.ZP,{style:{color:x?"white":"black"},level:"body-xs",children:[l.date||""," | ",l.time||""]})]})]}),(0,I.jsx)(U,{dataItem:{...l,imageUrl:p},open:S,handleClose:()=>w(!1),activateCourse:d,deactivateCourse:u,actionsAllowed:h})]})}const E=e=>{let{dataList:t,activateCourse:l,deactivateCourse:o,actionsAllowed:r}=e;return(0,I.jsx)("div",{className:"horizontal-scroll-wrapper",children:t.map(((e,t)=>(0,I.jsx)(D,{dataItem:e,activateCourse:l,deactivateCourse:o,actionsAllowed:r},e.id)))})}},26073:(e,t,l)=>{l.d(t,{Z:()=>d});l(72791);var o=l(89743),r=l(2677),a=l(13855),n=l(59434),s=l(60717),i=l(80184);const d=e=>{var t;let{defaultTime:l,handleSelect:d}=e;const c=l.split("-")[0].trim(),u=null===(t=l.split("-")[1])||void 0===t?void 0:t.trim(),h=(0,n.v9)(s.w),x=e=>{const t=(()=>{const e=[];let t=[],l=[];for(let o=0;o<24;o++)for(let e=0;e<60;e+=30){const r=o.toString().padStart(2,"0"),a=e.toString().padStart(2,"0"),n=`${r}:${a}`;if(o<12)t.push(`${n} AM`);else{const e=(o-12).toString().padStart(2,"0");l.push(`${e}:${a} PM`)}}for(let o=0;o<t.length||o<l.length;o++)o<t.length&&e.push(t[o]),o<l.length&&e.push(l[o]);return e})();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("option",{value:e,children:e}),t.map((e=>(0,i.jsx)("option",{value:e,children:e},e)))]})};return(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(r.Z,{children:(0,i.jsxs)(a.Z.Group,{children:[(0,i.jsx)(a.Z.Label,{children:"Start Time"}),(0,i.jsx)(a.Z.Control,{as:"select",onChange:e=>d(e.target.value,null),style:{background:"transparent",borderWidth:1,borderColor:h?"white":"black"},children:x(c)})]})}),(0,i.jsx)(r.Z,{children:(0,i.jsxs)(a.Z.Group,{children:[(0,i.jsx)(a.Z.Label,{children:"End Time"}),(0,i.jsx)(a.Z.Control,{as:"select",onChange:e=>d(null,e.target.value),style:{background:"transparent",borderWidth:1,borderColor:h?"white":"black"},children:x(u)})]})})]})}},40763:(e,t,l)=>{l.r(t),l.d(t,{default:()=>T});var o=l(72791),r=l(10159),a=l(12481),n=l(83708),s=l(59434),i=l(60717),d=l(61224),c=l(43896),u=l(83449),h=l(47283),x=l(82851),p=l(697),v=l(59777),m=l(13855),b=l(89743),j=l(2677),g=l(94294),Z=l(81018),S=l(51650),w=l(49644),y=l(76989),C=l(67107),k=l(44507),f=l(4708),I=l(82718),U=l(4560),D=l(24750),E=l(71652),N=l(97892),O=l.n(N),L=l(26073),J=l(75424),P=l(82873),R=l(80184);const A=function(e){let{instructors:t,studioId:l,setCourses:d}=e;const c=(0,J.D)(),[u,h]=(0,o.useState)(""),x=(0,s.v9)(i.w),[p,v]=(0,o.useState)([]),[N,A]=(0,o.useState)([]),F=t.map((e=>`${e.name} - ${e.id}`)),T=S.W,$=localStorage.getItem("filterLocation")||"",[B,V]=(0,o.useState)(!1),[M,Y]=(0,o.useState)(""),[z,_]=(0,o.useState)(null),[W,q]=(0,o.useState)(""),[G,Q]=(0,o.useState)($),[H,K]=(0,o.useState)(""),[X,ee]=(0,o.useState)(O()(new Date)),[te,le]=(0,o.useState)(!1),[oe,re]=(0,o.useState)(1),ae=(0,C.Z)({palette:{mode:x?"dark":"light"}}),ne=e=>{e.reset(),A([]),v([]),_(null),Y(""),q(""),K(""),ee(O()(Date.now())),Q("")};return(0,o.useEffect)((()=>{!async function(){const e=document.getElementById("addStudioForm");try{const g=(0,a.IO)((0,a.hJ)(r.db,n.i0.DRAFT_COURSES),(0,a.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),Z=await(0,a.PL)(g);if(Z.empty){var o,s,i,d,c,u,h,x,m,b;await(0,a.ET)((0,a.hJ)(r.db,n.i0.DRAFT_COURSES),{name:(null===(o=e.name)||void 0===o?void 0:o.value)||"",duration:(null===(s=e.duration)||void 0===s?void 0:s.value)||"",price:(null===(i=e.workshopFees)||void 0===i?void 0:i.value)||"",venue:(null===(d=e.workshopVenue)||void 0===d?void 0:d.value)||"",description:(null===(c=e.description)||void 0===c?void 0:c.value)||"",danceStyles:N,instructors:p?null===p||void 0===p||null===(u=p.map)||void 0===u?void 0:u.call(p,(e=>{var t,l,o,r;return(null===e||void 0===e||null===(t=e.split)||void 0===t||null===(l=t.call(e,"-"))||void 0===l||null===(o=l[1])||void 0===o||null===(r=o.trim)||void 0===r?void 0:r.call(o))||null})):null,author:JSON.parse(localStorage.getItem("userInfo")).displayName,UserId:JSON.parse(localStorage.getItem("userInfo")).UserId,creatorEmail:JSON.parse(localStorage.getItem("userInfo")).email,StudioId:z&&(null===z||void 0===z||null===(h=z.split)||void 0===h||null===(x=h.call(z,":"))||void 0===x||null===(m=x[1])||void 0===m||null===(b=m.trim)||void 0===b?void 0:b.call(m))||null,durationUnit:M,level:W,time:H,date:X.format("YYYY-MM-DD"),city:G})}else{var j;let o=[];Z.forEach((e=>{o.push({id:e.id,...e.data()})}));let r=o[0];e.name.value=r.name,e.workshopFees.value=r.price,e.workshopVenue.value=r.venue,e.description.value=r.description,e.duration.value=r.duration,A(null!==r&&void 0!==r&&null!==(j=r.danceStyles)&&void 0!==j&&j.length?r.danceStyles:[]),v(t.filter((e=>null===r||void 0===r?void 0:r.instructors.includes(e.id))).map((e=>`${e.name} - ${e.id}`)));const a=l.map((e=>e.split(":")[1].trim())).findIndex((e=>e===(null===r||void 0===r?void 0:r.StudioId)));a>0&&_(l[a]),Y(r.durationUnit),q((null===r||void 0===r?void 0:r.level)||""),K((null===r||void 0===r?void 0:r.time)||""),ee(O()((null===r||void 0===r?void 0:r.date)||Date.now())),Q((null===r||void 0===r?void 0:r.city)||"")}V(!0)}catch(g){console.error(g)}}()}),[]),(0,o.useEffect)((()=>{let e=null;return B&&async function(){const t=document.getElementById("addStudioForm");try{const l=(0,a.IO)((0,a.hJ)(r.db,n.i0.DRAFT_COURSES),(0,a.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),o=await(0,a.PL)(l);if(!o.empty){let l=[];o.forEach((e=>{l.push({id:e.id,...e.data()})}));let s=l[0];const i=(0,a.JU)(r.db,n.i0.DRAFT_COURSES,s.id);e=setInterval((async()=>{try{var e,l,o,r,n,s,d,c,u,h;await(0,a.r7)(i,{name:(null===(e=t.name)||void 0===e?void 0:e.value)||"",price:(null===(l=t.workshopFees)||void 0===l?void 0:l.value)||"",venue:(null===(o=t.workshopVenue)||void 0===o?void 0:o.value)||"",description:(null===(r=t.description)||void 0===r?void 0:r.value)||"",danceStyles:N,instructors:p?null===p||void 0===p||null===(n=p.map)||void 0===n?void 0:n.call(p,(e=>{var t,l,o,r;return(null===e||void 0===e||null===(t=e.split)||void 0===t||null===(l=t.call(e,"-"))||void 0===l||null===(o=l[1])||void 0===o||null===(r=o.trim)||void 0===r?void 0:r.call(o))||null})):null,StudioId:z&&(null===z||void 0===z||null===(s=z.split)||void 0===s||null===(d=s.call(z,":"))||void 0===d||null===(c=d[1])||void 0===c||null===(u=c.trim)||void 0===u?void 0:u.call(c))||null,duration:(null===(h=t.duration)||void 0===h?void 0:h.value)||"",durationUnit:M,level:W,time:H,date:X.format("YYYY-MM-DD"),city:G})}catch(x){console.error(x)}}),1e4)}}catch(l){console.error(l)}}(),()=>clearInterval(e)}),[B,N,p,z,M,W,H,X,G]),(0,R.jsxs)("div",{children:[1===oe&&(0,R.jsx)(m.Z,{id:"addStudioForm",onSubmit:async e=>{e.preventDefault();const t=e.target;if((e=>{let t=!0;return e.name.value&&e.duration.value&&e.workshopFees.value&&e.workshopVenue.value&&e.description.value&&null!==N&&void 0!==N&&N.length&&null!==p&&void 0!==p&&p.length&&z&&M&&W&&H&&X&&G||(t=!1),t})(t))try{var l,o,s,i,u;const x={name:e.target.name.value,danceStyles:N,instructors:p?null===p||void 0===p||null===(l=p.map)||void 0===l?void 0:l.call(p,(e=>{var t,l,o,r;return(null===e||void 0===e||null===(t=e.split)||void 0===t||null===(l=t.call(e,"-"))||void 0===l||null===(o=l[1])||void 0===o||null===(r=o.trim)||void 0===r?void 0:r.call(o))||null})):null,author:JSON.parse(localStorage.getItem("userInfo")).displayName,UserId:JSON.parse(localStorage.getItem("userInfo")).UserId,creatorEmail:JSON.parse(localStorage.getItem("userInfo")).email,StudioId:z&&(null===z||void 0===z||null===(o=z.split)||void 0===o||null===(s=o.call(z,":"))||void 0===s||null===(i=s[1])||void 0===i||null===(u=i.trim)||void 0===u?void 0:u.call(i))||null,duration:e.target.duration.value,durationUnit:M,level:W,time:H,date:X.format("YYYY-MM-DD"),price:e.target.workshopFees.value,venue:e.target.workshopVenue.value,description:e.target.description.value,city:G,active:!0};le(!0);const v=await(0,a.ET)((0,a.hJ)(r.db,n.Ul.COURSES),x);h(v.id),d((e=>[...e,{id:v.id,...x}]));const m=(0,a.JU)(r.db,"User",JSON.parse(localStorage.getItem("userInfo")).UserId),b=await(0,a.QT)(m);b.exists()&&null!=b.data()&&await(0,a.r7)(m,{CourseCreated:[...b.data().CourseCreated,v.id]}),ne(t),(async()=>{const e=(0,a.IO)((0,a.hJ)(r.db,n.i0.DRAFT_COURSES),(0,a.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),t=await(0,a.PL)(e);if(!t.empty){let e=[];t.forEach((t=>{e.push({id:t.id,...t.data()})}));let l=e[0];const o=(0,a.JU)(r.db,n.i0.DRAFT_COURSES,l.id);await(0,a.oe)(o)}})(),c("Course successfully added.","success"),re((e=>e+1))}catch(x){console.error("Error adding workshop: ",x),c((null===x||void 0===x?void 0:x.message)||"Something went wrong","error")}finally{le(!1)}else c("Please fill all the fields.","error")},style:{backgroundColor:x?"#202020":"",color:x?"white":"black"},children:(0,R.jsx)(m.Z.Group,{controlId:"formBasicAdd",children:(0,R.jsxs)("div",{children:[(0,R.jsxs)(b.Z,{children:[(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Couese Name"}),(0,R.jsx)(m.Z.Control,{rows:1,style:{backgroundColor:x?"#333333":"",color:x?"white":"black"},type:"textarea",placeholder:"Enter course name",name:"name"})]}),(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Dance Styles"}),(0,R.jsxs)(k.Z,{theme:ae,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:x?"#333333":"",color:x?"white":"black"},multiple:!0,id:"tags-standard",options:T,value:N,onChange:(e,t)=>{A(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select Dance Styles",style:{backgroundColor:x?"#333333":"",color:x?"white":"black"}})})]})]})]}),(0,R.jsx)("br",{}),(0,R.jsxs)(b.Z,{children:[(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Names of Instructors"}),(0,R.jsxs)(k.Z,{theme:ae,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:x?"#333333":"",color:x?"white":"black"},multiple:!0,id:"tags-standard",options:F,value:p,onChange:(e,t)=>{v(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select Instructors",style:{backgroundColor:x?"#333333":"",color:x?"white":"black"}})})]})]}),(0,R.jsx)(j.Z,{md:6,children:(0,R.jsxs)(b.Z,{children:[(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Duration"}),(0,R.jsx)(m.Z.Control,{rows:1,style:{backgroundColor:x?"#333333":"",color:x?"white":"black"},type:"number",placeholder:"Enter Duration",name:"duration"})]}),(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Duration In Units"}),(0,R.jsxs)(k.Z,{theme:ae,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:x?"#333333":"",color:x?"white":"black"},id:"tags-standard",options:["Months","Weeks","Days"],value:M,onChange:(e,t)=>{Y(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select Duration In Units",style:{backgroundColor:x?"#333333":"",color:x?"white":"black"}})})]})]})]})})]}),(0,R.jsx)("br",{}),(0,R.jsxs)(b.Z,{children:[(0,R.jsx)(j.Z,{md:6,children:(0,R.jsx)(L.Z,{defaultTime:H||"00:00-00:00",handleSelect:(e,t)=>{const[l,o]=H.split(" - ");let r=`${l} - ${o}`;null!==e&&(r=`${e} - ${o}`),null!==t&&(r=`${l} - ${t}`),K(r)}})}),(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Course Start Date"}),(0,R.jsx)(E._,{dateAdapter:D.y,children:(0,R.jsx)(U.C,{components:["DatePicker"],children:(0,R.jsxs)(k.Z,{theme:ae,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(I.M,{sx:{width:"100%"},value:X,onChange:e=>ee(e)})]})})})]})]}),(0,R.jsx)("br",{}),(0,R.jsxs)(b.Z,{children:[(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Level"}),(0,R.jsxs)(k.Z,{theme:ae,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:x?"#333333":"",color:x?"white":"black"},id:"tags-standard",options:[n.zq.ALL,n.zq.BEGINNERS,n.zq.INTERMEDIATE,n.zq.ADVANCED],value:W,onChange:(e,t)=>{q(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select Level",style:{backgroundColor:x?"#333333":"",color:x?"white":"black"}})})]})]}),(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Fees/Price"}),(0,R.jsx)(m.Z.Control,{rows:1,style:{backgroundColor:x?"#333333":"",color:x?"white":"black"},type:"number",placeholder:"Enter fees/price",name:"workshopFees"})]})]}),(0,R.jsx)("br",{}),(0,R.jsxs)(b.Z,{children:[(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Venue"}),(0,R.jsx)(m.Z.Control,{rows:1,style:{backgroundColor:x?"#333333":"",color:x?"white":"black"},type:"text",placeholder:"Enter Venue",name:"workshopVenue"})]}),(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"City"}),(0,R.jsxs)(k.Z,{theme:ae,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:x?"#333333":"",color:x?"white":"black"},id:"tags-standard",options:P.c,value:G,onChange:(e,t)=>{Q(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select City",style:{backgroundColor:x?"#333333":"",color:x?"white":"black"}})})]})]})]}),(0,R.jsx)("br",{}),(0,R.jsxs)(b.Z,{children:[(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Studio"}),(0,R.jsxs)(k.Z,{theme:ae,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:x?"#333333":"",color:x?"white":"black"},id:"tags-standard",options:l,value:z,onChange:(e,t)=>{_(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select Studio",style:{backgroundColor:x?"#333333":"",color:x?"white":"black"}})})]})]}),(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Brief Description"}),(0,R.jsx)(m.Z.Control,{rows:3,style:{backgroundColor:x?"#333333":"",color:x?"white":"black"},as:"textarea",placeholder:"Enter Description",name:"description"})]})]}),(0,R.jsx)("hr",{}),(0,R.jsxs)(b.Z,{children:[(0,R.jsx)(j.Z,{xs:6}),(0,R.jsx)(j.Z,{xs:6,className:"d-flex justify-content-end",children:(0,R.jsx)(g.Z,{variant:"contained",style:{color:"white",backgroundColor:x?"#892cdc":"black"},type:"submit",disabled:te,children:"Next"})})]})]})})}),2===oe&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(b.Z,{children:(0,R.jsx)(j.Z,{children:(0,R.jsx)(Z.Z,{entityId:u,title:"Course Images",storageFolder:n.Rb.COURSEICON,maxImageCount:1})})}),(0,R.jsx)(b.Z,{style:{margin:"1rem 0"},children:(0,R.jsx)(j.Z,{style:{textAlign:"right"},children:(0,R.jsx)(g.Z,{variant:"contained",style:{color:"white",backgroundColor:x?"#892cdc":"black"},onClick:()=>re((e=>e-1)),children:"Done"})})})]})]})};const F=function(e){let{workshopId:t,instructors:l,studioId:d}=e;const c=localStorage.getItem("filterLocation")||"",u=(0,J.D)(),[h,x]=(0,o.useState)(null),[p,v]=(0,o.useState)([]),N=S.W,[A,F]=(0,o.useState)([]),T=(0,s.v9)(i.w),[$,B]=(0,o.useState)(""),[V,M]=(0,o.useState)(""),[Y,z]=(0,o.useState)(c),[_,W]=(0,o.useState)(""),[q,G]=(0,o.useState)(O()(new Date)),[Q,H]=(0,o.useState)(!1),K=l.map((e=>`${e.name} - ${e.id}`)),X=(0,C.Z)({palette:{mode:T?"dark":"light"}}),[ee,te]=(0,o.useState)(""),[le,oe]=(0,o.useState)(null),re=e=>{e.reset(),F([]),v([]),x(null),B(""),M(""),W(""),G(O()(new Date)),z(""),oe(null),te("")};return(0,o.useEffect)((()=>{if(le){const e=l.filter((e=>le.instructors.includes(e.id))).map((e=>`${e.name} - ${e.id}`));if(v(e),le&&le.danceStyles&&F(le.danceStyles),le&&le.durationUnit&&B(le.durationUnit),le&&le.level&&M(le.level),le&&le.time&&W(le.time),le&&le.date&&G(O()(le.date)),le&&le.StudioId){const e=d.map((e=>e.split(":")[1].trim())).findIndex((e=>e===le.StudioId));x(d[e]||null)}z((null===le||void 0===le?void 0:le.city)||"")}}),[le]),(0,R.jsxs)("div",{style:{backgroundColor:T?"#202020":"",color:T?"white":"black"},children:[(0,R.jsx)("br",{}),(0,R.jsx)(m.Z,{id:"updateStudioForm",onSubmit:async e=>{e.preventDefault();const t=e.target;if(ee)if((e=>{let t=!0;return e.name.value&&e.workshopVenue.value&&e.workshopFees.value&&e.duration.value&&e.description.value&&null!==A&&void 0!==A&&A.length&&null!==p&&void 0!==p&&p.length&&h&&$&&V&&_&&q&&Y||(t=!1),t})(t)){try{var l,o,s,i,d;const e={name:t.name.value,duration:t.duration.value,price:t.workshopFees.value,venue:t.workshopVenue.value,description:t.description.value,danceStyles:A,instructors:p?null===p||void 0===p||null===(l=p.map)||void 0===l?void 0:l.call(p,(e=>{var t,l,o,r;return(null===e||void 0===e||null===(t=e.split)||void 0===t||null===(l=t.call(e,"-"))||void 0===l||null===(o=l[1])||void 0===o||null===(r=o.trim)||void 0===r?void 0:r.call(o))||null})):null,author:JSON.parse(localStorage.getItem("userInfo")).displayName,UserId:JSON.parse(localStorage.getItem("userInfo")).UserId,creatorEmail:JSON.parse(localStorage.getItem("userInfo")).email,StudioId:h&&(null===h||void 0===h||null===(o=h.split)||void 0===o||null===(s=o.call(h,":"))||void 0===s||null===(i=s[1])||void 0===i||null===(d=i.trim)||void 0===d?void 0:d.call(i))||null,durationUnit:$,level:V,time:_,date:q.format("YYYY-MM-DD"),city:Y};H(!0);const c=(0,a.JU)(r.db,n.Ul.COURSES,ee);await(0,a.r7)(c,e),re(t),u("Open class successfully updated.","success")}catch(c){console.error("Error updating workshop: ",c),u((null===c||void 0===c?void 0:c.message)||"Something went wrong","error")}finally{H(!1)}document.getElementById("updateStudioForm").reset()}else u("Please fill all the fields.","error")},children:(0,R.jsxs)(m.Z.Group,{controlId:"formBasicUpdate",children:[(0,R.jsx)(m.Z.Label,{children:"Id"}),(0,R.jsxs)(m.Z.Control,{as:"select",name:"nameId",style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},onChange:async e=>{e.preventDefault();const t=e.target.value.split(":").pop().trim();te(t);try{const e=await(0,a.QT)((0,a.JU)(r.db,n.Ul.COURSES,t));e.exists?oe(e.data()):oe(null)}catch(l){console.error("Error fetching workshop data:",l,t)}},children:[(0,R.jsx)("option",{value:"",children:"Select a course..."}),t&&t.length>0?t.map((e=>(0,R.jsx)("option",{value:e,children:e},e))):(0,R.jsx)("option",{value:"",children:"No course yet!"})]}),(0,R.jsxs)("div",{children:[(0,R.jsxs)(b.Z,{children:[(0,R.jsx)(j.Z,{md:6,children:(0,R.jsx)(Z.Z,{entityId:ee,title:"Course Images",storageFolder:n.Rb.COURSEICON,maxImageCount:1})}),(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)("br",{}),(0,R.jsx)(m.Z.Label,{children:"Course Name"}),(0,R.jsx)(m.Z.Control,{rows:1,defaultValue:le?le.name:"",style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},type:"textarea",placeholder:"Enter course name",name:"name"}),(0,R.jsx)("br",{}),(0,R.jsx)(m.Z.Label,{children:"Dance Styles"}),(0,R.jsxs)(k.Z,{theme:X,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},multiple:!0,id:"tags-standard",options:N,value:A,onChange:(e,t)=>{F(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select Dance Styles",style:{backgroundColor:T?"#333333":"",color:T?"white":"black"}})})]}),(0,R.jsx)("br",{}),(0,R.jsx)(m.Z.Label,{children:"Names of Instructors"}),(0,R.jsxs)(k.Z,{theme:X,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},multiple:!0,id:"tags-standard",options:K,value:p,onChange:(e,t)=>{v(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select Instructors",style:{backgroundColor:T?"#333333":"",color:T?"white":"black"}})})]})]})]}),(0,R.jsx)("br",{}),(0,R.jsxs)(b.Z,{children:[(0,R.jsx)(j.Z,{md:6,children:(0,R.jsxs)(b.Z,{children:[(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Duration"}),(0,R.jsx)(m.Z.Control,{defaultValue:le?le.duration:"",rows:1,style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},type:"number",placeholder:"Enter Duration",name:"duration"})]}),(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Duration In Units"}),(0,R.jsxs)(k.Z,{theme:X,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},id:"tags-standard",options:["Months","Weeks","Days"],value:$,onChange:(e,t)=>{B(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select Duration In Units",style:{backgroundColor:T?"#333333":"",color:T?"white":"black"}})})]})]})]})}),(0,R.jsx)(j.Z,{md:6,children:(0,R.jsx)(L.Z,{defaultTime:_||"00:00-00:00",handleSelect:(e,t)=>{const[l,o]=_.split(" - ");let r=`${l} - ${o}`;null!==e&&(r=`${e} - ${o}`),null!==t&&(r=`${l} - ${t}`),W(r)}})})]}),(0,R.jsx)("br",{}),(0,R.jsxs)(b.Z,{children:[(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Course Start Date"}),(0,R.jsx)(E._,{dateAdapter:D.y,children:(0,R.jsx)(U.C,{components:["DatePicker"],children:(0,R.jsxs)(k.Z,{theme:X,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(I.M,{sx:{width:"100%"},value:q,onChange:e=>G(e)})]})})})]}),(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Level"}),(0,R.jsxs)(k.Z,{theme:X,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},id:"tags-standard",options:[n.zq.ALL,n.zq.BEGINNERS,n.zq.INTERMEDIATE,n.zq.ADVANCED],value:V,onChange:(e,t)=>{M(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select Level",style:{backgroundColor:T?"#333333":"",color:T?"white":"black"}})})]})]})]}),(0,R.jsx)("br",{}),(0,R.jsxs)(b.Z,{children:[(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Fees/Price"}),(0,R.jsx)(m.Z.Control,{rows:1,defaultValue:le?le.price:"",style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},type:"number",placeholder:"Enter fees/price",name:"workshopFees"})]}),(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Venue"}),(0,R.jsx)(m.Z.Control,{rows:1,defaultValue:le?le.venue:"",style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},type:"text",placeholder:"Enter Venue",name:"workshopVenue"})]})]}),(0,R.jsx)("br",{}),(0,R.jsxs)(b.Z,{children:[(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"City"}),(0,R.jsxs)(k.Z,{theme:X,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},id:"tags-standard",options:P.c,value:Y,onChange:(e,t)=>{z(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select City",style:{backgroundColor:T?"#333333":"",color:T?"white":"black"}})})]})]}),(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Studio"}),(0,R.jsxs)(k.Z,{theme:X,children:[(0,R.jsx)(f.ZP,{}),(0,R.jsx)(w.Z,{style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},id:"tags-standard",options:d,value:h,onChange:(e,t)=>{x(t)},renderInput:e=>(0,R.jsx)(y.Z,{...e,variant:"standard",placeholder:"Select Studio",style:{backgroundColor:T?"#333333":"",color:T?"white":"black"}})})]})]})]}),(0,R.jsx)("br",{}),(0,R.jsx)(b.Z,{children:(0,R.jsxs)(j.Z,{md:6,children:[(0,R.jsx)(m.Z.Label,{children:"Brief Description"}),(0,R.jsx)(m.Z.Control,{rows:3,defaultValue:le?le.description:"",style:{backgroundColor:T?"#333333":"",color:T?"white":"black"},as:"textarea",placeholder:"Enter Description",name:"description"})]})}),(0,R.jsx)("hr",{}),(0,R.jsxs)(b.Z,{children:[(0,R.jsx)(j.Z,{xs:6}),(0,R.jsx)(j.Z,{xs:6,className:"d-flex justify-content-end",children:(0,R.jsx)(g.Z,{variant:"contained",style:{color:"white",backgroundColor:T?"#892cdc":"black"},type:"submit",disabled:Q,children:"Update Course"})})]})]})]})})]})};const T=function(){const[e,t]=(0,o.useState)([]),[l,m]=(0,o.useState)([]),[b,j]=(0,o.useState)([]),g=(0,s.v9)(i.w),[Z,S]=(0,o.useState)([]),[w,y]=(0,o.useState)(!1),[C,k]=(0,o.useState)(-1),{currentUser:f}=(0,d.a)(),[I,U]=o.useState("1");return(0,o.useEffect)((()=>{(async e=>{try{const e=(0,a.JU)(r.db,"User",f.uid),t=await(0,a.QT)(e);t.exists()&&null!=t.data()&&(y(t.data().CreatorMode),k(t.data().isPremium))}catch(t){console.log(" error")}})()}),[w]),(0,o.useEffect)((()=>{(async()=>{let e=null;if(JSON.parse(localStorage.getItem("userInfo"))&&JSON.parse(localStorage.getItem("userInfo")).UserId&&(e=JSON.parse(localStorage.getItem("userInfo")).UserId),!e)return void alert("User not found");const t=(0,a.hJ)(r.db,n.Ul.INSTRUCTORS),l=(0,a.IO)(t,(0,a.ar)("createdBy","==",e)),o=await(0,a.PL)(l),s=[];o.forEach((e=>{s.push({id:e.id,name:e.data().name})})),S(s)})()}),[]),(0,o.useEffect)((()=>{(async()=>{const e=(0,a.IO)((0,a.hJ)(r.db,n.Ul.STUDIO),(0,a.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),l=(await(0,a.PL)(e)).docs.filter((e=>e.data().studioName)).map((e=>{const t=e.data();return{id:e.id,...t}}));t(l.map((e=>String(e.studioName)+" :"+String(e.id))))})()}),[]),(0,o.useEffect)((()=>{(async()=>{const e=(0,a.IO)((0,a.hJ)(r.db,n.Ul.COURSES),(0,a.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),t=(await(0,a.PL)(e)).docs.filter((e=>e.data().name)).map((e=>{const t=e.data();return{id:e.id,...t}})).map((async e=>{const t=(0,a.JU)(r.db,n.Ul.STUDIO,null===e||void 0===e?void 0:e.StudioId),l=await(0,a.QT)(t);return{...e,studioDetails:l.data()}})),l=await Promise.all(t);localStorage.setItem("CourseCreated",JSON.stringify(l)),m(l),j(l.map((e=>String(e.name)+" :"+String(e.id))))})()}),[m]),(0,o.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("CourseCreated"))||[];m(e);const t=e.map((e=>`${e.name} : ${e.id}`));j(t)}),[j]),(0,R.jsxs)("div",{children:[(0,R.jsx)("br",{}),w?(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(p.Z,{sx:{width:"100%",typography:"body1"},children:(0,R.jsxs)(u.ZP,{value:I,children:[(0,R.jsx)(p.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,R.jsxs)(h.Z,{style:{color:g?"white":"black"},onChange:(e,t)=>{U(t)},"aria-label":"lab API tabs example",children:[(0,R.jsx)(c.Z,{style:{color:g?"white":"black"},label:"Add Course",value:"1"}),(0,R.jsx)(c.Z,{style:{color:g?"white":"black"},label:"Update Course",value:"2"})]})}),(0,R.jsx)(x.Z,{value:"1",children:(0,R.jsx)(A,{instructors:Z,studioId:e,setCourses:m})}),(0,R.jsx)(x.Z,{value:"2",children:(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(F,{instructors:Z,workshopId:b,studioId:e})})})]})})}):"",l.length>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("h3",{style:{color:g?"white":"black"},children:"Your Courses"}),(0,R.jsx)(v.Z,{dataList:l,activateCourse:async e=>{try{const t=(0,a.JU)(r.db,n.Ul.COURSES,e);await(0,a.r7)(t,{active:!0}),m((t=>t.map((t=>t.id===e?{...t,active:!0}:t))))}catch(t){console.error(t)}},deactivateCourse:async e=>{try{const t=(0,a.JU)(r.db,n.Ul.COURSES,e);await(0,a.r7)(t,{active:!1}),m((t=>t.map((t=>t.id===e?{...t,active:!1}:t))))}catch(t){console.error(t)}},actionsAllowed:!0})]})]})}},11518:()=>{},10884:(e,t,l)=>{e.exports=l.p+"static/media/india_11009487.98ac2ba43166eaa84593.png"},49071:(e,t,l)=>{e.exports=l.p+"static/media/whatsapp.8d81ece5885274edfd73.png"}}]);
//# sourceMappingURL=763.66cb8c02.chunk.js.map