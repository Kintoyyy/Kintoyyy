import { CgVercel } from "react-icons/cg";
import { DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { BiSolidCoffee } from "react-icons/bi";
import {
  SiMikrotik,
  SiCisco,
  SiProxmox,
  SiCloudflare,
  SiDigitalocean,
  SiCloudways,
  SiBootstrap,
} from "react-icons/si";
import { FaGitAlt, FaNodeJs, FaReact, FaLaravel, FaJava } from "react-icons/fa6";
import { SiPostman, SiTailwindcss, SiMysql, SiArduino } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20">
      {/* =========== SKILLS TITLE =========== */}
      <h4 className="mt-20 text-4xl font-bold text-center dark:text-white">Technologies I Use.</h4>
      {/* =========== LIST OF SKILLS =========== */}
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiMikrotik className="text-2xl" /> Mikrotik
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiCisco className="text-2xl" /> Cisco
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiProxmox className="text-2xl" /> Proxmox
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaDocker className="text-2xl" /> Docker
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiCloudflare className="text-2xl" /> Cloudflare
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiDigitalocean className="text-2xl" /> Digital Ocean
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiCloudways className="text-2xl" /> Cloudways
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <CgVercel className="text-2xl" /> Vercel
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaGitAlt className="text-2xl" /> Git
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaLaravel className="text-2xl" /> Laravel
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaJava className="text-2xl" /> Java
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiArduino className="text-2xl" /> Adruino
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaReact className="text-2xl" /> React
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaNodeJs className="text-2xl" /> NodeJS
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiTailwindcss className="text-2xl" /> Tailwind
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiBootstrap className="text-2xl" /> Bootstrap
        </span>

        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiPostman className="text-2xl" /> Postman
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <DiMongodb className="text-2xl" /> MongoDB
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiMysql className="text-2xl" /> MySQL
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <BiSolidCoffee className="text-2xl" /> Alot of Coffee
        </span>
      </div>
    </section>
  );
}

export default Skills;
