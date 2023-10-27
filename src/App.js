import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./componentes/Header/Header";
import { Home } from "./pages/Home/Home";
import { Footer } from "./componentes/Footer/Footer";
import Mockman from "mockman-js";


function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/mockman" element={<Mockman/>}  />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
