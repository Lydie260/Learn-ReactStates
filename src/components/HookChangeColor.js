import React, { useState } from 'react'

const HookChangeColor = () => {

    const [changeColor, setChangeColor]= useState('blue')
  return (
    <div>
<button onClick={()=>setChangeColor('red')}>click me{changeColor}</button>
    </div>
  )
}

export default HookChangeColor