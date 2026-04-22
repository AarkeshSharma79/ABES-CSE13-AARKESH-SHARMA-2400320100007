import React from 'react'
import mobile from "./assets/mobile.jpg"
import "./Card.css"
// const Card = (props) => {
//   return (
//     <div>
//       <img src={props.mobile} alt="product" width="200px" />
//       <h2>{props.title}</h2>
//       <h3>{props.price}</h3>
//     </div>
//   )
// }

const Card = (props) => {
  return (
    <div className="card">
      <img src={image} className="pimg" />
      <h2>{props.ptitle}</h2>
      <p>₹{props.price}</p>
    </div>
  )
}

export default Card;