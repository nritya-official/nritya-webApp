"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[9709],{15240:(a,e,r)=>{r.r(e),r.d(e,{default:()=>G});var t=r(1413),o=r(72791),n=r(47022),i=r(32707),l=r(910),s=r(92592),d=r(80059),h=r(24805),c=r(57689),u=r(59434),m=r(60717),g=r(44725),p=r(82873);var b=r(61224),w=r(67107),x=r(44507),f=r(10159);var y=r(66934),k=r(85523),v=r(94294),S=r(76989),j=r(5712),C=r(81918),B=r(9955),Z=r(47047),M=r(4390),N=r(5403),I=r(67300),A=r(90842);const z=r.p+"static/media/logo_large.7047b93ad512b13bac28.png";var R=r(78410),K=r(80184);const P=(0,o.lazy)((()=>Promise.all([r.e(6355),r.e(9212)]).then(r.bind(r,79212)))),L=(0,o.lazy)((()=>Promise.all([r.e(6355),r.e(7142),r.e(8393),r.e(7985)]).then(r.bind(r,28796)))),T="filterLocation",D=(0,y.ZP)(B.Z)((a=>{let{theme:e}=a;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===e.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===e.palette.mode?"#003892":"#001e3c",width:32,height:32,"&::before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===e.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}));const G=function(){const[a,e]=(0,o.useState)(localStorage.getItem(T)?localStorage.getItem(T):"New Delhi"),[r,y]=(0,o.useState)(!1),[B,G]=(0,o.useState)(""),{currentUser:J,showSignInModal:_,setShowSignInModal:H}=((0,c.s0)(),(0,b.a)()),E=(0,u.I0)(),O=(0,u.v9)(m.w),V=(0,u.v9)(g._),W=(0,h.useMediaQuery)({query:"(max-width: 480px)"}),F=JSON.parse(localStorage.getItem("userInfo"))||{},U=null===F||void 0===F?void 0:F.photoURL,Y=(0,w.Z)({components:{MuiAutocomplete:{styleOverrides:{option:{"&:hover":{backgroundColor:"#fce4ec"}}}}},palette:{mode:O?"dark":"light"}});(0,o.useEffect)((()=>{V&&e(V)}),[V]),(0,o.useEffect)((()=>{localStorage.setItem(T,a)}),[a]),(0,o.useEffect)((()=>{const a=localStorage.getItem(T);a&&e(a)}),[]);const[X,q]=(0,o.useState)(!1),Q=()=>{q(!0)},$=p.c,aa=async a=>{const r=await new Promise(((a,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition((r=>{const t=r.coords.latitude,o=r.coords.longitude;localStorage.setItem("browserGeoLoc",JSON.stringify({latitude:t,longitude:o}));const n="https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t,",").concat(o,"&key=").concat(f.z4.key);console.log(n),fetch(n).then((a=>a.json())).then((e=>{console.log(e);const r=e.results[0].address_components,t=r.map((a=>a.long_name)).join(", ");console.log("Your address is ".concat(t));const o=r.find((a=>a.types.includes("locality"))).long_name,n=r.find((a=>a.types.includes("administrative_area_level_1"))).long_name,i=r.find((a=>a.types.includes("country"))).long_name;localStorage.setItem("filterLocation",o),console.log("Your address is City: ".concat(o)),console.log("Your address is State: ".concat(n)),console.log("Your address is Country: ".concat(i)),localStorage.setItem("browserLocation",o),a(o)})).catch((a=>{console.log(a),e("Failed to get current location")}))})):e("Geolocation is not supported by this browser or permission not granted")}));e(r),window.location.reload()};return(0,o.useEffect)((()=>{const a=a=>{null===a.target.closest(".location-dropdown-container")&&y(!1)};return document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}}),[]),(0,K.jsx)(i.Z,{style:{fontSize:10,textAlign:"center",background:"black",padding:0},expand:"lg",collapseOnSelect:!0,children:(0,K.jsxs)(n.Z,{fluid:!0,children:[(0,K.jsxs)("div",{className:"d-flex location-dropdown-container align-items-center",children:[r&&(0,K.jsx)(l.Z.Menu,{show:r,className:"dropdown-menu ".concat(O?"dark":""),style:{marginTop:"0.5rem",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",backgroundColor:O?"#181818":"white"},children:(0,K.jsx)(x.Z,{theme:Y,children:(0,K.jsx)(j.Z,{disablePortal:!0,id:"locationSearch",options:$,value:a,onChange:(a,r)=>{e(r||"New Delhi"),y(!1),window.location.reload()},sx:{width:"auto",padding:"0"},renderInput:a=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(C.Z,{label:"\ud83e\udded Current City",sx:{cursor:"pointer",width:"100%",marginTop:"0px",borderRadius:"0px",marginBottom:"10px"},onClick:aa}),(0,K.jsx)(S.Z,(0,t.Z)((0,t.Z)({},a),{},{label:"Location",placeholder:"\ud83d\udd0dSearch..."}))]}),classes:{option:"city-btn-hover-purple-bg"}})})}),W?(0,K.jsx)(i.Z.Brand,{href:"/nritya-webApp",style:{textTransform:"none"},children:(0,K.jsx)(s.Z,{style:{width:"4rem",height:"4rem"},src:R,alt:"Logo",roundedCircle:!0})}):(0,K.jsx)(i.Z.Brand,{href:"/nritya-webApp",style:{textTransform:"none"},children:(0,K.jsx)(s.Z,{style:{width:"100%",height:"4rem",maxWidth:"200px",margin:0,padding:0,objectFit:"contain"},src:z,alt:"Logo"})}),(0,K.jsx)(v.Z,{variant:"outlined",className:"btn-hover-purple-bg me-2 rounded-3",onClick:()=>y(!r),style:{cursor:"pointer",textTransform:"none",color:"white",borderColor:"white",height:"3rem",borderWidth:"2px",width:"12rem"},startIcon:(0,K.jsx)(I.Z,{}),children:a})]}),(0,K.jsxs)(i.Z.Toggle,{"aria-controls":"basic-navbar-nav",children:[" ",(0,K.jsx)(M.Z,{style:{color:"white"}})," "]}),(0,K.jsx)(i.Z.Collapse,{id:"navbarScroll",className:"justify-content-center",children:(0,K.jsxs)(d.Z,{className:"ms-auto justify-content-lg-end align-items-center flex-grow-1",children:[(0,K.jsx)("div",{className:"position-relative location-dropdown-container my-2",children:(0,K.jsxs)(d.Z,{className:"ms-auto justify-content-lg-end align-items-center flex-grow-1",children:[(0,K.jsx)(k.Z,{control:(0,K.jsx)(D,{sx:{m:1},checked:!!O}),onClick:()=>{E({type:"TOGGLE_DARK_MODE"})}}),J?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(v.Z,{startIcon:(0,K.jsx)(N.Z,{}),variant:"outlined",className:"search-box me-2 my-2 rounded-3 d-none d-lg-flex",href:"#/search/studios",style:{textTransform:"none",borderColor:"white",backgroundColor:"white",color:"black",borderWidth:"2px",height:"3rem",width:"12rem",justifyContent:"left"},children:"Search"}),(0,K.jsx)(v.Z,{startIcon:(0,K.jsx)(A.Z,{}),variant:"outlined",className:"btn-hover-purple-bg me-2 my-2 rounded-3",href:"#/modifyStudios",style:{textTransform:"none",borderColor:"white",color:"white",borderWidth:"2px",height:"3rem",width:"12rem"},children:"List Studios"})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(v.Z,{startIcon:(0,K.jsx)(N.Z,{}),variant:"outlined",className:"search-box me-2 my-2 rounded-3 d-none d-lg-flex",href:"#/search/studios",style:{textTransform:"none",borderColor:"white",backgroundColor:"white",color:"black",borderWidth:"2px",height:"3rem",width:"12rem",textAlign:"left",justifyContent:"left"},children:"Search"}),(0,K.jsx)(v.Z,{startIcon:(0,K.jsx)(A.Z,{}),variant:"outlined",className:"btn-hover-purple-bg me-2 my-2 rounded-3",href:"#/modifyStudios",style:{textTransform:"none",borderColor:"white",color:"white",borderWidth:"2px",height:"3rem",width:"12rem"},children:" List Studios"})]})]})}),J?(0,K.jsxs)(K.Fragment,{children:[U?(0,K.jsx)(v.Z,{onClick:Q,className:"my-3",style:{borderRadius:"50%",width:"3rem",height:"3rem",marginRight:"0.5rem",padding:0,minWidth:"3rem",minHeight:"3rem",borderWidth:"0.2px",backgroundImage:"url(".concat(U,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderColor:"yellow",display:"flex",alignItems:"center",justifyContent:"center",border:"none",boxShadow:"none"}}):(0,K.jsx)(v.Z,{onClick:Q,className:"rounded-pill my-3",variant:"outlined",style:{fontSize:"0.9rem",color:"white",borderRadius:"50%",borderColor:"white",width:"3rem",height:"3rem",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",marginRight:"0.5rem",borderWidth:"2px"},children:function(){const a=J.displayName.split(" ");let e=a[0].charAt(0);return a.length>1&&(e+=a[1].charAt(0)),e.length<2&&a[0].length>1&&(e+=a[0].charAt(1)),e}()}),(0,K.jsx)(o.Suspense,{fallback:(0,K.jsx)(Z.Z,{variant:"rectangular",animation:"wave",style:{width:"20rem",height:"100vh",left:0,top:0,zIndex:1e3,backgroundColor:O?"#333":"#f0f0f0"}}),children:(0,K.jsx)(P,{showProfileOffcanvas:X,closeProfileOffcanvas:()=>{q(!1)}})})]}):(0,K.jsx)(v.Z,{variant:"outlined",className:"btn-hover-purple-bg my-2 rounded-3",onClick:()=>{localStorage.clear(),H(!0)},style:{textTransform:"none",color:"white",borderColor:"white",height:"3rem",width:"12rem",borderWidth:"2px"},children:"Sign In"}),(0,K.jsx)(o.Suspense,{fallback:(0,K.jsx)("div",{children:"Loading..."}),children:(0,K.jsx)(L,{open:_,handleClose:()=>{H(!1)}})})]})})]})})}},78410:(a,e,r)=>{a.exports=r.p+"static/media/logo_small.97ba57efaf1918198f74.jpg"},82873:a=>{a.exports=JSON.parse('{"c":["Agra","Ahmedabad","Ajmer","Alappuzha","Allahabad","Ambattur","Ambernath","Amritsar","Anantapur","Arrah","Aurangabad","Avadi","Bahadurgarh","Bahraich","Ballia","Bengaluru","Baranagar","Barasat","Bareilly","Barasat","Bathinda","Begusarai","Belgaum","Bellary","Berhampur","Bettiah","Bharatpur","Bharuch","Bhilai","Bhilwara","Bhimavaram","Bhiwani","Bhopal","Bhubaneswar","Bhuj","Bhusawal","Bidar","Bihar Sharif","Bilaspur","Bilimora","Bongaigaon","Bongaigaon","Bulandshahr","Buxar","Chandannagar","Chandigarh","Chandausi","Chapra","Chennai","Chikmagalur","Chittorgarh","Coimbatore","Cuttack","Darbhanga","Dehradun","Deoghar","Dewas","Dhanbad","Dhule","Dimapur","Dindigul","Durg","Eluru","Erode","Etawah","Faridabad","Farrukhabad","Gandhinagar","Gangapur","Gaya","Giridih","Godhra","Gopalpur","Gorakhpur","Guntakal","Guntur","Gurugram","Guwahati","Haldia","Hapur","Haridwar","Hazaribagh","Hindupur","Hisar","Hosur","Howrah","Hubballi","Hyderabad","Ichalkaranji","Imphal","Indore","Jabalpur","Jaipur","Jalandhar","Jalna","Jalgaon","Jammu","Jamnagar","Jamshedpur","Jaunpur","Jhansi","Jodhpur","Junagadh","Kadapa","Kakinada","Kalyan","Kamarhati","Kanpur","Karimnagar","Karnal","Katihar","Khammam","Khanna","Kharagpur","Kochi","Kolhapur","Kolkata","Kollam","Korba","Kota","Kottayam","Kozhikode","Krishnanagar","Kulti","Kumbakonam","Lakhimpur","Latur","Lucknow","Ludhiana","Madhyamgram","Madurai","Maheshtala","Malegaon","Malerkotla","Mango","Mathura","Meerut","Mirzapur","Moradabad","Morvi","Mumbai","Muzaffarnagar","Muzaffarpur","Mysore","Nabadwip","Nagaur","Nagpur","Naihati","Nalgonda","Nanded","Nashik","Navi Mumbai","Nellore","New Delhi","Nizamabad","North Dumdum","Orai","Ozhukarai","Pali","Pallavaram","Panihati","Panipat","Panvel","Parbhani","Patiala","Patna","Pimpri-Chinchwad","Puducherry","Pune","Purnia","Purulia","Raebareli","Raichur","Raiganj","Rajahmundry","Rajkot","Rajpur Sonarpur","Rampur","Ranchi","Ratlam","Raurkela","Rewa","Rohtak","Rourkela","Sagar","Saharanpur","Salem","Sangli","Sangli-Miraj & Kupwad","Satara","Satna","Secunderabad","Serampore","Shahjahanpur","Shimla","Shimoga","Shivpuri","Sikar","Siliguri","Singrauli","South Dumdum","Srikakulam","Srinagar","Sultanpur","Surendranagar","Surat","Thane","Thiruvananthapuram","Thrissur","Tiruchirappalli","Tirunelveli","Tirupati","Tiruvottiyur","Tumkur","Udaipur","Udupi","Unnao","Vadodara","Vapi","Varanasi","Vasai-Virar","Vellore","Vijayawada","Visakhapatnam","Warangal","Yamunanagar"]}')}}]);
//# sourceMappingURL=9709.982d8fbe.chunk.js.map