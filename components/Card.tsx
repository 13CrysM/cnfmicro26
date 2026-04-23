import React from "react";

export default function Card ( {title, children}: { title: string; children: React.ReactNode}) {
    return (
        <div className="border p-4 rounded shadow">
            <h2>{title}</h2>
            {children}
        </div>
    );
}