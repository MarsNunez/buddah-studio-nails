import "./globals.css";

export const metadata = {
  title: "Buddah Studio Nails",
  description: "Studio for u mate!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f8f2ec]">{children}</body>
    </html>
  );
}
