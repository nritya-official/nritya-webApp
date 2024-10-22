"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[2184],{99637:(e,o,t)=>{t.d(o,{Z:()=>P});var r=t(72791),n=t(92552),l=t(84654),i=t(28658),a=t(69597),s=t(83168),c=t(88447),d=t(697),h=t(61889),p=t(20890),x=t(94294),b=t(13400),u=t(36314),m=t(59434),g=t(83708),w=t(68449),y=t(60717),f=t(97892),k=t.n(f),j=t(75424),v=t(24849),S=t(18406),C=t(49071),Z=t(10884),I=t(80184);function N(e){var o,t,n,l,i;let{open:a,handleClose:s,dataItemId:u}=e;const f=(0,j.D)(),N=(0,m.v9)(y.w),[P,D]=(0,r.useState)(null),[R,L]=(0,r.useState)(null),[O,U]=(0,r.useState)(1),A=null===(o=JSON.parse(localStorage.getItem("userInfo")))||void 0===o?void 0:o.UserId,T=null===(t=JSON.parse(localStorage.getItem("userInfo")))||void 0===t?void 0:t.email;(0,r.useEffect)((()=>{(async()=>{try{const e=await(0,w.Us)(g.Rb.COURSEICON,u);D(e||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}catch(e){console.error("Error fetching image URL:",e)}})(),(async()=>{try{const e=await(0,w.Ld)(g.Ul.COURSES,u);if(L(e),e&&e.StudioId){const o=await(0,w.Ld)(g.Ul.STUDIO,e.StudioId);L((e=>({...e,studioDetails:o})))}}catch(e){console.error("Error fetching image URL:",e)}})()}),[]);const W=encodeURIComponent("Hey, I found your Studio on nritya.co.in. I'm interested");return(0,I.jsx)(c.Z,{open:a,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,I.jsx)(d.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"90%",overflow:"auto",width:{xs:"90%",md:"60%"},bgcolor:N?"black":"background.paper",borderWidth:"2px",borderStyle:"solid",borderColor:N?"white":"black",boxShadow:24,p:"1rem",borderRadius:"8px"},children:R?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(h.ZP,{container:!0,spacing:"8px",rowGap:2,children:[(0,I.jsx)(h.ZP,{item:!0,xs:12,lg:8,children:(0,I.jsx)("img",{src:P,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:"8px"}})}),(0,I.jsxs)(h.ZP,{item:!0,xs:12,lg:4,children:[(0,I.jsxs)(d.Z,{sx:{height:"100%",bgcolor:N?"#333333":"#efefef",p:2,borderRadius:"8px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,I.jsxs)(d.Z,{sx:{flex:1},children:[(0,I.jsx)(p.Z,{variant:"h6",component:"p",sx:{color:N?"white":"black"},children:k()(R.date).format("LL")}),(0,I.jsx)(p.Z,{variant:"h6",component:"p",sx:{color:N?"white":"black"},children:R.time}),(0,I.jsx)(p.Z,{variant:"body1",component:"p",sx:{mt:"2rem",color:N?"white":"black"},children:R.venue})]}),(0,I.jsxs)(d.Z,{sx:{mt:"2rem",display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,I.jsxs)(p.Z,{variant:"h5",sx:{alignSelf:"center",color:N?"white":"black"},children:["\u20b9",R.price]}),(0,I.jsx)(x.Z,{variant:"outlined",onClick:async()=>{if(A)try{const e={userId:A,entityType:g.Ul.COURSES,entityId:u,associatedStudioId:R.StudioId,emailLearner:T,personsAllowed:O,pricePerPerson:R.price},o=await(0,S.C9)(e);if(console.log("Result ",o),o&&200===o.nSuccessCode)f("Course booked","success");else if(o&&205===o.nSuccessCode){const e=o.bookedAt,t=new Date(1e3*e).toLocaleString();f(`Course booked already at ${t}`,"info")}else{const e=o?`Error: ${JSON.stringify(o)}`:"An unknown error occurred.";f(e,"info")}}catch(e){console.error(e),f((null===e||void 0===e?void 0:e.message)||"Something went wrong","error")}else f("Please login to book","warning")},sx:{alignSelf:"center",boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"transparent",borderColor:N?"white":"black",color:N?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:N?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:N?"white":"black"},"&:focus":{boxShadow:"none"}},children:"Book Now"})]})]}),A&&(0,I.jsx)(p.Z,{component:"p",variant:"caption",sx:{my:"2px",color:N?"white":"black",textAlign:"center"},children:"Book here and pay at the venue"})]}),(0,I.jsxs)(h.ZP,{item:!0,sx:{mt:1},children:[(0,I.jsx)(p.Z,{variant:"h5",component:"p",sx:{color:N?"white":"black"},children:R.courseName||R.workshopName||""}),(0,I.jsxs)(p.Z,{variant:"body1",component:"p",sx:{mt:1,color:N?"white":"black"},children:[(0,I.jsxs)("span",{children:["By ",(null===(n=R.studioDetails)||void 0===n?void 0:n.studioName)||""]}),R.studioDetails&&(null===(l=R.studioDetails)||void 0===l?void 0:l.whatsappNumber)&&(0,I.jsx)(b.Z,{color:"success",size:"small",target:"_blank",href:`https://wa.me/91${R.studioDetails.whatsappNumber}?text=${W}`,children:(0,I.jsx)("img",{src:C,alt:"Whatsapp call",style:{width:30,height:28}})}),R.studioDetails&&(null===(i=R.studioDetails)||void 0===i?void 0:i.mobileNumber)&&(0,I.jsx)(b.Z,{color:"primary",size:"small",target:"_blank",href:`tel:${R.studioDetails.mobileNumber}`,children:(0,I.jsx)("img",{src:Z,alt:"Phone call",style:{width:30,height:28}})})]}),(0,I.jsx)(p.Z,{variant:"body1",component:"p",sx:{mt:2,color:N?"white":"black"},children:R.description||""})]})]}),(0,I.jsx)(d.Z,{sx:{mt:"1rem",textAlign:"right"},children:(0,I.jsx)(x.Z,{onClick:s,variant:"outlined",sx:{color:"white",boxShadow:"none",border:"1px solid",backgroundColor:"transparent",borderColor:N?"white":"black",color:N?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:N?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:N?"white":"black"},"&:focus":{boxShadow:"none"}},children:"Close"})})]}):(0,I.jsx)(v.Z,{})})})}function P(e){var o,t;let{dataItem:c,studioIdName:h}=e;const p=(0,m.v9)(y.w),[x,b]=(0,r.useState)(!1),w={backgroundColor:p?"#444":"white",padding:"0px",color:p?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};let f=null,k=null;return f=(0,S.P9)(c.youtubeViedoLink),f&&(k=`https://img.youtube.com/vi/${f}/maxresdefault.jpg`),(0,I.jsxs)("a",{href:`#/course/${c.id}`,style:{textDecoration:"none",color:p?"white":"black"},children:[(0,I.jsxs)(l.Z,{variant:"solid",sx:{...w,flex:"none"},children:[(0,I.jsxs)(n.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,I.jsx)("img",{src:k||c.iconUrl||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg",loading:"lazy",alt:"Studio Image",style:{maxWidth:"100%",objectFit:"cover",overflow:"hidden"}}),(0,I.jsx)(u.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:c&&c.danceStyles&&Array.isArray(c.danceStyles)?c.danceStyles.slice(0,3).map(((e,o)=>(0,I.jsx)(a.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:g.lt[o].backgroundColor,color:g.lt[o].color},children:e.trim()},o))):(0,I.jsx)(a.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)}),(0,I.jsx)(u.Z,{direction:"row",spacing:2,style:{position:"absolute",top:0,left:0,padding:"1px",paddingTop:"1px"},children:c&&c.level&&(0,I.jsx)(a.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:null===(o=g.RY[c.level])||void 0===o?void 0:o.backgroundColor,color:null===(t=g.RY[c.level])||void 0===t?void 0:t.color},children:c.level},1)})]}),(0,I.jsxs)(i.Z,{style:{padding:"10px",paddingTop:"5px"},children:[(0,I.jsx)(d.Z,{fontWeight:"bold",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,style:{color:p?"white":"black",extDecoder:"one"},children:(0,I.jsx)("span",{children:c&&(c.courseName||c.workshopName)?c.courseName||c.workshopName:""})}),(0,I.jsx)(s.ZP,{style:{marginTop:10,color:p?"white":"black"},level:"body-xs",noWrap:!0,children:c.city?c.city:""}),(0,I.jsxs)(s.ZP,{style:{color:p?"white":"black"},level:"body-xs",children:[c.date||""," | ",c.time||""]}),(0,I.jsx)(s.ZP,{style:{color:p?"white":"black"},children:c&&c.price&&(0,I.jsxs)("span",{children:[" \u20b9",c.price]})})]})]}),(0,I.jsx)(N,{dataItemId:c.id,open:x,handleClose:()=>b(!1)})]})}},51321:(e,o,t)=>{t.d(o,{Z:()=>P});var r=t(72791),n=t(92552),l=t(84654),i=t(28658),a=t(69597),s=t(83168),c=t(697),d=t(61889),h=t(88447),p=t(36314),x=t(20890),b=t(94294),u=t(13400),m=t(24849),g=t(59434),w=t(83708),y=t(68449),f=t(60717),k=t(97892),j=t.n(k),v=t(75424),S=t(18406),C=t(49071),Z=t(10884),I=t(80184);function N(e){var o,t,n,l,i;let{open:a,handleClose:s,dataItemId:p}=e;console.log("use effect");const k=(0,v.D)(),N=(0,g.v9)(f.w),[P,D]=(0,r.useState)(null),[R,L]=(0,r.useState)(null),[O,U]=(0,r.useState)(1),A=null===(o=JSON.parse(localStorage.getItem("userInfo")))||void 0===o?void 0:o.UserId,T=null===(t=JSON.parse(localStorage.getItem("userInfo")))||void 0===t?void 0:t.email;(0,r.useEffect)((()=>{(async()=>{try{const e=await(0,y.Us)(w.Rb.OPENCLASSICON,p);D(e||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}catch(e){console.error("Error fetching image URL:",e)}})(),(async()=>{try{const e=await(0,y.Ld)("OpenClasses",p);if(L(e),e&&e.StudioId){const o=await(0,y.Ld)(w.Ul.STUDIO,e.StudioId);L((e=>({...e,studioDetails:o}))),console.log(R)}}catch(e){console.error("Error fetching image URL:",e)}})()}),[]);const W=encodeURIComponent("Hey, I found your Studio on nritya.co.in. I'm interested");return(0,I.jsx)(h.Z,{open:a,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,I.jsx)(c.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"90%",overflow:"auto",width:{xs:"90%",md:"60%"},bgcolor:N?"black":"background.paper",borderWidth:"2px",borderStyle:"solid",borderColor:N?"white":"black",boxShadow:24,p:"1rem",borderRadius:"8px"},children:R?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(d.ZP,{container:!0,spacing:"8px",rowGap:2,children:[(0,I.jsx)(d.ZP,{item:!0,xs:12,lg:8,children:(0,I.jsx)("img",{src:P,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:"8px"}})}),(0,I.jsxs)(d.ZP,{item:!0,xs:12,lg:4,children:[(0,I.jsxs)(c.Z,{sx:{height:"100%",bgcolor:N?"#333333":"#efefef",p:2,borderRadius:"8px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,I.jsxs)(c.Z,{sx:{flex:1},children:[(0,I.jsx)(x.Z,{variant:"h6",component:"p",sx:{color:N?"white":"black"},children:j()(R.date).format("LL")}),(0,I.jsx)(x.Z,{variant:"h6",component:"p",sx:{color:N?"white":"black"},children:R.time}),(0,I.jsx)(x.Z,{variant:"body1",component:"p",sx:{mt:"2rem",color:N?"white":"black"},children:R.venue})]}),(0,I.jsxs)(c.Z,{sx:{mt:"2rem",display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,I.jsxs)(x.Z,{variant:"h5",sx:{alignSelf:"center",color:N?"white":"black"},children:["\u20b9",R.price||0]}),(0,I.jsx)(b.Z,{variant:"outlined",onClick:async()=>{if(A)try{const e={userId:A,entityType:w.Ul.OPEN_CLASSES,entityId:p,associatedStudioId:R.StudioId,emailLearner:T,personsAllowed:O,pricePerPerson:R.price||0},o=await(0,S.C9)(e);if(console.log("Result ",o),o&&200===o.nSuccessCode)k("Open Class booked","success");else if(o&&205===o.nSuccessCode){const e=o.bookedAt,t=new Date(1e3*e).toLocaleString();k(`Open Class booked already at ${t}`,"info")}else{const e=o?`Error: ${JSON.stringify(o)}`:"An unknown error occurred.";k(e,"info")}}catch(e){console.error(e),k((null===e||void 0===e?void 0:e.message)||"Something went wrong","error")}else k("Please login to book","warning")},sx:{alignSelf:"center",boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"transparent",borderColor:N?"white":"black",color:N?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:N?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:N?"white":"black"},"&:focus":{boxShadow:"none"}},children:"Book Now"})]})]}),A&&(0,I.jsx)(x.Z,{component:"p",variant:"caption",sx:{my:"2px",color:N?"white":"black",textAlign:"center"},children:"Book here and pay at the venue"})]}),(0,I.jsxs)(d.ZP,{item:!0,sx:{mt:1},children:[(0,I.jsxs)(x.Z,{variant:"h5",component:"p",sx:{color:N?"white":"black"},children:[R.openClassName||"",R.danceStyles.map((e=>` | ${e}`))]}),(0,I.jsxs)(x.Z,{variant:"body1",component:"p",sx:{mt:1,color:N?"white":"black"},children:[(0,I.jsxs)("span",{children:["By ",(null===(n=R.studioDetails)||void 0===n?void 0:n.studioName)||""]}),R.studioDetails&&(null===(l=R.studioDetails)||void 0===l?void 0:l.whatsappNumber)&&(0,I.jsx)(u.Z,{color:"success",size:"small",target:"_blank",href:`https://wa.me/91${R.studioDetails.whatsappNumber}?text=${W}`,children:(0,I.jsx)("img",{src:C,alt:"Whatsapp call",style:{width:30,height:28}})}),R.studioDetails&&(null===(i=R.studioDetails)||void 0===i?void 0:i.mobileNumber)&&(0,I.jsx)(u.Z,{color:"primary",size:"small",target:"_blank",href:`tel:${R.studioDetails.mobileNumber}`,children:(0,I.jsx)("img",{src:Z,alt:"Phone call",style:{width:30,height:28}})})]}),(0,I.jsx)(x.Z,{variant:"body1",component:"p",sx:{mt:2,color:N?"white":"black"},children:R.description||""})]})]}),(0,I.jsx)(c.Z,{sx:{mt:"1rem",textAlign:"right"},children:(0,I.jsx)(b.Z,{onClick:s,variant:"outlined",sx:{color:"white",boxShadow:"none",border:"1px solid",backgroundColor:"transparent",borderColor:N?"white":"black",color:N?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:N?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:N?"white":"black"},"&:focus":{boxShadow:"none"}},children:"Close"})})]}):(0,I.jsx)(m.Z,{})})})}function P(e){var o,t;let{dataItem:d,studioIdName:h}=e;const x=(0,g.v9)(f.w),[b,u]=(0,r.useState)(!1),m={backgroundColor:x?"#444":"white",padding:"0px",color:x?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};let y=null,k=null;return y=(0,S.P9)(d.youtubeViedoLink),y&&(k=`https://img.youtube.com/vi/${y}/maxresdefault.jpg`),(0,I.jsxs)("a",{href:`#/openClass/${d.id}`,style:{textDecoration:"none",color:x?"white":"black"},children:[(0,I.jsxs)(l.Z,{variant:"solid",sx:{...m,flex:"none"},children:[(0,I.jsxs)(n.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,I.jsx)("img",{src:k||d.iconUrl,loading:"lazy",alt:"Open Class Image",style:{maxWidth:"100%",objectFit:"cover",overflow:"hidden"}}),(0,I.jsx)(p.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:d&&d.danceStyles&&Array.isArray(d.danceStyles)?d.danceStyles.slice(0,3).map(((e,o)=>(0,I.jsx)(a.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:w.lt[o].backgroundColor,color:w.lt[o].color},children:e.trim()},o))):(0,I.jsx)(a.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)}),(0,I.jsx)(p.Z,{direction:"row",spacing:2,style:{position:"absolute",top:0,left:0,padding:"1px",paddingTop:"1px"},children:d&&d.level&&(0,I.jsx)(a.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:null===(o=w.RY[d.level])||void 0===o?void 0:o.backgroundColor,color:null===(t=w.RY[d.level])||void 0===t?void 0:t.color},children:d.level},1)})]}),(0,I.jsxs)(i.Z,{style:{padding:"10px",paddingTop:"5px"},children:[(0,I.jsx)(c.Z,{fontWeight:"bold",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,style:{color:x?"white":"black",extDecoder:"one"},children:(0,I.jsx)("span",{children:d&&d.openClassName?d.openClassName:""})}),(0,I.jsx)(s.ZP,{style:{marginTop:10,color:x?"white":"black"},level:"body-xs",noWrap:!0,children:d.city?d.city:""}),(0,I.jsxs)(s.ZP,{style:{color:x?"white":"black"},level:"body-xs",children:[d.date||""," | ",d.time||""]})]})]}),(0,I.jsx)(N,{dataItemId:d.id,open:b,handleClose:()=>u(!1)})]})}},1734:(e,o,t)=>{t.d(o,{Z:()=>P});var r=t(72791),n=t(92552),l=t(84654),i=t(28658),a=t(69597),s=t(83168),c=t(88447),d=t(697),h=t(61889),p=t(20890),x=t(94294),b=t(13400),u=t(36314),m=t(59434),g=t(83708),w=t(68449),y=t(60717),f=t(97892),k=t.n(f),j=t(75424),v=t(24849),S=t(18406),C=t(49071),Z=t(10884),I=t(80184);function N(e){var o,t,n,l,i;let{open:a,handleClose:s,dataItemId:u}=e;const f=(0,j.D)(),N=(0,m.v9)(y.w),[P,D]=(0,r.useState)(null),[R,L]=(0,r.useState)(null),[O,U]=(0,r.useState)(1),A=null===(o=JSON.parse(localStorage.getItem("userInfo")))||void 0===o?void 0:o.UserId,T=null===(t=JSON.parse(localStorage.getItem("userInfo")))||void 0===t?void 0:t.email;(0,r.useEffect)((()=>{(async()=>{try{const e=await(0,w.Us)(g.Rb.WORKSHOPICON,u);D(e||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}catch(e){console.error("Error fetching image URL:",e)}})(),(async()=>{try{const e=await(0,w.Ld)(g.Ul.WORKSHOPS,u);if(L(e),e&&e.StudioId){const o=await(0,w.Ld)(g.Ul.STUDIO,e.StudioId);L((e=>({...e,studioDetails:o})))}}catch(e){console.error("Error fetching image URL:",e)}})()}),[]);const W=encodeURIComponent("Hey, I found your Studio on nritya.co.in. I'm interested");return(0,I.jsx)(c.Z,{open:a,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,I.jsx)(d.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"90%",overflow:"auto",width:{xs:"90%",md:"60%"},bgcolor:N?"black":"background.paper",borderWidth:"2px",borderStyle:"solid",borderColor:N?"white":"black",boxShadow:24,p:"1rem",borderRadius:"8px"},children:R?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(h.ZP,{container:!0,spacing:"8px",rowGap:2,children:[(0,I.jsx)(h.ZP,{item:!0,xs:12,lg:8,children:(0,I.jsx)("img",{src:P,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:"8px"}})}),(0,I.jsxs)(h.ZP,{item:!0,xs:12,lg:4,children:[(0,I.jsxs)(d.Z,{sx:{height:"100%",bgcolor:N?"#333333":"#efefef",p:2,borderRadius:"8px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,I.jsxs)(d.Z,{sx:{flex:1},children:[(0,I.jsx)(p.Z,{variant:"h6",component:"p",sx:{color:N?"white":"black"},children:k()(R.date).format("LL")}),(0,I.jsx)(p.Z,{variant:"h6",component:"p",sx:{color:N?"white":"black"},children:R.time}),(0,I.jsx)(p.Z,{variant:"body1",component:"p",sx:{mt:"2rem",color:N?"white":"black"},children:R.city})]}),(0,I.jsxs)(d.Z,{sx:{mt:"2rem",display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,I.jsxs)(p.Z,{variant:"h5",sx:{alignSelf:"center",color:N?"white":"black"},children:["\u20b9",R.price]}),(0,I.jsx)(x.Z,{variant:"outlined",onClick:async()=>{if(console.log(A),A)try{const e={userId:A,entityType:g.Ul.WORKSHOPS,entityId:u,associatedStudioId:R.StudioId,emailLearner:T,personsAllowed:O,pricePerPerson:R.price},o=await(0,S.C9)(e);if(console.log("Result ",o),o&&200===o.nSuccessCode)f("Workshop booked","success");else if(o&&205===o.nSuccessCode){const e=o.bookedAt,t=new Date(1e3*e).toLocaleString();f(`Workshop booked already at ${t}`,"info")}else{const e=o?`Error: ${JSON.stringify(o)}`:"An unknown error occurred.";f(e,"info")}}catch(e){console.error(e),f((null===e||void 0===e?void 0:e.message)||"Something went wrong","error")}else f("Please login to book","warning")},sx:{alignSelf:"center",boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"transparent",borderColor:N?"white":"black",color:N?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:N?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:N?"white":"black"},"&:focus":{boxShadow:"none"}},children:A?"Book Now":"Login to Book"})]})]}),A&&(0,I.jsx)(p.Z,{component:"p",variant:"caption",sx:{my:"2px",color:N?"white":"black",textAlign:"center"},children:"Book here and pay at the venue"})]}),(0,I.jsxs)(h.ZP,{item:!0,sx:{mt:1},children:[(0,I.jsxs)(p.Z,{variant:"h5",component:"p",sx:{color:N?"white":"black"},children:[R.workshopName||"",R.danceStyles.map((e=>` | ${e}`))]}),(0,I.jsxs)(p.Z,{variant:"body1",component:"p",sx:{mt:1,color:N?"white":"black"},children:[(0,I.jsxs)("span",{children:["By ",(null===(n=R.studioDetails)||void 0===n?void 0:n.studioName)||""]}),R.studioDetails&&(null===(l=R.studioDetails)||void 0===l?void 0:l.whatsappNumber)&&(0,I.jsx)(b.Z,{color:"success",size:"small",target:"_blank",href:`https://wa.me/91${R.studioDetails.whatsappNumber}?text=${W}`,children:(0,I.jsx)("img",{src:C,alt:"Whatsapp call",style:{width:30,height:28}})}),R.studioDetails&&(null===(i=R.studioDetails)||void 0===i?void 0:i.mobileNumber)&&(0,I.jsx)(b.Z,{color:"primary",size:"small",target:"_blank",href:`tel:${R.studioDetails.mobileNumber}`,children:(0,I.jsx)("img",{src:Z,alt:"Phone call",style:{width:30,height:28}})})]}),(0,I.jsx)(p.Z,{variant:"body1",component:"p",sx:{mt:2,color:N?"white":"black"},children:R.description||""})]})]}),(0,I.jsx)(d.Z,{sx:{mt:"1rem",textAlign:"right"},children:(0,I.jsx)(x.Z,{onClick:s,variant:"outlined",sx:{color:"white",boxShadow:"none",border:"1px solid",backgroundColor:"transparent",borderColor:N?"white":"black",color:N?"white":"black","&:hover":{backgroundColor:"transparent",borderColor:N?"white":"black",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"transparent",borderColor:N?"white":"black"},"&:focus":{boxShadow:"none"}},children:"Close"})})]}):(0,I.jsx)(v.Z,{})})})}function P(e){var o,t;let{dataItem:c,studioIdName:h}=e;const p=(0,m.v9)(y.w),[x,b]=(0,r.useState)(!1),w={backgroundColor:p?"#444":"white",padding:"0px",color:p?"white":"black",marginRight:"10px",width:320,maxWidth:"100%",boxShadow:"lg",transition:"opacity 0.3s ease"};let f=null,k=null;return f=(0,S.P9)(c.youtubeViedoLink),f&&(k=`https://img.youtube.com/vi/${f}/maxresdefault.jpg`),(0,I.jsxs)("a",{href:`#/workshop/${c.id}`,style:{textDecoration:"none",color:p?"white":"black"},children:[(0,I.jsxs)(l.Z,{variant:"solid",sx:{...w,flex:"none"},children:[(0,I.jsxs)(n.Z,{ratio:"1.78",style:{position:"relative"},children:[(0,I.jsx)("img",{src:k||c.iconUrl||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg",loading:"lazy",alt:"Studio Image",style:{maxWidth:"100%",objectFit:"cover",overflow:"hidden"}}),(0,I.jsx)(u.Z,{direction:"row",spacing:2,style:{position:"absolute",bottom:0,left:0,padding:"1px"},children:c&&c.danceStyles&&Array.isArray(c.danceStyles)?c.danceStyles.slice(0,3).map(((e,o)=>(0,I.jsx)(a.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:g.lt[o].backgroundColor,color:g.lt[o].color},children:e.trim()},o))):(0,I.jsx)(a.Z,{color:"danger",style:{marginBottom:"10px",fontSize:"0.8rem"},children:"No danceforms"},10)}),(0,I.jsx)(u.Z,{direction:"row",spacing:2,style:{position:"absolute",top:0,left:0,padding:"1px",paddingTop:"1px"},children:c&&c.level&&(0,I.jsx)(a.Z,{sx:{marginLeft:"10px",marginBottom:"10px",fontSize:"0.8rem",bgcolor:null===(o=g.RY[c.level])||void 0===o?void 0:o.backgroundColor,color:null===(t=g.RY[c.level])||void 0===t?void 0:t.color},children:c.level},1)})]}),(0,I.jsxs)(i.Z,{style:{padding:"10px",paddingTop:"5px"},children:[(0,I.jsx)(d.Z,{fontWeight:"bold",color:"neutral",textColor:"text.primary",underline:"none",overlay:!0,style:{color:p?"white":"black",extDecoder:"one"},children:(0,I.jsx)("span",{children:c&&c.workshopName?c.workshopName:"0"})}),(0,I.jsx)(s.ZP,{style:{marginTop:10,color:p?"white":"black"},level:"body-xs",noWrap:!0,children:c.venue?c.venue:""}),(0,I.jsxs)(s.ZP,{style:{color:p?"white":"black"},level:"body-xs",children:[c.date||""," | ",c.time||""]}),(0,I.jsx)(s.ZP,{style:{color:p?"white":"black"},children:c&&c.price&&(0,I.jsxs)("span",{children:[" \u20b9",c.price]})})]})]}),(0,I.jsx)(N,{dataItemId:c.id,open:x,handleClose:()=>b(!1)})]})}},18406:(e,o,t)=>{t.d(o,{C9:()=>l,P9:()=>i,qC:()=>n});var r=t(83708);async function n(e,o,t,n){const l=r.A3,i=localStorage.getItem("authToken");try{const r=await fetch(l+"crud/newEntity/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({data:e,collection_name:o,notify:t,metadata:n})});if(!r.ok)throw console.log("Error in postData:",r),new Error(`HTTP error! status: ${r.status}`);return r}catch(a){throw console.error("Error in postData:",a),a}}const l=async e=>{const o=`${r.uM.PROD}bookings/bookEntity/`;try{const t=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e.userId,entityType:e.entityType,entityId:e.entityId,associatedStudioId:e.associatedStudioId,emailLearner:e.emailLearner,personsAllowed:e.personsAllowed,pricePerPerson:e.pricePerPerson})}),r=await t.json();return t.ok?(console.log("Booking successful:",r),r):(console.error("Booking failed:",r),r)}catch(t){return console.error("Error occurred while booking:",t),null}},i=e=>{if(console.log("MediaDisplay",e),!e)return null;const o=e.trim().match(/(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w\-]+)/);let t=null;return o&&(t=o[1]),console.log("MediaDisplay",t),t}},10884:(e,o,t)=>{e.exports=t.p+"static/media/india_11009487.98ac2ba43166eaa84593.png"},49071:(e,o,t)=>{e.exports=t.p+"static/media/whatsapp.8d81ece5885274edfd73.png"}}]);
//# sourceMappingURL=2184.8afd7974.chunk.js.map