import React from 'react'
import userContext from './userContext'
import { useState } from 'react'

const userContextProvider = ({ children }) => {

    const [user, setUser] = useState([])

    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default userContextProvider