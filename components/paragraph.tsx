export default function Paragraph(props: React.PropsWithChildren<{}>) {
  return <p className="max-w-4xl pt-4 pb-4">{props.children}</p>;
}
