import facebook from "../../../assets/SocialMedia/facebook.svg";
import instagram from "../../../assets/SocialMedia/instagram.svg";
import Linkedin from "../../../assets/SocialMedia/Linkedin.svg";
import x from "../../../assets/SocialMedia/X.svg";

const Footer = () => {
  return (
    <footer className="bg-[#666666] text-white p-6">
      <div className="container items-center mx-auto md:flex">
        <div className="gap-3">
          <h1 className="flex justify-center gap-2 text-4xl font-bold text-center text-white md:text-5xl">
            Santiago<span className="text-[#4FFFBF]"> Ricardo</span>
          </h1>
          <p>sricardodev@gmail.com</p>
          <p>+57 310 665 1486</p>
          <div className="flex gap-3">
            <img src={x} alt="loading..." />
            <img src={facebook} alt="loading..." />
            <img src={instagram} alt="loading..." />
            <img src={Linkedin} alt="loading..." />
          </div>
        </div>
        <div className="gap-3 md:ml-80">
          <h2 className="mb-2 text-lg font-bold text-white">Conóceme</h2>
          <ul>
            <li>
              <a href="#inicio" className="text-white hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#sobre-mi" className="text-white hover:underline">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-white hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
