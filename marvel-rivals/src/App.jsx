import Navbar from "./components/Navbar";
import About from "./sections/About";
import Characters from "./sections/Characters";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import News from "./sections/News";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <section id="hero"  className="font-zentry"><Hero/></section>
      <section id="about"><About/></section>
      <section id="characters" ><Characters/></section>
      <section id="news" ><News/></section>
      <section id="contact"><Footer/></section>
    </main>
  );
}
