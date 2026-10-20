type SelectProps = {
  value: string;
  text: string;
};

type Props = {
  select: SelectProps[];
  search: string;
  onSearch: (value: string) => void;
  filter: string;
  onFilter: (value: string) => void;
};

export default function SearchFilter({
  select,
  search,
  onSearch,
  filter,
  onFilter,
}: Props) {
  return (
    <div className="my-5">
      <input
        type="text"
        placeholder="Cari..."
        className="bg-white dark:bg-tema-3 px-3 py-2 rounded dark:text-white outline-0 w-80 mr-2"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
        className="bg-white dark:bg-tema-3 px-3 py-2 rounded text-gray-700 dark:text-white outline-0 w-36 border-r-12 border-white dark:border-tema-3"
      >
        {select.map((e) => (
          <option key={e.value} value={e.value}>
            {e.text}
          </option>
        ))}
      </select>
    </div>
  );
}
