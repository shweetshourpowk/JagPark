$(document).ready(function() {
    init();
});

/*document.getElementById("#st").addEventListener("click", function() {
    var result = _.where(areas, {"pass" : "ST"});

    _.each(result, function(elem, indx, list) {
        var container = document.getElementById("areaContainer");
        var area = "<div class='listItem display'>" + "<h3>" + elem.name + "</h3>" + "<img src='img/lot.png' />" + "</div>";
        container.innerHTML = container.innerHTML + area;
    });
});*/

window.addEventListener("load", function() {
    $("#st button").click(function() {
        filterST();
    });

    $("#ch button").click(function() {
        filterCH();
    });
});

//function to filter the ST pass during normal hours
function filterST () {
    var result = _.where(areas, {"st" : "yes"});

    _.each(result, function(elem, indx, list) {
        var container = document.getElementById("areaContainer");
        var area = "<div class='listItem display'>" + "<h3>" + elem.name + "</h3>" + "<img src='img/lot.png' />" + "</div>";
        container.innerHTML = container.innerHTML + area;
    });
}

//function to filter the CH pass during normal hours
function filterCH () {
    var result = _.where(areas, {"ch" : "yes"});

    _.each(result, function(elem, indx, list) {
        var container = document.getElementById("areaContainer");
        var area = "<div class='listItem display'>" + "<h3>" + elem.name + "</h3>" + "<img src='img/lot.png' />" + "</div>";
        container.innerHTML = container.innerHTML + area;
    });
}

function init() {
    //script for splash screen
    $("#splashScreen").delay(1000).fadeOut(750);

    //script for the action of going to the list of parking places
    $("#buttonContainer button").click(function() {
        $("#firstView").transition({y:'-102%'}, 1000, 'snap');
        $("#secondView").css("overflow-y", "visible");
    });

    //script for the action to go to details page
    $(".listItem").click(function() {
        $("#secondView").transition({y:'-102%'}, 1000, 'snap');
    });
}