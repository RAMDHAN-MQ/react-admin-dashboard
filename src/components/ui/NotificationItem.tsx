import { Minus, Plus, ShoppingCartPlus } from "lucide-react";

type Props = {
  id: number;
  type: string;
  judul: string;
  waktu: number;
  read: boolean;
  onRead: (value: number) => void;
};

export default function NotificationItem({
  id,
  type,
  judul,
  waktu,
  read,
  onRead,
}: Props) {
  let icon;
  if (type === "tambah") {
    icon = <Plus size={16} />;
  } else if (type === "habis") {
    icon = <Minus size={16} />;
  } else {
    icon = <ShoppingCartPlus size={16} />;
  }

  let ket;
  if (waktu <= 60) {
    ket = `${waktu} detik yang lalu`;
  } else if (waktu <= 3600) {
    ket = `${Math.floor(waktu / 60)} menit yang lalu`;
  } else if (waktu <= 86400) {
    ket = `${Math.floor(waktu / 3600)} jam yang lalu`;
  } else {
    ket = `${Math.floor(waktu / 86400)} hari yang lalu`;
  }
  return (
    <li
      className={`flex justify-between items-center gap-4 p-5 cursor-pointer text-gray-700 hover:bg-blue-200/10 dark:text-white dark:hover:bg-tema-3 ${read && "bg-blue-400/10"}`}
      onClick={() => onRead(id)}
    >
      {icon}
      <div className="flex flex-col flex-1">
        <div className="">{judul}</div>
        <div className="text-xs text-gray-400">{ket}</div>
      </div>
      <div className={`${read && "bg-primary"} rounded-full size-1.5`}></div>
    </li>
  );
}
