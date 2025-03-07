import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
export default function Home() {
  return (
    <div role="Portofolio" className="text-white">
      <section role="Hero Section" className="mt-[150px] ml-[150px]">
        <h1 className="subpixel-antialiased font-bold text-[70px]">
          Hello im Ananta
        </h1>
        <div className="mt-[-20px] font-light gap-2 text-[30px]">
          <span className="mr-2">Im a</span>
          <span className="text-lime-400 mr-2 font-semibold">Full Stack</span>
          <span>Web Developer</span>
          <p className="text-[15px] w-[600px]">
            Full Stack Web Developer with a passion for building scalable,
            high-performance web applications. Skilled in front-end and back-end
            development, API integration, and database management to deliver
            seamless user experiences. Transforming ideas into functional,
            efficient, and visually appealing digital solutions
          </p>
        </div>
        <button className="subpixel-antialiased mt-10 w-[200px] h-[50px] bg-lime-500 rounded-xl text-black font-bold text-[20px] hover:bg-lime-200 hover:cursor-pointer">
          View Portofolio
        </button>
      </section>
      <section role="About Me Section" className="">
        <div className="mt-[100px] flex">
          <div>
            <span className="ml-[150px] text-[60px] font-bold">About</span>
            <span className="text-[50px] text-lime-400">.</span>
          </div>
          <div className="bg-amber-50 w-[500px] h-[5px] mt-[50px]"></div>
        </div>
      </section>
      <section role="About me Desc">
        <div className="flex gap-8">
          <p className="w-[680px] ml-[150px] text-justify font-light">
            A passionate Full Stack Web Developer with a strong background in
            designing and building modern web applications. With experience in
            both front-end and back-end development, I specialize in creating
            scalable, high-performance solutions that enhance user experience.
            My journey into web development began with a deep curiosity for
            coding and problem-solving, leading me to master technologies like
            JavaScript, React, Node.js, and databases like MongoDB and
            PostgreSQL. I have worked on various projects, from dynamic websites
            to complex web applications, collaborating with teams to deliver
            functional and visually appealing digital solutions. Constantly
            exploring new technologies, I strive to stay ahead in the
            ever-evolving web development landscape.
          </p>
          <div className="flex flex-col">
            <h2 className="text-[30px] font-bold">Core Skill</h2>
            <div className="mt-5 grid grid-cols-3 gap-3 ">
              <div className="bg-lime-400 w-[120px] h-[30px] rounded-md flex gap-1 justify-center items-center">
                <RiReactjsLine size={25} className="text-blue-500" />
                <p className="text-black">React</p>
              </div>
              <div className="bg-lime-400 w-[120px] rounded-md flex gap-1 justify-center items-center">
                <SiNextdotjs size={25} className="text-black ml-1" />
                <p className="text-black">Next.JS</p>
              </div>
              <div className="bg-lime-400 w-[120px] rounded-md flex gap-1 justify-center items-center">
                <IoLogoNodejs size={25} className=" text-blue-500" />
                <p className="text-black">Node.JS</p>
              </div>
              <div className="bg-lime-400 w-[120px] rounded-md flex gap-1 justify-center items-center">
                <BiLogoTypescript size={25} className=" text-blue-500" />
                <p className="text-black">Typescript</p>
              </div>
              <div className="bg-lime-400 w-[120px] rounded-md flex gap-1 justify-center items-center">
                <RiJavascriptFill size={25} className=" text-orange-400" />
                <p className="text-black">Javascripts</p>
              </div>
            </div>
            <h3 className="text-[30px] font-bold mt-5">Key Values</h3>
            <div className="mt-5 grid grid-cols-3 gap-3 ">
              <div className="bg-lime-400 w-[120px] h-[30px] rounded-md flex gap-1 justify-center items-center">
                <p className="text-black">Problem-Solving</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
