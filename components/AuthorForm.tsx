//Formulario controlado con useState y ARIA
"use client";

import { useState } from "react";
import { useAuthors, Author } from "../services/AuthorContext";

interface AuthorFormProps {
  initialData?: Author;
}

export default function AuthorForm({ initialData }: AuthorFormProps) {

  const { addAuthor, updateAuthor } = useAuthors();

    // Estados para cada input del formulario
  const [name, setName] = useState(initialData?.name || "");
  const [birthDate, setBirthDate] = useState(initialData?.birthDate || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [image, setImage] = useState(initialData?.image || "");

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // evita que la página se recargue

     const author = {
      id: initialData?.id || Date.now(),
      name,
      birthDate,
      description,
      image,
      books: [], // inicializa el array de libros vacío
      prizes: [] // inicializa el array de premios vacío
    };

    if (initialData) {
      // editar
      updateAuthor(author);
    } else {
      // crear
      addAuthor(author);
    }

    // limpiar formulario
    setName("");
    setBirthDate("");
    setDescription("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="author-form-title">

      {/* Título accesible del formulario */}
      <h2 id="author-form-title">{initialData ? "Editar Autor" : "Crear Autor"}</h2>

      {/* Campo nombre */}
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-required="true"
          aria-label="Nombre del autor"
        />
      </div>

      {/* Campo fecha de nacimiento */}
      <div>
        <label htmlFor="birthDate">Fecha de nacimiento</label>
        <input
          id="birthDate"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
          aria-required="true"
          aria-label="Fecha de nacimiento del autor"
        />
      </div>

      {/* Campo descripción */}
      <div>
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-label="Descripción del autor"
        />
      </div>

      {/* Campo imagen */}
      <div>
        <label htmlFor="image">URL de la imagen</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          aria-label="Imagen del autor"
        />
      </div>

      {/* Botón de envío */}
      <button type="submit" aria-label="Guardar autor">
        {initialData ? "Guardar cambios" : "Crear autor"}
      </button>

    </form>
  );
}