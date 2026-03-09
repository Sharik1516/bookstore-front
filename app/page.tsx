import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Bookstore Front</h1>
      <p>Gestión de autores</p>

      <nav style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <Link href="/authors">
          <button>Ver autores</button>
        </Link>

        <Link href="/crear">
          <button>Crear autor</button>
        </Link>
      </nav>
    </main>
  );
}