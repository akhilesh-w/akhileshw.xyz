import Link from "next/link";

const Linker = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => (
  <Link href={href} passHref target="_blank">
    <span
      className={`text-sm sm:text-base tracking-tight underline font-medium decoration-neutral-400/40 dark:decoration-neutral-600/40 underline-offset-[2px] decoration-[1.5px] hover:decoration-neutral-600 dark:hover:decoration-neutral-400 transition-colors ${className}`}
    >
      {children}
    </span>
  </Link>
);

export default Linker;
