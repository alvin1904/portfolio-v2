import ScrollingSection from "@/components/ScrollingSection";
import SmoothScrolling from "@/components/SmoothScrolling";
import PersonalSection from "@/components/modules/PersonalSection";

export default function Home() {
  return (
    <SmoothScrolling>
      <PersonalSection />
      <ScrollingSection />
    </SmoothScrolling>
  );
}
