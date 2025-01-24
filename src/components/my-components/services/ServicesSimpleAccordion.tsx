//Shadcn Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

//Interfaces
import { ServiceAccordionProps } from "@/components/my-components/services/interfaces";

const ServicesSimpleAccordion = ({
  id,
  accordionTrigger,
  accordionContent,
}: ServiceAccordionProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="font-sans border-none w-ful pb-16 w-full"
    >
      <AccordionItem
        value={id}
        key={id}
        className="flex flex-col w-full border-none"
      >
        <AccordionTrigger className="mb-2 p-2 border shadow-md bg-white  rounded-none">
          {accordionTrigger}
        </AccordionTrigger>
        <AccordionContent>
          <Card className="shadow-md">
            <CardContent>
              <div className="p-2">
                <h3 className="text-2xl text-red-500 font-sans font-bold mb-2">
                  {accordionContent.title1}
                </h3>
                <p className="font-sans tracking-wide leading-relaxed">
                  {accordionContent.content1}
                </p>
              </div>
              <div className="p-2">
                <h3 className="text-2xl text-red-500 font-sans font-bold mb-2">
                  {accordionContent.title2}
                </h3>
                <p className="font-sans tracking-wide leading-relaxed">
                  {accordionContent.content2}
                </p>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ServicesSimpleAccordion;
