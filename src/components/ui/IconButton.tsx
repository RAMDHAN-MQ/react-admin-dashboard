import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  onClick: () => void;
  variant: string;
};

export default function IconButton({ icon, onClick, variant = "" }: Props) {
  return (
    <button
      className={`${variant} p-1.5 cursor-pointer rounded hover:bg-tema-4-shadow`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
