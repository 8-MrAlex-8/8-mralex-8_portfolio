import TechSkills from "../../data/TechSkillsData"
import SkillCard from "./SkillCard"

const Dropdown = () => {
    return (
      <>
        <div className="space-y-2">
          
          {/* Technologies */}
          <div className="collapse collapse-arrow border border-base-200 bg-transparent rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-2xl">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">Core Technologies & Languages</div>
  
            <div className="collapse-content">
              <div className="flex flex-wrap justify-center items-center gap-6">
                {TechSkills.filter(skill => skill.id < 10).map(skill => (
                  <SkillCard key={skill.id} name={skill.name} logo={skill.photo} colorClass={skill.colorClass} alt={skill.alt}/>
                ))}
              </div>
            </div>
          </div>
  
          {/* Frameworks */}
          <div className="collapse collapse-arrow  border border-base-200 bg-transparent rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-2xl">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">Frameworks</div>
  
            <div className="collapse-content">
              <div className="flex flex-wrap justify-center items-center gap-6">
                {TechSkills.filter(skill => skill.id >= 10 && skill.id <= 17).map(skill => (
                  <SkillCard key={skill.id} name={skill.name} logo={skill.photo} colorClass={skill.colorClass} alt={skill.alt}/>
                ))}
              </div>
            </div>
          </div>
  
          {/* Databases */}
          <div className="collapse collapse-arrow  border border-base-200 bg-transparent rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-2xl">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">Databases & Cloud</div>
  
            <div className="collapse-content">
              <div className="flex flex-wrap justify-center items-center gap-6">
                {TechSkills.filter(skill => skill.id >= 18 && skill.id <= 22).map(skill => (
                  <SkillCard key={skill.id} name={skill.name} logo={skill.photo} colorClass={skill.colorClass} alt={skill.alt}/>
                ))}
              </div>
            </div>
          </div>
  
          {/* Developer Tools */}
          <div className="collapse collapse-arrow  border border-base-200 bg-transparent rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-2xl">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">Developer Tools</div>
  
            <div className="collapse-content">
              <div className="flex flex-wrap justify-center items-center gap-6">
                {TechSkills.filter(skill => skill.id >= 23 && skill.id <= 28).map(skill => (
                  <SkillCard key={skill.id} name={skill.name} logo={skill.photo} colorClass={skill.colorClass} alt={skill.alt}/>
                ))}
              </div>
            </div>
          </div>
  
          {/* Soft Skills */}
          <div className="collapse collapse-arrow  border border-base-200 bg-transparent rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-2xl">
            <input type="checkbox"/>
            <div className="collapse-title font-semibold">Soft Skills</div>
  
            <div className="collapse-content">
              <ul className="list-disc list-inside space-y-2 ml-3 marker:text-accent">
                <li>Leadership & Cross-functional Collaboration</li>
                <li>Adaptability</li>
                <li>Initiative</li>
                <li>Communication</li>
                <li>Presentation & Pitching</li>
              </ul>
            </div>
          </div>
  
        </div>
      </>
    )
  }
  

export default Dropdown;