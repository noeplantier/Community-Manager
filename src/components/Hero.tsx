import Image from "react-bootstrap/Image";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

export function Hero() {


  return (
    <div className="relative min-h-screen">
    <div className="second-container text-center my-2 p-6" id="second-container">
      <h1 className="text-gray-100 font-semibold text-9xl mt-4 mb-4" style={{fontStyle:'italic'}}>
        {["Cosette", "Fleurisson"].map((word, wordIndex) => (
          <span key={wordIndex}>
            {Array.from(word).map((letter, letterIndex) => (
              <span key={letterIndex} className="hover-effect">
                {letter}
              </span>
            ))}
            {wordIndex < 1 && " "}
          </span>
        ))}
      </h1>
      
      <h2 className="text-gray-100 font-semibold text-5xl mt-4 mb-4" style={{fontStyle:'italic', fontFamily:'DM Serif Display'}}>
        {["Community", "Manager", "&", "Social", "Media", "Expert"].map((word, wordIndex) => (
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

        <Image src="/images/cosette.png" alt="Cozette Fleurisson" width={500} height={500} quality={100} className="hero-image rounded-full "/>
        </div>
    </div>  
  );
}