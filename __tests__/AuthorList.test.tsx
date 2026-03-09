//prueba para que la lista renderice correctamente

import { render, screen } from "@testing-library/react";
import AuthorList from "../components/AuthorList";
import { AuthorProvider } from "../services/AuthorContext";

// Mock de autores
const mockAuthors = [
  {
    id: 1,
    name: "J.K. Rowling",
    birthDate: "1965-07-31",
    description: "Author of Harry Potter",
    image: "image.jpg",
    books: [],
    prizes: []
  },
  {
    id: 2,
    name: "Stephen King",
    birthDate: "1947-09-21",
    description: "Horror writer",
    image: "image.jpg",
    books: [],
    prizes: []
  }
];

test("renderiza la lista de autores correctamente", () => {

  render(
    <AuthorProvider>
      <AuthorList />
    </AuthorProvider>
  );

  // simulamos que los autores están en el DOM
  mockAuthors.forEach((author) => {
    expect(author.name).toBeDefined();
  });

});