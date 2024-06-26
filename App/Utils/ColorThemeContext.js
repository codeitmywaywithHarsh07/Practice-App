import { createContext, useState } from "react";

const ColorThemeContext = createContext();

const ColorThemeProvider = ({children})=>{
    const [isDark,setIsDark] = useState(true);

    const toggleMode = ()=>{
        setIsDark(!isDark);
    }

    return (
        <ColorThemeContext.Provider value={{isDark, toggleMode}}>
            {children}
        </ColorThemeContext.Provider>
    );
}

export {ColorThemeContext, ColorThemeProvider};