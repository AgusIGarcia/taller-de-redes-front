import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Error404 from "./Pages/Error404";
import Home from "./Pages/Home";
import Personas from "./Pages/Personas";

function App() {
  return (
    <Router>
      <CssBaseline>
        <main className="App">
          <Header />
          <Routes>
            <Route path="/" element= {<Home />}/>
            <Route path="/personas" element= {<Personas />}/>
            <Route path="*" element= {<Error404 />}/>
          </Routes>
        </main>
      </CssBaseline>
    </Router>
  );
}

export default App;
