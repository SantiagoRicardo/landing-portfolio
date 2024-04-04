interface TechBoxProps {
  imageSrc: string;
}

const TechBox = ({ imageSrc }: TechBoxProps) => {
  return (
    <div className="relative bg-[#6880FF] rounded-3xl p-4 shadow-2xl">
      <img src={imageSrc} alt="Tecnologías" className="w-full h-auto" />
      <div className="absolute -bottom-12 -right-12 px-4 py-2 text-white bg-[#9CFF79] rounded-3xl">
        <div className="flex gap-2 item-center place-items-center">
          <h1 className="text-8xl text-[#232323] ">+8</h1>
          <div>
            <h1 className="text-2xl text-[#232323] column">Diferentes</h1>
            <h1 className="text-2xl text-[#232323] column">Tecnologías</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechBox;
