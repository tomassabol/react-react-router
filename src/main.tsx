import "./main.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./routes/index";
import { Vite } from "./routes/vite";
import { React } from "./routes/react";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/vite" element={<Vite />} />
        <Route path="/react" element={<React />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
