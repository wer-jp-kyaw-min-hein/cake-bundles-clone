import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <Hero />
      <ProductGrid />
    </main>
  )
}
