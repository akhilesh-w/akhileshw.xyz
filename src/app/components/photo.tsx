import Image, { StaticImageData } from 'next/image'

export const Photo = ({ src }: { src: StaticImageData }) => {
  return (
    <Image
      className='inline-block h-24 w-24 mb-4 rounded-xl object-cover border-1 border-neutral-600 hover:h-48 hover:w-48 hover:saturate-100 hover:contrast-100 hover:rounded-2xl duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]'
      priority
      src={src}
      sizes='(max-width: 768px) 213px, 33vw'
      alt='a picture of me on a terrace in Hyderabad, India'
      placeholder='blur'
    />
  )
}
