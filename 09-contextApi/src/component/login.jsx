import React from 'react'
import { useContext, useState } from 'react'
import userContext from "../Context/userContext"

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = () => {
  
}

function login() {
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>

  )
}

export default login