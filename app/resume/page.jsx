"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "Highly motivated and experienced individual with a strong passion for technology, seeking to leverage my skills and expertise to drive innovation and growth.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Javeed Mahammad",
    },
    {
      fieldName: "Email",
      fieldValue: "durgijaveed07@gmail.com",
    },
    {
      fieldName: "DOB",
      fieldValue: "7 Dec, 2003",
    },

    {
      fieldName: "Phone",
      fieldValue: "(+91) 9391531765",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Telugu",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I've gained hands-on experience through internships, working on real-world projects and developing my technical skills. These opportunities allowed me to contribute to impactful solutions while learning and growing in tech.",
  items: [
    {
      company: "Indian Servers",
      position: "Machine Learning Intern",
      duration: "May 2023 - July 2023",
    },
    {
      company: "Data Valley",
      position: "Full stack Intern",
      duration: "June 2024 - August 2024",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Pursuing academic excellence, with a focus on Computer Science, from SSC to Undergraduate level.",
  items: [
    {
      institution: "JNTU kakinada",
      degree: "Bachelor's in Computer Science",
      grade: "8.75",
      duration: "2021 - present",
    },
    {
      institution: "Narayana Jr. college",
      degree: "Intermediate",
      grade: "96.8%",
      duration: "2019 - 2021",
    },
    {
      institution: "Adarsh High School",
      degree: "SSC",
      grade: "10.0",
      duration: "2018 - 2019",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "Proficient in a range of technologies, including front-end development and back-end development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaNodeJs />,
      name: "Node js",
    },
    {
      icon: <SiExpress />,
      name: "Express js",
    },
    {
      icon: <SiMongodb />,
      name: "Mongo DB",
    },
  ],
};

//certifications data
const certifications = {
  title: "My certifications",
  description:
    "Throughout my learning journey, I’ve earned certifications from top organizations, showcasing my expertise in various fields.",
  info: [
    {
      fieldName: "Google Data Analytics",
      fieldValue: "Google",
      path: "",
    },
    {
      fieldName: "Java Script Essentials",
      fieldValue: "Cisco",
      path: "",
    },
    {
      fieldName: "Python Essentials",
      fieldValue: "Cisco",
      path: "",
    },

    {
      fieldName: "Cyber Security",
      fieldValue: "Cisco",
      path: "",
    },
    {
      fieldName: "Python Basics",
      fieldValue: "HackerRank",
      path: "",
    },
    {
      fieldName: "Problem Solving Basic",
      fieldValue: "HackerRank",
      path: "",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 gap-6 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 "> */}
          <TabsList className="grid grid-col grid-cols-2 w-full max-w-[900px] mx-auto lg:grid-cols-2 xl:mx-0 xl:flex xl:flex-col xl:w-full xl:max-w-[380px] gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="min-h-[70vh] w-full">
            {/*---experience---*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*---dot---*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*---education---*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <h3 className="text-l max-w-[260px] text-center lg:text-left">
                            Score:
                            <span className="text-xl text-accent">
                              {" "}
                              {item.grade}
                            </span>
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*---dot---*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*---skills---*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                {/* <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                                <p className="capitalize text-sm mt-[10px] block xl:hidden">
                                  {skill.name}
                                </p>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul> */}
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              {/* Container for centering both icon and text */}
                              <div className="flex flex-col justify-center items-center text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                                <p className="capitalize text-sm mt-[10px] block xl:hidden text-center">
                                  {skill.name}
                                </p>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*---about---*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center text-left xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*---certifications---*/}
            <TabsContent
              value="certifications"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{certifications.title}</h3>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {certifications.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {certifications.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center text-left xl:justify-start gap-4 xl:grid xl:gap-0"
                      >
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="text-xl">{item.fieldName}</span>
                        </a>

                        <span className="text-white/60">
                          By {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
