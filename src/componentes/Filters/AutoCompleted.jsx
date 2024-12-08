import { useState, useEffect } from 'react';
import axios from 'axios';

export const Autocomplete = ({ label, name, value, onChange, apiEndpoint }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    // Manejar cambios en el campo de texto
    const handleInputChange = async (e) => {
        const { value } = e.target;
        onChange(e); // Propagar el cambio al componente padre (para actualizar el estado del filtro)

        // Solo realizar la consulta si el campo tiene un valor
        if (value.trim()) {
            setLoading(true);

            try {
                // Realizar la consulta a la API
                const response = await axios.get(`${apiEndpoint}?query=${value}`);
                setSuggestions(response.data); // Suponiendo que la respuesta contiene los resultados
            } catch (error) {
                console.error('Error fetching suggestions:', error);
                setSuggestions([]);
            } finally {
                setLoading(false);
            }
        } else {
            setSuggestions([]); // Si el campo está vacío, borrar las sugerencias
        }
    };

    return (
        <div>
            <label htmlFor={name} className="block">{label}</label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder={`Buscar ${label}`}
            />
            {loading && <p>Loading...</p>}
            {suggestions.length > 0 && (
                <ul className="mt-2 border border-gray-300 rounded-md max-h-48 overflow-y-auto">
                    {suggestions.map((item, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            {item.name} {/* Asegúrate de usar el campo correcto de la respuesta */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
