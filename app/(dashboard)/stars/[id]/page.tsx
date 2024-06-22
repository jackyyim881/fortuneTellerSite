export default async function Page({ params }: { params: { id: string } }) {
  const decodedId = decodeURIComponent(params.id);
  // const getzodiacSigns = await getzodiacSigns(dec);

  return (
    <>
      <div className="ml-4">
        <p className=" text-4xl font-bold">{decodedId}</p>
      </div>
    </>
  );
}
