$(document).ready(function(){
    $("#what_is_cbd_text").addClass("isActive");
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
            }, 500); 
            setTimeout(() => {$(".down_div_text_block").css("opacity", "1")}, 500);
        }
    });
});
