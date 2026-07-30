import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features/>
      </main>
    </>
  );
}

export default Home;