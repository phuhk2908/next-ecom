// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { cn } from "@/lib/utils";
// import { ChevronRight } from "lucide-react";
// import { useState } from "react";

// interface ExpandableContainerProps {
//   title: JSX.Element | string;
//   children: JSX.Element | JSX.Element[];
//   className?: string | null;
// }

// const ExpandableContainer = ({
//   title,
//   children,
//   className,
// }: ExpandableContainerProps) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <Collapsible
//       open={isOpen}
//       onOpenChange={setIsOpen}
//       className={cn(className)}
//     >
//       <CollapsibleTrigger className="flex w-full items-center justify-between">
//         <span className="text-[20px] font-bold">{title}</span>
//         <ChevronRight
//           className="size-4"
//           style={{
//             transform: isOpen ? `rotate(90deg)` : "none",
//           }}
//         />
//       </CollapsibleTrigger>
//       <CollapsibleContent className="mt-2 py-2 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
//         {children}
//       </CollapsibleContent>
//     </Collapsible>
//   );
// };

// export default ExpandableContainer;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface ExpandableContainerProps {
  title: JSX.Element | string;
  children: JSX.Element | JSX.Element[];
  className?: string | null;
}

const ExpandableContainer = ({ title, children }: ExpandableContainerProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent className="my-2">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ExpandableContainer;
