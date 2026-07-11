"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-ink md:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-muted transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen && (
              <div className="pb-5 pr-8">
                <p className="text-sm leading-relaxed text-muted">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
