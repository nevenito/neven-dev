import { cn } from "@/app/_shared/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  id: string;
  title?: string;
  eyebrow?: string;
  intro?: string;
  alternate?: boolean;
  noHeader?: boolean;
  noPadding?: boolean;
};

const Section = ({
  children,
  className,
  id,
  title,
  eyebrow,
  intro,
  alternate,
  noHeader,
  noPadding,
}: Props) => {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[8vh] px-8 lg:px-standard",
        !alternate ? "bg-background" : "bg-muted",
        !noPadding && "pb-20 pt-10",
        className,
      )}
    >
      {!noHeader && (
        <div className="max-w-3xl pb-10 pt-5">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            {title ?? id}
          </h2>
          {intro && (
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300 lg:text-lg">
              {intro}
            </p>
          )}
        </div>
      )}

      {children}
    </section>
  );
};

export default Section;
