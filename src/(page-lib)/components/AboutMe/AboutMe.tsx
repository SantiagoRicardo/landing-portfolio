import { FaReact } from "react-icons/fa";
import {
  SiAstro,
  SiFlutter,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiTypescript,
} from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="justify-between m-5 mt-32 md:mt-3 md:flex">
      <div className="-mt-10 right-48 absolute w-2/5 h-2/4 md:bg-[#4FFFBF] rounded-3xl"></div>
      <div className="flex flex-col text-white md:ml-10 place-content-center">
        <h1 className="mb-10 text-6xl font-bold text-left md:text-8xl">
          Sobre Mí
        </h1>
        <p className="max-w-2xl mb-5 text-base font-normal leading-normal">
          Desarrollador web hábil y experimentado con una sólida formación en
          diversas tecnologías, incluyendo Next.js, JavaScript, TypeScript,
          Node.js, Tailwind CSS, tRPC y React.js.
          <p>
            Me apasiona crear aplicaciones web excepcionales que satisfagan las
            necesidades de mis clientes. Presto mucha atención a los detalles y
            me comprometo a entregar trabajos de alta calidad en el plazo
            acordado y dentro del presupuesto. Trabajo bien en equipo y siempre
            estoy dispuesto a colaborar con otros para alcanzar nuestros
            objetivos comunes. Continuamente estoy aprendiendo nuevas
            habilidades y manteniéndome al día con los últimos avances en mi
            campo para asegurarme de ofrecer los mejores resultados a mis
            clientes.
          </p>
        </p>
      </div>

      <div className="md:relative h-screen w-full md:m-0 md:w-1/2 p-10 bg-[#2F2F2F] rounded-3xl overflow-auto md:rounded-l-3xl max-h-full">
        <h1 className="mb-8 text-2xl font-semibold text-gray-700 dark:text-gray-300 md:text-4xl">
          Frameworks
        </h1>
        <div className="grid justify-between grid-cols-2 py-10 font-medium text-white md:text-center md:flex md:flex-wrap">
          <span>
            <SiNextdotjs className="w-16 h-16" />
            <p>Next JS</p>
          </span>

          <span>
            <SiAstro className="w-16 h-16 p-3 text-white rounded-md bg-slate-900" />
            <p>Astro JS</p>
          </span>

          <span>
            <SiFlutter className="w-16 h-16 text-sky-500" />
            <p>Flutter</p>
          </span>
        </div>
        <h1 className="mb-8 text-2xl font-semibold text-gray-700 dark:text-gray-300 md:text-4xl">
          Lenguajes de <span className="text-[#4FFFBF]">programación</span>
        </h1>
        <div className="grid justify-between grid-cols-2 py-10 font-medium text-white md:text-center md:flex md:flex-wrap">
          <span>
            <SiJavascript className="w-16 h-16 text-yellow-300" />
            <p>JavaScript</p>
          </span>

          <span>
            <SiTypescript className="w-16 h-16 text-sky-700" />
            <p>TypeScript</p>
          </span>

          <span>
            <SiPython className="w-16 h-16 text-sky-500" />
            <p>Python</p>
          </span>
        </div>
        <h1 className="mb-8 text-2xl font-semibold leading-loose text-gray-700 dark:text-gray-300 md:text-4xl">
          Bases de datos
        </h1>
        <div className="items-center justify-between py-10 font-medium text-white md:text-center md:flex md:flex-wrap">
          <div className="w-24 h-24">
            <img src="./src/assets/mysql.svg" alt="Tecnologías" />
            <p>MySQL</p>
          </div>

          <span>
            <img
              src="./src/assets/MongoDB.png"
              alt="Tecnologías"
              className="h-12 w-15"
            />
            <p>MongoDB</p>
          </span>

          <span>
            <img
              src="./src/assets/postgresql.svg"
              alt="Tecnologías"
              className="w-20 h-20"
            />
            <p>PostgreSQL</p>
          </span>
        </div>
        <h1 className="mb-8 text-2xl font-semibold leading-loose text-gray-700 dark:text-gray-300 md:text-4xl">
          Liberías
        </h1>
        <div className="items-center justify-between py-10 font-medium text-white md:text-center md:flex md:flex-wrap">
          <div className="w-25 h-25">
            <FaReact className="w-16 h-16 text-[#00D8FF]" />
            <p>React JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
