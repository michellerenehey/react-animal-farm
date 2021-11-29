import React from 'react'
import './Animal.css'

export default function Animal(props) {
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/animals/${props.type}.jpeg`} />
      <p>{props.name}</p>
      <p>{props.says}</p>
    </>
  )
}
