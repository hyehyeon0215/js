let skipNavi = document.querySelectorAll("#skipNavi li a");

// 반복을 돌며 각각의 스킵네비에 focusin, focusout 이벤트 걸어줌

for(let el of skipNavi) {
    // 포커스인 이벤트
    el.addEventListener("focusin", ()=>{
        el.classList.add("on");
    })
    // 포커스아웃 이벤트
    el.addEventListener("focusout",()=>{
        el.classList.remove("on");
    })
}