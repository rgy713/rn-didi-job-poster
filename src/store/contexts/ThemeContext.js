import React from 'react';

const defaultTheme = {color: 'light'};
export const ThemeContext = React.createContext(defaultTheme);

export const ThemeContextProvider = ({children}) => (
  <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
);
