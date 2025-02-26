import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./components/header";

export const metadata = {
  title: "BADBAN-L2",
  description: "historias de baneos en el l2 ! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="w-full h-screen bg-gray-900 text-white">
        <AuthContextProvider>
          <Header />
          <main>{children}</main>
        </AuthContextProvider>
      </body>
    </html>
  );
}
