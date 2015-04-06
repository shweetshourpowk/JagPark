
$(document).ready(function() {
    init();
});

function init() {
    $("#splashScreen").delay(1000).fadeOut(750);

    $("#buttonContainer button").click(function() {
        $("#firstView").transition({y:'-102%'}, 1000, 'snap');
    });

    $("#backButton").click(function() {
        $("#firstView").transition({y:'0'}, 1000, 'snap');
    })
}