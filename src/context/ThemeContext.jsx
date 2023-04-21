import React, {createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({theme: 'light'})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        const localData = localStorage.getItem("theme");
        return localData ? JSON.parse(localData) : 'light';
    })
    console.log(theme)
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}