import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import SettingsModal from './settings/SettingsModal';
import HelpModal from '../components/help/HelpModal';
import { PremiumModal } from './premium/PremiumModal';



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Contrôle de l'ouverture du menu
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  


  const closeAllMenus = () => {
    setIsMenuOpen(false); // Ferme le menu
  };

  const handleOpenModal = (modalSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    closeAllMenus(); // Ferme tous les menus et notifications
    modalSetter(true); // Ouvre la modale cible
  };

  const handleClickOutside = (event: MouseEvent) => {
    const modale = document.querySelector('.modale');
    if (modale && !modale.contains(event.target as Node)) {
      closeAllMenus(); // Ferme tous les menus et notifications
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Bouton pour ouvrir/fermer le menu */}
            <Menu
              className="menu h-6 w-6 text-gray-500 mr-4 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <h1 className="text-3xl font-bold text-pink-200 gap-0">Menu</h1>
          </div>
          </div>


        {/* Menu déroulant */}
        {isMenuOpen && (
          <div className="menu absolute left-30 top-14 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <ul>
            <li
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOpenModal(setIsHelpModalOpen)}
              >
                Aide
              </li>
              <li
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOpenModal(setIsSettingsOpen)}
              >
                Paramètres
              </li>
               </ul>
 
          </div>
        )}
      </div>



      {/* Modales */}
      <PremiumModal isOpen={isPremiumModalOpen} onClose={() => setIsPremiumModalOpen(false)} />
      {isHelpModalOpen && (
      <HelpModal isOpen={isHelpModalOpen} onClose={() => setIsHelpModalOpen(false)} />

      )}
      {isSettingsOpen && (
        <SettingsModal open={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      )}

    </header>
  );
}
