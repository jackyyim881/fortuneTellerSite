import { createTest } from "./actions";
import FormCreateListPage from "./form-create-list";

export default function createListPage() {
  return (
    <>
      <FormCreateListPage createTest={createTest} />
    </>
  );
}
