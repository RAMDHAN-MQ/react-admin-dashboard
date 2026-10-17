import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";
import Table from "../../components/ui/Table";
import { column, row } from "../../data/DataProduk";

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
      <Table column={column} data={row} />
    </>
  );
}
