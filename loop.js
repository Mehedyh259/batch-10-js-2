// console.log("mehedy vai")
// console.log("mehedy vai")
// console.log("mehedy vai")
// console.log("mehedy vai")
// console.log("mehedy vai")

/*
 for(starting value; end condition; increament or decreament){

 }

 */

//  for(let i = 0; i<=50; i++){
//     console.log("mehedy vai ",i)
//  }

// const flowers = ["golap","sapla","joba","beli"];
// console.log(flowers[0])
// console.log(flowers[1])
// console.log(flowers[2])
// console.log(flowers[3])
 
// for(let i = 0; i < flowers.length ; i++ ){
//     console.log(flowers[i])
// }
// for(let i = flowers.length-1; i>=0; i-- ){
//     console.log(flowers[i])
// }

const flowers = ["golap","sapla","joba","beli"];


// for(let i = 0; i < flowers.length; i++ ){
//     console.log(flowers[i])
// }

/*
while(condition){
    tasks
    looping increament or decreament
}
*/

// let i = 0;
// while(i < flowers.length){
//     console.log(flowers[i]);
//     i++;
// }

for(let i = flowers.length-1; i>=0; i-- ){
    console.log(flowers[i])
}

// let i = flowers.length-1;
// while(i>=0){
//     console.log(flowers[i])
//     i--
// }

// const flowers = ["golap","sapla","joba","beli"];

// for(let item of flowers){
//     console.log(item)
// }
// for(let item of flowers.reverse()){
//     console.log(item)
// }

// for(let i = 1; i<=5; i++){
//     console.log("hello from I ",i)
//     for(let j = 1; j<=5; j++){
//         console.log("hello from J ",j)
//     }
// }


const x = [1,2,4,5,6,7,8];


for(let i = 0; i<x.length; i++){

    // if(x[i] === 5){
    //     break;
    // }
    if(x[i] === 5){
        continue;
    }
    console.log(x[i])
}