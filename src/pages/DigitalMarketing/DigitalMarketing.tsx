import Hero from "../../components/Hero/hero";
import {
  CallToActionSection,
  PageContainer,
  PrimaryButton,
  Section,
  SectionEyebrow,
  ServiceGrid,
} from "../../components/Layout/Layout.style";
import marketingImage from "../../assets/images/Services-Marketing.jpg";
import {
  ServiceHeader,
  ServiceCard,
  DigitalSupport,
} from "./DigitalMarketing.style";

const services = [
  {
    id: "website-creation",
    number: "01",
    name: "Website creation",
    description:
      "Modern, responsive websites designed to give your business a professional online presence.",
  },
  {
    id: "social-media",
    number: "02",
    name: "Social media",
    description:
      "Build and maintain a consistent social presence that helps your business connect with customers.",
  },
];

const DigitalMarketing = () => {
  return (
    <PageContainer>
      <Section>
        <Hero
          heading="Build your digital presence"
          supportingText="Digital solutions designed to help your business reach more customers."
          ctas={[{ label: "Explore our services", href: "#digital-services" }]}
          image={{
            src: marketingImage,
            alt: "Digital marketing and website design workspace",
          }}
        />
      </Section>

      <Section id="digital-services">
        <ServiceHeader>
          <SectionEyebrow>Digital marketing</SectionEyebrow>
          <h2>Make your business easier to find and remember.</h2>
          <p>
            Focused digital support for the two places customers often meet your
            business first: your website and social channels.
          </p>
        </ServiceHeader>

        <ServiceGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <span>{service.name}</span>
              <h3>Make your business easier to find and remember.</h3>
              <p>
                Focused digital support for the two places customers often meet
                your business first: your website and social channels.
              </p>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </Section>

      <DigitalSupport>
        <DigitalSupport>
          <div>
            <SectionEyebrow>Your business. Online.</SectionEyebrow>
            <h2>A professional presence, built around your business.</h2>
          </div>

          <p>
            NERREA helps you present your business clearly online, from a
            website that works across devices to social content that stays
            consistent with your brand.
          </p>
        </DigitalSupport>
      </DigitalSupport>

      <CallToActionSection id="digital-contact">
        <SectionEyebrow>Ready to grow your digital presence?</SectionEyebrow>
        <h2>Let’s talk about what your business needs.</h2>
        <p>Tell us about your goals and we’ll help you choose a next step.</p>
        <PrimaryButton href="/contact">Work with us</PrimaryButton>
      </CallToActionSection>
    </PageContainer>
  );
};

export default DigitalMarketing;
