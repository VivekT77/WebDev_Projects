let usercount =0;
let compcount =0;

let choices = document.querySelectorAll(".choice");
let messageOP = document.querySelector("#msg");

let usercountchange = document.querySelector("#user-count");
let compcountchange = document.querySelector("#comp-count");

const getOppchoice=()=>{
    const options = ["rock","paper","scissor"];
    const index = Math.floor(Math.random()*3);
    return options[index];
};
 const  draw=()=>{
    messageOP.innerText="Game Draw . Play Again";
    messageOP.style.backgroundColor="black";
 };

const Winner=(userwin,userchoice,oppchoice)=>{
    if(userwin){
        usercount++;
        usercountchange.innerText= usercount;
        messageOP.innerText='You Win!';
        messageOP.style.backgroundColor="green";

    }
    else{
        compcount++;
        compcountchange.innerText= compcount;
        messageOP.innerText="You lose!";
        messageOP.style.backgroundColor="red";
    }
};


let playgame=(userchoice)=>{
    const oppchoice = getOppchoice();

    if(userchoice==oppchoice){
        draw();
    }
    else{
        let userwin =true;
        if(userchoice==="rock"){
           userwin=oppchoice==="paper" ? false:true;
        }
        else if(userchoice=="paper"){
            userwin = oppchoice==="scissor" ? false:true;
        }
        else{//scissor case
            userwin=oppchoice==="rock" ? false:true;

        }
        Winner(userwin,userchoice,oppchoice);
    }
};

//to get the choices and assign itself to particular id
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
            playgame(userchoice);
    });
});