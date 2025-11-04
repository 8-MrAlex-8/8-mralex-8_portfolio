import TechSkills from "../data/TechSkillsData"

const Skills = () => {
    return(
        TechSkills.map((skill:any) => {
            return(
                <li>{skill.name}</li>
            )
        })
    )
}

export default Skills;