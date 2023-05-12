// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// let three = document.querySelector(".three");

// one.addEventListener("click",(e) => {
//     console.log(e.currentTarget.className);
// })
// two.addEventListener("click",(e) => {
//     console.log(e.currentTarget.className);
// })
// three.addEventListener("click",(e) => {
//     console.log(e.currentTarget.className);
// })

let divs = document.querySelectorAll('div');

divs.forEach((el, index)=> {
    el.addEventListener("mouseover",(e) => {
        console.log(e.currentTarget.className);
        // e.stopPropagation();
    })
})


// three를 클릭했을 때 three, two, one이 호출됨
// 브라우저는 특정  화면 요소에서 이벤트가 발생하였을 때
// 그 이벤트를 최상위에 있는 화면 요소까지 이벤트를 전파시킴
// 즉 three에 이벤트가 발생하면 최상위 요소인 one까지 이벤트가 전파되어서
// three, two, one으로 이벤트를 순차적으로 전파시킴 --> 이벤트 버블링

// 반대 현상 -->? 이벤트 캡쳐
// 버블링은 추가 작업 없이 일어나는 반면 캡쳐는 특별한 옵션으로 활성화
// 버블링 + 캡쳐 --> 이벤트 위임이라고 함

// js에서는 동적으로 dom을 생성할 때가 많음
// 따라서 현상태에서는 dom이 생성되지 않았으나 미래시로 생성될
// dom을 제어하여 이벤트를 부여해야 할 경우가 종종 있음



/* 
mouseenter, mouseleave
mouseover, mouseout
hover

1. 마우스가 해당 요소에 접근, 들어갈 때
mouseenter, mouseover
둘의 차이는 이벤트 위임의 발생 여부
mouseenter는 이벤트 위임이 발생하지 않음
반면 mouseover는 이벤트 위임이 발생함

2. mouseleave -> 위임 없음 mouseout -> 위임 발생

3. hover
css hover와의 차이점
css hover는 (원 코드와 hover를 붙인 코드)
두 가지 상태를 오가며 작동함

반면 js에서의 hover는 hover(함수, 함수)로 작성하며 css처럼 마우스가 떠날 때 다시 원상태로 복구되는 것이 아니라 함수 2로 덮어씀
즉 복구되지 않음


*/