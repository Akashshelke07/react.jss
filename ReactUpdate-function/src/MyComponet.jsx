/*
update function => a function passed as an argument to setstate() usaually 
ex.setYear(year +1 )
Allow for safe update based on the previous state 
Used with multiple state updates and asynchronus functions 
Good practice to use updater functions
 */

import React, {useState} from "react";

function MyComponent(){
   const[count, setCount] = useState(0);

   //Here we use state vairables for use multiple update like taking first letter of count c or C and creating js function to trigger the changes 

   function increment(){
    setCount( count=>count + 1);
    setCount( count=>count + 1);
    setCount( count=>count + 1);
    setCount( count=>count + 1);
   }

   function decrement(){
    setCount(count - 1);
   }

   function reset(){
    setCount(0);
   }

   return(
    <>
    <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrement}>Decrement</button>
    





    </div>
    </>
   )


}
export default MyComponent