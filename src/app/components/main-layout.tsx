import Footer from './footer'
import Navigator from './navigator'

type LayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: LayoutProps) => (
  <div className='mx-auto max-w-[44rem] sm:pt-[2rem] px-6 xs:px-0 pb-52'>
    <Navigator />
    {children}
    <Footer />
  </div>
)

export default MainLayout
