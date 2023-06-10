import React from 'react'
import Button from './Button'

const App = () => {
  
  const someFuck = () => {
    console.log("fuck this shit");
  }

  const someOtherFuck = () => {
    console.log("imma head out");
  }
  
  return (
    <div>
      <div>
        <Button primary  onClick={someFuck} >Click me</Button>
      </div>
      <div>
        <Button secondary onMouseEnter={someOtherFuck} rounded>Clique moi</Button>
      </div>
      <div>
        <Button danger>Klick mich</Button>
      </div>
    </div>
  )
}

export default App