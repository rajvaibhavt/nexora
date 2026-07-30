import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Explore from "../components/Explore";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features/>
        <Explore />
      </main>
    </>
  );
}

export default Home;