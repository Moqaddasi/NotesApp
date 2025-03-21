interface Props {
  title: string;
}

function Header({ title }: Props) {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </header>
  );
}
export default Header;
