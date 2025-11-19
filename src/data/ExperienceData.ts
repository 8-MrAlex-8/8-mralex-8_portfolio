export type ExperienceItem = {
    id: number;
    company: string;
    position: string;
    date: string;
    compactDescription: string[];
    fullDescription: string;
    tech: string[];
};

export type ContestItem = {
    id: number;
    title: string;
    position: string;
    date: string;
    badges?: string[];
    compactDescription: string;
    fullDescription: string;
    readLink?: {
        text: string;
        url: string;
    };
    skills: string[];
};

export const ExperienceData: ExperienceItem[] = [
    {
        id: 1,
        company: "Indra Philippines, Inc.",
        position: "Intern, Innovation Management Team",
        date: "June 2025 - July 2025",
        compactDescription: ["Resolved 30% of the team's total backlog tasks across development, automation, and UI/UX workstreams over a 280-hour internship by contributing to internal tool enhancements and maintenance requests: \n→ Developed full-stack web applications for internal tools using core web technologies (HTML5, CSS3, JavaScript, PHP), Bootstrap, and jQuery to improve design and functionality.\n→ Analyzed internal datasets and built automated data pipelines using Python to streamline data processing.\n→ Supported the development of an automated attachment-extraction tool with MS Power Automate, eliminating 100% of related manual work.\n→ Redesigned a legacy application with Figma, applying industry-standard UI/UX principles."],
        fullDescription: "At Indra, I contributed to internal development under the Innovation Management Team, rendering 280 hours and helping the team resolve 30% of their outstanding tasks.\n\nI did this by building full-stack internal apps using HTML/CSS/JavaScript/PHP, Bootstrap, jQuery, and some Vue.js. Here, I also built automated ETL pipelines in streamline data processing, and created a simple Linear Regression model using Python. For the model, I migrated the logic into PHP for integration into a separate system.\n\nAdditionally, I redesigned a legacy interface in Figma and supported workflow automation using MS Power Automate. Throughout the internship, I worked within an Agile/Scrum environment, adapted to the team's MVC architecture, and delivered meaningful improvements to multiple internal projects.\n\nThe main challenge I faced was interacting closely with the people I was working with, and the steps I took to resolve this challenge certainly helped me socialize professionally with my teammates and expand my network. I am also happy to say that I was taken in by a team with plenty of similarities as I, which made things a whole lot easier and the work more enjoyable.",
        tech: ["HTML/CSS/JavaScript", "PHP", "Bootstrap", "Vue.js", "jQuery", "MySQL", "Python", "Figma", "MS Power Automate"],
    },

    {
        id: 2,
        company: "WPH Digital Pte. Ltd. Academy",
        position: "Summer Bootcamp Batch 1 Participant",
        date: "June 2024 - July 2024",
        compactDescription: ["Completed an intensive full-stack engineering program focused on C#, ASP.NET Core, HTML/CSS/JS, Tailwind, jQuery, and SQLite, including security (IIS) and cloud fundamentals (AWS).","Built a C# console application & full-stack ASP.NET MVC web application as capstone projects for the bootcamp.","Recognitions: Top 5 Overall, Elite 8 Awardee (all weeks)."],
        fullDescription: "I completed an intensive full-stack engineering program focused on C#, ASP.NET Core, HTML, CSS, JavaScript, Tailwind, jQuery, and SQLite, with additional training in security concepts using IIS and foundational cloud practices under AWS. The bootcamp combined fast-paced lessons, daily Kahoot quizzes, and hands-on coding activities that reinforced each topic through repetition and practical application.\n\nAcross the program, I finished 23 individual assignments and 3 collaborative projects, allowing me to build both technical depth and teamwork experience. As part of the capstone requirements, I developed two major projects: a C# console game, which strengthened my understanding of object-oriented programming and clean code structure, and a full-stack ASP.NET MVC to-do application, where I implemented database integration, routing, CRUD functionality, and a user-friendly interface.\n\nThroughout the bootcamp, I consistently performed at the top of the cohort, earning the Elite 8 Award every week and ultimately ranking as one of the Top 5 participants overall for performance, consistency, and engagement.",
        tech: ["HTML/CSS/JavaScript", "PHP", "Bootstrap", "Vue.js", "jQuery", "MySQL", "Python", "Figma", "MS Power Automate"],
    },
];

