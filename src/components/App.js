import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import { themes, ThemeContext } from "../themes/ThemeContext";
import { useState } from "react";

function App() {
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {

  //   setTheme((current) => current = current === "dark" ? "light" : "dark")
  // }
  const toggleTheme = () => {
    setAppTheme((currTheme) => ({
      theme: currTheme.theme === themes.dark ? themes.light : themes.dark,
      toggleTheme
    }));

  }

  const [appTheme, setAppTheme] = useState({
    theme: themes.light,
    toggleTheme
  })

  return (
    <ThemeContext.Provider value={appTheme} >
      <div className="App" style={{color: appTheme.theme.color, background: appTheme.theme.background}}>
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>

  );
}

export default App
