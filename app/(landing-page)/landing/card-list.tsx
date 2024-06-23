export default function CardList() {
  const customers = ["John", "Jane", "Mike", "Sarah"];
  return (
    <div className="grid mt-10 grid-cols-3 gap-4 	text-white  ">
      <div className=" p-4">
        <h1 className="text-2xl text-center mb-5">Service Plan</h1>
        <span className="text-md  text-wrap">
          provides a list of service plans for customers to choose from
        </span>
        <div className="mt-5 items-center">{/* <Button /> */}</div>
      </div>
      <div className="flex items-center justify-center">
        <svg
          width="300"
          height="300"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="yin-yang">
            <circle cx="50" cy="50" r="50" fill="black" />
            <path
              d="M50,0 a50,50 0 0,1 0,100 a25,25 0 0,0 0,-50 a25,25 0 0,1 0,-50"
              fill="white"
            />
            <circle cx="50" cy="25" r="10" fill="white" />
            <circle cx="50" cy="75" r="10" fill="black" />
          </g>
        </svg>
      </div>
      <div className="p-4">
        <h1 className="text-2xl text-center mb-5">Service Plan</h1>
        <span className="text-md text-wrap">
          provides a list of service plans for customers to choose from
        </span>
        <div className="mt-5 items-center">{/* <Button /> */}</div>
      </div>
    </div>
  );
}
