function getCompatibleBloodTypes(bloodType) {
  const compatibility = {
    A: ["A", "AB"],
    B: ["B", "AB"],
    AB: ["AB"],
    O: ["A", "B", "AB", "O"],
  };
  return compatibility[bloodType] || [];
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const bloodType = url.searchParams.get("bloodType");
  if (!bloodType || !["A", "B", "AB", "O"].includes(bloodType)) {
    return new Response(JSON.stringify({ error: "Invalid blood type" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const compatibleTypes = getCompatibleBloodTypes(bloodType);
  const data = { compatibleTypes };

  return new Response(JSON.stringify({ data }), {
    headers: { "Content-Type": "application/json" },
  });
}
