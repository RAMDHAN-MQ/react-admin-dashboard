type Props = {
  judul: string;
  waktu: string;
};

export default function NotificationItem({ judul, waktu }: Props) {
  return (
    <li className="flex items-center gap-2 p-5 cursor-pointer hover:bg-tema-3">
      <div className="flex flex-col">
        <div className="">{judul}</div>
        <div className="text-xs text-gray-400">{waktu}</div>
      </div>
    </li>
  );
}
