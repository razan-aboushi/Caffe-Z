let name =prompt("Please ,Enter your name");


let gender =prompt("Please ,Enter your gender");

if(gender=="female")
{
    alert("Hello" + " "+" Ms. "+ name +" " +"How was your day?");
}
else if(gender=="male")
{
    alert("Hello"+ " "+" Mr. "+ name +" " +"How was your day?" );
}
else 
{
    alert("Welcome back!");
}


let drink =prompt("What do you want to drink , hot or cold drink?");

let drinkname =prompt("Please enter the name of the drink you would like to drink");

alert("Your drink is getting prepared");



console.log(name+" "+"your order is " + drink+" " +drinkname);


