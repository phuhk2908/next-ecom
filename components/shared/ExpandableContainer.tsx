import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface ExpandableContainerProps {
  title: JSX.Element | string;
  children: JSX.Element | JSX.Element[];
  className?: string | null;
}

const ExpandableContainer = ({
  title,
  children,
  className,
}: ExpandableContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn(className)}
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between">
        <span className="text-[20px] font-bold">{title}</span>
        <ChevronRight
          className="size-4"
          style={{
            transform: isOpen ? `rotate(90deg)` : "none",
          }}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 py-2 transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ExpandableContainer;
