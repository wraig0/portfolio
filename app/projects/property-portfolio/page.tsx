import properties from "@/public/properties-0.webp";
import property from "@/public/property-0.webp";
import maintenance from "@/public/maintenance-0.webp";
import editTenancy0 from "@/public/edit-tenancy-0.webp";
import editTenancy1 from "@/public/edit-tenancy-1.webp";

import Image from "next/image";
import Paragraph from "@/components/paragraph";
import ProjectSection from "@/components/project-section";

const WIDTH_SCREENSHOT = 500;
const LOADING = "lazy";

const screenshots = [
  {
    src: properties,
    alt: "Properties screen",
  },
  {
    src: property,
    alt: "Property screen",
  },
  {
    src: maintenance,
    alt: "Maintenance screen",
  },
  {
    src: editTenancy0,
    alt: "Edit tenancy screen top",
  },
  {
    src: editTenancy1,
    alt: "Edit tenancy screen bottom",
  },
];

export default function MobileApp() {
  return (
    <ProjectSection>
      <h1>Property portfolio</h1>
      <Paragraph>
        A mobile app for property management. The app allows you to manage your
        properties, tenants, and other details. In future I plan to add other
        functionality such as reminders and remote storage.
      </Paragraph>
      <Paragraph>
        The app is built with Expo and React Native and uses a SQLite database
        to store data locally on the device. For debugging I normally use an
        emulated android device or physical android phone. Occasionally I a
        MacBook to run the app on an iOS simulator.
      </Paragraph>
      <Paragraph>
        Initially I managed state using a combination of react context and react hooks. 
        I then moved to using Jotai to manage the state of the app. Data storage 
        is abstracted away from the app using a data access component that I wrote.
        This allows me to change the data storage mechanism without changing 
        the app code, as the interface will remain the same. 
        Photos are stored in the user&apos;s normal photo storage on the device.
      </Paragraph>
      <div className="flex flex-row flex-wrap gap-8">
        {screenshots.map((screenshot) => (
          <Image
            key={screenshot.alt}
            width={WIDTH_SCREENSHOT}
            loading={LOADING}
            src={screenshot.src}
            alt={screenshot.alt}
            title={screenshot.alt}
            className="border rounded"
          />
        ))}
      </div>
    </ProjectSection>
  );
}
