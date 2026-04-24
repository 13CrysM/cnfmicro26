"use client";

import { useEffect, useState } from "react";
import { Estado, Municipio, Localidad } from "@/types/catalogos";
import { Sic } from "@/types/sics";
import { getData } from "@/lib/fetcher";
import Table from "@/components/Table";

export default function UbicacionForm() {
    const [estados, setEstados] = useState<Estado[]>([]);
    const [municipios, setMunicipios] = useState<Municipio[]>([]);
    const [localidades, setLocalidades] = useState<Localidad[]>([]);

    const [estadoId, setEstadoId] = useState("");
    const [municipioId, setMunicipioId] = useState("");
    const [localidadId, setLocalidadId] = useState("");

    const [sics, setSics] = useState<Sic[]>([]);
    const serviciosTabla = sics.map(s => ({
    CCT: s.cct,
    Nombre: s.nombre,
    Tipo: s.tipo,
    Estatus: s.estatus,
    Nivel: s.nivel,
    Programa: s.programa
}));
    useEffect(() => {
        if (!estadoId || !municipioId || !localidadId) {
            return; // limpiar cuando falte selección
        }
    }, [estadoId, municipioId, localidadId]);

    useEffect(() => {
        if (!estadoId || !municipioId || !localidadId) return;

        getData<Sic[]>(
            `/api/catalogos/sic?estado=${estadoId}&municipio=${municipioId}&localidad=${localidadId}`
        )
            .then(setSics)
            .catch(console.error);
    }, [estadoId, municipioId, localidadId]);


    // 🔹 Estados
    useEffect(() => {
        getData<Estado[]>("/api/catalogos/estados")
            .then(setEstados)
            .catch(console.error);
    }, []);

    // 🔹 Municipios
    useEffect(() => {
        if (!estadoId) return;

        getData<Municipio[]>(`/api/catalogos/municipios?estado=${estadoId}`)
            .then(data => {
                setMunicipios(data);
                setMunicipioId("");
                setLocalidades([]);
                setLocalidadId("");
            })
            .catch(console.error);

    }, [estadoId]);

    // 🔹 Localidades
    useEffect(() => {
        if (!estadoId || !municipioId) return;

        getData<Localidad[]>(
            `/api/catalogos/localidades?estado=${estadoId}&municipio=${municipioId}`
        )
            .then(data => {
                setLocalidades(data);
                setLocalidadId("");
            })
            .catch(console.error);

    }, [estadoId, municipioId]);

    return (
        <div>
            {/* ESTADO */}
            <select value={estadoId} onChange={e => setEstadoId(e.target.value)}>
                <option value="">Selecciona estado</option>
                {estados.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.nombre}
                    </option>
                ))}
            </select>

            {/* MUNICIPIO */}
            <select
                value={municipioId}
                onChange={e => setMunicipioId(e.target.value)}
                disabled={!estadoId}
            >
                <option value="">Selecciona municipio</option>
                {municipios.map(m => (
                    <option key={m.id} value={m.id}>
                        {m.nombre}
                    </option>
                ))}
            </select>

            {/* LOCALIDAD */}
            <select
                value={localidadId}
                onChange={e => setLocalidadId(e.target.value)}
                disabled={!municipioId}
            >
                <option value="">Selecciona localidad</option>
                {localidades.map(l => (
                    <option key={l.id} value={l.id}>
                        {l.localidad}
                    </option>
                ))}
            </select>

            {serviciosTabla.length > 0 && <Table data={serviciosTabla} />}
        </div>
    );
}