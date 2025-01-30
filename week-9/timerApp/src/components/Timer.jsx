import React, { useEffect, useState } from 'react'


const Timer = () => {
  const [time, SetTime]=useState(0);
  const [isRunning, setIsRunning]=useState(false);
  const [isEdit, setIsEditing]=useState(false);

  
 

  return (
    <div>
      <div>
        Timer 
      </div>
      <button>Start</button>
      <button>Pause</button>
      <button>Reset</button>
      <button>Edit</button>
      
    </div>
  )
}

export default Timer