
var arr = [
    {
        img: "img/img-0.jpg",
        name: "사과 이름 0",
        txt: "사과 설명 0"
    },
    {
        img: "img/img-1.jpg",
        name: "사과 이름 1",
        txt: "사과 설명 1"
    },
    {
        img: "img/img-2.jpg",
        name: "사과 이름 2",
        txt: "사과 설명 2"
    },
    {
        img: "img/img-3.jpg",
        name: "사과 이름 3",
        txt: "사과 설명 3"
    },

]

var i = 0;


// console.log(document.querySelectorAll('.btn'));

document.querySelectorAll('.btn').forEach(function(element, index){

    // console.log();

    element.addEventListener('click', function(e){
         
        e.preventDefault();

        // console.log("Hello");
        // console.log(e.target);

        if(e.target.classList.contains('prevBtn')){
        // console.log("Prev")



        if(i === 0) {
            i = arr.length; // 4
        }

        i--;

        document.getElementById('img').src = arr[i].img;
        document.getElementById('name').textContent = arr[i].name;
        document.getElementById('txt').textContent = arr[i].txt;

        }

        if(e.target.classList.contains('nextBtn')){
            // console.log("Next")

            // 4 - 1 = 3
            if(i === arr.length -1) {
                i = -1;

            }

            i++;

            document.getElementById('img').src = arr[i].img;
            document.getElementById('name').textContent = arr[i].name;
            document.getElementById('txt').textContent = arr[i].txt;
        }



    });

});






































































































