var btnTranslate=document.querySelector("#btn-Translate");
var txtInput=document.querySelector("#txt-Input");
var textAdd="https://api.funtranslations.com/translate/emoji.json";




function changeImage(){
    document.body.style.backgroundColor = "#FCA5A5";
    document.getElementById("change").style.color = "#DC2626";
    document.getElementById("boxx").style.boxShadow = "-10px 10px 40px #DC2626";
    document.getElementById("btn-Translate").style.backgroundColor= "#DC2626";
    document.getElementById("img_one").src="./images/emoji4.png";
    document.getElementById("img").src="./images/emoji-2.png";
}
function errorHandler(error){
    console.log("error occured",error);
}

function clickHandler(){
    changeImage();
    var getInput=textAdd+"?text="+txtInput.value;
    fetch(getInput).then(Response=>Response.json()).then(json=>{
        var translatedText=json.contents.translated;
        var array=translatedText.split(" ");
        var collect="";
        function convert(word){
        var extract = word.substring(3,word.length);
        return (String.fromCodePoint(parseInt (extract, 16)));

        }
        for(var i=0;i<array.length;i++){
        var wordlength = array[i].length; 
        
        if(array[i][0]==='&' && array[i][wordlength-1]===';')
        {
        array[i]=convert(array[i]);
        }
        collect=collect+array[i]+" ";
        }
        document.getElementById("outputDivison").innerText=collect;
    }).catch(errorHandler);
}

btnTranslate.addEventListener("click",clickHandler);






