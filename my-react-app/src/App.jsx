import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";

const AppLayout = () => (
  <div className="flex min-h-screen bg-black">
    <Navbar />
    <main className="flex-1 ml-[280px] overflow-hidden">
      <Outlet />
    </main>
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movie />} />
      </Route>
    </Routes>
  );
};

export default App;
