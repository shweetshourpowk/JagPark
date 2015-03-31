
$(document).ready(function() {
    init();
});

function init() {
    $("#thirdView").click(function() {
        $("#thirdView").transition({y:'-100%'}, 1000, 'snap');
    });
}