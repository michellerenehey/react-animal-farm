import React from 'react'
import './Animal.css'

export default function Animal(props) {
  return (
    <>
      <img height="100px" src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <p>{props.name}</p>
      <p>{props.says}</p>
    </>
  )
}
