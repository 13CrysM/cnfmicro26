import data from "@/app/data/catalogos/cat_localidades.json";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const estadoId = searchParams.get("estado");

    if (!estadoId) return Response.json([]);

    const estado = data.find(e => e.id === estadoId);

    const municipios = estado?.municipios.map(m => ({
        id: m.id,
        nombre: m.municipio
    })) || [];

    return Response.json(municipios);
}