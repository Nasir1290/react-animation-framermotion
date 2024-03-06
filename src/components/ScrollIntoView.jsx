import { motion } from 'framer-motion'
import React from 'react'
 
export default function ScrollIntoView() {
    const greetings = ['Hello', 'Hi', 'Hey', 'Hola','salam', 'morning', 'evening'];
  return (
    <div>
      {greetings.map((greeting,index) => (
        <ScrollItem key={index} text={greeting}/>
      ))}
    </div>
  )
}

const ScrollItem = ({text}) => {
    return (
        <div>
            {text}
        </div>
    )
}