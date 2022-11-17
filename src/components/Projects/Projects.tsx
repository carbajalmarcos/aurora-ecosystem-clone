import cntl from "cntl";
import Image from "next/image";
import React from "react";
import { Item } from "../../interfaces/projects";
import { ProjectCard } from "./ProjectCard";

const projectWrapperCN = cntl`
  relative
  w-full
  px-5
  pb-40
  mx-auto
  mt-5
`;

const projectContainerCN = cntl`
  grid
  grid-cols-4
  gap-4
  mx-auto
  max-w-[82rem]
`;

interface Props {
  data?: Item[];
}

export const Projects = ({ data }: Props) => {
  return (
    <div className={projectWrapperCN}>
      <div className={projectContainerCN}>
        {data?.map((project, index) => (
          <ProjectCard project={project} key={`${project.title}-${index}`} />
        ))}
      </div>
    </div>
  );
};
