import {products} from "./products.js"
// question 1;
products.forEach((p)=>{
    const{name,price,category}=p
    //  console.log(p);
     console.log(name);
     console.log(price);
     console.log(category);
})
// question 2
const newProducts = products.map((p)=>{
    const {name, price, qty, category} = p;
    return{
        name, price, qty, category, totalPrice : price * qty
    };
})
console.log(newProducts);