"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[6853],{66853:(e,o,t)=>{t.r(o),t.d(o,{default:()=>w});var r=t(72791),s=t(697),n=t(13239),a=t(61889),i=t(57689),c=t(59434),l=t(83708),d=t(68449),u=t(60717),p=t(75424),h=t(18406),S=t(46022),g=t(52039),m=t(37404),y=t(39645),I=t(80184);const w=function(){var e,o;const{courseId:t}=(0,i.UO)();console.log("From CourseFullPage,",t);const w=(0,i.s0)(),x=(0,p.D)(),C=(0,c.v9)(u.w),[f,k]=(0,r.useState)(null),[O,R]=(0,r.useState)(null),[U,E]=(0,r.useState)(1),_=null===(e=JSON.parse(localStorage.getItem("userInfo")))||void 0===e?void 0:e.UserId,j=null===(o=JSON.parse(localStorage.getItem("userInfo")))||void 0===o?void 0:o.email,b=O&&U?O.price*U+l.rM.INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:0;if((0,r.useEffect)((()=>{t&&((async()=>{try{const e=await(0,d.Ld)(l.Ul.COURSES,t);if(R(e),e&&e.StudioId){const o=await(0,d.Ld)(l.Ul.STUDIO,e.StudioId);R((e=>({...e,studioDetails:o})))}}catch(e){console.error("Error fetching workshop data:",e),x("Failed to load workshop details.","error")}})(),(async()=>{try{const e=await(0,d.Us)(l.Rb.COURSEICON,t);k(e||"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}catch(e){console.error("Error fetching image URL:",e),k("https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg")}})())}),[t,x]),!O)return(0,I.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,I.jsx)(n.Z,{color:"primary"})});const N=encodeURIComponent("Hey, I found your Course on nritya.co.in. I'm interested");return(0,I.jsx)(s.Z,{sx:{padding:"0rem",minHeight:"100vh",color:C?"white":"black"},children:(0,I.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,I.jsx)(a.ZP,{item:!0,xs:12,lg:8,children:(0,I.jsx)(S.Z,{youtubeViedoLink:O.youtubeViedoLink,imageUrl:f,altText:O.courseName||O.workshopName})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,I.jsx)(m.Z,{dataItem:O,personsAllowed:U,setPersonsAllowed:E,totalPrice:b,handleBook:async()=>{if(!_)return x("Please login to book","warning"),void w("/login");try{const e={userId:_,entityType:l.Ul.COURSES,entityId:t,associatedStudioId:O.StudioId,emailLearner:j,personsAllowed:U,pricePerPerson:O.price,internetConvCharges:l.rM.INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR,totalPrice:b},o=await(0,h.C9)(e);if(o&&200===o.nSuccessCode)x("Workshop booked","success");else if(o&&205===o.nSuccessCode){const e=o.bookedAt,t=new Date(1e3*e).toLocaleString();x("Workshop already booked at ".concat(t),"info")}else{const e=o?"Error: ".concat(JSON.stringify(o)):"An unknown error occurred.";x(e,"error")}}catch(e){console.error(e),x((null===e||void 0===e?void 0:e.message)||"Something went wrong","error")}},entityType:l.Ul.COURSES})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,lg:8,children:(0,I.jsx)(g.Z,{dataItem:O,whatsappMessage:N})}),(0,I.jsx)(a.ZP,{item:!0,xs:12,lg:4,children:(0,I.jsx)(y.Z,{dataItem:O})})]})})}}}]);
//# sourceMappingURL=6853.97c15e4b.chunk.js.map