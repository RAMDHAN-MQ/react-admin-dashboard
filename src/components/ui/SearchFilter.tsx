type SelectProps = {
  value: string;
  text: string;
};

type Props = {
  select: SelectProps[];
};

export default function SearchFilter({ select }: Props) {
  return (
    <div className="my-5">
      <input
        type="text"
        placeholder="Cari..."
        className="bg-tema-3 px-3 py-2 rounded text-white outline-0 w-80 mr-2"
      />
      <select
        name=""
        id=""
        className="bg-tema-3 px-3 py-2 rounded text-white outline-0 w-36"
      >
        {select.map((e) => (
          <option value={e.value}>{e.text}</option>
        ))}
      </select>
    </div>
  );
}
