import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = function ({ children }) {
    const body = document.querySelector('body');
    const getTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(getTheme || "light");

    const applyTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    };
    function changeTheme() {
        const newTheme = theme === 'light' ? "dark" : "light";
        setTheme(newTheme);
    }
    useEffect(function () {
        applyTheme(theme);
        return () => applyTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}