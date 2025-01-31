"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[7653],{83708:(a,r,o)=>{o.d(r,{A3:()=>m,DM:()=>u,QP:()=>p,RY:()=>d,Rb:()=>f,Ul:()=>g,i0:()=>c,lt:()=>h,n$:()=>e,rM:()=>l,uM:()=>s,zq:()=>i});var n=o(56355),t=o(80184);const e={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},c={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},i={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},l={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},s={CLOUD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},u={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},d={[i.ALL]:u.GREEN,[i.BEGINNERS]:u.BLUE,[i.INTERMEDIATE]:u.YELLOW,[i.ADVANCED]:u.RED},h=[u.PURPLE,u.ORANGE,u.TEAL,u.LIME],g={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},f={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},m="https://nrityaserver-2b241e0a97e5.herokuapp.com/",p={AC:(0,t.jsx)(n.l51,{}),"Free Wifi":(0,t.jsx)(n._0,{}),"RO Water":(0,t.jsx)(n.EXY,{}),Toilet:(0,t.jsx)(n.Iev,{}),"Power Backup":(0,t.jsx)(n.eKD,{}),"Fire Extinguisher":(0,t.jsx)(n.Ybg,{}),"First Aid Kit":(0,t.jsx)(n.FZx,{}),"CCTV Camera":(0,t.jsx)(n.KoQ,{}),"Card Payment":(0,t.jsx)(n.ypE,{}),"Parking Space":(0,t.jsx)(n.mxg,{})}},18406:(a,r,o)=>{o.d(r,{C9:()=>c,P9:()=>i,fP:()=>e,ie:()=>l,qC:()=>t});var n=o(83708);async function t(a,r,o,t){const e=n.A3,c=localStorage.getItem("authToken");try{const n=await fetch(e+"crud/newEntity/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},body:JSON.stringify({data:a,collection_name:r,notify:o,metadata:t})});if(!n.ok)throw console.log("Error in postData:",n),new Error("HTTP error! status: ".concat(n.status));return n}catch(i){throw console.error("Error in postData:",i),i}}async function e(a,r,o){let t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const c=n.A3,i="crud/updateEntity/".concat(o),l=localStorage.getItem("authToken");try{const o=await fetch(c+i,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l)},body:JSON.stringify({data:a,collection_name:r,notify:t,metadata:e})});if(!o.ok)throw console.log("Error in postData:",o),new Error("HTTP error! status: ".concat(o.status));return o}catch(s){throw console.error("Error in postData:",s),s}}const c=async a=>{const r="".concat(n.uM.CLOUD,"bookings/bookEntity/");try{const o=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:a.userId,entityType:a.entityType,entityId:a.entityId,associatedStudioId:a.associatedStudioId,emailLearner:a.emailLearner,personsAllowed:a.personsAllowed,pricePerPerson:a.pricePerPerson})}),n=await o.json();return o.ok?(console.log("Booking successful:",n),n):(console.error("Booking failed:",n),n)}catch(o){return console.error("Error occurred while booking:",o),null}},i=a=>{if(console.log("MediaDisplay",a),!a)return null;const r=a.trim().match(/(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w\-]+)/);let o=null;return r&&(o=r[1]),console.log("MediaDisplay",o),o},l=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const[r,o,n]=a.split("-");return"".concat((a=>{const r=a%10,o=1===r&&"11"!==a?"st":2===r&&"12"!==a?"nd":3===r&&"13"!==a?"rd":"th";return"".concat(a).concat(o)})(n)," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(o)-1],", ").concat(r)}},68449:(a,r,o)=>{o.d(r,{FV:()=>I,Km:()=>p,Ld:()=>h,Us:()=>d,XG:()=>O,Xt:()=>m,eg:()=>b,gG:()=>u,gv:()=>g,ih:()=>E,oM:()=>s,qS:()=>S,to:()=>f,xR:()=>C});var n=o(1413),t=o(12481),e=o(10159),c=o(30276),i=o(83708),l=o(644);const s=async a=>{const r=i.A3,o="".concat(r,"crud/getUserMode/").concat(a);try{const a=await fetch(o),r=await a.json();if(r.success){let a=!1;!0===r.data&&(a=!0),l.Z.setItem("CreatorMode",a)}else console.log("Error: ",r.message||"Unknown error")}catch(n){console.log("Error fetching user mode: ",n),l.Z.setItem("CreatorMode",!1)}},u=async a=>(await s(a),await(async()=>{try{const a=l.Z.getItem("CreatorMode");return console.log("getCreatorMode ",a),a||!1}catch(a){return console.log(" error"),!1}})()),d=async(a,r)=>{console.log("Debug ","".concat(a,"/").concat(r));const o="".concat(a,"/").concat(r),n=(0,c.iH)(e.tO,o);try{const a=await(0,c.aF)(n);if(a.items.length>0){const r=a.items[0],o=await(0,c.Jt)(r);return console.log("Debug URL:",o),o}return console.log("Debug No files found in the folder."),null}catch(t){return console.error("Error getting image URL:",t),null}},h=async(a,r)=>{const o=(0,t.JU)(e.db,a,r),n=await(0,t.QT)(o);return n.exists()?n.data():null},g=async(a,r,o)=>{const n=(0,t.JU)(e.db,a,r);return await(0,t.pl)(n,o,{merge:!0}),o},f=async(a,r,o)=>{const n=(0,t.JU)(e.db,a,r);return await(0,t.r7)(n,{isPhoneNumberVerified:!0,phoneNumber:o}),!0},m=async(a,r,o)=>{const c=(0,t.JU)(e.db,a,r);return await(0,t.r7)(c,o),(0,n.Z)({id:r},o)},p=async(a,r,o,n)=>{console.log("Hiii ",a,r,o,n);const c=(0,t.IO)((0,t.hJ)(e.db,a),(0,t.ar)(r,o,n));return(await(0,t.Yp)(c)).data().count},E=async(a,r)=>{const o="".concat(a,"/").concat(r),n=(0,c.iH)(e.tO,o),t=await(0,c.aF)(n);await Promise.all(t.items.map((async a=>{await(0,c.oq)(a)})))},S=async(a,r,o)=>{const n="".concat(a,"/").concat(r,"/").concat(o),t=(0,c.iH)(e.tO,n),i=await(0,c.aF)(t);await Promise.all(i.items.map((async a=>{await(0,c.oq)(a)})))},C=async function(a,r,o,n){let t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const i=r.length;let l=0;await Promise.all(r.map((async r=>{let s="".concat(a,"/").concat(o,"/").concat(r.filename);t&&(s="".concat(a,"/").concat(o,"/").concat(t,"/").concat(r.filename));const u=(0,c.iH)(e.tO,s);await(0,c.oq)(u),l+=1,n(l/i*100)})))},b=async function(a,r,o,n){let t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(a,o);const i=r.length;let l=0;await Promise.all(r.map((async r=>{let s="".concat(a,"/").concat(o);t&&(s="".concat(a,"/").concat(o,"/").concat(t));const u=(0,c.iH)(e.tO,"".concat(s,"/").concat(r.file.name));await(0,c.KV)(u,r.file),l+=1,n(l/i*100)})))},I=async function(a,r,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,t=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,l="".concat(a,"/").concat(o);n&&(l="".concat(a,"/").concat(o,"/").concat(n)),console.log(r,r.name);const s=(0,c.iH)(e.tO,"".concat(l,"/").concat(r.name)),u=(0,c.B0)(s,r);u.on("state_changed",(a=>{const r=a.totalBytes,o=a.bytesTransferred,n=r>0?(o/r*100).toFixed(2):-1;switch(t(n),console.log("Upload is "+n+"% done"),a.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(a=>{a.code}),(()=>{(0,c.Jt)(u.snapshot.ref).then((a=>{console.log("File available at",a),i(a)}))}))},O=async a=>{const r="".concat(a),o=(0,c.iH)(e.tO,r);try{const a=await(0,c.aF)(o);return await Promise.all(a.items.map((async a=>{const r=await(0,c.Jt)(a);return{id:a.name,filename:a.name,fileURL:r}})))}catch(n){throw console.error("Error retrieving images:",n),n}}},82873:a=>{a.exports=JSON.parse('{"c":["Agra","Ahmedabad","Ajmer","Alappuzha","Allahabad","Ambattur","Ambernath","Amritsar","Anantapur","Arrah","Aurangabad","Avadi","Bahadurgarh","Bahraich","Ballia","Bengaluru","Baranagar","Barasat","Bareilly","Barasat","Bathinda","Begusarai","Belgaum","Bellary","Berhampur","Bettiah","Bharatpur","Bharuch","Bhilai","Bhilwara","Bhimavaram","Bhiwani","Bhopal","Bhubaneswar","Bhuj","Bhusawal","Bidar","Bihar Sharif","Bilaspur","Bilimora","Bongaigaon","Bongaigaon","Bulandshahr","Buxar","Chandannagar","Chandigarh","Chandausi","Chapra","Chennai","Chikmagalur","Chittorgarh","Coimbatore","Cuttack","Darbhanga","Dehradun","Deoghar","Dewas","Dhanbad","Dhule","Dimapur","Dindigul","Durg","Eluru","Erode","Etawah","Faridabad","Farrukhabad","Gandhinagar","Gangapur","Gaya","Giridih","Godhra","Gopalpur","Gorakhpur","Guntakal","Guntur","Gurugram","Guwahati","Haldia","Hapur","Haridwar","Hazaribagh","Hindupur","Hisar","Hosur","Howrah","Hubballi","Hyderabad","Ichalkaranji","Imphal","Indore","Jabalpur","Jaipur","Jalandhar","Jalna","Jalgaon","Jammu","Jamnagar","Jamshedpur","Jaunpur","Jhansi","Jodhpur","Junagadh","Kadapa","Kakinada","Kalyan","Kamarhati","Kanpur","Karimnagar","Karnal","Katihar","Khammam","Khanna","Kharagpur","Kochi","Kolhapur","Kolkata","Kollam","Korba","Kota","Kottayam","Kozhikode","Krishnanagar","Kulti","Kumbakonam","Lakhimpur","Latur","Lucknow","Ludhiana","Madhyamgram","Madurai","Maheshtala","Malegaon","Malerkotla","Mango","Mathura","Meerut","Mirzapur","Moradabad","Morvi","Mumbai","Muzaffarnagar","Muzaffarpur","Mysore","Nabadwip","Nagaur","Nagpur","Naihati","Nalgonda","Nanded","Nashik","Navi Mumbai","Nellore","New Delhi","Nizamabad","North Dumdum","Orai","Ozhukarai","Pali","Pallavaram","Panihati","Panipat","Panvel","Parbhani","Patiala","Patna","Pimpri-Chinchwad","Puducherry","Pune","Purnia","Purulia","Raebareli","Raichur","Raiganj","Rajahmundry","Rajkot","Rajpur Sonarpur","Rampur","Ranchi","Ratlam","Raurkela","Rewa","Rohtak","Rourkela","Sagar","Saharanpur","Salem","Sangli","Sangli-Miraj & Kupwad","Satara","Satna","Secunderabad","Serampore","Shahjahanpur","Shimla","Shimoga","Shivpuri","Sikar","Siliguri","Singrauli","South Dumdum","Srikakulam","Srinagar","Sultanpur","Surendranagar","Surat","Thane","Thiruvananthapuram","Thrissur","Tiruchirappalli","Tirunelveli","Tirupati","Tiruvottiyur","Tumkur","Udaipur","Udupi","Unnao","Vadodara","Vapi","Varanasi","Vasai-Virar","Vellore","Vijayawada","Visakhapatnam","Warangal","Yamunanagar"]}')},65202:a=>{a.exports=JSON.parse('{"$":["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]}')}}]);
//# sourceMappingURL=7653.93e77b7c.chunk.js.map