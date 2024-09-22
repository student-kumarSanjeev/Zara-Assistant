let btn = document.querySelector("#btn");
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB";
    window.speechSynthesis.speak(text_speak);      
}
function wishMe()
{
    let day = new Date()
    let hours = day.getHours();
    if(hours>=0 && hours<12)
    {
        speak("Good Morning, i'm zara, welcome to zara assistant ")
    }
    else if(hours>=12 && hours<16)
    {
        speak("Good Afternoon,i'm zara, welcome to zara assistant ")
    }
    else
    {
        speak("Good Evening, i'm zara, welcome to zara assistant")
    }
}
window.addEventListener('load',()=>{
   wishMe();
});

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event)=>{
   
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())

}
btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="block";
})
function takeCommand (message){
    btn.style.display="flex";
    voice.style.display="none";
    if(message.includes("hello zara") || message.includes("hey zara") )
    {
        speak("hello, what can i help you?")
    }
    else if(message.includes("how are you")){
        speak("I'm doing great, thanks for asking!")
    }
    else if(message.includes("what is your name") || message.includes("What’s your name?"))
    {
        speak("my name is zara")
    }
    else if(message.includes("who are you"))
    {
        speak("I'm a virtual Assistant, created by sanjeev sir")
    }
    else if(message.includes("tell me a joke"))
    {
        speak("Pappu: Doctor sahab, when I sleep, monkeys play football in my dreams")
        speak("Doctor: Take this medicine, start taking it from tonight")
        speak("Pappu: I will start taking it from tomorrow, today is the final day!")
        speak("hahahahhahaha")
    }
    else if(message.includes("tell me more joke"))
    {
        speak("Wife: How much do you love me?")
        speak("Husband: I can't count. Wife: Tell me anyway.")
        speak("Husband: Twice the amount of brain you have!")
    }
  
    else if(message.includes("open google"))
    {
        speak("opening google")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open youtube"))
    {
        speak("opening youtube")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open facebook"))
    {
        speak("opening facebook")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open instagram"))
    {
        speak("opening instagram")
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("open calculator"))
    {
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("time"))
    {
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time);
    }
    else if(message.includes("date"))
    {
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date);
    }
    else
    {
        let finalText = "this is what if fount about" +message.replace("zara","") || message.replace("ara","")+"on internet"
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("zara","")}`,"_blank")
    }
}