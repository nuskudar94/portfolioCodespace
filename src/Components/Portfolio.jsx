/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Check out my Cloud Journey 🎉",
    description:
      "I am currently working on my Cloud Journey. I am learning Azure. I am also working on my DevOps skills.",
    url: "https://learn.microsoft.com/en-us/users/numanuskudar-3925/",
  },
  {
    title: "Movie Review Web Application",
    description:
      "Written in Java-Spring Boot, React, MongoDB.Includes movie search, review, and rating features with REST API.",
    url: "https://github.com/nuskudar94/MovieRating",
  },
  {
    title: "JSON Deserialization .NET, C#",
    description:
      "With the help of .NET framework, I have created a console application that deserializes JSON data into C# objects.",
    url: "https://github.com/nuskudar94/C-jsonDeseralizing",
  },
  {
    title: "What I`ve done with Java",
    description:
      "Parallel programming, data structures, algorithms, and more. I have created a repository to show my Java skills.",
    url: "https://github.com/nuskudar94/javaProjects",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
