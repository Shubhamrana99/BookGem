import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./componentes/Header/Header";
import { Home } from "./pages/Home/Home";
import { Footer } from "./componentes/Footer/Footer";


function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>}  />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
