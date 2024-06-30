import { fetchSpecialArticlesData } from "@/lib/scraper";
import PaginationButton from "./_components/pagination-button";
export default async function Page() {
  const article = 70;
  const data = await fetchSpecialArticlesData(
    `http://www.suanming.com/zt/${article}.html`,
    1
  );
  const processedData = data
    .map((article) => {
      // Use a regular expression to find all matches of the date pattern
      const datePattern = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/g;
      const description = article.description.match(/[^?]+\?/g);

      console.log(description);
      const dates = article.date.match(datePattern);

      // If dates and description are found, return an array of objects with the article name, description, and date
      if (dates && description) {
        return dates.map((date, i) => ({
          description: description[i],
          date,
          type: article.type,
        }));
      }
    })
    .flat(); // Flatten the array since map returns an array of arrays
  return (
    <>
      <div className="mt-6 ml-4">
        <div className="flex  flex-col ">
          <h1
            className="
          text__title
          "
          >
            專題
          </h1>
          <PaginationButton />
        </div>
        <div className="">
          {processedData &&
            processedData.map((item, index) => (
              <div key={index} className="leading-7   mt-10 md:ml-4">
                <div className="text_small_heading ">
                  <p>{item?.description}</p>
                </div>
                <div className="ml-4 mt-4">
                  <p>{item?.date}</p>
                  <p>{item?.type}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
