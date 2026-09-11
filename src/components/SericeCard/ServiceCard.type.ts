export type ServiceImage = {
  desktop: string;
  mobile: string;
  src: string;
  alt: string;
};

export type ServiceCta = {
  label: string;
  href: string;
};

export type ServiceCardProps = {
  name: string;
  description: string;
  link: string;
  ctas?: ServiceCta[];
  img?: ServiceImage;
};
