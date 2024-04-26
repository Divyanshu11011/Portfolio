import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Achievements from "./components/Achievements";

function App() {
  const hackathonWinnings = [
    "1st Prize at EMERGE’24 BUILD-A-THON, 2025",
    "1st Prize at Microsoft Great India Hackathon, 2022",
    "1st Prize at Carrefour E-Commerce Hackathon, 2022",
    "1st Prize at Intellimerge 1.0 IEEE Student Symposium, 2023",
    "Best Presenter Award at YAMAHA NATIONAL AI HACKATHON, 2023",
    "Finalist at TIE-U GPC 2023-2024",
    "15+ Published Technical Articles on GeeksForGeeks"
  ];

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Achievements achievements={hackathonWinnings} />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
