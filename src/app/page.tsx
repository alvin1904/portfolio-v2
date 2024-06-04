import ScrollingSection from "@/components/ScrollingSection";
import PersonalSection from "@/components/modules/PersonalSection";

export default function Home() {
  return (
    <main className="main">
      <PersonalSection />
      <ScrollingSection />
    </main>
  );
}
