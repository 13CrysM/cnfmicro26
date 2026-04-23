"use client";
import { useEffect, useState } from "react";
import Table from "@/components/Table";
import Card from "@/components/Card";
import Form from "@/components/Form";

export default function ItemsPage() {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/items")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <main className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Listado de Items</h1>

            {/* Renderizado con tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item) => (
                    <Card key={item.id} title={item.nombre}>
                        <p>ID: {item.id} - {item.nombre}</p>
                    </Card>
                ))}
            </div>

            {/* Renderizado en tabla */}
            <Table data={items} />
            <div>
                <Form></Form>
            </div>
        </main>
    );
}
