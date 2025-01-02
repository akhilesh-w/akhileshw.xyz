import MainLayout from "../../../components/main-layout";
import Link from "next/link";

const NavigatorItem = ({ label, href }: { label: string; href: string }) => (
  <Link
    href={href}
    className="mb-2 transition-all duration-300 hover:text-pink-600 hover:scale-105"
  >
    <h2 className="text-xl font-semibold">{label}</h2>
  </Link>
);

export default function Nav() {
  return (
    <MainLayout>
      <header>
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-8">
          nav
        </h1>
      </header>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <NavigatorItem label="/About" href="/about" />
          <NavigatorItem label="/Resume" href="/resume.pdf" />
          <NavigatorItem label="/Now" href="/now" />
          <NavigatorItem label="/Uses" href="/uses" />
          <NavigatorItem label="/Pictures" href="/pictures" />
          <NavigatorItem label="/Bookshelf" href="/bookshelf" />
          <NavigatorItem label="/Reading" href="/reading" />
          <NavigatorItem label="/Donate" href="/donate" />

        </div>
      </main>
    </MainLayout>
  );
}
