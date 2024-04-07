import { Link } from "@/components/ui/link";
import me from "../public/me.webp";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Chip } from "@/components/ui/chip";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2 subpixel-antialiased">
      <header className="bg-background fixed top-0 w-full pl-24 pr-24 flex flex-row items-center justify-between gap-4">
        <div className="flex flex-row gap-4">
          <Link
            href="https://www.linkedin.com/in/thomas-underwood-35b139158/"
            title="Open LinkedIn profile in a new tab"
            className="hover:bg-slate-200 dark:hover:bg-slate-900 p-4"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.github.com/wraig0"
            title="Open GitHub profile in a new tab"
            className="hover:bg-slate-200 dark:hover:bg-slate-900 p-4"
          >
            GitHub
          </Link>
        </div>
        <ModeToggle />
      </header>

      <main className="flex flex-col items-center justify-between p-24 max-w-screen-lg">
        <div className="flex flex-col gap-8 w-fit p-4 ">
          <section className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Image
              src={me}
              alt="me"
              className="w-24 h-24 rounded rounded-full"
            />
            <div className="flex flex-col gap-4">
              <h1>Tom Underwood</h1>
              <h2>Software engineer, web developer and entrepreneur.</h2>
            </div>
          </section>

          <section className="flex flex-col gap-2">
            <h2>About me</h2>
            <Card className="p-4 flex flex-col gap-4">
              <p>
                Senior React Developer with a strong background in frontend
                development and expertise in building React UI components.
                Skilled in React, TypeScript and various JavaScript
                technologies. Possessing over 6 years of experience in
                delivering high-quality solutions for flagship cloud platforms
                and desktop applications. Flexible and adaptable with a
                commitment to continuous learning and improvement.
              </p>
            </Card>
          </section>

          <section className="flex flex-col gap-2">
            <h2>Key skills</h2>
            <Card className="p-4 flex flex-col gap-4">
              <div className="flex flex-row flex-wrap gap-2 justify-evenly">
                <Chip>React.js</Chip>
                <Chip>TypeScript</Chip>
                <Chip>JavaScript</Chip>
                <Chip>Node</Chip>
                <Chip>Next.js</Chip>
                <Chip>Styled components</Chip>
                <Chip>Material UI</Chip>
                <Chip>Shadcn/ui</Chip>
                <Chip>Microsoft Azure</Chip>
                <Chip>Git</Chip>
                <Chip>Jira</Chip>
                <Chip>Confluence</Chip>
                <Chip>Agile</Chip>
                <Chip>C++</Chip>
                <Chip>C#</Chip>
                <Chip>PHP</Chip>
              </div>
            </Card>
          </section>

          <section className="flex flex-col gap-2">
            <h2>Experience</h2>
            <Card className="p-4 flex flex-col gap-4">
              <h3>
                React Software Engineer - Hexagon Manufacturing Intelligence
              </h3>
              <i className="text-slate-400">November 2021 - Present</i>
              <p>
                On a daily basis, I build and customise reusable UI components
                with React and Typescript, ensuring their functionality through
                comprehensive unit testing.
              </p>
              <p>
                Led the introduction of unit testing to the React code,
                resulting in an 80% code coverage rate. This initiative
                significantly reduced development time while enhancing the
                overall quality of the codebase.
              </p>
              <p>
                Developed a full-stack application using React, Node.js and
                Electron to seamlessly migrate user settings between different
                versions of a desktop application, ensuring smooth transitions
                and maintaining user preferences across updates.
              </p>
              <p>
                Created an in-house React component library, published on a
                private npm registry, enabling UI to be shared across multiple
                products and give users a common experience.
              </p>
              <p>
                Participated actively in daily, fortnightly, and quarterly Agile
                meetings, demonstrating strong communication skills by
                effectively collaborating with team members, sharing progress
                updates, and contributing to discussions on project planning and
                execution
              </p>

              <br />
              <h3>
                Software Engineer - Insignia Medical Systems Ltd (now Intelerad)
              </h3>
              <i className="text-slate-400">June 2018 - November 2021</i>
              <p>
                Developed a patient record browser for web and desktop platforms
                using JavaScript, React and PHP.
              </p>
              <p>
                Created services using Node, PHP and C# for creating test APIs,
                website management and protocol handling.
              </p>
              <p>
                Communicated with customers and support engineers to gather
                requirements and ensure client satisfaction.
              </p>
            </Card>
          </section>

          <section className="flex flex-col gap-2">
            <h2>More about me</h2>
            <Card className="p-4 flex flex-col gap-4">
              <p>
                I enjoy working on personal projects in my spare time, such as
                creating Next.js web apps and React native mobile apps. I also
                enjoy playing video games, watching movies and spending time
                with my family.
              </p>
            </Card>
          </section>
        </div>
      </main>

      <footer className="text-zinc-400">
        &copy; {new Date().getFullYear()} Thomas Underwood. All rights reserved.
      </footer>
    </div>
  );
}
