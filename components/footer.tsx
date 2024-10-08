import dynamic from "next/dynamic"
import { ThemeToggle } from "./ThemeToggle"
import Link from "next/link"

const Clock = dynamic(() => import('./clock'), { ssr: false })

const Footer = () => (
  <footer className='flex flex-col-reverse sm:flex-row items-center justify-between py-4'>
    <p className='text-xs opacity-40 pt-2 m-0 sm:pt-6 font-medium'>
      <abbr
        title='free for non-commercial use only'
        className='underline decoration-dotted underline-offset-2 cursor-help'>
        CC BY-NC 4.0
      </abbr>
      <span className='ml-2 cursor-none pointer-events-none select-none'>
        {new Date().getFullYear()} © Akhilesh Waghmare
      </span>
    </p>

    <div className="flex flex-row items-center text-xs opacity-40 pt-6 gap-3">
      <Clock />
      <a title='source code' href='https://github.com/akhilesh-w/akhileshw.xyz'>
        Source
      </a>
      <Link href="/rss" title="RSS Feed">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
          <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
        </svg>
      </Link>
      <ThemeToggle />
    </div>
  </footer>
)

export default Footer
