import facebook from "../../../assets/SocialMedia/facebook.svg";
import instagram from "../../../assets/SocialMedia/instagram.svg";
import Linkedin from "../../../assets/SocialMedia/Linkedin.svg";
import x from "../../../assets/SocialMedia/X.svg";

const Form = () => {
  return (
    <div className="flex flex-col items-center mt-28 w-full bg-[#2F2F2F] text-white text-center p-10">
      <h1 className="text-5xl font-medium md:text-8xl">Contáctame</h1>
      <div className="justify-center gap-2 mt-8 text-sm font-semibold md:flex">
        <p>sricardodev@gmail.com</p>
        <span className="text-[#FFFFFF]">•</span>
        <div className="flex justify-center gap-3">
          <img src={x} alt="loading..." />
          <img src={facebook} alt="loading..." />
          <img src={instagram} alt="loading..." />
          <img src={Linkedin} alt="loading..." />
        </div>
        <span className="text-[#FFFFFF]">•</span>
        <p>+57 310 665 1486</p>
      </div>
      <form
        className="font-medium mt-12 md:flex gap-6 bg-[#606060] text-left justify-center p-4 rounded-t-2xl"
        action=""
      >
        <div>
          <div>
            <label className="mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              className="w-full p-3 mb-4 text-black border-[#4FFFBF] rounded-md border-1"
            />
          </div>

          <div>
            <label className="mb-2">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              className="w-full p-3 mb-4 text-black border-[#4FFFBF] rounded-md border-1"
            />
          </div>
        </div>
        <div>
          <div>
            <label className="mb-2">¿Cómo puedo ayudarte?</label>
            <textarea
              name="message"
              placeholder="Escribe tu mensaje aquí"
              className="w-full p-3 text-black border-[#4FFFBF] rounded-md border-1"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="text-black font-medium bg-[#9CFF79] py-2 rounded-md px-12"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
