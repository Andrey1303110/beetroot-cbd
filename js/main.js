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
    $(".question_text", this).css("font-size", "125%");
    $("#" + this.id).css("background-image", "none");
    console.log(this.id);
    setTimeout(() => { 
        $(".question_text", this).css("font-size", "0%");
        setTimeout(() => { $("#" + this.id).css("background-image", `url(./images/products/${this.id}.png)`) }, 1200 )
    }, 7500 )
});

$(document).ready(function(){
    $(".product-slider").slick({
        arrows: true,
        infinity: true,
        speed: 3500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        appendArrows: $('#for_slider'),
                prevArrow: '<button id="for_slider_left" type="button"><i class="fas fa-long-arrow-alt-left" aria-hidden="true"></i></button>',
                nextArrow: '<button id="for_slider_right" type="button"><i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i></button>'
    });
});


$(document).ready(function(){
    $(".answer_block").css("font-size", "0").css("padding", "0");

    $(".question_click").click(function(){
        $(".answer_block").css("font-size", "0").css("padding", "0");
        $(`#answer_${this.id}`).css("font-size", "18px").css("padding", "0 0 25px 30px");
        for (let i=0; i < 4; i++) {
            $(".plus")[i].innerText = "+";
            $(".plus").css("line-height", "55px");
        }
        $(".plus", this)[0].innerText = "-";
        $(".plus", this).css("line-height", "50px");
    });

    $(".title_block").click(function(){
        $(".answer_block").css("font-size", "0").css("padding", "0");
        for (let i=0; i < 4; i++) {
            $(".plus")[i].innerText = "+";
            $(".plus").css("line-height", "55px");
        }
    });
});

$(document).ready(function(){
    $(".slider_photos").slick({
        arrows: true,
        infinity: true,
        speed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('#for_slider_photos'),
                prevArrow: '<button id="for_slider_photo_left" type="button"><i class="fas fa-long-arrow-alt-left" aria-hidden="true"></i></button>',
                nextArrow: '<button id="for_slider_photo_right" type="button"><i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i></button>'
    });
});


