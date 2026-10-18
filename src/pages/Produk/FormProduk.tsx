import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import InputForm from "../../components/ui/InputForm";

export default function FormProduk() {
  const navigate = useNavigate();

  return (
    <div className="bg-tema-3 p-5 rounded">
      <form>
        <div className="grid grid-cols-2">
          <InputForm label="ID" type="inputText" placeholder="Masukkan ID..." />
          <InputForm
            label="Produk"
            type="inputText"
            placeholder="Masukkan Produk..."
          />
          <InputForm
            label="Stok"
            type="inputText"
            placeholder="Masukkan Stok..."
          />
          <InputForm
            label="Harga"
            type="inputText"
            placeholder="Masukkan Harga..."
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
            onClick={() => navigate("/produk")}
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
