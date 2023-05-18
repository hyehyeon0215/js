window.addEventListener("load", ()=>{
    const grid = new Isotope("section", {  //배치할 요소를 감싼 부모 요소 
        itemSelection: "article", //배치할 요소의 이름
        columnWidth: "article", //너비 값을 구할 요소명 (사실은 높이 값)
        transitionDuration: "0.5s" //화면 재배치 시 요소가 움직이는 속도
    }); 

        // 버튼을 클릭했을 때 sort되게 하는 코드 작성

    let btns = document.querySelectorAll("main ul li");

    for(let el of btns) {
        el.addEventListener("click", (e)=> {
            e.preventDefault();

            // 버튼 클릭 시 a 태그 안의 href 속성 안의 값을 변수로 담음
            let sort = e.currentTarget.querySelector("a").getAttribute("href");
            //grid를 호출해서 filter를 적용한 값들만 보여지게 함
            grid.arrange({
                filter: sort
            });

            for (let el of btns) {
                el.classList.remove("on");
            }

            e.currentTarget.classList.add("on");
            // e 대신 el로 해도 됨
        })
    }
});
