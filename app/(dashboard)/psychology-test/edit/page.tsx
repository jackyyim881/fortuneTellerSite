import Button from "./_components/button";
import { fetchPsychTestQuestions } from "./actions";
import FormList from "./edit-form-list";
import Link from "next/link";

export default async function EditPage() {
  const data = await fetchPsychTestQuestions();
  return (
    <>
      <div className="container mx-auto p-6 ">
        <div className="bg-white shadow-md rounded p-6">
          <div className="space-x-4 flex mb-4">
            <Link href="save" className="text-blue-100 hover:underline">
              <Button title="Save" type="submit" state="save" />
            </Link>
            <Link href="edit" className="text-blue-100 hover:underline">
              <Button title="Edit" type="button" state="edit" />
            </Link>
            <Link href="create" className="text-blue-100 hover:underline">
              <Button title="Create" type="button" state="create" />
            </Link>
            <Link href="test" className="text-blue-100 hover:underline">
              <Button title="Test" type="button" state="test" />
            </Link>
          </div>
          <FormList initialData={data} />
        </div>
      </div>
    </>
  );
}
