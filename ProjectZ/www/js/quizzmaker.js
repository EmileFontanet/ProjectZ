function onDeviceReady() {
    console.log('Device ready');
}
document.addEventListener('deviceready', onDeviceReady, false);
var json1  = JSON.parse(json);
console.log(json1);
function makeBody(question){
    var card = '<div class="card text-white bg-primary mb-3 w-100 h-25">  <div class="card-header" id="theme">Header</div>  <div class="card-body">    <p class="card-text" id = "enonce">Some quick example text to build on the card title and make up the bulk of the cards content.</p></div></div>';
    return card;
}

function displayQuestionEnvironment(question){
    $("#questionZone").empty();
    var body = makeBody(question);
    $("#questionZone").prepend(body);
    $("#theme").text(question["theme"]);
    $("#enonce").text(question["enonce"]);
    return;
}
displayQuestionEnvironment(json1["question1"]);