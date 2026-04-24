// app/api/catalogos/microregiones/route.ts
import data from "@/app/data/catalogos/cat_microregiones.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const zonaId = searchParams.get("zona");
  const regionId = searchParams.get("region");

  const zona = data.find(z => z.id === zonaId);
  const region = zona?.regiones.find(r => r.id === regionId);

  return Response.json(region?.microregiones || []);
}