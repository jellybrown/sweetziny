(() => {
    // intro 슬라이드효과
    const intro = document.querySelectorAll(".intro");


    for (let i = 0; i < intro.length; i++) {
        intro[i].querySelector(".question").addEventListener("click", function (e) {
            e.preventDefault();
            intro[i].classList.toggle("active")
        })
    }

    // 각 section 이동, 활성화

    /*
    const topValues = []; //각 section의 top값
    for (i = 0; i < section.length; i++) {
        let value = section[i].offsetTop;
        topValues.push(value)
    }
    console.log(topValues)
*/


    // 여기서부터 jquery

    const section = $('section');

    $('.logo').click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: section.eq(0).offset().top
        })
        $('header').removeClass('active');
        $('.menus li a').removeClass('active');
    })

    $(window).scroll(function () {
        console.log("스크롤")
        if ($(this).scrollTop() > section.eq(1).offset().top - 200) {
            $('header').addClass('active')
        } else {
            $('header').removeClass('active')
        }
        for (let i = 0; i < 3; i++) {
            if ($(window).scrollTop() > section.eq(i + 1).offset().top) {
                let idx = i;
                $('.menus li a').removeClass('active');
                $('.menus li a').eq(idx).addClass('active');
            }
        }


    })




    $('.menus li').click(function (e) {

        e.preventDefault();

        let idx = $(this).index(); //home섹션이 0번이라서
        const currentSection = section.eq(idx + 1)
        $('html,body').stop().animate({
            scrollTop: currentSection.offset().top + 50
        })
    })



    var $temp = $("<input>");
    var $url = $(location).attr('href');

    $('.copy_btn').click(function () {
            $("body").append($temp);
            $temp.val($url).select();
            document.execCommand("copy");
            $temp.remove();
            $(".copy_btn").text("URL copied!");
        }

    )



})();