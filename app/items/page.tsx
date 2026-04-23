"use client"
import { useEffect, useState } from "react"

export default function ItemsPage() {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/items")
        .then((res) => res.json())
        .then ((data) => setItems(data));
    }, []);

    return (
        <main>
            <h1>Listado de Items</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.nombre}</li>
                ))}
            </ul>
        </main>
    );
}