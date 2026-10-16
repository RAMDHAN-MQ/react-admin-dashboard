type Props = {
  label: string;
  type: string;
  placeholder?: string;
};

export default function InputForm({ label, type, placeholder }: Props) {
  let formInput;
  switch (type) {
    case "inputText":
      formInput = (
        <input
          type="text"
          className="border border-tema-4 rounded px-3 py-2 my-1 outline-0 w-64"
          placeholder={placeholder}
        />
      );
      break;
    default:
      formInput = "";
  }
  return (
    <div className="text-white my-2">
      <label htmlFor="" className="block">
        {label}
      </label>
      {formInput}
    </div>
  );
}
