$("button").click(function() {
    console.log("Yeah, you clicked me");
})

$("#second-button").click(function() {
    $("#first-button").text("Changed text");
})

$("#third-button").click(function() {
    $("button").css("background", input);
})

let input = "blue"
