import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, nombre: "Item 1" },
    { id: 2, nombre: "Item 2" },
    { id: 3, nombre: "Item 3" },
    { id: 4, nombre: "Item 4" },
    { id: 5, nombre: "Item 5" },
    { id: 6, nombre: "Item 6" },
  ]);
}
