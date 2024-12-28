/* eslint-disable react/prop-types */

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// import Link from "next/link";

const Project3DCard = ({ projectName, projectDescription, projectImg, altImg, livelink, githublink }) => {
  return (
    (<CardContainer className="w-[18rem] md:w-[22rem] select-none">
      <CardBody
        className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.4] bg-black border-white/[0.3]  w-full h-fit rounded-xl px-2 lg:px-4 py-2 sm:py-3 border">
        <CardItem
          translateZ="80"
          className="w-full gh-regular text-lg md:text-2xl font-bold text-lime-500 text-center dark:text-white">
          {projectName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="w-full text-neutral-600 text-[12px] md:text-[14px] font-medium mt-2 text-center dark:text-neutral-400 tracking-wide">
          {projectDescription}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 rounded-md lg:border overflow-hidden dark:border-white/[0.2] border-black/[0.2]">

          <img
            src={projectImg || altImg}
            className="h-44 sm:h-48 w-[95%] mx-auto lg:w-full object-cover rounded-md group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-6 px-3">
          <CardItem
            translateZ={90}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal bg-blue-500 hover:bg-blue-700 text-white cursor-pointer">
            <a href={livelink} target="_blank">Livelink →</a>
          </CardItem>
          <CardItem
            translateZ={90}
            as="button"
            className="px-4 py-2 rounded-xl bg-green-500 hover:bg-green-700  text-white text-xs">
            <a href={githublink} target="_blank">Github Repo</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>)
  );
}

export default Project3DCard;
