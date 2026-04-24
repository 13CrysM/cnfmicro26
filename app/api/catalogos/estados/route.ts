import data from "@/app/data/catalogos/cat_localidades.json"

export async function GET() {
    const estados = data.map(e => ({
        id: e.id,
        nombre: e.estado
    }));

    return Response.json(estados);
}