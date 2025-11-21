export type ProjectItem = {
    id: number,
    name: string,
    type: string, // dev, data, math
    desc: string,
    techStack: string[]
}

const ProjectList: ProjectItem[] = [
    {
        id: 1,
        name: "RoomSync: A Smart Boardmate Powered by AI",
        type: "DEV",
        desc: ` A web platform that assists renters (mainly students and employees) find reliable apartments, 
            dorms, and boarding houses in Dumaguete City. It offers location-based filtering, 
            peer ratings, and personalized recommendations to help users match with suitable 
            living options faster. The system also integrates data analytics and visualizations 
            (such as heatmaps and charts) to reveal rental trends and availability — giving both 
            renters and property owners clearer, data-driven insights.`,
        techStack: ["React", "TypeScript", "Supabase"]
    },
    {
        id: 2,
        name: "Dockside Hotel: A Hotel Reservation Management Application",
        type: "DEV",
        desc: ` A hotel management web platform designed as a final project for the COMPSCI36 course. 
        It enables guests to search, book, and cancel room reservations, manage personal accounts, 
        and view their booking history. Administrators can manage room details and availability, 
        update or cancel guest bookings, and generate detailed booking reports by date, guest, 
        or room. The system also implements full CRUD functionality across all modules and follows 
        a four-week development cycle covering design, front-end creation, back-end integration, 
        and final presentation.`,
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
        id: 3,
        name: "LAPUK: A Garbage Segregation Aid Application",
        type: "DEV",
        desc: ` A hotel management web platform designed as a final project for the COMPSCI36 course. 
        It enables guests to search, book, and cancel room reservations, manage personal accounts, 
        and view their booking history. Administrators can manage room details and availability, 
        update or cancel guest bookings, and generate detailed booking reports by date, guest, 
        or room. The system also implements full CRUD functionality across all modules and follows 
        a four-week development cycle covering design, front-end creation, back-end integration, 
        and final presentation.`,
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
        id: 4,
        name: "DMP-Restaurant Management System",
        type: "DEV",
        desc: ` This Restaurant Management System was developed using Visual Basic and IBM DB2 to simulate 
        a Point-of-Sale environment for a small eatery or carinderia. It features complete CRUD 
        operations for managing customer, employee, and supplier data, an inventory management module 
        for tracking ingredients and food sales, and item delivery and release systems tied to 
        current stock levels. The system also includes basic sales analytics, allowing users to view 
        total and per-item sales, as well as filter results by specific dates. 
        Comprehensive documentation accompanies the project, covering the business scenario, 
        scope and limitations, business rules, ERD, sample data, data dictionary, and detailed table 
        definitions.`,
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
]

export default ProjectList;
