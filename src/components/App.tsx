import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PremiumModal } from './premium/PremiumModal';
import SettingsModal from './settings/SettingsModal';
import About from './About';
import Services from './Services';
import Contact from './Contact';


function App () {

  return (
    <Router>
      <Routes>

<Route path="/settings" element={<SettingsModal open={false} onClose={function (): void {
          throw new Error('Function not implemented.');
        } } />} />
     
      <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/premium" element={<PremiumModal isOpen={false} onClose={function (): void {
          throw new Error('Function not implemented.');
        } } />} />
   
      </Routes>
    </Router>
  );
};

export default App;