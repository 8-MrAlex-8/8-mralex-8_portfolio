type Project = {
    id: number,
    projectName: string,
    projectType: string,
    projectDesc: string,
    techStack: string[]
}

const ProjectList : Project[] = [
    {
        id: 1, 
        projectName: "RoomSync: A Smart Boardmate Powered by AI", 
        projectType: "Development", 
        projectDesc:
        ` A web platform that assists renters (mainly students and employees) find reliable apartments, 
            dorms, and boarding houses in Dumaguete City. It offers location-based filtering, 
            peer ratings, and personalized recommendations to help users match with suitable 
            living options faster. The system also integrates data analytics and visualizations 
            (such as heatmaps and charts) to reveal rental trends and availability — giving both 
            renters and property owners clearer, data-driven insights.`,
        techStack: ["React", "TypeScript", "Supabase"]
        //GH: https://github.com/gr2ws/roomsync-app
    },
    {
        id: 2, 
        projectName: "Dockside Hotel: A Hotel Reservation Management Application", 
        projectType: "Development", 
        projectDesc:
        ` A hotel management web platform designed as a final project for the COMPSCI36 course. 
        It enables guests to search, book, and cancel room reservations, manage personal accounts, 
        and view their booking history. Administrators can manage room details and availability, 
        update or cancel guest bookings, and generate detailed booking reports by date, guest, 
        or room. The system also implements full CRUD functionality across all modules and follows 
        a four-week development cycle covering design, front-end creation, back-end integration, 
        and final presentation.`,
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
        //GH: https://github.com/gr2ws/dockside-web
    },
    {
        id: 3, 
        projectName: "LAPUK: A Garbage Segregation Aid Application", 
        projectType: "Development", 
        projectDesc:
        ` A hotel management web platform designed as a final project for the COMPSCI36 course. 
        It enables guests to search, book, and cancel room reservations, manage personal accounts, 
        and view their booking history. Administrators can manage room details and availability, 
        update or cancel guest bookings, and generate detailed booking reports by date, guest, 
        or room. The system also implements full CRUD functionality across all modules and follows 
        a four-week development cycle covering design, front-end creation, back-end integration, 
        and final presentation.`,
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
        //SDP: "https://docs.google.com/document/d/1a40g_m25N2EsL0GQii6O4hKf7OfWjS2yzJgdWBvdya0/edit?usp=sharing"
        //SDD: "https://docs.google.com/document/d/1N09sRcyXiiVnaHQ9y97kRKUa-qUmuYlj1TShKkM4g-s/edit?usp=sharing"
        //YT: "https://youtu.be/M-RykgPWVXY"
        //FE GH: https://github.com/gr2ws/lapuk-app-frontend
        //BE GH: https://github.com/gr2ws/lapuk-app-backend
    },
    {
        id: 4, 
        projectName: "DMP-Restaurant Management System", 
        projectType: "Development", 
        projectDesc:
        ` This Restaurant Management System was developed using Visual Basic and IBM DB2 to simulate 
        a Point-of-Sale environment for a small eatery or carinderia. It features complete CRUD 
        operations for managing customer, employee, and supplier data, an inventory management module 
        for tracking ingredients and food sales, and item delivery and release systems tied to 
        current stock levels. The system also includes basic sales analytics, allowing users to view 
        total and per-item sales, as well as filter results by specific dates. 
        Comprehensive documentation accompanies the project, covering the business scenario, 
        scope and limitations, business rules, ERD, sample data, data dictionary, and detailed table 
        definitions.`,
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
        //SDP: "https://docs.google.com/document/d/1a40g_m25N2EsL0GQii6O4hKf7OfWjS2yzJgdWBvdya0/edit?usp=sharing"
        //SDD: "https://docs.google.com/document/d/1N09sRcyXiiVnaHQ9y97kRKUa-qUmuYlj1TShKkM4g-s/edit?usp=sharing"
        //YT: "https://youtu.be/M-RykgPWVXY"
        //FE GH: https://github.com/gr2ws/lapuk-app-frontend
        //BE GH: https://github.com/gr2ws/lapuk-app-backend
    },

]

export default ProjectList