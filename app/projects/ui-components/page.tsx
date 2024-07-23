import Image from "next/image";
import tree from "@/public/tree.webp";
import Paragraph from "../../../components/paragraph";
import { Card } from "../../../components/ui/card";

export default function UiComponents() {
  return (
    <section className="p-32 flex flex-col gap-8">
      <h1>UI Components</h1>

      <Paragraph>
        I often need to create my own complex components to deliver features so
        that they are reusable across various products.
      </Paragraph>
      <Card className="p-8 w-[450px]">
        <Paragraph>Tree</Paragraph>
        <Image width={400} src={tree} alt="Tree" title="Tree" />
      </Card>
    </section>
  );
}
