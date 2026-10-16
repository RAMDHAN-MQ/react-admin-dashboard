import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";
import Table from "../../components/ui/Table";

export default function Pembeli() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "aktif", text: "Aktif" },
    { value: "tidak aktif", text: "Tidak Aktif" },
  ];

  const column = [
    { key: "nama", head: "Nama" },
    { key: "email", head: "Email" },
    { key: "pembelian", head: "Pembelian" },
    { key: "status", head: "Status" },
  ];

  const row = [
    {
      nama: "Ramdhan",
      email: "ramdhan@gmail.com",
      pembelian: 200000,
      status: "Aktif",
    },
    {
      nama: "Maulana",
      email: "maulana@gmail.com",
      pembelian: 50000,
      status: "Aktif",
    },
    {
      nama: "Qolbi",
      email: "qolbi@gmail.com",
      pembelian: 1000000,
      status: "Tidak Aktif",
    },
  ];

  return (
    <>
      <HeaderMaster
        judul="Pembeli"
        keterangan="Tabel seluruh pembeli"
        url="/pembeli/form"
      />
      <SearchFilter select={filterSelect} />
      <Table column={column} data={row} />
    </>
  );
}
