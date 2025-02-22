import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <section id="hero" className="flex px-6 pt-24 pb-28 sm:pt-28 md:pt-44 lg:px-24">
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          <img
            src={user_info.main.photo}
            className="mb-6 rounded-full lg:hidden"
            alt="Daniel Shan Balico Graduation Picture"
          />

          {/* =========== TOOLTIP TEXT =========== */}
          <span
            className="absolute z-10 invisible inline-block px-2 py-1 text-xs font-medium transition-opacity bg-white border rounded shadow-sm opacity-0 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible dark:border-zinc-800 dark:bg-zinc-950 text-zinc-950 dark:text-white"
            role="tooltip">
            Yo! 👋 How are you doing? 🤔
          </span>
        </div>
        <div className="flex flex-wrap gap-2 align-center md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl">{user_info.main.role}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">{user_info.main.name}</h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 font-medium transition-all duration-300 border border-black rounded-xl hover:bg-blue-800 hover:text-white hover:border-blue-800 dark:border-white">
                Projects
              </a>
              <a
                href="#contact"
                className="flex gap-3 px-6 py-3 transition-all duration-300 hover:text-blue-800 dark:hover:text-blue-500 hover:gap-4">
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-[10%] transform rotate-3"
              src={user_info.main.photo}
              alt="Daniel Shan Balico Graduation Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
