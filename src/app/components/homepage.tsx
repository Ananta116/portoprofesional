import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaCss3Alt, FaNode, FaWhatsappSquare, FaInstagramSquare, FaDiscord, FaGithubSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import Marquee from "react-fast-marquee";
import Link from "next/link";
export default function Home() {
  return (
    <div role="page">
      <div
        role="flex hero desc & photo"
        className="flex gap-[200px] max-sm:flex-col max-sm:gap-3 sm:flex-col sm:gap-3 lg:flex-row max-sm:mt-[-150px] sm:mt-[-150px] md:justify-center md:items-center sm:justify-center sm:items-center lg:ml-[120px] xl:ml-[80px]"
      >
        <section role="Hero Section" className="text-white">
          <div
            role="Hero information"
            className="ml-[150px] mt-[250px] max-sm:ml-0 sm:ml-0"
          >
            <h1 className="text-[50px] font-bold max-sm:text-[25px] max-sm:text-center sm:text-center lg:text-left lg:text-[50px] xl:text-[80px]">
              Hello im Ananta
            </h1>
            <div
              role="Span"
              className="mt-[-15px] text-[20px] max-sm:text-[15px] max-sm:mt-[-5px] max-sm:text-center sm:text-center lg:text-left lg:text-[20px] lg:ml-[5px] xl:text-[40px]"
            >
              <span>Im a</span>
              <span className="ml-2 font-bold text-lime-400">Full Stack</span>
              <span className="ml-2">Web Developer</span>
            </div>
            <div role="Brief Bio">
              <p className="font-light max-sm:text-[15px] max-sm:text-justify max-sm:p-2 max-sm:w-screen sm:w-screen md:w-screen md:p-2 md:text-justify lg:pr-[50px] lg:text-left lg:w-[400px] xl:w-[500px]">
                Full-stack web developer skilled in front-end and back-end
                development, creating scalable, high-performance applications.
                Expertise in modern frameworks, databases, APIs, and cloud
                deployment to deliver seamless user experiences.
              </p>
            </div>
          </div>
        </section>
        <section
          role="hero photo"
          className="max-sm:w-screen sm:w-[500px] md:w-[500px]  lg:w-[700px] lg:mt-[150px]"
        >
          <Image src={"/profile.png"} alt="" height={500} width={1000} />
        </section>
      </div>
      <section role="CTA">
        <div className="bg-lime-400 w-[200px] max-sm:w-screen mt-[-50px] max-sm:mt-5 sm:mt-10 sm:w-screen md:w-[200px] md:ml-[37vw] md:mt-10 lg:ml-[120px] lg:mt-[-50px] xl:ml-[150px] rounded-xl hover:cursor-pointer">
          <p className="black text-[25px] flex justify-center font-semibold">
            View Portofolio
          </p>
        </div>
      </section>
      <div role="About me">
        <section role="About me" className="">
          <div
            role="Title"
            className="px-[150px] max-sm:px-[5px] sm:px-[5px] lg:px-[120px] xl:px-[130px] mt-[50px]"
          >
            <h2 className="text-white font-bold text-[50px] max-sm:text-[30px]">
              About.
            </h2>
            <div className="flex max-sm:flex-col sm:flex-col md:flex-col lg:flex-row gap-5">
              <p className="text-white w-[600px] max-sm:pr-2 max-sm:w-screen max-sm:text-justify sm:w-screen sm:text-justify sm:pr-2 md:w-screen lg:w-[500px] xl:w-[700px]">
                I have always been fascinated by how websites work and how they
                can create seamless user experiences. My interest in web
                development grew as I explored HTML, CSS, JavaScript, Typescript
                and Tailwind, experimenting with building interactive web pages.
                Whether its front-end aesthetics or back-end functionality, I
                strive for collaboration, problem-solving, critical thinking,
                and adaptability to build scalable and intuitive web
                applications.
              </p>

              <div className="flex flex-col">
                <p className="text-white text-[30px] font-bold">Skill</p>
                <div
                  role="grid"
                  className="grid grid-cols-3 max-sm:grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 md"
                >
                  <div
                    role="background"
                    className="bg-zinc-900 rounded-md w-[130px] h-[30px] flex justify-center items-center gap-1"
                  >
                    <BiLogoTypescript size={"20px"} className="text-blue-500" />
                    <p className="text-white text-[15px]">Typescript</p>
                  </div>
                  <div
                    role="background"
                    className="bg-zinc-900 rounded-md w-[130px] h-[30px] flex justify-center items-center gap-1"
                  >
                    <RiJavascriptFill
                      size={"20px"}
                      className="text-orange-500"
                    />
                    <p className="text-white text-[15px]">Javascript</p>
                  </div>
                  <div
                    role="background"
                    className="bg-zinc-900 rounded-md w-[130px] h-[30px] flex justify-center items-center gap-1"
                  >
                    <FaReact size={"20px"} className="text-blue-500" />
                    <p className="text-white text-[15px]">React</p>
                  </div>
                  <div
                    role="background"
                    className="bg-zinc-900 rounded-md w-[130px] h-[30px] flex justify-center items-center gap-1"
                  >
                    <FaCss3Alt size={"20px"} className="text-blue-500" />
                    <p className="text-white text-[15px]">CSS</p>
                  </div>
                  <div
                    role="background"
                    className="bg-zinc-900 rounded-md w-[130px] h-[30px] flex justify-center items-center gap-1"
                  >
                    <FaHtml5 size={"20px"} className="text-orange-500" />
                    <p className="text-white text-[15px]">HTML</p>
                  </div>
                  <div
                    role="background"
                    className="bg-zinc-900 rounded-md w-[130px] h-[30px] flex justify-center items-center gap-1"
                  >
                    <FaNode size={"20px"} className="text-lime-400" />
                    <p className="text-white text-[15px]">NodeJS</p>
                  </div>
                  <div
                    role="background"
                    className="bg-zinc-900 rounded-md w-[130px] h-[30px] flex justify-center items-center gap-1"
                  >
                    <RiNextjsFill size={"20px"} className="text-white" />
                    <p className="text-white text-[15px]">NextJS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section role="Skills Section">
        <div className="flex xl:gap-[90px] max-sm:flex-col max-sm:gap-10 sm:flex-col md:flex-row md:gap-10 md:justify-center">
          <section
            role="Front-End"
            className="mt-[50px] px-[130px] max-sm:px-0 sm:px-0"
          >
            <div className="bg-zinc-900 w-[500px] h-[250px] max-sm:w-screen sm:w-screen md:w-[300px] xl:w-[500px] rounded-xl">
              <div className="flex flex-col justify-center items-center">
                <p className="text-white text-[50px] font-bold">Front-End</p>
                <p className="text-lime-400 text-[20px]">Technologies</p>
              </div>
              <div className="mt-[50px] flex gap-3">
                <Marquee gradient gradientColor="zinc-900" gradientWidth={20}>
                  <BiLogoTypescript size="80px" className="text-blue-400" />
                  <RiJavascriptFill size={"80px"} className="text-orange-400" />
                  <FaReact size={"80px"} className="text-blue-400" />
                  <FaCss3Alt size={"80px"} className="text-blue-400" />
                  <FaHtml5 size={"80px"} className="text-orange-400" />
                </Marquee>
              </div>
            </div>
          </section>
          <section role="Back-End" className="mt-[50px]">
            <div className="bg-zinc-900 w-[500px] h-[250px] max-sm:w-screen sm:w-screen md:w-[300px] xl:w-[500px] rounded-xl">
              <div className="flex flex-col justify-center items-center">
                <p className="text-white text-[50px] font-bold">Back-End</p>
                <p className="text-lime-400 text-[20px]">Technologies</p>
              </div>
              <div className="mt-[30px] flex justify-center">
                <FaNode size="100px" className="text-lime-400" />
              </div>
            </div>
          </section>
        </div>
      </section>
      <section role="Portofolio">
        <div className="mt-[100px] flex justify-center lg:justify-start lg:px-[50px]">
          <h3 className="font-bold text-[50px] text-white">Portofolio</h3>
        </div>
        <div role="padding" className="mt-[25px] px-[50px] max-sm:px-5">
          <div className="flex max-sm:flex-col sm:flex-col lg:flex-row gap-5">
            <Image
              className="w-[700px] rounded-xl"
              src={"/company.png"}
              alt=""
              width={500}
              height={500}
            />
            <div>
              <p className="text-white font-semibold text-[30px] max-sm:text-center sm:text-center lg:text-left ">
                BRABUS Inspired Company Profile
              </p>
              <p className="text-lime-400 font-bold text-[20px] max-sm:text-center sm:text-center lg:text-left ">
                React NextJS Tailwind Typescripts
              </p>
              <p className="text-white font-light mt-[25px] max-sm:text-justify sm:text-justify lg:text-left ">
                A car showroom wants to have a website similar to the one owned
                by BRABUS. The showroom requires an interactive website with
                animations and a minimalist theme to showcase its products
                effectively. The design, built using React on Next.js along with
                Tailwind CSS, enhances interactivity, user experience and
                ensures high performance for the website
              </p>
              <div className="flex max-sm:justify-center sm:justify-center lg:justify-start">
                <Link
                  href={"https://companyprofilekadek.vercel.app/"}
                  className="text-black font-bold text-[20px] mt-[50px] xl:mt-[80px] bg-lime-400 w-[100px] max-sm:w-[200px] sm:w-[200px] h-[30px] flex justify-center items-center rounded-xl"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col sm:flex-col lg:flex-row gap-5 mt-[50px]">
            <Image
              className="w-[700px] rounded-xl"
              src={"/blog.png"}
              alt=""
              width={500}
              height={500}
            />
            <div>
              <p className="text-white font-semibold text-[30px] max-sm:text-center sm:text-center lg:text-left ">
                Blog
              </p>
              <p className="text-lime-400 font-bold text-[20px] max-sm:text-center sm:text-center lg:text-left ">
                React NextJS Tailwind Typescripts
              </p>
              <p className="text-white font-light mt-[25px] max-sm:text-justify sm:text-justify lg:text-left ">
                A client aims to manage a blog that provides information on
                important news, entertainment, and sports. They want the blog to
                be easily accessible to everyone and simple to upload specific
                information. The front-end design1 developed using React on
                Next.js with TypeScript, incorporating Tailwind CSS for styling.
                The blog is designed to ensure a great user experience, high
                performance, efficient storage, and compatibility across all
                devices.
              </p>
              <div className="flex max-sm:justify-center sm:justify-center lg:justify-start">
                <Link
                  href={"https://todosblog.vercel.app/"}
                  className="text-black font-bold text-[20px] mt-[50px] xl:mt-[80px] bg-lime-400 w-[100px] max-sm:w-[200px] sm:w-[200px] h-[30px] flex justify-center items-center rounded-xl"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section role="Experience">
        <div className="px-[50px] mt-[100px]">
          <h4 className="text-white font-bold text-[50px] flex justify-center lg:justify-start">
            Experience
          </h4>
          <div className="bg-zinc-900 max-sm:h-[600px] lg:h-[250px] p-5 rounded-xl">
            <p className="text-white font-bold text-[30px]">
              Crispy Son (UMKM)
            </p>
            <p className="text-lime-400 font-bold text-[25px]">OWNER</p>
            <p className="text-white text-[20px]">
              February 2022 – August 2022
            </p>
            <p className="text-white text-[20px] font-light mt-[25px]">
              ● Recap all sales in Crispy Son (in Excel) ● Manage the inventory
              stock in Crispy Son (in Excel) ● Product Development in Crispy Son
              ● Design Planning in Crispy Son (in Adobe Photoshop) ● Manage
              Crispy Son employee’s skills ● Manage Crispy Son employee’s
              remuneration{" "}
            </p>
          </div>
          <div className="bg-zinc-900 max-sm:h-[600px] lg:h-[250px] p-5 rounded-xl mt-[20px]">
            <p className="text-white font-bold text-[30px]">
              Indomie Cuan (UMKM)
            </p>
            <p className="text-lime-400 font-bold text-[25px]">OWNER</p>
            <p className="text-white text-[20px]">
              February 2022 – November 2022
            </p>
            <p className="text-white text-[20px] font-light mt-[25px]">
              ● Recap all sales in Indomie Cuan (in Excel) ● Manage the
              inventory stock in Indomie Cuan (in Excel) ● Product Development
              in Indomie Cuan ● Design Planning in Indomie Cuan (in Adobe
              Photoshop) ● Manage Indomie Cuan employees skills ● Manage Indomie
              Cuan employees remuneration
            </p>
          </div>
          <div className="bg-zinc-900 max-sm:h-[600px] lg:h-[250px] p-5 rounded-xl mt-[20px]">
            <p className="text-white font-bold text-[30px]">Youtube</p>
            <p className="text-lime-400 font-bold text-[25px]">
              Content Creator
            </p>
            <p className="text-white text-[20px]">2021 – 2022</p>
            <p className="text-white text-[20px] font-light mt-[25px]">
              ● Recap all sales in Indomie Cuan (in Excel) ● Manage the
              inventory stock in Indomie Cuan (in Excel) ● Product Development
              in Indomie Cuan ● Design Planning in Indomie Cuan (in Adobe
              Photoshop) ● Manage Indomie Cuan employees skills ● Manage Indomie
              Cuan employees remuneration
            </p>
          </div>
          <div className="bg-zinc-900 max-sm:h-[600px] lg:h-[250px] p-5 rounded-xl mt-[20px]">
            <p className="text-white font-bold text-[30px]">
              PT Mahesa Seluler Raya
            </p>
            <p className="text-lime-400 font-bold text-[25px]">Internship</p>
            <p className="text-white text-[20px]">January 2024 – July 2024</p>
            <p className="text-white text-[20px] font-light mt-[25px]">
              ● Design UI/UX for company application ● Optimizing work with
              automasion ● Integrating Information Systems ● Designing
              application features communication between managers and field
              employees
            </p>
          </div>
        </div>
      </section>
      <section role="Contact" className="px-[50px]">
        <div className="flex justify-center mt-[50px]">
          <p className="text-white font-bold text-[30px]">CONTACT</p>
        </div>
        <div className="bg-zinc-900 h-[100px] rounded-xl flex justify-center gap-5">
          <Link href={"https://www.instagram.com/ananta___w?igsh=M2djaHNzNXd1cHRl&utm_source=qr"}>
            <FaInstagramSquare size={"100px"} className="text-pink-700" />
          </Link>
          <Link href={"//wa.me/<number>"}>
            <FaWhatsappSquare size={"100px"} className="text-lime-400" />
          </Link>
          <Link href={"https://discordapp.com/users/Altermis#3192"}>
            <FaDiscord size={"100px"} className="text-indigo-800" />
          </Link>
          <Link href={"https://github.com/Ananta116"}>
            <FaGithubSquare size={"100px"} className="text-white" />
          </Link>
        </div>
      </section>
      <section role="Testimonials">
        <div className="mt-10 flex gap-3 justify-center items-center max-sm:flex-col sm:flex-col">
          <div className="bg-zinc-900 text-white w-[800px] h-[200px] max-sm:w-[250px] max-sm:h-[300px] rounded-xl">
            <div className="flex mt-5 ml-5">
              <Image
                className="rounded-full"
                src={"/testi1.png"}
                alt="testimonial1"
                width={50}
                height={50}
              />
              <div className="flex flex-col ml-5">
                <p>Antoni</p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className="mt-5 ml-5">
              Excelent!. Their expertise in front-end and back-end development
              ensured a seamless, high-performance website. With great
              problem-solving skills and attention to detail, they delivered a
              user-friendly and efficient platform. Highly recommended!
            </p>
          </div>
          <div className="bg-zinc-900 text-white w-[800px] h-[200px] max-sm:w-[250px] max-sm:h-[300px] rounded-xl">
            <div className="flex mt-5 ml-5">
              <Image
                className="rounded-full"
                src={"/testi2.png"}
                alt="testimonial1"
                width={50}
                height={50}
              />
              <div className="flex flex-col ml-5">
                <p>Giorno</p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className="mt-5 ml-5">
              Deep understanding of both front-end and back-end development
              allowed us to build a fast, responsive, and scalable website. They
              are highly skilled, detail-oriented, and always deliver beyond
              expectations. Highly recommended for any web development project!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
