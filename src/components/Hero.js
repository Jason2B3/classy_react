import React from 'react'

function Hero(props) {
  // if(props.name==="Joker") throw new Error()
  return (
    <p>{props.name}</p>
  )
}

export default Hero
