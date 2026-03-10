import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";
import MainLayout from "./components/layout/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout ครอบทุกหน้า */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePages />} />
          <Route path="about" element={<AboutPages />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;