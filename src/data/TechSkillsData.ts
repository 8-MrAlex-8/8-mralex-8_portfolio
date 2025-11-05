type TechSkill = {
    id: number,
    name: string,
    photo: string,
    colorClass: string,
    alt: string
}

const TechSkills: TechSkill[] = [
  { id: 1, name: "HTML5", photo: "../assets/html.png", colorClass: "bg-orange-500", alt: "HTML5 logo" },
  { id: 2, name: "CSS3", photo: "", colorClass: "bg-blue-600", alt: "CSS3 logo" },
  { id: 3, name: "JavaScript", photo: "", colorClass: "bg-yellow-400", alt: "JavaScript programming language logo" },
  { id: 4, name: "C#", photo: "", colorClass: "bg-fuchsia-800", alt: "C sharp programming language logo" },
  { id: 5, name: "PHP", photo: "", colorClass: "bg-indigo-800", alt: "PHP programming language logo" },
  { id: 6, name: "Python", photo: "", colorClass: "bg-green-700", alt: "Python programming language logo" },
  { id: 7, name: "Kotlin", photo: "", colorClass: "bg-purple-800", alt: "Kotlin programming language logo" },
  { id: 8, name: "SQL", photo: "", colorClass: "bg-sky-600", alt: "SQL database query language logo" },
  { id: 9, name: "C", photo: "", colorClass: "bg-gray-600", alt: "C programming language logo" },


  // // Frameworks & Tools
  // { id: 10, name: "react",      photo: "", colorClass: ""},
  // { id: 11, name: "react-native", photo: "", colorClass: ""},
  // { id: 12, name: "vuejs",      photo: "", colorClass: ""},
  // { id: 13, name: "dotnet",     photo: "", colorClass: ""},
  // { id: 14, name: "tailwind",   photo: "", colorClass: ""},
  // { id: 15, name: "bootstrap",  photo: "", colorClass: ""},
  // { id: 16, name: "jquery",     photo: "", colorClass: ""},
  // { id: 17, name: "flask",      photo: "", colorClass: ""},

  // // Databases & Cloud
  // { id: 18, name: "supabase",     photo: "", colorClass: ""},
  // { id: 19, name: "mongodb",      photo: "", colorClass: ""},
  // { id: 20, name: "mssql-server", photo: "", colorClass: ""},
  // { id: 21, name: "aws",          photo: "", colorClass: ""},
  // { id: 22, name: "google-cloud", photo: "", colorClass: ""},

  // // Developer Tools
  // { id: 23, name: "github",       photo: "", colorClass: ""},
  // { id: 24, name: "postman",      photo: "", colorClass: ""},
  // { id: 25, name: "vs-code",      photo: "", colorClass: ""},
  // { id: 26, name: "figma",        photo: "", colorClass: ""},
  // { id: 27, name: "notion",       photo: "", colorClass: ""},
  // { id: 28, name: "trello",       photo: "", colorClass: ""},
]

export default TechSkills