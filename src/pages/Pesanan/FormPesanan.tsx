import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import InputForm from "../../components/ui/InputForm";

export default function FormPesanan() {
  const navigate = useNavigate();

  return (
    <div className="bg-tema-3 p-5 rounded">
      <form>
        <div className="grid grid-cols-2">
          <InputForm label="ID" type="inputText" placeholder="Masukkan ID..." />
          <InputForm
            label="Nama"
            type="inputText"
            placeholder="Masukkan Nama..."
          />
          <InputForm
            label="Total"
            type="inputText"
            placeholder="Masukkan Total..."
          />
          <InputForm
            label="Status"
            type="inputText"
            placeholder="Masukkan Status..."
          />
          <InputForm
            label="Tanggal"
            type="inputText"
            placeholder="Masukkan Tanggal..."
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button
            text="Batal"
            variant="cancel"
            onClick={() => navigate("/pesanan")}
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
