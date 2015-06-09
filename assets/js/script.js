var inputBox = document.querySelector('#input-box');
var textBox = document.querySelector('.text-box');
var inputButton = document.querySelector('#input-button');

var list = [];
var names = "";


inputButton.onclick = function(){
    list.push(inputBox.value);
    for(var i = 0; i <list.length; i++){
     textBox.innerHTML = "<li>" + i.value + "</li>";
    
    }  

};