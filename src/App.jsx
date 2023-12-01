import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Background, ToDo, Header } from "./components";
import { useEffect, useState } from "react";

const App = () => {
  const storedTheme = localStorage.getItem("theme");
  const [isDark, setDark] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem("theme", isDark);
  }, [isDark]);

  return (
    <ThemeProvider theme={isDark === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Background>
        <main className="container">
          <Header setDark={setDark} isDark={isDark} />
          <ToDo />
        </main>
      </Background>
    </ThemeProvider>
  );
};

export default App;
