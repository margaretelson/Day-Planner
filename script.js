$("#currentDay").text(luxon.DateTime.local().toLocaleString({
    weekday: 'long', month: 'long', day: '2-digit' 
}))

//Store
localStorage.setItem("lastname", "smith");
//Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

var hour = $(".hour");
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");

var agenda = [];

init ();

function init(){
    var storedAgenda = JSON.parse(localStorage.getItem("agenda"));

    if(storedAgenda !== null) {
        agenda = storedAgenda;
    }
//render agenda to the DOM
    renderAgenda();
}

function renderAgenda() {
    timeBlock.innerHTML = "";
}