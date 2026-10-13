type Props = {
  logo: string;
  text: string;
};

export default function ItemMenu({ logo, text }: Props) {
  return (
    <div className="px-3 py-2 mx-3 rounded-xl hover:bg-tema-3">
      <a href="">
        <span>{logo}</span>
        <span className="ml-4">{text}</span>
      </a>
    </div>
  );
}
