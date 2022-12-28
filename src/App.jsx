import Users from "./pages/users"
import ReducerExample from "./pages/counter"
import RefExample from "./pages/use-ref"
import ImperativeExanple from "./pages/use-imperative"

function App() {

  return (
    <div className="container mx-auto">
      <Users />
      <hr className="my-1" />
      <ReducerExample />
      <hr className="my-1" />
      <RefExample />
      <hr className="my-1" />
      <ImperativeExanple />
    </div>
  )
}

export default App
