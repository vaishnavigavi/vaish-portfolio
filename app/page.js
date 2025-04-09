'use client'
import { useState, useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Work from "@/components/Work";


export default function Home() {
  const[isDarkMode,setIsDarkMode]=useState(true);
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
    }
  },[isDarkMode])
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
