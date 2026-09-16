import {
  ServiceCardContainer,
  ServiceCardImage,
  ServiceCardContent,
  ServiceCardTitle,
  ServiceCardDescription,
  ServiceCardLink,
} from "./ServiceCard.style";
import { ServiceCardProps } from "./ServiceCard.type";

const ServiceCard = ({
  name,
  description,
  href,
  linkLabel,
  img,
}: ServiceCardProps) => {
  return (
    <ServiceCardContainer>
      {img && <ServiceCardImage src={img.src} alt={img.alt} />}
      <ServiceCardContent>
        <ServiceCardTitle>{name}</ServiceCardTitle>
        <ServiceCardDescription>{description}</ServiceCardDescription>
        <ServiceCardLink href={href}>
          {linkLabel ?? `Explore ${name}`}
        </ServiceCardLink>
      </ServiceCardContent>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
