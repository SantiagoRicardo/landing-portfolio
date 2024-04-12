interface TechBoxProps {
  imageSrc: string;
  className?: string;
}

const TechBox = ({ imageSrc }: TechBoxProps) => {
  return (
    <div>
      <img src={imageSrc} alt="Tecnologías" className="md:-mt-24" />
      {/* <div className={`bg-[#6880FF] rounded-3xl shadow-2xl ${className}`}>
        <img src={imageSrc} alt="Tecnologías" className="bottom-0 left-0" />
        <div className="px-4 py-2 text-white bg-[#9CFF79] rounded-3xl">
          <div className="flex gap-2 item-center place-items-center">
            <h1 className="text-8xl text-[#232323] ">+8</h1>
            <div>
              <h1 className="text-2xl text-[#232323] column">Diferentes</h1>
              <h1 className="text-2xl text-[#232323] column">Tecnologías</h1>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TechBox;
