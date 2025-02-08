import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Chatbot } from './components/chatbot/Chatbot';
import './index.css';
import MainTitle from './components/home/Home';
import { useEffect, useState } from 'react';
import Loader from './components/loader/Loader';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
const App = () => {
const [isLoading, setIsLoading] = useState(true);




useEffect(() => {
  // Simulez un temps de chargement avant que l'application soit prête
  const timer = setTimeout(() => setIsLoading(false), 3000);
  return () => clearTimeout(timer);
}, []);

if (isLoading) {
  return <Loader />; // Affiche le loader pendant le chargement
}


return (
  <div>
    <Header />
    <MainTitle />
    <div className="min-h-screen " style={{ background: 'pink'}}>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />
    <About/>
    <Services/>
    <Contact/>
      </main>
      <Chatbot />
    </div>
    </div>
  );
}

export default App;
