const URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns=document.querySelectorAll(".dropdown_menu select");
const btn =document.querySelector("form button");
const fromC = document.querySelector(".from select");
const toC = document.querySelector(".to select");
const message = document.querySelector(".msg")

//to select the country from countrylist,new option is created and its text,value is change to code and append to get one by one 
for(let select of dropdowns){
    for(Ccode in countryList){
        let newoption=document.createElement("option")
        newoption.innerText=Ccode;
        newoption.value=Ccode;
        //to retrive and reflected it onto the div of the selected country from country list
        if(select.name=="from" && Ccode=="AED"){
            newoption.selected="selected";
        }
        else if(select.name=="to" && Ccode=="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(event)=>{
        updateFlag(event.target);
    });
}

const rateexchange = async()=>{
    let amount = document.querySelector(".amount input")
    let amtValue=amount.value;
    if (amtValue === "" || amtValue < 1) {
        amtValue = 1;
        amount.value = "1";
      }
      //to get the exchange rate like AED/INR from apis file
    const url = `${URL}/${fromC.value.toLowerCase()}/${toC.value.toLowerCase()}.json`;

    let response =await fetch(url);
    let data = await response.json();
    let rate=data[toC.value.toLowerCase()]//as data in api is in lowercase format and output of data variable is in capital
    //console.log(rate);
    let amt = amtValue*rate;
    //console.log(amt);
    message.innerText = `${amtValue} ${fromC.value} = ${amt} ${toC.value}`;//1AED=22INR
    
    };

const updateFlag=(element)=>{//element is assigned to get select label from html
    //console.log(element);
    let Ccode =element.value;//get INR in console
    let countrycode = countryList[Ccode];//
    let newSrc= `https://flagsapi.com/${countrycode}/flat/64.png`;
    let image=element.parentElement.querySelector("img");
    image.src=newSrc;

};

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    rateexchange();
});


