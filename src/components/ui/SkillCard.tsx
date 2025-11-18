import { useState } from "react";

type SkillCardProps = {
  name: string;
  logo: string;
  colorClass: string;
  alt: string;
};

const SkillCard = ({ name, logo, colorClass, alt }: SkillCardProps) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <div
        className={`h-[84px] w-[76px] rounded-md shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.05] relative cursor-pointer select-none`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* wipe layer */}
        <div
          className={`absolute rounded-md bottom-0 left-0 p-[0.5px] h-full ${colorClass} transition-[width] duration-500 ease-out ${
            isHovered ? "w-full" : "w-0"
          }`}
        />

        {/* logo */}
        <img
          src={logo}
          alt={alt}
          className={`absolute inset-0 p-2 m-auto 
                transition-opacity duration-350 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
        />

        {/* label */}
        <p
          className={`font-sans absolute text-center inset-0 flex items-center justify-center text-sm font-extralight text-white transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {name}
        </p>
      </div>
    </>
  );
};

export default SkillCard;
