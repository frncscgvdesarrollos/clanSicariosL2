import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./components/header";

export const metadata = {
  title: "Baneados INJUSTAMENTE",
  description: "LA VERDAD SOBRE LOS BANEOS DE REBORN",
};

export default function RootLayout({ children  }) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className='bg-gray-800 flex flex-col'>
        <AuthContextProvider>
        <Header />
                {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}


