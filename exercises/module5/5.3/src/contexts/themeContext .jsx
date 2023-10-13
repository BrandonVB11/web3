import React, { useState } from 'react';

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const setDarkTheme = () => {
        setTheme('dark');
    }

    const setLightTheme = () => {
        setTheme('light');
    }

    const toggleTheme = () => {
        theme === 'light' ? setDarkTheme() : setLightTheme();
    }

    const getCurrentThemeDetails = () => {
        return {
            theme,
            toggleTheme
        }
    }
    

    return (
        <Context.Provider value={getCurrentThemeDetails()}>
            {children}
        </Context.Provider>
    );
}

export { Context, ProviderWrapper };

