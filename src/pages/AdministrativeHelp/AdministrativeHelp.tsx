import Hero from "../../components/Hero/hero";
import { AdministrativePage, Section } from "./AdministrativeHelp.style";
import supportImage from "../../assets/images/Services-Help.jpg";

// Admin info :
const administrativeServices = [
  {
    name: "HR Services",
    description:
      "Support with employee administration, documentation and everyday HR tasks.",
    href: "/contact",
  },
  {
    name: "Accounting",
    description:
      "Practical assistance with records, invoices and recurring administrative work.",
    href: "/contact",
  },
  {
    name: "Customer Support",
    description:
      "Reliable customer communication and support that keeps your business responsive.",
    href: "/contact",
  },
];

const AdministrativeHelp = () => {
  return (
    <AdministrativePage>
      <Section>
        <Hero
          heading="Administrative help for your business"
          supportingText="Let NERREA handle the administrative work while you focus on your business."
          ctas={[
            {
              label: "Contact Us",
              href: "/contact",
            },
          ]}
          image={{
            src: supportImage,
            alt: "Professionals collaborating in an office",
          }}
        />
      </Section>
    </AdministrativePage>
  );
};

export default AdministrativeHelp;
