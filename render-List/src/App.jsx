import React from 'react';
import List from './List';

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "mango", calories: 80 },
    { id: 3, name: "pineapple", calories: 65 },
    { id: 4, name: "waterapple", calories: 101 },
    { id: 5, name: "banana", calories: 105 }
  ];

  const vegetables = [
    { id: 1, name: "carrot", calories: 25 },
    { id: 2, name: "broccoli", calories: 55 },
    { id: 3, name: "spinach", calories: 23 },
    { id: 4, name: "potato", calories: 77 },
    { id: 5, name: "tomato", calories: 22 }
  ];

  return (
    <>
      {fruits.length >0 &&<List items={fruits} category="Fruits" />}
      {fruits.length >0 &&<List items={vegetables} category="Vegetables" />}
    </>
  );
}

export default App;
