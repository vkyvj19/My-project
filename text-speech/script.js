const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const select = document.querySelector("select");
let speech = new SpeechSynthesisUtterance();

button.addEventListener("click", ()=>{
      speech.text= textarea.value;
      window.speechSynthesis.speak(speech);
});