import type { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  text?: string;
  onClick: () => void;
  type?: "button" | "submit";
  variant: string;
  disabled?: boolean;
  iconOnly?: boolean;
  textOnly?: boolean;
};

export default function Button({
  icon,
  text,
  onClick,
  type = "button",
  variant,
  disabled = false,
  iconOnly = false,
  textOnly = false,
}: Props) {
  let warna;
  switch (variant) {
    case "primary":
      warna = "text-white bg-primary hover:bg-primary-shadow";
      break;
    case "cancel":
      warna = "text-gray-700 dark:text-white font-bold hover:bg-gray-200 dark:hover:bg-tema-3-shadow";
      break;
    default:
      warna = "";
  }

  return (
    <button
      type={type}
      className={`flex items-center ${iconOnly ? "p-1" : textOnly ? "px-3 py-2" : "gap-2 px-3 py-2"} rounded text-sm cursor-pointer ${warna}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}
