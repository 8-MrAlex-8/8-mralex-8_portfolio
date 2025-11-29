export type ProjectItem = {
    id: number,
    thumbnail: string,
    name: string,
    type: string, 
    short_desc: string,
    long_desc: string,
    techStack: string[]
}

const NdaProjectList: ProjectItem[] = [
    {
        id: 1000,
        thumbnail: "/license-tracking.png",
        name: "License Tracking and Inventory Tool",
        type: "DEV",
        short_desc: `An internal workflow tool that manages resource records within the team, including features for managing groups.`,
        long_desc:  `An internal workflow tool that supports tracking, organizing, and updating resource records within the team, 
        including features for listing items, viewing details, and managing groups.`,
        techStack: ['HTML/Bootstrap CSS/JS', 'mySQL', 'jQuery', 'Vue.js', 'DataTables', "Material UI"]
    },
]