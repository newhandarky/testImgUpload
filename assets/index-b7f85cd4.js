import"./bootstrap.min-35d1a0a3.js";let o=document.querySelector(".adminBtn"),t=document.querySelector(".userBtn");o.addEventListener("click",function(){axios.post("https://catroomdb.onrender.com/login",{email:"userTest053@gmail.com",password:"userTest053"}).then(function(e){console.log(e.data),localStorage.setItem("userLoginToken",e.data.accessToken),e.data.user.role==="admin"&&(localStorage.setItem("userRole",e.data.user.role),localStorage.setItem("userName",e.data.user.name),location.href="admin.html")}).catch(function(e){console.log(e.response)})});t.addEventListener("click",function(){axios.post("https://catroomdb.onrender.com/login",{email:"userTest001@gmail.com",password:"userTest001"}).then(function(e){console.log(e.data),localStorage.setItem("userLoginToken",e.data.accessToken),localStorage.setItem("userName",e.data.user.name),location.href="user.html"}).catch(function(e){console.log(e.response)})});