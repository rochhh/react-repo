import React from 'react'
import Button from './Button'

const App = ({func}) => {
  
  const someFuck = () => {
    console.log("fuck this shit");
  }
  
  return (
    <div>
      <div>
        <Button primary func someFuckingProp={someFuck} >Click me</Button>
      </div>
      <div>
        <Button secondary rounded>Clique moi</Button>
      </div>
      <div>
        <Button danger>Klick mich</Button>
      </div>
    </div>
  )
}

export default App