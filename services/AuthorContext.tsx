"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Tipo de autor
export interface Author {
  id: number;
  name: string;
  birthDate: string;
  description: string;
  image: string;
  books: unknown[];
  prizes: unknown[];
}

// Tipo del contexto
interface AuthorContextType {
  authors: Author[];
  addAuthor: (author: Author) => void;
  updateAuthor: (author: Author) => void;
  removeAuthor: (id: number) => void;
  setAuthors: (authors: Author[]) => void;
}

// Crear contexto
const AuthorContext = createContext<AuthorContextType | undefined>(undefined);

// Provider que envuelve la aplicación
export function AuthorProvider({ children }: { children: ReactNode }) {

  // Estado global de autores
  const [authors, setAuthors] = useState<Author[]>([]);

  // Función para agregar autor
  const addAuthor = (author: Author) => {
    setAuthors((prev) => [...prev, author]);
  };

  // Función para editar autor
  const updateAuthor = (updatedAuthor: Author) => {

    setAuthors((prev) =>
      prev.map((author) =>
        author.id === updatedAuthor.id ? updatedAuthor : author
      )
    );
  };

  // Función para eliminar autor
  const removeAuthor = (id: number) => {
    setAuthors((prev) => prev.filter((author) => author.id !== id));
  };

  return (
    <AuthorContext.Provider value={{ authors, addAuthor,updateAuthor, removeAuthor, setAuthors }}>
      {children}
    </AuthorContext.Provider>
  );
}

// Hook para usar el contexto fácilmente
export function useAuthors() {
  const context = useContext(AuthorContext);

  if (!context) {
    throw new Error("useAuthors debe usarse dentro de AuthorProvider");
  }

  return context;
}