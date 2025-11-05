import TechSkills from "../../data/TechSkillsData"
import SkillCard from "./SkillCard"

const Dropdown = () => {
    return(
        <>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
                Core Technologies and Programming Languages
            </div>
            {/* Container for skill cards */}
            <div className="collapse-content text-sm flex flex-row flex-wrap justify-center items-center gap-5">
                {TechSkills.map((skill:any) => {
                    return(
                        <SkillCard key={skill.id} name={skill.name} logo={skill.photo} colorClass={skill.colorClass} alt={skill.alt}/>
                    )
                })}
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
                Frameworks
            </div>
            <div className="collapse-content text-sm">
                Click on "Forgot Password" on the login page and follow the instructions sent to your email.
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
                Databases and Cloud
            </div>
            <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make changes.
            </div>
        </div>
         <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
                Developer Tools
            </div>
            <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make changes.
            </div>
        </div>
         <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
                Soft Skills
            </div>
            <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make changes.
            </div>
        </div>
    </>
    )
}

export default Dropdown;