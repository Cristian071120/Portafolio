$(document).ready(function () {

    $(".ver-video").click(function () {

        let video = $(this).data("video");

        $("#videoFrame").attr(
            "src",
            "https://www.youtube.com/embed/" + video
        );

        let modal = new bootstrap.Modal(
            document.getElementById("videoModal")
        );

        modal.show();

    });


    $("#videoModal").on("hidden.bs.modal", function () {

        $("#videoFrame").attr("src", "");

    });

});