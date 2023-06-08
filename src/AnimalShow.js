import React, { useState } from 'react'

import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

const animalMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

const AnimalShow = ({type}) => {

    const [clicks , setclicks] = useState(0);

    const handleClick = () => {
        return setclicks(clicks+1)
    }

  return (
    <div onClick={handleClick} >
        <img src={animalMap[type]} alt="animal" />
        <img style={{ width: 10 + 10*clicks + 'px' }} src={heart} alt="heart" />
    </div>
  )
}

export default AnimalShow