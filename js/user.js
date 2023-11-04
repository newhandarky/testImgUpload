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
            var photo_hash = response.data.data.deletehash;
            document.querySelector(".pic").src = photo;
            console.log(response);
        })
        .catch(function (error) {
            console.error("發生錯誤", error);
        });
});

