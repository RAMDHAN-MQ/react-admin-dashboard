import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  onClick: () => void;
  variant?: string;
  count?: number;
};

export default function IconButton({
  icon,
  onClick,
  variant = "",
  count = 0,
}: Props) {
  return (
    <button
      className={`${variant} p-1.5 cursor-pointer rounded hover:bg-tema-4-shadow relative`}
      onClick={onClick}
    >
      {icon}
      {count > 0 && (
        <span className="absolute -top-px -right-px flex items-center justify-center rounded-full bg-red-500 min-w-4 h-4 px-1 text-[10px]">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
