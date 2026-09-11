import {
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroPicture,
} from "./Hero.styles";
import type { HeroProps } from "./Hero.types";

const Hero = ({ heading, supportingText, ctas = [], image }: HeroProps) => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>{heading}</h1>
        {supportingText && <p>{supportingText}</p>}
        {ctas.length > 0 && (
          <div>
            {ctas.map((cta) => (
              <a key={cta.href} href={cta.href}>
                {cta.label}
              </a>
            ))}
          </div>
        )}
      </HeroContent>

      {image && (
        <HeroPicture>
          {image.mobile && (
            <source media="(max-width: 768px)" srcSet={image.mobile} />
          )}
          <HeroImage src={image.desktop} alt={image.alt} />
        </HeroPicture>
      )}
    </HeroContainer>
  );
};

export default Hero;
