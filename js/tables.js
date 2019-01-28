$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/v1/user?page=1",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiW2FkbWluXSIsImV4cCI6MTU0ODcyMTQ4NywidXNlcm5hbWUiOiJoaWthcmkifQ.N8EUPPB0NFMF3ZHYKpXShu7PDydGhuIpve-3ayg9LBk");
        },
        success: function (result) {
            var list = result.data.list;
            for (var i = 0; i < list.length; i++) {
                $("#tbody").append("<tr><td>" + list[i].username + "</td><td>" + list[i].email + "</td><td>" + list[i].gender + "</td>" + "<td class='td-actions text-center'><button type='button' rel='tooltip' class='btn btn-info btn-link btn-icon btn-sm'><i class='tim-icons icon-single-02'></i></button><button type='button' rel='tooltip' class='btn btn-success btn-link btn-icon btn-sm'><i class='tim-icons icon-settings'></i></button><button type='button' rel='tooltip' class='btn btn-danger btn-link btn-icon btn-sm'><i class='tim-icons icon-simple-remove'></i></button></td>" + "</tr>");
            }

            var pages = result.data.pages;

            for (var i = 2; i <= 15; i++) {
                $("#pagination").before("<li class='page-item'><a class='page-link' href='#'>" + i + "</a></li>");
            }
        }
    });
});