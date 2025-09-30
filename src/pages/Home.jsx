import { useEffect, useState } from "react";
import api from "../services/api";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Busca filmes populares ao carregar a página
  useEffect(() => {
    const fetchPopular = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await api.get("/movie/popular");
        setMovies(res.data.results);
      } catch (err) {
        setError("Erro ao carregar filmes populares. Tente novamente mais tarde.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPopular();
  }, []);

  // Busca filmes via pesquisa
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError("");
    try {
      const res = await api.get("/search/movie", { params: { query } });
      setMovies(res.data.results);
    } catch (err) {
      setError("Erro ao buscar filmes. Tente novamente mais tarde.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Buscar filme..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Buscar
        </button>
      </form>

      {loading && <p className="text-center mt-4">Carregando...</p>}
      {error && <p className="text-center mt-4 text-red-600">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {!loading && !error && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
