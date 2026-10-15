import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";
import Table from "../../components/ui/Table";

export default function Pesanan() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "menunggu", text: "Menunggu" },
    { value: "batal", text: "Batal" },
    { value: "dikirim", text: "Dikirim" },
    { value: "selesai", text: "Selesai" },
  ];

  const column = [
    { key: "id", head: "ID" },
    { key: "nama", head: "Nama" },
    { key: "total", head: "Total" },
    { key: "status", head: "Status" },
    { key: "tanggal", head: "Tanggal" },
  ];

  const row = [
    {
      id: "BRG-2026-001",
      nama: "Ramdhan",
      total: 200000,
      status: "Dikirim",
      tanggal: "12-12-2024",
    },
    {
      id: "BRG-2026-002",
      nama: "Maulana",
      total: 300000,
      status: "Batal",
      tanggal: "13-12-2024",
    },
    {
      id: "BRG-2026-003",
      nama: "Qolbi",
      total: 1000000,
      status: "Menunggu",
      tanggal: "14-12-2024",
    },
  ];

  return (
    <>
      <HeaderMaster
        judul="Pesanan"
        keterangan="Tabel berisi seluruh detail pesanan"
        url="/asdasda"
      />
      <SearchFilter select={filterSelect} />
      <Table column={column} data={row} />
    </>
  );
}
