import SpinningText from "../SpinningText";
import TechBox from "../TechBox";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen m-0 mb-10 -mt-20">
      <div className="flex items-center justify-center w-full font-bold text-white text-8xl">
        <h1 className="absolute uppercase -rotate-90 -left-36">front end</h1>
        <div className="flex gap-28">
          <TechBox imageSrc={"./src/assets/santiago.png"} />
          <div className="flex items-center justify-center space-x-4">
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
        </div>

        <h1 className="absolute uppercase rotate-90 -right-36">developer</h1>
      </div>
    </div>
  );
};

export default Hero;
