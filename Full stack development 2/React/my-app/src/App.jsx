// import User from "./User.";

// function App() {
//   return (
//     <>
//       <h1>Hello Guy's welcome to my blog</h1>
//       <h2>Today I am sitting in class of FSD</h2>
//       <User />
//     </>
//   );
// }

// export default App;
// import Book from "./Book.jsx"

// const Hello=()=>{
//   return <h2>welcome</h2>
// };
// // passing arugement  as parameter
// const Greeting=(props)=>{
//   return <h3>Namste to all {props.person}</h3>
// }
//  const Family=(props)=>{
//   return (<>
//   <h4>family member {props.member} </h4>
//   <h5>from {props.from}</h5>
//   </>)

//  
// import BookList from "./booklist";

// const App=()=>{
//   return (<>
  {/* <h1>hello</h1>
  <Greeting person="Aarkesh and his family"></Greeting>
  <Family member={4}from="Kushinagar"></Family>
  <Hello/>
  <Book name="Rd sharma"price={500}rating={5}/> */}
//   <BookList/>
//   </>)
// }
// export default App;

// import React from 'react'
// import Card from './Card'
// import mobile from './assets/mobile.jpeg'

// import React from 'react'
// import Card from './Card'   // make sure this path is correct
// import mobile from "./assets/mobile.jpg"


// import Userstate from './Userstate'
// const App = () => {
//   return (
//     <div>card
//       {/* <card  */}
//       // image={mobile}
//       // title="product name"
//       // price="500"/
      
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Userstate from './Hooks/Userstate';

const App = () => {
  return (
    <div>
      <h1>My App</h1>

      {/* Calling Userstate component */}
      <Userstate/>
      
    </div>
  );
};

export default App;