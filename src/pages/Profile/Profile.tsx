import Button from "../../components/ui/Button";
import InputForm from "../../components/ui/InputForm";

export default function Profile() {
  return (
    <div className="bg-white rounded p-5 dark:bg-tema-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle size-32">
            <img
              src="https://picsum.photos/200"
              className="h-full w-full rounded-[inherit] object-cover"
            />
          </span>
          <div className="flex flex-col">
            <span className="text-gray-700 dark:text-white">
              Profile Picture
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-300">
              PNG, JPEG, Max 2MB
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => alert("tombol ditekan")}
            variant="primary"
            textOnly={true}
            text="Upload Foto"
          />
          <Button
            onClick={() => alert("tombol ditekan")}
            variant="danger"
            textOnly={true}
            text="Hapus Foto"
          />
        </div>
      </div>

      <div className="border-t border-t-tema-2 my-5">
        <form>
          <div className="my-2">
            <div className="flex flex-col my-3">
              <span className="text-gray-700 dark:text-white">
                Nama Lengkap
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-300">
                Isikan dengan nama lengkap anda
              </span>
            </div>
            <InputForm label="Nama" type="inputText" value="Ramdhan" />
          </div>
          <div className="border-t border-t-tema-2 my-2">
            <div className="flex flex-col my-3">
              <span className="text-gray-700 dark:text-white">
                Kontak Email
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-300">
                Email digunakan untuk menerima pesan.
              </span>
            </div>
            <InputForm
              label="Email"
              type="inputEmail"
              value="ramdhan@gmail.com"
            />
          </div>
          <div className="border-t border-t-tema-2 my-2">
            <div className="flex flex-col my-3">
              <span className="text-gray-700 dark:text-white">Password</span>
              <span className="text-xs text-gray-500 dark:text-gray-300">
                Atur password anda
              </span>
            </div>
            <div className="flex gap-2">
              <InputForm
                label="Password"
                type="inputPassword"
                value="laksjdalskdj"
              />
              <InputForm
                label="Password Baru"
                type="inputPassword"
                value="laksjdalskdj"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={() => alert("tombol ditekan")}
              variant="primary"
              textOnly={true}
              text="Simpan Perubahan"
            />
          </div>
        </form>
      </div>

      <div className="border-t border-t-tema-2 my-5">
        <div className="flex flex-col my-3">
          <span className="text-gray-700 dark:text-white">Keamanan Akun</span>
          <span className="text-xs text-gray-500 dark:text-gray-300">
            Hapus akun akan menghilangkan permanen akun anda
          </span>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => alert("tombol ditekan")}
            variant="primary"
            text="Log out"
            textOnly={true}
          />
          <Button
            onClick={() => alert("tombol ditekan")}
            variant="danger"
            text="Hapus Akun"
            textOnly={true}
          />
        </div>
      </div>
    </div>
  );
}
