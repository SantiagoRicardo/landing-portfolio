interface SpinningTextProps {
  text: string;
  children: React.ReactNode;
}

const SpinningText = ({ text, children }: SpinningTextProps) => {
  const lenght = text.length;
  const deg = 360 / lenght;
  return (
    <div
      className="hidden text-base rounded-full hover:cursor-pointer"
      id="spinnging-text-wrapper"
    >
      <div
        //className="absolute w-full h-full m-0 animate-spin-slow"
        id="spinning-text"
      >
        <p className="text-base text-slate-200">
          {text.split("").map((word, i) => (
            <span
              className="top-0 left-1/2"
              key={i}
              style={{ transform: `rotate(${deg * i}deg) translateY(-150%)` }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
      {children}
    </div>
  );
};
export default SpinningText;
