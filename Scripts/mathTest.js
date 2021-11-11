
const totalQuestion = 20
const questions = ["2+2+2", "2-2-2", "2x2x2","2x2/2","2-2+2","45x6/2","11x11","5/5(7+5)","78/3","35-1x6+25/5","65-35-24-6","13x13","35/7+2","6(78x5)-4","6(78x5)/4","6(78+5)-4","12x3","101x101-11","101x10/10","66x66"];
const answer = ["6", "-2", "8","2","2","90","121","12","26","34","0","169","7","2336","585","493","36","10190","101","4356"];
var numbQuestion
var total



function limiter(input) {
    if (input.value < 5) input.value = 5;
    if (input.value > 20) input.value = 20;
}

function handleSubmit(i){
    var userAnswer = document.getElementById(`answer${i}`).value;
    if(userAnswer=== answer[i]){
        document.querySelector(`.result${i}`).innerHTML = userAnswer + " is the correct answer "
    }else{
        document.querySelector(`.result${i}`).innerHTML = userAnswer + " is incorrect. "+ answer[i]+ " is the correct answer "
    }
}

function getQuestion(){
    total = document.getElementById("totalQuestions").value;
    var questionsList ='<ol class="enum">'
    for (var i = 0; i < total; i++) {
        questionsList += `
        <li class="list">
        <spam class= "problem">${questions[i]} </spam>
        <input type="number" id="answer${i}" name="fname" value="" autocomplete="off" placeholder="Respuesta" />

        <p class="result${i}"></p>
        <br />
        </li>`;
    }
    questionsList += '</ol>';
    document.querySelector(".test").innerHTML =questionsList
}

function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
}

function showResults(){
    for (var i = 0; i < total; i++) {
        handleSubmit(i)
    }
}

function score(){
    alert("¿Estás seguro de que quieres ver las respuestas?");
    for (var i = 0; i < total; i++) {
        document.querySelector(`.result${i}`).innerHTML = answer[i]+ " is the correct answer "
    }
}
 
