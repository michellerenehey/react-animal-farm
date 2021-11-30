import React from 'react'
import './Main.css'
import Animal from '../Animal/Animal'
import { animals } from '../../data.js'
import background from '../../background.png'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal key={animal.type} {...animal} />
      ))}
    </main>
  )
}
