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

const wordArray = ["people","history","way","art","world","information","map","two","family","government","health",
"system","computer","meat","year","thanks","music","person","reading","method","data","food",
"understanding","theory","law","bird","literature","problem","software","control","knowledge",
"power","ability","economics","love","internet","television","science","library","nature","fact",
"product","idea","temperature","investment","area","society","activity","story","industry","media",
"thing","oven","community","definition","safety","quality","development","language","management",
"player","variety","video","week","security","country","exam","movie","organization","equipment",
"physics","analysis","policy","series","thought","basis","boyfriend","direction","strategy",
"technology","army","camera","freedom","paper","environment","child","instance","month","truth",
"marketing","university","writing","article","department","difference","goal","news","audience",
"fishing","growth","income","marriage","user","combination","failure","meaning","medicine",
"philosophy","teacher","communication","night","chemistry","disease","disk","energy","nation",
"road","role","soup","advertising","location","success","addition","apartment","education","math",
"moment","painting","politics","attention","decision","event","property","shopping","student",
"wood","competition","distribution","entertainment","office","population","president","unit",
"category","cigarette","context","introduction","opportunity","performance","driver","flight",
"length","magazine","newspaper","relationship","teaching","cell","dealer","finding","lake",
"member","message","phone","scene","appearance","association","concept","customer","death",
"discussion","housing","inflation","insurance","mood","woman","advice","blood","effort",
"expression","importance","opinion","payment","reality","responsibility","situation","skill",
"statement","wealth","application","city","county","depth","estate","foundation","grandmother",
"heart","perspective","photo","recipe","studio","topic","collection","depression","imagination",
"passion","percentage","resource","setting","ad","agency","college","connection","criticism",
"debt","description","memory","patience","secretary","solution","administration","aspect",
"attitude","director","personality","psychology","recommendation","response","selection",
"storage","version","alcohol","argument","complaint","contract","emphasis","highway","loss",
"membership","possession","preparation","steak","union","agreement","cancer","currency",
"employment","engineering","entry","interaction","mixture","preference","region","republic",
"tradition","virus","actor","classroom","delivery","device","difficulty","drama","election",
"engine","football","guidance","hotel","owner","priority","protection","suggestion","tension",
"variation","anxiety","atmosphere","awareness","bath","bread","candidate","climate","comparison",
"confusion","construction","elevator","emotion","employee","employer","guest","height","leadership",
"mall","manager","operation","recording","sample","transportation","charity","cousin","disaster",
"editor","efficiency","excitement","extent","feedback","guitar","homework","leader","mom","outcome",
"permission","presentation","promotion","reflection","refrigerator","resolution","revenue","session",
"singer","tennis","basket","bonus","cabinet","childhood","church","clothes","coffee","dinner","drawing",
"hair","hearing","initiative","judgment","lab","measurement","mode","mud","orange","poetry","police",
"possibility","procedure","queen","ratio","relation","restaurant","satisfaction","sector","signature",
"significance","song","tooth","town","vehicle","volume","wife","accident","airport","appointment","arrival",
"assumption","baseball","chapter","committee","conversation","database","enthusiasm","error","explanation",
"farmer","gate","girl","hall","historian","hospital","injury","instruction","maintenance","manufacturer",
"meal","perception","pie","poem","presence","proposal","reception","replacement","revolution","river","son",
"speech","tea","village","warning","winner","worker","writer","assistance","breath","buyer","chest",
"chocolate","conclusion","contribution","cookie","courage","dad","desk","drawer","establishment",
"examination","garbage","grocery","honey","impression","improvement","independence","insect","inspection",
"inspector","king","ladder","menu","penalty","piano","potato","profession","professor","quantity","reaction",
"requirement","salad","sister","supermarket","tongue","weakness","wedding","affair","ambition",
"analyst","apple","assignment","assistant","bathroom","bedroom","beer","birthday","celebration",
"championship","cheek","client","consequence","departure","diamond","dirt","ear","fortune","friendship",
"funeral","gene","girlfriend","hat","indication","intention","lady","midnight","negotiation","obligation",
"passenger","pizza","platform","poet","pollution","recognition","reputation","shirt","sir","speaker",
"stranger","surgery","sympathy","tale","throat","trainer","uncle","youth","time","work","film","water",
"money","example","while","business","study","game","life","form","air","day","place","number","part",
"field","fish","back","process","heat","hand","experience","job","book","end","point","type","home","economy",
"value","body","market","guide","interest","state","radio","course","company","price","size","card","list",
"mind","trade","line","care","group","risk","word","fat","force","key","light","training","name","school",
"top","amount","level","order","practice","research","sense","service","piece","web","boss","sport","fun",
"house","page","term","test","answer","sound","focus","matter","kind","soil","board","oil","picture","access",
"garden","range","rate","reason","future","site","demand","exercise","image","case","cause","coast","action",
"age","bad","boat","record","result","section","building","mouse","cash","class","nothing","period","plan",
"store","tax","side","subject","space","rule","stock","weather","chance","figure","man","model","source",
"beginning","earth","program","chicken","design","feature","head","material","purpose","question","rock",
"salt","act","birth","car","dog","object","scale","sun","note","profit","rent","speed","style","war","bank",
"craft","half","inside","outside","standard","bus","exchange","eye","fire","position","pressure","stress",
"advantage","benefit","box","frame","issue","step","cycle","face","item","metal","paint","review","room",
"screen","structure","view","account","ball","discipline","medium","share","balance","bit","black","bottom"
,"choice","gift","impact","machine","shape","tool","wind","address","average","career","culture","morning",
"pot","sign","table","task","condition","contact","credit","egg","hope","ice","network","north","square",
"attempt","date","effect","link","post","star","voice","capital","challenge","friend","self","shot","brush",
"couple","debate","exit","front","function","lack","living","plant","plastic","spot","summer","taste","theme",
"track","wing","brain","button","click","desire","foot","gas","influence","notice","rain","wall","base",
"damage","distance","feeling","pair","savings","staff","sugar","target","text","animal","author","budget",
"discount","file","ground","lesson","minute","officer","phase","reference","register","sky","stage","stick",
"title","trouble","bowl","bridge","campaign","character","club","edge","evidence","fan","letter","lock",
"maximum","novel","option","pack","park","plenty","quarter","skin","sort","weight","baby","background",
"carry","dish","factor","fruit","glass","joint","master","muscle","red","strength","traffic","trip",
"vegetable","appeal","chart","gear","ideal","kitchen","land","log","mother","net","party","principle",
"relative","sale","season","signal","spirit","street","tree","wave","belt","bench","commission","copy",
"drop","minimum","path","progress","project","sea","south","status","stuff","ticket","tour","angle","blue",
"breakfast","confidence","daughter","degree","doctor","dot","dream","duty","essay","father","fee","finance",
"hour","juice","limit","luck","milk","mouth","peace","pipe","seat","stable","storm","substance","team","trick",
"afternoon","bat","beach","blank","catch","chain","consideration","cream","crew","detail","gold","interview",
"kid","mark","match","mission","pain","pleasure","score","screw","sex","shop","shower","suit","tone","window",
"agent","band","block","bone","calendar","cap","coat","contest","corner","court","cup","district","door",
"east","finger","garage","guarantee","hole","hook","implement","layer","lecture","lie","manner","meeting",
"nose","parking","partner","profile","respect","rice","routine","schedule","swimming","telephone","tip",
"winter","airline","bag","battle","bed","bill","bother","cake","code","curve","designer","dimension","dress",
"ease","emergency","evening","extension","farm","fight","gap","grade","holiday","horror","horse","host",
"husband","loan","mistake","mountain","nail","noise","occasion","package","patient","pause","phrase","proof",
"race","relief","sand","sentence","shoulder","smoke","stomach","string","tourist","towel","vacation",
"west","wheel","wine","arm","aside","associate","bet","blow","border","branch","breast","brother","buddy",
"bunch","chip","coach","cross","document","draft","dust","expert","floor","god","golf","habit","iron","judge",
"knife","landscape","league","mail","mess","native","opening","parent","pattern","pin","pool","pound","request",
"salary","shame","shelter","shoe","silver","tackle","tank","trust","assist","bake","bar","bell","bike","blame",
"boy","brick","chair","closet","clue","collar","comment","conference","devil","diet","fear","fuel","glove",
"jacket","lunch","monitor","mortgage","nurse","pace","panic","peak","plane","reward","row","sandwich","shock",
"spite","spray","surprise","till","transition","weekend","welcome","yard","alarm","bend","bicycle","bite",
"blind","bottle","cable","candle","clerk","cloud","concert","counter","flower","grandfather","harm","knee",
"lawyer","leather","load","mirror","neck","pension","plate","purple","ruin","ship","skirt","slice","snow",
"specialist","stroke","switch","trash","tune","zone","anger","award","bid","bitter","boot","bug","camp",
"candy","carpet","cat","champion","channel","clock","comfort","cow","crack","engineer","entrance","fault",
"grass","guy","hell","highlight","incident","island","joke","jury","leg","lip","mate","motor","nerve",
"passage","pen","pride","priest","prize","promise","resident","resort","ring","roof","rope","sail","scheme",
"script","sock","station","toe","tower","truck","witness","a","you","it","can","will","if","one","many","most",
"other","use","make","good","look","help","go","great","being","few","might","still","public","read","keep",
"start","give","human","local","general","she","specific","long","play","feel","high","tonight","put","common",
"set","change","simple","past","big","possible","particular","today","major","personal","current","national",
"cut","natural","physical","show","try","check","second","call","move","pay","let","increase","single",
"individual","turn","ask","buy","guard","hold","main","offer","potential","professional","international",
"travel","cook","alternative","following","special","working","whole","dance","excuse","cold","commercial",
"low","purchase","deal","primary","worth","fall","necessary","positive","produce","search","present","spend",
"talk","creative","tell","cost","drive","green","support","glad","remove","return","run","complex","due",
"effective","middle","regular","reserve","independent","leave","original","reach","rest","serve","watch",
"beautiful","charge","active","break","negative","safe","stay","visit","visual","affect","cover","report",
"rise","walk","white","beyond","junior","pick","unique","anything","classic","final","lift","mix","private",
"stop","teach","western","concern","familiar","fly","official","broad","comfortable","gain","maybe","rich",
"save","stand","young","fail","heavy","hello","lead","listen","valuable","worry","handle","leading","meet",
"release","sell","finish","normal","press","ride","secret","spread","spring","tough","wait","brown","deep",
"display","flow","hit","objective","shoot","touch","cancel","chemical","cry","dump","extreme","push",
"conflict","eat","fill","formal","jump","kick","opposite","pass","pitch","remote","total","treat","vast",
"abuse","beat","burn","deposit","print","raise","sleep","somewhere","advance","anywhere","consist","dark",
"double","draw","equal","fix","hire","internal","join","kill","sensitive","tap","win","attack","claim",
"constant","drag","drink","guess","minor","pull","raw","soft","solid","wear","weird","wonder","annual","count",
"dead","doubt","feed","forever","impress","nobody","repeat","round","sing","slide","strip","whereas","wish",
"combine","command","dig","divide","equivalent","hang","hunt","initial","march","mention","smell","spiritual",
"survey","tie","adult","brief","crazy","escape","gather","hate","prior","repair","rough","sad","scratch",
"sick","strike","employ","external","hurt","illegal","laugh","lay","mobile","nasty","ordinary","respond",
"royal","senior","split","strain","struggle","swim","train","upper","wash","yellow","convert","crash",
"dependent","fold","funny","grab","hide","miss","permit","quote","recover","resolve","roll","sink","slip",
"spare","suspect","sweet","swing","twist","upstairs","usual","abroad","brave","calm","concentrate","estimate",
"grand","male","mine","prompt","quiet","refuse","regret","reveal","rush","shake","shift","shine","steal",
"suck","surround","anybody","bear","brilliant","dare","dear","delay","drunk","female","hurry","inevitable",
"invite","kiss","neat","pop","punch","quit","reply","representative","resist","rip","rub","silly","smile",
"spell","stretch","stupid","tear","temporary","tomorrow","wake","wrap","yesterday"];

