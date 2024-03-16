import React from "react";

const Projects = () => {
  return (
    <div className="px-10 mt-32 text-lg text-white">
      <div className="flex flex-col text-white place-content-center">
        <h1 className="mb-10 font-bold text-left text-8xl md:text-left">
          Mis <span className="text-[#4FFFBF]">proyectos</span>
        </h1>
        <p className="mb-5 text-lg font-normal leading-normal text-center max-w-7xl md:text-left">
          Me encanta traducir ideas y diseños creativos en código limpio y
          eficiente, optimizando la usabilidad y el rendimiento de cada
          proyecto. Además de mis habilidades técnicas, soy un comunicador
          apasionado y colaborador en equipo. Disfruto trabajando junto a
          diseñadores, desarrolladores backend y stakeholders, asegurando una
          integración perfecta entre el diseño y la funcionalidad.
        </p>
      </div>
      <div className="flex gap-6 bg-[#2F2F2F]">
        <div className="bg-[#535353]">Proyecto 1</div>
        <div className="bg-[#535353]">Proyecto 2</div>
        <div className="bg-[#535353]">Proyecto 3</div>
      </div>
    </div>
  );
};

export default Projects;
