import sics from "@/app/data/catalogos/cat_sic.json";
import { Sic } from "@/types/sics";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const estado = searchParams.get("estado");
  const municipio = searchParams.get("municipio");
  const localidad = searchParams.get("localidad");

  const resultado = (sics as Sic[]).filter(s =>
    (!estado || s.estadoId === estado) &&
    (!municipio || s.municipioId === municipio) &&
    (!localidad || s.localidadId === localidad)
  );

  return Response.json(resultado);
}