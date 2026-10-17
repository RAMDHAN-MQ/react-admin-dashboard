import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";
import Table from "../../components/ui/Table";
import { column, row } from "../../data/DataPemesanan";

export default function Pesanan() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "menunggu", text: "Menunggu" },
    { value: "batal", text: "Batal" },
    { value: "dikirim", text: "Dikirim" },
    { value: "selesai", text: "Selesai" },
  ];

  return (
    <>
      <HeaderMaster
        judul="Pesanan"
        keterangan="Tabel seluruh detail pesanan"
        url="/asdasda"
      />
      <SearchFilter select={filterSelect} />
      <Table column={column} data={row} />
    </>
  );
}
