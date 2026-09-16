export type ServiceImage = {
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
  href: string;
  linkLabel?: string;
  img?: ServiceImage;
};
