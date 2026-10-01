import {
  HeroActions,
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroPicture,
} from "./Hero.styles";
import type { HeroProps } from "./Hero.types";
import { PrimaryButton } from "../Layout/Layout.style";

const Hero = ({ heading, supportingText, ctas = [], image }: HeroProps) => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>{heading}</h1>
        {supportingText && <p>{supportingText}</p>}
        {ctas.length > 0 && (
          <HeroActions>
            {ctas.map((cta) => (
              <PrimaryButton key={cta.href} href={cta.href}>
                {cta.label}
              </PrimaryButton>
            ))}
          </HeroActions>
        )}
      </HeroContent>

      {image && (
        <HeroPicture>
          <HeroImage src={image.src} alt={image.alt} />
        </HeroPicture>
      )}
    </HeroContainer>
  );
};

export default Hero;
