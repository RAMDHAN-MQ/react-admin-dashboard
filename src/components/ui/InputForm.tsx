type Props = {
  label: string;
  type: string;
  placeholder?: string;
  value?: string;
};

export default function InputForm({ label, type, placeholder, value }: Props) {
  let formInput;
  switch (type) {
    case "inputText":
      formInput = (
        <input
          type="text"
          className="border border-tema-4 rounded px-3 py-2 my-1 outline-0 w-64 dark:border-tema-2"
          placeholder={placeholder}
          value={value}
        />
      );
      break;
    case "inputEmail":
      formInput = (
        <input
          type="email"
          className="border border-tema-4 rounded px-3 py-2 my-1 outline-0 w-64 dark:border-tema-2"
          placeholder={placeholder}
          value={value}
        />
      );
      break;
    case "inputPassword":
      formInput = (
        <input
          type="password"
          className="border border-tema-4 rounded px-3 py-2 my-1 outline-0 w-64 dark:border-tema-2"
          placeholder={placeholder}
          value={value}
        />
      );
      break;
    default:
      formInput = "";
  }
  return (
    <div className="text-gray-700 dark:text-white my-2">
      <label htmlFor="" className="block">
        {label}
      </label>
      {formInput}
    </div>
  );
}
