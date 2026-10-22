type Props = {
  order: string;
  tanggal: string;
  status: string;
};

export default function PembelianTerbaru({ order, tanggal, status }: Props) {
  return (
    <div className="flex justify-between items-center border-b-4 border-b-primary dark:text-white p-5">
      <div className="flex gap-2 items-center">
        <span>{tanggal}</span>
        <div className="w-1 h-1 bg-primary rounded-full"></div>
        <span>{order}</span>
      </div>
      <span>{status}</span>
    </div>
  );
}
