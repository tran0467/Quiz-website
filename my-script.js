let i  = 0;
let correct = 0;

function init()
{
    //console.log("Hello, Practical 2"); // You can delete this.
    const player = document.getElementById("player-name");
    player.innerText = getUrlParam("name");
    let button = document.getElementById("next");
    button.addEventListener("click", function () {next(event);});
}

function  getQuestion()
{
    const quest = document.getElementById("question-text");
    quest.innerText = questions[i].question;
}

function getChoice()
{
    const questNo = document.getElementById("question-no");
    questNo.innerText = i+1;
    const choiA = document.getElementById("choice-A");
    choiA.innerText = questions[i].choiceA;
    const choiB = document.getElementById("choice-B");
    choiB.innerText = questions[i].choiceB;
    const choiC = document.getElementById("choice-C");
    choiC.innerText = questions[i].choiceC;
}

function next(event){
    if (getSelection("choices") == questions[i].answer){
        correct++;
        console.log(correct);
    }

    i++;
    
    if(i <= questions.length-1) {
        clearSelection("choices");
        getQuestion();
        getChoice();
        clearSelection("choices");
        
    }
    else {
        document.getElementById("next").style.display = "none";
        showResults();
    }
    
}

function showResults(){
    let result = correct/3*100;
    const resultText = document.getElementById("results");

    if(result < 30) {
        resultText.innerText = "Bad luck. Your final score was " + result.toFixed(1) +
        "% (" + correct + "/3).";
    }
    else if (result >= 30 & result <= 75) {
        resultText.innerText = "Not bad. Your final score was " + result.toFixed(1) +
        "% (" + correct + "/3).";
    }
    else {
        resultText.innerText = "Impressive. Your final score was " + result.toFixed(1) +
        "% (" + correct + "/3).";
    }

    document.getElementById("quiz").style.display = "none";
    document.getElementById("results").style.display = "block";

}


init();
getQuestion();
getChoice();
