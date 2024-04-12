interface PortfolioProps {
  imageSrc: string;
  text1?: string;
  text2?: string;
}

const Portfolio = ({ imageSrc, text1, text2 }: PortfolioProps) => {
  return (
    <div className="mt-2 bg-[#535353] rounded-md shadow-2xl">
      <img src={imageSrc} alt="loading..." />
      <div className="px-4 py-2 text-white rounded-3xl">
        <div className="gap-2 item-center place-items-center">
          <div className="gap-2 font-medium md:flex">
            <h1 className="text-2xl text-white">{text1}</h1>
            <h1 className="text-2xl text-[#9CFF79]">{text2}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
