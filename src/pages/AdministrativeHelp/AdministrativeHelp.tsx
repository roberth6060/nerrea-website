import Hero from "../../components/Hero/hero";
import { SupportSection, SupportContent } from "./AdministrativeHelp.style";
import supportImage from "../../assets/images/Services-Help.jpg";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import {
  CallToActionSection,
  PageContainer,
  PrimaryButton,
  Section,
  SectionEyebrow,
  SectionHeader,
  ServiceGrid,
} from "../../components/Layout/Layout.style";

// Admin info :
const administrativeServices = [
  {
    name: "HR Services",
    description:
      "Support with employee administration, documentation and everyday HR tasks.",
  },
  {
    name: "Accounting",
    description:
      "Practical assistance with records, invoices and recurring administrative work.",
  },
  {
    name: "Customer Support",
    description:
      "Reliable customer communication and support that keeps your business responsive.",
  },
];

const AdministrativeHelp = () => {
  return (
    <PageContainer>
      <Section>
        <Hero
          heading="Administrative help for your business"
          supportingText="Let NERREA handle the administrative work while you focus on your business."
          ctas={[
            {
              label: "Explore our services",
              href: "#admin-services",
            },
          ]}
          image={{
            src: supportImage,
            alt: "Professionals collaborating in an office",
          }}
        />
      </Section>

      <Section id="admin-services">
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
            />
          ))}
        </ServiceGrid>
      </Section>

      <SupportSection>
        <SupportContent>
          <img src={supportImage} alt="Business support team work" />
          <SectionEyebrow>Administration made simple</SectionEyebrow>
          <h2>More time for the work only you can do.</h2>
          <p>
            NERREA takes repetitive administrative work off your plate with
            flexible support that fits the way your business operates.
          </p>
        </SupportContent>
      </SupportSection>

      <CallToActionSection>
        <SectionEyebrow>Need administrative support?</SectionEyebrow>
        <h2>Tell us what your business needs.</h2>
        <PrimaryButton href="/contact">Contact NERREA</PrimaryButton>
      </CallToActionSection>
    </PageContainer>
  );
};

export default AdministrativeHelp;
