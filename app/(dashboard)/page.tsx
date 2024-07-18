import CompatibilityForm from "./compatibility-form";

export default async function Page() {
  return (
    <div className="mt-5">
      <h1 className="menu__title text-center">愛情兼容性計算機</h1>
      <div className="mt-6 leading-8">
        <CompatibilityForm />
      </div>
    </div>
  );
}
