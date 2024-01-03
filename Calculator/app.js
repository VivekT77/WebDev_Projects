let inputb = document.getElementById("input-box");
let btn = document.querySelectorAll("button");
let  string = ' ';

btn.forEach(element=>{
    element.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            string=String(eval(string));
            inputb.value=string;
        }
        else if(e.target.innerText=="AC"){
            string='';
            inputb.value=string;
        }
        else if(e.target.innerText == "DEL"){
            string=string.substring(0,string.length-1)
            inputb.value=string;
        }
        else{
            string += e.target.innerText;
            inputb.value=string;
        }
    })
})