// // // let student = {
// // //     name:"Anmol",
// // //     course:"web dev",
// // //     email:"Anmol@1234gmail.com",
// // //     phoneNO:23456789012,
// // //     isActive:false
// // // }

// // // using Constructor 
// // // using new keyword
// // // using literals

// // let b = [2,4,7,9] //Arrays index: 0,1,2,3;  elements => values


// // let student = {
// //     // key: value,
// //     name:"Ritik",
// //     email:"ritik123@gmail.com",
// //     phoneNo:1234567890,
// //     subjects:["html","css","js"],
// //     address:{
// //         buldingNo:"34",
// //         Area:"karolbagh",
// //         city:"New Delhi",
// //         pincode:111000
// //     },
// //     isLogin:true,
// //     "is a prime member":WebTransportDatagramDuplexStream
// // } //object ;
// // // oject creation using new keyword

// // let employee = new Object({name:"Akash",email:"123@gmail.com"})// {}



// // // how to access values 
// // // object_name.value
// // student["is a prime member"]

// // // console.log(student['address']);

// // console.log(object.key(student));

// // // console.log(employee);





// const student = new Object()  // singleton object 
// const teachers = {} 

// console.log(`students is ${student} and type is ${typeof(student)}`);
// console.log(`teacher is ${teachers} and type is ${typeof(teachers)}`);


const student = {
    name:"Ritik",
    rollno:483764,
    class:"12th",
    phoneNo:9935460725,
    marks:{
        english:95,
        hindi:100,
        maths:75,
    },
    subject:['physics','chemistry','maths','hindi','english'],
}

// const key = Object.keys(student);
// arr[0]
// obj[name]

// key[0] // name 
// student[name] //
// student[key[0]] //
// for(let i =0; i<key.length; i++){
//     console.log(`sutdent ${key[i]} is    ${student[key[i]]} `)
// }

// console.log(student)
// const pi = 3.14
// const pi = 24 // cannot be redeclare 
// pi = 25


// let x = 5 
// // let x= 7 // cannot be redeclare 
// x = 34 // can be re assign 

// const arr = [3,4,5,6,7,8];
// console.log('3rd value of array'+arr[2]);
// arr[2] = 25
// console.log('3rd value of array'+arr[2]);
// const pi = 3.14
// // pi = 25

// const array = []
// const obj = {}

let key = Object.keys(student)
let values = Object.values(student)
let entries = Object.entries(student)

console.log(key);
console.log(values);
console.log(entries);



