import SpinningText from "../SpinningText";
import TechBox from "../TechBox";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen md:relative md:flex-row">
      <div className="w-full p-5 text-3xl font-bold text-white md:flex justify-evenly md:text-5xl">
        <TechBox imageSrc={"./src/assets/santiago-image.png"} />
        {/* <div>
            <h1 className="uppercase">front end</h1>
            <h1 className="uppercase">front end</h1>
          </div> */}
        <div>
          <SpinningText
            text={
              "Creación de sitios excepcionales  Full-Stack WEB Developer  Desarrollo de alta calidad  "
            }
          >
            <h1 className="text-[#232323] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Permiteme presentarme
            </h1>
          </SpinningText>
        </div>
        <div className="mt-5 space-y-3 text-5xl uppercase md:text-8xl">
          <h1>frontend</h1>
          <h1>developer</h1>
          <div className="md:flex">
            <ul className="flex space-x-2 text-2xl md:ml-2 md:text-2xl item-center">
              <li>React JS</li>
              <li className="text-[#FFFFFF]">•</li>
              <li>NextJS</li>
              <li className="text-[#FFFFFF]">•</li>
            </ul>

            <ul className="flex space-x-2 text-2xl md:ml-2 md:text-2xl item-center">
              <li>TailWind</li>
              <li className="text-[#FFFFFF]">•</li>
              <li>Zod</li>
              <li className="text-[#FFFFFF]">•</li>
              <li>tRPC</li>
            </ul>
          </div>

          <p className="text-sm normal-case md:max-w-lg left-2">
            Desde mis inicios en el sector de la tecnología, siempre he buscado
            maximizar la calidad y reducir los tiempos en los desarrollos de mi
            productos, soy un fanático de cuidar cada color, imagen, tipografía
            y línea de código con la que trabajo. Veo en cada proyecto, una
            oportunidad para dar vida a diseños asombrosos que reflejen toda la
            esencia y alma de una marca. Trabajar conmigo es tener un trabajo de
            la más alta calidad asegurado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
