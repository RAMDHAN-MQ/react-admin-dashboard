import { ChevronLeft, ChevronRight, Eye, SquarePen, Trash } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPage = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const dataPage = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="my-5 rounded overflow-x-auto scrollbar-thumb-primary">
        <table className="w-full text-left table-auto">
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
            {dataPage.length === 0 ? (
              <tr>
                <td
                  colSpan={column.length + 1}
                  className="text-center px-6 py-2"
                >
                  Tidak Ada Data
                </td>
              </tr>
            ) : (
              dataPage.map((row, index) => (
                <tr key={index} className="border-b border-b-tema-2 ">
                  {column.map((column) => (
                    <td key={column.key} className="px-6 py-2">
                      {row[column.key]}
                    </td>
                  ))}
                  <td key={"aksi"} className="px-6 py-2">
                    <div className="flex gap-2">
                      <Button
                        icon={<Eye size={16} />}
                        variant="primary"
                        iconOnly={true}
                        onClick={() => alert("btn view ditekan")}
                      />
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
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between my-5">
        <span className="text-white">
          Halaman {currentPage} dari {totalPage}
        </span>
        <div className="flex gap-2">
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((e) => e - 1)}
            variant="primary"
            iconOnly={true}
            icon={<ChevronLeft size={16} />}
          />
          <Button
            disabled={currentPage === totalPage || totalPage === 0}
            onClick={() => setCurrentPage((e) => e + 1)}
            variant="primary"
            iconOnly={true}
            icon={<ChevronRight size={16} />}
          />
        </div>
      </div>
    </>
  );
}
