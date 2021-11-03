interface proyect {
  name: string;
  description: string,
  longDescription: string,
  id: string,
  img?: string,
  github?: string,
}

export const proyects: proyect[] = [
  {
    name: "Akira Ono",
    description:
      "Akira Ono, es una divertida bot de Discord, que te ayuda a moderar, administrar y divertir a tu server :D",
    longDescription: "Akira Ono, es un proyecto en el que estoy trabajando actualmente, usando tecnologias como Discord.js implementado con TypeScript",
    id: 'as23',
    img: '/AkiraOno.jpg'
  },
  {
    name: "Mi Portafolio Web",
    description: "Este es mi portafolio web, el cual es OPEN SOURCE.",
    longDescription: "Este portafolio web esta siendo hecho usando NextJS v12, React v18",
    id: '156ad',
    github: '/ELTITO310/nextjs-web-portafolio'
  }
];
