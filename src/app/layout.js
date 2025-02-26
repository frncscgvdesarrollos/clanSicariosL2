import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./components/header";

export const metadata = {
  title: "BADBAN-L2",
  description: "LA VERDAD SOBRE LOS BANEOS DE REBORN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-gray-800 flex flex-col">
        <AuthContextProvider>
          <Header />
          <main>{children}</main>
        </AuthContextProvider>
      </body>
    </html>
  );
}
