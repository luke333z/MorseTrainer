let output = "";
function refreshOutput()
{
    document.getElementById("output").innerHTML = output;
}    

function clearOutput()
{
    blockInput = true;
    refreshOutput();
    setTimeout(() => {
        output = "";
        refreshOutput();
        blockInput = false;
    }, 1000);
}    

//settings
let mute = false;
function muteToggle()
{
    mute = !mute;
    mute ?  document.getElementById('mute').src = "./icons/mute.png" :  document.getElementById('mute').src = "./icons/sound.png";

}

let hints = true;
function hintToggle()
{
    
    hints = !hints;
    hints ?  document.getElementById('hints').src = "./icons/hints.png" :  document.getElementById('hints').src = "./icons/nohints.png";
}

let wordMode = true;
function modeToggle()
{
    wordMode = !wordMode;
    wordMode ?  document.getElementById('mode').src = "./icons/wordmode.png" :  document.getElementById('mode').src = "./icons/lettermode.png";
}    

//letters and word translations
const letterList = [
    { letter: 'A', ascii: 97, morse: ".-"}, 
    { letter: 'B', ascii: 98, morse: "-..."},
    { letter: 'C', ascii: 99, morse: "-.-."},
    { letter: 'D', ascii: 100, morse: "-.."},
    { letter: 'E', ascii: 101, morse: "."},
    { letter: 'F', ascii: 102, morse: "..-."},
    { letter: 'G', ascii: 103, morse: "--."},
    { letter: 'H', ascii: 104, morse: "...."},
    { letter: 'I', ascii: 105, morse: ".."},
    { letter: 'J', ascii: 106, morse: ".---"},
    { letter: 'K', ascii: 107, morse: "-.-"},
    { letter: 'L', ascii: 108, morse: ".-.."},
    { letter: 'M', ascii: 109, morse: "--"},
    { letter: 'N', ascii: 110, morse: "-."},
    { letter: 'O', ascii: 111, morse: "---"},
    { letter: 'P', ascii: 112, morse: ".--."},
    { letter: 'Q', ascii: 113, morse: "--.-"},
    { letter: 'R', ascii: 114, morse: ".-."},
    { letter: 'S', ascii: 115, morse: "..."},
    { letter: 'T', ascii: 116, morse: "-"},
    { letter: 'U', ascii: 117, morse: "..-"},
    { letter: 'V', ascii: 118, morse: "...-"},
    { letter: 'W', ascii: 119, morse: ".--"},
    { letter: 'X', ascii: 120, morse: "-..-"},
    { letter: 'Y', ascii: 121, morse: "-.--"},
    { letter: 'Z', ascii: 122, morse: "--.."}
];    

function shake()
{
    let output = document.getElementById("output")
    output.style.paddingLeft =  "40px";
    setTimeout(() => {
        output.style.paddingLeft =  "0px";     
        setTimeout(() => {
            output.style.paddingLeft =  "40px"; 
            setTimeout(() => {
                output.style.paddingLeft =  "0px";   
            }, 100);        
        }, 100);    
    }, 100);              
}

/*function translate(word)
{
    let letterArray = word.split("");
    let translated = "";
    letterArray.forEach(element => {
        for(var i = 0; i < letterList.length; i++)
        if(letterList[i].letter == element)
        translated+=letterList[i].morse;    
    });    
    return translated;
}*/


function translate(letter)
{
    let translated = "";
    for(var i = 0; i < letterList.length; i++)
        if(letterList[i].letter == letter)
            translated=letterList[i].morse;   
    
        return translated;
    }
let COUNTER = 0;
let currentWord = "ACDE";
function swapWords()
{
    let con1,con2;
    if(COUNTER % 2 == 0)
    {
        con1 = document.getElementById("content0");
        con2 = document.getElementById("content1");;
    }
    else
    {
        con1 = document.getElementById("content1");
        con2 = document.getElementById("content0");
    }
    con1.style.top = "-1000px";
    con2.style.top = "200px";
    setTimeout(() => {
        con1.style.display = "none";
        con1.style.top = "1200px";
    }, 100);
    setTimeout(() => {
        con1.style.display = "block";
    }, 300);
    COUNTER++;

}
function showHint()
{

}
function wmVerify()
{
    let contentID;
    COUNTER % 2 ==0 ?  contentID = "content0" : contentID = "content1";
    blockInput = true;
    let mistake = false;
    let output2 = "", index = 0;
    let letterArray = currentWord.split("");
    let mVerif = output.split(" / ");
    letterArray.forEach(letter => {
        let morse = translate(letter);
        console.log(morse, mVerif, morse.length, letter, index)
        if(morse == mVerif[index])
        {
            output2+=letter;
        }
        else
        {
            output2+=`<span id = "div${index}" style="transition: 300ms;">${letter}</span>`
            mistake = true;
        }
        index++;
    });
    document.getElementById(contentID).innerHTML = output2;
    clearOutput();
    if(mistake)
    {   
        setTimeout(() => {
            for(let i = 0; i < index; i++)
            {
                if(document.getElementById(`div${i}`))
                    document.getElementById(`div${i}`).style.color="#ff0000";
            }
        }, 200);
        shake();
        showHint();
        
        setTimeout(() => {
            for(let i = 0; i < index; i++)
            {
                if(document.getElementById(`div${i}`))
                    document.getElementById(`div${i}`).style.color="#ffffff";
                
            }
            setTimeout(() => {
                document.getElementById(contentID).innerHTML = currentWord;
                blockInput = false;
            }, 300);
        }, 1000);
    }
    else
    {
        swapWords();
    }
    
}
//output = morse scris
function verifyOutput()
{
    

    if(translated)
    {
        if(translated == 'e')
        {
            output = translated;
            clearOutput();
            changeLetter();
        }
        else
        {
            shake();
            clearOutput();
            showHint();
        }
    }
    else
    {
        output = output;
        shake();
        clearOutput();
        showHint();
    }
}
















let interval;
let blockInput = false;
function resetInterval()
{   
    window.clearInterval(interval);
    interval = window.setInterval(function() {  //until time runs out do nothing
       //then do this
        wmVerify();
        window.clearInterval(interval);
    }, 2000);    
}    

 

//key handler
document.onkeydown = function(e){
    e = e || window;
    var key = e.which || e.keyCode;
    if(key===74) // j
        dot(); 
    else if(key===75) // k
        dash();
    else if (key === 72)//h
        space();
    else if(key===67) // c
        swapWords();
}    


let dashSnd  = new Audio('dash.wav'), dotSnd  = new Audio('dot.wav');
dashSnd.volume = 0.7;
dotSnd.volume = 0.7;

function dot()
{
    
    if(output.length<70 && !blockInput)
    {
        if(!mute){
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
        if(!mute){
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


function space()
{
    
    if(output.length<70 && !blockInput && wordMode)
        output+=" / ";
  
    refreshOutput();
    resetInterval();
}   
