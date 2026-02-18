import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Toolbar from "./components/Toolbar"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <Hero />
      <ProductGrid />
      <Toolbar />
      <Footer />
    </main>
  )
}
