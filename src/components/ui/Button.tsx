import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  text: string;
  onClick: () => void;
  type: "button" | "submit";
  variant: string;
  disabled: boolean;
};

export default function Button({
  icon,
  text,
  onClick,
  type = "button",
  variant,
  disabled = false,
}: Props) {
  return (
    <button
      type={type}
      className={`px-3 py-2 text-white flex items-center gap-2 rounded-xl text-sm cursor-pointer bg-${variant} `}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}
