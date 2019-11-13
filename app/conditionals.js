//1. Given two numbers, write a function that will return  the larger number

// function largerNum(num1, num2) {
//     if (num1 >= num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

function largerNum(num1, num2) {
    return Math.max(num1, num2);
}


// 2. Given two numbers, amount correct and amount possible of a test, return the corresponding letter grade.
// Example: 
// input: 23, 25
// output: "A"
// Example:
// input: 4, 10
// output: "F"

function testGrader(score, possible) {
    if (score / possible <= .6) {
        return 'F';
    } else if ((score / possible >= .6) && (score / possible < .7)) {
        return 'D';
    } else if ((score / possible >= .7) && (score / possible < .8)) {
        return 'C';
    } else if ((score / possible >= .8) && (score / possible < .9)) {
        return 'B';
    } else {
        return 'A';
    }
}


// --------------------------------------------


// 3. Given an integer that represents an hour in the day (1 - 24), write a function that returns "good morning", "good afternoon", "good evening", or "good night" based off of what hour it is. You'll need to think in military time.
//Morning is between 5am and 11am (5 - 11)
//afternoon is between 12pm and 5pm (12 - 17)
//evening is between 6pm and 9pm (18 - 21)
//night is between 10pm and 4am (22 -24 and 1 - 4)
//Make sure your ranges are inclusive

function timeOfDayGreeting(hour) {
    var greeting;
    if ((hour >= 22) || (hour <= 4)) {
        greeting = 'good night';
    } else if ((hour >= 5) && (hour <= 11)) {
        greeting = 'good morning';
    } else if ((hour >= 12) && (hour <= 17)) {
        greeting = 'good afternoon';
    } else {
        greeting = 'good evening';
    }
    return greeting;
}

//4. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (at or above 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
function isFever(temp) {
    var message = (temp >= 98.61) ? "fever" : "no fever";
    var message2;
    if (temp >= 103) {
        message2 = 'go to hospital';
        return message.concat(" ", message2);
    } else {
        return message;
    }
}

//5. Write a function that takes in a car object, if it is not moving then return true
let myCar = {
    make: "Ford",
    model: "Mustang",
    color: "Red",
    moving: false
}

function isStopped(car) {
    if (car.moving == false) {
        return true;
    } else {
        return false;
    }
}

//6. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false

let dish = {
    yourDish: true,
    isDirty: true
}

function washDish(dish) {
    if (dish.yourDish == true && dish.isDirty == true) {
        return true;
    } else {
        return false;
    }
}