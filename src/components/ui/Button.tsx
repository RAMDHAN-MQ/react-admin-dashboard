import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  text?: string;
  onClick: () => void;
  type?: "button" | "submit";
  variant: string;
  disabled?: boolean;
  iconOnly?: boolean;
};

export default function Button({
  icon,
  text,
  onClick,
  type = "button",
  variant,
  disabled = false,
  iconOnly = false,
}: Props) {
  let warna;
  switch (variant) {
    case "primary":
      warna = "bg-primary";
      break;
    default:
      warna = "";
  }

  return (
    <button
      type={type}
      className={`text-white flex items-center ${iconOnly ? "p-1" : "gap-2 px-3 py-2"} rounded text-sm cursor-pointer ${warna}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}
