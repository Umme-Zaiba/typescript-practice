import { createContext } from "react";
import { theme } from './theme';

type ThemeContextProviderProps ={
    children: React.ReactNode
}
export const ThemeContext =createContext(theme)
// Creating a Provider Component:
// ThemeContextProvider is a functional component that wraps its children with ThemeContext.Provider.
export const ThemeContextProvider = ({children}: ThemeContextProviderProps)=>{
    return (
        // The value prop of ThemeContext.Provider is set to theme. This means any component within ThemeContextProvider can access theme.
        <ThemeContext.Provider value={theme}>
{/* {children} represents all child components of ThemeContextProvider. These children will have access to the context value provided. */}
            {children}
        </ThemeContext.Provider>
    )
}

