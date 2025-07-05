import user_info from "../../data/user_info.js";
import { FaLandmark } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { SiMikrotik, SiCisco } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { BiSolidWinkSmile } from "react-icons/bi";
function EducationAndExperience() {
  return (
    <section
      id="education-and-experience"
      className="flex flex-col gap-4 mx-4 mt-20 lg:mx-20 md:flex-row md:gap-2">
      {/* =========== EDUCATION =========== */}
      <div className="w-full md:w-[80%]">
        {/* =========== EDUCATION TITLE =========== */}
        <h4 className="flex items-center gap-2 mb-4 text-xl font-bold dark:text-white">
          <FaLandmark className="text-xl text-blue-800 dark:text-blue-500" />
          Education
        </h4>

        {/* =========== EDUCATION LIST =========== */}
        {user_info.education.map((edu, index) => {
          return (
            <div key={index}>
              {/* =========== DURATION =========== */}
              <div className="ps-2 my-2 first:mt-0 !mt-2">
                <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                  {edu.duration}
                </h3>
              </div>

              <div className="relative flex rounded-lg gap-x-3 group">
                <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                  <div className="relative z-10 flex items-center justify-center size-7">
                    <div className="bg-white border-2 rounded-full size-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                  </div>
                </div>

                <div className="p-2 pb-8 grow">
                  {/* =========== IMAGE AND SCHOOL NAME =========== */}
                  <h3 className="flex items-center font-semibold gap-x-2 text-zinc-800 dark:text-white">
                    <img className="rounded-full w-9 h-9" src={edu.image} alt="School Logo" />
                    <div className="leading-5">
                      {edu.school}
                      {/* =========== DEGREE =========== */}
                      <p className="text-xs font-normal text-zinc-600 dark:text-zinc-400">
                        {edu.degree}
                      </p>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}

        {/* =========== CERTIFICATES TITLE =========== */}
        <h4 className="flex items-center gap-2 mt-6 text-xl font-bold dark:text-white">
          <PiCertificateFill className="text-2xl text-blue-800 dark:text-blue-500" />
          Certificates
        </h4>

        <div data-hs-carousel='{"loadingClasses": "opacity-0"}' className="relative mt-4">
          <div className="relative w-full h-48 overflow-hidden bg-white rounded-lg hs-carousel dark:bg-gray-800">
            <div className="absolute top-0 bottom-0 flex transition-transform duration-700 opacity-0 hs-carousel-body start-0 flex-nowrap">
              {/* =========== CERTIFICATES LIST =========== */}
              {user_info.certificates.map((cert, index) => {
                return (
                  <div className="relative hs-carousel-slide" key={index}>
                    {cert.icon === "mikrotik" ? (
                      <SiMikrotik className="absolute text-3xl text-blue-500 right-5 top-4" />
                    ) : cert.icon === "cisco" ? (
                      <SiCisco className="absolute text-3xl text-blue-500 right-5 top-3" />
                    ) : cert.icon === "server" ? (
                      <FaServer className="absolute text-3xl text-blue-500 right-5 top-3" />
                    ): null}

                    <div className="flex items-center justify-center h-full p-6 bg-gray-100 dark:bg-neutral-900">
                      <div className="hs-tooltip [--placement:bottom] inline-block">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-center text-gray-800 hs-tooltip-toggle dark:text-white hover:text-blue-800 hover:dark:text-blue-500">
                          {/* =========== CERTIFICATE NAME =========== */}
                          <p className="px-6 font-bold transition duration-700 ">{cert.title}</p>
                          {/* =========== CERTIFICATE DESCRIPTION =========== */}
                          <p className="px-6 text-sm transition duration-700 ">
                            {cert.description}
                          </p>
                        </a>

                        {/* =========== TOOLTIP TEXT =========== */}
                        <span
                          className="absolute z-10 invisible inline-block px-2 py-1 text-xs font-medium transition-opacity bg-white border rounded shadow-sm opacity-0 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                          role="tooltip">
                          Open Certificate
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10">
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10">
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </button>

          {/* =========== CAROUSEL PAGINATION =========== */}
          <div className="absolute flex justify-center space-x-2 hs-carousel-pagination bottom-3 start-0 end-0">
            {user_info.certificates.map((cert, index) => {
              return (
                <span
                  className="border border-gray-400 rounded-full cursor-pointer hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"
                  key={index}></span>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========== EXPERIENCE =========== */}
      <div className="w-full" id="experience">
        {/* =========== EXPERIENCE TITLE =========== */}
        <h4 className="flex items-center gap-2 mb-4 text-xl font-bold dark:text-white">
          <FaBuildingUser className="text-2xl text-blue-800 dark:text-blue-500" />
          Experience
        </h4>

        <div className="md:h-[480px] md:overflow-y-scroll scroll-smooth">
          {/* =========== EXPERIENCE LIST =========== */}
          {user_info.experience.map((exp, index) => {
            return (
              <div key={index}>
                <div className="ps-2 my-2 first:mt-0 !mt-2">
                  <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                    {exp.duration}
                  </h3>
                </div>

                <div className="relative flex rounded-lg gap-x-3 group">
                  <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                    <div className="relative z-10 flex items-center justify-center size-7">
                      <div className="bg-white border-2 rounded-full size-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                    </div>
                  </div>

                  <div className="p-2 pb-8 grow">
                    {/* =========== COMPANY NAME =========== */}
                    <a
                      className="flex items-center font-semibold gap-x-2 text-zinc-800 dark:text-white"
                      href={exp.website ? exp.website : "#experience"}>
                      <img className="rounded-full w-9" src={exp.image} alt="Company Logo" />
                      <div className="leading-5">
                        {exp.company}
                        {/* =========== POSITION =========== */}
                        <p className="text-xs font-normal text-zinc-600 dark:text-zinc-400">
                          {exp.position}
                        </p>
                      </div>
                    </a>

                    <ul className="mt-2 list-disc list-inside text-zinc-800 dark:text-white">
                      {/* =========== DESCRIPTION LIST =========== */}
                      {exp.descriptions.map((desc, index) => {
                        return (
                          <li className="flex space-x-3" key={index}>
                            <svg
                              className="flex-shrink-0 size-4 mt-0.5 text-blue-800 dark:text-blue-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                              {desc}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EducationAndExperience;
