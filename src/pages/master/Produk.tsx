import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";

export default function Produk() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "tersedia", text: "Tersedia" },
    { value: "habis", text: "Habis" },
  ];
  return (
    <>
      <HeaderMaster
        judul="Produk"
        keterangan="Tabel seluruh produk yang dipunya"
        url="/asdasda"
      />
      <SearchFilter select={filterSelect} />
    </>
  );
}
