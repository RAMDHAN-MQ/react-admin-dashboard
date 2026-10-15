import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";
import Table from "../../components/ui/Table";

export default function Produk() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "tersedia", text: "Tersedia" },
    { value: "habis", text: "Habis" },
  ];

  const column = [
    { key: "id", head: "ID" },
    { key: "produk", head: "Produk" },
    { key: "stok", head: "Stok" },
    { key: "harga", head: "Harga" },
    { key: "status", head: "Status" },
  ];

  const row = [
    {
      id: "PRD-001",
      produk: "Gula 1kg",
      harga: 5000,
      stok: 200,
      status: "Tersedia",
    },
    {
      id: "PRD-002",
      produk: "Garam 1kg",
      harga: 7000,
      stok: 0,
      status: "Habis",
    },
    {
      id: "PRD-003",
      produk: "Kopi 1 Kardus",
      harga: 32000,
      stok: 112,
      status: "Tersedia",
    },
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
