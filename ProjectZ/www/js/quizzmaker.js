function onDeviceReady() {
    console.log('Device ready');
}
document.addEventListener('deviceready', onDeviceReady, false);
var theme = "microbiologie";
var quizThemeName = 'quizTest' + String(theme);
var numberOfQuestions = Object.keys(json1).length
//si c'est la première fois qu'on fait ce quiz, on crée la variable en mémoire locale 
if(localStorage.getItem(quizThemeName) === null){ 
    var i = 1;
    var actualQuestion = "question" + String(i);
    var testDate = new Date();
    testDate = String(testDate);
    var quizTestObj = {};
    quizTestObj[testDate] = {};
    quizTestObj['unfinishedTest'] = testDate;
    quizTestObj[testDate]['i'] = i;
    localStorage.setItem(quizThemeName, JSON.stringify(quizTestObj));
}

//si la variable en mémoire locale existe déjà, on regarde si il existe un test en cours d'exécution
else{
    var quizTestObj = JSON.parse(localStorage.getItem(quizThemeName));
    if(quizTestObj['unfinishedTest'] !== 'none'){
        var testDate = quizTestObj['unfinishedTest'];
        var i = quizTestObj[testDate]['i'];
        $('#progressbar').width(String(100*(i-1)/(numberOfQuestions-1)) +"%");
        var actualQuestion = "question" + String(i);
    }
    else{
        var i = 1;
        var actualQuestion = "question" + String(i);
        var testDate = new Date();
        testDate = String(testDate);
        quizTestObj['unfinishedTest'] = testDate;
        quizTestObj[testDate] = {};
        quizTestObj[testDate]['i'] = i;
        localStorage.setItem(quizThemeName, JSON.stringify(quizTestObj));
    }
}
var score = 0 ;


function displayQuestion(question) {
    $('#rep1').text(question["reponseA"]);
    $('#rep2').text(question['reponseB']);
    $('#rep3').text(question['reponseC']);
    $('#rep4').text(question['reponseD']);
    if(question['type'] == 'A'){
        $('#lastRepDiv').show();
        $('#rep5').text(question['reponseE']);
    }
    else{
        $('#lastRepDiv').hide();
    }
    
    $('#enonce').text(question['enonce']);
    $('#theme').text(question['theme']);
    questionPosition = {1 : 'A', 2 : 'B', 3 : 'C', 4 : 'D', 5 : 'E'};
    quizTestObj[testDate][actualQuestion] = {};
    quizTestObj[testDate][actualQuestion]['questionPosition'] = questionPosition;
    
    return questionPosition;
}
function fadeAndChangeQuestion(question){
    if (question['type'] == 'A'){
        $("#rep5").fadeOut(
        function(){
            $('#rep5').text(question['reponseE']);
        });
        $('#lastRepDiv').fadeIn();
        $("#rep5").fadeIn();
    }
    else{
        $("#lastRepDiv").fadeOut();
    }
    
    $("#enonce").fadeOut(
    function(){
        $('#enonce').text(question['enonce']);
    });
    $("#theme").fadeOut('slow', 
    function(){
        $('#theme').text(question['theme']);
    });
    $("#rep1").fadeOut(
    function(){
        $('#rep1').text(question['reponseA']);
    });
    $("#rep2").fadeOut(
    function(){
        $('#rep2').text(question['reponseB']);
    });
    $("#rep3").fadeOut(
    function(){
        $('#rep3').text(question['reponseC']);
    });
    $("#rep4").fadeOut(
    function(){
        $('#rep4').text(question['reponseD']);
    });
    $("#rep1").fadeIn();
    $("#rep2").fadeIn();
    $("#rep3").fadeIn();
    $("#rep4").fadeIn();
    $("#enonce").fadeIn();
    $("#theme").fadeIn();
    questionPosition = {1 : 'A', 2 : 'B', 3 : 'C', 4 : 'D', 5 : 'E'}
    quizTestObj[testDate][actualQuestion] = {};
    quizTestObj[testDate][actualQuestion]['questionPosition'] = questionPosition;
    return questionPosition;
}
function checkAnswers(questionPosition, answers, question){
    var score = 0
    var userTrueAnswers = [];
    var correspondanceRep = {'A' : 'reponseA', 'B' : 'reponseB', 'C' : 'reponseC', 'D' : 'reponseD', 'E' : 'reponseE', };
    var correspondanceCheckbox = {"checkbox1" :  1, "checkbox2" :  2, "checkbox3" : 3, "checkbox4" :  4, "checkbox5" :  5, }
    answers.forEach(function(entry){        
        userTrueAnswers.push(questionPosition[correspondanceCheckbox[entry]]);
    });
    var rightAnswers = question['bonneReponse'].split(',');
    quizTestObj[testDate][actualQuestion]['userAnswers'] = userTrueAnswers;
    quizTestObj[testDate][actualQuestion]['rightAnswers'] = rightAnswers;
    rightAnswers.forEach(function(entry){
        if(userTrueAnswers.includes(entry)){
            score +=1
        }
    });
   // console.log(score);
    //console.log(rightAnswers.length);
    if(score == rightAnswers.length){
        return true;
    }
    else{
        return false;
    }
}
function getUserAnswers(){
    var checkedCheckboxes = $('.custom-control-input:checkbox:checked');
    var answers = [];
    Object.keys(checkedCheckboxes).forEach(function(entry){
        if(!isNaN(entry)){
            answers.push(checkedCheckboxes[entry]['id']);
        }
        
    });
    return answers;
}
function uncheckCheckboxes(){
    $(".custom-control-input").prop('checked', false);
}
$('#button').click(function() {
    var answers = getUserAnswers();
    //var questionPosition = displayQuestion(json1[actualQuestion]);
    if(checkAnswers(questionPosition, answers, json1[actualQuestion])){
        console.log('Bonne réponse');
        score += 1
    }
    else{
        console.log('Mauvaise réponse');
    }
    i += 1;
    quizTestObj[testDate]['i'] = i;
    $('#progressbar').width(String(100*(i-1)/(numberOfQuestions-1)) +"%");
    if(i == Object.keys(json1).length){
        alert("quizz fini, vous avez obtenu un score de " + String(score) + " sur " + String(numberOfQuestions));
        quizTestObj['unfinishedTest'] = 'none';
        localStorage.setItem(quizThemeName, JSON.stringify(quizTestObj));
        window.location.replace("index.html");
    }
    actualQuestion = "question" + String(i);
    uncheckCheckboxes();
    questionPosition = fadeAndChangeQuestion(json1[actualQuestion]);
    localStorage.setItem(quizThemeName, JSON.stringify(quizTestObj));
    
    
    
});
