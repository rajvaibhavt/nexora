import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Explore from "../components/Explore";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features/>
        <Explore />
        <About/>
        <CTA/>
      </main>

      <Footer/>
    </>
  );
}

export default Home;