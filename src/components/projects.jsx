import { For } from "solid-js";
import { createSignal } from "solid-js";

import harvest_image from "../assets/harvest.png";
import vg_image from "../assets/vg.jpg";
import ad_image from "../assets/ad.jpg";
import ap_image from "../assets/ap.jpg";
import "./projects.css";
import "@splidejs/splide/css";

import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export const Projects = () => {
  const [projects, setProjects] = createSignal([
    {
      name: "Harvest Festival",
      description: "A short and aesthetic RPG game made in Java",
      image: harvest_image,
      link: "https://www.youtube.com/watch?v=8uKiM5fHUTA",
    },
    {
      name: "Artpond",
      description: "An artist-focused social media platform made with Svelte.",
      image: ap_image,
      link: "https://github.com/maikyonn/greenteastudioswebsite",
    },
    {
      name: "Vainglory 3v3 Draft",
      description:
        "A Vainglory 3v3 Drafting tool made in React using the Vainglory API",
      image: vg_image,
      link: "https://na-3v3s-tournament-select.vercel.app/",
    },
    {
      name: "cal.moe",
      description:
        "A website dedicated to Cal Animage Alpha, a club at UC Berkeley",
      image: ad_image,
      link: "https://cal.moe/animedestiny",
    },
  ]);

  document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide").mount({ AutoScroll });
    var splide = new Splide(".splide", {
      drag: "free",
      perPage: 2,
      perMove: 1,
      autoScroll: {
        speed: 0.5,
      },
      wheel: true,
    });

    splide.mount();
  });
  return (
    <div class="flex flex-col justify-center items-center">
      <section
        class="splide mt-10 w-10/12"
        aria-label="Splide Basic HTML Example"
      >
        <div class="splide__track">
          <ul class="splide__list">
            <For each={projects()}>
              {(project) => (
                <li class="splide__slide px-1">
                  <a href={project.link}>
                    <div class="flex flex-col justify-center items-center">
                      <img
                        src={project.image}
                        alt="Shoes"
                        class="project-image"
                      />

                      <div class="items-center text-center p-4">
                        <h2 class="card-title font-extrabold">
                          {project.name}
                        </h2>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </section>
    </div>
  );
};
