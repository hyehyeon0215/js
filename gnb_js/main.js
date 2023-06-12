// // gnb
// $('#gnb').on('mouseenter', function () { $('.sub').stop().slideDown() });
// $('#gnb').on('mouseleave', function () { $('.sub').stop().slideUp(); });
// $('#gnb>li').on("mouseenter", function () { $(this).children('a').addClass("on"); });
// $('#gnb>li').on("mouseleave", function () { $(this).children('a').removeClass('on'); });



// let gnb = document.querySelector("#gnb");

// gnb.addEventListener("mouseenter",(e)=> {
//     // mouseenter 이벤트가 발생한 a태그(main 메뉴)에서 gnb를 찾은 뒤
//     // gnb에서 .sub 4개를 모두 찾아줌
//     let sub = e.currentTarget.closest("ul").querySelectorAll(".sub");

//     // sub를 반복을 돌면서
//     for (let el of sub) {
//         slideFDown(el);
//     }
// })

// function slideFDown(el){
//         // 각각의 .sub를 보이게 하면 됨
//         let isBlock = window.getComputedStyle(el).getPropertyValue("display");
            
//         // getcomputedStyle : 자바스크립트의 메서드로 특정 요소의 계산된 스타일 가지고 옴
//         // 1. 이미 스타일 시트에 작성된 값을 가져옴
//         // 2. 동적 스타일을 계산해서 가져옴
//         // 3. 만약 스타일이 없는 경우 상속된 스타일을 가져옴

//         // getPropertyValue : getcomputedStyle과 같이 사용해서 속성 값을 가지고 오는 데 사용함
//         // () 안에 어떤 속성을 가져올지를 적음

//         // scrollHeight 요소의 컨텐츠가 실제로 차지하는 높이를 나타냄
//         // 이 속성은 요소의 높이를 동적으로 조정할 수 있음
        
//         el.style.height = "0";

//         if(isBlock == "none"){
//             el.style.display = "block";
//             let subHeight = el.scrollHeight;
//             el.style.height = subHeight + "px";
//         }    
// }

// gnb.addEventListener("mouseleave",(e)=>{
//     let sub = e.currentTarget.closest("ul").querySelectorAll(".sub");
//     for(let el of sub) {
//         slideUp(el);
//     }
// })

// function slideUp(el) {
//     let isBlock = window.getComputedStyle(el).getPropertyValue("display");

//     el.style.height = "0"; //기준점

//     if(isBlock == "block"){
//         el.style.height = "0";
//         el.addEventListener("transitionend", function end() {
//             el.removeEventListener("transitionend", end);
//             // removeEventListener는 직전 이벤트를 지움
//             el.style.display="none";
//         })
//     }   
// }


const gnb_lis = document.querySelectorAll("#gnb>li");

gnb_lis.forEach((el)=>{
    el.addEventListener("mouseenter",(e)=>{
        const sub = e.currentTarget.querySelector(".sub");
        let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
        sub.style.height = 0;
        if (isBlock == "none") {
            sub.style.display = "block";
            let subHeight = sub.scrollHeight;
            sub.style.height = subHeight + "px";
        }
    })
})

gnb_lis.forEach((el)=>{
    el.addEventListener("mouseleave", (e)=>{
        const sub = e.currentTarget.querySelector(".sub");
        let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
        sub.style.height = 0;
        if (isBlock == "block") {
            sub.style.height = "0";
            sub.addEventListener("transitionend", function end(){
                sub.removeEventListener("transitionend", end);
                sub.style.display = "none";
            })
        }
    })
})



$(".tab>li").on("click", function () {
    $('.tab').find('li').removeClass("on");
    $('.content').find('div').removeClass("on");

    $(this).addClass('on');

    var conId = $(this).children('a').attr("href");
    console.log(conId);
    $(conId).addClass('on');
});

$("#close").click(function () {
    $(".popup").css("display", "none")
})
$('#notice>ul>li').on("click", function () {
    $(".popup").css("display", "block")

})


setInterval(function () {
    $('.frame').animate({ top: "-300px" }, function () {
        $('.frame>li').eq(0).appendTo(".frame");
        $('.frame').css({ top: 0 });
    });
}, 3000);












// $(".content div").hide();
// $(".tab>li>a").click(function () {
//     $(".content div").hide().filter(this.hash).fadeIn(0)

//     $(".tab>li").click(function () {
//         $(this).addClass("on")
//     })
//     $(".tab>li").removeClass("on")
// }).filter(":eq(0)").click()


// setInterval(function () {
//     show()
// }, 3000)

// function show() {
//     var next_index,
//         current_index = $('.frame>li').filter('.on').index();

//     if (current_index != $('.frame>li').length - 1) {
//         next_index = current_index + 1;
//     } else {
//         next_index = 0;
//     }

//     show_next(next_index)
// }

// function show_next(index) {
//     $('.frame>li').filter('.on').stop().animate({
//         'bottom': '-100%'
//     }, 1500, function () {
//         $(this).removeClass('on').hide();
//     });
//     $('.frame>li').eq(index).show().css({
//         'bottom': '100%'
//     }).animate({
//         'bottom': '0%'
//     }, 1500, function () {
//         $(this).addClass('on');
//     });
// }