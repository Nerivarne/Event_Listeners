$("button").click(function(e) {
    console.log("Yeah, you clicked me");
    e.preventDefault();
})

$("#second-button").click(function(g) {
    $("#first-button").text("Changed text");
    g.preventDefault();
})

$("#third-button").click(function(h) {
    $("button").css("background", input);
    h.preventDefault();
})

let input = "blue"
