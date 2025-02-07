import Image from "react-bootstrap/Image";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

export function Hero() {


  return (
    <div className="relative min-h-screen">
    <div className="second-container text-center my-2 p-6" id="second-container">
      <h1 className="text-gray-100 font-semibold text-9xl mt-4 mb-4" style={{fontStyle:'italic', fontFamily:'DM Serif Display'}}> 
        Cozette Fleurisson
      </h1>
      
      <h2 className="text-gray-100 font-semibold text-5xl mt-4 mb-4" style={{fontStyle:'italic', fontFamily:'DM Serif Display'}}> 
        Community Manager & Social Media Expert
        </h2>

        <Image src="/images/cosette.png" alt="Cozette Fleurisson" width={500} height={500} quality={100} className="hero-image rounded-full "/>
        </div>
    </div>  
  );
}