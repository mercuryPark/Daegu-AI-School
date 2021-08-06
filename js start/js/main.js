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


var n = null;

// nudefined 변수를 선언만한 상태 
var u;

console.log(n);
console.log(u);

//null과 undefined 차이점
// console.log(typeof 10);
// console.log(typeof "hdo")

// console.log(typeof null);
// console.log(typeof undefined);

// console.log(null == undefined);
// console.log(null === undefined);

//!
console.log(!true);
console.log(!false)

console.log(!null);
console.log(!undefined);















































