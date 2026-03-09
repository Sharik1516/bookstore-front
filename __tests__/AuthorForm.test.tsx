//Prueba que el formulario actualice estado al escribir
import { render, screen, fireEvent } from "@testing-library/react";
import AuthorForm from "../components/AuthorForm";
import { AuthorProvider } from "../services/AuthorContext";

test("actualiza el input cuando el usuario escribe", () => {

  render(
    <AuthorProvider>
      <AuthorForm />
    </AuthorProvider>
  );

  const nameInput = screen.getByLabelText(/nombre/i);

  fireEvent.change(nameInput, {
    target: { value: "Nuevo Autor" }
  });

  expect(nameInput).toHaveValue("Nuevo Autor");

});