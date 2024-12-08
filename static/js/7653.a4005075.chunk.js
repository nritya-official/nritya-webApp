"use strict";(self.webpackChunknritya_webApp=self.webpackChunknritya_webApp||[]).push([[7653],{83708:(a,o,r)=>{r.d(o,{A3:()=>m,DM:()=>u,QP:()=>E,RY:()=>d,Rb:()=>f,Ul:()=>g,i0:()=>i,lt:()=>h,n$:()=>e,o0:()=>p,rM:()=>l,uM:()=>s,zq:()=>c});var n=r(56355),t=r(80184);const e={SUBMITTED:"Submitted",UNDER_REVIEW:"Under Review",REVIEWED:"Reviewed",VERIFIED:"Verified",VERIFICATION_FAILED:"Verification Failed"},i={DRAFT_STUDIOS:"DraftStudios",DRAFT_WORKSHOPS:"DraftWorkshops",DRAFT_OPEN_CLASSES:"DraftOpenClasses",DRAFT_COURSES:"DraftCourses"},c={ALL:"All",BEGINNERS:"Beginner",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced"},l={INTERNET_CONV_CHARGES_WORKSHOPS_COURSES_INR:30,WORKSHOPS_BOOKING_LIMIT:10,OPEN_CLASSES_BOOKING_LIMIT:2,COURSES_BOOKING_LIMIT:10},s={CLOUD:"https://nrityaserver-2b241e0a97e5.herokuapp.com/",LOCAL:"http://127.0.0.1:8000/"},u={GREEN:{backgroundColor:"#28a745",color:"#fff"},BLUE:{backgroundColor:"#007bff",color:"#fff"},YELLOW:{backgroundColor:"#ffc107",color:"#000"},RED:{backgroundColor:"#dc3545",color:"#fff"},PURPLE:{backgroundColor:"#6f42c1",color:"#fff"},ORANGE:{backgroundColor:"#fd7e14",color:"#fff"},TEAL:{backgroundColor:"#20c997",color:"#fff"},PINK:{backgroundColor:"#e83e8c",color:"#fff"},GRAY:{backgroundColor:"#6c757d",color:"#fff"},LIGHTBLUE:{backgroundColor:"#17a2b8",color:"#fff"},DARKBLUE:{backgroundColor:"#343a40",color:"#fff"},CYAN:{backgroundColor:"#00bcd4",color:"#fff"},INDIGO:{backgroundColor:"#6610f2",color:"#fff"},LIME:{backgroundColor:"#cddc39",color:"#000"},AMBER:{backgroundColor:"#ffca28",color:"#000"},BROWN:{backgroundColor:"#795548",color:"#fff"},LIGHTGREEN:{backgroundColor:"#8bc34a",color:"#000"},DEEPPURPLE:{backgroundColor:"#673ab7",color:"#fff"},DEEPORANGE:{backgroundColor:"#ff5722",color:"#fff"},BLACK:{backgroundColor:"#000000",color:"#fff"},WHITE:{backgroundColor:"#ffffff",color:"#000"},SILVER:{backgroundColor:"#c0c0c0",color:"#000"},GOLD:{backgroundColor:"#ffd700",color:"#000"},NAVY:{backgroundColor:"#001f3f",color:"#fff"},OLIVE:{backgroundColor:"#3d9970",color:"#fff"}},d={[c.ALL]:u.GREEN,[c.BEGINNERS]:u.BLUE,[c.INTERMEDIATE]:u.YELLOW,[c.ADVANCED]:u.RED},h=[u.PURPLE,u.ORANGE,u.TEAL,u.LIME],g={USER:"User",USER_KYC:"UserKyc",ADMIN:"Admin",REVIEWS:"Reviews",TRANSACTIONS:"Transactions",STUDIO:"Studio",INSTRUCTORS:"Instructors",FREE_TRIAL_BOOKINGS:"FreeTrialBookings",WORKSHOPS:"Workshops",OPEN_CLASSES:"OpenClasses",COURSES:"Courses",BOOKINGS:"Bookings"},f={STUDIOIMAGES:"StudioImages",STUDIOICON:"StudioIcon",STUDIOANNOUNCEMENTS:"StudioAnnouncements",USERIMAGE:"UserImage",INSTRUCTORIMAGES:"InstructorImages",WORKSHOPICON:"WorkshopIcon",WORKSHOPIMAGES:"WorkshopImages",OPENCLASSICON:"OpenClassIcon",COURSEICON:"CourseIcon",CREATORS_KYC_DOCUMENTS:"CreatorKycDocuments"},p="http://127.0.0.1:8000/",m="https://nrityaserver-2b241e0a97e5.herokuapp.com/",E={AC:(0,t.jsx)(n.l51,{}),"Free Wifi":(0,t.jsx)(n._0,{}),"RO Water":(0,t.jsx)(n.EXY,{}),Toilet:(0,t.jsx)(n.Iev,{}),"Power Backup":(0,t.jsx)(n.eKD,{}),"Fire Extinguisher":(0,t.jsx)(n.Ybg,{}),"First Aid Kit":(0,t.jsx)(n.FZx,{}),"CCTV Camera":(0,t.jsx)(n.KoQ,{}),"Card Payment":(0,t.jsx)(n.ypE,{}),"Parking Space":(0,t.jsx)(n.mxg,{})}},18406:(a,o,r)=>{r.d(o,{C9:()=>i,P9:()=>c,fP:()=>e,qC:()=>t});var n=r(83708);async function t(a,o,r,t){const e=n.o0,i=localStorage.getItem("authToken");try{const n=await fetch(e+"crud/newEntity/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)},body:JSON.stringify({data:a,collection_name:o,notify:r,metadata:t})});if(!n.ok)throw console.log("Error in postData:",n),new Error("HTTP error! status: ".concat(n.status));return n}catch(c){throw console.error("Error in postData:",c),c}}async function e(a,o,r){let t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const i=n.A3,c="crud/updateEntity/".concat(r),l=localStorage.getItem("authToken");try{const r=await fetch(i+c,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l)},body:JSON.stringify({data:a,collection_name:o,notify:t,metadata:e})});if(!r.ok)throw console.log("Error in postData:",r),new Error("HTTP error! status: ".concat(r.status));return r}catch(s){throw console.error("Error in postData:",s),s}}const i=async a=>{const o="".concat(n.uM.CLOUD,"bookings/bookEntity/");try{const r=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:a.userId,entityType:a.entityType,entityId:a.entityId,associatedStudioId:a.associatedStudioId,emailLearner:a.emailLearner,personsAllowed:a.personsAllowed,pricePerPerson:a.pricePerPerson})}),n=await r.json();return r.ok?(console.log("Booking successful:",n),n):(console.error("Booking failed:",n),n)}catch(r){return console.error("Error occurred while booking:",r),null}},c=a=>{if(console.log("MediaDisplay",a),!a)return null;const o=a.trim().match(/(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w\-]+)/);let r=null;return o&&(r=o[1]),console.log("MediaDisplay",r),r}},68449:(a,o,r)=>{r.d(o,{FV:()=>b,Km:()=>f,Ld:()=>u,Us:()=>s,XG:()=>C,Xt:()=>g,eg:()=>S,gv:()=>d,ih:()=>p,oM:()=>l,qS:()=>m,to:()=>h,xR:()=>E});var n=r(12481),t=r(10159),e=r(30276),i=r(83708),c=r(644);const l=async a=>{console.log("creatorMode uid",a);try{const o=(0,n.JU)(t.db,i.Ul.USER,a),r=await(0,n.QT)(o);if(r.exists())if(null!=r.data()){const a=r.data().CreatorMode;console.log("setCreatorMode: Is User a creator?",a),c.Z.setItem("CreatorMode",a)}else console.log("userSnap.data() null");else console.log("User not found")}catch(o){console.log(" error",o)}},s=async(a,o)=>{console.log("Debug ","".concat(a,"/").concat(o));const r="".concat(a,"/").concat(o),n=(0,e.iH)(t.tO,r);try{const a=await(0,e.aF)(n);if(a.items.length>0){const o=a.items[0],r=await(0,e.Jt)(o);return console.log("Debug URL:",r),r}return console.log("Debug No files found in the folder."),null}catch(i){return console.error("Error getting image URL:",i),null}},u=async(a,o)=>{const r=(0,n.JU)(t.db,a,o),e=await(0,n.QT)(r);return e.exists()?e.data():null},d=async(a,o,r)=>{const e=(0,n.JU)(t.db,a,o);return await(0,n.pl)(e,r,{merge:!0}),r},h=async(a,o,r)=>{const e=(0,n.JU)(t.db,a,o);return await(0,n.r7)(e,{isPhoneNumberVerified:!0,phoneNumber:r}),!0},g=async(a,o,r)=>{const e=(0,n.JU)(t.db,a,o);return await(0,n.r7)(e,r),{id:o,...r}},f=async(a,o,r,e)=>{console.log("Hiii ",a,o,r,e);const i=(0,n.IO)((0,n.hJ)(t.db,a),(0,n.ar)(o,r,e));return(await(0,n.Yp)(i)).data().count},p=async(a,o)=>{const r="".concat(a,"/").concat(o),n=(0,e.iH)(t.tO,r),i=await(0,e.aF)(n);await Promise.all(i.items.map((async a=>{await(0,e.oq)(a)})))},m=async(a,o,r)=>{const n="".concat(a,"/").concat(o,"/").concat(r),i=(0,e.iH)(t.tO,n),c=await(0,e.aF)(i);await Promise.all(c.items.map((async a=>{await(0,e.oq)(a)})))},E=async function(a,o,r,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const c=o.length;let l=0;await Promise.all(o.map((async o=>{let s="".concat(a,"/").concat(r,"/").concat(o.filename);i&&(s="".concat(a,"/").concat(r,"/").concat(i,"/").concat(o.filename));const u=(0,e.iH)(t.tO,s);await(0,e.oq)(u),l+=1,n(l/c*100)})))},S=async function(a,o,r,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;console.log(a,r);const c=o.length;let l=0;await Promise.all(o.map((async o=>{let s="".concat(a,"/").concat(r);i&&(s="".concat(a,"/").concat(r,"/").concat(i));const u=(0,e.iH)(t.tO,"".concat(s,"/").concat(o.file.name));await(0,e.KV)(u,o.file),l+=1,n(l/c*100)})))},b=async function(a,o,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,l="".concat(a,"/").concat(r);n&&(l="".concat(a,"/").concat(r,"/").concat(n)),console.log(o,o.name);const s=(0,e.iH)(t.tO,"".concat(l,"/").concat(o.name)),u=(0,e.B0)(s,o);u.on("state_changed",(a=>{const o=a.totalBytes,r=a.bytesTransferred,n=o>0?(r/o*100).toFixed(2):-1;switch(i(n),console.log("Upload is "+n+"% done"),a.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(a=>{a.code}),(()=>{(0,e.Jt)(u.snapshot.ref).then((a=>{console.log("File available at",a),c(a)}))}))},C=async a=>{const o="".concat(a),r=(0,e.iH)(t.tO,o);try{const a=await(0,e.aF)(r);return await Promise.all(a.items.map((async a=>{const o=await(0,e.Jt)(a);return{id:a.name,filename:a.name,fileURL:o}})))}catch(n){throw console.error("Error retrieving images:",n),n}}},82873:a=>{a.exports=JSON.parse('{"c":["Agra","Ahmedabad","Ajmer","Alappuzha","Allahabad","Ambattur","Ambernath","Amritsar","Anantapur","Arrah","Aurangabad","Avadi","Bahadurgarh","Bahraich","Ballia","Bengaluru","Baranagar","Barasat","Bareilly","Barasat","Bathinda","Begusarai","Belgaum","Bellary","Berhampur","Bettiah","Bharatpur","Bharuch","Bhilai","Bhilwara","Bhimavaram","Bhiwani","Bhopal","Bhubaneswar","Bhuj","Bhusawal","Bidar","Bihar Sharif","Bilaspur","Bilimora","Bongaigaon","Bongaigaon","Bulandshahr","Buxar","Chandannagar","Chandigarh","Chandausi","Chapra","Chennai","Chikmagalur","Chittorgarh","Coimbatore","Cuttack","Darbhanga","Dehradun","Deoghar","Dewas","Dhanbad","Dhule","Dimapur","Dindigul","Durg","Eluru","Erode","Etawah","Faridabad","Farrukhabad","Gandhinagar","Gangapur","Gaya","Giridih","Godhra","Gopalpur","Gorakhpur","Guntakal","Guntur","Gurugram","Guwahati","Haldia","Hapur","Haridwar","Hazaribagh","Hindupur","Hisar","Hosur","Howrah","Hubballi","Hyderabad","Ichalkaranji","Imphal","Indore","Jabalpur","Jaipur","Jalandhar","Jalna","Jalgaon","Jammu","Jamnagar","Jamshedpur","Jaunpur","Jhansi","Jodhpur","Junagadh","Kadapa","Kakinada","Kalyan","Kamarhati","Kanpur","Karimnagar","Karnal","Katihar","Khammam","Khanna","Kharagpur","Kochi","Kolhapur","Kolkata","Kollam","Korba","Kota","Kottayam","Kozhikode","Krishnanagar","Kulti","Kumbakonam","Lakhimpur","Latur","Lucknow","Ludhiana","Madhyamgram","Madurai","Maheshtala","Malegaon","Malerkotla","Mango","Mathura","Meerut","Mirzapur","Moradabad","Morvi","Mumbai","Muzaffarnagar","Muzaffarpur","Mysore","Nabadwip","Nagaur","Nagpur","Naihati","Nalgonda","Nanded","Nashik","Navi Mumbai","Nellore","New Delhi","Nizamabad","North Dumdum","Orai","Ozhukarai","Pali","Pallavaram","Panihati","Panipat","Panvel","Parbhani","Patiala","Patna","Pimpri-Chinchwad","Puducherry","Pune","Purnia","Purulia","Raebareli","Raichur","Raiganj","Rajahmundry","Rajkot","Rajpur Sonarpur","Rampur","Ranchi","Ratlam","Raurkela","Rewa","Rohtak","Rourkela","Sagar","Saharanpur","Salem","Sangli","Sangli-Miraj & Kupwad","Satara","Satna","Secunderabad","Serampore","Shahjahanpur","Shimla","Shimoga","Shivpuri","Sikar","Siliguri","Singrauli","South Dumdum","Srikakulam","Srinagar","Sultanpur","Surendranagar","Surat","Thane","Thiruvananthapuram","Thrissur","Tiruchirappalli","Tirunelveli","Tirupati","Tiruvottiyur","Tumkur","Udaipur","Udupi","Unnao","Vadodara","Vapi","Varanasi","Vasai-Virar","Vellore","Vijayawada","Visakhapatnam","Warangal","Yamunanagar"]}')},65202:a=>{a.exports=JSON.parse('{"$":["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]}')}}]);
//# sourceMappingURL=7653.a4005075.chunk.js.map