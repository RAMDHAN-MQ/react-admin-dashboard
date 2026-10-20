import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  logo: ReactNode;
  text: string;
  to: string;
  isClose: boolean;
};

export default function ItemMenu({ logo, text, to, isClose }: Props) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `flex items-center gap-3 ${isClose ? "justify-center" : "px-3"} py-2 mx-3 my-1 rounded transition-colors text-gray-400 ${
          isActive ? "bg-tema-3 text-white" : "hover:bg-tema-3 hover:text-white"
        }`
      }
    >
      <span>{logo}</span>
      {!isClose && <span>{text}</span>}
    </NavLink>
  );
}
