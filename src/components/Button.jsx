import React from 'react'

function Button({text,hover,className}) {
  return (
    <button className={`font-inter font-normal  text-base cursor-pointer   duration-300 px-8 py-2 border-solid border rounded-lg ${hover ? "bg-primary text-white border-primary hover:bg-transparent hover:text-secondary":"bg-transparent hover:bg-secondary hover:text-white border-secondary"} ${className}`}>{text}</button>
  )
}

export default Button