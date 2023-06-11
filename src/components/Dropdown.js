import React, { useState } from 'react'

const Dropdown = ({options , select , selectedOption}) => {
  
    const [click , setClick] = useState(false);

    const onClickHandler = () => {
        setClick(!click)
    }

    const handleOptionClick = (optionMap) => {
        setClick(false)
        // console.log(optionMap)
        selectedOption(optionMap)
    }
    
    const items = options.map( (option,index) => {
        
        return (
        <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={ () => handleOptionClick(option)} key={option.value} >
             {option.label} 
        </div>
        )       
    })

    let content = 'Select ...'

    if (select){
        content = select.label
    }
  /*
   * the above if condition for content val can also be written as 
   * inside the <div> -
   * 
   * { select?.label || 'Dropdown select  ...' } 
   * 
   */
    return (
    <div className='w-48 relative'>
        <h1 onClick={onClickHandler} > {content} </h1>
        { click && <div> {items} </div> }
        {/*  the above expression can also be written as ->  { click ? <h1> {items} </h1> : null } */}
    </div>
  )
}

export default Dropdown