import React, {createContext, useState} from 'react';

export const UserContext = createContext(null)

export default function UserProvider(props) {
    const [message, setMessage] = useState("Hello from context")
  return (
    <UserContext.Provider 
        value={{
            message,
            setMessage
        }}
    >
        {props.children}
    </UserContext.Provider>
  )
}
