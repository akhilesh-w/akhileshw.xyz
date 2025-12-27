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
      <header className="appear stagger-1">
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-8">
          nav
        </h1>
      </header>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "/Now", href: "/now" },
            { label: "/Uses", href: "/uses" },
            { label: "/Bookshelf", href: "/bookshelf" },
            { label: "/Reading", href: "/reading" },
            { label: "/Donate", href: "/donate" }
          ].map((item, index) => (
            <div key={item.label} className={`appear stagger-${Math.min(index + 2, 5)}`}>
              <NavigatorItem label={item.label} href={item.href} />
            </div>
          ))}
        </div>
      </main>
    </MainLayout>
  );
}
