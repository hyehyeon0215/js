// c98a734741ed11f8ff0ae011f9f9314e

// var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


// var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
//     mapOption = { 
//         center: new kakao.maps.LatLng(37.6043331,126.7388376), // 지도의 중심좌표
//         level: 3 // 지도의 확대 레벨
//     };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// // 마커가 표시될 위치입니다 
// var markerPosition  = new kakao.maps.LatLng(37.6043331,126.7388376); 

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);

// // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// // marker.setMap(null);   


// const mapContainer = document.getElementById("map");

const branchBtn = document.querySelectorAll(".branch li");

const mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var mapOptions = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.4868302, 126.7829877), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(mapContainer, mapOptions);


const markerOptions = [
    {
        title : "본점", //제목
        latlng : new kakao.maps.LatLng(37.4868302, 126.7829877), //지도의 위치
        imgSrc : 'img/marker1.png', //마커 이미지 경로
        imgSize : new kakao.maps.Size(232, 99), //마커 이미지 크기
        imgPos : {offset: new kakao.maps.Point(116, 99)}, //마커 이미지 위치
        button : branchBtn[0]
    },
    {
        title : "지점1", //제목
        latlng : new kakao.maps.LatLng(37.491649, 126.785895), //지도의 위치
        imgSrc : 'img/marker2.png', //마커 이미지 경로
        imgSize : new kakao.maps.Size(232, 99), //마커 이미지 크기
        imgPos : {offset: new kakao.maps.Point(116, 99)}, //마커 이미지 위치
        button : branchBtn[1]
    },
    {
        title : "지점1", //제목
        latlng : new kakao.maps.LatLng(37.3766941, 126.6671667), //지도의 위치
        imgSrc : 'img/marker3.png', //마커 이미지 경로
        imgSize : new kakao.maps.Size(232, 99), //마커 이미지 크기
        imgPos : {offset: new kakao.maps.Point(116, 99)}, //마커 이미지 위치
        button : branchBtn[2]
    }
];

//위의 해당 마커 옵션들에 반복을 돌면서 마커 정보를 등로합니다

markerOptions.forEach((el, index)=> {
    const marker = new kakao.maps.Marker({
        map: map, //앞의 map은 마커 생성 시 필요한 정보를 받는 변수이고, 뒤의 map은 위에서 선언한 map 변수임
        position: el.latlng,
        title: el.title,
        image: new kakao.maps.MarkerImage(el.imgSrc, el.imgSize, el.imgPos)
        //카카오맵의 MarkerImage라는 메서드를 사용하는데 메서드에 필요한 값은 markerOptions의 객체 배열에 접근해서 가져옴
    })

    el.button.addEventListener("click", (e)=>{
        e.preventDefault();
        branchBtn.forEach((el, index)=> {
            branchBtn[index].classList.remove('on');
        })
        el.button.classList.add('on');
        moveTo(el.latlng);
    })

})

// 함수가 위치시킬 값을 매개변수로 받아서
function moveTo(target) {
    const moveLatlng = target;
    map.setCenter(moveLatlng); //지도를 중심으로 최종 이동시키는 함수
}
