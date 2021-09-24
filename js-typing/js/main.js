
var txtElement = document.getElementById('txt');
var words = ["엔드게임", "인피니티 워", "에이지 오브 울트론"];

function TypeWriter(txtElement, words) {

    this.txtElement = txtElement;
    this.words = words;
    
    // 엔 --> 엔드 --> 엔드게 --> 엔드게임 --> 엔드게 ...
    this.txt = "";
    this.wordsIndex = 0;
    this.isDeleting = false;

    this.type();

}

TypeWriter.prototype.type = function() {

    // 0
    var current = this.wordIndex % this.words.length;
    var fulltxt = this.words[current];

    if(this.isDeleting) {

    } else {
      
        // ""
        this.txt = fulltxt.substring(0, this.txt.length + 1);

    }


this.txtElement.textContent = this.txt;

// 글자가 완성되었을 때, 글자가 모두 삭제되었을 때
if(!this.isDeleting && this.txt === fulltxt){

this.isDeleting = true;

}else if(this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.wordIndex++;
}

setTimeout(function() {

    console.log(this);
}, 1000);

new TypeWriter(txtElement, words);





































// var arr = [10, 20, 30];
// var index = 0;

// // 10 - 20 - 30 - 10 - 20 - 30 - 10..........

// function loop() {
    
//     // 0
//     var current = index % arr.length;
//     console.log(arr[current]);
//     index++

//     setTimeout(function() {
//         loop();

//     }, 2000);



// }

// loop();




























































