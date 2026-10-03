// // 1.
// // for loop

// // 1st way

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// // 2nd way 

// let j=10;

// for(;j>0;){
//     console.log(j);
//     j--;
// }

// // 2.
// // while loop

// let k=100;

// while(k>0){
//     console.log(k);
//     k--;
// }

// // 3. 
// // do-while

// let l=10;

// do{
//     console.log(l);
//     l--;
// }while(l>0);

// for(let i=1; i<21 ;i++){
//     if(i%2===0){
//         console.log(i);
//     }
    

// // }
// let i=1;

// while(i<16){
//     if(i%2===1){
//         console.log(i);
//     }
//     i++;
// }

// for(let i=1;i<11;i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

// for(let i=1;i<51;i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }


// let val=prompt("Enter a number : ");
// for(let i=1;i<=val;i++){
//     if(i%2===0){
//         console.log(`${i} is Even`);
//     }
//     else{
//         console.log(`${i} is Odd`);
//     }
// }

for(let i=1;i<21;i++){
    if(i%3===0){
        continue;
    }
    console.log(i);
}