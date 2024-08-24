import Link from "next/link";

const linker = ({ linktext, href }: { linktext: string; href: string }) => (
  <Link href={href} passHref target="_blank">
    <span className="text-sm sm:text-base tracking-tight underline hover:underline-offset-4 decoration-gray-400 hover:transition-transform">
      {linktext}
    </span>
  </Link>
)

// const linker = ({ linktext, href }: { linktext: string; href: string }) => (
//   <Link href={href} as={href} className={`text-sm sm:text-base tracking-tight text-neutral-400 hover:underline hover:underline-offset-4 hover:transition-transform`}>
//     <p>{linktext}</p>
//   </Link>
// )

export default linker
