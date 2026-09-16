import Hero from "../../components/Hero/hero";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { HomePageContainter } from "./Home.style";
import heroDesktop from "../../assets/images/HeroImg/Desktop.jpg";
import heroMobile from "../../assets/images/HeroImg/Mobile.jpg";

const Home = () => {
  return (
    <HomePageContainter>
      <Hero
        heading="Your virtual assistant for business"
        supportingText="Administrative, workforce and digital support."
        ctas={[
          { label: "Our services", href: "#services" },
          { label: "Contact us", href: "/contact" },
        ]}
        image={{
          desktop: heroDesktop,
          mobile: heroMobile,
          src: heroDesktop,
          alt: "Professionals working together in a bright office",
        }}
      />
      <ServiceCard
        name="Workforce"
        description="Support with recruitment, permits, visas, and training."
        href="/workforce"
        linkLabel="Explore Workforce"
        img={{
          src: "https://images.unsplash.com/photo-1590650265179-7e13941e93f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Professionals working together",
        }}
      />
    </HomePageContainter>
  );
};

export default Home;
