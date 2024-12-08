"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[3467],{33467:(e,t,l)=>{l.r(t),l.d(t,{default:()=>W});var s=l(72791),o=l(59434),r=l(60717),n=l(47022),a=l(89743),i=l(2677),c=l(95316),d=l(95313),p=l(56144),m=l(43360),h=l(67107),u=l(61889),g=l(44507),x=l(36314),j=l(49644),y=l(76989),v=l(29472),S=l(81918),f=l(697),Z=l(48387),I=l(74569),b=l.n(I),C=l(51650),w=l(26953),L=l(5403),k=l(63466),N=l(83708),D=l(1734),R=l(51321),U=l(99637),A=l(80184);const O="filterSearchType",E="filterDistances",T="filterDanceForms",F="browserGeoLoc",$=[N.zq.ALL,N.zq.BEGINNERS,N.zq.INTERMEDIATE,N.zq.ADVANCED],z=10**10,q=[1,2,3,4,5,6,7,8,9,10],P=[{name:"studio",label:"Studios",collection:N.Ul.STUDIO},{name:"workshop",label:"Workshops",collection:N.Ul.WORKSHOPS},{name:"openClass",label:"Open Classes",collection:N.Ul.OPEN_CLASSES},{name:"course",label:"Courses",collection:N.Ul.COURSES}];const W=()=>{const[e,t]=(0,s.useState)(""),[l,I]=(0,s.useState)([]),[W,H]=(0,s.useState)(""),B=(0,o.v9)(r.w),[J,G]=(0,s.useState)(!1),[_,V]=(0,s.useState)({}),[M,K]=(0,s.useState)("distances"),[Y,Q]=(0,s.useState)(0),[X,ee]=(0,s.useState)([]),[te,le]=(0,s.useState)([]),[se,oe]=(0,s.useState)("studio"),[re,ne]=(0,s.useState)("All"),[ae,ie]=(0,s.useState)(z),[ce,de]=(0,s.useState)({workshop:[],openClass:[],course:[]}),pe=C.W.map((e=>({value:e,label:e}))),me=()=>{G(!J)},he=(0,h.Z)({palette:{mode:B?"dark":"light"}}),ue=()=>{let e=0;localStorage.getItem(E)&&e++,re&&re!==N.zq.ALL&&e++,ae&&ae!==z&&e++;const t=localStorage.getItem(T);return t&&(e+=JSON.parse(t).length),e},ge=()=>{const l=localStorage.getItem(O)||se||"studio";null==e&&t("");let s=`https://nrityaserver-2b241e0a97e5.herokuapp.com/api/search/?query=${e}`;const o=(e=>{const t=P.find((t=>t.name===e));return t?t.collection:N.Ul.STUDIO})(l),r=localStorage.getItem("filterLocation")||"New Delhi";s+=`&city=${encodeURIComponent(r)}`,(async e=>{try{const t=`https://nrityaserver-2b241e0a97e5.herokuapp.com/api/autocomplete/?&city=${e}`,l=await fetch(t);if(!l.ok)throw new Error("Failed to fetch data");const s=await l.json();V(s)}catch(t){console.error("Error in processing:",t)}})(r),l&&(s+=`&entity=${encodeURIComponent(o)}`);const n=JSON.parse(localStorage.getItem(T)||"[]");n.length>0&&(s+=`&danceStyle=${encodeURIComponent(n.join(","))}`),o!==N.Ul.STUDIO&&re&&re!==N.zq.ALL&&(s+=`&level=${encodeURIComponent(re)}`),o!==N.Ul.WORKSHOPS&&o!==N.Ul.COURSES||!ae||ae===z||(s+=`&price=${encodeURIComponent(ae)}`);const a=function(){var e=localStorage.getItem(F);if(null!==e)try{var t=JSON.parse(e);if(t&&t.latitude&&t.longitude)return{latitude:t.latitude,longitude:t.longitude}}catch(l){console.error("Error parsing JSON:",l)}return null}();W&&a&&localStorage.getItem(E)&&(s+=`&distance=${encodeURIComponent(W)}&user_lat=${encodeURIComponent(a.latitude)}&user_lon=${encodeURIComponent(a.longitude)}`),console.log("apiEndpoint ",s),fetch(s).then((e=>e.json())).then((e=>{const t=Array.isArray(e)?e:Object.values(e);I(t)})).catch((e=>console.error("Error fetching search results:",e)))},xe=()=>{H(""),le([]),oe("studio"),ie(z),ne(N.zq.ALL),localStorage.removeItem(E),localStorage.removeItem(T),localStorage.setItem(O,"studio"),Q(ue()),G(!1),ge()};(0,s.useEffect)((()=>{const e=localStorage.getItem(E),t=localStorage.getItem(T),l=localStorage.getItem(O);l?oe(l):(oe("studio"),localStorage.setItem(O,"studio")),e&&H(e),t&&le(JSON.parse(t)),Q(ue()),ge()}),[re,ae]);const[je,ye]=(0,s.useState)("Search studios, workshops, open classes, courses..."),ve=()=>{window.innerWidth<600?ye("Search..."):ye("Search studios, workshops, open classes, courses...")};return(0,s.useEffect)((()=>(ve(),window.addEventListener("resize",ve),()=>{window.removeEventListener("resize",ve)})),[]),(0,A.jsxs)("div",{style:{backgroundColor:B?"#202020":"white",padding:"10px",minHeight:"75vh"},children:[(0,A.jsx)("header",{children:(0,A.jsxs)(n.Z,{style:{width:"100%"},children:[(0,A.jsx)(u.ZP,{container:!0,alignItems:"center",children:(0,A.jsx)(u.ZP,{item:!0,xs:12,children:(0,A.jsx)(g.Z,{theme:he,children:(0,A.jsx)(x.Z,{style:{width:"100%",paddingRight:0,marginTop:0,marginLeft:0,marginBottom:0},direction:"row",spacing:1,children:(0,A.jsx)(j.Z,{value:e,onInputChange:async(e,l)=>{if(t(l),l.length>=3)try{const e="filterLocation",t="New Delhi",s=localStorage.getItem(e)||t,o=`https://nrityaserver-2b241e0a97e5.herokuapp.com/api/autocomplete?query=${l}&city=${encodeURIComponent(s||t)}`,r=await b().get(o);console.log("Response :",r.data);const n=Object.values(r.data).filter((e=>null!==e));ee(n)}catch(s){console.error("Error fetching autocomplete suggestions:",s)}else ee([])},onChange:(e,l)=>{t(l)},options:X,getOptionLabel:e=>e.toString(),renderInput:e=>(0,A.jsx)(y.Z,{className:"autocomplete-input",...e,label:je,variant:"outlined",InputProps:{...e.InputProps,endAdornment:(0,A.jsx)(k.Z,{position:"end",style:{marginRight:0,marginTop:0,marginLeft:0,marginBottom:0},children:(0,A.jsx)(L.Z,{style:{cursor:"pointer",color:B?"#892CDC":"black",marginRight:1,width:"40px"},onClick:ge})}),style:{paddingRight:0,marginTop:0,marginLeft:0,marginBottom:0}}}),style:{flex:1}})})})})}),(0,A.jsx)("br",{}),(0,A.jsx)(a.Z,{className:"align-items-center",children:(0,A.jsx)("div",{className:"horizontal-scroll-wrapper-for-filters",children:P.map((e=>(0,A.jsx)(i.Z,{xs:"auto",style:{marginTop:"0.5rem"},children:(0,A.jsx)("button",{onClick:()=>{return t=e.name,localStorage.setItem(O,t),localStorage.removeItem(E),H(""),ne(N.zq.ALL),ie(z),oe(t),Q(ue()),void ge();var t},style:{cursor:"pointer",backgroundColor:se===e.name?B?"white":"black":B?"black":"white",color:se===e.name?B?"black":"white":B?"white":"black",borderRadius:"10px",fontWeight:"bold",border:"1px solid "+(B?"white":"black"),padding:"5px 10px",transition:"background-color 0.3s, color 0.3s"},children:e.label})},e.name)))})}),(0,A.jsx)(a.Z,{className:"align-items-center",children:(0,A.jsxs)("div",{className:"horizontal-scroll-wrapper-for-filters",children:[(0,A.jsx)(i.Z,{xs:"auto",style:{marginTop:"0.5rem"},children:(0,A.jsx)(v.Z,{onClick:me,badgeContent:Y,color:B?"warning":"secondary",pill:!0,children:(0,A.jsx)(S.Z,{className:"rounded-3",color:B?"warning":"secondary",label:"\u2630 filters",variant:B?"outlined":"contained"})})}),(te.length||W||re&&re!==N.zq.ALL||ae&&ae!==z)&&(0,A.jsx)(i.Z,{xs:"auto",style:{marginTop:"0.5rem"},children:(0,A.jsx)(v.Z,{color:"error",onClick:xe,style:{cursor:"pointer"},pill:!0,children:(0,A.jsx)(S.Z,{color:"error",label:"Clear All",onDelete:xe,style:{cursor:"pointer"},variant:B?"outlined":"contained",className:"rounded-3"})})}),(0,A.jsxs)(f.Z,{display:"flex",children:[W&&(0,A.jsx)(i.Z,{xs:"auto",style:{marginTop:"0.5rem"},children:(0,A.jsx)(v.Z,{color:"success",pill:!0,children:(0,A.jsx)(S.Z,{className:"rounded-3",color:"success",label:`Distance: ${W} km`,variant:B?"outlined":"contained",onDelete:()=>{H(null),localStorage.removeItem(E),Q(ue()),ge()}})})}),re&&re!==N.zq.ALL&&(0,A.jsx)(i.Z,{xs:"auto",children:(0,A.jsx)(v.Z,{color:"info",style:{marginLeft:"0",marginTop:"0.5rem"},pill:!0,children:(0,A.jsx)(S.Z,{className:"rounded-3",color:"info",label:`Level: ${re}`,variant:B?"outlined":"contained",onDelete:()=>ne(N.zq.ALL)})},re)}),ae&&ae!==z&&(0,A.jsx)(i.Z,{xs:"auto",children:(0,A.jsx)(v.Z,{color:"info",style:{marginLeft:"0",marginTop:"0.5rem"},pill:!0,children:(0,A.jsx)(S.Z,{className:"rounded-3",color:"info",label:`Prices Upto: ${ae}`,variant:B?"outlined":"contained",onDelete:()=>ie(z)})},ae)}),te&&(0,A.jsx)(i.Z,{xs:"auto",children:te.map(((e,t)=>(0,A.jsx)(v.Z,{color:"info",style:{marginLeft:0!==t?"0.25rem":"0",marginTop:"0.5rem"},pill:!0,children:(0,A.jsx)(S.Z,{className:"rounded-3",color:"info",label:`Dance Form: ${e}`,variant:B?"outlined":"contained",onDelete:()=>(e=>{const t=te.filter((t=>t!==e));le(t),localStorage.setItem(T,JSON.stringify(t)),Q(ue()),ge()})(e)})},t)))})]})]})})]})}),(0,A.jsxs)(c.Z,{show:J,onHide:me,backdrop:"static",children:[(0,A.jsx)(c.Z.Header,{closeButton:!0,children:(0,A.jsx)(c.Z.Title,{children:"Filters"})}),(0,A.jsxs)(c.Z.Body,{children:[(0,A.jsxs)(a.Z,{children:[(0,A.jsxs)(i.Z,{md:4,children:[(0,A.jsx)("h5",{children:"Filter By:"}),(0,A.jsxs)("ul",{style:{listStyleType:"none",padding:0},children:["studio"===se&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("hr",{style:{margin:"5px 0"}}),(0,A.jsx)("li",{style:{cursor:"pointer",margin:"5px 0"},onClick:()=>(K("distances"),G(!0)),children:"Distances"})]}),("workshop"===se||"course"===se)&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("hr",{style:{margin:"5px 0"}}),(0,A.jsx)("li",{style:{cursor:"pointer",margin:"5px 0"},onClick:()=>(K("price"),G(!0)),children:"Price"})]}),"studio"!==se&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("hr",{style:{margin:"5px 0"}}),(0,A.jsx)("li",{style:{cursor:"pointer",margin:"5px 0"},onClick:()=>(K("level"),G(!0)),children:"Level"})]}),(0,A.jsx)("hr",{style:{margin:"5px 0"}}),(0,A.jsx)("li",{style:{cursor:"pointer",margin:"5px 0"},onClick:()=>(K("danceForm"),G(!0)),children:"Dance Forms"}),(0,A.jsx)("hr",{style:{margin:"5px 0"}})]})]}),(0,A.jsxs)(i.Z,{md:8,children:[J&&"distances"===M&&(0,A.jsxs)(d.Z.Group,{controlId:"filterDistances",children:[(0,A.jsx)(d.Z.Label,{children:"Distances:"}),(0,A.jsxs)(d.Z.Control,{className:"p-0",as:"select",value:W,onChange:e=>H(e.target.value),children:[(0,A.jsx)("option",{value:"",children:"Select distance"}),q.map((e=>(0,A.jsxs)("option",{value:e,children:[e," km"]},e)))]})]}),J&&"level"===M&&(0,A.jsxs)(d.Z.Group,{controlId:"filterLevel",children:[(0,A.jsx)(d.Z.Label,{children:"Level :"}),(0,A.jsxs)(d.Z.Control,{className:"p-0",as:"select",value:re,onChange:e=>ne(e.target.value),children:[(0,A.jsx)("option",{value:"",children:"Select Lavel"}),$.map((e=>(0,A.jsx)("option",{value:e,children:e},e)))]})]}),J&&"price"===M&&(0,A.jsxs)(d.Z.Group,{controlId:"filterPrice",children:[(0,A.jsx)(d.Z.Label,{children:"Prices :"}),(0,A.jsxs)(d.Z.Control,{className:"p-0",as:"select",value:ae,onChange:e=>ie(e.target.value),children:[(0,A.jsx)("option",{value:"",children:"Prices below"}),[499,999,1499,1999,2999,4999,9999,z].map((e=>(0,A.jsx)("option",{value:e,children:e>=z?"All":e},e)))]})]}),J&&"danceForm"===M&&(0,A.jsxs)(d.Z.Group,{controlId:"filterDanceForms",children:[(0,A.jsx)(d.Z.Label,{children:"Dance Forms:"}),(0,A.jsx)(Z.ZP,{isMulti:!0,value:pe.filter((e=>te.includes(e.value))),onChange:e=>{le(e?e.map((e=>e.value)):[])},options:pe,closeMenuOnSelect:!1,placeholder:"Select Dance Forms",styles:{valueContainer:e=>({...e,maxHeight:100,overflowY:"auto"}),multiValue:(e,t)=>t.data.isFixed?{...e,backgroundColor:"gray"}:e,multiValueLabel:(e,t)=>t.data.isFixed?{...e,fontWeight:"bold",color:"white",paddingRight:6}:e,multiValueRemove:(e,t)=>t.data.isFixed?{...e,display:"none"}:e}})]})]})]}),(0,A.jsxs)(p.Z,{style:{marginTop:"1rem"},children:[(0,A.jsx)(m.Z,{variant:"primary",onClick:()=>{localStorage.setItem(E,W),localStorage.setItem(O,se),localStorage.setItem(T,JSON.stringify(te)),Q(ue()),G(!1),ge()},children:"Apply"}),(0,A.jsx)(m.Z,{variant:"danger",onClick:xe,style:{marginLeft:"10px"},children:"Clear All Filters"})]})]})]}),(0,A.jsx)("hr",{}),"studio"===se&&(0,A.jsx)("div",{style:{display:"flex",flexWrap:"wrap",padding:"10px"},children:0===l.length?(0,A.jsx)("div",{className:"",style:{minHeight:"30vh"}}):l.map(((e,t)=>(0,A.jsx)("div",{className:"studio-card-container",style:{padding:"0.2rem"},md:2,children:(0,A.jsx)("a",{href:`#/studio/${e.studioId}`,style:{textDecoration:"none"},children:(0,A.jsx)(w.Z,{studio:e})})},t)))}),"workshop"===se&&(0,A.jsx)("div",{style:{display:"flex",flexWrap:"wrap",padding:"10px"},children:0===l.length?(0,A.jsx)("div",{className:"",style:{minHeight:"30vh"}}):l.map(((e,t)=>(0,A.jsx)("div",{className:"studio-card-container",style:{padding:"0.2rem"},md:2,children:(0,A.jsx)(D.Z,{dataItem:e,studioIdName:_},e.id)},t)))}),"openClass"===se&&(0,A.jsx)("div",{style:{display:"flex",flexWrap:"wrap",padding:"10px"},children:0===l.length?(0,A.jsx)("div",{className:"",style:{minHeight:"30vh"}}):l.map(((e,t)=>(0,A.jsx)("div",{className:"studio-card-container",style:{padding:"0.2rem"},md:2,children:(0,A.jsx)(R.Z,{dataItem:e,studioIdName:_},e.id)},t)))}),"course"===se&&(0,A.jsx)("div",{style:{display:"flex",flexWrap:"wrap",padding:"10px"},children:0===l.length?(0,A.jsx)("div",{className:"",style:{minHeight:"30vh"}}):l.map(((e,t)=>(0,A.jsx)("div",{className:"studio-card-container",style:{padding:"0.2rem"},md:2,children:(0,A.jsx)(U.Z,{dataItem:e,studioIdName:_},e.id)},t)))})]})}}}]);
//# sourceMappingURL=3467.11e44d68.chunk.js.map