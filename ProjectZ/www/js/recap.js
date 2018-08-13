function onDeviceReady() {
    console.log("Device ready");
}
function checkQuestionResult(question){
    if(question.rightAnswers.length === question.userAnswers.length){
        for(var i = 0; i < question.rightAnswers.length; i++){
            if(question.rightAnswers.sort()[i] !== question.userAnswers.sort()[i]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
document.addEventListener("deviceready", onDeviceReady, false);

var quizDate = window.localStorage.getItem("recapDate");
var quizThemeName = window.localStorage.getItem("recapThemeName");
var quizTestObj = JSON.parse(localStorage.getItem(quizThemeName));

console.log(quizTestObj[quizDate]);
console.log(quizThemeName);
console.log(quizDate);
$("#titleRecap").text("Récapitulatif - Test du " + String(quizDate));
var i;
for(i = 1; i < Object.keys(quizTestObj[quizDate]).length; i++){
    $("#questionBoxes").append("<div class = 'questionBox'>Question " + String(i) + " - " + String(checkQuestionResult(quizTestObj[quizDate]["question"+String(i)])) + "</div>");
}

