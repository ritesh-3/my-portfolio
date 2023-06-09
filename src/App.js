import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const [darkMode, setdarkMode] = useState(false);


  return (
    <div className={darkMode && 'dark'}>
      <Header darkMode={darkMode} setdarkMode={setdarkMode} />
      <main className="bg-slate-400 dark:bg-gray-900 text-gray-900 dark:text-white" >
        <Hero />
        <Services />
        <Portfolio />
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
