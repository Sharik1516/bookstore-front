import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '@/app/crear/page';

const setup = () => {
    const user = userEvent.setup();
    render(<Page />);

    const nameInput = screen.getByLabelText(/Nombre/i);
    const birthDateInput = screen.getByLabelText(/Fecha de nacimiento/i);
    const descriptionInput = screen.getByLabelText(/Descripción/i);
    const imageInput = screen.getByLabelText(/URL de la imagen/i);
    const submitButton = screen.getByRole('button', { name: /Crear autor/i });

    return { user, nameInput, birthDateInput, descriptionInput, imageInput, submitButton };
};

describe('Renderizado inicial de la página de creación de autores', () => {
    test('debería renderizar el formulario con los campos correctos', () => {
        const { nameInput, birthDateInput, descriptionInput, imageInput, submitButton } = setup();
        expect(nameInput).toBeInTheDocument();
        expect(birthDateInput).toBeInTheDocument();
        expect(descriptionInput).toBeInTheDocument();
        expect(imageInput).toBeInTheDocument();
        expect(submitButton).toBeDisabled();
    });
});