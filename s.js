function post() {
    $.ajax({
        type: "POST",
        data: {nm: $("input[name='nm']").val(), pw: $("input[name='pw']").val()},
        success: function (a, b, c) {
            if (c.responseText==="false") noti("Invalid username or password");
            else window.location+="dash"
        }
    })
    return false;
}
function noti(msg) {
    $("#noti").html(msg);
    $("#noti").css("color", "#fd5656");
}