import { AuthorProvider } from "../services/AuthorContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* estado global */}
        <AuthorProvider>
          {children}
        </AuthorProvider>

      </body>
    </html>
  );
}