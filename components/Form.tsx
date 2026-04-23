"use client";
import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        text: "",
        email: "",
        password: "",
        number: 0,
        date: "",
        time: "",
        datetime: "",
        checkbox: false,
        radio: "",
        select: "",
        textarea: "",
        file: null as File | null,
        color: "#000000",
        range: 50,
        url: "",
        tel: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, type, value, checked, files } = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "file"
                        ? files?.[0] || null
                        : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Texto:
                <input type="text" name="text" value={formData.text} onChange={handleChange} />
            </label>

            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>

            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>

            <label>
                Número:
                <input type="number" name="number" value={formData.number} onChange={handleChange} />
            </label>

            <label>
                Fecha:
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </label>

            <label>
                Hora:
                <input type="time" name="time" value={formData.time} onChange={handleChange} />
            </label>

            <label>
                Fecha y hora:
                <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleChange} />
            </label>

            <label>
                Checkbox:
                <input type="checkbox" name="checkbox" checked={formData.checkbox} onChange={handleChange} />
            </label>

            <fieldset>
                <legend>Radio:</legend>
                <label>
                    Opción A
                    <input type="radio" name="radio" value="A" checked={formData.radio === "A"} onChange={handleChange} />
                </label>
                <label>
                    Opción B
                    <input type="radio" name="radio" value="B" checked={formData.radio === "B"} onChange={handleChange} />
                </label>
            </fieldset>

            <label>
                Select:
                <select name="select" value={formData.select} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="op1">Opción 1</option>
                    <option value="op2">Opción 2</option>
                </select>
            </label>

            <label>
                Textarea:
                <textarea name="textarea" value={formData.textarea} onChange={handleChange} />
            </label>

            <label>
                Archivo:
                <input type="file" name="file" onChange={handleChange} />
            </label>

            <label>
                Color:
                <input type="color" name="color" value={formData.color} onChange={handleChange} />
            </label>

            <label>
                Rango:
                <input type="range" name="range" value={formData.range} onChange={handleChange} />
            </label>

            <label>
                URL:
                <input type="url" name="url" value={formData.url} onChange={handleChange} />
            </label>

            <label>
                Teléfono:
                <input type="tel" name="tel" value={formData.tel} onChange={handleChange} />
            </label>

            <button type="submit">Enviar</button>
        </form>
    );
}
