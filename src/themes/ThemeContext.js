import React from "react"

export const themes = {
    light: {
        name: "light",
        background: "white",
        color: "black"
    },
    dark: {
        name: "dark",
        background: "black",
        color: "white"
    }
}

export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {}
})