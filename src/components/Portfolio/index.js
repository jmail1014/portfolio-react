import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Case Tracker",
      description:
        "This application is a kanban for a company to use to track employee Covid cases. The kanban is organized with cases under the catagories of pending and completed. The user will register login information and then be able to utilize the Kanban within the application.",
      image: "case-tracker-project.png",
      technologies: [
        "Node.js",
        "Express.js",
        "Handlebars.js",
        "MySQL and Sequelize ORM",
        "Heroku",
        "Express-session and cookies",
      ],
      github: "https://github.com/JosephJoeyJoe/Case-Tracker",
      deployed: "https://fathomless-cliffs-14331.herokuapp.com/",
    },
    {
      name: "Habit Social",
      description:
        "A habit tracker built with the MERN stack that connects people by encouraging each other's goals.",
      image: "habit-social-login.png",
      technologies: ["MERN", "GraphQL", "Jsonwebtoken, Heroku"],
      github: "https://github.com/jmail1014/portfolio",
      deployed: "https://jmail1014.github.io/portfolio/",
    },
    {
      name: "Password Generator",
      description:
        "A random password generator that uses JavaScript to prompt the user for criteria to generate a password for their use.",
      image: "password-generator-project.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jmail1014/password-generator",
      deployed: "https://jmail1014.github.io/password-generator/",
    },
    {
      name: "Food and Drink App",
      description:
        "This application looks for one food and one drink recipe based on the users defined preferences. The preferences are type of alcohol, cook time and protein. It utilizes web APIs to gather this information.",
      image: "food-drink-project.png",
      technologies: ["APIs", "Pure.css", "HTML", "JavaScript"],
      github: "https://github.com/afebre1027/food-drink-app",
      deployed: "https://afebre1027.github.io/food-drink-app/",
    },
  ];

  return (
    <div className="portfolio">
      <div className="container">
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
