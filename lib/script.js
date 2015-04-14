
$(document).ready(function() {
    init();
    options();
});

function init() {
    $("#splashScreen").delay(1000).fadeOut(750);

    $("#buttonContainer button").click(function() {
        $("#firstView").transition({y:'-102%'}, 1000, 'snap');
        $("#secondView").css("overflow-y", "visible");
    });

    $("#backButton").click(function() {
        $("#firstView").transition({y:'0'}, 1000, 'snap');
        $("#secondView").css("overflow-y", "hidden");
    })
}

function options() {

    var pass;

    alert(val);


    if ($("#st").click){
        pass = 0;
    }
    else if($("#nc").click){
        pass = 1;
    }
    else if($("#ch").click){
        pass = 2;
    }
    else if($("#no").click){
        pass = 3;
    }

    alert(pass);

    if (pass == 1){
        $(".display").style.display = none;
    }


}