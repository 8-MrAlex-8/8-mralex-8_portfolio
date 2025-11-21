import educationData from "../../data/EducationData.ts";

const EducCard = () => {
  return (
    <section className="flex flex-wrap justify-center items-stretch gap-8 mt-8">
      {educationData.map((edu) => (
        <div
          key={edu.id}
          className={`
            w-[75dvw]
            md:w-[40dvw]
            flex-wrap 
            ${edu.bgColor} 
            rounded-2xl 
            shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
            backdrop-blur-[20px] 
            border
            ${edu.borderColor} 
            transition-transform duration-300 
            hover:scale-105
            hover:shadow-xl
            ${
              edu.id == 1
                ? "hover:shadow-rose-800/60"
                : edu.id == 4
                ? "hover:shadow-cyan-800"
                : "hover:shadow-amber-400/30"
            }
        `}
        >
          <div className="card-body text-gray-300 p-6">
            {/* Badge */}
            <span
              className={`
                badge badge-md 
                ${edu.badgeColor} 
                text-white
              `}
            >
              {edu.level}
            </span>

            {/* Title & Batch */}
            <div className="flex flex-col justify-start items-start mt-2 gap-1">
              <h2 className="text-2xl font-bold text-white">{edu.school}</h2>
              {edu.batch && (
                <span className={`text-lg font-semibold ${edu.subtitleColor}`}>
                  {edu.batch}
                </span>
              )}
            </div>

            {/* Awards */}
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {edu.awards.map((item) => (
                <li key={item} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 mt-0.5 text-emerald-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EducCard;
