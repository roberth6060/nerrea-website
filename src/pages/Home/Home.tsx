import Hero from "../../components/Hero/hero";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { HomePageContainer, Section } from "./Home.style";
import heroImage from "../../assets/images/heroimage.jpg";

// Services displayed on the home page, including their descriptions and links
const services = [
  {
    name: "Admistrative Help",
    descreiption:
      "HR services, accounting and customer support for smoother everyday operations",
    href: "/administrative-help",
  },
  {
    name: "Workforce",
    descreiption:
      "Recruiting, work permits, visas, accreditation, training and rent-a-worker support.",
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
        {services.map((service) => (
          <ServiceCard
            name={service.name}
            description={service.descreiption}
            href={service.href}
            linkLabel="Explore"
            img={{
              src: "https://images.unsplash.com/photo-1590650265179-7e13941e93f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Professionals working together",
            }}
          />
        ))}
      </Section>
    </HomePageContainer>
  );
};

export default Home;
