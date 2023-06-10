import React from 'react'
import Button from './components/Button'
import ButtonPage from './pages/ButtonPage'
import Accordion from './components/Accordion'
const App = () => {
  
  const items = [
    {key:'123',label : "french" , content: "je parle francais"},
    {key:'345',label : "english" , content: "i speak english"},
    {key:'678',label: "hindi" , content:"mai hindi bolta hu "}
  ]

  return (
    <div>
      <ButtonPage />
      <Accordion items={items} />
    </div>
  )
}

export default App