var fName = localStorage.getItem('f-name');
var lName = localStorage.getItem('l-name');
var studName = document.querySelector(".studentName");
studName.textContent = fName +" "+ lName;
const btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
    window.location.href = "./quiz.html";

});