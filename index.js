$(".rating1").click(function(){
    $(".rating1").addClass("clicked-color");
    $(".rating2").removeClass("clicked-color");
    $(".rating3").removeClass("clicked-color");
    $(".rating4").removeClass("clicked-color");
    $(".rating5").removeClass("clicked-color");
});
$(".rating2").click(function(){
    $(".rating1").removeClass("clicked-color");
    $(".rating2").addClass("clicked-color");
    $(".rating3").removeClass("clicked-color");
    $(".rating4").removeClass("clicked-color");
    $(".rating5").removeClass("clicked-color");
});
$(".rating3").click(function(){
    $(".rating1").removeClass("clicked-color");
    $(".rating2").removeClass("clicked-color");
    $(".rating3").addClass("clicked-color");
    $(".rating4").removeClass("clicked-color");
    $(".rating5").removeClass("clicked-color");
});
$(".rating4").click(function(){
    $(".rating1").removeClass("clicked-color");
    $(".rating2").removeClass("clicked-color");
    $(".rating3").removeClass("clicked-color");
    $(".rating4").addClass("clicked-color");
    $(".rating5").removeClass("clicked-color");
});
$(".rating5").click(function(){
    $(".rating1").removeClass("clicked-color");
    $(".rating2").removeClass("clicked-color");
    $(".rating3").removeClass("clicked-color");
    $(".rating4").removeClass("clicked-color");
    $(".rating5").addClass("clicked-color");
});

$(".button").click(function(){
    if($(".rating1").hasClass("clicked-color") === true){
        $("#main").css("display","none");
        $("#second").css("display","flex");
        $("span").text("1");
    }
    else if($(".rating2").hasClass("clicked-color") === true){
        $("#main").css("display","none");
        $("#second").css("display","flex");
        $("span").text("2");
    }
    else if($(".rating3").hasClass("clicked-color") === true){
        $("#main").css("display","none");
        $("#second").css("display","flex");
        $("span").text("3");
    }
    else if($(".rating4").hasClass("clicked-color") === true){
        $("#main").css("display","none");
        $("#second").css("display","flex");
        $("span").text("4");
    }
    else if($(".rating5").hasClass("clicked-color") === true){
        $("#main").css("display","none");
        $("#second").css("display","flex");
        $("span").text("5");
    }
});