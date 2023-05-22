

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
   count += 1
   countEl.textContent = count
}

function save(){
   let countStr = count + "-"
   saveEl.textContent += countStr
   countEl.textContent = 0
   count = 0
}
console.log("Let's count people on the subway!")

{
"manifest-version"= 3;
"version"= "1.1"
"name" = "Lead tracker"
"action";{
   "default-popup" = "index.html"
   "default-icon" = "default-icon.png"
}
}




