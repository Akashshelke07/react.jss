/*
props = read-only properties that are shared between components.
A parent component can send data to a child component.
<Component key=value/>
*/
import Student from './Student.jsx'


function App() {
  
  return (
    <>
      <Student name = "Om" age={20} isStudent={true}/>
      <Student name = "sahil" age={30} isStudent={false}/>
      <Student name = "Parth" age={45} isStudent={false}/>
      <Student name = "jake" age={15} isStudent={true}/>
      <Student name = "sagar" age= {25} isStudent={true}/>
      <Student/>
      <Student name = "alen" />
    </>
  )
}

export default App
