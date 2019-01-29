$(document).ready(function () {
    var token = localStorage.getItem("Tomato-Group-Token");

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/v1/user?page=1",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", token);
        },
        success: function (result) {
            var list = result.data.list;
            for (var i = 0; i < list.length; i++) {
                $("#tbody").append("<tr><td>" + list[i].username + "</td><td>" + list[i].email + "</td><td>" + list[i].gmtModified + "</td><td class='td-actions text-center'><button type='button' rel='tooltip' class='btn btn-info btn-link btn-icon btn-sm user-profile' username='" + list[i].username + "'><i class='tim-icons icon-single-02'></i></button><button type='button' rel='tooltip' class='btn btn-success btn-link btn-icon btn-sm user-setting' username='" + list[i].username + "'><i class='tim-icons icon-settings'></i></button><button type='button' rel='tooltip' class='btn btn-danger btn-link btn-icon btn-sm user-remove' username='" + list[i].username + "'><i class='tim-icons icon-simple-remove'></i></button></td></tr>");
            }

            var pages = result.data.pages;

            for (var i = 2; i <= pages; i++) {
                $("#pagination").before("<li class='page-item'><a class='page-link' href='#'>" + i + "</a></li>");
            }

            $(".user-profile").bind("click", function () {
                $('#user-profile').modal();
            });

            $(".user-setting").bind("click", function () {
                alert($(this).attr("username"));
            });

            $(".user-remove").bind("click", function () {
                alert($(this).attr("username"));
            });
        }
    });
});