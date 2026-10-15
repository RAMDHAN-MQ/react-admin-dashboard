import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";

export default function Pembeli() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "aktif", text: "Aktif" },
    { value: "tidak aktif", text: "Tidak Aktif" },
  ];
  return (
    <>
      <HeaderMaster
        judul="Pembeli"
        keterangan="Tabel seluruh pembeli"
        url="/asdasda"
      />
      <SearchFilter select={filterSelect} />
    </>
  );
}
