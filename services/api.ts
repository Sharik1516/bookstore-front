// Esta función obtiene la lista de autores desde el backend
// Se exporta para poder usarla en otros archivos del proyecto
export async function getAuthors() {
    try {
        // fetch hace una petición HTTP al backend
        const response = await fetch('http://127.0.0.1:8080/api/authors');

        // Si el servidor responde con error (ej: 404 o 500)
        // lanzamos una excepción
        if (!response.ok) {
            throw new Error('Fallo en la respuesta del servidor');
        }

        // Convertimos la respuesta en JSON
        const data = await response.json();

        // Retornamos los datos de los autores
        return data;

    } catch (error) {
        // Si ocurre cualquier error lo mostramos en consola
        console.error("Error al obtener autores:", error);

        // Retornamos un arreglo vacío para evitar que la app falle
        return [];
    }
}