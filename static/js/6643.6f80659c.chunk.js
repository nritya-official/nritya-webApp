"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[6643],{707:(e,l,t)=>{t.d(l,{Z:()=>E});t(11518);var o=t(72791),a=t(92552),s=t(84654),n=t(28658),r=t(69597),i=t(83168),d=t(88447),c=t(697),u=t(61889),h=t(20890),p=t(94294),x=t(13400),v=t(36314),m=t(59434),b=t(83708),j=t(68449),g=t(60717),S=t(97892),C=t.n(S),Z=t(10159),y=t(12481),w=t(75424),k=t(49071),f=t(10884),I=t(80184);function N(e){var l,t,a,s,n,r;let{open:i,handleClose:v,dataItem:j,activateOpenClass:S,deactivateOpenClass:N,actionsAllowed:O}=e;const E=(0,w.D)(),D=(0,m.v9)(g.w),[L,U]=(0,o.useState)(!1),[P,A]=(0,o.useState)(null),J=null===(l=JSON.parse(localStorage.getItem("userInfo")))||void 0===l?void 0:l.UserId,T=j.UserId===J;(0,o.useEffect)((()=>{(async()=>{try{const e=(0,y.JU)(Z.db,"User",J),l=await(0,y.QT)(e);l.exists()&&A(l.data())}catch(e){console.log(" error")}})()}),[]);const $=encodeURIComponent("Hey, I found your Studio on nritya.co.in. I'm interested"),_=null===P||void 0===P||null===(t=P.BookedOpenClasses)||void 0===t||null===(a=t.includes)||void 0===a?void 0:a.call(t,null===j||void 0===j?void 0:j.id);return(0,I.jsx)(d.Z,{open:i,onClose:v,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,I.jsxs)(c.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"90%",overflow:"auto",width:{xs:"90%",md:"60%"},bgcolor:D?"black":"background.paper",borderWidth:"2px",borderStyle:"solid",borderColor:D?"white":"black",boxShadow:24,p:"1rem",borderRadius:"8px"},children:[(0,I.jsxs)(u.ZP,{container:!0,spacing:"8px",rowGap:3,children:[(0,I.jsx)(u.ZP,{item:!0,xs:12,lg:8,sx:{minHeight:"300px"},children:(0,I.jsx)("img",{src:j.imageUrl,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:"8px"}})}),(0,I.jsxs)(u.ZP,{item:!0,xs:12,lg:4,children:[(0,I.jsxs)(c.Z,{sx:{height:"100%",bgcolor:D?"#333333":"#efefef",p:2,borderRadius:"8px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,I.jsxs)(c.Z,{sx:{flex:1},children:[(0,I.jsx)(h.Z,{variant:"h6",component:"p",sx:{color:D?"white":"black"},children:C()(j.date).format("LL")}),(0,I.jsx)(h.Z,{variant:"h6",component:"p",sx:{color:D?"white":"black"},children:j.time}),(0,I.jsx)(h.Z,{variant:"body1",component:"p",sx:{mt:"2rem",color:D?"white":"black"},children:j.venue})]}),(0,I.jsx)(c.Z,{sx:{mt:"2rem",textAlign:"right"},children:!O&&!T&&J&&(0,I.jsx)(p.Z,{variant:"outlined",onClick:async()=>{try{U(!0),(0,y.ET)((0,y.hJ)(Z.db,b.Ul.BOOKINGS),{StudioId:j.StudioId,OpenClassId:j.id,UserId:J,bookingDate:Date.now()});const e=(0,y.JU)(Z.db,"User",J),l=await(0,y.QT)(e);l.exists()&&null!=l.data()&&await(0,y.r7)(e,{BookedOpenClasses:[...l.data().BookedOpenClasses||[],j.id]}),A((e=>({...e,BookedOpenClasses:[...(null===e||void 0===e?void 0:e.BookedOpenClasses)||[],j.id]}))),E("Open class booked","success")}catch(e){console.error(e),E((null===e||void 0===e?void 0:e.message)||"Something went wrong","error")}finally{U(!1)}},disabled:_||L,sx:{boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"transparent",borderColor:D?"white":"black",color:D?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:D?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:D?"white":"black"},"&:focus":{boxShadow:"none"}},children:_?"Booked":"Book Now"})})]}),!O&&!T&&J&&(0,I.jsx)(h.Z,{component:"p",variant:"caption",sx:{my:"2px",color:D?"white":"black",textAlign:"center"},children:"Book your spot"})]}),(0,I.jsxs)(u.ZP,{item:!0,sx:{mt:1},children:[(0,I.jsxs)(h.Z,{variant:"h5",component:"p",sx:{color:D?"white":"black"},children:[j.openClassName||"",j.danceStyles.map((e=>` | ${e}`))]}),(0,I.jsxs)(h.Z,{variant:"body1",component:"p",sx:{mt:1,color:D?"white":"black"},children:[(0,I.jsxs)("span",{children:["By ",(null===(s=j.studioDetails)||void 0===s?void 0:s.studioName)||""]}),j.studioDetails&&(null===(n=j.studioDetails)||void 0===n?void 0:n.whatsappNumber)&&(0,I.jsx)(x.Z,{color:"success",size:"small",target:"_blank",href:`https://wa.me/91${j.studioDetails.whatsappNumber}?text=${$}`,children:(0,I.jsx)("img",{src:k,alt:"Whatsapp call",style:{width:30,height:28}})}),j.studioDetails&&(null===(r=j.studioDetails)||void 0===r?void 0:r.mobileNumber)&&(0,I.jsx)(x.Z,{color:"primary",size:"small",target:"_blank",href:`tel:${j.studioDetails.mobileNumber}`,children:(0,I.jsx)("img",{src:f,alt:"Phone call",style:{width:30,height:28}})})]}),(0,I.jsx)(h.Z,{variant:"body1",component:"p",sx:{mt:2,color:D?"white":"black"},children:j.description||""})]})]}),(0,I.jsxs)(c.Z,{sx:{mt:"1rem",textAlign:"right"},children:[O&&T&&(0,I.jsx)(p.Z,{onClick:()=>null!==j&&void 0!==j&&j.active?N(null===j||void 0===j?void 0:j.id):S(null===j||void 0===j?void 0:j.id),variant:"outlined",sx:{mr:"1rem",color:"white",boxShadow:"none",border:"1px solid",backgroundColor:null!==j&&void 0!==j&&j.active?"red":"green",borderColor:"white",color:"white","&:hover":{backgroundColor:null!==j&&void 0!==j&&j.active?"red":"green",borderColor:"white",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:null!==j&&void 0!==j&&j.active?"red":"green",borderColor:"white"},"&:focus":{boxShadow:"none"}},children:null!==j&&void 0!==j&&j.active?"Deactivate":"Activate"}),(0,I.jsx)(p.Z,{onClick:v,variant:"outlined",sx:{color:"white",boxShadow:"none",border:"1px solid",backgroundColor:"transparent",borderColor:D?"white":"black",color:D?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:D?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:D?"white":"black"},"&:focus":{boxShadow:"none"}},children:"Close"})]})]})})}function O(e){var l;let{dataItem:t,activateOpenClass:d,deactivateOpenClass:u,actionsAllowed:h}=e;const p=(0,m.v9)(g.w),[x,S]=(0,o.useState)(null),[C,Z]=(0,o.useState)(!1),y=t.id;(0,o.useEffect)((()=>{(async()=>{try{const e=await(0,j.Us)(b.Rb.OPENCLASSICON,y);S(e||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}catch(e){console.error("Error fetching image URL:",e)}})()}),[t.id]);const w={backgroundColor:p?"#444":"white",padding:"0px",color:p?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(s.Z,{variant:"solid",sx:{...w,"&:hover":{transform:"scale(1.01)",cursor:"pointer"},flex:"none"},onClick:()=>Z(!0),children:[(0,I.jsxs)(a.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,I.jsx)("img",{src:x,loading:"lazy",alt:"Studio Image",style:{maxWidth:"100%",objectFit:"cover",overflow:"hidden"}}),(0,I.jsx)(v.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:t&&t.danceStyles?t.danceStyles.slice(0,3).map(((e,l)=>(0,I.jsx)(r.Z,{color:l%2===0?"danger":"success",style:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem"},children:e.trim()},l))):(0,I.jsx)(r.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)})]}),(0,I.jsxs)(n.Z,{style:{padding:"10px",paddingTop:"5px"},children:[(0,I.jsxs)(c.Z,{fontWeight:"md",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,style:{color:p?"white":"black",extDecoder:"one"},children:[(0,I.jsx)("span",{children:t&&t.openClassName?t.openClassName:""}),!(null!==t&&void 0!==t&&t.active)&&(0,I.jsx)("span",{style:{marginLeft:"2px",padding:"2px 4px",fontSize:"14px",borderRadius:"4px",background:"red"},children:"Inactive"})]}),(0,I.jsxs)(i.ZP,{style:{color:p?"white":"black"},level:"body-xs",noWrap:!0,children:["By ",null!==(l=t.studioDetails)&&void 0!==l&&l.studioName?t.studioDetails.studioName:""]}),(0,I.jsx)(i.ZP,{style:{marginTop:10,color:p?"white":"black"},level:"body-xs",noWrap:!0,children:t.venue?t.venue:""}),(0,I.jsxs)(i.ZP,{style:{color:p?"white":"black"},level:"body-xs",children:[t.date||""," | ",t.time||""]})]})]}),(0,I.jsx)(N,{dataItem:{...t,imageUrl:x},open:C,handleClose:()=>Z(!1),activateOpenClass:d,deactivateOpenClass:u,actionsAllowed:h})]})}const E=e=>{let{dataList:l,deleteOpenClass:t,actionsAllowed:o,activateOpenClass:a,deactivateOpenClass:s}=e;return(0,I.jsx)("div",{className:"horizontal-scroll-wrapper",children:l.map(((e,l)=>(0,I.jsx)(O,{dataItem:e,activateOpenClass:a,deactivateOpenClass:s,actionsAllowed:o},e.id)))})}},26073:(e,l,t)=>{t.d(l,{Z:()=>d});t(72791);var o=t(89743),a=t(2677),s=t(13855),n=t(59434),r=t(60717),i=t(80184);const d=e=>{var l;let{defaultTime:t,handleSelect:d}=e;const c=t.split("-")[0].trim(),u=null===(l=t.split("-")[1])||void 0===l?void 0:l.trim(),h=(0,n.v9)(r.w),p=e=>{const l=(()=>{const e=[];let l=[],t=[];for(let o=0;o<24;o++)for(let e=0;e<60;e+=30){const a=o.toString().padStart(2,"0"),s=e.toString().padStart(2,"0"),n=`${a}:${s}`;if(o<12)l.push(`${n} AM`);else{const e=(o-12).toString().padStart(2,"0");t.push(`${e}:${s} PM`)}}for(let o=0;o<l.length||o<t.length;o++)o<l.length&&e.push(l[o]),o<t.length&&e.push(t[o]);return e})();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("option",{value:e,children:e}),l.map((e=>(0,i.jsx)("option",{value:e,children:e},e)))]})};return(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(a.Z,{children:(0,i.jsxs)(s.Z.Group,{children:[(0,i.jsx)(s.Z.Label,{children:"Start Time"}),(0,i.jsx)(s.Z.Control,{as:"select",onChange:e=>d(e.target.value,null),style:{background:"transparent",borderWidth:1,borderColor:h?"white":"black"},children:p(c)})]})}),(0,i.jsx)(a.Z,{children:(0,i.jsxs)(s.Z.Group,{children:[(0,i.jsx)(s.Z.Label,{children:"End Time"}),(0,i.jsx)(s.Z.Control,{as:"select",onChange:e=>d(null,e.target.value),style:{background:"transparent",borderWidth:1,borderColor:h?"white":"black"},children:p(u)})]})})]})}},26643:(e,l,t)=>{t.r(l),t.d(l,{default:()=>_});var o=t(72791),a=t(10159),s=t(12481),n=t(83708),r=t(59434),i=t(60717),d=t(61224),c=t(43896),u=t(83449),h=t(47283),p=t(82851),x=t(697),v=t(13855),m=t(89743),b=t(2677),j=t(94294),g=t(81018),S=t(51650),C=t(49644),Z=t(76989),y=t(67107),w=t(44507),k=t(4708),f=t(63237),I=t(4560),N=t(24750),O=t(71652),E=t(97892),D=t.n(E),L=t(26073),U=t(75424),P=t(82873),A=t(80184);const J=function(e){let{instructors:l,studioId:t,setOpenClass:d}=e;const c=(0,U.D)(),[u,h]=(0,o.useState)(""),p=(0,r.v9)(i.w),[x,E]=(0,o.useState)([]),[J,T]=(0,o.useState)([]),$=l.map((e=>`${e.name} - ${e.id}`)),_=S.W,B=localStorage.getItem("filterLocation")||"",[R,F]=(0,o.useState)(!1),[V,Y]=(0,o.useState)(""),[z,M]=(0,o.useState)(null),[W,q]=(0,o.useState)(""),[G,Q]=(0,o.useState)(B),[H,K]=(0,o.useState)(""),[X,ee]=(0,o.useState)(D()(new Date)),[le,te]=(0,o.useState)(!1),[oe,ae]=(0,o.useState)(1),se=(0,y.Z)({palette:{mode:p?"dark":"light"}}),ne=e=>{e.reset(),T([]),E([]),M(null),Y(""),q(""),K(""),ee(D()(new Date)),Q("")};return(0,o.useEffect)((()=>{!async function(){const e=document.getElementById("addStudioForm");try{const m=(0,s.IO)((0,s.hJ)(a.db,n.i0.DRAFT_OPEN_CLASSES),(0,s.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),b=await(0,s.PL)(m);if(b.empty){var o,r,i,d,c,u,h,p;await(0,s.ET)((0,s.hJ)(a.db,n.i0.DRAFT_OPEN_CLASSES),{openClassName:(null===(o=e.openClassName)||void 0===o?void 0:o.value)||"",venue:(null===(r=e.openClassVenue)||void 0===r?void 0:r.value)||"",description:(null===(i=e.description)||void 0===i?void 0:i.value)||"",danceStyles:J,instructors:x?null===x||void 0===x||null===(d=x.map)||void 0===d?void 0:d.call(x,(e=>{var l,t,o,a;return(null===e||void 0===e||null===(l=e.split)||void 0===l||null===(t=l.call(e,"-"))||void 0===t||null===(o=t[1])||void 0===o||null===(a=o.trim)||void 0===a?void 0:a.call(o))||null})):null,author:JSON.parse(localStorage.getItem("userInfo")).displayName,UserId:JSON.parse(localStorage.getItem("userInfo")).UserId,creatorEmail:JSON.parse(localStorage.getItem("userInfo")).email,StudioId:z&&(null===z||void 0===z||null===(c=z.split)||void 0===c||null===(u=c.call(z,":"))||void 0===u||null===(h=u[1])||void 0===h||null===(p=h.trim)||void 0===p?void 0:p.call(h))||null,duration:V,level:W,time:H,date:X.format("YYYY-MM-DD"),city:G})}else{var v;let o=[];b.forEach((e=>{o.push({id:e.id,...e.data()})}));let a=o[0];e.openClassName.value=(null===a||void 0===a?void 0:a.openClassName)||"",e.openClassVenue.value=(null===a||void 0===a?void 0:a.venue)||"",e.description.value=(null===a||void 0===a?void 0:a.description)||"",T(null!==a&&void 0!==a&&null!==(v=a.danceStyles)&&void 0!==v&&v.length?a.danceStyles:[]),E(l.filter((e=>null===a||void 0===a?void 0:a.instructors.includes(e.id))).map((e=>`${e.name} - ${e.id}`)));const s=t.map((e=>e.split(":")[1].trim())).findIndex((e=>e===(null===a||void 0===a?void 0:a.StudioId)));s>0&&M(t[s]),Y((null===a||void 0===a?void 0:a.duration)||""),q((null===a||void 0===a?void 0:a.level)||""),K((null===a||void 0===a?void 0:a.time)||""),ee(D()((null===a||void 0===a?void 0:a.date)||Date.now())),Q((null===a||void 0===a?void 0:a.city)||"")}F(!0)}catch(m){console.error(m)}}()}),[]),(0,o.useEffect)((()=>{let e=null;return R&&async function(){const l=document.getElementById("addStudioForm");try{const t=(0,s.IO)((0,s.hJ)(a.db,n.i0.DRAFT_OPEN_CLASSES),(0,s.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),o=await(0,s.PL)(t);if(!o.empty){let t=[];o.forEach((e=>{t.push({id:e.id,...e.data()})}));let r=t[0];const i=(0,s.JU)(a.db,n.i0.DRAFT_OPEN_CLASSES,r.id);e=setInterval((async()=>{try{var e,t,o,a,n,r,d,c;await(0,s.r7)(i,{openClassName:(null===(e=l.openClassName)||void 0===e?void 0:e.value)||"",venue:(null===(t=l.openClassVenue)||void 0===t?void 0:t.value)||"",description:(null===(o=l.description)||void 0===o?void 0:o.value)||"",danceStyles:J,instructors:x?null===x||void 0===x||null===(a=x.map)||void 0===a?void 0:a.call(x,(e=>{var l,t,o,a;return(null===e||void 0===e||null===(l=e.split)||void 0===l||null===(t=l.call(e,"-"))||void 0===t||null===(o=t[1])||void 0===o||null===(a=o.trim)||void 0===a?void 0:a.call(o))||null})):null,StudioId:z&&(null===z||void 0===z||null===(n=z.split)||void 0===n||null===(r=n.call(z,":"))||void 0===r||null===(d=r[1])||void 0===d||null===(c=d.trim)||void 0===c?void 0:c.call(d))||null,duration:V,level:W,time:H,date:X.format("YYYY-MM-DD"),city:G})}catch(u){console.error(u)}}),1e4)}}catch(t){console.error(t)}}(),()=>clearInterval(e)}),[R,J,x,z,V,W,H,X,G]),(0,A.jsxs)("div",{children:[1===oe&&(0,A.jsx)(v.Z,{id:"addStudioForm",onSubmit:async e=>{e.preventDefault();const l=e.target;if((e=>{let l=!0;return e.openClassName.value&&e.openClassVenue.value&&e.description.value&&null!==J&&void 0!==J&&J.length&&null!==x&&void 0!==x&&x.length&&z&&V&&W&&H&&X&&G||(l=!1),l})(l))try{var t,o,r,i,u;const v={openClassName:e.target.openClassName.value,danceStyles:J,instructors:x?null===x||void 0===x||null===(t=x.map)||void 0===t?void 0:t.call(x,(e=>{var l,t,o,a;return(null===e||void 0===e||null===(l=e.split)||void 0===l||null===(t=l.call(e,"-"))||void 0===t||null===(o=t[1])||void 0===o||null===(a=o.trim)||void 0===a?void 0:a.call(o))||null})):null,author:JSON.parse(localStorage.getItem("userInfo")).displayName,UserId:JSON.parse(localStorage.getItem("userInfo")).UserId,creatorEmail:JSON.parse(localStorage.getItem("userInfo")).email,StudioId:z&&(null===z||void 0===z||null===(o=z.split)||void 0===o||null===(r=o.call(z,":"))||void 0===r||null===(i=r[1])||void 0===i||null===(u=i.trim)||void 0===u?void 0:u.call(i))||null,duration:V,level:W,time:H,date:X.format("YYYY-MM-DD"),venue:e.target.openClassVenue.value,description:e.target.description.value,city:G,active:!0};te(!0);const m=await(0,s.ET)((0,s.hJ)(a.db,n.Ul.OPEN_CLASSES),v);h(m.id),d((e=>[...e,{id:m.id,...v}]));const b=(0,s.JU)(a.db,"User",JSON.parse(localStorage.getItem("userInfo")).UserId),j=await(0,s.QT)(b);var p;if(j.exists())if(null!=j.data())await(0,s.r7)(b,{OpenClassCreated:[...(null===(p=j.data())||void 0===p?void 0:p.OpenClassCreated)||[],m.id]});ne(l),(async()=>{const e=(0,s.IO)((0,s.hJ)(a.db,n.i0.DRAFT_OPEN_CLASSES),(0,s.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),l=await(0,s.PL)(e);if(!l.empty){let e=[];l.forEach((l=>{e.push({id:l.id,...l.data()})}));let t=e[0];const o=(0,s.JU)(a.db,n.i0.DRAFT_OPEN_CLASSES,t.id);await(0,s.oe)(o)}})(),c("Open class successfully added.","success"),ae((e=>e+1))}catch(v){console.error("Error adding workshop: ",v),c((null===v||void 0===v?void 0:v.message)||"Something went wrong","error")}finally{te(!1)}else c("Please fill all the fields.","error")},style:{backgroundColor:p?"#202020":"",color:p?"white":"black"},children:(0,A.jsx)(v.Z.Group,{controlId:"formBasicAdd",children:(0,A.jsxs)("div",{children:[(0,A.jsxs)(m.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Open Class Name"}),(0,A.jsx)(v.Z.Control,{rows:1,style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},type:"textarea",placeholder:"Enter open class name",name:"openClassName"})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Dance Styles"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},multiple:!0,id:"tags-standard",options:_,value:J,onChange:(e,l)=>{T(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Dance Styles",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(m.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Names of Instructors"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},multiple:!0,id:"tags-standard",options:$,value:x,onChange:(e,l)=>{E(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Instructors",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Duration (in hours)"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},id:"tags-standard",options:[1,2,3,4,5,6,7,8,9,10,11,12],value:V,onChange:(e,l)=>{Y(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Duration",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(m.Z,{children:[(0,A.jsx)(b.Z,{md:6,children:(0,A.jsx)(L.Z,{defaultTime:H||"00:00-00:00",handleSelect:(e,l)=>{const[t,o]=H.split(" - ");let a=`${t} - ${o}`;null!==e&&(a=`${e} - ${o}`),null!==l&&(a=`${t} - ${l}`),K(a)}})}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Date"}),(0,A.jsx)(O._,{dateAdapter:N.y,children:(0,A.jsx)(I.C,{components:["DatePicker"],children:(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(f.M,{sx:{width:"100%"},value:X,onChange:e=>ee(e)})]})})})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(m.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Level"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},id:"tags-standard",options:[n.zq.ALL,n.zq.BEGINNERS,n.zq.INTERMEDIATE,n.zq.ADVANCED],value:W,onChange:(e,l)=>{q(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Level",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Venue"}),(0,A.jsx)(v.Z.Control,{rows:1,style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},type:"text",placeholder:"Enter Venue",name:"openClassVenue"})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(m.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"City"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},id:"tags-standard",options:P.c,value:G,onChange:(e,l)=>{Q(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select City",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Studio"}),(0,A.jsxs)(w.Z,{theme:se,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},id:"tags-standard",options:t,value:z,onChange:(e,l)=>{M(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Studio",style:{backgroundColor:p?"#333333":"",color:p?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(m.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Brief Description"}),(0,A.jsx)(v.Z.Control,{rows:3,style:{backgroundColor:p?"#333333":"",color:p?"white":"black"},as:"textarea",placeholder:"Enter Description",name:"description"})]}),(0,A.jsx)(b.Z,{md:6})]}),(0,A.jsx)("hr",{}),(0,A.jsxs)(m.Z,{children:[(0,A.jsx)(b.Z,{xs:6}),(0,A.jsx)(b.Z,{xs:6,className:"d-flex justify-content-end",children:(0,A.jsx)(j.Z,{variant:"contained",style:{color:"white",backgroundColor:p?"#892cdc":"black"},type:"submit",disabled:le,children:"Next"})})]})]})})}),2===oe&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m.Z,{children:(0,A.jsx)(b.Z,{children:(0,A.jsx)(g.Z,{entityId:u,title:"Open Class Images",storageFolder:n.Rb.OPENCLASSICON,maxImageCount:1})})}),(0,A.jsx)(m.Z,{style:{margin:"1rem 0"},children:(0,A.jsx)(b.Z,{style:{textAlign:"right"},children:(0,A.jsx)(j.Z,{variant:"contained",style:{color:"white",backgroundColor:p?"#892cdc":"black"},onClick:()=>ae((e=>e-1)),children:"Done"})})})]})]})};const T=function(e){let{workshopId:l,instructors:t,studioId:d}=e;const c=localStorage.getItem("filterLocation")||"",u=(0,U.D)(),[h,p]=(0,o.useState)(null),[x,E]=(0,o.useState)([]),J=S.W,[T,$]=(0,o.useState)([]),_=(0,r.v9)(i.w),[B,R]=(0,o.useState)(""),[F,V]=(0,o.useState)(""),[Y,z]=(0,o.useState)(c),[M,W]=(0,o.useState)(""),[q,G]=(0,o.useState)(D()(new Date)),[Q,H]=(0,o.useState)(!1),K=t.map((e=>`${e.name} - ${e.id}`)),X=(0,y.Z)({palette:{mode:_?"dark":"light"}}),[ee,le]=(0,o.useState)(""),[te,oe]=(0,o.useState)(null),ae=e=>{e.reset(),$([]),E([]),p(null),R(""),V(""),W(""),G(D()(new Date)),z(""),oe(null),le("")};return(0,o.useEffect)((()=>{if(te){const e=t.filter((e=>te.instructors.includes(e.id))).map((e=>`${e.name} - ${e.id}`));if(E(e),te&&te.danceStyles&&$(te.danceStyles),te&&te.duration&&R(te.duration),te&&te.level&&V(te.level),te&&te.time&&W(te.time),te&&te.date&&G(D()(te.date)),te&&te.StudioId){const e=d.map((e=>e.split(":")[1].trim())).findIndex((e=>e===te.StudioId));p(d[e]||null)}z((null===te||void 0===te?void 0:te.city)||"")}}),[te]),(0,A.jsxs)("div",{style:{backgroundColor:_?"#202020":"",color:_?"white":"black"},children:[(0,A.jsx)("br",{}),(0,A.jsx)(v.Z,{id:"updateStudioForm",onSubmit:async e=>{e.preventDefault();const l=e.target;if(ee)if((e=>{let l=!0;return e.openClassName.value&&e.openClassVenue.value&&e.description.value&&null!==T&&void 0!==T&&T.length&&null!==x&&void 0!==x&&x.length&&h&&B&&F&&M&&q&&Y||(l=!1),l})(l)){try{var t,o,r,i,d;const e={openClassName:l.openClassName.value,venue:l.openClassVenue.value,description:l.description.value,danceStyles:T,instructors:x?null===x||void 0===x||null===(t=x.map)||void 0===t?void 0:t.call(x,(e=>{var l,t,o,a;return(null===e||void 0===e||null===(l=e.split)||void 0===l||null===(t=l.call(e,"-"))||void 0===t||null===(o=t[1])||void 0===o||null===(a=o.trim)||void 0===a?void 0:a.call(o))||null})):null,author:JSON.parse(localStorage.getItem("userInfo")).displayName,UserId:JSON.parse(localStorage.getItem("userInfo")).UserId,creatorEmail:JSON.parse(localStorage.getItem("userInfo")).email,StudioId:h&&(null===h||void 0===h||null===(o=h.split)||void 0===o||null===(r=o.call(h,":"))||void 0===r||null===(i=r[1])||void 0===i||null===(d=i.trim)||void 0===d?void 0:d.call(i))||null,duration:B,level:F,time:M,date:q.format("YYYY-MM-DD"),city:Y};H(!0);const c=(0,s.JU)(a.db,n.Ul.OPEN_CLASSES,ee);await(0,s.r7)(c,e),ae(l),u("Open class successfully updated.","success")}catch(c){console.error("Error updating workshop: ",c),u((null===c||void 0===c?void 0:c.message)||"Something went wrong","error")}finally{H(!1)}document.getElementById("updateStudioForm").reset()}else u("Please fill all the fields.","error")},children:(0,A.jsxs)(v.Z.Group,{controlId:"formBasicUpdate",children:[(0,A.jsx)(v.Z.Label,{children:"Id"}),(0,A.jsxs)(v.Z.Control,{as:"select",name:"nameId",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},onChange:async e=>{e.preventDefault();const l=e.target.value.split(":").pop().trim();le(l);try{const e=await(0,s.QT)((0,s.JU)(a.db,n.Ul.OPEN_CLASSES,l));e.exists?oe(e.data()):oe(null)}catch(t){console.error("Error fetching workshop data:",t,l)}},children:[(0,A.jsx)("option",{value:"",children:"Select a open class..."}),l&&l.length>0?l.map((e=>(0,A.jsx)("option",{value:e,children:e},e))):(0,A.jsx)("option",{value:"",children:"No open class yet!"})]}),(0,A.jsxs)("div",{children:[(0,A.jsxs)(m.Z,{children:[(0,A.jsx)(b.Z,{md:6,children:(0,A.jsx)(g.Z,{entityId:ee,title:"Open class Images",storageFolder:n.Rb.OPENCLASSICON,maxImageCount:1})}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)("br",{}),(0,A.jsx)(v.Z.Label,{children:"Open Class Name"}),(0,A.jsx)(v.Z.Control,{rows:1,defaultValue:te?te.openClassName:"",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},type:"textarea",placeholder:"Enter open class name",name:"openClassName"}),(0,A.jsx)("br",{}),(0,A.jsx)(v.Z.Label,{children:"Dance Styles"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},multiple:!0,id:"tags-standard",options:J,value:T,onChange:(e,l)=>{$(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Dance Styles",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]}),(0,A.jsx)("br",{}),(0,A.jsx)(v.Z.Label,{children:"Names of Instructors"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},multiple:!0,id:"tags-standard",options:K,value:x,onChange:(e,l)=>{E(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Instructors",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(m.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Duration (in hours)"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},id:"tags-standard",options:[1,2,3,4,5,6,7,8,9,10,11,12],value:B,onChange:(e,l)=>{R(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Duration",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]})]}),(0,A.jsx)(b.Z,{md:6,children:(0,A.jsx)(L.Z,{defaultTime:M||"00:00-00:00",handleSelect:(e,l)=>{const[t,o]=M.split(" - ");let a=`${t} - ${o}`;null!==e&&(a=`${e} - ${o}`),null!==l&&(a=`${t} - ${l}`),W(a)}})})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(m.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Date"}),(0,A.jsx)(O._,{dateAdapter:N.y,children:(0,A.jsx)(I.C,{components:["DatePicker"],children:(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(f.M,{sx:{width:"100%"},value:q,onChange:e=>G(e)})]})})})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Level"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},id:"tags-standard",options:[n.zq.ALL,n.zq.BEGINNERS,n.zq.INTERMEDIATE,n.zq.ADVANCED],value:F,onChange:(e,l)=>{V(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Level",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(m.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Venue"}),(0,A.jsx)(v.Z.Control,{rows:1,defaultValue:te?te.venue:"",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},type:"text",placeholder:"Enter Venue",name:"openClassVenue"})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"City"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},id:"tags-standard",options:P.c,value:Y,onChange:(e,l)=>{z(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select City",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]})]})]}),(0,A.jsx)("br",{}),(0,A.jsxs)(m.Z,{children:[(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Studio"}),(0,A.jsxs)(w.Z,{theme:X,children:[(0,A.jsx)(k.ZP,{}),(0,A.jsx)(C.Z,{style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},id:"tags-standard",options:d,value:h,onChange:(e,l)=>{p(l)},renderInput:e=>(0,A.jsx)(Z.Z,{...e,variant:"standard",placeholder:"Select Studio",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"}})})]})]}),(0,A.jsxs)(b.Z,{md:6,children:[(0,A.jsx)(v.Z.Label,{children:"Brief Description"}),(0,A.jsx)(v.Z.Control,{rows:3,defaultValue:te?te.description:"",style:{backgroundColor:_?"#333333":"",color:_?"white":"black"},as:"textarea",placeholder:"Enter Description",name:"description"})]})]}),(0,A.jsx)("br",{}),(0,A.jsx)("hr",{}),(0,A.jsxs)(m.Z,{children:[(0,A.jsx)(b.Z,{xs:6}),(0,A.jsx)(b.Z,{xs:6,className:"d-flex justify-content-end",children:(0,A.jsx)(j.Z,{variant:"contained",style:{color:"white",backgroundColor:_?"#892cdc":"black"},type:"submit",disabled:Q,children:"Update Open Class"})})]})]})]})})]})};var $=t(707);const _=function(){const[e,l]=(0,o.useState)([]),[t,v]=(0,o.useState)([]),[m,b]=(0,o.useState)([]),j=(0,r.v9)(i.w),[g,S]=(0,o.useState)([]),[C,Z]=(0,o.useState)(!1),[y,w]=(0,o.useState)(-1),{currentUser:k}=(0,d.a)(),[f,I]=o.useState("1");return(0,o.useEffect)((()=>{(async e=>{try{const e=(0,s.JU)(a.db,"User",k.uid),l=await(0,s.QT)(e);l.exists()&&null!=l.data()&&(Z(l.data().CreatorMode),w(l.data().isPremium))}catch(l){console.log(" error")}})()}),[C]),(0,o.useEffect)((()=>{(async()=>{let e=null;if(JSON.parse(localStorage.getItem("userInfo"))&&JSON.parse(localStorage.getItem("userInfo")).UserId&&(e=JSON.parse(localStorage.getItem("userInfo")).UserId),!e)return void alert("User not found");const l=(0,s.hJ)(a.db,n.Ul.INSTRUCTORS),t=(0,s.IO)(l,(0,s.ar)("createdBy","==",e)),o=await(0,s.PL)(t),r=[];o.forEach((e=>{r.push({id:e.id,name:e.data().name})})),S(r)})()}),[]),(0,o.useEffect)((()=>{(async()=>{const e=(0,s.IO)((0,s.hJ)(a.db,n.Ul.STUDIO),(0,s.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),t=(await(0,s.PL)(e)).docs.filter((e=>e.data().studioName)).map((e=>{const l=e.data();return{id:e.id,...l}}));l(t.map((e=>String(e.studioName)+" :"+String(e.id))))})()}),[]),(0,o.useEffect)((()=>{(async()=>{const e=(0,s.IO)((0,s.hJ)(a.db,n.Ul.OPEN_CLASSES),(0,s.ar)("UserId","==",JSON.parse(localStorage.getItem("userInfo")).UserId)),l=(await(0,s.PL)(e)).docs.filter((e=>e.data().openClassName)).map((e=>{const l=e.data();return{id:e.id,...l}})).map((async e=>{const l=(0,s.JU)(a.db,n.Ul.STUDIO,null===e||void 0===e?void 0:e.StudioId),t=await(0,s.QT)(l);return{...e,studioDetails:t.data()}})),t=await Promise.all(l);localStorage.setItem("OpenCLassCreated",JSON.stringify(t)),v(t),b(t.map((e=>String(e.openClassName)+" :"+String(e.id))))})()}),[v]),(0,o.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("OpenClassCreated"))||[];v(e);const l=e.map((e=>`${e.openClassName} : ${e.id}`));b(l)}),[b]),(0,A.jsxs)("div",{children:[(0,A.jsx)("br",{}),C?(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(x.Z,{sx:{width:"100%",typography:"body1"},children:(0,A.jsxs)(u.ZP,{value:f,children:[(0,A.jsx)(x.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,A.jsxs)(h.Z,{style:{color:j?"white":"black"},onChange:(e,l)=>{I(l)},"aria-label":"lab API tabs example",children:[(0,A.jsx)(c.Z,{style:{color:j?"white":"black"},label:"Add Open Class",value:"1"}),(0,A.jsx)(c.Z,{style:{color:j?"white":"black"},label:"Update Open Class",value:"2"})]})}),(0,A.jsx)(p.Z,{value:"1",children:(0,A.jsx)(J,{instructors:g,studioId:e,setOpenClass:v})}),(0,A.jsx)(p.Z,{value:"2",children:(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(T,{instructors:g,workshopId:m,studioId:e})})})]})})}):"",t.length>0&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("h3",{style:{color:j?"white":"black"},children:"Your Open Classes:"}),(0,A.jsx)($.Z,{dataList:t,activateOpenClass:async e=>{try{const l=(0,s.JU)(a.db,n.Ul.OPEN_CLASSES,e);await(0,s.r7)(l,{active:!0}),v((l=>l.map((l=>l.id===e?{...l,active:!0}:l))))}catch(l){console.error(l)}},deactivateOpenClass:async e=>{try{const l=(0,s.JU)(a.db,n.Ul.OPEN_CLASSES,e);await(0,s.r7)(l,{active:!1}),v((l=>l.map((l=>l.id===e?{...l,active:!1}:l))))}catch(l){console.error(l)}},actionsAllowed:!0})]})]})}},11518:()=>{},10884:(e,l,t)=>{e.exports=t.p+"static/media/india_11009487.98ac2ba43166eaa84593.png"},49071:(e,l,t)=>{e.exports=t.p+"static/media/whatsapp.8d81ece5885274edfd73.png"}}]);
//# sourceMappingURL=6643.6f80659c.chunk.js.map