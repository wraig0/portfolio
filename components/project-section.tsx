export default function ProjectSection(props: React.PropsWithChildren<{}>) {
  return (
    <section className="p-8 lg:p-32 flex flex-col gap-8">
      {props.children}
    </section>
  );
}
