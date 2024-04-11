import Flash from "@/components/Flash-sales/Flash";
import Footer from "@/components/Footer";
import Hero_Section from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero_Section />
    <Flash />
    <Footer />
    </>
  );
}
