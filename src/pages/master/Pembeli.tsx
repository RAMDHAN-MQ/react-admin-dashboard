import { useState } from "react";
import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";
import Table from "../../components/ui/Table";
import { column, row } from "../../data/DataPembeli";

export default function Pembeli() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("semua");

  function handleSearch(value: string) {
    setSearch(value);
  }

  function handleFilter(value: string) {
    setFilter(value);
  }

  const data = row.filter((e) => {
    const dataSearch = e.nama.toLowerCase().includes(search.toLowerCase());
    const dataFilter =
      filter === "semua" || e.status.toLocaleLowerCase() === filter;

    return dataSearch && dataFilter;
  });

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
        url="/pembeli/form"
      />
      <SearchFilter
        select={filterSelect}
        search={search}
        filter={filter}
        onSearch={handleSearch}
        onFilter={handleFilter}
      />
      <Table column={column} data={data} />
    </>
  );
}
