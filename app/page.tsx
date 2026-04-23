"use client";
import "../styles/globals.css"
import { useEffect, useState } from "react";

export default function Home() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("/api/hello")
    .then((res) => res.json())
    .then((data)=> setMensaje(data.mensaje));
  }, []);

  return (
    <main>
      <h1>Hola desde Next.js limpio</h1>
      <p>Este es el Frontend</p>
      <p>Respuesta del backend: {mensaje}</p>
    </main>
  );
}
