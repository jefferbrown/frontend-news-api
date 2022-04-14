import "./App.css"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar"; 
import Bitcoin from "./pages/Bitcoin";
import Marvel from "./pages/Marvel";
import ContextAll from "./ContextApi";
function App() {
   
  return (
    <div>
        <BrowserRouter basename='/'> 
             <Navbar />
             <br></br>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bitcoin" element={<Bitcoin />} />
                <Route path="/marvel" element={<Marvel />} />
            </Routes>
        </BrowserRouter>
    </div>
)
}

export default ContextAll(App);
