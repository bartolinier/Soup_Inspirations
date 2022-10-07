import React from 'react'

export default function StepsInput({value, handleChange}) {
  return (
   <>

<textarea name="recipe-steps" value={value} onChange={handleChange} id="recipe-steps" cols="30" rows="10" placeholder="Type step..."></textarea>

   </>
  )
}
