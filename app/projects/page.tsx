import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="p-32 flex flex-col gap-8">
      <h1>Projects</h1>
      <Link href="/projects/todos">
        <Card className="p-4 w-fit hover:bg-neutral-200 hover:dark:bg-neutral-800">
          <h2>Todos</h2>
          <p>Simple todo list application</p>
        </Card>
      </Link>
    </section>
  );
}
