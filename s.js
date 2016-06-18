var notit = false;
function post() {
    $.ajax({
        type: "POST",
        data: {nm:$("input[name='nm']").val(),pw:$("input[name='pw']").val(),},
        success: function (a, b, c) {
            noti("posted", 1000);
        }
    })
    return false;
}
function noti(msg, ti) {
    if (notit !== true) {
        notit = true;
        $("#noti").html(msg);
        $("#noti").css("top", "0px");
        setTimeout(function () {
            $("#noti").css("top", "-40px");
            setTimeout(function () {
                $("#noti").html("");
                notit = false;
            }, 300)
        }, ti)
    }
}