import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  onClick: () => void;
  keterangan: string;
};

export default function IconButton({ icon, onClick, keterangan = "" }: Props) {
  return (
    <button
      className={`${keterangan} p-1.5 cursor-pointer rounded hover:bg-tema-4-shadow`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
