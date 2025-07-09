import Card from "../components/card"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let obj = {
  //   username: "username",
  //   discription: "discription"
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="Tanish"/>
      <Card username="newUser"/>
    </>
  )
}

export default App
