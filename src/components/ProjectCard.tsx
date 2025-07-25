import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  color: "yoolax" | "galactic" | "ghm";
  children: ReactNode;
  className?: string;
}

export function ProjectCard({ title, color, children, className }: ProjectCardProps) {
  const colorClasses = {
    yoolax: "bg-gradient-yoolax border-yoolax/20 hover:border-yoolax/40",
    galactic: "bg-gradient-galactic border-galactic/20 hover:border-galactic/40", 
    ghm: "bg-gradient-ghm border-ghm/20 hover:border-ghm/40"
  };

  const titleColors = {
    yoolax: "text-yoolax",
    galactic: "text-galactic",
    ghm: "text-ghm"
  };

  return (
    <Card className={cn(
      "p-6 shadow-card hover:shadow-hover transition-all duration-300",
      colorClasses[color],
      className
    )}>
      <h2 className={cn(
        "text-2xl font-bold mb-6 text-center",
        titleColors[color]
      )}>
        {title}
      </h2>
      {children}
    </Card>
  );
}