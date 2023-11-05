

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


//User
let welcome = document.querySelector(".welcome");

welcome.innerHTML = `歡迎回來 ${localStorage.getItem("userName")}`;

document.querySelector('.btn').addEventListener('click', function () {
    var formData = new FormData();
    formData.append("image", document.querySelector(".myFile").files[0]);

    axios.post("https://api.imgur.com/3/image", formData, {
        headers: {
            "Authorization": "Client-ID 9370a32fefaf63c",
            "Content-Type": "multipart/form-data"
        }
    })
        .then(function (response) {
            var photo = response.data.data.link;
            // var photo_hash = response.data.data.deletehash;
            document.querySelector(".pic").src = photo;
            console.log(response);
        })
        .catch(function (error) {
            console.error("發生錯誤", error);
        });
});

