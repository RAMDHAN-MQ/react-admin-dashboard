import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Pembeli from "./pages/Pembeli/Pembeli.tsx";
import Pesanan from "./pages/Pesanan/Pesanan.tsx";
import Produk from "./pages/Produk/Produk.tsx";
import Users from "./pages/Users/Users.tsx";
import NotFound from "./pages/NotFound.tsx";
import FormPembeli from "./pages/Pembeli/FormPembeli.tsx";
import FormPesanan from "./pages/Pesanan/FormPesanan.tsx";
import FormProduk from "./pages/Produk/FormProduk.tsx";
import FormUsers from "./pages/Users/FormUsers.tsx";

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

          <Route path="pembeli/form" element={<FormPembeli />}></Route>
          <Route path="pesanan/form" element={<FormPesanan />}></Route>
          <Route path="produk/form" element={<FormProduk />}></Route>
          <Route path="users/form" element={<FormUsers />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
