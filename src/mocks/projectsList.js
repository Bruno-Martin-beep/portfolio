import superShoe from "../assets/super shoe.webp";
import shinji from "../assets/shinji.webp";
import upcoming from "../assets/upcoming.webp";

const projectsList = [
  {
    title: "upcoming",
    description:
      "E-commerce of 3D models developed with Next.js and PostgreSQL.",
    image: upcoming,
    linkLive: null,
    linkRepo: null,
    className: "",
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
  {
    title: "Memory game",
    description: "A mini-game of making pairs, where you can raise your score.",
    image: shinji,
    linkLive: "https://bruno-martin-beep.github.io/memory-game/",
    linkRepo: "https://github.com/Bruno-Martin-beep/memory-game",
    className: "proj_bg_blue",
  },
];

export default projectsList;
