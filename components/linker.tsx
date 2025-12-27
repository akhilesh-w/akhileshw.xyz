import Link from "next/link";

const linker = ({ linktext, href }: { linktext: string; href: string }) => (
  <Link href={href} passHref target="_blank">
    <span className="text-sm sm:text-base tracking-tight underline font-medium decoration-neutral-400/40 dark:decoration-neutral-600/40 underline-offset-[2px] decoration-[1.5px] hover:decoration-neutral-600 dark:hover:decoration-neutral-400 transition-colors">
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
