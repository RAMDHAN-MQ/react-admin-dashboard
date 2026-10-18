import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";
import Table from "../../components/ui/Table";
import { column, row } from "../../data/DataPembeli";
import { useSearchFilter } from "../../hooks/useSearchFilter";

export default function Pembeli() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "aktif", text: "Aktif" },
    { value: "tidak aktif", text: "Tidak Aktif" },
  ];

  const { search, setSearch, filter, setFilter, dataFiltered } =
    useSearchFilter(row, "nama", "status");

  return (
    <>
      <HeaderMaster
        judul="Pembeli"
        keterangan="Tabel seluruh pembeli"
        url="/pembeli/form"
      />
      <SearchFilter
        select={filterSelect}
        search={search}
        filter={filter}
        onSearch={(e) => setSearch(e)}
        onFilter={(e) => setFilter(e)}
      />
      <Table column={column} data={dataFiltered} />
    </>
  );
}
