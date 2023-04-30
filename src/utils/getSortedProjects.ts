import { ObjectMember } from './../../node_modules/@babel/types/lib/index-legacy.d';
import type { CollectionEntry } from "astro:content";

interface Object {
    externalLink?: string;
    title: string;
    description: string;
    status?: string;
    active: boolean;
    technologies: string[];
}

const projects: Object[] = [
    {
        externalLink: "https://wishforbtc.netlify.app",
        title: "Wish For BTC",
        description: "This is an app helps users to calculate how much money they would have made on a specific day, if they had bought bitcoin at a certain price.",
        status: "Completed",
        active: true,
        technologies: ["Axios","Vue 2","Tailwind"]
    },
    {
        externalLink: "https://wixi-dash.netlify.app",
        title: "Dashboard",
        status:"Completed",
        description: "Dashboard view for CRM",
        active: true,
        technologies: ["D3.js","Vue 3","Tailwind"]
    }
];

const getSortedProjects = (projects: Object[]) =>
  projects
    .filter((project) => project.active)
    .sort();

export default getSortedProjects(projects);