export interface AccordionProps {
  value: string;
  accordionTrigger: string;
  accordionContent: string;
}

export interface ServiceProps {
  id: string;
  title: string;
  description: string;
  content: string;
  icon: React.ReactNode;
  buttonName: string;
  href: string;
  image?: string;
  title2?: string;
  title3?: string;
  text1?: string;
  text2?: string;
  serviceAccordion?: React.ReactNode;
}

export interface ServiceAccordionProps {
  id: string;
  accordionTrigger: string;
  accordionContent: {
    title1?: string;
    content1?: string;
    title2?: string;
    content2?: string;
  };
}
