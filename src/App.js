import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Setting from "./pages/Setting";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/me/setting" element={<Setting />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="404" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
