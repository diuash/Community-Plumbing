$(document).ready(function() {
    $("#menuToggle").click(function() {
        $("#navOverlay").css("top", "0");
    });

    $("#closeNav").click(function() {
        $("#navOverlay").css("top", "-100%");
    });
    $('.icon1').toggleClass('active');
    
});

