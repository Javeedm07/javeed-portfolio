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
    category: "Full stack",
    title: "MedConnect",
    description:
      " for booking doctor appointments. Users can search for doctors, view their profiles, and schedule appointments. The app includes features like user authentication, payment integration, and feedback submission.",
    stack: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/medConnect_demo.png",
    live: "https://medconnect.com",
    github: "https://github.com/Javeedm07/MedConnect",
  },
  {
    num: "02",
    category: "Machine learning",
    title: "Gender and age prediction using CNN",
    description:
      "that predicts the gender and age of individuals from facial images using Convolutional Neural Networks (CNNs). Trained on the UTKFace dataset, this model provides precise predictions.",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "OpenCV" },
    ],
    image: "/assets/work/cnn_demo.png",
    live: "https://yourprojectlink.com",
    github: "https://github.com/Javeedm07/gender_age_prediction_using_CNN",
  },
  {
    num: "03",
    category: "Backend",
    title: "Chess game",
    description:
      "for a real-time chess game using Node.js, Socket.IO, and Chess.js. It features a draggable chessboard on the frontend. The server manages the game state, player roles, and move validation, ensuring that all clients remain synchronized.",
    stack: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Socket.io" },
      { name: "EJS" },
    ],
    image: "/assets/work/chess_demo.png",
    live: "https://chessgame.com",
    github: "https://github.com/Javeedm07/chess_game",
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
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-4">
        {projects.map((project, index) => (
          <div key={index} className="mb-12">
            {/* Single Division for Content */}
            <div className="flex flex-col xl:flex-row xl:gap-[30px] xl:items-center">
              {/* Content Section */}
              <div className="w-full xl:w-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline mt-[10px]">
                  {project.num}
                </div>
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-[42px] font-bold text-white capitalize">
                      {project.title}
                    </h2>
                    <p className="text-white/60">
                      {" "}
                      <span className=" text-[28px]">
                        {project.category}
                      </span>{" "}
                      project {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-4">
                    {project.stack.map((item, idx) => (
                      <li key={idx} className="text-xl text-accent">
                        {item.name}
                        {idx !== project.stack.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                  {/* Links */}
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

              {/* Image Section */}
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
            {/* Divider Line */}
            <hr className="border-t border-white/20 mt-12" />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
