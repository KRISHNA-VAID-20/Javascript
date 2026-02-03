// declaration for Arrays 

let fruits=['apple','banana','mango'];

console.log(fruits);

console.log(fruits[0]);

// 1. push 

let cars=['Bmw','Maruti','Ferrari','Lambo'];

cars.push('Buggati');

console.log(cars);

// 2. pop

let removeCar=cars.pop();

console.log(removeCar);

// 3. shift

cars.shift();

console.log(cars);

// 4. unshift

cars.unshift('Krishna car','varun car'); // can add multiple values 

console.log(cars);

// looping through Arrays 

for (let i=0;i< cars.length;i++){
    console.log(`${i}- ${cars[i]}`);
}
