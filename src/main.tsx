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
import Profile from "./pages/Profile/Profile.tsx";
import Tampilan from "./pages/Tampilan/Tampilan.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="master/pembeli" element={<Pembeli />}></Route>
          <Route path="master/pesanan" element={<Pesanan />}></Route>
          <Route path="master/produk" element={<Produk />}></Route>
          <Route path="master/users" element={<Users />}></Route>

          <Route path="master/pembeli/form" element={<FormPembeli />}></Route>
          <Route path="master/pesanan/form" element={<FormPesanan />}></Route>
          <Route path="master/produk/form" element={<FormProduk />}></Route>
          <Route path="master/users/form" element={<FormUsers />}></Route>

          <Route path="settings/profile" element={<Profile />}></Route>
          <Route path="settings/tampilan" element={<Tampilan />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
