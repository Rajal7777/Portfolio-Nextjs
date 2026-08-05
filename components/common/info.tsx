import { cn } from "@/lib/utils";
import Image from "next/image";

type InfoProps = {
  title: string;
  description: string;
  image: string;
  duration: string;
  className?: string;
  info?: string;
};

const InfoCard = ({
  title,
  description,
  image,
  duration,
  info,
  className,
}: InfoProps) => {
  return (
    <section
      className={
        "flex items-center justify-between gap-4 align-top " + (className ?? "")
      }
    >
      <div className="flex flex-col md:flex-row min-w-0 items-start gap-3">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full  border border-slate-200 bg-white p-2">
          <Image
            src={image}
            alt={title}
            fill
            quality={100}
            sizes="80px"
            className="object-contain p-1"
          />
        </div>
        <div className={cn("", className)}>
          <h5 className="font-medium  text-foreground">{title}</h5>
          {info && <p className="text-sm text-gray-700">{info}</p>}
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      <p className="rounded-full bg-slate-100 px-4 text-left text-gray-700 whitespace-nowrap">
        {duration}
      </p>
    </section>
  );
};

export default InfoCard;
