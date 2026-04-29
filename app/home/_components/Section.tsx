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
        "scroll-mt-24 px-6 sm:px-8 lg:px-standard",
        !alternate ? "bg-background" : "bg-muted",
        !noPadding && "pb-16 pt-8",
        className,
      )}
    >
      {!noHeader && (
        <div className="max-w-3xl pb-8 pt-3">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#aebdff]">
              {eyebrow}
            </p>
          )}
          <h2 className="font-serif text-5xl font-normal leading-tight text-white lg:text-6xl">
            {title ?? id}
          </h2>
          {intro && (
            <p className="mt-3 max-w-2xl text-base leading-7 text-gray-300">
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
