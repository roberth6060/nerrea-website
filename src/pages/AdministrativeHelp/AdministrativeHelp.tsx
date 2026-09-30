import Hero from "../../components/Hero/hero";
import {
  AdministrativePage,
  Section,
  SupportSection,
  SectionHeader,
  SectionEyebrow,
  ServiceGrid,
} from "./AdministrativeHelp.style";
import supportImage from "../../assets/images/Services-Help.jpg";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

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

      <Section>
        <SectionHeader>
          <SectionEyebrow>Administration made simple</SectionEyebrow>
          <h2>Practical support for the work behind your business.</h2>
        </SectionHeader>

        <ServiceGrid>
          {administrativeServices.map((service) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              description={service.description}
              href={service.href}
              linkLabel="Learn More"
            />
          ))}
        </ServiceGrid>
      </Section>

      <SupportSection>
        <p>Support me please</p>
      </SupportSection>
    </AdministrativePage>
  );
};

export default AdministrativeHelp;
