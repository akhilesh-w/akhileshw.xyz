import { Metadata } from "next";
import MainLayout from "@/components/main-layout";
import Linker from "@/components/linker";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  TvIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  CommandLineIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  MusicalNoteIcon,
  ArrowTopRightOnSquareIcon,
  SpeakerWaveIcon,
  CursorArrowRaysIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Uses",
  description: "A list of hardware and software I use on a daily basis.",
};

function GearItem({
  title,
  icon: Icon,
  productName,
  href,
  description
}: {
  title: string;
  icon: any;
  productName: React.ReactNode;
  href?: string;
  description?: React.ReactNode;
}) {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-start py-4 gap-2 sm:gap-6 border-b border-neutral-200 dark:border-neutral-800 last:border-0 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 rounded-lg px-3 -mx-3 transition-colors">
      <div className="flex items-center gap-3 w-40 shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400">
        <Icon className="w-5 h-5 shrink-0" />
        <span className="text-sm font-normal capitalize">{title}</span>
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        {href ? (
          <Linker href={href} className="inline-flex items-center gap-2 w-fit group/link text-neutral-900 dark:text-neutral-100 no-underline hover:text-neutral-900 dark:hover:text-neutral-100">
            <span className="truncate text-sm font-normal group-hover/link:underline">{productName}</span>
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-neutral-400 group-hover/link:text-neutral-900 dark:group-hover/link:text-neutral-100 transition-colors" />
          </Linker>
        ) : (
          <span className="text-sm font-normal text-neutral-900 dark:text-neutral-100">{productName}</span>
        )}
        {description && (
          <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed prose prose-sm dark:prose-invert">
            {description}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Uses() {
  return (
    <MainLayout>
      <header className="appear stagger-1 mb-10">
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">
          uses
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          My gears and tools I use to get my work done.
        </p>
      </header>
      <main>
        <section className="mb-12 appear stagger-2">
          <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Devices & Accessories</h2>
          <div className="flex flex-col">
            <GearItem
              title="Laptop"
              icon={ComputerDesktopIcon}
              productName="MacBook Pro M5 Pro 14&quot;"
              href="https://amzn.to/4czo07B"
            />
            <GearItem
              title="Secondary Laptop"
              icon={ComputerDesktopIcon}
              productName="Lenovo IdeaPad Gaming 3"
              description="It runs Arch."
            />
            <GearItem
              title="Old Laptop"
              icon={ComputerDesktopIcon}
              productName="ThinkPad T440s"
            />
            <GearItem
              title="Monitor"
              icon={TvIcon}
              productName="Dell S2725QC 27&quot; 4k"
              href="https://amzn.to/4tjqoX0"
            />
            <GearItem
              title="Primary Phone"
              icon={DevicePhoneMobileIcon}
              productName="Random Xiaomi Phone"
            />
            <GearItem
              title="Secondary Phone"
              icon={DevicePhoneMobileIcon}
              productName="Pocofone (LineageOS)"
            />
            <GearItem
              title="Headphones"
              icon={SpeakerWaveIcon}
              productName="Sony WH-CH720N"
              href="https://amzn.to/4mzssHM"
            />
            <GearItem
              title="Mouse"
              icon={CursorArrowRaysIcon}
              productName="Logitech G304"
              href="https://amzn.to/4dW5KYo"
            />
            <GearItem
              title="Keyboard"
              icon={ComputerDesktopIcon}
              productName="Redragon K617"
              href="https://amzn.to/4tPEtLD"
            />
          </div>
        </section>

        <section className="appear stagger-3">
          <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Software</h2>
          <div className="flex flex-col">
            <GearItem
              title="Note Taking"
              icon={DocumentTextIcon}
              productName="Logseq"
              href="https://github.com/logseq/logseq"
            />
            <GearItem
              title="Editor"
              icon={CodeBracketIcon}
              productName="Zed & Neovim"
            />
            <GearItem
              title="Terminal"
              icon={CommandLineIcon}
              productName="Ghostty + Tmux"
              href="https://github.com/ghostty/ghostty"
            />
            <GearItem
              title="Browser"
              icon={GlobeAltIcon}
              productName="Brave + Arc"
            />
            <GearItem
              title="Email"
              icon={EnvelopeIcon}
              productName="Proton Mail"
              href="https://proton.me/mail"
            />

            <GearItem
              title="Music"
              icon={MusicalNoteIcon}
              productName="Spotify"
              description="There's no clear winner here. I use spotify, youtube music, and sometimes apple music too, but spotify is still my favorite"
            />
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
