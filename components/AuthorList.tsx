"use client"; 
// Esto indica que el componente se ejecuta en el cliente
// Es necesario porque usamos hooks de React como useState y useEffect

import { useEffect, useState } from "react";
import { getAuthors } from "../services/api";
import AuthorCard from "./AuthorCard";
import { useAuthors, Author } from "../services/AuthorContext";

interface AuthorFormProps {
  initialData?: Author;
}

export default function AuthorList({ initialData }: AuthorFormProps) {

  // useState guarda la lista de autores en memoria
  const { authors, setAuthors, filtrarAuthor } = useAuthors();

  // useEffect se ejecuta cuando el componente se renderiza por primera vez
  useEffect(() => {

    // Creamos una función async para obtener los autores
    async function fetchAuthors() {

      // Llamamos la función que hace el fetch al backend
      const data = await getAuthors();

      // Guardamos los autores en el estado
      setAuthors(data);
    }

    /// Solo carga si aún no hay autores
    if (authors.length === 0) {
      fetchAuthors();
    }

  }, []);
  // El array vacío significa que solo se ejecuta una vez al montar el componente
  const [name, setName] = useState(initialData?.name || "");

  // Función que se ejecuta al escribir en el input de búsqueda
  const handleBuscar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
    filtrarAuthor(name.toLocaleLowerCase());
  }



  return (
    <div>

      <h2>Lista de Autores</h2>
      <div>
        <label htmlFor="name">Buscar:</label>
        <input
          id="busqueda"
          type="text"
          onChange={handleBuscar}
          aria-label="Buscar autor por nombre"
        />
      </div>
      <><br></br></>

      {/* Si no hay autores mostramos un mensaje */}
      {authors.length === 0 ? (
        <p>No hay autores</p>
      ) : (
        // Recorremos los autores y creamos una tarjeta por cada uno
        authors.map((author) => (
          <><br></br><AuthorCard
            key={author.id}
            id={author.id}
            name={author.name}
            birthDate={author.birthDate}
            description={author.description}
            image={author.image} /></>
        ))

      )}

    </div>
  );
}