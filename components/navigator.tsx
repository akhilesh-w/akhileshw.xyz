import Link from 'next/link'

const NavigatorItem = ({ label, href }: { label: string; href: string }) => (
  <Link href={href} as={href} className={`text-sm sm:text-base tracking-tight text-neutral-400 hover:underline hover:underline-offset-4 hover:transition-transform`}>
    <p>{label}</p>
  </Link>
)

const Navigator = () => (
  <header className="flex justify-between pt-4">
    <div className='flex pb-8'>
      <h1 className="text-neutral-400 pr-2">
        akhilesh
      </h1>
      {/* TODO: If looking for new job, then enable */}
      {/* <div className='flex w-max items-center border px-2 rounded-full'>
        <div className='rounded-full bg-green-400 h-2 w-2' />
        <p className='text-[10px] pl-[6px]'>is open to new opportunities!</p>
      </div> */}
    </div>

    <nav className='flex w-full gap-4 pb-8 justify-end'>
      <NavigatorItem label='home' href='/' />
      <NavigatorItem label='about' href='/about' />
      <NavigatorItem label='posts' href='/blog' />
      {/* <NavigatorItem label='resume' href='/resume.pdf' /> */}
      {/* <NavigatorItem label='uses' href='/uses' /> */}
      {/* <NavigatorItem label='now' href='/now' /> */}
      <NavigatorItem label='nav' href='/nav' />
    </nav>
  </header>
)

export default Navigator
