let adminBtn = document.querySelector(".adminBtn");
let userBtn = document.querySelector(".userBtn");

adminBtn.addEventListener("click", function(){
    axios.post("https://catroomdb.onrender.com/login", {
        "email" : "userTest053@gmail.com", 
        "password" : "userTest053"
    }).then(function (res) {
        console.log(res.data);
        localStorage.setItem("userLoginToken", res.data.accessToken);
        if(res.data.user.role === "admin"){
            localStorage.setItem("userRole", res.data.user.role);
            localStorage.setItem("userName", res.data.user.name);
            location.href = "admin.html"
        }
    }).catch(function (err) {
        console.log(err.response);
    })
})

userBtn.addEventListener("click", function(){
    axios.post("https://catroomdb.onrender.com/login", {
        "email" : "userTest001@gmail.com", 
        "password" : "userTest001"
    }).then(function (res) {
        console.log(res.data);
        localStorage.setItem("userLoginToken", res.data.accessToken);
        localStorage.setItem("userName", res.data.user.name);
        location.href = "user.html"
    }).catch(function (err) {
        console.log(err.response);
    })
})
