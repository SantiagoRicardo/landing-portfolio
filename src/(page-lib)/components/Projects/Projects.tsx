import Portfolio from "../Portfolio";
import naranjoExpress from "../../../assets/naranjo-express.png";
import timebli from "../../../assets/timebli.png";
import almidonesElMana from "../../../assets/almidones-el-mana.png";

const Projects = () => {
  return (
    <div className="px-10 mt-32 text-lg text-white">
      <div className="flex flex-col text-white place-content-center">
        <h1 className="mb-10 text-6xl font-bold text-left md:text-8xl md:text-left">
          Mis <span className="text-[#4FFFBF]">proyectos</span>
        </h1>
        <p className="mb-5 text-lg font-normal leading-normal max-w-7xl md:text-left">
          Me encanta traducir ideas y diseños creativos en código limpio y
          eficiente, optimizando la usabilidad y el rendimiento de cada
          proyecto. Además de mis habilidades técnicas, soy un comunicador
          apasionado y colaborador en equipo. Disfruto trabajando junto a
          diseñadores, desarrolladores backend y stakeholders, asegurando una
          integración perfecta entre el diseño y la funcionalidad.
        </p>
      </div>
      <div className="md:flex gap-6 bg-[#2F2F2F] rounded-md p-5 ">
        <Portfolio
          imageSrc={naranjoExpress}
          text1={"Naranjo"}
          text2={"Express"}
        />
        <Portfolio imageSrc={timebli} text2={"timebli"} />
        <Portfolio
          imageSrc={almidonesElMana}
          text1={"Almidones"}
          text2={"El Mana"}
        />
      </div>
    </div>
  );
};

export default Projects;
