'use Client'
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Work from "@/components/Work";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>
    <Work/>
    </>
  );
}
