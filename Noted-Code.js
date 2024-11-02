//below code for convert text to speak 
let speaktext = new SpeechSynthesisUtterance('Welcome to this Ly leang seng');
const voice = speechSynthesis.getVoices();
speaktext.voice  = voice[0];
speechSynthesis.speak(speaktext)


