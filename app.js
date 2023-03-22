// let name = prompt("Please ,Enter your name");

// let gender = prompt("Please ,Enter your gender");

// function genderof()
// {

// while (gender != "female" && gender != "male") {
//     gender = prompt("Please ,Enter your gender");

// }

// if (gender == "female") {
//     alert("Hello" + " " + " Ms. " + name + " " + "How was your day?");
// }
// else if (gender == "male") {
//     alert("Hello" + " " + " Mr. " + name + " " + "How was your day?");
// }
// }

// genderof();


// let age = prompt("Please ,Enter your Age");


// let drinktype = prompt("What do you want to drink , hot or cold drink?");

// let drinkname = prompt("Please enter the name of the drink you would like to drink");

// alert("Your drink is getting prepared");


// console.log(name + " " + " your order is " + drinktype + " " + drinkname);



// let yourArray = [`${name} ${gender} ${drinktype} ${drinkname}`];


// for (let R = 0; R <= 3; R++) {
//     console.log(yourArray[R]);

// }

// console.log(`Your name is ${name} and your gender is ${gender} , you order ${drinktype} ${drinkname}`);









// const div1 = document.createElement("div");
// let container = document.getElementById("menu12");

// container.appendChild(div1);




// const par = document.createElement("p");

// let parname =document.createTextNode(`Your name is : ${name}`);

// div1.appendChild(par);
// par.appendChild(parname);


// const unlist = document.createElement("ul");
// par.appendChild(unlist);



// const li1 = document.createElement("li");
// let ligender =document.createTextNode(`Your gender is : ${gender}`);
// unlist.appendChild(li1);
// li1.appendChild(ligender);


// const li2 = document.createElement("li");
// let liAge =document.createTextNode(`Your age is : ${age}`);
// unlist.appendChild(li2);
// li2.appendChild(liAge);


// const li3 = document.createElement("li");
// let lidrink =document.createTextNode(`Your drink is ${drinktype} ${drinkname}`);
// unlist.appendChild(li3);
// li3.appendChild(lidrink);




const mainForm = document.getElementById("menu12");
mainForm.addEventListener("submit", function (event) 
{
    event.preventDefault();
    const userName = event.target.name.value;
    const userAge = event.target.age.value;
    const drinkType = event.target.cold1.checked ? event.target.cold1.value : "";
    const drinkType1 = event.target.hot1.checked ? event.target.hot1.value : "";
    const drinName = event.target.Drinktype.value;
    console.log(userName , userAge , drinkType , drinkType1 , drinName);




    let mainCont = document.getElementById("menu12")


    let divcont = document.getElementById("div123")
    let maindiv = document.createElement("div");
    divcont.appendChild(maindiv);
    let parg = document.createElement("p");
    parg.textContent = userName;
    maindiv.appendChild(parg);

    divcont.appendChild(parg);




    let unorderList = document.createElement("ul");
    let listItem1 = document.createElement("li");
    listItem1.textContent =` Age: ${userAge}`;
    let listItem2 = document.createElement("li");
    listItem2.textContent =` Type: ${drinkType}  ${drinkType1}`;
    let listItem3 = document.createElement("li");
    listItem3.textContent = `Drink: ${drinName}`;
    unorderList.appendChild(listItem1);
    unorderList.appendChild(listItem2);
    unorderList.appendChild(listItem3);
    maindiv.appendChild(unorderList);
    mainCont.appendChild(maindiv);


    divcont.appendChild(unorderList);
    divcont.appendChild(listItem1);
    divcont.appendChild(listItem2);
    divcont.appendChild(listItem3);
   

});