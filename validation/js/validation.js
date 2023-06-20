// validation: 인증 함수
// 조건을 정해서 만족하면 return true, 조건을 만족하지 않으면 return false
// 판별하는 시점이 submit을 클릭할 때 인증함수의 결과 값이 하나라도 false라는 게 나온다면
// action으로 넘어가지 못하게 e.preventDefault();으로 막음
// 모두 참이면 그때 action으로 이동

const btnSubmit = document.querySelector("input[type=submit]");
const toggleBtn = document.getElementById("toggleBtn");
const pwd = document.querySelector("#pwd1");


btnSubmit.addEventListener("click", ()=> {
    // 인증 함수를 거쳐서 true 혹은 false를 ㅏ지고 validation을 진행
})

toggleBtn.addEventListener("click", ()=>{
    // 클릭했을 때 password type을 text로 변경해서 비밀번호가 보이도록 함
    if (pwd.type === 'password') {
        pwd.setAttribute("type", "text");
        toggleBtn.classList.add("hide");
    }
    else {
        pwd.setAttribute("type", "password");
        toggleBtn.classList.remove("hide");
    }
})
