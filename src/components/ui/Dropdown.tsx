import TechSkills from "../../data/TechSkillsData"
import SkillCard from "./SkillCard"

const Dropdown = () => {
    return(
        <>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="checkbox" name="my-accordion-1" />
            <div className="collapse-title font-semibold">
                Core Technologies and Programming Languages
            </div>
            {/* Container for skill cards */}
            <div className="collapse-content text-sm flex flex-row flex-wrap justify-center items-center gap-5">
                {TechSkills.map((skill:any) => {
                    if (skill.id < 10 ){  
                    return(
                        <SkillCard key={skill.id} name={skill.name} logo={skill.photo} colorClass={skill.colorClass} alt={skill.alt}/>
                    )}
                })}
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
                Frameworks
            </div>
            {/* Container for skill cards */}
            <div className="collapse-content text-sm flex flex-row flex-wrap justify-center items-center gap-5 text-center">
                {TechSkills.map((skill:any) => {
                    if (skill.id >= 10 && skill.id <= 17 ){  
                    return(
                        <SkillCard key={skill.id} name={skill.name} logo={skill.photo} colorClass={skill.colorClass} alt={skill.alt}/>
                    )}
                })}
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
                Databases and Cloud
            </div>
            {/* Container for skill cards */}
            <div className="collapse-content text-sm flex flex-row flex-wrap justify-center items-center gap-5 text-center">
                {TechSkills.map((skill:any) => {
                    if (skill.id >= 18 && skill.id <= 22 ){  
                    return(
                        <SkillCard key={skill.id} name={skill.name} logo={skill.photo} colorClass={skill.colorClass} alt={skill.alt}/>
                    )}
                })}
            </div>
        </div>
         <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
                Developer Tools
            </div>
           {/* Container for skill cards */}
            <div className="collapse-content text-sm flex flex-row flex-wrap justify-center items-center gap-5 text-center">
                {TechSkills.map((skill:any) => {
                    if (skill.id >= 23 && skill.id <= 28 ){  
                    return(
                        <SkillCard key={skill.id} name={skill.name} logo={skill.photo} colorClass={skill.colorClass} alt={skill.alt}/>
                    )}
                })}
            </div>
        </div>
         <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
                Soft Skills
            </div>
            <div className="collapse-content text-sm">
                <ul list-style-type="dash" className = "ml-8 space-y-5">
                    <li> Leadership & Cross-functional Collaboration </li>
                    <li> Adaptability </li>
                    <li> Initiative </li>
                    <li> Communication </li>
                    <li> Presentation & Pitching</li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Dropdown;