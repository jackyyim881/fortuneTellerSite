"use client";
type SearchdataProps = {
  date1: string;
  time1: string;
  date2: string;
  time2: string;
};
export default function SearchPath({ data }: { data: SearchdataProps }) {
  return (
    <>
      <div>
        <h1>{data.date1}</h1>
        <h1>
          {data.time1} {data.date2} {data.time2}
        </h1>
      </div>
    </>
  );
}
