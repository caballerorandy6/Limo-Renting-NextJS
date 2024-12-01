import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionProps {
  value: string;
  accordionTrigger: string;
  accordionContent: string;
}

const accordionArray: AccordionProps[] = [
  {
    value: "item-1",
    accordionTrigger:
      "What types of corporate transportation services do you offer?",
    accordionContent:
      "We offer a range of corporate transportation services, including airport transfers, executive car services, event transportation, and corporate shuttles.",
  },
  {
    value: "item-2",
    accordionTrigger:
      "What types of vehicles do you have available for corporate transportation?",
    accordionContent:
      "We have a fleet of luxury vehicles, including sedans, SUVs, limousines, and buses, to meet the needs of any Miami corporate transportation request.",
  },
  {
    value: "item-3",
    accordionTrigger: "Can I schedule transportation in advance?",
    accordionContent:
      "Yes, we encourage all of our customers to schedule their transportation in advance to ensure availability of both your preferred vehicle and preferred time.",
  },
  {
    value: "item-4",
    accordionTrigger: "Are your drivers trained and licensed?",
    accordionContent:
      "Yes, all of our drivers for chauffeured Miami transportation are professionally trained, licensed, and insured to ensure the safety and comfort of our customers.",
  },
  {
    value: "item-5",
    accordionTrigger: "How can I pay for your local transportation services?",
    accordionContent:
      "We accept a variety of payment methods, including credit cards, cash, and more. Please contact us for more information on paying for our transportation and corporate limo services if you have questions.",
  },
  {
    value: "item-6",
    accordionTrigger: "Do you offer transportation services for large groups?",
    accordionContent:
      "Yes, we have a range of vehicles that can accommodate large groups, including buses and high capacity limousines. Please contact us to discuss your specific needs.",
  },
  {
    value: "item-7",
    accordionTrigger:
      "Do you offer transportation services outside of the local area?",
    accordionContent:
      "Yes, we offer transportation services to a range of destinations outside of our local area. Please contact us to discuss your specific transportation needs and pick up or drop off locations.",
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="font-sans border-none w-full lg:w-5/12"
    >
      {accordionArray.map((item, index) => (
        <AccordionItem value={item.value} key={index}>
          <AccordionTrigger className="bg-gray-50 mb-2 p-2 rounded">
            {item.accordionTrigger}
          </AccordionTrigger>
          <AccordionContent>{item.accordionContent}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FrequentlyAskedQuestions;
