import { useState } from "react";

export function useSearchFilter<T extends object>(
  data: T[],
  searchKey: keyof T,
  filterKey: keyof T,
) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("semua");

  const dataFiltered = data.filter((item) => {
    const dataSearch = String(item[searchKey] ?? "")
      .toLowerCase()
      .includes(search);
    const dataFilter =
      filter === "semua" ||
      String(item[filterKey] ?? "").toLowerCase() === filter;

    return dataSearch && dataFilter;
  });

  return { search, setSearch, filter, setFilter, dataFiltered };
}
