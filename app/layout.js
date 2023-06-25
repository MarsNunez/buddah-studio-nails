import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Buddah Studio Nails",
  description: "Studio for u mate!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.lineicons.com/4.0/lineicons.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f8f2ec]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
