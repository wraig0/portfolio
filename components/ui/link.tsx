import NextLink from "next/link";
import { Button } from "./button";
export const Link: React.FC<{
  href: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ href, title, children, className }) => {
  return (
    <NextLink href={href} target="_blank" title={title} className={className}>
      <Button
        className="bg-blue-700 text-white  hover:bg-blue-500 active:bg-blue-400"
        tabIndex={-1}
      >
        {children}
      </Button>
    </NextLink>
  );
};
