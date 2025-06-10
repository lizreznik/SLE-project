var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}
$(document).ready(function () {
    $('#picture img').each(function () {
        var description = $(this).data('description');

        $(this).hover(function () {
            $('<div class="description">' + description + '</div>').insertAfter($(this)).fadeIn();
        }, function () {
            $(this).next('.description').fadeOut().remove();
        });
    })
});