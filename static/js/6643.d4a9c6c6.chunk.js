"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[6643],{707:(e,l,t)=>{t.d(l,{Z:()=>E});t(11518);var a=t(72791),o=t(92552),s=t(84654),r=t(28658),n=t(69597),i=t(83168),d=t(88447),c=t(697),u=t(61889),h=t(20890),p=t(94294),x=t(13400),m=t(36314),v=t(59434),b=t(83708),j=t(68449),g=t(60717),S=t(97892),y=t.n(S),Z=t(10159),C=t(12481),w=t(75424),k=t(49071),f=t(10884),I=t(80184);function N(e){var l,t,o,s,r,n;let{open:i,handleClose:m,dataItem:j,activateOpenClass:S,deactivateOpenClass:N,actionsAllowed:O}=e;const E=(0,w.D)(),L=(0,v.v9)(g.w),[D,U]=(0,a.useState)(!1),[P,A]=(0,a.useState)(null),J=null===(l=JSON.parse(localStorage.getItem("userInfo")))||void 0===l?void 0:l.UserId,T=j.UserId===J;(0,a.useEffect)((()=>{(async()=>{try{const e=(0,C.JU)(Z.db,"User",J),l=await(0,C.QT)(e);l.exists()&&A(l.data())}catch(e){console.log(" error")}})()}),[]);const $=encodeURIComponent("Hey, I found your Studio on nritya.co.in. I'm interested"),_=null===P||void 0===P||null===(t=P.BookedOpenClasses)||void 0===t||null===(o=t.includes)||void 0===o?void 0:o.call(t,null===j||void 0===j?void 0:j.id);return(0,I.jsx)(d.Z,{open:i,onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,I.jsxs)(c.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"90%",overflow:"auto",width:{xs:"90%",md:"60%"},bgcolor:L?"black":"background.paper",borderWidth:"2px",borderStyle:"solid",borderColor:L?"white":"black",boxShadow:24,p:"1rem",borderRadius:"8px"},children:[(0,I.jsxs)(u.ZP,{container:!0,spacing:"8px",rowGap:3,children:[(0,I.jsx)(u.ZP,{item:!0,xs:12,lg:8,sx:{minHeight:"300px"},children:(0,I.jsx)("img",{src:j.imageUrl,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:"8px"}})}),(0,I.jsxs)(u.ZP,{item:!0,xs:12,lg:4,children:[(0,I.jsxs)(c.Z,{sx:{height:"100%",bgcolor:L?"#333333":"#efefef",p:2,borderRadius:"8px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,I.jsxs)(c.Z,{sx:{flex:1},children:[(0,I.jsx)(h.Z,{variant:"h6",component:"p",sx:{color:L?"white":"black"},children:y()(j.date).format("LL")}),(0,I.jsx)(h.Z,{variant:"h6",component:"p",sx:{color:L?"white":"black"},children:j.time}),(0,I.jsx)(h.Z,{variant:"body1",component:"p",sx:{mt:"2rem",color:L?"white":"black"},children:j.venue})]}),(0,I.jsx)(c.Z,{sx:{mt:"2rem",textAlign:"right"},children:!O&&!T&&J&&(0,I.jsx)(p.Z,{variant:"outlined",onClick:async()=>{try{U(!0),(0,C.ET)((0,C.hJ)(Z.db,b.Ul.BOOKINGS),{StudioId:j.StudioId,OpenClassId:j.id,UserId:J,bookingDate:Date.now()});const e=(0,C.JU)(Z.db,"User",J),l=await(0,C.QT)(e);l.exists()&&null!=l.data()&&await(0,C.r7)(e,{BookedOpenClasses:[...l.data().BookedOpenClasses||[],j.id]}),A((e=>({...e,BookedOpenClasses:[...(null===e||void 0===e?void 0:e.BookedOpenClasses)||[],j.id]}))),E("Open class booked","success")}catch(e){console.error(e),E((null===e||void 0===e?void 0:e.message)||"Something went wrong","error")}finally{U(!1)}},disabled:_||D,sx:{boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"transparent",borderColor:L?"white":"black",color:L?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:L?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:L?"white":"black"},"&:focus":{boxShadow:"none"}},children:_?"Booked":"Book Now"})})]}),!O&&!T&&J&&(0,I.jsx)(h.Z,{component:"p",variant:"caption",sx:{my:"2px",color:L?"white":"black",textAlign:"center"},children:"Book your spot"})]}),(0,I.jsxs)(u.ZP,{item:!0,sx:{mt:1},children:[(0,I.jsxs)(h.Z,{variant:"h5",component:"p",sx:{color:L?"white":"black"},children:[j.openClassName||"",j.danceStyles.map((e=>` | ${e}`))]}),(0,I.jsxs)(h.Z,{variant:"body1",component:"p",sx:{mt:1,color:L?"white":"black"},children:[(0,I.jsxs)("span",{children:["By ",(null===(s=j.studioDetails)||void 0===s?void 0:s.studioName)||""]}),j.studioDetails&&(null===(r=j.studioDetails)||void 0===r?void 0:r.whatsappNumber)&&(0,I.jsx)(x.Z,{color:"success",size:"small",target:"_blank",href:`https://wa.me/91${j.studioDetails.whatsappNumber}?text=${$}`,children:(0,I.jsx)("img",{src:k,alt:"Whatsapp call",style:{width:30,height:28}})}),j.studioDetails&&(null===(n=j.studioDetails)||void 0===n?void 0:n.mobileNumber)&&(0,I.jsx)(x.Z,{color:"primary",size:"small",target:"_blank",href:`tel:${j.studioDetails.mobileNumber}`,children:(0,I.jsx)("img",{src:f,alt:"Phone call",style:{width:30,height:28}})})]}),(0,I.jsx)(h.Z,{variant:"body1",component:"p",sx:{mt:2,color:L?"white":"black"},children:j.description||""})]})]}),(0,I.jsxs)(c.Z,{sx:{mt:"1rem",textAlign:"right"},children:[O&&T&&(0,I.jsx)(p.Z,{onClick:()=>null!==j&&void 0!==j&&j.active?N(null===j||void 0===j?void 0:j.id):S(null===j||void 0===j?void 0:j.id),variant:"outlined",sx:{mr:"1rem",color:"white",boxShadow:"none",border:"1px solid",backgroundColor:null!==j&&void 0!==j&&j.active?"red":"green",borderColor:"white",color:"white","&:hover":{backgroundColor:null!==j&&void 0!==j&&j.active?"red":"green",borderColor:"white",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:null!==j&&void 0!==j&&j.active?"red":"green",borderColor:"white"},"&:focus":{boxShadow:"none"}},children:null!==j&&void 0!==j&&j.active?"Deactivate":"Activate"}),(0,I.jsx)(p.Z,{onClick:m,variant:"outlined",sx:{color:"white",boxShadow:"none",border:"1px solid",backgroundColor:"transparent",borderColor:L?"white":"black",color:L?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:L?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:L?"white":"black"},"&:focus":{boxShadow:"none"}},children:"Close"})]})]})})}function O(e){var l;let{dataItem:t,activateOpenClass:d,deactivateOpenClass:u,actionsAllowed:h}=e;const p=(0,v.v9)(g.w),[x,S]=(0,a.useState)(null),[y,Z]=(0,a.useState)(!1),C=t.id;(0,a.useEffect)((()=>{(async()=>{try{const e=await(0,j.Us)(b.Rb.OPENCLASSICON,C);S(e||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}catch(e){console.error("Error fetching image URL:",e)}})()}),[t.id]);const w={backgroundColor:p?"#444":"white",padding:"0px",color:p?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(s.Z,{variant:"solid",sx:{...w,"&:hover":{transform:"scale(1.01)",cursor:"pointer"},flex:"none"},onClick:()=>Z(!0),children:[(0,I.jsxs)(o.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,I.jsx)("img",{src:x,loading:"lazy",alt:"Studio Image",style:{maxWidth:"100%",objectFit:"cover",overflow:"hidden"}}),(0,I.jsx)(m.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:t&&t.danceStyles?t.danceStyles.slice(0,3).map(((e,l)=>(0,I.jsx)(n.Z,{color:l%2===0?"danger":"success",style:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem"},children:e.trim()},l))):(0,I.jsx)(n.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)})]}),(0,I.jsxs)(r.Z,{style:{padding:"10px",paddingTop:"5px"},children:[(0,I.jsxs)(c.Z,{fontWeight:"md",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,style:{color:p?"white":"black",extDecoder:"one"},children:[(0,I.jsx)("span",{children:t&&t.openClassName?t.openClassName:""}),!(null!==t&&void 0!==t&&t.active)&&(0,I.jsx)("span",{style:{marginLeft:"2px",padding:"2px 4px",fontSize:"14px",borderRadius:"4px",background:"red"},children:"Inactive"})]}),(0,I.jsxs)(i.ZP,{style:{color:p?"white":"black"},level:"body-xs",noWrap:!0,children:["By ",null!==(l=t.studioDetails)&&void 0!==l&&l.studioName?t.studioDetails.studioName:""]}),(0,I.jsx)(i.ZP,{style:{marginTop:10,color:p?"white":"black"},level:"body-xs",noWrap:!0,children:t.venue?t.venue:""}),(0,I.jsxs)(i.ZP,{style:{color:p?"white":"black"},level:"body-xs",children:[t.date||""," | ",t.time||""]})]})]}),(0,I.jsx)(N,{dataItem:{...t,imageUrl:x},open:y,handleClose:()=>Z(!1),activateOpenClass:d,deactivateOpenClass:u,actionsAllowed:h})]})}const E=e=>{let{dataList:l,deleteOpenClass:t,actionsAllowed:a,activateOpenClass:o,deactivateOpenClass:s}=e;return(0,I.jsx)("div",{className:"horizontal-scroll-wrapper",children:l.map(((e,l)=>(0,I.jsx)(O,{dataItem:e,activateOpenClass:o,deactivateOpenClass:s,actionsAllowed:a},e.id)))})}},26073:(e,l,t)=>{t.d(l,{Z:()=>d});t(72791);var a=t(89743),o=t(2677),s=t(13855),r=t(59434),n=t(60717),i=t(80184);const d=e=>{var l;let{defaultTime:t,handleSelect:d}=e;const c=t.split("-")[0].trim(),u=null===(l=t.split("-")[1])||void 0===l?void 0:l.trim(),h=(0,r.v9)(n.w),p=e=>{const l=(()=>{const e=[];let l=[],t=[];for(let a=0;a<24;a++)for(let e=0;e<60;e+=30){const o=a.toString().padStart(2,"0"),s=e.toString().padStart(2,"0"),r=`${o}:${s}`;if(a<12)l.push(`${r} AM`);else{const e=(a-12).toString().padStart(2,"0");t.push(`${e}:${s} PM`)}}for(let a=0;a<l.length||a<t.length;a++)a<l.length&&e.push(l[a]),a<t.length&&e.push(t[a]);return e})();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("option",{value:e,children:e}),l.map((e=>(0,i.jsx)("option",{value:e,children:e},e)))]})};return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(o.Z,{children:(0,i.jsxs)(s.Z.Group,{children:[(0,i.jsx)(s.Z.Label,{children:"Start Time"}),(0,i.jsx)(s.Z.Control,{as:"select",onChange:e=>d(e.target.value,null),style:{background:"transparent",borderWidth:1,borderColor:h?"white":"black"},children:p(c)})]})}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(s.Z.Group,{children:[(0,i.jsx)(s.Z.Label,{children:"End Time"}),(0,i.jsx)(s.Z.Control,{as:"select",onChange:e=>d(null,e.target.value),style:{background:"transparent",borderWidth:1,borderColor:h?"white":"black"},children:p(u)})]})})]})}},26643:(e,l,t)=>{t.r(l),t.d(l,{default:()=>_});var a=t(72791),o=t(10159),s=t(12481),r=t(83708),n=t(59434),i=t(60717),d=t(61224),c=t(43896),u=t(83449),h=t(47283),p=t(82851),x=t(697),m=t(13855),v=t(89743),b=t(2677),j=t(94294),g=t(81018),S=t(51650),y=t(49644),Z=t(76989),C=t(67107),w=t(44507),k=t(4708),f=t(63237),I=t(4560),N=t(24750),O=t(71652),E=t(97892),L=t.n(E),D=t(26073),U=t(75424),P=t(82873),A=t(80184);const J=function(e){let{instructors:l,studioId:t,setOpenClass:d}=e;const c=(0,U.D)(),[u,h]=(0,a.useState)(""),p=(0,n.v9)(i.w),[x,E]=(0,a.useState)([]),[J,T]=(0,a.useState)([]),$=l.map((e=>`${e.name} - ${e.id}`)),_=S.W,B=localStorage.getItem("filterLocation")||"",[R,F]=(0,a.useState)(!1),[Y,M]=(0,a.useState)(""),[z,V]=(0,a.useState)(null),[W,q]=(0,a.useState)(""),[G,Q]=(0,a.useState)(B),[H,K]=(0,a.useState)(""),[X,ee]=(0,a.useState)(L()(new Date)),[le,te]=(0,a.useState)(!1),[ae,oe]=(0,a.useState)(1),se=(0,C.Z)({palette:{mode:p?"dark":"light"}}),re=e=>{e.reset(),T([]),E([]),V(null),M(""),q(""),K(""),ee(L()(new Date)),Q("")};return(0,a.useEffect)((()=>{!async function(){const e=document.getElementById("addStudioForm");try{const v=(0,s.IO)((0,s.hJ)(o.db,r.i0.DRAFT_OPEN_CLASSES),(0,s.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),b=await(0,s.PL)(v);if(b.empty){var a,n,i,d,c,u,h,p;await(0,s.ET)((0,s.hJ)(o.db,r.i0.DRAFT_OPEN_CLASSES),{openClassName:(null===(a=e.openClassName)||void 0===a?void 0:a.value)||"",capacity:(null===(n=e.capacity)||void 0===n?void 0:n.value)||0,description:(null===(i=e.description)||void 0===i?void 0:i.value)||"",danceStyles:J,instructors:x?null===x||void 0===x||null===(d=x.map)||void 0===d?void 0:d.call(x,(e=>{var l,t,a,o;return(null===e||void 0===e||null===(l=e.split)||void 0===l||null===(t=l.call(e,"-"))||void 0===t||null===(a=t[1])||void 0===a||null===(o=a.trim)||void 0===o?void 0:o.call(a))||null})):null,author:JSON.parse(localStorage.getItem("userInfo")).displayName,UserId:JSON.parse(localStorage.getItem("userInfo")).UserId,creatorEmail:JSON.parse(localStorage.getItem("userInfo")).email,StudioId:z&&(null===z||void 0===z||null===(c=z.split)||void 0===c||null===(u=c.call(z,":"))||void 0===u||null===(h=u[1])||void 0===h||null===(p=h.trim)||void 0===p?void 0:p.call(h))||null,duration:Y,level:W,time:H,date:X.format("YYYY-MM-DD"),city:G})}else{var m;let a=[];b.forEach((e=>{a.push({id:e.id,...e.data()})}));let o=a[0];e.openClassName.value=(null===o||void 0===o?void 0:o.openClassName)||"",e.capacity.value=(null===o||void 0===o?void 0:o.capacity)||0,e.description.value=(null===o||void 0===o?void 0:o.description)||"",T(null!==o&&void 0!==o&&null!==(m=o.danceStyles)&&void 0!==m&&m.length?o.danceStyles:[]),E(l.filter((e=>null===o||void 0===o?void 0:o.instructors.includes(e.id))).map((e=>`${e.name} - ${e.id}`)));const s=t.map((e=>e.split(":")[1].trim())).findIndex((e=>e===(null===o||void 0===o?void 0:o.StudioId)));s>0&&V(t[s]),M((null===o||void 0===o?void 0:o.duration)||""),q((null===o||void 0===o?void 0:o.level)||""),K((null===o||void 0===o?void 0:o.time)||""),ee(L()((null===o||void 0===o?void 0:o.date)||Date.now())),Q((null===o||void 0===o?void 0:o.city)||"")}F(!0)}catch(v){console.error(v)}}()}),[]),(0,a.useEffect)((()=>{let e=null;return R&&async function(){const l=document.getElementById("addStudioForm");try{const t=(0,s.IO)((0,s.hJ)(o.db,r.i0.DRAFT_OPEN_CLASSES),(0,s.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),a=await(0,s.PL)(t);if(!a.empty){let t=[];a.forEach((e=>{t.push({id:e.id,...e.data()})}));let n=t[0];const i=(0,s.JU)(o.db,r.i0.DRAFT_OPEN_CLASSES,n.id);e=setInterval((async()=>{try{var e,t,a,o,r,n,d,c;await(0,s.r7)(i,{openClassName:(null===(e=l.openClassName)||void 0===e?void 0:e.value)||"",capacity:(null===(t=l.capacity)||void 0===t?void 0:t.value)||0,description:(null===(a=l.description)||void 0===a?void 0:a.value)||"",danceStyles:J,instructors:x?null===x||void 0===x||null===(o=x.map)||void 0===o?void 0:o.call(x,(e=>{var l,t,a,o;return(null===e||void 0===e||null===(l=e.split)||void 0===l||null===(t=l.call(e,"-"))||void 0===t||null===(a=t[1])||void 0===a||null===(o=a.trim)||void 0===o?void 0:o.call(a))||null})):null,StudioId:z&&(null===z||void 0===z||null===(r=z.split)||void 0===r||null===(n=r.call(z,":"))||void 0===n||null===(d=n[1])||void 0===d||null===(c=d.trim)||void 0===c?void 0:c.call(d))||null,duration:Y,level:W,time:H,date:X.format("YYYY-MM-DD"),city:G})}catch(u){console.error(u)}}),1e4)}}catch(t){console.error(t)}}(),()=>clearInterval(e)}),[R,J,x,z,Y,W,H,X,G]),(0,A.jsxs)("div",{children:[1===ae&&(0,A.jsx)(m.Z,{id:"addStudioForm",onSubmit:async e=>{e.preventDefault();const l=e.target;if((e=>{let l=!0;return e.openClassName.value&&e.capacity.value&&e.description.value&&null!==J&&void 0!==J&&J.length&&null!==x&&void 0!==x&&x.length&&z&&Y&&W&&H&&X&&G||(l=!1),l})(l))try{var t,a,n,i,u;const m={openClassName:e.target.openClassName.value,danceStyles:J,instructors:x?null===x||void 0===x||null===(t=x.map)||void 0===t?void 0:t.call(x,(e=>{var l,t,a,o;return(null===e||void 0===e||null===(l=e.split)||void 0===l||null===(t=l.call(e,"-"))||void 0===t||null===(a=t[1])||void 0===a||null===(o=a.trim)||void 0===o?void 0:o.call(a))||null})):null,author:JSON.parse(localStorage.getItem("userInfo")).displayName,UserId:JSON.parse(localStorage.getItem("userInfo")).UserId,creatorEmail:JSON.parse(localStorage.getItem("userInfo")).email,StudioId:z&&(null===z||void 0===z||null===(a=z.split)||void 0===a||null===(n=a.call(z,":"))||void 0===n||null===(i=n[1])||void 0===i||null===(u=i.trim)||void 0===u?void 0:u.call(i))||null,duration:Y,level:W,time:H,date:X.format("YYYY-MM-DD"),capacity:e.target.capacity.value,description:e.target.description.value,city:G,active:!0,youtubeViedoLink:e.target.youtubeViedoLink.value};te(!0);const v=await(0,s.ET)((0,s.hJ)(o.db,r.Ul.OPEN_CLASSES),m);h(v.id),d((e=>[...e,{id:v.id,...m}]));const b=(0,s.JU)(o.db,"User",JSON.parse(localStorage.getItem("userInfo")).UserId),j=await(0,s.QT)(b);var p;if(j.exists())if(null!=j.data())await(0,s.r7)(b,{OpenClassCreated:[...(null===(p=j.data())||void 0===p?void 0:p.OpenClassCreated)||[],v.id]});re(l),(async()=>{const e=(0,s.IO)((0,s.hJ)(o.db,r.i0.DRAFT_OPEN_CLASSES),(0,s.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),l=await(0,s.PL)(e);if(!l.empty){let e=[];l.forEach((l=>{e.push({id:l.id,...l.data()})}));let t=e[0];const a=(0,s.JU)(o.db,r.i0.DRAFT_OPEN_CLASSES,t.id);await(0,s.oe)(a)}})(),c("Open class successfully added.","success"),oe((e=>e+1))}catch(m){console.error("Error adding workshop: ",m),c((null===m||void 0===m?void 0:m.message)||"Something went wrong","error")}finally{te(!1)}else c("Please fill all the fields.","error")},style:{backgroundColor:p?"#202020":"",color:p?"white":"black"},children:(0,A.jsx)(m.Z.Group,{controlId:"formBasicAdd",children:(0,A.jsxs)("div",{children:[(0,A.jsxs)(v.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Open Class Name"}),(0,A.jsx)(m.Z.Control,{rows:1,style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},type:"textarea",placeholder:"Enter open class name",name:"openClassName"})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Dance Styles"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},multiple:!0,id:"tags-standard",options:_,value:J,onChange:(e,l)=>{T(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Dance Styles",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(v.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Names of Instructors"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},multiple:!0,id:"tags-standard",options:$,value:x,onChange:(e,l)=>{E(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Instructors",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Duration (in hours)"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},id:"tags-standard",options:[1,2,3,4,5,6,7,8,9,10,11,12],value:Y,onChange:(e,l)=>{M(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Duration",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(v.Z,{children:[(0,A.jsx)(b.Z,{md:6,children:(0,A.jsx)(D.Z,{defaultTime:H||"00:00-00:00",handleSelect:(e,l)=>{const[t,a]=H.split(" - ");let o=`${t} - ${a}`;null!==e&&(o=`${e} - ${a}`),null!==l&&(o=`${t} - ${l}`),K(o)}})}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Date"}),(0,A.jsx)(O._,{dateAdapter:N.y,children:(0,A.jsx)(I.C,{components:["DatePicker"],children:(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(f.M,{sx:{width:"100%"},value:X,onChange:e=>ee(e)})]})})})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(v.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Level"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},id:"tags-standard",options:[r.zq.ALL,r.zq.BEGINNERS,r.zq.INTERMEDIATE,r.zq.ADVANCED],value:W,onChange:(e,l)=>{q(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Level",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Maximum capacity"}),(0,A.jsx)(m.Z.Control,{rows:1,style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},type:"number",placeholder:"Enter capacity",name:"capacity"})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(v.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"City"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},id:"tags-standard",options:P.c,value:G,onChange:(e,l)=>{Q(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select City",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Studio"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},id:"tags-standard",options:t,value:z,onChange:(e,l)=>{V(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Studio",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(v.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Brief Description"}),(0,A.jsx)(m.Z.Control,{rows:3,style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},as:"textarea",placeholder:"Enter Description",name:"description"})]}),(0,A.jsx)(b.Z,{md:6})]}),(0,A.jsx)(v.Z,{children:(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Youtube video link"}),(0,A.jsx)(m.Z.Control,{rows:1,style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},type:"text",placeholder:"Enter youtube video link",name:"youtubeViedoLink"})]})}),(0,A.jsx)("hr",{}),(0,A.jsxs)(v.Z,{children:[(0,A.jsx)(b.Z,{xs:6}),(0,A.jsx)(b.Z,{xs:6,className:"d-flex justify-content-end",children:(0,A.jsx)(j.Z,{variant:"contained",style:{color:"white",backgroundColor:p?"#892cdc":"black"},type:"submit",disabled:le,children:"Next"})})]})]})})}),2===ae&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(v.Z,{children:(0,A.jsx)(b.Z,{children:(0,A.jsx)(g.Z,{entityId:u,title:"Open Class Images",storageFolder:r.Rb.OPENCLASSICON,maxImageCount:1})})}),(0,A.jsx)(v.Z,{style:{margin:"1rem 0"},children:(0,A.jsx)(b.Z,{style:{textAlign:"right"},children:(0,A.jsx)(j.Z,{variant:"contained",style:{color:"white",backgroundColor:p?"#892cdc":"black"},onClick:()=>oe((e=>e-1)),children:"Done"})})})]})]})};const T=function(e){let{workshopId:l,instructors:t,studioId:d}=e;const c=localStorage.getItem("filterLocation")||"",u=(0,U.D)(),[h,p]=(0,a.useState)(null),[x,E]=(0,a.useState)([]),J=S.W,[T,$]=(0,a.useState)([]),_=(0,n.v9)(i.w),[B,R]=(0,a.useState)(""),[F,Y]=(0,a.useState)(""),[M,z]=(0,a.useState)(c),[V,W]=(0,a.useState)(""),[q,G]=(0,a.useState)(L()(new Date)),[Q,H]=(0,a.useState)(!1),K=t.map((e=>`${e.name} - ${e.id}`)),X=(0,C.Z)({palette:{mode:_?"dark":"light"}}),[ee,le]=(0,a.useState)(""),[te,ae]=(0,a.useState)(null),oe=e=>{e.reset(),$([]),E([]),p(null),R(""),Y(""),W(""),G(L()(new Date)),z(""),ae(null),le("")};return(0,a.useEffect)((()=>{if(te){const e=t.filter((e=>te.instructors.includes(e.id))).map((e=>`${e.name} - ${e.id}`));if(E(e),te&&te.danceStyles&&$(te.danceStyles),te&&te.duration&&R(te.duration),te&&te.level&&Y(te.level),te&&te.time&&W(te.time),te&&te.date&&G(L()(te.date)),te&&te.StudioId){const e=d.map((e=>e.split(":")[1].trim())).findIndex((e=>e===te.StudioId));p(d[e]||null)}z((null===te||void 0===te?void 0:te.city)||"")}}),[te]),(0,A.jsxs)("div",{style:{backgroundColor:_?"#202020":"",color:_?"white":"black"},children:[(0,A.jsx)("br",{}),(0,A.jsx)(m.Z,{id:"updateStudioForm",onSubmit:async e=>{e.preventDefault();const l=e.target;if(ee)if((e=>{let l=!0;return e.openClassName.value&&e.capacity.value&&e.description.value&&null!==T&&void 0!==T&&T.length&&null!==x&&void 0!==x&&x.length&&h&&B&&F&&V&&q&&M||(l=!1),l})(l)){try{var t,a,n,i,d;const e={openClassName:l.openClassName.value,capacity:l.capacity.value,description:l.description.value,danceStyles:T,instructors:x?null===x||void 0===x||null===(t=x.map)||void 0===t?void 0:t.call(x,(e=>{var l,t,a,o;return(null===e||void 0===e||null===(l=e.split)||void 0===l||null===(t=l.call(e,"-"))||void 0===t||null===(a=t[1])||void 0===a||null===(o=a.trim)||void 0===o?void 0:o.call(a))||null})):null,author:JSON.parse(localStorage.getItem("userInfo")).displayName,UserId:JSON.parse(localStorage.getItem("userInfo")).UserId,creatorEmail:JSON.parse(localStorage.getItem("userInfo")).email,StudioId:h&&(null===h||void 0===h||null===(a=h.split)||void 0===a||null===(n=a.call(h,":"))||void 0===n||null===(i=n[1])||void 0===i||null===(d=i.trim)||void 0===d?void 0:d.call(i))||null,duration:B,level:F,time:V,date:q.format("YYYY-MM-DD"),city:M,youtubeViedoLink:l.youtubeViedoLink.value};H(!0);const c=(0,s.JU)(o.db,r.Ul.OPEN_CLASSES,ee);await(0,s.r7)(c,e),oe(l),u("Open class successfully updated.","success")}catch(c){console.error("Error updating workshop: ",c),u((null===c||void 0===c?void 0:c.message)||"Something went wrong","error")}finally{H(!1)}document.getElementById("updateStudioForm").reset()}else u("Please fill all the fields.","error")},children:(0,A.jsxs)(m.Z.Group,{controlId:"formBasicUpdate",children:[(0,A.jsx)(m.Z.Label,{children:"Id"}),(0,A.jsxs)(m.Z.Control,{as:"select",name:"nameId",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},onChange:async e=>{e.preventDefault();const l=e.target.value.split(":").pop().trim();le(l);try{const e=await(0,s.QT)((0,s.JU)(o.db,r.Ul.OPEN_CLASSES,l));e.exists?ae(e.data()):ae(null)}catch(t){console.error("Error fetching workshop data:",t,l)}},children:[(0,A.jsx)("option",{value:"",children:"Select a open class..."}),l&&l.length>0?l.map((e=>(0,A.jsx)("option",{value:e,children:e},e))):(0,A.jsx)("option",{value:"",children:"No open class yet!"})]}),(0,A.jsxs)("div",{children:[(0,A.jsxs)(v.Z,{children:[(0,A.jsx)(b.Z,{md:6,children:(0,A.jsx)(g.Z,{entityId:ee,title:"Open class Images",storageFolder:r.Rb.OPENCLASSICON,maxImageCount:1})}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)("br",{}),(0,A.jsx)(m.Z.Label,{children:"Open Class Name"}),(0,A.jsx)(m.Z.Control,{rows:1,defaultValue:te?te.openClassName:"",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},type:"textarea",placeholder:"Enter open class name",name:"openClassName"}),(0,A.jsx)("br",{}),(0,A.jsx)(m.Z.Label,{children:"Dance Styles"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},multiple:!0,id:"tags-standard",options:J,value:T,onChange:(e,l)=>{$(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Dance Styles",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]}),(0,A.jsx)("br",{}),(0,A.jsx)(m.Z.Label,{children:"Names of Instructors"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},multiple:!0,id:"tags-standard",options:K,value:x,onChange:(e,l)=>{E(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Instructors",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(v.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Duration (in hours)"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},id:"tags-standard",options:[1,2,3,4,5,6,7,8,9,10,11,12],value:B,onChange:(e,l)=>{R(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Duration",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]})]}),(0,A.jsx)(b.Z,{md:6,children:(0,A.jsx)(D.Z,{defaultTime:V||"00:00-00:00",handleSelect:(e,l)=>{const[t,a]=V.split(" - ");let o=`${t} - ${a}`;null!==e&&(o=`${e} - ${a}`),null!==l&&(o=`${t} - ${l}`),W(o)}})})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(v.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Date"}),(0,A.jsx)(O._,{dateAdapter:N.y,children:(0,A.jsx)(I.C,{components:["DatePicker"],children:(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(f.M,{sx:{width:"100%"},value:q,onChange:e=>G(e)})]})})})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Level"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},id:"tags-standard",options:[r.zq.ALL,r.zq.BEGINNERS,r.zq.INTERMEDIATE,r.zq.ADVANCED],value:F,onChange:(e,l)=>{Y(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Level",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(v.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Maximum capacity"}),(0,A.jsx)(m.Z.Control,{rows:1,defaultValue:te?te.capacity:0,style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},type:"text",placeholder:"Enter capacity",name:"capacity"})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"City"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},id:"tags-standard",options:P.c,value:M,onChange:(e,l)=>{z(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select City",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(v.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Studio"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(y.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},id:"tags-standard",options:d,value:h,onChange:(e,l)=>{p(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Studio",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Brief Description"}),(0,A.jsx)(m.Z.Control,{rows:3,defaultValue:te?te.description:"",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},as:"textarea",placeholder:"Enter Description",name:"description"})]})]}),(0,A.jsx)("br",{}),(0,A.jsx)(v.Z,{children:(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(m.Z.Label,{children:"Youtube video link"}),(0,A.jsx)(m.Z.Control,{rows:1,defaultValue:te?te.youtubeViedoLink:"",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},type:"text",placeholder:"Enter youtube video link",name:"youtubeViedoLink"})]})}),(0,A.jsx)("hr",{}),(0,A.jsxs)(v.Z,{children:[(0,A.jsx)(b.Z,{xs:6}),(0,A.jsx)(b.Z,{xs:6,className:"d-flex justify-content-end",children:(0,A.jsx)(j.Z,{variant:"contained",style:{color:"white",backgroundColor:_?"#892cdc":"black"},type:"submit",disabled:Q,children:"Update Open Class"})})]})]})]})})]})};var $=t(707);const _=function(){const[e,l]=(0,a.useState)([]),[t,m]=(0,a.useState)([]),[v,b]=(0,a.useState)([]),j=(0,n.v9)(i.w),[g,S]=(0,a.useState)([]),[y,Z]=(0,a.useState)(!1),[C,w]=(0,a.useState)(-1),{currentUser:k}=(0,d.a)(),[f,I]=a.useState("1");return(0,a.useEffect)((()=>{(async e=>{try{const e=(0,s.JU)(o.db,"User",k.uid),l=await(0,s.QT)(e);l.exists()&&null!=l.data()&&(Z(l.data().CreatorMode),w(l.data().isPremium))}catch(l){console.log(" error")}})()}),[y]),(0,a.useEffect)((()=>{(async()=>{let e=null;if(JSON.parse(localStorage.getItem("userInfo"))&&JSON.parse(localStorage.getItem("userInfo")).UserId&&(e=JSON.parse(localStorage.getItem("userInfo")).UserId),!e)return void alert("User not found");const l=(0,s.hJ)(o.db,r.Ul.INSTRUCTORS),t=(0,s.IO)(l,(0,s.ar)("createdBy","==",e)),a=await(0,s.PL)(t),n=[];a.forEach((e=>{n.push({id:e.id,name:e.data().name})})),S(n)})()}),[]),(0,a.useEffect)((()=>{(async()=>{const e=(0,s.IO)((0,s.hJ)(o.db,r.Ul.STUDIO),(0,s.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),t=(await(0,s.PL)(e)).docs.filter((e=>e.data().studioName)).map((e=>{const l=e.data();return{id:e.id,...l}}));l(t.map((e=>String(e.studioName)+" :"+String(e.id))))})()}),[]),(0,a.useEffect)((()=>{(async()=>{const e=(0,s.IO)((0,s.hJ)(o.db,r.Ul.OPEN_CLASSES),(0,s.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),l=(await(0,s.PL)(e)).docs.filter((e=>e.data().openClassName)).map((e=>{const l=e.data();return{id:e.id,...l}})).map((async e=>{const l=(0,s.JU)(o.db,r.Ul.STUDIO,null===e||void 0===e?void 0:e.StudioId),t=await(0,s.QT)(l);return{...e,studioDetails:t.data()}})),t=await Promise.all(l);localStorage.setItem("OpenCLassCreated",JSON.stringify(t)),m(t),b(t.map((e=>String(e.openClassName)+" :"+String(e.id))))})()}),[m]),(0,a.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("OpenClassCreated"))||[];m(e);const l=e.map((e=>`${e.openClassName} : ${e.id}`));b(l)}),[b]),(0,A.jsxs)("div",{children:[(0,A.jsx)("br",{}),y?(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(x.Z,{sx:{width:"100%",typography:"body1"},children:(0,A.jsxs)(u.ZP,{value:f,children:[(0,A.jsx)(x.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,A.jsxs)(h.Z,{style:{color:j?"white":"black"},onChange:(e,l)=>{I(l)},"aria-label":"lab API tabs example",children:[(0,A.jsx)(c.Z,{style:{color:j?"white":"black"},label:"Add Open Class",value:"1"}),(0,A.jsx)(c.Z,{style:{color:j?"white":"black"},label:"Update Open Class",value:"2"})]})}),(0,A.jsx)(p.Z,{value:"1",children:(0,A.jsx)(J,{instructors:g,studioId:e,setOpenClass:m})}),(0,A.jsx)(p.Z,{value:"2",children:(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(T,{instructors:g,workshopId:v,studioId:e})})})]})})}):"",t.length>0&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("h3",{style:{color:j?"white":"black"},children:"Your Open Classes:"}),(0,A.jsx)($.Z,{dataList:t,activateOpenClass:async e=>{try{const l=(0,s.JU)(o.db,r.Ul.OPEN_CLASSES,e);await(0,s.r7)(l,{active:!0}),m((l=>l.map((l=>l.id===e?{...l,active:!0}:l))))}catch(l){console.error(l)}},deactivateOpenClass:async e=>{try{const l=(0,s.JU)(o.db,r.Ul.OPEN_CLASSES,e);await(0,s.r7)(l,{active:!1}),m((l=>l.map((l=>l.id===e?{...l,active:!1}:l))))}catch(l){console.error(l)}},actionsAllowed:!0})]})]})}},11518:()=>{},10884:(e,l,t)=>{e.exports=t.p+"static/media/india_11009487.98ac2ba43166eaa84593.png"},49071:(e,l,t)=>{e.exports=t.p+"static/media/whatsapp.8d81ece5885274edfd73.png"}}]);
//# sourceMappingURL=6643.d4a9c6c6.chunk.js.map