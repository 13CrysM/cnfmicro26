// app/api/catalogos/localidades/route.ts
import data from "@/app/data/catalogos/cat_localidades.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const estadoId = searchParams.get("estado");
  const municipioId = searchParams.get("municipio");

  if (!estadoId || !municipioId) return Response.json([]);

  const estado = data.find(e => e.id === estadoId);
  const municipio = estado?.municipios.find(m => m.id === municipioId);

  return Response.json(municipio?.localidades || []);
}