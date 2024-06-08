import Navigator from '../components/navigator'
import Footer from '../components/footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div className='mx-auto max-w-[44rem] sm:pt-[3rem] px-6 xs:px-0 pb-52'>
    <Navigator />
    {children}
    <Footer />
  </div>
)

export default Layout
