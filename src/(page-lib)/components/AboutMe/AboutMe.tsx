import { SiAstro, SiFlutter, SiNextdotjs } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="justify-between md:flex">
      <div className="-mt-10 right-48 absolute w-2/5 h-2/4 bg-[#4FFFBF] rounded-3xl"></div>
      <div className="relative flex flex-col ml-10 text-white place-content-center">
        <h1 className="mb-10 font-bold text-left text-8xl md:text-left">
          Sobre Mí
        </h1>
        <p className="max-w-2xl mb-5 text-base font-normal leading-normal text-center md:text-left">
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

      <div className="relative h-screen w-full md:w-1/2 p-10 bg-[#2F2F2F] rounded-l-3xl">
        <h1 className="mb-8 text-lg font-semibold text-gray-700 dark:text-gray-300 md:text-4xl">
          Frameworks
        </h1>
        <div className="flex justify-between">
          <SiNextdotjs className="w-16 h-16 text-white" />
          <SiAstro className="w-16 h-16 p-3 text-white rounded-md bg-slate-900" />
          <SiFlutter className="w-16 h-16 text-sky-500" />
        </div>
        <h1 className="mb-8 text-lg font-semibold text-gray-700 dark:text-gray-300 md:text-4xl">
          Lenguajes de <span className="text-[#4FFFBF]">programación</span>
        </h1>
        <h1 className="mb-8 text-lg font-semibold leading-loose text-gray-700 dark:text-gray-300 md:text-4xl">
          Frameworks
        </h1>
      </div>
    </div>
  );
};

export default AboutMe;
