import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";


export default function Home() {
  return (
    <main className="overflow-clip relative dark:bg-black-100 bg-gray-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {
            name: "Home",
            link: "/",
            icon: <FaHome/>
          },
          {
            name: "Projects",
            link: "#projects",
          },
          {
            name: "Experience",
            link: "#Experience",
          },
          {
            name: "Contact",
            link: "#contact",
          },
        ]}/>
        <Hero />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
