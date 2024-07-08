import Link from "next/link";
import { fetchPsychTestQuestions } from "./actions";

export default async function TestInfoPage() {
  const data = await fetchPsychTestQuestions();
  return (
    <div className="container mx-auto p-6">
      <h1
        className="
        text__title
      "
      >
        心理測驗主題
      </h1>
      <div className="">
        {data?.map((test) => (
          <div key={test.id} className="card mt-5 leading-10">
            <h2>{test.title}</h2>
            <p>{test.description}</p>
            <Link href={`/psychology-test/test/${test.id}`}>
              <span className="text-blue-300 hover:underline">View</span>
            </Link>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