const wmDesc = `In "Word Mode," players decode entire words, emphasizing complete word recognition, making it a harder gamemode. Make sure you insert spaces between each letter for a good translation.`;

const lmDesc = `In "Letter Mode," players decode words letter by letter, being beginner friendly. `;

const validKeys = ['0','1','2','3','4','5','6','7','8','9','-','=','/',',','.','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

let output = "";
let COUNTER = 0;
let blockInput = false;


//output
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

function updateScore(cnt)
{
    document.getElementById("score").innerHTML = `SCORE: ${cnt}`;
}


//settings & such
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
    document.getElementById("drawer").innerHTML = wordMode ? wmDesc : lmDesc;
    if(!wordMode)
    {
        blockInput = true;
        document.getElementById("loading").style.backgroundColor = "#ff0000";
        document.getElementById("loading").innerHTML = "WORK IN PROGRESS PLEASE REFRESH PAGE";
        document.getElementById("loading").style.translate = "0 0";
        if(isMobile())
        document.getElementById("loading").style.fontSize = "80px";
    }
}    

let drawer = true;
function toggleDrawer()
{
    drawer = !drawer;
    if(drawer)
    {
        document.getElementById('handleIcn').src = "./icons/arrowLeft.png" ;
        document.getElementById("drawer").style.translate = "0px";
        document.getElementById("handle").style.left = "max(23vw,430px)";
    }
    else
    {
        document.getElementById('handleIcn').src = "./icons/arrowRight.png";
        document.getElementById("drawer").style.translate = "-800px";
        document.getElementById("handle").style.left = "-20px"
    }
}

