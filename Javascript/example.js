
//export

export const data = [1,2,3,4]

//class
export class Animal {
   constructor(type, legs){
       this.type = type;
       this.legs = legs;
   }

   makeNoise (sound = 'loud Noise'){
      console.log(sound)
  }

  get metaData(){
   return `type: ${this.type}, legs: ${this.legs}`;
}

 
static return10(){
   return 10;
}
}