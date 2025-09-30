import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">
        <Link to="/">🎬 Consulta Movie</Link>
      </h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
      </nav>
    </header>
  );
}
