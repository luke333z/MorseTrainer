let output = "";

let mutePressed = false;
function muteToggle()
{
    mutePressed = !mutePressed;
    mutePressed ?  document.getElementById('mute').src = "./icons/mute.png" :  document.getElementById('mute').src = "./icons/sound.png";
}

let hintPressed = false;
function hintToggle()
{
    mutePressed = !mutePressed;
    mutePressed ?  document.getElementById('hint').src = "./icons/nohints.png" :  document.getElementById('hint').src = "./icons/hints.png";
}

let modePressed = false;
function modeToggle()
{
    mutePressed = !mutePressed;
    mutePressed ?  document.getElementById('mode').src = "./icons/wordmode.png" :  document.getElementById('mode').src = "./icons/lettermode.png";
}    


const letterList = [
    { letter: 'a', ascii: 97, morse: ".-"},
    { letter: 'b', ascii: 98, morse: "-..."},
    { letter: 'c', ascii: 99, morse: "-.-."},
    { letter: 'd', ascii: 100, morse: "-.."},
    { letter: 'e', ascii: 101, morse: "."},
    { letter: 'f', ascii: 102, morse: "..-."},
    { letter: 'g', ascii: 103, morse: "--."},
    { letter: 'h', ascii: 104, morse: "...."},
    { letter: 'i', ascii: 105, morse: ".."},
    { letter: 'j', ascii: 106, morse: ".---"},
    { letter: 'k', ascii: 107, morse: "-.-"},
    { letter: 'l', ascii: 108, morse: ".-.."},
    { letter: 'm', ascii: 109, morse: "--"},
    { letter: 'n', ascii: 110, morse: "-."},
    { letter: 'o', ascii: 111, morse: "---"},
    { letter: 'p', ascii: 112, morse: ".--."},
    { letter: 'q', ascii: 113, morse: "--.-"},
    { letter: 'r', ascii: 114, morse: ".-."},
    { letter: 's', ascii: 115, morse: "..."},
    { letter: 't', ascii: 116, morse: "-"},
    { letter: 'u', ascii: 117, morse: "..-"},
    { letter: 'v', ascii: 118, morse: "...-"},
    { letter: 'w', ascii: 119, morse: ".--"},
    { letter: 'x', ascii: 120, morse: "-..-"},
    { letter: 'y', ascii: 121, morse: "-.--"},
    { letter: 'z', ascii: 122, morse: "--.."}
];    


function translate(word)
{
    let letterArray = word.split("");
    let translated = "";
    letterArray.forEach(element => {
        for(var i = 0; i < letterList.length; i++)
        if(letterList[i].letter == element)
        translated+=letterList[i].morse;    
});    
return translated;
}


function reverseTranslate(morse)
{
    let found = false;
    let translated = "";
    for(var i = 0; i < letterList.length; i++)
    if(letterList[i].morse == morse)
    translated=letterList[i].letter, found=true;    
if(found)
return translated;
else 
{ 
    document.getElementById("output").style.paddingLeft =  "40px";
    setTimeout(() => {
        document.getElementById("output").style.paddingLeft =  "0px";     
        setTimeout(() => {
            document.getElementById("output").style.paddingLeft =  "40px"; 
            setTimeout(() => {
                document.getElementById("output").style.paddingLeft =  "0px";   
            }, 100);        
        }, 100);    
    }, 100);              
    return output;
}    
}


function refreshOutput()
{
    document.getElementById("output").innerHTML = output;
}    


function clearOutput()
{
    output = "";
    refreshOutput();
}    


document.onkeydown = function(e){
    e = e || window;
    var key = e.which || e.keyCode;
    if(key===74) // j
    {
        dot();
      
    }   
    else if(key===75) // k
    {
        dash();
       
    }
    else if(key===67) // c
        clearOutput();
}    


let interval;
let blockInput = false;
function resetInterval()
{   
    window.clearInterval(interval);
    interval = window.setInterval(function() {  
        output = reverseTranslate(output);
        blockInput = true;
        refreshOutput();
        
        setTimeout(() => {
            clearOutput();
            blockInput = false;
        }, 1000);    
        window.clearInterval(interval);
    }, 3000);    
}    

let dashSnd  = new Audio('dash.wav'), dotSnd  = new Audio('dot.wav');
dashSnd.volume = 0.7;
dotSnd.volume = 0.7;

function dot()
{
    
    if(output.length<70 && !blockInput)
    {
        if(!mutePressed){
            dotSnd.pause();
            dashSnd.pause();
            dotSnd = new Audio('dot.wav');
            dotSnd.volume = 0.7;
            dotSnd.play();
        }    
        output+=".";
    }    
    refreshOutput();
    resetInterval();
}    


function dash()
{
    
    if(output.length<70 && !blockInput)
    {
        if(!mutePressed){
            dashSnd.pause();
            dotSnd.pause();
            dashSnd = new Audio('dash.wav');
            dashSnd.volume = 0.7;
            dashSnd.play();
        }    
        output+="-";
    }    
    refreshOutput();
    resetInterval();
}    



