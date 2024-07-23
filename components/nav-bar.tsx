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
import { projects } from "../app/projects/projects";

export default function NavBar() {
  let linkStyle = navigationMenuTriggerStyle();
  linkStyle += " align-items-center";
  console.log(linkStyle);
  return (
    <div className="flex flex-row max-w-screen gap-4 items-center justify-center p-4">
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
              <ul className="grid w-min gap-3 p-4 bg-background">
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
    </div>
  );
}
