export default function Paragraph(props: React.PropsWithChildren<{}>) {
  return <p className="bg-center max-w-4xl">{props.children}</p>;
}
