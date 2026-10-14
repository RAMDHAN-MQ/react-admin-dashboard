import type { ReactNode } from "react";

type Props = {
  logo: ReactNode;
  text: string;
};

export default function ItemMenu({ logo, text }: Props) {
  return (
    <div className="px-3 py-2 mx-3 rounded-xl hover:bg-tema-3">
      <a href="" className="flex items-center gap-3">
        <span>{logo}</span>
        <span>{text}</span>
      </a>
    </div>
  );
}
