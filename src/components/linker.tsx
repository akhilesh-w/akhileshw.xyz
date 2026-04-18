import Link from "next/link";
import { isExternalHref } from "@/utils/site";

const Linker = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => (
  <Link
    href={href}
    className={`text-sm sm:text-base tracking-tight underline font-medium decoration-neutral-400/40 dark:decoration-neutral-600/40 underline-offset-[2px] decoration-[1.5px] hover:decoration-neutral-600 dark:hover:decoration-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-neutral-600 dark:focus-visible:ring-offset-gray-900 transition-colors ${className ?? ""}`}
    target={isExternalHref(href) ? "_blank" : undefined}
    rel={isExternalHref(href) ? "noopener noreferrer" : undefined}
  >
    {children}
  </Link>
);

export default Linker;
