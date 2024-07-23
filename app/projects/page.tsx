import { Card } from "@/components/ui/card";
import Link from "next/link";
import { projects } from "./projects";

export default function Projects() {
  return (
    <section className="p-8 lg:p-32 flex flex-col gap-8">
      <h1>Projects</h1>
      {projects.map((project) => (
        <Link key={project.href} href={project.href}>
          <Card className="p-4 w-fit hover:bg-neutral-200 hover:dark:bg-neutral-800">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </Card>
        </Link>
      ))}
    </section>
  );
}
