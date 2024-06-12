export default async function ChatPage() {
  async function createMessage(formData: FormData) {
    "use server";
    const data = {
      question: formData.get("question"),
    };
    const response = await fetch("http://localhost:3000/api/astrology", {
      method: "POST",
      body: JSON.parse(JSON.stringify(data)),
    });
    const result = await response.json();
    console.log(result);
  }
  return (
    <div className="grid max-w-md mx-auto">
      <form action={createMessage} method="POST">
        <label>
          Question:
          <input
            type="text"
            name="question"
            className="border border-gray-300 rounded-md p-2 mr-2"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        />
      </form>
    </div>
  );
}
