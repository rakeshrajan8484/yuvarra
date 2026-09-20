import { Closer } from "@/components/Closer";
import { GlobalPresence } from "@/components/GlobalPresence";
import { HomeHero } from "@/components/HomeHero";
import { HomePlatform } from "@/components/HomePlatform";
import { NewsBand } from "@/components/NewsBand";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomePlatform />
      <GlobalPresence />
      <NewsBand />
      <Closer />
    </>
  );
}
