import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";
import Table from "../../components/ui/Table";

export default function Users() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "aktif", text: "Aktif" },
    { value: "tidak aktif", text: "Tidak Aktif" },
  ];

  const column = [
    { key: "nama", head: "Nama" },
    { key: "email", head: "Email" },
    { key: "role", head: "Role" },
    { key: "status", head: "Status" },
  ];

  const row = [
    {
      nama: "Ramdhan",
      email: "ramdhan@gmail.com",
      role: "admin",
      status: "Aktif",
    },
    {
      nama: "Maulana",
      email: "maulana@gmail.com",
      role: "editor",
      status: "Aktif",
    },
    {
      nama: "Qolbi",
      email: "qolbi@gmail.com",
      role: "viewer",
      status: "Tidak Aktif",
    },
  ];

  return (
    <>
      <HeaderMaster
        judul="Users"
        keterangan="Tabel seluruh users atau karyawan"
        url="/asdasda"
      />
      <SearchFilter select={filterSelect} />
      <Table column={column} data={row} />
    </>
  );
}
