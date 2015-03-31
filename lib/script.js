
$(document).ready(function() {
    setBindings();
});

function setBindings() {
    $("#thirdtView").click(function() {
        $("#thirdView").transition({y:'-100%'}, 1000, 'snap');
    })
}