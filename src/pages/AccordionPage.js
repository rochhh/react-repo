import React from 'react'
import Accordion from '../components/Accordion'
const AccordionPage = () => {
  
  const items = [
    {key:'123',label : "french" , content: "je parle francais"},
    {key:'345',label : "english" , content: "i speak english"},
    {key:'678',label: "hindi" , content:"mai hindi bolta hu "}
  ]

  return (
    <div>
      {/* <ButtonPage /> */}
      <Accordion items={items} />
    </div>
  )
}

export default AccordionPage