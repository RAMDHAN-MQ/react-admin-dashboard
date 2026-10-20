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

  return (
    <div className="flex justify-between items-center">
      <div className="text-white flex flex-col">
        <span className="font-semibold text-2xl text-gray-700 dark:text-white">
          {judul}
        </span>
        <span className="text-gray-500 dark:text-gray-400">{keterangan}</span>
      </div>
      <div className="">
        <Button
          text="Tambah Data"
          icon={<Plus size={16} />}
          onClick={() => navigate(url)}
          type="button"
          variant="primary"
          disabled={false}
        />
      </div>
    </div>
  );
}
