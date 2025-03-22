import blobHeart from "../assets/blobheart.png";

export const Centerpiece = () => {
  return (
    <div class="text-center mt-24">
      <h1 class="group text-ctp-pink font-semibold lg:text-5xl text-4xl hover:scale-110 transition duration-50">
        hiya, I'm{" "}
        <span class="text-ctp-flamingo relative">
          Michael
          {/* <span class="absolute lg:bottom-[3.25rem] bottom-10 z-50 lg:text-xl text-lg lg:left-7 left-4 text-ctp-lavender opacity-0 group-hover:opacity-80 hover:opacity-50 transition duration-50">
            /ˈarti/
          </span> */}
        </span>{" "}
        <img
          class="align-top lg:w-12 w-10 inline-block pointer-events-none select-none"
          src={blobHeart}
          alt="blob heart"
        />
      </h1>
      <p class="lg:text-2xl text-xl lg:mt-4 mt-2 hover:scale-110 transition duration-50">
        a developer with a passion for art & design
      </p>
    </div>
  );
};
