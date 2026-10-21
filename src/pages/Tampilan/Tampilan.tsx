import { Moon, Sun } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useOutletContext } from "react-router-dom";

type Props = {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
};

export default function Tampilan() {
  const { isDark, setIsDark } = useOutletContext<Props>();

  return (
    <>
      <div className="bg-white rounded-xl p-5 dark:bg-tema-3">
        <div className="text-white flex flex-col mb-5">
          <span className="font-semibold text-2xl text-gray-700 dark:text-white">
            Tema
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            Pilih warna tema sesuai keinginan
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            className={`shadow-md p-5 flex flex-col gap-2 items-center border-2  rounded-2xl cursor-pointer dark:text-white ${!isDark ? "bg-blue-600/10 border-primary" : "bg-white hover:bg-gray-50 dark:bg-tema-3 dark:hover:bg-tema-3-shadow border-tema-2"}`}
            onClick={() => setIsDark(false)}
          >
            <Sun />
            <small>Cerah</small>
          </button>
          <button
            className={`shadow-md p-5 flex flex-col gap-2 items-center border-2  rounded-2xl cursor-pointer dark:text-white ${isDark ? "bg-blue-600/10 border-primary" : "bg-white hover:bg-gray-50 dark:bg-tema-3 dark:hover:bg-tema-3-shadow border-tema-2"}`}
            onClick={() => setIsDark(true)}
          >
            <Moon />
            <small>Gelap</small>
          </button>
        </div>
      </div>
    </>
  );
}
