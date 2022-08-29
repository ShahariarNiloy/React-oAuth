import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Post from "./pages/Post";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(true);

  return (
    <BrowserRouter>
      <div>
        <Navbar user={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
