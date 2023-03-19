let name =prompt("Please ,Enter your name");



let gender = prompt("Please ,Enter your gender");

while(gender!="female" && gender!="male")
{
     gender = prompt("Please ,Enter your gender");

}

if(gender=="female")
{
    alert("Hello" + " "+" Ms. "+ name +" " +"How was your day?");
}
else if(gender=="male")
{
    alert("Hello"+ " "+" Mr. "+ name +" " +"How was your day?" );
}






let drink =prompt("What do you want to drink , hot or cold drink?");

let drinkname =prompt("Please enter the name of the drink you would like to drink");

alert("Your drink is getting prepared");


console.log(name+" "+" your order is " + drink + " " + drinkname);




let yourArray = [`${name} ${gender} ${drink} ${drinkname}`];


for(let R =0; R<=3;R++)
{
console.log(yourArray[R]);
}