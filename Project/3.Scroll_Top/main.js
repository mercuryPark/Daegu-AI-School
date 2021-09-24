let fixedNav = document.querySelector('nav');

// window.addEventListener('scroll')
// window.onscroll = function () {......}
// document.addEventListener('scroll')


// window.addEventListener('scroll', function(){
//     let top = window.scrollY 
//     || window.pageYOffset 
//     || document.documentElement.scrollTop 
//     || document.body.scrollTop;

//     if(top > 50){
//         fixedNav.classList.add('active');
//     }else{
//         fixedNav.classList.remove('active');
//     }
//     (top > 50)
//         ? fixedNav.classList.add('active')
//         : fixedNav.classList.remove('active');




// })


// let oldVal = 0;

// window.addEventListener('scroll', function(){
//     let newVal = window.scrollY 
//         || window.pageYOffset 
//         || document.documentElement.scrollTop 
//         || document.body.scrollTop;

//         console.log("oldVal",oldVal);
//         console.log("newVal", newVal);

//         if(oldVal - newVal < 0) {
//             fixedNav.classList.add('active');
//         }
//         if(oldVal - newVal > 0){
//             fixedNav.classList.remove('active');
//         }
//         oldVal = newVal;

//         // console.log(oldVal, newVal)
// })



// window.addEventListener('wheel', mouseWheelEvt);
// window.addEventListener('DOMMouseScroll', mouseWheelEvt);

// function mouseWheelEvt(e) {
//     let index = e.wheelDelta ? e.wheelDelta : -e.detail;
      
//       (index < 0)
//            ? fixedNav.classList.add('active')
//            : fixedNav.classList.remove('active')};

// console.log(navigator.userAgent.indexOf('Firefox') !== -1);

let isFirefox = (navigator.userAgent.indexOf('Firefox') !== -1);
let wheelEvt = isFirefox ? 'DOMMouseScroll' : 'wheel';

window.addEventListener(wheelEvt, mouseWheelEvt);

function mouseWheelEvt(e) {
    let index = e.wheelDelta ? e.wheelDelta : -e.detail;
      
      (index < 0)
           ? fixedNav.classList.add('active')
           : fixedNav.classList.remove('active')};












