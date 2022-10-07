import React from 'react'

export default function UserThumb({email, showMenu}) {
  return (
 <>
<span>
    <button onClick={showMenu}>{email[0]}</button>
</span>
 </>
  )
}
