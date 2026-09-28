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
} from "./Home.style";
import heroImage from "../../assets/images/heroimage.jpg";
import servicesHelpImage from "../../assets/images/Services-Help.jpg";
import servicesServicesWorkforce from "../../assets/images/Services-Workforce.jpg";
import serviceDigitalMarketing from "../../assets/images/Services-Marketing.jpg";

// Services displayed on the home page, including their descriptions and links
const services = [
  {
    name: "Admistrative Help",
    descreiption:
      "HR services, accounting and customer support for smoother everyday operations",
    href: "/administrative-help",
    src: servicesHelpImage,
  },
  {
    name: "Workforce",
    descreiption:
      "Recruiting, work permits, visas, accreditation, training and rent-a-worker support.",
    href: "/workforce",
    src: servicesServicesWorkforce,
  },
  {
    name: "Digital Marketing",
    descreiption:
      "Website creation and social media support to help your business move forward.",
    href: "/digital-marketing",
    src: serviceDigitalMarketing,
  },
];

// Key benefits displayed on the home page

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
              description={service.descreiption}
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
    </HomePageContainer>
  );
};

export default Home;
