import { cn } from "@/app/_shared/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  id: string;
  alternate?: boolean;
  noHeader?: boolean;
  noPadding?: boolean;
};

const Section = ({
  children,
  className,
  id,
  alternate,
  noHeader,
  noPadding,
}: Props) => {
  return (
    <section
      id={id}
      className={cn(
        "px-standard scroll-mt-[8vh]",
        !alternate ? "bg-background" : "bg-muted",
        !noPadding && "pb-20 pt-10",
        className,
      )}
    >
      {!noHeader && (
        <h2 className="pb-10 pt-5 text-6xl font-bold capitalize text-white">
          {id}
        </h2>
      )}

      {children}
    </section>
  );
};

export default Section;
