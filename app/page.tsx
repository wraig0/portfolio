import me from "../public/me.webp";
import moon from "../public/tothemoon.webp";
import app from "../public/app.webp";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Chip } from "@/components/ui/chip";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between md:pt-12 w-full">
      <div className="flex flex-col gap-8 w-full ">
        <section className="md:pl-24 md:pr-48 md:pt-32 md:pb-32 pl-8 pr-8 pt-24 pb-24 bg-background flex flex-col md:flex-row items-center justify-center gap-4">
          <Image src={me} alt="me" className="w-32 h-32 rounded-full" />
          <div className="flex flex-col gap-4 md:text-start text-center">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r dark:from-blue-400 dark:to-blue-300 from-blue-500 to-blue-800">
              Tom Underwood
            </h1>
            <h2>Software engineer and web developer.</h2>
          </div>
        </section>

        <section className="md:pl-24 md:pr-48 md:pt-32 md:pb-32 pl-8 pr-8 pt-24 pb-24 bg-slate-200 dark:bg-slate-900 flex justify-center">
          <div className="grow md:max-w-4xl max-w-2xl flex flex-col md:grid md:grid-cols-3 items-center gap-12 justify-items-end w-fit">
            <div className="col-span-2">
              <h2 className="pb-4">About me</h2>
              <p>
                Software engineer with a strong background in frontend
                development and expertise in building React UI components.
                Skilled in React, TypeScript and various JavaScript
                technologies. Possessing over 6 years of experience in
                delivering high-quality solutions for flagship cloud platforms
                and desktop applications. Flexible and adaptable with a
                commitment to continuous learning and improvement.
              </p>
            </div>
            <Image src={moon} alt="to the moon" className="max-w-48" />
          </div>
        </section>

        <section className="w-full md:pl-24 md:pr-48 md:pt-32 md:pb-32 pl-8 pr-8 pt-24 pb-24 flex flex-col gap-2 items-center">
          <div className="grow max-w-4xl flex flex-col md:grid md:grid-cols-3 items-center justify-items-start gap-12 w-fit">
            <h2 className="col-span-1">Key skills</h2>

            <div className="flex flex-row flex-wrap gap-2 justify-evenly col-span-2">
              {Array.from(skills).map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </div>
        </section>

        <section className="md:pl-24 md:pr-48 md:pt-32 md:pb-32 pl-8 pr-8 pt-24 pb-24 bg-slate-200 dark:bg-slate-900 flex flex-col items-center w-full">
          <div className="grow max-w-4xl flex flex-col gap-2">
            <h2>Experience</h2>
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
              Led the introduction of unit testing to the React code, resulting
              in a code coverage rate of between 80-95% across several projects.
              This initiative significantly reduced development time while
              enhancing the overall quality of the codebase.
            </p>
            <p>
              Developed a full-stack application using React, Node.js and
              Electron to seamlessly migrate user settings between different
              versions of a desktop application, ensuring smooth transitions and
              maintaining user preferences across updates.
            </p>
            <p>
              Created an in-house React component library, published on a
              private npm registry, enabling UI to be shared across multiple
              products and give users a common experience.
            </p>
            <p>
              Participated actively in daily, fortnightly, and quarterly Agile
              meetings, demonstrating strong communication skills by effectively
              collaborating with team members, sharing progress updates, and
              contributing to discussions on project planning and execution
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
          </div>
        </section>

        <section className="md:pl-24 md:pr-48 md:pt-32 md:pb-32 pl-8 pr-8 pt-24 pb-24 bg-background flex flex-col items-center w-full">
          <div className="grow max-w-4xl flex flex-col md:grid md:grid-cols-3 items-center justify-items-start gap-12 w-fit">
            <div className="grow max-w-4xl flex flex-col gap-2 col-span-2">
              <h2>More about me</h2>
              <p>
                I enjoy working on personal projects in my spare time, such as
                creating Next.js web apps and React native mobile apps. I also
                enjoy playing video games, watching movies and spending time
                with my family.
              </p>
            </div>
            <Image src={app} alt="apps" className="max-w-48" />
          </div>
        </section>
      </div>
    </main>
  );
}
const skills = new Set([
  "React.js",
  "TypeScript",
  "JavaScript",
  "Node",
  "Next.js",
  "Styled components",
  "Material UI",
  "Shadcn/ui",
  "Microsoft Azure",
  "Git",
  "Jira",
  "Confluence",
  "Agile",
  "C++",
  "C#",
  "PHP",
  "SQL",
]);