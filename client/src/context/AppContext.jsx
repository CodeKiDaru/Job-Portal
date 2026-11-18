import { createContext, useState, useContext } from "react";

const AppContext = createContext()

export const AppContextProvider = ({children}) => {

    const [state, setState] = useState('mkl');

    const value = {
        state,
        setState
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () =>{
    return useContext(AppContext)
}