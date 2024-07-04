export default function Page({ params }: { params: { id: string } }) {
  const decodedId = decodeURIComponent(params.id);

  return (
    <>
      <div className="font-bold p-2">
        <div className="*:p-2">
          <h1 className="  text__title">{decodedId}</h1>
        </div>
      </div>
    </>
  );
}
