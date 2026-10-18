import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";
import Table from "../../components/ui/Table";
import { column, row } from "../../data/DataUsers";
import { useSearchFilter } from "../../hooks/useSearchFilter";

export default function Users() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "aktif", text: "Aktif" },
    { value: "tidak aktif", text: "Tidak Aktif" },
  ];

  const { filter, search, setFilter, setSearch, dataFiltered } =
    useSearchFilter(row, "nama", "status");

  return (
    <>
      <HeaderMaster
        judul="Users"
        keterangan="Tabel seluruh users atau karyawan"
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
