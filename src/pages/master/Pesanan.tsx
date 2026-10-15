import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";

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
        keterangan="Tabel berisi seluruh detail pesanan"
        url="/asdasda"
      />
      <SearchFilter select={filterSelect} />
    </>
  );
}
