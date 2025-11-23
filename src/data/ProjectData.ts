export type ProjectItem = {
    id: number,
    thumbnail: string,
    name: string,
    type: string, // DEV, DATA, MATH
    short_desc: string,
    long_desc: string,
    techStack: string[]
}

const ProjectList: ProjectItem[] = [
    {
        id: 1,
        thumbnail: "",
        name: "RoomSync: A Smart Boardmate Powered by AI",
        type: "DEV",
        short_desc: "A roommate-matching platform with peer ratings and location-based filtering.",
        long_desc: `RoomSync is a web application designed to simplify apartment, dorm, and boarding-house roommate matching. 
        Targeted at students and young professionals, the platform enables users to filter living arrangements by location, 
        amenities, and peer reviews. It includes a rating system where boardmates can leave feedback, and a recommendation 
        engine that suggests compatible living partners based on preferences and past behavior. Built with React and TypeScript, 
        it integrates Supabase for persistent user data. The UI emphasizes usability and responsive design for both mobile and desktop, 
        demonstrating full-stack development, data modeling, and state management skills.`,
        techStack: ["React Native", "Expo Go", "Tailwind CSS", "JavaScript", "TypeScript", "Supabase"]
    },
    {
        id: 2,
        thumbnail: "/dockside-thumbnail.png",
        name: "Dockside Hotel: A Hotel Reservation Management Application",
        type: "DEV",
        short_desc: "A web platform for hotel bookings, room management, and reporting.",
        long_desc: `Dockside Web is a hotel management platform that allows guests to search, book, and cancel reservations, manage personal accounts, 
        and view booking history. Administrators can manage room details, availability, and generate booking reports by date, guest, or room. 
        The system implements full CRUD functionality across all modules and follows a structured development cycle. Built with HTML, CSS, 
        JavaScript, PHP, and MySQL, it demonstrates full-stack web development, database integration, and practical application of front-end and back-end skills.`,
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
        id: 3,
        thumbnail: "/lapuk-thumbnail.png",
        name: "LAPUK: A Garbage Segregation Aid Application",
        type: "DEV",
        short_desc: "A web app to help users segregate and track waste for recycling and sustainability.",
        long_desc: `LAPUK is a user-facing application designed to assist with garbage segregation. Users can categorize waste 
        (organic, recyclable, hazardous), log daily disposal, and track statistics on their waste habits. Built with Kotlin, the frontend shows effort on clarity and accessibility, 
        while backend integration with Flask allows persistent data storage and analytics. This project showcases skills in front-end architecture, state management, 
        and data visualization for environmental and social impact.`,
        techStack: ["Kotlin", "Jetpack Compose", "Python", "Flask", "Tailwind CSS"]
    },
    {
        id: 4,
        thumbnail: "/rps-thumbnail.png",
        name: "RPS Minus-One",
        type: "DEV",
        short_desc: "A creative twist on the classic game removing one move for added strategy.",
        long_desc: `RPS Minus-One is a variation of Rock-Paper-Scissors where one of the traditional moves is removed, 
        adding strategic depth. Implemented with JavaScript, HTML, and CSS, it demonstrates DOM manipulation, state management, 
        game logic, and UI feedback handling. This project highlights problem-solving, interactive front-end development, 
        and creative algorithmic thinking.`,
        techStack: ["HTML", "CSS", "JavaScript", "Vercel"]
    },
    {
        id: 5,
        thumbnail: "/rmj-thumbnail.png",
        name: "React Mood Journal",
        type: "DEV",
        short_desc: "A mood-tracking journaling app to reflect on emotions over time.",
        long_desc: `React Mood Journal allows users to log daily entries with associated moods, reflecting on their emotional trends. 
        Built with React, TypeScript, and Vite, the application stores data locally for persistence and features a clean, responsive interface. 
        Users can revisit past entries, filter by mood, and track personal trends. This project demonstrates single-page application 
        development, state management, and creating thoughtful user experiences.`,
        techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"]
    },
    {
        id: 6,
        thumbnail: "",
        name: "DMP Restaurant Management System",
        type: "DEV",
        short_desc: "A full-featured restaurant POS and inventory management system.",
        long_desc: `The DMP Restaurant Management System simulates a real-world restaurant point-of-sale, employee management, inventory tracking, 
        and reporting system. Users can manage customer, employee, and supplier data; track ingredient stock; and generate sales analytics 
        by item or date. Built with Visual Basic and IBM DB2, it demonstrates database integration, CRUD operations, and business logic implementation. 
        Comprehensive documentation covers the business scenario, data models, ERDs, and workflow, showcasing practical enterprise software development skills.`,
        techStack: ["Visual Basic", "IBM DB2", "SQL"]
    }
]

export default ProjectList;
