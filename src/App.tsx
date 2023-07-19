import { Outlet } from "react-router-dom"
import { Wrapper } from "./App.styles"

function App() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

export default App
