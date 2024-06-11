import { useState } from 'react';
import axios from 'axios';

const UpdateArticuloForm = () => {
    const [oldIdArticulo, setOldIdArticulo] = useState('');
    const [newIdArticulo, setNewIdArticulo] = useState('');
    const [message, setMessage] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://10.0.0.19:5000/recoding_articulo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                old_id_articulo: oldIdArticulo,
                new_id_articulo: newIdArticulo,
            }),
        });

        const data = await response.json();
        if (data.status === 'success') {
            setMessage('Articulo actualizado con éxito');
        } else {
            setMessage('Hubo un error al actualizar el articulo');
        }
    };

    const handleSearchChange = async (e) => {
        const search = e.target.value;
        setOldIdArticulo(search);
        console.log(search)
        if (search.length > 2) {
            try {
                const response = await axios.get(`http://10.0.0.19:5000/autocomplete?search=${search}`);
                setSuggestions(response.data);
            } catch (error) {
                console.error('Error fetching autocomplete suggestions', error);
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setOldIdArticulo(suggestion);
        setSuggestions([]);
    };

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Old ID Articulo:</label>
                    <input
                        type="text"
                        value={oldIdArticulo}
                        onChange={handleSearchChange}
                    />
                    {suggestions.length > 0 && (
                        <ul className="suggestions-list">
                            {suggestions.map((suggestion, index) => (
                                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="form-group">
                    <label>New ID Articulo:</label>
                    <input
                        type="text"
                        value={newIdArticulo}
                        onChange={(e) => setNewIdArticulo(e.target.value)}
                    />
                </div>
                <button type="submit">Renombrar Articulo</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default UpdateArticuloForm;
