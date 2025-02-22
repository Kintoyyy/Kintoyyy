import user_info from "../../data/user_info.js";
import GitHubButton from "react-github-btn";
import { FaArrowCircleUp } from "react-icons/fa";

function Footer({ theme }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="justify-between p-4 text-center md:flex">
      {/* =========== GITHUB BUTTON =========== */}
      <GitHubButton
        className="self-center"
        href="https://github.com/Kintoyyy/Kintoyyy"
        data-color-scheme={theme}
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star Kintoyyy/Kintoyyy on GitHub">
        Star on Github
      </GitHubButton>
      {/* =========== USER COPYRIGHT =========== */}
      <p className="self-center mt-2 text-sm font-light text-center text-zinc-600 md:mt-0 dark:text-zinc-300">
        {user_info.footer}
      </p>
      {/* =========== SCROLL ON TOP BUTTON =========== */}
      <button
        onClick={() => scrollToTop()}
        className="flex self-center gap-2 mx-auto mt-2 text-sm font-light text-zinc-600 md:mt-0 dark:text-zinc-300 md:mx-0">
        <FaArrowCircleUp className="self-center text-blue-800 dark:text-blue-500" /> Go back to top
      </button>
    </footer>
  );
}

export default Footer;
