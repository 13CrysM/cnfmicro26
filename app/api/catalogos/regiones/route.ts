// app/api/catalogos/regiones/route.ts
import data from "@/app/data/catalogos/cat_microregiones.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const zonaId = searchParams.get("zona");

  const zona = data.find(z => z.id === zonaId);

  return Response.json(
    zona?.regiones.map(r => ({
      id: r.id,
      nombre: r.region
    })) || []
  );
}