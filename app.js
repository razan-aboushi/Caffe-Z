let name = prompt("Please ,Enter your name");

function genderof()
{
let gender = prompt("Please ,Enter your gender");

while (gender != "female" && gender != "male") {
    gender = prompt("Please ,Enter your gender");

}

if (gender == "female") {
    alert("Hello" + " " + " Ms. " + name + " " + "How was your day?");
}
else if (gender == "male") {
    alert("Hello" + " " + " Mr. " + name + " " + "How was your day?");
}
}

genderof();


let drinktype = prompt("What do you want to drink , hot or cold drink?");

let drinkname = prompt("Please enter the name of the drink you would like to drink");

alert("Your drink is getting prepared");


console.log(name + " " + " your order is " + drinktype + " " + drinkname);



let yourArray = [`${name} ${gender} ${drinktype} ${drinkname}`];


for (let R = 0; R <= 3; R++) {
    console.log(yourArray[R]);

}

console.log(`Your name is ${name} and your gender is ${gender} , you order ${drinktype} ${drinkname}`);