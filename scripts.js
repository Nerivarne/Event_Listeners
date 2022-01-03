$("button").click(function(yeah) {
    console.log("Yeah, you clicked me");
    yeah.preventDefault();
})

$("#second-button").click(function(e) {
    $("#first-button").text("Changed text");
    e.preventDefault();
})

$("#third-button").click(function(g) {
    $("button").css("background", "pink");
    g.preventDefault();
})
