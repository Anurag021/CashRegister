var billAmount = document.querySelector("#bill-Amount")
var cashGiven = document.querySelector("#cash-Given")
var notes2000 = document.querySelector("#notes-2000")
var btnCheck = document.querySelector("#btn-Check")
var errorMessage = document.querySelector("#error-Message")
const noOfNotes = document.querySelectorAll(".no-Of-Notes")

var currency = [2000,500,100,20,10,5,1];


cashGiven.disabled= true
billAmount.addEventListener("change", enableCashGiven)
function enableCashGiven(){
     cashGiven.disabled = false
 }


btnCheck.addEventListener("click", clickHandler)


function clickHandler () {
    cashProvided = Number(cashGiven.value)
    Bill = Number(billAmount.value)
// for printing error message
console.log("clicked")
if(isNaN(Bill)){
    errorMessage.style.display = "block"; 
    errorMessage.innerText = "Input amount is not a number"
}else{
if (Bill > 0){
    if(cashProvided >= Bill){
        errorMessage.style.display = "none"; 
        console.log("processing");
        var balanceAmount = cashProvided - Bill;
        CalculateChange(balanceAmount)

    }else {
        errorMessage.style.display = "block"; 
        errorMessage.innerText = "Do you wanna wash plates ?"}
} 
else { 
    errorMessage.innerText = "Invalid amount entered"
    errorMessage.style.display = "block";
}
}
}
    function CalculateChange(balanceAmount){
    console.log(cashProvided);
    var balanceAmount = cashProvided - Bill ;
    var i = 0;
    while (balanceAmount > 0){
        const numberOfNotes = Math.trunc(balanceAmount / currency[i]);
        balanceAmount = balanceAmount % currency[i];
        console.log(numberOfNotes)
        noOfNotes[i].innerText = numberOfNotes;
        i++
    }
    }