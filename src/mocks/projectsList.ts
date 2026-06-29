import superShoe from "../assets/super shoe.webp";
import solar from "../assets/solar.webp";
import solar3D from "../assets/solar_3d.webp";

type Project = {
  title: string;
  description: string;
  image: string;
  linkLive: string;
  linkRepo?: string;
  className: string;
};

// Design solar farms by placing panels, sculpting terrain, and navigating real-world obstacles.

const projectsList: Array<Project> = [
  {
    title: "Solar 3D",
    description:
      "Interactive solar-panel planning application featuring site layout and obstacle placement.",
    image: solar3D,
    linkLive: "https://bruno-martin-solar3d.vercel.app/",
    className: "proj_bg_blue",
  },
  {
    title: "Solar",
    description:
      "A roof selector where you can draw structures and connect them dynamically.",
    image: solar,
    linkLive: "https://bruno-martin-solar.vercel.app/",
    className: "proj_bg_green",
  },
  {
    title: "Zapaz",
    description:
      "A shoe editor, in which you can see the model in 360º and save the result.",
    image: superShoe,
    linkLive: "https://bruno-martin-beep.github.io/zapaz/",
    linkRepo: "https://github.com/Bruno-Martin-beep/zapaz",
    className: "",
  },
  // {
  //   title: "Memory game",
  //   description: "A mini-game of making pairs, where you can raise your score.",
  //   image: shinji,
  //   linkLive: "https://bruno-martin-beep.github.io/memory-game/",
  //   linkRepo: "https://github.com/Bruno-Martin-beep/memory-game",
  //   className: "proj_bg_blue",
  // },
];

export default projectsList;
