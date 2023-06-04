import {useContext,createContext,useReducer}from'react'
export const statecontext=createContext()
export const StateProvider=({initialstate,reducer,children})=>(
    <statecontext.Provider value={useReducer(reducer,initialstate)}>
 
      {children}
    </statecontext.Provider>

)
export const useStateValue=()=>useContext(statecontext)