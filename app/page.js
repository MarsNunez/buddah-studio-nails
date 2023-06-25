import ServicesMainPage from "./components/ServicesMainPage";
import Hero from "./components/Hero";
import ProductsMainPage from "./components/ProductsMainPage";
import CustomerComments from "./components/CustomerComments";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ServicesMainPage />
      <ProductsMainPage />
      <CustomerComments />
      <Footer />
    </main>
  );
}
