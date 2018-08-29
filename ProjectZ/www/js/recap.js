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

//on crée l'url du questionnaire qu'on va utiliser 
var script = "questions/microbiologie.json";

//on charge le questionnaire en question
$("head").append('<script type="text/javascript" src="' + script + '"></script>');
var quizDate = new Date(window.localStorage.getItem("recapDate"));
var quizThemeName = window.localStorage.getItem("recapThemeName");
var quizTestObj = JSON.parse(localStorage.getItem(quizThemeName));


var i;

//on crée les divisions des questions et on les met dans la bonne classe suivant si on y a bien répondu ou pas
for(i = 1; i < Object.keys(quizTestObj[quizDate]).length; i++){
    $("#questionBoxes").append("<div class = 'questionBox" + String(checkQuestionResult(quizTestObj[quizDate]["question"+String(i)])) + "' id = 'question" + String(i) + "'>Question " + String(i) + "</div>");
}
$(".questionBoxtrue").click(function(event){
    var currentQuestion = json1[event.target.id];
    var quizThemeName = window.localStorage.getItem("recapThemeName");
    var quizTestObj = JSON.parse(localStorage.getItem(quizThemeName));
    var quizDate = window.localStorage.getItem("recapDate");
    var htmlRecap = `<tr> 
                            <th colspan = "2">` + currentQuestion.enonce + `</th>
                            </tr>
                          <tr>
                            <td>Réponse A</td>
                            <td>` + currentQuestion.reponseA + `</td>
                            
                          </tr>

                        <tr>
                            <td>Réponse B</td>
                            <td>` + currentQuestion.reponseB + `</td>
                            
                          </tr>
                        <tr>
                            <td>Réponse C</td>
                            <td>` + currentQuestion.reponseC + `</td>
                            
                          </tr>
                        <tr>
                            <td>Réponse D</td>
                            <td>` + currentQuestion.reponseD + `</td>
                            
                          </tr>

                          <tr>
                            <td>Votre réponse</td>
                            <td>` + quizTestObj[quizDate][event.target.id].rightAnswers + `</td>
                            
                          </tr>
                          <tr>
                            <td>Bonne réponse</td>
                            <td>` + currentQuestion.bonneReponse + `</td>
                          </tr>
                        <tr>
                            <td>Justification</td>
                            <td>` + currentQuestion.justification + `</td>
                          </tr>`;
   swal({
       
       content:{
           element: "table",
           attributes: {
               innerHTML: htmlRecap
           }
       }
       
   })
})
$(".questionBoxfalse").click(function(event){
    var currentQuestion = json1[event.target.id];
    var quizThemeName = window.localStorage.getItem("recapThemeName");
    var quizTestObj = JSON.parse(localStorage.getItem(quizThemeName));
    var quizDate = window.localStorage.getItem("recapDate");
    var htmlRecap = `<tr> 
                            <th colspan = "2">` + currentQuestion.enonce + `</th>
                            </tr>
                          <tr>
                            <td>Réponse A</td>
                            <td>` + currentQuestion.reponseA + `</td>
                            
                          </tr>

                        <tr>
                            <td>Réponse B</td>
                            <td>` + currentQuestion.reponseB + `</td>
                            
                          </tr>
                        <tr>
                            <td>Réponse C</td>
                            <td>` + currentQuestion.reponseC + `</td>
                            
                          </tr>
                        <tr>
                            <td>Réponse D</td>
                            <td>` + currentQuestion.reponseD + `</td>
                            
                          </tr>

                          <tr>
                            <td>Votre réponse</td>
                            <td>` + quizTestObj[quizDate][event.target.id].userAnswers + `</td>
                            
                          </tr>
                          <tr>
                            <td>Bonne réponse</td>
                            <td>` + currentQuestion.bonneReponse + `</td>
                          </tr>
                        <tr>
                            <td>Justification</td>
                            <td>` + currentQuestion.justification + `</td>
                          </tr>`;
   swal({
       content:{
           element: "table",
           attributes: {
               innerHTML: htmlRecap
           }
       }
       
   })
})