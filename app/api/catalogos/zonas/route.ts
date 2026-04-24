// app/api/catalogos/zonas/route.ts
import data from "@/app/data/catalogos/cat_microregiones.json";

export async function GET() {
  return Response.json(
    data.map(z => ({
      id: z.id,
      nombre: z.zona
    }))
  );
}