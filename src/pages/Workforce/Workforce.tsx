import Hero from "../../components/Hero/hero";
import workforceImage from "../../assets/images/Services-Workforce.jpg";
import recruitingImage from "../../assets/images/workforce/recruiting.jpg";
import workPermitImage from "../../assets/images/workforce/work-permit.jpg";
import accreditationImage from "../../assets/images/workforce/Philippines-Accreditation.jpg";
import visaProcessImage from "../../assets/images/workforce/Work-Permit-Visa-Process.jpg";
import trainingImage from "../../assets/images/workforce/Personnel-Training.jpg";
import rentWorkerImage from "../../assets/images/workforce/Rent-a-Worker.jpg";
import {
  CallToActionSection,
  PageContainer,
  Section,
  SectionEyebrow,
  ServiceGrid,
} from "../../components/Layout/Layout.style";
import {
  ControlSection,
  ProcessBand,
  ProcessContent,
  ProcessGrid,
  ProcessStep,
  ServiceHeader,
} from "./Workfoce.style";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const workforceServices = [
  {
    name: "Recruiting",
    description:
      "Get support defining your needs, finding suitable candidates, and coordinating the recruitment process.",
    image: recruitingImage,
  },
  {
    name: "Croatian Work Permit & HZZ Process",
    description:
      "Guidance with process steps, required information, and document preparation.",
    image: workPermitImage,
  },
  {
    name: "Philippine Employer Accreditation",
    description:
      "Assistance organizing employer information and supporting documentation.",
    image: accreditationImage,
  },
  {
    name: "Work Permit & Visa Process",
    description:
      "Practical help organizing requirements and navigating the steps for work permits and visas.",
    image: visaProcessImage,
  },
  {
    name: "Personnel Training",
    description:
      "Training support to help prepare employees for their roles and workplace expectations.",
    image: trainingImage,
  },
  {
    name: "Rent a Worker",
    description:
      "Flexible workforce support when your business needs additional people.",
    image: rentWorkerImage,
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

      <Section id="workforce-services">
        <ServiceHeader>
          <SectionEyebrow>Workforce Services</SectionEyebrow>
          <h2>Specialist support, when and where you need it</h2>
          <p>
            Choose help with a specific task or get assistance across multiple
            stages of your workforce process
          </p>
        </ServiceHeader>
        <ServiceGrid>
          {workforceServices.map((service) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              description={service.description}
              img={{
                src: service.image,
                alt: `${service.name} service`,
              }}
            />
          ))}
        </ServiceGrid>
      </Section>

      <ProcessBand>
        <ProcessContent>
          <div>
            <SectionEyebrow>How It Works</SectionEyebrow>
            <h2>A clear process. Support that fits your needs.</h2>
          </div>

          <ProcessGrid>
            {processSteps.map((process) => (
              <ProcessStep key={process.number}>
                <span>{process.number}</span>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </ProcessStep>
            ))}
          </ProcessGrid>
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
