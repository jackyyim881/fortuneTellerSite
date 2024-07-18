import { Hero } from "./_components/Hero";
import CardList from "./card-list";
import Header from "./header";
import { PrimaryFeatures } from "./_components/PrimaryFeatures";
import SecondaryFeatures from "./_components/SecondaryFeatures";

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