let started = false;
function startUp()
{
    started = true;
    currentWord = getRandomWord();
    document.getElementById("content0").innerHTML = currentWord;
    document.getElementById("content1").innerHTML = getRandomWord();
    document.getElementById("loading").style.translate = "0 3000px";
    document.getElementById("drawer").innerHTML = wordMode ? wmDesc : lmDesc;
    if(isMobile())
    {
        document.getElementById("space").style.left = "40px";  
        document.getElementById("keybinds").style.display = "none";
        document.getElementById("muteDiv").style.display = "none";
        document.getElementById("settings").style.top = "120px";  
        document.getElementById("score").style.fontSize = "30px";  
        mute = true;
    }
}


//start screen
document.onmousedown = function(e){
    if(!started)
        startUp();
}











//change monospaced font for letter mode


//letters and word translations
let currentWord = "";

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

function getRandomWord()
{
    let word = wordArray[Math.floor(Math.random()*wordArray.length)].toLocaleUpperCase();
    if(isMobile && word.length > 6)
        word = getRandomWord()
    return word;
}

function translate(letter)
{
    let translated = "";
    for(var i = 0; i < letterList.length; i++)
        if(letterList[i].letter == letter)
            translated=letterList[i].morse;   
    
    return translated;
}

function computeHint(word)
{
    word = word.split("");
    
    let hint = "";
    for(var i = 0; i < word.length; i++)
        for(var j = 0; j < letterList.length; j++)
            if(letterList[j].letter == word[i])
                hint= hint + letterList[j].morse + " / ";   
    hint = hint.substring(0,hint.length-2);
    
    document.getElementById("hint").innerHTML = hint;
}
    
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
    
    currentWord = con2.innerHTML;
    con1.style.top = "-1000px";
    con2.style.display = "block";
    con2.style.top = "200px";
    document.getElementById("hint").style.color = "#ffffff00";

    setTimeout(() => {
        con1.style.display = "none";
        con1.style.top = "2200px";
        con1.style.color = "#ffffff"
        con1.innerHTML = getRandomWord();
    }, 100);

    setTimeout(() => {
        con1.style.display = "block";
    }, 300);

    COUNTER++;
    updateScore(COUNTER);
}

