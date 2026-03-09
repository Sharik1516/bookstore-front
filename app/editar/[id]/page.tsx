//pagina para editar un autor
"use client";

import { useParams } from "next/navigation";
import { useAuthors } from "../../../services/AuthorContext";
import AuthorForm from "../../../components/AuthorForm";

export default function EditAuthorPage() {
  
  const params = useParams();
  const { authors } = useAuthors();
  //buscar el autor por id
  const author = authors.find(
    (a) => a.id === Number(params.id)
  );
  //si no se encuentra el autor, mostrar un mensaje de error
  if (!author) {
    return <p>Autor no encontrado</p>;
  }
  //si se encuentra el autor, mostrar el formulario de edición con los datos del autor
  return (
    <div>

      <h1>Editar Autor</h1>

      <AuthorForm initialData={author} />

    </div>
  );
}