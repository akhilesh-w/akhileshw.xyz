import { Metadata } from "next";
import MainLayout from "../../../components/main-layout";

export const metadata: Metadata = {}

export default function Reading() {
  return (
    <MainLayout>
      <header>
        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">
          reading
        </h1>
      </header>
    </MainLayout>
  )
}
