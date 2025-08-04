import React from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);


function ThemeProvider({children} : {children: React.ReactNode}) {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  React.useEffect(function(){
    if(localStorage.getItem("theme") === "dark"){
      setIsDarkMode(true);
    }
  }, []);

  React.useEffect(function() {
    const root = window.document.documentElement;
    if(isDarkMode){
      root.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }else{
      root.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return(
    <ThemeContext.Provider value={{
      isDarkMode,
      setIsDarkMode
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

export { ThemeProvider, useTheme };