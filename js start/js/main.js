// comic 박스를 생성한 상태
// 변수 선언
// var comic;

// comic 박스 안에 원피스 데이터를 기입한 상태
// 변수 초기화
// comic = "원피스";



// console.log(comic);


// var apple = "애플";

// console.log("애플");


// var = a;
// var = b;
// var = console;

// var a, 
//     b,
//     c;

//  변수 동시 선언

// var a, b, c;

//변수 동시 초기화

// var d= 10;
// var e= 20;
// var f= 30;

// var d = 10, e = 20, f= 30;


//모든 변수는 선언과 동시에 undefined 자동으로 할당된다.
// var computer;

// console.log(computer);

// var house;
// house = "집";

// console.log(house);

// house = "아파트";

// console.log(house);


// var house;
// console.log(house);

// house = "집"
// console.log(house);

// 캐멀 케이스
// var mathScoreStudent = 10;

// 스네이크 케이스
// var math_score_student = 10;

// 주의점
// var math-score-student = 100;

// var _math;
// var $math;

//숫자가 문자보다 먼저나와선 안된다.
// var apple10;
// var 10apple;

// 의미있게 작성해야된다.
// var width_T


// 데이터 타입 (데이터 종류 = 데이터 타입)
// 두가지의 진형 
// 문자열(string) 숫자(number) 논리(boolean) undefined  null = 원시 타입
// 객체(object)  배열(array) 함수(function) = 참조 타입

// 각각의 종류들마다 특성들이 존재한다.


//데이터 타입

//숫자 사칙연산 더하기 빼기 나누기 곱하기

// var str1 = "10";

// var str2 = "20"

// console.log(str1 + str2)

// var firstName = "hoyean";
// var lastName = "Park";

// console.log(firstName + "           " + lastName);

// var str11 ="현재 시간은";
// var time = 12;
// var str12 = "시 입니다.";

// console.log(str11 + time + str12);





//++, --

// var num10 = 10;

// console.log(--num10);
// console.log(--num10);

// console.log(++num10);
// console.log(++num10);

// console.log(num10--);
// console.log(num10);

// console.log(num10++);

// +=, -+, *=, /=, %=

// var num20 = 20;

// num20 = num20 + 10;

// 자기자신에게 그 값을 더해 저장하고싶다
// num20 += 10;


// console.log(num20);



// 바교 연산자 >, <, ==, ===, <=, >=, != !==

// var a = 10;
// var b = 20;
// var c = 30;

// console.log(a > b);
// console.log(a < b);

// 참 혹은 거짓이 나오는것을 불리언이라고 한다 boolean

// var num10 = 10;
// var num20 = 20;

// var str10 = "10";
// var str20 = "20";

// // console.log(num10 == str10); 그 값이 같은지만 비교한다.
// // console.log(num10 === str10); 데이터형태까지 비교한다

// console.log(num20 != str20);
// console.log(num20 !== str20);


// 논리 연산자 : AND(&&), OR(||)

// var num30 = 30;
// var num40 = 40;
// var num50 = 30;

// and연산자는 왼쪽과 오른쪽 둘다 참일때 참이라고 판단한다
// or연산자는 왼쪽이 참이거나 오른쪽이 참일때 둘중 하나라도 참일때 참이라고 판단
// console.log(num30 === num40 && num30 === num50);
// console.log(num30 === num40 || num30 === num50);







//불리언 (boolean) : true , false

// console.log(true);
// console.log(false);
// console.log(1 === 2);
// console.log(10 < 20);
// console.log(10 === 10 || 20 === 30);

// var bool = true;
// bool = false;

// 논리연산자과 불리언을 사용하는 대표적인 예시로는 로그인창이다.
// 로그인창에서는 아이디와 패스워드 둘중에 하나라도 틀리면 안됨


// null, undefined 둘다 값이 없는 상태를 가르킨다.
// null : 변수 초기화로 명시적으로 ... 빈 값을 변수 안에 할당한 상태 (이박스는 비어있다 공기를 주입한듯한)


// var n = null;

// // nudefined 변수를 선언만한 상태 
// var u;

// console.log(n);
// console.log(u);

// null과 undefined 차이점
// console.log(typeof 10);
// console.log(typeof "hdo")

// console.log(typeof null);
// console.log(typeof undefined);

// console.log(null == undefined);
// console.log(null === undefined);

//!
// console.log(!true);
// console.log(!false)

// console.log(!null);
// console.log(!undefined);

// console.log(10 + null); // null --> 0
// console.log(10 + undefined); //NaN (Not a Number) 숫자가 아니다. 

//참조 타입
// 함수 (function)

// console.log(10 + 10);
// console.log(20 + 30);
// console.log(5 + 20);

// 임의 숫자 두 개를 전달받아서 덧셈을 하는 기능을 만들고 싶다.

// 함수 선언
// function sum(){
   
//     // console.log("Hello!")
//     console.log(10 + 10);

// }

// //turn on - 함수를 키는 행위 , 함수 호출
// sum();


