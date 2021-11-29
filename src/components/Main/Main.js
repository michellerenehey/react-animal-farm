import React from 'react'
import './Main.css'
import Animal from '../Animal/Animal'
import { animals } from '../../data.js'

export default function Main() {
  return (
    <main>
      {animals.map((animal) => (
        <Animal key={animal.type} name={animal.name} says={animal.says} />
      ))}
    </main>
  )
}
