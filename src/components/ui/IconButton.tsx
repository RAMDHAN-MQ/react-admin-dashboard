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
  let warna;
  if (variant === "primary") {
    warna = "text-primary hover:bg-blue-200 dark:hover:bg-blue-500/10";
  } else {
    warna =
      "text-black hover:bg-gray-400/10 dark:hover:bg-tema-4-shadow dark:text-white";
  }
  return (
    <button
      className={`${warna} p-1.5 cursor-pointer rounded relative`}
      onClick={onClick}
    >
      {icon}
      {count > 0 && (
        <span className="absolute -top-px -right-px flex items-center justify-center rounded-full bg-red-500 min-w-4 h-4 px-1 text-[10px] text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
