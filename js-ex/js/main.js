// 클래스 (생성자 함수)
// 객체 지향 프로그래밍  (00P - Object Oriented Programming)

// var superMan = {
//     name:"슈퍼맨",
//     age:30,
//     gender:"남성",
//     skills: ["레이저빔", "공중부양", "파워"]
// }

// var spiderMan = {
//     name:"스파이더맨",
//     age:18,
//     gender: "남성",
//     skills: ["거미줄", "벽타기", "스파이더센서"]
// }

// var blackWidow = {
//     name:"블랙위도우",
//     age:34,
//     gender:"여성",
//     skills:["격투", "암살", "잠입"]
// }


// 생성자 함수(붕어빵 틀) - 생성자 함수는 다른 함수와 분리하기위해 
// 첫자를 대문자로 작성한다.    
// 붕어빵과 붕어빵틀로 비유한다.
    
// function Heroes(name, age) {
//     this.name = name;
//     this.age = age;

//     console.log(this);

// }
// // 인스턴스 : 붕어빵
// var superMan = new Heroes('슈퍼맨', 30);
// var blackWidow = new Heroes('블랙위도우', 32);

// console.log(superMan);
// console.log(blackWidow);


// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.fullName = function() {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }

// var kim = new Person("Inkweon", "Kim");
// var park = new Person("David", "Park");
// var choi = new Person("Lee", "choi");

// console.log(kim);
// console.log(park);
// console.log(choi);

// kim.fullName();
// park.fullName();




// 프로토 타입
// Person 생성자 함수를 만들 때 Person.prototype 객체를 같이 생성한다.
// Person.prototype : 조상₩                     
// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.fullName = function() {
//     console.log(this.firstName + " " + this.lastName);
// }

// // 인스턴스 : 후손
// var kim = new Person("Inkweon", "Kim");
// var park = new Person("David", "Park");

// kim.fullName();
// park.fullName();

// console.log(kim);
// console.log(park);


// __proto__

var arr1 = [];
var arr2 = new Array(10);

console.log(arr2);


































// var arr = [
//     {
//         img: "img/img-0.jpg",
//         name: "사과 이름 0",
//         txt: "사과 설명 0"
//     },
//     {
//         img: "img/img-1.jpg",
//         name: "사과 이름 1",
//         txt: "사과 설명 1"
//     },
//     {
//         img: "img/img-2.jpg",
//         name: "사과 이름 2",
//         txt: "사과 설명 2"
//     },
//     {
//         img: "img/img-3.jpg",
//         name: "사과 이름 3",
//         txt: "사과 설명 3"
//     },

// ]

// var i = 0;


// // console.log(document.querySelectorAll('.btn'));

// document.querySelectorAll('.btn').forEach(function(element, index){

//     // console.log();

//     element.addEventListener('click', function(e){
         
//         e.preventDefault();

//         // console.log("Hello");
//         // console.log(e.target);

//         if(e.target.classList.contains('prevBtn')){
//         // console.log("Prev")



//         if(i === 0) {
//             i = arr.length; // 4
//         }

//         i--;

//         document.getElementById('img').src = arr[i].img;
//         document.getElementById('name').textContent = arr[i].name;
//         document.getElementById('txt').textContent = arr[i].txt;

//         }

//         if(e.target.classList.contains('nextBtn')){
//             // console.log("Next")

//             // 4 - 1 = 3
//             if(i === arr.length -1) {
//                 i = -1;

//             }

//             i++;

//             document.getElementById('img').src = arr[i].img;
//             document.getElementById('name').textContent = arr[i].name;
//             document.getElementById('txt').textContent = arr[i].txt;
//         }



//     });

// });






































































































