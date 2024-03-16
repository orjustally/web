import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Duohisto from "./components/Duohisto/Duohisto";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";

export default function App() {

  const [play, setPlay] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About setPlay={setPlay}/>
        <Title subTitle="our projects" title="What We Offer" />
        <Projects />
        <Title subTitle="duo histopath" title="LIMS for Histology & Cytology" />
        <Duohisto />
        <Title subTitle="contact us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer play={play} setPlay={setPlay} />
    </div>
  )
}
