// IF 조건문

// var a = 20;
// var b = 40;
// var c = 60;

// if(a > b) {
//     console.log("a는 b보다 작다.")
// }

// if(a > b) {
//     console.log("a는 b보다 크다.")
// }else{
//     console.log("a는 b보다 작다.")
// }


// 가장 먼저 참이 되는 조건만! 출력을 한다.
// if(a > b) {
//     console.log("a는 b보다 크다.");

// }else if(b > c) {
//     console.log("b는 c보다 크다.");
//  }else if(a < c) {
//      console.log("a는 c보다 작다.");
//  }else if(b < c) {
//      console.log("b는 c보다 작다.");
     
//  }else{
//      console.log("모든 조건을 충족하지 않는다");
//  }


// 중첩 if문 ( a = b 같이 예외의 수가 있을 수 있다)

// if(a !==b) {
//     if(a > b) {
// console.log("a는 b보다 크다");
//     }else{
// console.log("a는 b보다 작다.");
//     }

// }else{
//     console.log("a와 b는 같다.");
// }



//실무 팁 : 거짓이 되는 상황
//false, ""(빈 문자열 = false), 0(0보다 크거나 작은 경우는 모두 참), null, undefined
//undefined - 아무런 값이 없는 'var'는 거짓을 의미하고 값이 주어진 'var test="hello"; 는 참을 의미한다.

// var test = "Hello";

// if(test) {
// console.log("참!!!!")
// }else{
// console.log("거짓!!!")
// }



// 삼항 연산자 
// var age = 15;

// if(age >= 18){
// console.log("성인");
// }
// else{
//     console.log("어린이");
// }

// // 참일때 성인 거짓일때 어린이 - 삼항 연산자!
// var result = (age >= 18) ? "성인" : "어린이"

// console.log(result);



// var userId = prompt("아이디를 입력해 주세요.");
// var userPw = prompt("비밀번호를 입력해 주세요");

// console.log(userId);
// console.log(typeof userPw);

//문자열 숫자를 숫자 데이터 타입(정수형)으로 바꿔줄때 사용되는 "parseInt()이다."

// if(userId === "hoyeon" && parseInt(userPw) === 12345){
//     alert("로그인되었습니다.");
// }else {
//     alert("아이디 또는 비밀번호가 틀렸습니다.");
// }



// 전역 변수(지구 - 모든 국가에 적용이 되는 법), 지역 변수(국가 - 특정 국가에만 적용이 되는 법)

// var globalV = "전역변수";

// function func(){
//     var localV = "지역변수";

//     console.log(globalV);
//     console.log(localV);
//  }

// //  func();

// console.log(globalV);
// console.log(localV);

// 새로운 변수를 만들땐 var를 추가해줘야한다.***********

// var gv = "전역변수";

// function func() {
//     gv = "지역변수";
//     console.log(gv);
// }

// func();

// console.log(gv);



// var gv = "전역변수";

// if(true) {
//     var lv = "지역변수????"

//     console.log(gv);
//     console.log(lv);
// }





// var gv = "전역변수";
// var aaa= "aaa";

// function a(){
//     console.log("a");
// }


// 전역스코프 - 모든영역에 영향을 끼칠수 있는 스코프
// var gv = "전역변수";

// function func() {
//     console.log(gv);
// }

// func();

// console.log(gv);

// 지역스코프 - 함수안에서만 영향력을 발휘할수있는 스코프
// 변수가 영향력을 발휘할수있는 범위

// function func() {
//     var lv = "지역변수";
//     console.log(lv);
// }

// func();

// console.log(lv);

// 함수는 서로의 스코프에 접근할 수 없다!!!!!!

// function a() {
//     var apple = "사과";
// }

// function b() {
//     a(); // var apple = "사과 "이렇게 들어가지않는다. 
//     console.log(apple);
// }

// b();

// 스코프 체인 - 안쪽에서부터 바깥쪽을 탐색하는 것 (바깥쪽에서 안쪽을 탐색하는건 불가능하다.)

// var a = 10;

// function func1(){
//     var b = 20;

//     function func2(){
//         var c = 30;

//         console.log(a + b * c);
//     }
//     // 

//     func2();
// }

// func1();
// console.log(b);




// 이해하기 - 가장먼저 func1()은 console.log(name1)을 의미하는것이 아닌 전역변수 Inkweon을 의미한다.

// 그리고 func2()에서의 name1 은 지역변수로 뒤따라오는 func1()은 Inkweon 을 의미한다. 

// 결국 func2()는 전역변수 Inkweon이 된다.





// function func1() {
//     var name1 = "InKweon";

//       console.log(name1);
// }


// function func2() {
//     var name1 = "Jun";

//     func1();
// }

// func2();


// 호이스팅
// 변수 호이스팅 - 오로지 변수를 선언 했을때만 발생하는 것 끌어당김

// console.log(a);

// // var a;
// // a = "나는 a다."

// var a = "나는 A다.";

// console.log(a);



// 함수 호이스팅 - 함수가 위쪽으로 끌어올려진상태 
// 주의점 - 함수를 만들때 var func

// func1()

// function func1(){
//     console.log("Func1 함수다.")
// }

// func1();

// 주의점 - 이런 양식일땐 호이스팅이 안된다.
// var func2 = function() {
//     console.log ("Func2 함수다");
// }

// func2();

// Math 

// console.log(Math);


// var num1 = Math.abs(-3) - 절대값;
// console.log(num1);

// var num2 = Math.ceil(0.3) - 올림처리;
// console.log(num2);


// var num3 = Math.floor(10.9) - 내림처리;
// console.log(num2);

// var num4 = Math.random(); - 랜덤
// console.log(num4);


// parseInt(), parseFloat()
// 문자열을 숫자형으로 변경을 할때 사용되는 메세드다.
var str1 = "20.6"; 
var str2 = "3.14";

var num1 = parseInt(str1);
// var num2 = parseFloat(str2);

console.log(num1);
console.log(str2);






































