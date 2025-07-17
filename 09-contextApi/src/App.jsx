import userContextProvider from "../Context/userContextProvider"

function App() {

  return (
    <userContextProvider>
      <h1>Hello world</h1>
    </userContextProvider>
  )
}

export default App
