import Button from "./_components/button";
import { editPsychTestQuestions, fetchPsychTestQuestions } from "./actions";
import FormList from "./edit-form-list";

export default async function EditPage() {
  const data = await fetchPsychTestQuestions();
  console.log(data);

  return (
    <>
      <div className="container mx-auto p-6 ">
        <div className="bg-white shadow-md rounded p-6">
          <div className=" space-x-4">
            <Button
              title="Save"
              onClick={null}
              disabled={false}
              state={"save"}
            />
            <Button
              title="Edit"
              onClick={null}
              disabled={false}
              state={"edit"}
            />
          </div>
          <FormList data={data} />
        </div>
      </div>
    </>
  );
}
