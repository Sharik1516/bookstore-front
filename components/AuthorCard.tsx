//componente individual para un autor con botones de editar y eliminar
"use client";

import { useRouter } from "next/navigation";
import { useAuthors } from "../services/AuthorContext";
// Definimos el tipo de datos que recibirá el componente
interface AuthorCardProps {
  id: number;
  name: string;
  birthDate: string;
  description: string;
  image: string;
}

// Este componente recibe los datos del autor como props
export default function AuthorCard({ id,name,birthDate,description,image }: AuthorCardProps) {
  const router = useRouter();
  const { removeAuthor } = useAuthors();

  return (
    <div>

      <img src={image} alt={`Imagen de ${name}`} width={120} />

      <h3>{name}</h3>

      <p>
        <strong>Nacimiento:</strong> {birthDate}
      </p>

      <p>{description}</p>

      {/* boton editar */}
      <button
        onClick={() => router.push(`/editar/${id}`)}
        aria-label={`Editar autor ${name}`}
      >
        Editar
      </button>

      {/* boton eliminar */}
      <button
        onClick={() => removeAuthor(id)}
        aria-label={`Eliminar autor ${name}`}
      >
        Eliminar
      </button>

    </div>
  );
}