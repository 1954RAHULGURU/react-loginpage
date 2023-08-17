import "./App.css";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [user,setUser]=useState([]);
  const userDetails = (data)=>{
    setUser([...user,data])}
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login userDetails={userDetails}></Login>}></Route>
        <Route path="/Home" element={<Home user={user}></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