function showHint()
{
    if(!hints)
        return;
    computeHint(currentWord);
    document.getElementById("hint").style.color = "#ffffffaa";
}


//wordmode
function wmVerify()
{
    if (!wordMode) return;
    let contentID;
    COUNTER % 2 ==0 ?  contentID = "content0" : contentID = "content1";
    blockInput = true;
    let mistake = false;
    let output2 = "", index = 0;
    let letterArray = currentWord.split("");
    let mVerif = output.split(" / ");
    letterArray.forEach(letter => {
        let morse = translate(letter);
        if(morse == mVerif[index])
        {
            output2+=`<span id = "right${index}" style="transition: 300ms;">${letter}</span>`
        }
        else
        {
            output2+=`<span id = "wrong${index}" style="transition: 300ms;">${letter}</span>`
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
                if(document.getElementById(`wrong${i}`))
                    document.getElementById(`wrong${i}`).style.color="#ff0000";
                if(document.getElementById(`right${i}`))
                    document.getElementById(`right${i}`).style.color="#00ff00";
            }
        }, 200);

        shake();
        showHint();
        
        setTimeout(() => {
            for(let i = 0; i < index; i++)
            {
                if(document.getElementById(`wrong${i}`))
                    document.getElementById(`wrong${i}`).style.color="#ffffff";
                if(document.getElementById(`right${i}`))
                    document.getElementById(`right${i}`).style.color="#ffffff";
                
            }
            setTimeout(() => {
                document.getElementById(contentID).innerHTML = currentWord;
                blockInput = false;
            }, 300);
        }, 1000);
    }
    else
    {
        document.getElementById(contentID).style.color = "#00ff00";
        setTimeout(() => {
            swapWords();
        }, 1000);
    }
    
}

