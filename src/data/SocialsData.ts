import fbIcon from "../assets/socials-stamp/facebook.svg";
import linkedinIcon from "../assets/socials-stamp/linkedin.svg";
import githubIcon from "../assets/socials-stamp/github.svg";

type Social = {
    id: number,
    label: string,
    link: string,
    image: string
}

const SocialsData : Social[] = [
  {
    id: 1,
    label: "Lanz Alexander Malto",
    link: "https://facebook.com/Lance.the.Gallade",
    image: fbIcon,
  },
  {
    id: 2,
    label: "Lanz Alexander Malto",
    link: "https://linkedin.com/in/lanz-alexander-malto",
    image: linkedinIcon,
  },
  {
    id: 3,
    label: "8-MrAlex-8",
    link: "https://github.com/8-MrAlex-8",
    image: githubIcon,
  },
];

export default SocialsData
