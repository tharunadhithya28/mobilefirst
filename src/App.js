import logo from './logo.svg';
import './App.css';
import LoginForm from "./Components/LoginForm"
import Home from "./Components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route exact path ="/" element={<LoginForm />} />
       <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
     
    
    </>
  );
}

export default App;
