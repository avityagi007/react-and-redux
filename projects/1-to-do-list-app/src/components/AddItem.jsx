import React, { useState } from 'react'
import Items from './Items';

function AddItem() {
  const [task,setTask]=useState("");
  const [itemArray,setItemArray]=useState([]);
  function handleChange(e)
  {
    setTask(e.target.value);
  }
  function addItem(){
    setItemArray((prevItemArray)=>{[...prevItemArray,task]});
    setTask("");
  }
  return (
    <>
       <div class="row">
    <div class="col-4">
      <input type="text" value={task}
      onChange={handleChange}placeholder='enter your text here'/>
    </div>
    <div class="col-4">
      <input type="date" placeholder="dd/mm/yy" />
    </div>
  
    <div class="col-2">
    <button type="button" className="btn btn-danger" onClick={addItem}>Add</button>
    </div>
    </div>
    <Items texting="hello" list={itemArray}/>
    {/* {console.log(items)} */}
    </>
  
 
  )
}

export default AddItem;
