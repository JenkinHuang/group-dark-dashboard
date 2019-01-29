$(document).ready(function () {
    var token = localStorage.getItem("Tomato-Group-Token");

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/v1/detail/count/user",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", token);
        },
        success: function (result) {
            $("#user_count").append(result.data);
        }
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/v1/detail/count/group",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", token);
        },
        success: function (result) {
            $("#group_count").append(result.data);
        }
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/v1/detail/count/topic",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", token);
        },
        success: function (result) {
            $("#topic_count").append(result.data);
        }
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/v1/detail/count/reply",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", token);
        },
        success: function (result) {
            $("#reply_count").append(result.data);
        }
    });
});