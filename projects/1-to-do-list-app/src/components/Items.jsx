import React, { useState } from 'react'
function Items(props) {
  return (
    <div>
      <ul>
        <li>
          {props.texting}
        </li>
        {/* {props.list.length} */}
      {/* {props.list.length===0 ||props.itemlist.map((item,index)=>{return <li key={index}>{item}</li>})} */}
      {/* {console.log(props.list.length)} */}
      </ul>
    </div>
  )
}

export default Items
