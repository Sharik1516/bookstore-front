//pagina que lista los autores

// Importamos el componente que muestra los autores
import AuthorList from "../../components/AuthorList";

// Este es el componente de la página
export default function AuthorsPage() {
  return (
    <div>

      {/* Título de la página */}
      <h1>Autores</h1>

      {/* Aquí se renderiza la lista de autores */}
      <AuthorList />

    </div>
  );
}