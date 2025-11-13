import ProjectCard from "../components/ui/ProjectCard"

const Projects = () => {
    return(
        <section id="projects">
            <div className = "min-h-screen pt-8 md:pt-24 pb-12 md:pb-0 px-10 w-full md:px-16 gap-8">
                <h3 className = "text-2xl font-bold pb-8">Projects</h3>
                <div className = "flex justify-center items-center gap-5">
                    <ProjectCard />
                </div>
            </div>
        </section>
    )
}

export default Projects
