import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-clip relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
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
            name: "Contact",
            link: "#contact",
          },
        ]}/>
        <Hero />
        <Grid />
        <Footer />
      </div>
    </main>
  );
}
