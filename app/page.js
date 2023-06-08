import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <Hero />
    </main>
  );
}
