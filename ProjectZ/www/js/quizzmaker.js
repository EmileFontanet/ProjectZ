function onDeviceReady() {
    console.log('Device ready');
}
document.addEventListener('deviceready', onDeviceReady, false);
console.log(json1);
var i = 1;
var actualQuestion = "question" + String(i);
function displayQuestion(question) {
    $('#rep1').text(question['reponseA']);
    $('#rep2').text(question['reponseB'])
    $('#rep3').text(question['reponseC'])
    $('#rep4').text(question['reponseD'])
    $('#rep5').text(question['reponseE'])
    $('#enonce').text(question['enonce'])
    $('#theme').text(question['theme'])
}
function fadeAndChangeQuestion(question){
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
    if(question['type'] == 'A'){
        $("#rep5").fadeOut(
        function(){
            $('#rep5').text(question['reponseE']);
        });
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
        $('#them').text(question['theme']);
    });
    
    $("#rep1").fadeIn();
    $("#rep2").fadeIn();
    $("#rep3").fadeIn();
    $("#rep4").fadeIn();
    
    $("#enonce").fadeIn();
    $("#theme").fadeIn();
}

function uncheckCheckboxes(){
    $(".custom-control-input").prop('checked', false);
}
$('#button').click(function() {
    i = i + 1;
    actualQuestion = "question" + String(i);
    uncheckCheckboxes();
    fadeAndChangeQuestion(json1[actualQuestion]);
});
