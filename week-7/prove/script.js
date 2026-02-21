const form = document.querySelector("#cardForm")
const message = document.querySelector(".message")

function isValidCardNumber(num){
return num === "1234123412341234"
}

form.addEventListener("submit", function(e){

e.preventDefault()

let cardNumber = document.querySelector("#cardNumber").value.replace(/\s/g,"")
let month = document.querySelector("#month").value
let year = document.querySelector("#year").value

let errors = ""

if(!isValidCardNumber(cardNumber)){
errors += "Card number must be 1234123412341234\n"
}

const currentDate = new Date()
const expYear = Number(year) + 2000
const expMonth = Number(month)

if(expYear < currentDate.getFullYear() ||
(expYear === currentDate.getFullYear() && expMonth <= currentDate.getMonth()+1)){
errors += "Card is expired\n"
}

if(errors !== ""){
message.style.color = "red"
message.textContent = errors
return
}

message.style.color = "green"
message.textContent = "Payment Successful!"
})