export const ContestData: ContestItem[] = [
    {
        id: 1,
        title: "AI.DEAS for Impact 2025: AI for Developing Ethical and Applicable Solutions",
        position: "Product & Pitch Lead",
        date: "September 2025",
        badges: ["Top 5"],
        compactDescription: "Led product ideation and system-design efforts for Axolert — an AI public-health monitoring concept — and delivered the technical pitch, earning Top 5 out of 30 teams in the regional competition.",
        fullDescription: "As Product & Pitch Lead in AI.DEAS for Impact 2025, I aided brainstorming sessions and faced against 30+ teams to earn a spot in the regional pitching competition by shaping Axolert, a public-health AI solution that digitizes and centralizes medical reports, detects anomalies, forecasts resource shortages, and delivers real-time alerts.\n\nIn this 2-day hackathon, we had some introductory exposure to Google Cloud and had plenty of talks with industry professionals regarding the tech landscape of today. Some challenges we faced included aligning technical possibilities with real-world needs under tight deadlines, which we resolved via detailed interviews and effective consultation with industry professionals invited to the event.\n\nThrough the team's efforts, we managed to secure the Top 5 spot overall in this event.",
        readLink: {
            text: "SU team places 5th in reg'l AI hackathon with public health solution 'Axolert'",
            url: "https://su.edu.ph/su-team-places-5th-in-regl-ai-hackathon-with-public-health-solution-axolert/",
        },
        skills: ["Google Cloud", "Pitching and Presentation Ability", "Strategic Leadership", "Team Coordination", "Stakeholder Engagement"],
    },
    {
        id: 2,
        title: "AI.DEAS for Impact 2024: AI for Innovation and Social Impact",
        position: "Product & Pitch Lead",
        date: "June 2024",
        badges: ["1st Runner-Up"],
        compactDescription: "Led requirements discovery to identify agricultural challenges and design an AI-automated irrigation solution. Also, pitched the solution to business and government stakeholders, earning 1st Runner-Up in the competition.",
        fullDescription: "In AI.DEAS for Impact 2024, as Product & Pitch Lead, I facilitated ideation and guided the team in developing a prototype for an AI-enabled irrigation system integrating weather data, predictive analytics, and sensor monitoring to optimize water usage and improve crop yield. The concept also included social media-inspired information sharing between users, allowing for quicker updates.\n\nThe competition evaluated innovation, business feasibility, and presentation to government workers and stakeholders; key challenges included translating technical concepts into practical solutions and communicating them clearly. Also, the conceptualization of the business models and pricing strategies for the prototype.\n\nThrough the team's efforts, we managed a podium finish—1st Runner-Up—for this competition.",
        readLink: {
            text: "SU CCS clinches 1st runner-up in AI pitching competition",
            url: "https://su.edu.ph/su-ccs-clinches-1st-runner-up-in-ai-pitching-competition/",
        },
        skills: ["Pitching and Presentation Ability", "Strategic Leadership", "Team Coordination", "Requirements Elicitation"],
    },
    {
        id: 3,
        title: "1st PSITE Central Visayas Provincial Hackathon",
        position: "Programmer",
        date: "March 2024",
        badges: ["1st Runner-Up"],
        compactDescription: "Contributed to the development of, and pitched to Talleco Inc. professionals, an AI-based job portal prototype using React, Next.js, and Tailwind CSS. Earned 1st Runner-Up in the hackathon.",
        fullDescription: "In the 1st PSITE Hackathon, I contributed to the development of an AI-based job portal prototype using React, Next.js, and Tailwind CSS, while also pitching the solution to professionals from Talleco, Inc.\n\nThe unique part of our concept was that it took inspiration from dating apps which allowed for a much faster experience on the end of the hiring manager and staff. On the other hand, this encouraged prospect employees to put their best foot forward and show off what they were proud of most in their professional career.\n\nIn this competition, the team managed to achieve 1st Runner-Up.",
        readLink: {
            text: "Confederates Student Council -- PSITE Central Visayas Hackathon",
            url: "https://www.facebook.com/ConfederatesStudentCouncil/posts/pfbid0TkT8TbCPJrXHzck4QNdHgNKRbhRM5S4F29WNw5XPoLoLg5rDYDeea4p7cJC3T8g9l",
        },
        skills: ["HTML/CSS/JavaScript", "Next.js/React.js", "Pitching and Presentation Ability"],
    },
];

export default ExperienceData;