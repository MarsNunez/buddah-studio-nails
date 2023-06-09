import ServicesMainPage from "./components/ServicesMainPage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductsMainPage from "./components/ProductsMainPage";
import CustomerComments from "./components/CustomerComments";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <ServicesMainPage />
      <ProductsMainPage />
      <CustomerComments />
      <Footer />
    </main>
  );
}
