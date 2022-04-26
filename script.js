$(".green").click(function() {
    $(".beginning").hide();
});
$(".green").click(function() {
    $(".jag,.jaguar").show();
});
$(".orange").click(function() {
    $(".beginning").hide();
});
$(".orange").click(function() {
    $(".parr,.parrot").show();
});

$(".parrot").dblclick(function() {
    $(".clouds,.clo").fadeIn();
    $(".parrot").hide();
});

$(".jaguar").dblclick(function() {
    $(".lake,.lak").slideToggle();
    $(".jaguar").hide();
});



$(".jag").hide();
$(".parr").hide();
$(".parrot").hide();
$(".jaguar").hide();
$(".clouds,.clo").hide();
$(".lake,.lak").hide();