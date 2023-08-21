import { BrowserRouter,Routes,Route } from "react-router-dom";


import Login from "./components/Login"; 
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
    <div>

      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;