import React from 'react'

const Button = (props) => {

    const {name,onClick,type,color,custStyle}=props;

  return (
    <button className={`px-3 py-0 sm:px-7 text-[15px] sm:py-1 bg-white text-black rounded-sm border-[3px] border-solid sm:text-lg ${custStyle} outline outline-2 outline-offset-2 outline-white`} style={{outlineColor:"border-Pr"}}>{name}</button>
  )
}

export default Button