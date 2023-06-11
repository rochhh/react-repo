import React, { useState } from 'react'
import Dropdown from './components/Dropdown'
// import ButtonPage from './pages/ButtonPage'
// import AccordionPage from './pages/AccordionPage'

const App = () => {
  
  const [select , setSelect] = useState(null);

  const selectedOption = (selectedOption) => {
    setSelect(selectedOption);
  }

  const options = [
    {label: 'label 1 ' , value: 'value 1' },
    {label: 'label 2 ' , value: 'value 2' },
    {label: 'label 3 ' , value: 'value 3' }
  ]

  return (
    <div>
      {/* <ButtonPage /> */}
      {/* <AccordionPage /> */}
      <Dropdown select={select} selectedOption={selectedOption} options={options} />
    </div>
  )
}

export default App