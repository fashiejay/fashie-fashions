let x;

for(let i = 1; i < 11; i++){
    if(i === 7){
        break;
    }
    console.log(i);
}
let car = {
    model: 200,
    color: "blue",
    brake: function brake(){
        console.log(`step on the brakes`);
        brake();
    }
};
console.log(car);

const todos = [
    {id:1, name:"sugar",price: 2000},
    {id:2, name:"meat",price: 5000},
    {id:3, name:"soap",price: 1200},
];

x = todos[1].price;
console.log(x);

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);

const arr = [ 1, 2, 3, 4, 5];
// result 6,5,4,3,2,1,0

arr.push(6);
arr.unshift(0);
arr.reverse();

x = arr;
console.log(x);

const library = [
    {
        
        title:"Tha fashion" ,
     Author: "Fashie Jay",
     status: {
        own: true,
        reading: false,
        read: false
    }
}, 
    {
    title:"Mocking Jay" ,
     Author: "Suzanne Collins",
     status: {
        own: true,
        reading: false,
        read: false
    }
}, 
    {
        title: "caligula",
     Author: "Julius Ceasor",
     status: {
        own: true,
        reading: false,
        read: false,
     }
    }];

    library[0].status.read = true;
    library[2].status.read = true;
    library[0].status.read = true;

    console.log(library);

    const {title: firstbook } = library[0];
    console.log(firstbook);

    const libraryJSON = JSON.stringify(library);
    console.log(libraryJSON);

    function add(num1, num2){
        console.log(num1 + num2);
    }
    add(20,10);

    function minus(num3, num4){
        console.log(`i am a star`);
        return(num3 - num4)

    }
    const res = minus(20, 5);
    console.log(res);

    function addDollarSign(value){
        return '$' + value;
    }

    console.log(addDollarSign(1000));

    function getCelsius(f){
        const celsius = ((f - 32)* 5) / 9;
        return celsius;
           
    }

    console.log(getCelsius(40));

   /* let cart = [];

 let item = {
        name: "t-shirt",
        price: 25000,
        color: "blue",
        size: "XL"
    };

    console.log(item);
    
    cart.push(item);
    

    console.log(cart[0].size);
    */
    
    function greeting(message, count){
        for(let i = 0; i< count; i++){
            console.log(message);
        }
    }
    greeting("i like my cart", 4);
    greeting("i want it in color", 5);
    greeting("i got my stuff already", 4);


    // const d = new Date(2020, 1, 20, 0, 0);
    // const month = d.getMonth();

    // switch(month) {
    //     case 1:
    //         console.log("it is january");
    //         break;
    //     case 2:
    //         console.log("it is February");
    //         break;
    //     case 1:
    //         console.log("it is March");
    //         break;
    //     case 1:
    //         console.log("it is April");
    //         break;
    //     default:
    //         console.log("it is not one of the months");
                            
    // }

// calculator function using a switch

    function calculator(num1, num2, operator){
        let result;

        switch(operator){
            case '+':
                result = num1 + num2;
                break;
                
            case '-':
                result = num1 - num2;
                break;
                
            case '*':
                result = num1 * num2;
                break;
                
            case '/':
                result = num1 / num2;
                break;
                
            default:
                result = 'invalid operator';
        }
        console.log(result);
        return result;
    }
calculator(9, 4, '+');
calculator(9, 4, '-');
calculator(10, 4, '*');
calculator(9, 4, '/');
calculator(9, 4, '%');

const names = ['jerom', 'sara', 'julio', 'mike', 'john'];

for (let i = 0; i < names.length; i++) {
    if(names === 'julio') {
        break;
    }
} 
    console.log(names[i]);
    
 


for(let i = 0; i <= 20; i++){
    if (i === 12){
        console.log('continue...');
        continue;
    }
    console.log(i);
}

// while loop

let i = 1;
while(i <= 5){
    console.log('number ' + i);
    
    let j = 1;
    while(j <= 5){
        console.log(`${i} * ${j} = ${i *j}`);
        j++
    }
    i++
}

// for loop
 
for(let i = 1; i <= 5; i++){
    console.log(i);

    for(j = 1; j <= 6; j++){
        console.log(`${i} * ${j} = ${i *j}`);
    }
}

// For of loop -through arrays

let shoes = ['adidas', 'puma', 'gucci', 'louis vitton'];

for (let shoe of shoes){
    console.log(shoe);
}

// For of loop -through strings

let str = 'Fashie Jay';
console.logstr;

let programmers = ['jerry', 'kim', 'nicole', 'ray'];
console.log(programmers);

/**
 * !write a javascript program to display the current day and time following format
 * ? Today is : Tuesday.
 * ? Current time is 10 PM : 30 : 38
 */

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " +  daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

/**
 * ! write a javascript programme to get  the current date
 * ? expected output mm/dd/yr
 */
var today = new Date();
var month = today.getMonth()+1;
var year = today.getFullYear();
var day = today.getDay();

if(day<10) 
{
    day ='0'+day;
} 

if(month<10) 
{
    month ='0'+ month;
} 
console.log(month + '/' + day + '/' + year);

function triArea(base, height){
    let area = 1/2 * base * height;
    return area;
}
let result = triArea(5, 2);
console.log(result);

function calcAge(age){
    return age * 365;
}
let ageInDays = calcAge(24);
console.log(ageInDays);

/**
 * ! create  A function that converts hours into seconds
 */

function converHoursToSeconds(hours) {
	let onehour = 3600;
    let seconds = hours * onehour;
    return seconds; 

}
let totalSeconds = converHoursToSeconds(5);
console.log(totalSeconds);

/**
 * 
 * !  create a function that takes an array containing only numbers and return only the first element
 */

function getFirstValue(arr){
    let arrFunc= [1, 2, 3, 4, 5, 6];
    firstValue = arrFunc[2];
    console.log(firstValue);

}
getFirstValue();

/**
 * ! function that takes the length and width and finds the perimeter of a rectangle
 */
function findPerimeter(length, width){
    let perimeter = (length + width) * 2;
    return perimeter;
}
let per = findPerimeter(7, 2);
console.log(per);

 
const numbaz = [ 1, 2, 3, 4, 5];
const squares = numbaz.map(power);
console.log(squares);

function power(element) {
    return Math.pow(element, 2);
 }
 document.getElementById("demo2").innerHTML = power(2);

 let hello = "";
 hello = (val) => {
    return "Hello world " + val;

 }
 document.getElementById("demo").innerHTML = hello("the universe");

 /**
  * ! Destructing functions
  */
 function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const divide = a / b;
    const multiply = a * b;

    return [add, subtract, divide, multiply];
}
const [add, subtract, divide, multiply] = calculate(10, 2);

document.write("<p>Sum: " + add + "</p>");
document.write("<p>Difference: " + subtract + "</p>");
document.write("<p>Quotient: " + divide + "</p>");
document.write("<p>Multiplication: " + multiply + "</p>");
