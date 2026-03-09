"use client"; 
// Esto indica que el componente se ejecuta en el cliente
// Es necesario porque usamos hooks de React como useState y useEffect

import { useEffect, useState } from "react";
import { getAuthors } from "../services/api";
import AuthorCard from "./AuthorCard";
import { useAuthors } from "../services/AuthorContext";

export default function AuthorList() {

  // useState guarda la lista de autores en memoria
  const { authors, setAuthors } = useAuthors();

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

  return (
    <div>

      <h2>Lista de Autores</h2>

      {/* Si no hay autores mostramos un mensaje */}
      {authors.length === 0 ? (
        <p>No hay autores</p>
      ) : (
        // Recorremos los autores y creamos una tarjeta por cada uno
        authors.map((author) => (
          <AuthorCard
          key={author.id}
          id={author.id}
          name={author.name}
          birthDate={author.birthDate}
          description={author.description}
          image={author.image}
        />
        ))

      )}

    </div>
  );
}