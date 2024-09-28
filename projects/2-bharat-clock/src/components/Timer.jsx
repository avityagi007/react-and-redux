import React from 'react'

function Timer() {
  let timeValue=new Date();
  return (
    <div>
      <p>This is the current time: {timeValue.toLocaleDateString()} - {timeValue.toLocaleTimeString()} </p>
    </div>
  )
}

export default Timer
