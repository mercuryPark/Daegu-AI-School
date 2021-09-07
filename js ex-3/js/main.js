
var form = document.getElementById('form');
var input = document.getElementById('msg');
var feedback = document.querySelector('.feedback');
var txt = document.getElementById('txt');


form.addEventListener('submit', function(e){

     e.preventDefault();
    //  console.log(e);
    // console.log("제출");

    var msg = input.value;

    if(msg) {
        txt.textContent = msg;
        form.reset();
      
    } else {
      
      feedback.classList.add('show');
      
      setTimeout(function(){

        feedback.classList.remove('show');
    
    }, 2000);




    }
    
})

// setTimeout(function(){

//     console.log("2초 후에 실행");

// }, 2000);


















































































































