import React, { useState } from 'react'
import 'bulma/css/bulma.css';
import AnimalShow from './AnimalShow';


const App = () => {
    
    const [animal , setAnimal] = useState([]);

    const randomAnimalGen = () => {
    
        const animals = ['cow' , 'bird' , 'cat', 'dog','gator','horse']
        // console.log(animals[ Math.floor(Math.random()*animals.length)]) 
        return animals[Math.floor(Math.random()*animals.length)]
        
    }

    const renderedAnimals = animal.map( (ani , index) => {
        return <AnimalShow type={ani} key={index} />
    })  

    const handleClick = () => {
        // setAnimal(randomAnimalGen)
        setAnimal( [...animal , randomAnimalGen()])
    }


    return (
    <div >
        <div>
            {/* <AnimalShow /> */}
        </div>
        <div>
            <button onClick={handleClick}>Add animal</button>
            <h1> {renderedAnimals} </h1>
        </div>
    </div>
  )
}

export default App