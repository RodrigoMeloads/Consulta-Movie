import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="border rounded p-2 shadow flex flex-col items-center">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="rounded"
      />
      <h2 className="text-lg font-semibold mt-2 text-center">{movie.title}</h2>
      <p className="text-sm text-gray-600">{movie.release_date}</p>
      <Link to={`/movie/${movie.id}`} className="mt-2 text-blue-500">
        Ver detalhes
      </Link>
    </div>
  );
}
