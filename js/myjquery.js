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

    // $(".slide2_inner").slick({
    //     autoplay:true,
    //     dots:true,
    //     autoplaySpeed:5000,
    //     speed:600,
    //     fade:true,
    //     prevArrow:'<button class="prev_arrow marrow"><i class="fas fa-chevron-left"></i></button>',
    //     nextArrow:'<button class="next_arrow marrow"><i class="fas fa-chevron-right"></i></button>'
    // })
    
    //섹션에 마우스 휠 이벤트 연결 mousewheel 연결 필요

    $('.wheel').on('mousewheel',function(e, wh){
        var index = $(this).index()
        if(wh>0){
            var prev = $(this).prev().offset().top;
            $('.depth1 li').eq(index-1).addClass('on')
            $('.depth1 li').eq(index-1).siblings().removeClass('on')
            $('html,body').stop().animate({
                scrollTop:prev
            }, 800, 'linear')
        }   else if (wh<0){
            var next = $(this).next().offset().top;
            $('.depth1 li').eq(index+1).addClass('on')
            $('.depth1 li').eq(index+1).siblings().removeClass('on')
            $('html,body').stop().animate({
                scrollTop:next
            }, 800, 'linear')
        }
    })
    
    $('.up').on('click', function(){
        $('.selectBox li:last-child').animate({
            opacity:0
        },100, function(){
            $(this).prependTo('.selectBox').css({
                opacity:1
            })
        })
    })
    $('.down').on('click', function(){
        $('.selectBox li:first-child').animate({
            opacity:0
        },100, function(){
            $(this).appendTo('.selectBox').css({
                opacity:1
            })
        })
    })


})(jQuery)