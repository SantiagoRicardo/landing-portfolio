import SpinningText from "../SpinningText";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-around font-bold text-white text-8xl">
        <h1 className="uppercase -rotate-90 ">front end</h1>
        <SpinningText
          text={
            "Creación de sitios excepcionales  Full-Stack WEB Developer  Desarrollo de alta calidad  "
          }
        />
        <h1 className="uppercase rotate-90 ">developer</h1>
      </div>
    </div>
  );
};

export default Hero;
