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
import mysql from "../assets/skills-stamp/mysql.png"
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
import mssql from "../assets/skills-stamp/mssql.svg"
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
  { id: 1, name: "HTML5", photo: html, colorClass: "bg-orange-500", alt: "HTML5 logo" },
  { id: 2, name: "CSS3", photo: css, colorClass: "bg-sky-600", alt: "CSS3 logo" },
  { id: 3, name: "JavaScript", photo: js, colorClass: "bg-yellow-400", alt: "JavaScript programming language logo" },
  { id: 4, name: "C#", photo: csharp, colorClass: "bg-fuchsia-800", alt: "C sharp programming language logo" },
  { id: 5, name: "PHP", photo: php, colorClass: "bg-indigo-800", alt: "PHP programming language logo" },
  { id: 6, name: "Python", photo: python, colorClass: "bg-green-700", alt: "Python programming language logo" },
  { id: 7, name: "Kotlin", photo: kotlin, colorClass: "bg-purple-800", alt: "Kotlin programming language logo" },
  { id: 8, name: "mySQL", photo: mysql, colorClass: "bg-sky-600", alt: "mySQL database query language logo" },
  { id: 9, name: "C", photo: c, colorClass: "bg-blue-900", alt: "C programming language logo" },


// Frameworks
{ id: 10, name: "React",        photo: react,        colorClass: "bg-cyan-500",      alt: "React JS logo" },
{ id: 11, name: "React Native", photo: reactNative,  colorClass: "bg-cyan-500",      alt: "React Native logo" },
{ id: 13, name: ".NET",         photo: dotnet,       colorClass: "bg-indigo-600",    alt: ".NET framework logo" },
{ id: 14, name: "Tailwind CSS", photo: tailwindcss,  colorClass: "bg-sky-400",       alt: "Tailwind CSS logo" },
{ id: 15, name: "Bootstrap",    photo: bootstrap,    colorClass: "bg-purple-700",    alt: "Bootstrap logo" },
{ id: 16, name: "JQuery",       photo: jquery,       colorClass: "bg-sky-700",       alt: "jQuery logo" },
{ id: 17, name: "Flask",        photo: flask,        colorClass: "bg-neutral-900",   alt: "Flask logo" },

  // Databases & Cloud
{ id: 18, name: "Supabase",     photo: supabase,     colorClass: "bg-emerald-600",  alt: "Supabase logo" },
{ id: 19, name: "MongoDB",      photo: mongodb,      colorClass: "bg-green-700",    alt: "MongoDB database logo" },
{ id: 20, name: "MSSQL Server", photo: mssql,        colorClass: "bg-rose-700",     alt: "Microsoft SQL Server logo" },
{ id: 21, name: "AWS",          photo: aws,          colorClass: "bg-amber-500",   alt: "Amazon Web Services logo" },
{ id: 22, name: "Google Cloud", photo: gcp,          colorClass: "bg-sky-500",      alt: "Google Cloud Platform logo" },

// Developer Tools
{ id: 23, name: "GitHub",    photo: github,   colorClass: "bg-neutral-900",  alt: "GitHub logo" },
{ id: 24, name: "Postman",   photo: postman,  colorClass: "bg-orange-500",   alt: "Postman API testing logo" },
{ id: 25, name: "VS Code",   photo: vscode,   colorClass: "bg-sky-600",      alt: "Visual Studio Code logo" },
{ id: 26, name: "Figma",     photo: figma,    colorClass: "bg-rose-600",     alt: "Figma logo" },
{ id: 27, name: "Notion",    photo: notion,   colorClass: "bg-neutral-800",  alt: "Notion workspace logo" },
{ id: 28, name: "Trello",    photo: trello,   colorClass: "bg-cyan-700",     alt: "Trello kanban board logo" },

]

export default TechSkills