import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";

export default function Users() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "aktif", text: "Aktif" },
    { value: "tidak aktif", text: "Tidak Aktif" },
  ];
  return (
    <>
      <HeaderMaster
        judul="Users"
        keterangan="Tabel seluruh users atau karyawan"
        url="/asdasda"
      />
      <SearchFilter select={filterSelect} />
    </>
  );
}
