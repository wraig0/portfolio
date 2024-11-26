import me from "../public/me.webp";
import moon from "../public/tothemoon.webp";
import Image from "next/image";

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
      </div>
    </main>
  );
}
