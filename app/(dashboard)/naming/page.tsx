import NameGeneratorForm from "./naming-form";
export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="">
        <h1 className="text-4xl font-bold mb-8">風水改名</h1>
      </div>
      <NameGeneratorForm />
    </div>
  );
}
