import Hero from "../../components/Hero/hero";
import workforceImage from "../../assets/images/Services-Workforce.jpg";
import {
  CallToActionSection,
  PageContainer,
  Section,
  SectionEyebrow,
} from "../../components/Layout/Layout.style";
import {
  ControlSection,
  ProcessBand,
  ProcessContent,
  ServiceHeader,
} from "./Workfoce.style";

const workforceServices = [
  {
    number: "01",
    name: "Recruiting",
    description:
      "Get support defining your needs, finding suitable candidates, and coordinating the recruitment process.",
  },
  {
    number: "02",
    name: "Croatian Work Permit & HZZ Process",
    description:
      "Guidance with process steps, required information, and document preparation.",
  },
  {
    number: "03",
    name: "Philippine Employer Accreditation",
    description:
      "Assistance organizing employer information and supporting documentation.",
  },
  {
    number: "04",
    name: "Work Permit & Visa Process",
    description:
      "Practical help organizing requirements and navigating the steps for work permits and visas.",
  },
  {
    number: "05",
    name: "Personnel Training",
    description:
      "Training support to help prepare employees for their roles and workplace expectations.",
  },
  {
    number: "06",
    name: "Rent a Worker",
    description:
      "Flexible workforce support when your business needs additional people.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell us your needs",
    description: "Share your role, timeline, or workforce challenge.",
  },
  {
    number: "02",
    title: "Choose your support",
    description: "Decide which parts of the process you want help with.",
  },
  {
    number: "03",
    title: "NERREA assists",
    description: "Get practical guidance and support along the way.",
  },
  {
    number: "04",
    title: "Complete the process",
    description: "Move forward with clear next steps and your team in control.",
  },
];
const Workforce = () => {
  return (
    <PageContainer>
      <Section>
        <Hero
          heading="Tired of agencies? Do it yourself with NERREA's assistance."
          supportingText="Get help with recruitment, permits, visas, and workforce processes while staying in control of your decisions."
          ctas={[
            {
              label: "Explore workforce services",
              href: "#workforce-services",
            },
          ]}
          image={{
            src: workforceImage,
            alt: "Workforce team collaborating in a professional setting",
          }}
        />
      </Section>

      <Section>
        <ServiceHeader>
          <SectionEyebrow>Workforce Services</SectionEyebrow>
          <h2>Specialist support, when and where you need it</h2>
          <p>
            Choose help with a specific task or get assistance across multiple
            stages of your workforce process
          </p>
        </ServiceHeader>
        <ul>
          {workforceServices.map((service) => (
            <li key={service.name}>{service.name}</li>
          ))}
        </ul>
      </Section>

      <ProcessBand>
        <ProcessContent>
          <SectionEyebrow>How It Works</SectionEyebrow>
          <h2>A clear process. Support that fits your needs.</h2>
        </ProcessContent>
      </ProcessBand>

      <ControlSection>
        <h2>Choose the support your business needs</h2>
      </ControlSection>

      <CallToActionSection>
        <h2>Tell us about your workforce needs</h2>
      </CallToActionSection>
    </PageContainer>
  );
};

export default Workforce;
