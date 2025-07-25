import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  color: "yoolax" | "galactic" | "ghm";
}

export function ProjectImage({ src, alt, color }: ProjectImageProps) {
  const colorClasses = {
    yoolax: "border-yoolax/20",
    galactic: "border-galactic/20",
    ghm: "border-ghm/20"
  };

  return (
    <Card className={cn("p-2 overflow-hidden", colorClasses[color])}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-auto rounded-lg object-cover transition-transform duration-300 hover:scale-105"
      />
    </Card>
  );
}