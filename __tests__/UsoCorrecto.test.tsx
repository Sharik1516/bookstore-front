//como no se aplicaron mensajes de error solo se verifica que el boton pase a habilitado cuando se llenan todos los campos
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

describe('Formulario de creación de autor - Uso correcto', () => {
    test('El botón de submit se habilita cuando se llenan todos los campos', async () => {
        const { user, nameInput, birthDateInput, descriptionInput, imageInput, submitButton } = setup();    
        await user.type(nameInput, 'Autor de prueba');
        await user.type(birthDateInput, '1990-01-01');
        await user.type(descriptionInput, 'Una descripción válida');
        await user.type(imageInput, 'https://example.com/image.jpg');
        expect(submitButton).toBeEnabled();
    });
});