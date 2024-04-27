"use client";

import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const projects = [
  {
    name: "Todo App",
    description: "A simple todo app",
    href: "/projects/todos",
  },
];

export default function NavBar() {
  const linkStyle = navigationMenuTriggerStyle();
  return (
    <div className="flex flex-row gap-4 items-center">
      <ModeToggle />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" title="Home" className={linkStyle}>
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href="/projects">Projects</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 bg-background">
                {projects.map((project) => (
                  <NavigationMenuItem key={project.href}>
                    <Link href={project.href} className={linkStyle}>
                      {project.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="https://www.linkedin.com/in/thomas-underwood-35b139158/"
              target="_blank"
              title="Open LinkedIn profile in a new tab"
              className={linkStyle}
            >
              LinkedIn
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="https://www.github.com/wraig0/"
              target="_blank"
              title="Open GitHub profile in a new tab"
              className={linkStyle}
            >
              GitHub
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/*<Link href="/" className="p-1 hover:underline">
                  Home
                </Link>
                <Link href="/projects" className="p-1 hover:underline">
                  Projects
                </Link>
                <Link
                  href="https://www.linkedin.com/in/thomas-underwood-35b139158/"
                  title="Open LinkedIn profile in a new tab"
                  className="p-1 hover:underline"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://www.github.com/wraig0"
                  title="Open GitHub profile in a new tab"
                  className="p-1 hover:underline"
                >
                  GitHub
                </Link>*/}
    </div>
  );
}
