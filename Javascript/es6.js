
//Template Literals
let word1 = 'faith';
let word2 = 'nelson'
let num1 = 2;
let num2 = 3;


//const fullName = `${num1 + unm2} ${word2}`;




let example =` ${word1} ${word2}`
;
console.log(example);

document.getElementById("example").innerText = example;

//console.log(fullName);

//Destructuring Objects
const personalInformation = {
   firstName:  'faith',
   lastName: 'nelson',
   city: 'lagos',
   state: 'akwa ibom',
   zipCode: '54648',
}

const {firstName: fn,  lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);

//Destructuring Arrays

let [firstName, midleName] = ['faith', 'ime', 'nelson'];

lastName = 'Egbuniwe'

console.log(lastName);

//Object Literal

function addressMaker(city,  state){
const newAdress = {city, state}
console.log(newAdress);
}

addressMaker('ikeja', 'lagos')

//Object Literal (challenge)

function addressMaker(address ){
   const {city, state} = address
   const newAddress = {
      city,
      state,
      country: 'united states',
   };
   console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
   }

   

   addressMaker({city: 'ikeja', state: 'lagos'})

   //for of loop

   let fullName = ['faith ime nelson'];
   for (const char of fullName){
      console.log(char);
   };
   //let incomes = [52000, 56000, 67000];
   //let total = 0;

   //for (const income of incomes){
     // console.log(income);
     // total += income

   //};
   //console.log(total);




   //for of loop (challenge)

   let incomes = [52000, 56000, 67000];

for (let income of incomes){
income += 300;
}
     
console.log(incomes);

//spread Operator
let example1 = [1,2,3,4,5,6,7];

let example2 = [...example1];
example2.push(true)
console.log(example2);
   

//Rest   Operator
function add(...nums) {
   console.log(nums);
}
add(5, 6, 2, 9, 7)

//Arrow Function
function add(...nums) {
   let total = nums.reduce((x, y) => x + y )
   console.log(total);
}
add(5, 6, 2, 9, 7)


//Default params
function add (numArray = []){
   total = 0;
   [].forEach((element) => {
      total += element
   });
   console.log(total);
}
add();

//include
let numArray = [1,2,3,,5];
console.log(numArray.includes(2));


//let & const
//if (false){
 //  let example = 5;
//}
//console.log(example);

//const examples = [2,3];//an array
//examples.push(3)

const examples ={}
examples.push = 'faith'

console.log(examples);



//import & export

//import & export
/*import{data} from './example.js';

let updataData = data;
updataData.push(6)

console.log(updataData)*/

//console.log(data);

//class
/*import {Animal} from './animal.js';

let cat = new Animal ('cat', 4);
//cat.makeNoise('meow')

console.log(cat.legs)
console.log(Animal.return10())
console.log(cat.mateData)*/

//padstart() $ padend()

let test = 'faith  nelson';

console.log(test.padStart(10, 'f'));

//padstart() $ padend() challenge

let exampless =' youTube.com/codingtraining';

console.log(exampless.padStart(100).length);
console.log(exampless.padEnd(1));


//classes




//trailing commas
function add(param1,){
   const examplees = {
      name: 'faith',
   }
   console.log(examplees);
}
add()

//async & Await

 /*const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

async function getTop100Camper(){
const response = await fetch(apiUrl);
const json = await response.json();
console.log(json[0]);
}
getTop100Camper();

/*const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

function getTop100Camper(){
fetch(apiUrl)
.then((r) => r.json())
.then((json) =>{
   console.log(json[0]);
}).catch((error) =>{
console.log('failed');
})
}

getTop100Camper();*/

//async & Await challenges

function resolveAfter3Seconds(){
   return new Promise(resolve =>{
     setTimeout(() => {
        resolve ('resolved');
     }, 3000); 
   });
}
resolveAfter3Seconds().then((data) =>{
   console.log(data)
})

async function getAsyncData(){
   const result = await resolveAfter3Seconds();
   console.log(result);
}
getAsyncData()

//set
const exampleSet = new Set([1,1,1,1,2,2,2,2])
exampleSet.add(9);

exampleSet.add(9).add(23);

console.log(exampleSet.has(9));

exampleSet.clear();

console.log(exampleSet.size);