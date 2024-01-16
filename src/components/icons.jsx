import { FiGithub } from "solid-icons/fi";
import { TbBrandDiscord } from "solid-icons/tb";
import { AiOutlineYoutube } from "solid-icons/ai";
import { RiLogosSpotifyLine } from "solid-icons/ri";

import { RiLogosLinkedinLine } from "solid-icons/ri";

export const Icons = () => {
  return (
    <div class="flex flex-wrap justify-center gap-x-3 lg:mt-6 mt-5">
      <a href="https://github.com/artiemis" target="_blank">
        <FiGithub class="h-8 w-8" />
      </a>
      <a href="https://github.com/artiemis" target="_blank">
        <RiLogosLinkedinLine class="h-8 w-8" />
      </a>

      <a
        class="group relative"
        href="https://discord.com/users/233399041478754314"
        target="_blank"
      >
        <TbBrandDiscord class="h-8 w-8" />
        <div class="absolute xl:w-[28rem] top-10 left-8 z-10 xl:group-hover:opacity-100 transition-opacity opacity-0 pointer-events-none">
          <img
            class="pointer-events-none"
            src="https://lanyard.cnrad.dev/api/233399041478754314?hideDiscrim=true&showDisplayName=true&bg=1e2030"
            alt="Discord Presence"
          />
        </div>
      </a>
      <a rel="me" href="https://infosec.exchange/@artie" target="_blank">
        <AiOutlineYoutube class="h-8 w-8" />
      </a>
      <a rel="me" href="https://infosec.exchange/@artie" target="_blank">
        <RiLogosSpotifyLine class="h-8 w-8" />
      </a>

      {/* 

      <a href="https://twitter.com/artiebun" target="_blank">
        <Icon class="hover:text-[#1DA1F2]" name="mdi:twitter" />
      </a>
      <a href="https://anilist.co/user/artie" target="_blank">
        <Icon class="hover:text-[#02A9FF]" name="simple-icons:anilist" />
      </a>
      <a href="https://megu.artie.moe" target="_blank">
        <Icon class="hover:text-[#C24448]" name="wizard-hat" />
      </a> */}
    </div>
  );
};
