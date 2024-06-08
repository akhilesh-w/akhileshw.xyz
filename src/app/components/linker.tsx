import Link from "next/link";

const linker = ({ linktext, href }: { linktext: string; href: string }) => (
  <Link href={href} passHref target="_blank">
    <span className="text-sm sm:text-base tracking-tight underline hover:underline-offset-4 hover:transition-transform">
      {linktext}
    </span>
  </Link>
)

export default linker
