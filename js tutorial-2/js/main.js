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

function a() {
    var apple = "사과";
}

function b() {
    a(); // var apple = "사과 "이렇게 들어가지않는다. 
    console.log(apple);
}

b();










































