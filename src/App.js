import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Setting from "./pages/Setting";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
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
