import {
  backend, dashboard, creator, css, docker, figma, git, goldmovies,
  html, javascript, mobile, mongodb, nodejs, phone3d, reactjs, redux, 
  tailwind, typescript, wait, web, 
} from '../assets'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
]

export const projects = [
  {
    name: "Dashboard",
    description:
      "Responsive dashboard with vanilla java script, and switching from dark to light theme.",
    tags: [
      {
        name: "Java Script",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/A1exsandro/template_html_css_js",
  },
  {
    name: "Gold Movies",
    description:
      "A responsive and practical website to stay on top of the latest releases of your favorite movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: goldmovies,
    source_code_link: "https://github.com/A1exsandro/movies-client",
  },
  {
    name: "Rect 3d",
    description:
      "A react app with 3d model and automatic scrolling. when you activate the scroll wheel, the model also appears.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: phone3d,
    source_code_link: "https://github.com/A1exsandro/phone3d",
  },
  {
    name: "Alex's Portifolio",
    description:
      "A website under development, using react-router-dom, threejs, motion and more. Responsiveness and color harmony.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wait,
    source_code_link: "https://github.com/A1exsandro/my_r3f",
  },
]

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  }, 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
]

export const networks = [ 
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/alexsandro-antônio-abaa5520b",
  },
  {
    name: "GitHub",
    link: "https://github.com/A1exsandro/my_r3f",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/alexsandroantonio3?igshid=MzNlNGNkZWQ4Mg",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/alexsandro.sc.7",
  },
]
