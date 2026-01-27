// 1. 

function getName(){
    console.log("Hare Krishna");
}

getName();

// 2.

function getAvg(num1,num2){
    let avg=(num1+num2)/2;
    console.log(avg);
}

getAvg(2,3);

// 3. Return Type

function getFullname(firstName,lastName){
    return firstName + " " + lastName;
}

let name=getFullname("Krishna","Vaid");

console.log(name);

// 4.

const getExp= function (num1,num2){
    return num1**num2;
}

console.log(getExp(2,10));

// 5. Arrow Functions

const getSquare= (x) => {
    return x**2;
}

console.log(getSquare(5));