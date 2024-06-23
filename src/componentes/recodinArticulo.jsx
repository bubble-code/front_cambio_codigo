import { useState, useRef } from 'react';
import axios from 'axios';

const UpdateArticuloForm = () => {
    const [oldIdArticulo, setOldIdArticulo] = useState('');
    const [newIdArticulo, setNewIdArticulo] = useState('');
    const [message, setMessage] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const descArticuloRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://192.168.1.145:5000/recoding_articulo', {
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
                const response = await axios.get(`http://192.168.1.145:5000/autocomplete?search=${search}`);
                // const response = await axios.get(`http://10.0.0.19:5000/autocomplete?search=${search}`);
                setSuggestions(response.data);
            } catch (error) {
                console.error('Error fetching autocomplete suggestions', error);
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (idArticulo,descArticulo) => {
        setOldIdArticulo(idArticulo);
        descArticuloRef.current.value = descArticulo;
        setSuggestions([]);
    };

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className='input-container'>
                        <div className='input-group'>
                            <label>Old ID Articulo:</label>
                            <input
                                type="text"
                                value={oldIdArticulo}
                                onChange={handleSearchChange}
                            />
                            {suggestions.length > 0 && (
                                <ul className="suggestions-list">
                                    {suggestions.map(({ IDArticulo, DescArticulo }, index) => (
                                        <li key={index} onClick={() => handleSuggestionClick(IDArticulo, DescArticulo)}>
                                            {IDArticulo} - {DescArticulo}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='input-group'>
                            <label>Descripcion:</label>
                            <input
                                type="text"
                                ref={descArticuloRef}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>New ID Articulo:</label>
                    <input
                        type="text"
                        // ref={newIdArticuloRef}
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
