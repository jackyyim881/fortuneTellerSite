import { PsychTest } from "@/types/psychTest";
import Button from "./_components/button";
import { editPsychTestQuestions, fetchPsychTestQuestions } from "./actions";
import FormList from "./edit-form-list";
import { revalidatePath } from "next/cache";

export default async function EditPage() {
  const data = await fetchPsychTestQuestions();
  console.log(data);
  async function submitForm(formData: FormData) {
    "use server";
    const updatedData = JSON.parse(
      formData.get("data") as string
    ) as PsychTest[];
    await editPsychTestQuestions(updatedData, data.id);
    revalidatePath("/edit");
  }

  return (
    <>
      <div className="container mx-auto p-6 ">
        <div className="bg-white shadow-md rounded p-6">
          <form action={submitForm}>
            <div className="space-x-4 flex mb-4">
              <Button title="Save" type="submit" state="save" />
              <Button title="Edit" type="button" state="edit" />
            </div>
            <FormList initialData={data} />
          </form>
        </div>
      </div>
    </>
  );
}
