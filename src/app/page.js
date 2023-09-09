import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";
import Main from "@/components/main/Main";
import Skills from "@/components/skills_section/Skills";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <body>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Footer />
    </body>
  );
}
