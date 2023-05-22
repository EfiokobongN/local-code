
let welcomeEl = document.getElementById("welcome-el")
console.log(welcomeEl)

let myPoints = 3
function add3Point(){
myPoints += 3
}
function remove1Point(){
   myPoints -= 1
}
add3Point()
add3Point()
add3Point()
remove1Point()
remove1Point()

console.log(myPoints)
let errorParagraph = document.getElementById("error")
console.log(errorParagraph)
function purchase(){
  console.log("button clicked")
  errorParagraph.textContent = "Something went wrong, try again."
}

let numOne = 8
let numTwo = 2

let numOneEl = document.getElementById("numOne-el").textContent = numOne
let numTwoEl = document.getElementById("numTwo-el").textContent = numTwo
let sumEl = document.getElementById("sum-el")
function add(){
  let result = numOne + numTwo 
  sumEl.textContent = "sum:" + result
}
function subtract(){
  let result = numOne - numTwo
  sumEl.textContent = "sum:" + result
}
function divide(){
  let result = numOne / numTwo
  sumEl.textContent = "sum:" + result
}
function multiply(){
  let result = numOne * numTwo
  sumEl.textContent = "sum:" + result
}




let aged =22
//IT ELSE STATEMENT
if (aged < 21){
  console.log("you can't enter the nightclub")
}else {
  console.log("You're welcome!")
}

let ages = 100
if (ages < 100){
  console.log("Not elegible")
}else if (ages === 100){
  console.log("Here is your birthday card from the king")
}else {
  console.log("Not elegible, you have gotten one already")
}
//      HOW TO COUNT IN JAVASCRIPT.
  //START    FINISH    STEP SIZE
for (let count =10; count <21; count += 1){
  console.log(count)
}


//  HOW TO CREAT A LOOP.THE FOR LOOPS

for (let i = 1; i < 6; i += 1){
  console.log(i)
}
for (let i =10; i < 101; i +=10){
  console.log(i)
}

let cards = [7, 3, 9]
for (let i =0; i < cards.length; i++){
  console.log(cards[i])
}



let player1Time = 102
let player2Time = 107
function getFastestRaceTime() {
  if (player1Time < player2Time){
    return player1Time //RETURN STATEMENT
  }else if (player2Time < player1Time){
    return player2Time
  }else {
    return player1Time
  }
}
let fastestRace = getFastestRaceTime()

//console.log(fastestRace)


function totalRaceTime() {
  return player1Time + player2Time
}
let totalTime = totalRaceTime()
console.log(totalTime)

// THE MATH OBJECT. Random Numbers

//let randomNumber = Math.floor (Math.random()* 6)+ 1
//console.log(randomNumber)

//let floorNumber = Math.floor(3.45632)
//console.log(floorNumber)

function rollDice() {
  let randomNumber = Math.floor (Math.random()* 6)+ 1
  return randomNumber
}
console.log(rollDice())

//Logic  AND Operator

let hasCompleteCourse = true
let givesCertificate = true

if (hasCompleteCourse === true && givesCertificate === true) {
    generateCertificate()
  }


function generateCertificate() {
  console.log("Generating Certificate ....")
}

let hasSolveedChallenge = false
let hasHintsLeft = false

if (hasSolveedChallenge === false && hasHintsLeft === false) {
  showSolution()
}

function showSolution() {
  console.log("Showing the solution .....")
}

let likesDocumentaries = true
let likeStartUp = true

if (likesDocumentaries === true || likeStartUp === true) {
  
  recommentMovies()
}

function recommentMovies(){
  console.log("hey, check out this new file we think you will like!")
}


// OBJECT TEST
let course = {
  title: "Learn css Grid for free",
  lessons: 16,
  creator: "per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["HTML, CSS"]
}
console.log(course.tags)
let castle ={
  title: "Live like a king in my canstle",
  price:  20000,
  inSuperHost: true,
  images: ["img/castle1.png", "img/castle2.png"]
}
console.log(castle.inSuperHost)
console.log(castle.images)




//OBJECTS AND FUNCTIONS
let person = {
  name:"per",
  age: 26,
  country: "Nigeria"
}

function logData(){
  console.log(person.name + " is " + person.aged + " years old and lives in " +person.country)
}
logData()

//IF ELSE

let agey = 25

if (agey < 6) {
  console.log("free")
}else if (agey < 18){
  console.log("child Discount")
}else if (agey < 27){
  console.log("Student discount")
}else if (agey < 67) {
  console.log("full price")
}else {
  console.log("senior citizen discount")
}

//FOR LOOPS

let largeCountries =["china", "india", "USA", "Indoresia", "Pakistan"]
for (let i = 0; i < largeCountries.length; i++) {
  console.log( "-" + largeCountries[i]);
}

//PUSH,POP, UNSHIFT, SHIFT CHALLENGE

let largCountries =["Tuvalu", "india", "USA", "Indoresia", "Monaco"]
largCountries.pop()
largCountries.push("pakistan")
largCountries.shift()
largCountries.unshift("china")

console.log(largCountries)

//LOGIC OPERATOR
let dayOfMonth = 13
let weekDay = "friday"

if (dayOfMonth === 13 && weekDay === "friday"){
  console.log("spooky face")
}

//math operator.return random number
let hands = ["rock", "paper", "scissor"]
function getHand() {
  let randomIndex = Math.floor(Math.random()*3)
  return hands[randomIndex]
}
console.log(getHand())



//SORTING ITEMS
let fruit = ["apple", "orange", "apple", "apple", "orange"]

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
 function sortFruit(){
  for (let i = 0; i < fruit.length; i++) {
   if (fruit === "apple"){
     appleShelf.textContent += "apple"
   }else if (fruit === " orange"){
     orangeShelf.textContent += "orange"
   }
    
  }
}
  sortFruit()

//new creation.innerhtml

const container = document.getElementById("container")
container.innerHTML ="<button onclick='buy()'>Buy!</button>"
function buy(){
   container.innerHTML += "<p>Thank you for buying </p>"
}

document.createElement("li")
li.textcontent = myLeads[i]
ulEl.append(li)


const recipient = "james"
const sender = "faith Nelson"
const email = `.Hey ${recipient}!How is it going? cheers ${sender}`
console.log(email)
