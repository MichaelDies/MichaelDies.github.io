var btn = document.getElementById('cal');
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new SpeechRecognition();
var recognition1 = new SpeechRecognition();
var duration = new SpeechRecognition();
var startTime, endTime;
//var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
//var speechRecognitionList = new SpeechGrammarList();

recognition.duration = TimeRanges;
recognition.continuous = false;
//recognition.grammars = speechRecognitionList;
//recognition.lang = 'en-US';
//recognition.interimResults = false;
//recognition.maxAlternatives = 1;


recognition.onresult = function (event) {
    const current = event.duration;
    recognition.stop();

}

   btn.addEventListener ('click' , function (){
    recognition.start();
    console.log('Listinning...');
    // when i click on the button it is ready to resive sound
});


recognition.onsoundend = function(){
    startTime = performance.now();   
    recognition.stop();
    // It stops when the sound is over
}
    


recognition.onsoundend = function (){
    recognition1.start();
    startTime = performance.now();

}
recognition1.onsoundstart = function(){
    endTime = performance.now();
    var timeDiff = endTime - startTime;
    timeDiff /= 1000; 
    var seconds = Math.round(timeDiff);
    console.log(timeDiff + " seconds");
    var x = 10;
    var y = x / timeDiff ;
    console.log(y + "  m/s");
    document.getElementById("calculations").innerHTML = "Speed = " +  y + "  M/s <br>" + "Time = " + timeDiff + "  Seconds";
    // Then it makes the calculation
}


recognition1.onsoundend = function(){
    recognition1.stop();
    
}