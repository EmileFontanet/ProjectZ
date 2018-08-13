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

//on crée les divisions des questions et on les met dans la bonne classe suivant si on y a bien répondu ou pas
for(i = 1; i < Object.keys(quizTestObj[quizDate]).length; i++){
    $("#questionBoxes").append("<div class = 'questionBox" + String(checkQuestionResult(quizTestObj[quizDate]["question"+String(i)])) + "' id = 'question" + String(i) + "'>Question " + String(i) + "</div>");
}
$(".questionBoxtrue").click(function(event){
   swal({
       content:{
           element: "table",
           attributes: {
               innerHTML: `<tr> 
                            <th colspan = "2">Age</th>
                            </tr>
                          <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            
                          </tr>
                          <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            
                          </tr>
                          <tr>
                            <td>John</td>
                            <td>Doe</td>
                          </tr>`
           }
       }
       
   })
})
$(".questionBoxfalse").click(function(event){
   
})