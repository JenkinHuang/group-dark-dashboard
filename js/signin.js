$(document).ready(function () {
    $("#signin").click(function () {
        var username = $("#username-input").val();
        var password = $("#password-input").val();

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/v1/login",
            data: { "username": username, "password": password },
            success: function (result) {
                if (!$.isEmptyObject(result.data)) {
                    localStorage.setItem("Tomato-Group-Token", result.data);
                    console.log(result.data);
                    window.location.href="http://localhost/view/dashboard.html"
                } else {
                    alert("Username Or Password Error.");
                }
            },
            error: function (result) {
                alert("Username Or Password Error.");
            }
        });
    });
});