import cntl from "cntl";
import React from "react";
import { Item } from "../../interfaces/projects";
import { GrantPopUp } from "./GrantPopUp";

const projectCardCN = (isComingSoon: boolean) => cntl`relative
z-40
flex
flex-col
items-center
px-4
py-8
text-center
rounded-md
backdrop-filter
backdrop-blur
${isComingSoon
        ? "border border-dashed border-gray-600 hover:border-solid"
        : "bg-translucent hover:backdrop-brightness-200"
    }`;

const descriptionCN = cntl`
    flex-auto
    mt-2
    text-sm
    leading-tight
    text-secondary
    line-clamp-3
`;

const comingSoonTextCN = cntl`
    mt-3
    text-xs
    font-medium
    leading-none
    text-purple-600
    text-opacity-100
`;

export const ProjectCard = ({ project }: { project: Item }) => {
    return (
        <div className={projectCardCN(project.isComingSoon)}>
            <div className="w-14 h-14">
                <img src={project?.image.url} alt={project.image.title} />
            </div>
            <div className="mt-6 text-lg font-semibold leading-tight">
                {project.title}
            </div>
            <div className={descriptionCN}>{project.description}</div>
            {project.isComingSoon && (
                <div className={comingSoonTextCN}>Coming soon</div>
            )}
            {project.receivedAGrant && <GrantPopUp />}
        </div>
    );
};
