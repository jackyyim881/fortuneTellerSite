import PaginationButton from "./_components/pagination-button";
export default async function Page() {
  return (
    <>
      <div className="mt-6 ml-4">
        <div className="flex  flex-col ">
          <h1
            className="
          menu__title
          "
          >
            專題
          </h1>
          <PaginationButton />
        </div>
      </div>
    </>
  );
}
