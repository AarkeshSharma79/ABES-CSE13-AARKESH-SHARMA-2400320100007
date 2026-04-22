// const user={
//  name:"aarkesh",
//  age: 30,
//  email:"ab@gamil.com",
//  isLogedIn:false
// }
// console.log(user.name);
// console.log(user.age);
const emp={
    uname:"sonu",
    email:"abc@gamil.com",
    age:20,
    lastlogin:"11 feb"
}

//object destructre
emp.uname="monu"
const{uname,age}=emp;
// emp.uname="monu";
console.log(uname,age);


