//no se utilizan mensajes de error en el formulario, entonces solo se comprueba que mientras falte un campo el boton no se habilita
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

describe('Formulario de creación de autor - Uso incorrecto', () => {
    test('El botón de submit está deshabilitado si falta el nombre', async () => {
        const { user, birthDateInput, descriptionInput, imageInput, submitButton } = setup();
        await user.type(birthDateInput, '1990-01-01');
        await user.type(descriptionInput, 'Una descripción válida');
        await user.type(imageInput, 'https://example.com/image.jpg');
        expect(submitButton).toBeDisabled();
    });

    test('El botón de submit está deshabilitado si falta la fecha de nacimiento', async () => {
        const { user, nameInput, descriptionInput, imageInput, submitButton } = setup();
        await user.type(nameInput, 'Autor de prueba');
        await user.type(descriptionInput, 'Una descripción válida');
        await user.type(imageInput, 'https://example.com/image.jpg');
        expect(submitButton).toBeDisabled();
    });

    test('El botón de submit está deshabilitado si falta la descripción', async () => {
        const { user, nameInput, birthDateInput, imageInput, submitButton } = setup();
        await user.type(nameInput, 'Autor de prueba');
        await user.type(birthDateInput, '1990-01-01');
        await user.type(imageInput, 'https://example.com/image.jpg');
        expect(submitButton).toBeDisabled();
    });

    test('El botón de submit está deshabilitado si falta la URL de la imagen', async () => {
        const { user, nameInput, birthDateInput, descriptionInput, submitButton } = setup();
        await user.type(nameInput, 'Autor de prueba');
        await user.type(birthDateInput, '1990-01-01');
        await user.type(descriptionInput, 'Una descripción válida');
        expect(submitButton).toBeDisabled();
    });
});