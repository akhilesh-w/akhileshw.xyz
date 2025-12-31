import Link from "next/link"
import { ThemeToggle } from './ThemeToggle'

const NavigatorItem = ({ label, href }: { label: string; href: string }) => (
  <Link href={href} className="text-sm sm:text-base tracking-tight text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 underline font-medium decoration-transparent hover:decoration-neutral-400/40 dark:hover:decoration-neutral-600/40 underline-offset-[2px] decoration-[1.5px] transition-all">
    {label}
  </Link>
)

const Navigator = () => (
  <header className="flex justify-between items-center pt-4 pb-8">
    <div className='flex'>
      <Link href="/" className="text-neutral-400 pr-2 leading-none cursor-pointer wiggle inline-block select-none">
        <h1>
          akhilesh
        </h1>
      </Link>
      {/* TODO: If looking for new job, then enable */}
      {/* <div className='flex w-max items-center border px-2 rounded-full'>
        <div className='rounded-full bg-green-400 h-2 w-2' />
        <p className='text-[10px] pl-[6px]'>is open to new opportunities!</p>
      </div> */}
    </div>

    <nav className='flex gap-2 sm:gap-4 justify-end items-center flex-nowrap'>
      <NavigatorItem label='about' href='/about' />
      <NavigatorItem label='now' href='/now' />
      <NavigatorItem label='blog' href='/blog' />
      <NavigatorItem label='logs' href='/logs' />
      {/* <NavigatorItem label='resume' href='/resume.pdf' /> */}
      <NavigatorItem label='uses' href='/uses' />
      <NavigatorItem label='notes' href='http://notes.akhileshw.xyz/' />
      <div className="flex items-center pl-2">
        <ThemeToggle />
      </div>
    </nav>
  </header>
)

export default Navigator
