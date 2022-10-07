import React from 'react'

export default function TipsInput({value, handleChange}) {
  return (
   <>
      <textarea name="recipe-tips" value={value} onChange={handleChange} id="recipe-tips" cols="30" rows="10" placeholder="Type tip... "></textarea>

   </>
  )
}
