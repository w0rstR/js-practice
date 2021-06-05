const arr=[1,2,3,4,5,6,7,8]

// arr.pop();
// console.log(arr)
// arr.push(0)
// console.log(arr)

// for(value of arr){
//     console.log(value)
// }

// arr.forEach(function(item,i,arr){
//     console.log(`${i}: ${item}, внутри массива ${arr}`)
// })
 

// const  str=prompt("","")
// const products=str.split(",");
// const elements= products.join(';')

// console.log(products)
// console.log(elements)

// console.log(products.sort())



const myArr= [2,13,26,8,10]

myArr.sort(compareNum);
console.log(myArr)

function compareNum(a,b){
    return a-b;
}