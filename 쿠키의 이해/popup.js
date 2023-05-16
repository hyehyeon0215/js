// 쿠키: 사용자의 컴퓨터에 저장되는 정보를 뜻함
// 정보가 발생하면 두 군데에 저장되느는 경향이 있음 (클라이언트/서버)
// 서버에 저장되는 정보를 쿠키 또는 세션이라고 함
// 클라이언트에 저장되는 정보는 쿠키라고 함

// 쿠키 이름 = 쿠키 값, path = "/"
// expires 삭제될 날짜 (만료일)

let popup = document.querySelector("#popup");
let btnClose = popup.querySelector(".close");
let btnDel = document.querySelector(".del");
let btnView = document.querySelector(".view");

const isCookie = document.cookie.indexOf("today=done");
// 쿠키가 있다면 쿠키 팝업이 보이지 않고, 없다면 계속해서 쿠키 팝업을 띄워 주는 코드
// indexOf 찾을 때 존재하면 존재하는 인덱스 반환, 없으면 -1


if (isCookie == -1) {
    popup.style.display = "block"; //쿠키가 없으므로 팝업을 계속 보이게 하고
} else {
    popup.style.display = "none"; //쿠키가 있으므로 팝업을 숨김
}

btnDel.addEventListener("click", (e)=> {
    e.preventDefault();
    // 쿠키를 지운다는 것은 만료일을 지금으로 혹은 due 값을 조정해서 앞당기는 것
    // 따라서 setCookie를 다시 설정

    setCookie('today', 'done', 0);
})



btnClose.addEventListener("click",(e)=>{

    e.preventDefault();

    let isChecked = popup.querySelector("input[type=checkbox]").checked;

    if (isChecked) {
        setCookie("today", "done", 1);
    }

    popup.style.display = "none";
})

/* 쿠키를 세팅하는 함수 */

function setCookie(name, value, due) {
    let today = new Date();
    let date = today.getDate();
    today.setDate(date + due);

    let duedate = today.toGMTString();

    document.cookie = `${name}=${value}; path="/"; exprires=${duedate}`;
}
