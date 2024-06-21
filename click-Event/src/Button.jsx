
function Button(){

//     const btn = () => console.log("Welcome!!!!")
//     const btn2 = (name) => console.log(`${name} stop clicking me`)

//   return(<button onClick={() => btn2("Akash")}>Click me</button>);

//conditional statement 
// let count =0;
 
// const handleClick = (name) => {
//     if(count<20){
//         count++;
//         console.log(`${name} You clicked me ${count} time/s `)
//     }
//     else{
//         console.log(`${name} stop clicking me!`);
//     }
// }
//return(<button onClick={() =>handleClick("Skyler")}>click me</button>)

//Event
  const handleClick = (e) => e.target.textContent = "Submited";



return(<button onDoubleClick={(e) =>handleClick(e)}>Click Here!!!!</button>)
}

export default Button