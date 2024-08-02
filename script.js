let userscore=0;
let compscore=0;
let click=1;
let userwin=true;

let btn=document.querySelectorAll("button");
let paragame=document.querySelector("#game");
let count=document.querySelector("#gamecount");
let computer=document.querySelector("#computer");
let userscoredisplay =document.querySelector("#userScore");
let compscoredisplay =document.querySelector("#compScore");
let user=document.querySelector("#user");
let comppara=document.createElement("p");
let userpara=document.createElement("p");

let choices=['rock','paper','scissor'];
function comp(choices)
{
    let compchoice=choices[Math.floor(Math.random()*3)];
    console.log("computer:",compchoice);
    computer.append(comppara);
    comppara.innerText=`${compchoice}`;
    comppara.classList.add("newelement");
    return compchoice;
}

function playgame(userchoice,compchoice){
    
    if(userchoice=="reset"){
        console.log("reset button");
        return reset(click);
    }
    
    else if(userchoice==compchoice)
    {
       console.log("draw");
       paragame.innerText="Draw!";
       paragame.style.color='black'
       
    }else{
        
        

        if(userchoice=="rock"){
            userwin=(compchoice==="scissor")? true:false;
           
        }
        else if (userchoice=="paper"){
            userwin=(compchoice==="rock") ? true:false;
           
        }
        else {
            userwin=(compchoice==="paper") ? true:false;
            
        }
        if(userwin){
            console.log(`your ${userchoice} beat computer ${compchoice}`);
            paragame.innerText=`your ${userchoice} beat computer ${compchoice}`;
            paragame.style.color='green';
            userscore++;
            userscoredisplay.innerText=`${userscore}`;
        } else{
            console.log("you lose");
            paragame.innerText="you lose!";
            paragame.style.color='red';
            compscore++;
        }
        
        userscoredisplay.innerText=`${userscore}`;
        compscoredisplay.innerText=`${compscore}`;
        
        
       
    }
    gamecount.innerText=`Game Count: ${click}`;
        click++; 
    
}


function reset(click){
    click=1;
    userscore=0;
    compscore=0;
    gamecount.innerText=`Game Count: 0`;
    paragame.style.color='black';
    paragame.innerText="Start Game";
    userpara.innerText="";
    comppara.innerText="";
    userscoredisplay.innerText=`${userscore}`;
    compscoredisplay.innerText=`${compscore}`;
    return  ;
}




btn.forEach(button=>{
    button.addEventListener("click",()=>{
        let userchoice=button.getAttribute("id");
        console.log("you:",userchoice);
        user.append(userpara);
        userpara.innerText=`${userchoice}`;
        userpara.classList.add("newelement");
        let compchoice=comp(choices);
        playgame(userchoice,compchoice);
        
        
        
        
        

    });
});
   
    
