var billAmount = document.querySelector("#bill-Amount")
var cashGiven = document.querySelector("#cash-Given")
var notes2000 = document.querySelector("#notes-2000")
var btnCheck = document.querySelector("#btn-Check")
var errorMessage = document.querySelector("#error-Message")
const noOfNotes = document.querySelectorAll(".no-Of-Notes")

var currency = [2000,500,100,20,10,5,1];

btnCheck.addEventListener("click", clickHandler)

function clickHandler () {
// for printing error message
console.log("clicked")
if(isNaN(billAmount.value)){
    errorMessage.style.display = "block"; 
    errorMessage.innerText = "Input amount is not a number"
}else{
if (billAmount.value>0){
    if(cashGiven.value>=billAmount.value){
        errorMessage.style.display = "none"; 
        console.log("processing");
        var balanceAmount = cashGiven.value - billAmount.value;
        CalculateChange(balanceAmount)

    }else {
        errorMessage.style.display = "block"; 
        errorMessage.innerText = "Do you wanna wash plates ?"}
} else { 
    errorMessage.innerText = "Invalid amount entered"
    errorMessage.style.display = "block";
}}}
    function CalculateChange(balanceAmount){
    console.log(cashGiven.value);
    var balanceAmount = cashGiven.value - billAmount.value ;
    var i = 0;
    while (balanceAmount > 0){
        const numberOfNotes = Math.trunc(balanceAmount / currency[i]);
        balanceAmount = balanceAmount % currency[i];
        console.log(numberOfNotes)
        noOfNotes[i].innerText = numberOfNotes;
        i++
    }
    }