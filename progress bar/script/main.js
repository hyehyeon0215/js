let sections = document.querySelectorAll("section");
let posArr = [];

for (let el of sections) posArr.push(el.offsetTop);
const block = document.querySelectorAll(".block");

let isOn = true;

window.addEventListener("scroll", () => {

    if (isOn && window.scrollY >= posArr[1]) {
        isOn = false;
        block.forEach((el) => {
            let numElement = el.querySelector(".num");
            let num = parseInt(numElement.innerText);
            // parseInt : ()의 값을 무조건 정수로 변환합니다
            let count = 0;
            let time = 2000 / num;
            let circle = el.querySelector(".circle");
            setInterval(() => {
                if (count == num) {
                    clearInterval();
                } else {
                    count += 1;
                    numElement.innerText = count;
                }
            }, time);
            circle.style.strokeDashoffset = 503 - (503 * (num / 100));
            let dots = el.querySelector(".dots");
            dots.style.transform = `rotate(${360 * (num / 100)}deg)`;
            if (num == 100) {
                dots.style.opacity = 0;
            }
        });
    }


})