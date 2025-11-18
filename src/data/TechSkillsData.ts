type TechSkill = {
    id: number,
    name: string,
    photo: string,
    colorClass: string,
    alt: string
}

// languages
import html from "../assets/skills-stamp/html.svg"
import css from "../assets/skills-stamp/css.svg"
import csharp from "../assets/skills-stamp/csharp.png"
import js from "../assets/skills-stamp/js.svg"
import kotlin from "../assets/skills-stamp/kotlin.svg"
import php from "../assets/skills-stamp/php.svg"
import python from "../assets/skills-stamp/python.svg"
import mysql from "../assets/skills-stamp/mysql.svg"
import c from "../assets/skills-stamp/c.png"

// frameworks
import react from "../assets/skills-stamp/react.svg"
import reactNative from "../assets/skills-stamp/react-native.svg"
import dotnet from "../assets/skills-stamp/NET.svg"
import tailwindcss from "../assets/skills-stamp/tailwind.png"
import bootstrap from "../assets/skills-stamp/bootstrap.png"
import jquery from "../assets/skills-stamp/jquery.svg"
import flask from "../assets/skills-stamp/flask.svg"

// db and cloud
import supabase from "../assets/skills-stamp/supabase.svg"
import mongodb from "../assets/skills-stamp/mongo.svg"
import mssql from "../assets/skills-stamp/mssqls.svg"
import aws from "../assets/skills-stamp/aws.svg"
import gcp from "../assets/skills-stamp/gcp.svg"


// dev tools
import github from "../assets/skills-stamp/github.svg"
import postman from "../assets/skills-stamp/postman.svg"
import vscode from "../assets/skills-stamp/vscode.svg"
import figma from "../assets/skills-stamp/figma.svg"
import notion from "../assets/skills-stamp/notion.svg"
import trello from "../assets/skills-stamp/trello.svg"


const TechSkills: TechSkill[] = [
  { id: 1, name: "HTML5", photo: html, colorClass: "bg-gradient-to-br from-orange-500 to-red-600", alt: "HTML5 logo" },
  { id: 2, name: "CSS3", photo: css, colorClass: "bg-gradient-to-br from-sky-500 to-blue-700", alt: "CSS3 logo" },
  { id: 3, name: "JavaScript", photo: js, colorClass: "bg-gradient-to-br from-yellow-300 to-yellow-500", alt: "JavaScript programming language logo" },
  { id: 4, name: "C#", photo: csharp, colorClass: "bg-gradient-to-br from-fuchsia-700 to-purple-900", alt: "C sharp programming language logo" },
  { id: 5, name: "PHP", photo: php, colorClass: "bg-gradient-to-br from-indigo-700 to-violet-800", alt: "PHP programming language logo" },
  { id: 6, name: "Python", photo: python, colorClass: "bg-gradient-to-br from-blue-500 to-yellow-400", alt: "Python programming language logo" },
  { id: 7, name: "Kotlin", photo: kotlin, colorClass: "bg-gradient-to-br from-purple-700 to-pink-600", alt: "Kotlin programming language logo" },
  { id: 8, name: "mySQL", photo: mysql, colorClass: "bg-gradient-to-br from-sky-500 to-sky-700", alt: "mySQL database query language logo" },
  { id: 9, name: "C", photo: c, colorClass: "bg-gradient-to-br from-blue-800 to-blue-900", alt: "C programming language logo" },

  // Frameworks
  { id: 10, name: "React",        photo: react,        colorClass: "bg-gradient-to-br from-cyan-400 to-cyan-700", alt: "React JS logo" },
  { id: 11, name: "React Native", photo: reactNative,  colorClass: "bg-gradient-to-br from-cyan-400 to-cyan-700", alt: "React Native logo" },
  { id: 13, name: ".NET",         photo: dotnet,       colorClass: "bg-gradient-to-br from-indigo-500 to-violet-700", alt: ".NET framework logo" },
  { id: 14, name: "Tailwind CSS", photo: tailwindcss,  colorClass: "bg-gradient-to-br from-sky-300 to-sky-600", alt: "Tailwind CSS logo" },
  { id: 15, name: "Bootstrap",    photo: bootstrap,    colorClass: "bg-gradient-to-br from-purple-600 to-purple-800", alt: "Bootstrap logo" },
  { id: 16, name: "JQuery",       photo: jquery,       colorClass: "bg-gradient-to-br from-sky-600 to-blue-800", alt: "jQuery logo" },
  { id: 17, name: "Flask",        photo: flask,        colorClass: "bg-gradient-to-br from-neutral-800 to-neutral-900", alt: "Flask logo" },

  // Databases & Cloud
  { id: 18, name: "Supabase",     photo: supabase,     colorClass: "bg-gradient-to-br from-emerald-500 to-emerald-700", alt: "Supabase logo" },
  { id: 19, name: "MongoDB",      photo: mongodb,      colorClass: "bg-gradient-to-br from-green-600 to-green-800", alt: "MongoDB database logo" },
  { id: 20, name: "MSSQL Server", photo: mssql,        colorClass: "bg-gradient-to-br from-rose-600 to-rose-800", alt: "Microsoft SQL Server logo" },
  { id: 21, name: "AWS",          photo: aws,          colorClass: "bg-gradient-to-br from-amber-400 to-orange-600", alt: "Amazon Web Services logo" },
  { id: 22, name: "Google Cloud", photo: gcp,          colorClass: "bg-gradient-to-br from-sky-400 to-blue-600", alt: "Google Cloud Platform logo" },

  // Developer Tools
  { id: 23, name: "GitHub",    photo: github,   colorClass: "bg-gradient-to-br from-neutral-800 to-neutral-900", alt: "GitHub logo" },
  { id: 24, name: "Postman",   photo: postman,  colorClass: "bg-gradient-to-br from-orange-400 to-orange-600", alt: "Postman API testing logo" },
  { id: 25, name: "VS Code",   photo: vscode,   colorClass: "bg-gradient-to-br from-sky-500 to-blue-700", alt: "Visual Studio Code logo" },
  { id: 26, name: "Figma",     photo: figma,    colorClass: "bg-gradient-to-br from-rose-500 to-purple-600", alt: "Figma logo" },
  // { id: 27, name: "Notion",    photo: notion,   colorClass: "bg-gradient-to-br from-neutral-700 to-neutral-900", alt: "Notion workspace logo" },
  { id: 28, name: "Trello",    photo: trello,   colorClass: "bg-gradient-to-br from-cyan-600 to-blue-700", alt: "Trello kanban board logo" },
];


export default TechSkills