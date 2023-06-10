import React, { useState } from 'react'

const Accordion = ({items}) => {
  
    const [expandedIndex, setExpandedIndex ] = useState(0); 

    const renderedItems = items.map( (item,index) => {
    const isExpanded =  expandedIndex === index;

    const content = isExpanded && <div> {item.content} </div> 

    console.log(isExpanded);
    return (
        <div key={item.id} >
            <div>
                <h3> {item.label} </h3>
                <p> {content} </p>
            </div>
        </div>
    )
  })
  
    return (
    <div>
       {renderedItems}
    </div>
  )
}

export default Accordion