import Image from "next/image";
import tree from "@/public/tree.webp";
import Paragraph from "@/components/paragraph";
import { Card } from "@/components/ui/card";
import ProjectSection from "@/components/project-section";

export default function UiComponents() {
  return (
    <ProjectSection>
      <h1>UI Components</h1>

      <Paragraph>
        I often need to create my own complex components to deliver features so
        that they are reusable across various products.
      </Paragraph>
      <Paragraph>Tree</Paragraph>
      <Image width={400} src={tree} alt="Tree" title="Tree" />
    </ProjectSection>
  );
}
