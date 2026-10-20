import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import InputForm from "../../components/ui/InputForm";

export default function FormPembeli() {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-tema-3 p-5 rounded">
      <form>
        <div className="grid grid-cols-2">
          <InputForm
            label="Nama"
            type="inputText"
            placeholder="Masukkan Nama..."
          />
          <InputForm
            label="Email"
            type="inputText"
            placeholder="Masukkan Email..."
          />
          <InputForm
            label="Pembelian"
            type="inputText"
            placeholder="Masukkan Pembelian..."
          />
          <InputForm
            label="Status"
            type="inputText"
            placeholder="Masukkan Status..."
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button
            text="Batal"
            variant="cancel"
            onClick={() => navigate("/master/pembeli")}
            textOnly={true}
          />
          <Button
            text="Simpan"
            variant="primary"
            onClick={() => alert("tombol ditekan")}
            textOnly={true}
          />
        </div>
      </form>
    </div>
  );
}
