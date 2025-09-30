import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await api.get(`/movie/${id}`);
        setMovie(res.data);
      } catch (err) {
        setError("Erro ao carregar os detalhes do filme. Tente novamente mais tarde.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p className="text-center mt-4">Carregando...</p>;
  if (error) return <p className="text-center mt-4 text-red-600">{error}</p>;
  if (!movie) return null;

  return (
    <div className="max-w-3xl mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p className="mt-2">{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="mt-4 rounded mx-auto"
      />
      <p className="mt-2">Data de lançamento: {movie.release_date}</p>
    </div>
  );
}
