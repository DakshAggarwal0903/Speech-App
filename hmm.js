var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var idk=document.getElementById("textbox");
function rec(){
    idk.innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){console.log(event);
var z= event.results[0][0].transcript
idk.innerHTML=z
speak();
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data= "Taking your selfie in one thousand milliseconds.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}