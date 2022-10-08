import { Home, Services } from "./pages";
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Header } from "./core-ui";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
