import Hero from "../../components/Hero/hero";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import {
  HomePageContainer,
  Section,
  SectionEyebrow,
  SectionHeader,
  SectionSubtitle,
  ServiceGrid,
  Divider,
  TrustSection,
  TrustContent,
  TrustList,
  CallToActionSection,
} from "./Home.style";
import heroImage from "../../assets/images/heroimage.jpg";
import servicesHelpImage from "../../assets/images/Services-Help.jpg";
import servicesServicesWorkforce from "../../assets/images/Services-Workforce.jpg";
import serviceDigitalMarketing from "../../assets/images/Services-Marketing.jpg";

// Services displayed on the home page, including their descriptions and links
const services = [
  {
    name: "Administrative Help",
    description:
      "HR services, accounting and customer support for smoother everyday operations",
    href: "/administrative-help",
    src: servicesHelpImage,
  },
  {
    name: "Workforce",
    description:
      "Recruiting, work permits, visas, accreditation, training and rent-a-worker support.",
    href: "/workforce",
    src: servicesServicesWorkforce,
  },
  {
    name: "Digital Marketing",
    description:
      "Website creation and social media support to help your business move forward.",
    href: "/digital-marketing",
    src: serviceDigitalMarketing,
  },
];

// Key benefits displayed on the home page
const benefits = [
  "Flexible",
  "Practical",
  "Personalized",
  "All-in-one support",
];

const Home = () => {
  return (
    <HomePageContainer>
      <Section>
        <Hero
          heading="Your virtual assistant for business"
          supportingText="Administrative, workforce and digital support."
          ctas={[
            { label: "Our services", href: "#services" },
            { label: "Contact us", href: "/contact" },
          ]}
          image={{
            src: heroImage,
            alt: "Professionals working together in a bright office",
          }}
        />
      </Section>

      <Section id="services">
        <SectionHeader>
          <SectionEyebrow>Our Services</SectionEyebrow>
          <Divider />
          <SectionSubtitle>
            Everything your business needs in one place.
          </SectionSubtitle>
        </SectionHeader>
        <ServiceGrid>
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              name={service.name}
              description={service.description}
              href={service.href}
              linkLabel="Learn More"
              img={{
                src: service.src,
                alt: `${service.name} service image`,
              }}
            />
          ))}
        </ServiceGrid>
      </Section>

      <TrustSection>
        <TrustContent>
          <div>
            <SectionEyebrow>Why choose Nerrea?</SectionEyebrow>
            <Divider />
            <h2>One partner for everyday business challenges.</h2>
            <a href="/about">Discover our approach</a>
          </div>
          <TrustList>
            {benefits.map((benefit) => (
              <li key={benefit}>
                {benefit} <span>✓</span>
              </li>
            ))}
          </TrustList>
        </TrustContent>
      </TrustSection>

      <CallToActionSection>
        <SectionEyebrow>Ready when you are</SectionEyebrow>
        <h2>Need help with your business?</h2>
        <p>Tell us what you need. NERREA can help.</p>
        <a href="/contact">Contact Us</a>
      </CallToActionSection>
    </HomePageContainer>
  );
};

export default Home;
