
var arr = [
    {
        quote: "아이들은 누구나 예술가이다.",
        author: "피카소",
    },
    {
        quote: "내면의 목소리는 들리지 않게 된다.",
        author: "반 고흐",

    },
    {
        quote: "완벽을 두려워하지 말라",
        author: "달리",
        
    },
    {
        quote: "영감이 오는 것을 기다리고 있을 수는 없다.",
        author: "런던",
        
    },
    {
        quote: "의욕만 있으면 이런 노력만으로도 얼마든지 많은 생각을 찾을 수 있다.",
        author: "수스",
        
    }
];




var quote = document.getElementById("quote");
var author = document.getElementById("author");
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    

var random = Math.floor(Math.random() * arr.length);

quote.textContent = arr[random].quote;
author.textContent = arr[random].author;


})

























































































































