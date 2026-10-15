export default function Table() {
  return (
    <div className="overflow-x-auto my-5">
      <table className="bg-tema-3 w-full text-left rounded">
        <thead className="text-white border-b">
          <tr>
            <th scope="col" className="px-6 py-2">
              No
            </th>
            <th scope="col" className="px-6 py-2">
              a
            </th>
            <th scope="col" className="px-6 py-2">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-400">
          <tr>
            <td className="px-6 py-2">a</td>
            <td className="px-6 py-2">b</td>
            <td className="px-6 py-2">c</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
