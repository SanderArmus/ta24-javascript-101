//clobal scope

//DATA TYPES
// String => "see on string väärtus", 'See on samuti string väärtus', `ja ka see on string`
// Number (Int, float) => 42
// Boolean => true/false, jah/ei, 1/0  const isMate = true
// Array =>[] 
// Object =>{}

const myName = "Sander"
//muutujad - nimetus ja väärtus.  muutumatu muutuja: const , muudetav muutuja: let
const fruit = "Banaan"; // muutuja mida ei saa enam muuta
let model = "BMW";//muutuja mida saab muuta

model = "Audi";

// mitmesõnalised muutujad:  mitmeSõnalisedMuutujad (camelCase)
// koodiblokk => SCOPE blokki tähistab {}
//function scope
const calculateSum = (number1, number2) =>{
    const number3 = 256;
    console.log(number3);
    //console.log(myName);
    return number1 + number2;
};

calculateSum(1, 2);

// Type casting
const castNumber = 123456;
//console.log(typeof String(castNumber))
//console.log(Boolean(castNumber))

//Array => sümbol on [] , toimub indekseeremine ( esimene element on kohal 0)
const characters = ["T", "P", "I", "C", "S", "V", "A", "J", "R"];

// console.log(characters[7]);
// console.log(characters[6]);
// console.log(characters[5]);
// console.log(characters[6]);
// console.log(characters[4]);
// console.log(characters[3]);
// console.log(characters[8]);
// console.log(characters[2]);
// console.log(characters[1]);
// console.log(characters[0]);

// Loopimine => Kordamine - igast array elemendist minnakse üle ning käiakse läbi script
//For loop
for(i=0; i< characters.length; i++){
    console.log("For loop:",characters[i]);
}

// forEach loop
characters.forEach((char)=>{
    console.log("For Each loop:",char);
})