// parameter (매개변수), Argument (인수)
// num1, num2 가 바로 매개변수다
// function sum(num1, num2){

//     console.log(num1+num2);
// }

// // 인수 : 호출시 전달되는 값
// sum(10, 20);
// sum(100, 50);


// function fullName(firstName, lastName){
//     console.log(firstName + " " + lastName);
// }

// fullName("hoyean", "Park");


// function area(width, height){
// console.log(width);
// console.log(height);


//     var result = width * height;
//     console.log(result);
// }

// area(10);

// function test(a){
//     console.log(a);
// }

// test(10);
// test("Hello");
// test(true);
// test(null);

// test(function a() {});
// test([10, 20, 30]);
// test({name: "hoyean"});

// return

// function sum(num1, num2) {
//     // console.log(num1 + num2)
//     return num1 / num2;

// }

// var result = sum(10, 20);
// console.log(result);

// return 은 다른 변수에 값을 전달할때

// function area(hor, ver) {
//     return hor * ver;
// }

// var volume = area(10, 20) * 100; //200
// console.log(volume);


// 배열 (Array)
// var banana = "바나나";
// var apple = "사과";
// var melon = "멜론";

// var fruit = ["바나나", "사과", "멜론"];
// console.log(fruit);

// // 인덱스

// console.log(fruit[0]);
// console.log(fruit[2]);

// console.log(fruit.length);


// var arr = [10,
//      "Hello", 
//      true,
//       null,
//        undefined,
//         function a() {},
//          [10, 20, 30]
//           {name: "Kime"}]


// var num = [10, 20, 30, 3.14]; //배열안에 있는 데이터 값은 가능한 동일한 데이터 타입을 갖고있어야한다.

// var fruit = ["사과", "배", "바나나", "양상추"]; //동일한 성격을 갖고있는 데이터를 삽입하는게 좋다.

// 배열 안에 있는 배열 데이터에 접근하는 방법
// var score = [
//     [10, 20, 30],
//     [100, 200, 300]
// ];
// console.log(score);
// console.log(score[1]);
// console.log(score[1][2]);

// 객체 (Object) - 여러개의 데이터를 하나의 변수안에 전부 다 넣고싶을때 사용되는 것
// 이름, 나이, 스킬, 성별
// key - value = property

// var student = {
//     name: "hoYean",
//     age: 21,
//     skills: ["자바스크립트", "HTML", "CSS"]
// };

// console.log(student);
// console.log(student.name);
// console.log(student['name']);
// console.log(student.skills[1]);

// student.age = 100;

// console.log(student);

// student.gender = ["남자","여자"];

// console.log(student);

// var student = {
//     name: "hoYean",
//     age: 21,
//     skills: ["자바스크립트", "HTML", "CSS"],

//     test1: true,
//     test2: null,
//     test3: undefined,
//     test4:{color: "red"},
    

//     //객체안에서 만들어진 함수 = 메서드(method)
//     sum: function(num1, num2) {
//         return num1 + num2;
//     }
// };


// var result = student.sum(10, 20);
// console.log(result);

// student.sum(100, 200);
// console.log("Hello World");




// 원시 타입과 참조 타입 차이점
// 원시 타입은 원본을 수정하든 복사본을 수정하든 서로의 데이터 타입에는 영향을 끼치지 않는다.

// 원시타입
// var str1 = "Hello World";
// var str2 = str1;

// // str1 = "Nice";
// str2 = "Nice";

// console.log(str1);
// console.log (str2);

// 참조 타입
// var obj1 = {name: "HoYeon"};
// var obj2 = obj1;

// obj1.name = "Park";
// obj2.name = "Park";


// console.log(obj1);
// console.log(obj2);

// yello, green, pink, #dc143c rgba(123, 123, 123, 0.5);

// var colors = ['yellow', 'green', 'pink', '#dc143c', 'rgba(123,123,123,0.5)']

// var bg = document.getElementById('color-bg');
// var btn = document.getElementById('btn');

// //콜백 함수 : 호출 기호 없이 특정 조건 하에 호출되는 함수

// btn.addEventListener('click', function() {

//     // 0 ~ 4
//       var random = Math.floor(Math.random() * 5)
//     //   console.log(random);
//     //   console.log(colors[random]);

//     bg.style.backgroundColor = colors[random];
// })

// 1 ~ 6 숫자를 랜덤하게 가져오는 게임
// Math.random() : 0 ~ < 0.9999999999
// console.log(Math.random());
// console.log(Math.random() * 6);

// console.log(Math.floor(Math.random() * 6));

// console.log(Math.floor(Math.random() * 6) + 1);



// var, typeof, function, null, undefined, false, true, console

// var var;
// var function;

// 예약어를 변수명으로 사용할수없다. 팁 - 두개이상의 단어를 조합하는것

// console.log("Main");

// main.js 안에서 만들어 놓은 main function 을 다른 파일인 custom.js 에서 실행을 할 수 있다.
// 단 순서를 중요시 해야한다. 순서에 맞춰서 작성을 해야한다.




console.log(vvaRRo);
























