import { useState } from "react"

type SkillCardProps = {
    name: string,
    logo: string,
    colorClass: string,
    alt: string
}

const SkillCard = ({name, logo, colorClass, alt}: SkillCardProps) => {
  const [isHovered, setHovered] = useState(false)

  return (
    <>
        <div
            className="w-[24dvw] md:w-[12dvw] lg:w-[8dvw] h-[18dvh] sm:h-[28dvh] md:h-[22dvh] border rounded-md border-gray-300 shadow-lg overflow-hidden relative cursor-pointer select-none"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
        {/* wipe layer */}
        <div
            className={`absolute bottom-0 left-0 w-full ${colorClass} transition-[height] duration-350 ease-out ${
            isHovered ? "h-full" : "h-0"
            }`}
        />

        {/* logo */}
        <img
            src={logo}
            alt={alt}
            className={`absolute inset-0 py-3 px-1 m-auto transition-opacity duration-350 ${
            isHovered ? "opacity-0" : "opacity-100"
            }`} 
        />

        {/* label */}
        <p
            className={`font-sans absolute inset-0 flex items-center justify-center text-lg font-extralight text-white transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
            }`}
        >
            {name}
        </p>
        </div>
        
    </>
  )
}

export default SkillCard
