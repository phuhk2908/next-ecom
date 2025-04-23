"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  { name: "All", slug: "all" },
  { name: "Technology", slug: "technology" },
  { name: "Design", slug: "design" },
  { name: "Business", slug: "business" },
  { name: "Marketing", slug: "marketing" },
  { name: "Development", slug: "development" },
  { name: "Lifestyle", slug: "lifestyle" },
];

export function CategoryList() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="relative mb-8">
      <div className="hide-scrollbar flex overflow-x-auto pb-3">
        <div className="flex gap-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`#${category.slug}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory(category.slug);
              }}
              className={cn(
                "relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category.slug
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {activeCategory === category.slug && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 rounded-full bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
