import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedProject from "../components/FeaturedProject";
import EngineeringLab from "../components/EngineeringLab";
import About from "../components/About";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b10] text-white">
      <Header />
      <Hero />
      <FeaturedProject />
      <EngineeringLab />
      <About />
    </main>
  );
}