"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9059],{81018:(a,e,r)=>{r.d(e,{Z:()=>j});var t=r(72791),i=r(6429),n=r.n(i),l=r(30276),o=r(10159),s=r(59434),c=r(60717),d=r(68449),u=r(57621),h=r(13400),m=r(39504),g=r(27247),p=r(75424),f=r(83708),y=r(56510),b=r(80184);const x=(0,t.forwardRef)(((a,e)=>{let{entityId:r,storageFolder:i,title:x,maxImageCount:j=10,minImageCount:v,updateMode:w,disable:k}=a;const{setIsLoading:B}=(0,y.U)(),S=(0,p.D)(),N=(0,t.useRef)(null),[C,D]=(0,t.useState)([]),[M,T]=(0,t.useState)([]),[I,K]=(0,t.useState)([]),P=(0,s.v9)(c.w),[A,J]=(0,t.useState)(-1),[R,E]=(0,t.useState)(-1),[H,G]=(0,t.useState)(!1);console.log("Kyc enitity id ",r,k);const L=function(a){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===a)return"0 Bytes";const r=e<0?0:e,t=Math.floor(Math.log(a)/Math.log(1024));return parseFloat((a/Math.pow(1024,t)).toFixed(r))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]};(0,t.useEffect)((()=>{r&&Z(r)}),[r]),(0,t.useEffect)((()=>{if(j&&C.length>j){const a=C.slice(0,j);alert("Exceeded maxImageCount, keeping first ".concat(j," files.")),N.current.value=null,D(a)}}),[C,j]);const F=(a,e)=>{const r=a.map((a=>a.id)),t=e.map((a=>a.id));return{imagesToDelete:e.filter((a=>!r.includes(a.id))),newImages:a.filter((a=>!t.includes(a.id)))}},Z=async a=>{D([]),K([]);try{const e="".concat(i,"/").concat(a);console.log(e);const r=(0,l.iH)(o.tO,e),t=await(0,l.aF)(r),n=await Promise.all(t.items.map((async a=>{const e=await(0,l.Jt)(a);return{id:a.name,filename:a.name,fileURL:e}})));T(n),D(n)}catch(e){console.error("Error fetching user images:",e)}};return(0,t.useImperativeHandle)(e,(()=>({isValid:()=>0===v||H}))),(0,b.jsx)("div",{className:"fileupload-view",style:{display:"flex",width:"100%",justifyContent:"center"},children:(0,b.jsx)("div",{className:"row justify-content-center m-0",style:{flex:"1",justifyContent:"center"},children:(0,b.jsx)("div",{className:"col-md-6",style:{flex:"1",justifyContent:"center"},children:(0,b.jsx)("div",{className:"card mt-5",children:(0,b.jsxs)("div",{className:"card-body",style:{backgroundColor:P?"#333333":"white"},children:[(0,b.jsxs)("div",{className:"kb-data-box",children:[(0,b.jsx)("div",{className:"kb-modal-data-title",children:(0,b.jsxs)("div",{className:"kb-data-title",style:{justifyContent:"center",flex:"1"},children:[(0,b.jsx)("h4",{children:x}),(0,b.jsxs)("p",{children:["Max no of image(s):",j," ",i===f.Rb.STUDIOIMAGES&&(0,b.jsx)("p",{children:"Add at least 5 images"})]})]})}),(0,b.jsxs)("div",{style:{backgroundColor:P?"#333333":"white"},children:[(0,b.jsx)("div",{className:"kb-file-upload",children:(0,b.jsx)("div",{className:"file-upload-box",children:(0,b.jsx)("input",{ref:N,type:"file",id:"fileupload",className:"file-upload-input",onChange:a=>{const e=Array.from(a.target.files),r=[];e.forEach((a=>{const t=new FileReader;t.onloadend=()=>{r.push({id:n().generate(),filename:a.name,filetype:a.type,fileimage:t.result,datetime:a.lastModifiedDate.toLocaleString("en-IN"),filesize:L(a.size),file:a}),r.length===e.length&&(D((a=>[...a,...r])),K(r),N.current.value=null)},t.readAsDataURL(a)}))},multiple:!0})})}),(0,b.jsx)("br",{}),(0,b.jsx)("div",{className:"kb-attach-box mb-3",children:(0,b.jsx)("div",{className:"row",children:r&&C.length>0?C.map((a=>(0,b.jsx)("div",{className:"col-6 col-md-3 mb-3",style:{position:"relative"},children:(0,b.jsx)(u.Z,{sx:{maxWidth:345},children:a.filename.match(/\.(jpg|jpeg|png|gif|svg)$/i)?(0,b.jsxs)("div",{style:{position:"relative"},children:[(0,b.jsx)("img",{src:a.fileimage?a.fileimage:a.fileURL,alt:a.filename,className:"card-img-top",style:{maxHeight:"150px",objectFit:"cover"}}),(0,b.jsx)(h.Z,{"aria-label":"delete",disabled:k,onClick:()=>{return e=a.id,void(window.confirm("Are you sure you want to delete this image?")&&D((a=>a.filter((a=>a.id!==e)))));var e},style:{position:"absolute",top:0,right:0,backgroundColor:"rgba(255, 255, 255, 0.5)"},children:(0,b.jsx)(g.Z,{style:{color:"ff0000"}})})]}):(0,b.jsx)(m.Z,{children:(0,b.jsx)("i",{className:"far fa-file-alt"})})})},a.id))):(0,b.jsx)("div",{className:"col-12 text-center",children:(0,b.jsx)("p",{children:"No images selected"})})})}),(0,b.jsx)("div",{className:"kb-buttons-box",children:(0,b.jsx)("button",{type:"button",className:"btn div-submit",style:{backgroundColor:P?"#892CDC":"black",color:"white"},onClick:async()=>{if(r){J(-1),E(-1);try{if(B(!0),1===j&&C.length>=v)await(0,d.ih)(i,r),await(0,d.eg)(i,I,r,E),S("Image uploaded successfully","success"),G(!0);else{const{imagesToDelete:a,newImages:e}=F(C,M);if(v&&e.length<v)return void S("Minimum ".concat(v," image(s) are required"),"error");a.length>0&&(await(0,d.xR)(i,a,r,J),S("Image(s) deleted successfully","success")),e.length>0&&(await(0,d.eg)(i,e,r,E),S("Image(s) uploaded successfully","success")),G(!0)}N.current.value=null}catch(a){G(!1),console.error("Error uploading/deleting images:",a)}finally{B(!1)}}else alert("No studio selected")},disabled:k,children:"Image Upload"})})]}),C.length>0&&(0,b.jsx)("div",{className:"kb-attach-box",hidden:!0,children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("hr",{}),C.map((a=>(0,b.jsx)("div",{className:"col-6 col-md-3 mb-3",children:(0,b.jsx)("div",{className:"card",children:a.filename.match(/\.(jpg|jpeg|png|gif|svg)$/i)?(0,b.jsx)("img",{src:a.fileimage,alt:a.filename,className:"card-img-top",style:{maxHeight:"150px",objectFit:"cover"}}):(0,b.jsx)("div",{className:"card-body",children:(0,b.jsx)("i",{className:"far fa-file-alt"})})})},a.id)))]})})]}),A>=0&&(0,b.jsxs)("div",{children:[(0,b.jsxs)("p",{style:{color:P?"#fff":"#000"},children:["Deleting images... ",A.toFixed(2),"%"]}),(0,b.jsxs)("progress",{value:A,max:"100",style:{color:P?"#fff":"#000"},children:[A.toFixed(2),"%"]})]}),R>=0&&(0,b.jsxs)("div",{children:[(0,b.jsxs)("p",{style:{color:P?"#fff":"#000"},children:["Uploading images... ",R.toFixed(2),"%"]}),(0,b.jsxs)("progress",{value:R,max:"100",style:{color:P?"#fff":"#000"},children:[R.toFixed(2),"%"]})]})]})})})})})}));x.defaultProps={maxImageCount:5,updateMode:!1,disable:!1};const j=x},26073:(a,e,r)=>{r.d(e,{Z:()=>c});r(72791);var t=r(89743),i=r(2677),n=r(95313),l=r(59434),o=r(60717),s=r(80184);const c=a=>{var e;let{defaultTime:r,handleSelect:c}=a;const d=r.split("-")[0].trim(),u=null===(e=r.split("-")[1])||void 0===e?void 0:e.trim(),h=(0,l.v9)(o.w),m=a=>{const e=(()=>{const a=[];let e=[],r=[];for(let t=0;t<24;t++)for(let a=0;a<60;a+=30){const i=a.toString().padStart(2,"0");if(t<12){const a=0===t?12:t;e.push("".concat(a,":").concat(i," AM"))}else{const a=12===t?12:t%12;r.push("".concat(a,":").concat(i," PM"))}}for(let t=0;t<e.length||t<r.length;t++)t<e.length&&a.push(e[t]),t<r.length&&a.push(r[t]);return a})();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("option",{value:a,children:a}),e.map((a=>(0,s.jsx)("option",{value:a,children:a},a)))]})};return(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:(0,s.jsxs)(n.Z.Group,{children:[(0,s.jsx)(n.Z.Label,{children:"Start Time"}),(0,s.jsx)(n.Z.Control,{as:"select",onChange:a=>c(a.target.value,null),style:{background:"transparent",borderWidth:1,borderColor:h?"white":"black",height:"auto"},children:m(d)})]})}),(0,s.jsx)(i.Z,{children:(0,s.jsxs)(n.Z.Group,{children:[(0,s.jsx)(n.Z.Label,{children:"End Time"}),(0,s.jsx)(n.Z.Control,{as:"select",onChange:a=>c(null,a.target.value),style:{background:"transparent",borderWidth:1,borderColor:h?"white":"black",height:"auto"},children:m(u)})]})})]})}},18406:(a,e,r)=>{r.d(e,{C9:()=>l,P9:()=>o,fP:()=>n,ie:()=>s,qC:()=>i});var t=r(83708);async function i(a,e,r,i){const n=t.A3,l=localStorage.getItem("authToken");try{const t=await fetch(n+"crud/newEntity/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l)},body:JSON.stringify({data:a,collection_name:e,notify:r,metadata:i})});if(!t.ok)throw console.log("Error in postData:",t),new Error("HTTP error! status: ".concat(t.status));return t}catch(o){throw console.error("Error in postData:",o),o}}async function n(a,e,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const l=t.A3,o="crud/updateEntity/".concat(r),s=localStorage.getItem("authToken");try{const r=await fetch(l+o,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify({data:a,collection_name:e,notify:i,metadata:n})});if(!r.ok)throw console.log("Error in postData:",r),new Error("HTTP error! status: ".concat(r.status));return r}catch(c){throw console.error("Error in postData:",c),c}}const l=async a=>{const e="".concat(t.uM.CLOUD,"bookings/bookEntity/");try{const r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:a.userId,entityType:a.entityType,entityId:a.entityId,associatedStudioId:a.associatedStudioId,emailLearner:a.emailLearner,personsAllowed:a.personsAllowed,pricePerPerson:a.pricePerPerson})}),t=await r.json();return r.ok?(console.log("Booking successful:",t),t):(console.error("Booking failed:",t),t)}catch(r){return console.error("Error occurred while booking:",r),null}},o=a=>{if(console.log("MediaDisplay",a),!a)return null;const e=a.trim().match(/(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w\-]+)/);let r=null;return e&&(r=e[1]),console.log("MediaDisplay",r),r},s=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const[e,r,t]=a.split("-");return"".concat((a=>{const e=a%10,r=1===e&&"11"!==a?"st":2===e&&"12"!==a?"nd":3===e&&"13"!==a?"rd":"th";return"".concat(a).concat(r)})(t)," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(r)-1],", ").concat(e)}},11518:()=>{},10884:(a,e,r)=>{a.exports=r.p+"static/media/india_11009487.98ac2ba43166eaa84593.png"},49071:(a,e,r)=>{a.exports=r.p+"static/media/whatsapp.8d81ece5885274edfd73.png"},82873:a=>{a.exports=JSON.parse('{"c":["Agra","Ahmedabad","Ajmer","Alappuzha","Allahabad","Ambattur","Ambernath","Amritsar","Anantapur","Arrah","Aurangabad","Avadi","Bahadurgarh","Bahraich","Ballia","Bengaluru","Baranagar","Barasat","Bareilly","Barasat","Bathinda","Begusarai","Belgaum","Bellary","Berhampur","Bettiah","Bharatpur","Bharuch","Bhilai","Bhilwara","Bhimavaram","Bhiwani","Bhopal","Bhubaneswar","Bhuj","Bhusawal","Bidar","Bihar Sharif","Bilaspur","Bilimora","Bongaigaon","Bongaigaon","Bulandshahr","Buxar","Chandannagar","Chandigarh","Chandausi","Chapra","Chennai","Chikmagalur","Chittorgarh","Coimbatore","Cuttack","Darbhanga","Dehradun","Deoghar","Dewas","Dhanbad","Dhule","Dimapur","Dindigul","Durg","Eluru","Erode","Etawah","Faridabad","Farrukhabad","Gandhinagar","Gangapur","Gaya","Ghaziabad","Giridih","Godhra","Gopalpur","Gorakhpur","Greater Noida","Guntakal","Guntur","Gurugram","Guwahati","Haldia","Hapur","Haridwar","Hazaribagh","Hindupur","Hisar","Hosur","Howrah","Hubballi","Hyderabad","Ichalkaranji","Imphal","Indore","Jabalpur","Jaipur","Jalandhar","Jalna","Jalgaon","Jammu","Jamnagar","Jamshedpur","Jaunpur","Jhansi","Jodhpur","Junagadh","Kadapa","Kakinada","Kalyan","Kamarhati","Kanpur","Karimnagar","Karnal","Katihar","Khammam","Khanna","Kharagpur","Kochi","Kolhapur","Kolkata","Kollam","Korba","Kota","Kottayam","Kozhikode","Krishnanagar","Kulti","Kumbakonam","Lakhimpur","Latur","Lucknow","Ludhiana","Madhyamgram","Madurai","Maheshtala","Malegaon","Malerkotla","Mango","Mathura","Meerut","Mirzapur","Moradabad","Morvi","Mumbai","Muzaffarnagar","Muzaffarpur","Mysore","Nabadwip","Nagaur","Nagpur","Naihati","Nalgonda","Nanded","Nashik","Navi Mumbai","Nellore","New Delhi","Nizamabad","Noida","North Dumdum","Orai","Ozhukarai","Pali","Pallavaram","Panihati","Panipat","Panvel","Parbhani","Patiala","Patna","Pimpri-Chinchwad","Puducherry","Pune","Purnia","Purulia","Raebareli","Raichur","Raiganj","Rajahmundry","Rajkot","Rajpur Sonarpur","Rampur","Ranchi","Ratlam","Raurkela","Rewa","Rohtak","Rourkela","Sagar","Saharanpur","Salem","Sangli","Sangli-Miraj & Kupwad","Satara","Satna","Secunderabad","Serampore","Shahjahanpur","Shimla","Shimoga","Shivpuri","Sikar","Siliguri","Singrauli","South Dumdum","Srikakulam","Srinagar","Sultanpur","Surendranagar","Surat","Thane","Thiruvananthapuram","Thrissur","Tiruchirappalli","Tirunelveli","Tirupati","Tiruvottiyur","Tumkur","Udaipur","Udupi","Unnao","Vadodara","Vapi","Varanasi","Vasai-Virar","Vellore","Vijayawada","Visakhapatnam","Warangal","Yamunanagar"]}')},51650:a=>{a.exports=JSON.parse('{"W":["Kuchipudi","Swing","Irish Dance","Folk Dance","Street Dance","Breaking","Voguing","House Dance","Bachata","Ballet","Ballroom","Belly Dance","Bhangra","Bharatanatyam","Bihu","Bollywood","Bollyhop","Butoh","Capoeira","Chhau","Clogging","Contemporary","Dandiya Raas","Flamenco","Garba","Giddha","Heels","Hip Hop","Irish Step Dance","Jazz","Jive","Kathak","Kathakali","Kizomba","Krumping","Lavani","Line Dance","Locking","Lyrical Hip-Hop","Manipuri","Modern Dance","Mohiniyattam","Odissi","Polynesian Dance","Popping","Rouf","Salsa","Sattriya","Tango","Tap Dance","Vogue","Waacking","Whacking","Zumba"]}')}}]);
//# sourceMappingURL=9059.e853c992.chunk.js.map