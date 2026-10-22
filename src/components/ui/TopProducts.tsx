type Produk = {
  barang: string;
  jumlah: number;
};

type Props = {
  item: Produk;
};

export default function TopProducts({ item }: Props) {
  return (
    <div className="flex justify-between items-center p-5 rounded-xl shadow-lg my-2 dark:bg-tema-3 dark:text-white">
      <span>{item.barang}</span>
      <div className="flex flex-col items-center">
        <span className="text-xl font-semibold">{item.jumlah}</span>
        <span className="text-xs">Terjual</span>
      </div>
    </div>
  );
}
