import Image from "next/image";
import tree from "@/public/tree.webp";
import ribbon from "@/public/ribbon.webp";
import storybook from "@/public/storybook.webp";
import Paragraph from "@/components/paragraph";
import ProjectSection from "@/components/project-section";

export default function UiComponents() {
  return (
    <ProjectSection>
      <h1>UI Components</h1>
      <Paragraph>
        I often need to create my own complex components to deliver features so
        that they are reusable across various products.
      </Paragraph>
      <div>
        <h2>Tree</h2>
        <Paragraph>
          I created a tree component that allows you to expand and collapse
          nodes. This is useful for displaying hierarchical data such as a file
          system or a list of categories.
        </Paragraph>
        <Image width={400} src={tree} alt="Tree" title="Tree" />
      </div>

      <div>
        <h2>Ribbon</h2>
        <Paragraph>
          I created a ribbon component that allows you to display various
          controls at the top of an application. This is useful for displaying
          functionality the the user will use frequently.
        </Paragraph>
        <Paragraph>
          As it is driven by props, the ribbon can be customised to display the
          controls that are relevant to the user.
        </Paragraph>
        <Image src={ribbon} alt="Ribbon" title="Ribbon" />
      </div>

      <div>
        <h2>Storybook</h2>
        <Paragraph>
          I use Storybook to develop and test components in isolation. This also
          allows me to document the components and their props. Product owners
          can also view the components in Storybook to see how they look and
          behave.
        </Paragraph>
        <Image
          src={storybook}
          alt="Storybook"
          title="Storybook"
          className="border"
        />
      </div>
    </ProjectSection>
  );
}
