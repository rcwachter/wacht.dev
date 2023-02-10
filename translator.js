$(document).ready(function () {
    $("#translate").on("click", function () {
        var lang_one = $("#lang_one").val();
        var lang_two = $("#lang_two").val();
        var text = $("#text").val();

        $.ajax({
            url: "translate.php",
            type: "post",
            data: { lang_one: lang_one, lang_two: lang_two, text: text },
            success: function (status) {
                text = $("#text").val(status);
            },
        });
    });
});