let interval;
function resetInterval()
{   
    window.clearInterval(interval);
    interval = window.setInterval(function() {  
        if(wordMode)
            wmVerify();
        window.clearInterval(interval);
    }, 2000);    
}    


//key handler
let key;
let runKeychange=true;
let dotKey = 'j', dashKey = 'k', spaceKey = 'h';

function checkKeys(){
    if(key == dotKey)
        document.getElementById("dotKey").src="./icons/invalidKey.png", dotKey = ""; 
    if(key == dashKey)
        document.getElementById("dashKey").src="./icons/invalidKey.png", dashKey = ""; 
    if(key == spaceKey)
        document.getElementById("spaceKey").src="./icons/invalidKey.png", spaceKey = ""; 
}

function waitKey(con) {
    return new Promise((resolve) => {
        document.addEventListener('keydown', onKeyHandler);
        function onKeyHandler(e) 
        {
            if (e.key && validKeys.includes(e.key)) 
            {
                document.removeEventListener('keydown', onKeyHandler);
                key = e.key;
                checkKeys();
                resolve();
            }
            else
            {
                con.src="./icons/invalidKey.png";
                setTimeout(() => {
                    con.src="./icons/blankKey.png";
                }, 1000);
            }
        }
  
      
    });
}

async function changeDot()
{
    if(runKeychange)
    {
        runKeychange = false;
        blockInput = true;
        
        let con = document.getElementById("dotKey"); 
        con.src="./icons/blankKey.png";
        con.style.animation = "pulseKey 700ms infinite";

        await waitKey(con);
        dotKey = key;
        con.style.animation = "";

        if(key == '/')
            con.src = "./icons/keys/keyslash.png";
        else if (key == ',')
            con.src = "./icons/keys/keyleft.png";
        else if (key == '.')
            con.src = "./icons/keys/keyright.png";
        else
            con.src = `./icons/keys/key${key}.png`;

        blockInput = false;
        runKeychange = true;
    }
}

async function changeDash()
{
    if(runKeychange)
    {
        runKeychange = false;
        blockInput = true;

        let con = document.getElementById("dashKey"); 
        con.src="./icons/blankKey.png";
        con.style.animation = "pulseKey 700ms infinite";

        await waitKey(con);
        dashKey = key;
        con.style.animation = "";

        if(key == '/')
            con.src = "./icons/keys/keyslash.png";
        else if (key == ',')
            con.src = "./icons/keys/keyleft.png";
        else if (key == '.')
            con.src = "./icons/keys/keyright.png";
        else
            con.src = `./icons/keys/key${key}.png`;
            
        blockInput = false;
        runKeychange = true;
    }
}

async function changeSpace()
{
    if(runKeychange)
    {
        runKeychange = false;
        blockInput = true;

        let con = document.getElementById("spaceKey"); 
        con.src="./icons/blankKey.png";
        con.style.animation = "pulseKey 700ms infinite";

        await waitKey(con);
        spaceKey = key;
        con.style.animation = "";

        if(key == '/')
            con.src = "./icons/keys/keyslash.png";
        else if (key == ',')
            con.src = "./icons/keys/keyleft.png";
        else if (key == '.')
            con.src = "./icons/keys/keyright.png";
        else
            con.src = `./icons/keys/key${key}.png`;
            
        blockInput = false;
        runKeychange = true;
    }
}

document.onkeydown = function(e){
    e = e || window;
    var key = e.key;
    if(started)
    {
        if(key==dotKey) // j
            dot(); 
        else if(key==dashKey) // k
            dash();
        else if (key ==spaceKey)//h
            space();
        else if(key== "[") // c
            swapWords();
    }
    else
        startUp();
} 
  

//sound and onscreen buttons
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