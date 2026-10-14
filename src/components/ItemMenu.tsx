import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  logo: ReactNode;
  text: string;
  to: string;
};

export default function ItemMenu({ logo, text, to }: Props) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 mx-3 rounded-xl transition-colors ${
          isActive ? "bg-tema-3 text-white" : "hover:bg-tema-3 hover:text-white"
        }`
      }
    >
      <span>{logo}</span>
      <span>{text}</span>
    </NavLink>
  );
}
