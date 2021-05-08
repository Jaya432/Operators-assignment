// copy array/merging properties of object
// arrays
let array1 = ['h', 'e', 'y'];
let array2 = [...array1];
let array3 = array1
array1.pop()
console.log(array3)

// objects
const myInfo = {
    firstName :'Meghan',
    lastName : 'Fahy',
}
const newInfo = {...myInfo}
newInfo.middleName = 'Alexandra'
newInfo.education = 'Fashion Tech'
newInfo.country = 'U.S.'
console.log(newInfo)

// to concat arrays
 let person = {
     Name : 'Sutton' ,
     age : 24 ,
 }
 let additional_info = {
     country : 'France',
 }

let info = {
    ...person,
    ...additional_info,
}
console.log(info)

//passing array as arguments
function multiply(num1,num2,num3) {
    console.log(num1*num2*num3);
}
let num = [1,2,3]
multiply(...num)