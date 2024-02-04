import React, { createContext, useState } from 'react'

export const LoginContext = createContext("");

const Context = ({Children}) => {

    const  [ logindata , setLogindata] = useState("")
  return (
    <>
    <LoginContext.Provider value={{logindata , setLogindata }}>
        {Children}
    </LoginContext.Provider>
    </>
  )
}

export default Context