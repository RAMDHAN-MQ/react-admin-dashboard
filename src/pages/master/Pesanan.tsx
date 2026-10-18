import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";
import Table from "../../components/ui/Table";
import { column, row } from "../../data/DataPemesanan";
import { useSearchFilter } from "../../hooks/useSearchFilter";

export default function Pesanan() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "menunggu", text: "Menunggu" },
    { value: "batal", text: "Batal" },
    { value: "dikirim", text: "Dikirim" },
    { value: "selesai", text: "Selesai" },
  ];

  const { search, setSearch, filter, setFilter, dataFiltered } =
    useSearchFilter(row, "nama", "status");

  return (
    <>
      <HeaderMaster
        judul="Pesanan"
        keterangan="Tabel seluruh detail pesanan"
        url="/asdasda"
      />
      <SearchFilter
        select={filterSelect}
        filter={filter}
        search={search}
        onFilter={(e) => setFilter(e)}
        onSearch={(e) => setSearch(e)}
      />
      <Table column={column} data={dataFiltered} />
    </>
  );
}
