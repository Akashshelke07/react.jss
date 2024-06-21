import React, { useState, useRef } from "react";

function MyComponent() {
  const [food, setFood] = useState(["Apple", "Mango", "Pineapple"]);
  const foodInputRef = useRef(null);

  function addFood() {
    const newFood = foodInputRef.current.value;
    if (newFood) {
      setFood((prevFood) => [...prevFood, newFood]);
      foodInputRef.current.value = "";
    }
  }

  function removeFood(index) {
    setFood((prevFood) => prevFood.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of food</h2>
      <ul>
        {food.map((item, index) => (
          <li key={index} onClick={() => removeFood(index)}>
            {item}
          </li>
        ))}
      </ul>
      <input type="text" ref={foodInputRef} placeholder="Enter food name" />
      <button onClick={addFood}>Add Food</button>
    </div>
  );
}

export default MyComponent;
