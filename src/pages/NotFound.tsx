import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center bg-tema-4">
      <div className="w-100 h-100 bg-tema-3 rounded-2xl flex justify-center items-center flex-col gap-3">
        <div className="flex flex-col items-center">
          <span className="text-9xl text-white font-bold">404</span>
          <span className="text-white">Page Not Found</span>
        </div>
        <NavLink
          to="/"
          className="px-3 py-2 bg-tema-4 rounded-xl text-white hover:bg-tema-4-shadow"
        >
          Kembali Ke Dashboard
        </NavLink>
      </div>
    </div>
  );
}
