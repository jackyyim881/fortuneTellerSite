import { Hero } from "@/components/Hero";
import CardIcon from "./card-icon";
import CardList from "./card-list";
import Header from "./header";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import SecondaryFeatures from "@/components/SecondaryFeatures";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <CardList />
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
      </main>
    </>
  );
}
