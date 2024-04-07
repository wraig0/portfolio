import NextLink from "next/link";
export const Link: React.FC<{
  href: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ href, title, children, className }) => {
  return (
    <NextLink href={href} target="_blank" title={title} className={className}>
      {children}
    </NextLink>
  );
};
