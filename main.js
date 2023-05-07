//create box containes play (startPlay is parent of Play which containes play as a button)
let startPlay = document.createElement("div");
let Play = document.createElement("div");
let introduction = document.createElement("p");
introduction.append("You will have 5 tries to win");
Play.append("PLAY");
document.body.append(introduction);
startPlay.append(Play);
startPlay.append(introduction);
document.body.append(startPlay);
startPlay.style = "width: 100%; position: absolute; background: rgb(128 52 90 / 82%); height: 100%; top: 0";
Play.style = "position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; background: pink; padding: 35px; font-weight: bold; font-size: 40px; border-radius: 5px; cursor: pointer; z-index: 2; box-shadow: 0 0 4px 8px;";
introduction.style = "position: absolute; left: 50%; top: 60%; transform: translate(-50%, -50%); padding: 5px; font-size: 18px; background: pink; border-radius: 5px";
Play.onclick = ()=>{
    startPlay.style = "display: none;";
    Play.style = "display: none;";
    num.innerHTML = parseInt(num.innerHTML) - 1;

}
///////
var Attempt = document.querySelector(".attemptBox");

var box = document.querySelector(".box");
var userPoints = (document.querySelector(".userPoints"));
var computerPoints = (document.querySelector(".computerPoints"));
var num = document.querySelector(".num");
var complate = document.createElement("input");
complate.setAttribute("type", "button");
complate.setAttribute("value", "complate");
complate.className = "complate";
createPage();


    complate.addEventListener('click', ()=>{
        let par = document.createElement("p");
        par.append("Choose One:");
        Attempt.innerHTML = "";
        Attempt.appendChild(par);
        Attempt.appendChild(box);
        num.innerHTML = parseInt(num.innerHTML) - 1;

        }
        
        

  )

    


console.log(computerPoints);
function createPage(){
    for (let i = 0; i < 3; i++ ){
        //
        box.children[i].addEventListener('click', ()=>{
            //create element that user choose
            var userChoice = document.createElement("div");
            userChoice.classList = `choice ${box.children[i].className}` ;
            userChoice.setAttribute("type", `${box.children[i].getAttribute('type')}`)
            userChoice.innerHTML = box.children[i].innerHTML;
            console.log(userChoice);
            Attempt.innerHTML = "";
            userChoice.append(`You`);
            console.log(box.children[i].getAttribute('type'));
            //Add usrechoice to Attempt
            Attempt.appendChild(userChoice);
            //create computerChoice that computer choose in random way
            //random number from 0 to 2-[0 1 2]
            let ComputerChoiceIndex = Math.floor(Math.random() * 3);
            //cc is the element which computer choose. 
            let cc = box.children[ComputerChoiceIndex];
            //create element that computer is choose
            var computerChoice = document.createElement("div");
            computerChoice.classList = `choice`;
            computerChoice.setAttribute("type", `${box.children[ComputerChoiceIndex].getAttribute('type')}`)
            computerChoice.innerHTML = `${box.children[ComputerChoiceIndex].innerHTML}`;
            computerChoice.append('Computer');
            //Add computerChoice to Attempt
            Attempt.appendChild(computerChoice);
    
            //compare two choices
            compare(userChoice, computerChoice) ; 
            if( parseInt(num.innerHTML) == 0){
            showResult();
           }
    
    
            
        });
    }
}
function showResult(){
    let Result = document.createElement("div");
    Result.className = "Result";
    if (parseInt(userPoints.innerHTML) > parseInt(computerPoints.innerHTML) ){
        Result.append("Good you are the winner");
    }
    else if( parseInt(userPoints.innerHTML) < parseInt(computerPoints.innerHTML)){
        Result.append("Ops, computer is the winner");
    }
    else Result.append(`You have ${userPoints.innerHTML} points and computer have ${computerPoints.innerHTML} points so you are tied with computer`);
    Attempt.innerHTML = "";
    Attempt.append(Result);
}
//compare 
function compare(user, computer){
    let resultBox = document.createElement("div");
    if (user.getAttribute('type') === computer.getAttribute('type')){
        console.log("is the same");
        resultBox.append("None of you got a point");
    }
    else{
        //user choose rock 
        if (user.getAttribute('type') === "rock"){
            if(computer.getAttribute('type') === "paper"){
                computerPoints.innerHTML = parseInt(computerPoints.innerHTML) + 1; 
                resultBox.append("Computer get 1 point");
            }
            else{
                userPoints.innerHTML = parseInt(userPoints.innerHTML) + 1;
                resultBox.append("You get 1 point");
            }
        }
        else if(user.getAttribute('type') === "paper"){
            if(computer.getAttribute('type') === "scissors"){
                computerPoints.innerHTML = parseInt(computerPoints.innerHTML) + 1; 
                resultBox.append("Computer get 1 point");
            }
            else{
                userPoints.innerHTML = parseInt(userPoints.innerHTML) + 1;
                resultBox.append("You get 1 point");
            }
        }
        else if(user.getAttribute('type') === "scissors"){
            if(computer.getAttribute('type') === "rock"){
                computerPoints.innerHTML = parseInt(computerPoints.innerHTML) + 1; 
                resultBox.append("Computer get 1 point");
            }
            else{
                userPoints.innerHTML = parseInt(userPoints.innerHTML) + 1;
                resultBox.append("You get 1 point");
            }
        }
    }
    resultBox.className = "resultBox";
    resultBox.appendChild(complate)
    Attempt.appendChild(resultBox);
    console.log("u= " + userPoints);
    console.log("c= " + computerPoints);

}
//document.body.append(boxAfterChoise);

