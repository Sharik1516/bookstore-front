//pagina con el formulario para crear autores

import AuthorForm from "../../components/AuthorForm";

export default function CrearAutorPage() {
  return (
    <div>

      <h1>Crear nuevo autor</h1>

      {/* Renderizamos el formulario */}
      <AuthorForm />

    </div>
  );
}