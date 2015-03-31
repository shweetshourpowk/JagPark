
$(document).ready(function() {
    init();
});

function init() {
    $("#splashScreen").delay(1000).fadeOut(750);

    $("#firstView").click(function() {
        $("#firstView").transition({y:'-102%'}, 1000, 'snap');
    });
}