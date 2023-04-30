
export interface Props {
  externalLink?: string;
  title: string;
  description: string;
  status?: string;
  technologies: string[];
}

export default function ProjectCard({ externalLink, title, description, technologies, status }: Props) {
  return (
    <section className="">
      <a href={externalLink} className="focus-outline p-3 sm:p-1 cursor-pointer" aria-label="external-link"
        title="Search" target="_blank">
        <div className="flex items-center ">
          <h1 className="text-lg font-medium text-skin-accent">{title}</h1>
          <svg className="h-3 text-skin-accent font-semibold" fill="none" stroke="#50FA7B" strokeWidth="1.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
          </svg>
        </div>
      </a>
      <p className="font-normal text-sm">{description}</p>
      <p className="text-sm pt-2">Status: <span className="font-semibold text-skin-accent">{status}</span></p>
      <p className="font-normal text-sm italic pt-2">Technologies Used:<span className="font-semibold "> {technologies.join(", ")}</span> </p>
    </section>
  );
}
