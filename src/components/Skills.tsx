import Dropdown from "./ui/Dropdown"

const Skills = () => {
    return(
        <div id = "skills" className = "min-h-screen pt-12 md:pt-24 pb-12 md:pb-0 px-10 w-full md:px-16 gap-8">
            <div className="text-left mb-10">
                <h2 className="text-4xl font-bold">Skills</h2>
                <p className="text-md md:text-md mt-2 italic">Your resident all-rounder's kit.</p>
            </div>
            <Dropdown />
        </div>
    )
}

export default Skills;