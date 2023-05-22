
//alert('hello faith')
//chellenge 1: Your age in days
function ageInDays() {
   var birthYear = prompt('what year were you born ...Good friend? ');
   var ageInDayss = (2018-birthYear)*365;
   var h1 = document.createElement('h1') 
   var textAnswer =document.createTextNode('you are ' + ageInDayss + ' day ');
   h1.setAttribute('id', 'ageInDays');
   h1.appendChild(textAnswer);
   document.getElementById('flex-box-result').appendChild(h1)
   var ageInDayss = (2018-birthYear)* 365;
   console.log(ageInDayss);  
}

function reset() {
   document.getElementById('ageInDays').remove();
}

