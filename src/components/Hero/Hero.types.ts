export type HeroImage = {
  desktop: string;
  mobile?: string;
  alt: string;
};

export type HeroCta = {
  label: string;
  href: string;
};

export type HeroProps = {
  heading: string;
  supportingText?: string;
  ctas?: HeroCta[];
  image?: HeroImage;
};