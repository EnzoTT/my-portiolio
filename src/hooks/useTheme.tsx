import {useContext, useEffect, useState, createContext} from "react";

const ThemeContext = createContext<any>('');

const ThemeContextProvider = ({children}:any) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') !== 'dark' ? 'light': 'dark'
    );

    useEffect(()=>{
        const root = window.document.documentElement;

        const oldTheme =  localStorage.getItem('theme') !== 'dark' ? 'light': 'dark'
        root.classList.remove(oldTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    },[theme])

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=> {
    return useContext(ThemeContext)
}

export default ThemeContextProvider