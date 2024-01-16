import { For } from "solid-js";
import { createSignal } from "solid-js";

import harvest_image from "../assets/harvest.png";
import vg_image from "../assets/vg.jpg";
import "./projects.css";
export const Projects = () => {
  const [projects, setProjects] = createSignal([
    {
      name: "Harvest Festival",
      description:
        "About A short and aesthetic RPG game made in Java using STDDraw, a simple graphics engine made for educational purposes",
      image: harvest_image,
      link: "link.src",
    },
    {
      name: "Vainglory 3v3 Draft",
      description:
        "About A short and aesthetic RPG game made in Java using STDDraw, a simple graphics engine made for educational purposes",
      image: vg_image,
      link: "link.src",
    },
    {
      name: "Harvest Festival",
      description:
        "About A short and aesthetic RPG game made in Java using STDDraw, a simple graphics engine made for educational purposes",
      image: harvest_image,
      link: "link.src",
    },
    {
      name: "Harvest Festival",
      description:
        "About A short and aesthetic RPG game made in Java using STDDraw, a simple graphics engine made for educational purposes",
      image: harvest_image,
      link: "link.src",
    },
    {
      name: "Harvest Festival",
      description:
        "About A short and aesthetic RPG game made in Java using STDDraw, a simple graphics engine made for educational purposes",
      image: harvest_image,
      link: "link.src",
    },
    {
      name: "Harvest Festival",
      description:
        "About A short and aesthetic RPG game made in Java using STDDraw, a simple graphics engine made for educational purposes",
      image: harvest_image,
      link: "link.src",
    },
  ]);

  return (
    <div>
      <div class="project-carousel">
        <For each={projects()}>
          {(project) => (
            <div class="project">
              <figure class="px-10 pt-10">
                <img src={project.image} alt="Shoes" class="project-image" />
              </figure>

              <div class="card-body items-center text-center">
                <h2 class="card-title font-extrabold">{project.name}</h2>
                <p>{project.description}</p>
                {/* <div class="">
                  <button class="btn btn-primary">Visit</button>
                </div> */}
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
