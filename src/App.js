import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Landing from "./scenes/LandingPage/Landing";
import Rdashboard from "./scenes/ReceptionDashboard/Rdashboard";
import Register from "./scenes/RegistrationForm/register"

function App() {
  const [theme,colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className="content">
            <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/rdashboard" element={<Rdashboard/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
