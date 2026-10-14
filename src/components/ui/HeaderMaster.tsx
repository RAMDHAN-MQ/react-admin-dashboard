import { Plus } from "lucide-react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

type Props = {
  judul: string;
  keterangan: string;
  url: string;
};

export default function HeaderMaster({ judul, keterangan, url }: Props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(url);
  }

  return (
    <div className="flex justify-between items-center">
      <div className="text-white flex flex-col">
        <span className="font-semibold text-2xl">{judul}</span>
        <span className="text-gray-400">{keterangan}</span>
      </div>
      <div className="">
        <Button
          text="Tambah Data"
          icon={<Plus size={16} />}
          onClick={handleClick}
          type="button"
          variant="primary"
          disabled={false}
        />
      </div>
    </div>
  );
}
