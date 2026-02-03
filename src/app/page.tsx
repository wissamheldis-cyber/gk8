import { Hero } from "@/components/landing/Hero";
import { Constat } from "@/components/landing/Constat";
import { Promesse } from "@/components/landing/Promesse";
import { GestesTeaser } from "@/components/landing/GestesTeaser";
import { FormationsPreview } from "@/components/landing/FormationsPreview";
import { Benefices } from "@/components/landing/Benefices";
import { Terrain } from "@/components/landing/Terrain";
import { CTAFinal } from "@/components/landing/CTAFinal";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Constat />
      <Promesse />
      <GestesTeaser />
      <FormationsPreview />
      <Benefices />
      <Terrain />
      <CTAFinal />
    </div>
  );
}
