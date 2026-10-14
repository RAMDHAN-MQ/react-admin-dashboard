import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Pembeli from "./pages/master/Pembeli.tsx";
import Pesanan from "./pages/master/Pesanan.tsx";
import Produk from "./pages/master/Produk.tsx";
import Users from "./pages/master/Users.tsx";
import NotFound from "./pages/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="pembeli" element={<Pembeli />}></Route>
          <Route path="pesanan" element={<Pesanan />}></Route>
          <Route path="produk" element={<Produk />}></Route>
          <Route path="users" element={<Users />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
