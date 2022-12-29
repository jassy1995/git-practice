import Users from "./pages/users"
import ReducerExample from "./pages/counter"
import RefExample from "./pages/use-ref"
import ImperativeExanple from "./pages/use-imperative"
import ContextExample from "./pages/context"
import FilterExample from "./pages/filter-example"

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
      <hr className="my-1" />
      <ContextExample />
      <hr className="my-1" />
      <FilterExample />
    </div>
  )
}

export default App
