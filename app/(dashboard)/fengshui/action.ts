export async function getFengshui() {
  const fengshui = await fetch("http://localhost:3000/api/astro");
  return fengshui.json();
}
