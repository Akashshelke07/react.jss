 /*
 Conditional rendering = allows you to control what gets rendered in your application based on certain conditons                  (show, hide, or change components)
 */




import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
   <UserGreeting isLoggedIn={true} />
    </>
  )
}

export default App
