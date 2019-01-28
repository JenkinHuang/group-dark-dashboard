$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/v1/detail/count/user",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiW2FkbWluXSIsImV4cCI6MTU0ODcyMTQ4NywidXNlcm5hbWUiOiJoaWthcmkifQ.N8EUPPB0NFMF3ZHYKpXShu7PDydGhuIpve-3ayg9LBk");
        },
        success: function (result) {
            $("#user_count").append(result.data);
        }
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/v1/detail/count/group",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiW2FkbWluXSIsImV4cCI6MTU0ODcyMTQ4NywidXNlcm5hbWUiOiJoaWthcmkifQ.N8EUPPB0NFMF3ZHYKpXShu7PDydGhuIpve-3ayg9LBk");
        },
        success: function (result) {
            $("#group_count").append(result.data);
        }
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/v1/detail/count/topic",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiW2FkbWluXSIsImV4cCI6MTU0ODcyMTQ4NywidXNlcm5hbWUiOiJoaWthcmkifQ.N8EUPPB0NFMF3ZHYKpXShu7PDydGhuIpve-3ayg9LBk");
        },
        success: function (result) {
            $("#topic_count").append(result.data);
        }
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/v1/detail/count/reply",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiW2FkbWluXSIsImV4cCI6MTU0ODcyMTQ4NywidXNlcm5hbWUiOiJoaWthcmkifQ.N8EUPPB0NFMF3ZHYKpXShu7PDydGhuIpve-3ayg9LBk");
        },
        success: function (result) {
            $("#reply_count").append(result.data);
        }
    });
});