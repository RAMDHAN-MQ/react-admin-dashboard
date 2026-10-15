import { SquarePen, Trash } from "lucide-react";
import Button from "./Button";

type TableColumn = {
  key: string;
  head: string;
};

type TableRow = {
  [key: string]: string | number;
};

type Props = {
  column: TableColumn[];
  data: TableRow[];
};

export default function Table({ column, data }: Props) {
  return (
    <div className="overflow-x-auto my-5 rounded">
      <table className="w-full text-left">
        <thead className="text-white border-b bg-tema-3">
          <tr>
            {column.map((e) => (
              <th key={e.key} scope="col" className="px-6 py-2">
                {e.head}
              </th>
            ))}
            <th scope="col" className="px-6 py-2">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-300 bg-tema-4-shadow">
          {data.map((row, index) => (
            <tr key={index} className="border-b border-b-tema-2 ">
              {column.map((column) => (
                <td key={column.key} className="px-6 py-2">
                  {row[column.key]}
                </td>
              ))}
              <td key={"aksi"} className="px-6 py-2">
                <div className="flex gap-2">
                  <Button
                    icon={<SquarePen size={16} />}
                    variant="primary"
                    iconOnly={true}
                    onClick={() => alert("btn edit ditekan")}
                  />
                  <Button
                    icon={<Trash size={16} />}
                    variant="primary"
                    iconOnly={true}
                    onClick={() => alert("btn hapus ditekan")}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
