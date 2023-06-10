import React from 'react'
import className from 'classnames'

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) => {

  const classes = className('px-12 py-6 border' , {
    'border-blue-500 bg-blue-500 text-white' : primary,
    'border-gray-500 bg-gray-500 text-white' : secondary,
    'border-green-500 bg-green-500 text-white' : success,
    'border-yellow-500 bg-yellow-500 text-white' : warning,
    'border-red-500 bg-red-500 text-white' : danger,
    'rounded-full' : rounded,
    'bg-white' : outline
  } )

  return (
    <div>
        <button className={classes} {...rest} > {children} </button>

    </div>
  )
}

export default Button