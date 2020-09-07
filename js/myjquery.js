(function($){
    function openNav(){
        $(".header_cont").toggleClass("on")
        if($(".header_cont").hasClass("on")){
            $(".nav").css({
                opacity:"1"
            }).animate({
                top:"110px"
            }, 300)
        }
        $(".outlayer").toggleClass("on")            
    }
    $(".open_gnb").on("click",openNav)
    $(".outlayer").on("click",openNav)

    $(window).resize(function(){
        var winWidth = $(this).innerWidth()      
        
        if(winWidth>800){
            $(".header_cont").removeClass("on")
            $(".outlayer").removeClass("on")
            $(".nav").css({
                top:"50%",
                opacity:"1"})
        } 
        else if (winWidth<=800){
            $(".header_cont").removeClass("on")
            $(".outlayer").removeClass("on")
            $(".nav").css({
                top:"130px",
                opacity:"0"})
        }
    })

    // $(".slide_inner").slick({
    //     autoplay:true,
    //     dots:true,
    //     autoplaySpeed:5000,
    //     speed:600,
    //     fade:true,
    //     prevArrow:'<button class="prev_arrow marrow"><i class="fas fa-chevron-left"></i></button>',
    //     nextArrow:'<button class="next_arrow marrow"><i class="fas fa-chevron-right"></i></button>'
    // })


})(jQuery)