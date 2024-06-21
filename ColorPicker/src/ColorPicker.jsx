import React, { useState } from "react";

function ColorPicker(){
  const[color, setColor] = useState("#ffffff");

  function ChangeColor(event){
    setColor(event.target.value);
  }
    return(
    <>
    <div className="Color-picker">
        <h1>Color Picker</h1>
        <div className="color-name" style={{backgroundColor: color}}>
            <p>Selected Color {color}</p>
        </div>
        <label>Select a Color  </label>
        <input type="color" value={color} onChange={ChangeColor}/>
    </div>
    
    </>)
}
export default ColorPicker