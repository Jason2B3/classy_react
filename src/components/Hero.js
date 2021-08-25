import React from 'react'

function Hero({name}) {
  if(name==="Joker") throw new Error()
  return (
    <p>{name}</p>
  )
}

export default Hero
