let a = 10;
let b = 6;

// basic operators
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

// urinary operator
console.log(a++);
console.log(a);
console.log(++a);
console.log(a--);
console.log(a);
console.log(--a);

// comparison
// let a = 10;
// let b = 6;
let c = "10";
console.log(a < b);
console.log(a > b);
console.log(a == b);
console.log(a == c);
console.log(a === c);

// CONTROL FLOW

// if else
let userAge = 18;

if (age > 18) {
    console.log("You can vote");
}else {
    console.log("Unqualified to vote");
}


// else if
let score = 63;

if (score >= 80) {
    console.log("You had A");
} else if (score >= 75) {
    console.log("You had B+");  
} else if (score >= 71.5) {
    console.log("You had B");
} else if (score >= 67) {
    console.log("You had C+");
} else if (score >= 60) {
    console.log("You had C");
} else if (score >= 59.5) {
    console.log("You had D+");
} else if (score >= 52) {
    console.log("You had D");
} else {
    console.log("Fail !!!, you have to resit");
}


// switch case
const gender = "Male"

switch (gender) {
    case "Male":
      console.log("Go to the male washroom")  
        break;
        case "Female":
            console.log("Go to the female washroom");
    default:
        console.log("No washroom for you");
        break;
}

// for loop
for (let count = 1; count < 10; count++) {
    console.log(count);
}

// while loop
// let count = 1;

while (i < 10) {
    console.log(i);
    i++;
}