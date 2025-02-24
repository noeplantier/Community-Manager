import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../index.css';

const MainTitle = () => {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleOpenSignupModal = () => setShowSignupModal(true);
  const handleCloseSignupModal = () => setShowSignupModal(false);



  useEffect(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.playbackRate = 0.8;
      
      const handleTimeUpdate = () => {
        const timeLeft = videoElement.duration - videoElement.currentTime;
        if (timeLeft < 0.1) {
          videoElement.currentTime = 0;
        }
      };

      videoElement.addEventListener('timeupdate', handleTimeUpdate);
      
      return () => {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Vidéo de fond */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="/videos/horloge.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Contenu principal */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center my-2 p-6" id="main-container">
        <h1 className="text-white text-9xl font-bold" id="main-title">
            {["Mots", "de", "maître"].map((word, wordIndex) => (
              <span key={wordIndex}>
                {Array.from(word).map((letter, letterIndex) => (
                  <span key={letterIndex} className="hover-effect">
                    {letter}
                  </span>
                ))}
                {wordIndex < 2 && " "}
              </span>
            ))}
          </h1>
          <h2 className="text-white font-semibold text-5xl mt-4">
            {["Community", "Management", "&", "Social", "Media", "Marketing"].map((word, wordIndex) => (
              <span key={wordIndex}>
                {Array.from(word).map((letter, letterIndex) => (
                  <span key={letterIndex} className="hover-effect-small">
                    {letter}
                  </span>
                ))}
                {wordIndex < 5 && " "}
              </span>
            ))}
          </h2>
          <div className="mt-8">


   
          <div className="button-container">
      <Button className="custom-button" onClick={handleOpenSignupModal} style={{marginTop: '20px'}}>
        Get Started
      </Button>
    </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default MainTitle;
