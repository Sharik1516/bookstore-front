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
    <div className="card" style={{ border: '2px solid #333', borderRadius: '10px', padding: '20px', width: '300px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>

      <img className="card-img-top" src={image} alt={`Imagen de ${name}`} width={120} />

      <div className="card-body">

      <h5 className="card-title">{name}</h5>

      <p className="card-text">
        <strong>Nacimiento:</strong> {birthDate}
      </p>

      <p className="card-text">{description}</p>

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
      <br></br>
    </div>
    
  );
}