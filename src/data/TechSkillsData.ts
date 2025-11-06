type TechSkill = {
    id: number,
    name: string,
    photo: string,
    colorClass: string,
    alt: string
}

// languages
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import csharp from "../assets/csharp.png"
import js from "../assets/js.svg"
import kotlin from "../assets/kotlin.svg"
import php from "../assets/php.svg"
import python from "../assets/python.svg"
import mysql from "../assets/mysql.png"
import c from "../assets/c.png"

// frameworks and tools
import react from "../assets/react.svg"
import reactNative from "../assets/react-native.svg"
import dotnet from "../assets/NET.svg"
import tailwindcss from "../assets/tailwind.png"
import bootstrap from "../assets/bootstrap.png"
import jquery from "../assets/jquery.svg"
import flask from "../assets/flask.svg"


const TechSkills: TechSkill[] = [
  { id: 1, name: "HTML5", photo: html, colorClass: "bg-orange-500", alt: "HTML5 logo" },
  { id: 2, name: "CSS3", photo: css, colorClass: "bg-sky-600", alt: "CSS3 logo" },
  { id: 3, name: "JavaScript", photo: js, colorClass: "bg-yellow-400", alt: "JavaScript programming language logo" },
  { id: 4, name: "C#", photo: csharp, colorClass: "bg-fuchsia-800", alt: "C sharp programming language logo" },
  { id: 5, name: "PHP", photo: php, colorClass: "bg-indigo-800", alt: "PHP programming language logo" },
  { id: 6, name: "Python", photo: python, colorClass: "bg-green-700", alt: "Python programming language logo" },
  { id: 7, name: "Kotlin", photo: kotlin, colorClass: "bg-purple-800", alt: "Kotlin programming language logo" },
  { id: 8, name: "mySQL", photo: mysql, colorClass: "bg-sky-600", alt: "mySQL database query language logo" },
  { id: 9, name: "C", photo: c, colorClass: "bg-blue-900", alt: "C programming language logo" },


// Frameworks & Tools
{ id: 10, name: "React",        photo: react,        colorClass: "bg-cyan-500",      alt: "React JS logo" },
{ id: 11, name: "React Native", photo: reactNative,  colorClass: "bg-cyan-500",      alt: "React Native logo" },
{ id: 13, name: ".NET",       photo: dotnet,       colorClass: "bg-indigo-600",    alt: ".NET framework logo" },
{ id: 14, name: "Tailwind CSS",     photo: tailwindcss,  colorClass: "bg-sky-400",       alt: "Tailwind CSS logo" },
{ id: 15, name: "Bootstrap",    photo: bootstrap,    colorClass: "bg-purple-700",    alt: "Bootstrap logo" },
{ id: 16, name: "JQuery",       photo: jquery,       colorClass: "bg-sky-700",       alt: "jQuery logo" },
{ id: 17, name: "Flask",        photo: flask,        colorClass: "bg-neutral-900",   alt: "Flask logo" },


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