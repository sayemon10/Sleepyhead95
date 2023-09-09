import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";
import Main from "@/components/main/Main";

export default function Home() {
  return (
    <body>
      <Header />
      <Main />
      <Footer />
    </body>
  );
}
