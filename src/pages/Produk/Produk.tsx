import HeaderMaster from "../../components/ui/HeaderMaster";
import SearchFilter from "../../components/ui/SearchFilter";
import Table from "../../components/ui/Table";
import { column, row } from "../../data/DataProduk";
import { useSearchFilter } from "../../hooks/useSearchFilter";

export default function Produk() {
  const filterSelect = [
    { value: "semua", text: "Semua" },
    { value: "tersedia", text: "Tersedia" },
    { value: "habis", text: "Habis" },
  ];

  const { search, setSearch, filter, setFilter, dataFiltered } =
    useSearchFilter(row, "produk", "status");

  return (
    <>
      <HeaderMaster
        judul="Produk"
        keterangan="Tabel seluruh produk yang dipunya"
        url="/produk/form"
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
