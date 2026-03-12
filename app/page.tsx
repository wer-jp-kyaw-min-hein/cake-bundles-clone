import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Toolbar from "./components/Toolbar"
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <Hero />
      <ProductGrid />
      <FAQ />
      <Toolbar />
      <Footer />
    </main>
  )
}
