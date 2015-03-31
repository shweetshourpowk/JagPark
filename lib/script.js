
$(document).ready(function() {
    init();
});

function init() {
    /*$("#splashScreen").delay(1000).fadeOut(750);*/

    $("#thirdView").click(function() {
        $("#thirdView").transition({y:'-100%'}, 1000, 'snap');
    });
}