$(document).ready(function(){
    $("#what_is_cbd_text").addClass("isActive");
    $("#what_is_cbd").addClass("isActive");
    $(".text_title").click(function(){
        if($("#" + this.id).hasClass("isActive")) {
            false;
        }
        else {
            $(".down_div_text_block").css("opacity", "0");  
            setTimeout(() => {
                $(".text_title").removeClass("isActive");
                $("#" + this.id).addClass("isActive"); 
                $(".down_div_text_block").removeClass("isActive"); 
                $("#" + this.id + "_text").addClass("isActive");
            }, 250); 
            setTimeout(() => {$(".down_div_text_block").css("opacity", "1")}, 500);
        }
    });
});

$(".head_slide").click(function(){
    $(".question_text").css("font-size", "0%");
    $(".question_text", this).css("font-size", "125%");
    $("#" + this.id).css("background-image", "none");
    console.log(this.id);
    setTimeout(() => { 
        $(".question_text", this).css("font-size", "0%");
        setTimeout(() => { $("#" + this.id).css("background-image", `url(../images/${this.id}.png)`) }, 1500 )
    }, 7500 )
});

$(".product-slider").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
