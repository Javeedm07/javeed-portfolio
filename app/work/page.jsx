"use client";

import { motion } from "framer-motion";
import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing my projects, skills, and experience. Designed with a clean and modern UI, this website highlights my work and allows visitors to easily navigate through different sections.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    num: "02",
    category: "full stack",
    title: "E-commerce Platform",
    description:
      "A full-fledged e-commerce platform that allows users to browse products, add them to their cart, and make purchases securely. This project includes user authentication, product management, and an integrated payment gateway.",
    stack: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://yourecommerce.com",
    github: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    num: "03",
    category: "Machine learning",
    title: "Customer Segmentation Model",
    description:
      "A machine learning project that utilizes clustering algorithms to segment customers based on purchasing behavior. This project helps businesses understand their customer base better and tailor marketing strategies accordingly.",
    stack: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "Scikit-learn" },
      { name: "Matplotlib" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://yourprojectlink.com",
    github: "https://github.com/yourusername/customer-segmentation",
  },
];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="mb-12">
            {index != 0 && (
              <div className="border border-white/20 m-[20px]"></div>
            )}
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
              <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div className="flex flex-col gap-[30px] h-[50%]">
                  <div className="text-8xl leading-none font-extrabold text-transparent text-outline mt-[10px]">
                    {project.num}
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                    {project.category} project
                  </h2>
                  <p className="text-white/60">{project.description}</p>
                  <ul className="flex gap-4">
                    {project.stack.map((item, index) => (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4">
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[50%]">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      fill
                      className="object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="border border-white/20 m-[20px]"></div> */}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;

// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// import Link from "next/link";
// import Image from "next/image";

// //components
// import WorkSliderBtns from "@/components/WorkSliderBtns";

// const projects = [
//   {
//     num: "01",
//     category: "frontend",
//     title: "Personal Portfolio Website",
//     description:
//       "A responsive personal portfolio website showcasing my projects, skills, and experience. Designed with a clean and modern UI, this website highlights my work and allows visitors to easily navigate through different sections.",
//     stack: [
//       { name: "HTML 5" },
//       { name: "CSS 3" },
//       { name: "JavaScript" },
//       { name: "React" },
//     ],
//     image: "/assets/work/thumb1.png",
//     live: "https://yourportfolio.com",
//     github: "https://github.com/yourusername/portfolio",
//   },
//   {
//     num: "02",
//     category: "full stack",
//     title: "E-commerce Platform",
//     description:
//       "A full-fledged e-commerce platform that allows users to browse products, add them to their cart, and make purchases securely. This project includes user authentication, product management, and an integrated payment gateway.",
//     stack: [
//       { name: "React" },
//       { name: "JavaScript" },
//       { name: "Node.js" },
//       { name: "Express" },
//       { name: "MongoDB" },
//     ],
//     image: "/assets/work/thumb2.png",
//     live: "https://yourecommerce.com",
//     github: "https://github.com/yourusername/ecommerce-platform",
//   },
//   {
//     num: "03",
//     category: "Machine learning",
//     title: "Customer Segmentation Model",
//     description:
//       "A machine learning project that utilizes clustering algorithms to segment customers based on purchasing behavior. This project helps businesses understand their customer base better and tailor marketing strategies accordingly.",
//     stack: [
//       { name: "Python" },
//       { name: "Pandas" },
//       { name: "Scikit-learn" },
//       { name: "Matplotlib" },
//     ],
//     image: "/assets/work/thumb3.png",
//     live: "https://yourprojectlink.com",
//     github: "https://github.com/yourusername/customer-segmentation",
//   },
// ];

// const Work = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
//     >
//       <div className="container mx-auto">
//         {projects.map((project, index) => (
//           <div key={index} className="mb-12">
//             <div className="flex flex-col xl:flex-row xl:gap-[30px]">
//               <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
//                 <div className="flex flex-col gap-[30px] h-[50%]">
//                   {/*---outline num---*/}
//                   <div className="text-8xl leading-none font-extrabold text-transparent text-outline mt-[10px]">
//                     {project.num}
//                   </div>
//                   {/*---project category---*/}
//                   <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
//                     {project.category} project
//                   </h2>

//                   {/*project description*/}
//                   <p className="text-white/60">{project.description}</p>
//                   {/*---stack---*/}
//                   <ul className="flex gap-4">
//                     {project.stack.map((item, index) => {
//                       return (
//                         <li key={index} className="text-xl text-accent">
//                           {item.name}
//                           {index !== project.stack.length - 1 && ","}
//                         </li>
//                       );
//                     })}
//                   </ul>
//                   {/*---buttons---*/}
//                   <div className="flex items-center gap-4">
//                     {/*---Live project button---*/}
//                     <Link href={project.live}>
//                       <TooltipProvider delayDuration={100}>
//                         <Tooltip>
//                           <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                             <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
//                           </TooltipTrigger>
//                           <TooltipContent>
//                             <p>Live Project</p>
//                           </TooltipContent>
//                         </Tooltip>
//                       </TooltipProvider>
//                     </Link>
//                     {/*---Github project button---*/}
//                     <Link href={project.github}>
//                       <TooltipProvider delayDuration={100}>
//                         <Tooltip>
//                           <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                             <BsGithub className="text-white text-3xl group-hover:text-accent" />
//                           </TooltipTrigger>
//                           <TooltipContent>
//                             <p>Github repository</p>
//                           </TooltipContent>
//                         </Tooltip>
//                       </TooltipProvider>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full xl:w-[50%]">
//                 <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
//                   {/*---overlay---*/}
//                   <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
//                   {/*---image---*/}
//                   <div className="relative w-full h-full">
//                     <Image
//                       src={project.image}
//                       fill
//                       className="object-cover"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/*---border---*/}
//             <div className="border border-white/20 mt-[20px]"></div>
//           </div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Work;
