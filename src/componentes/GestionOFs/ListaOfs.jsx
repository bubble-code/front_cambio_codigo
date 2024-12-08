import { useState } from 'react'
import { Autocomplete } from '../Filters/AutoCompleted'
import { Button } from '@blueprintjs/core';

export default function ListaOfs() {
  const [filters, setFilters] = useState({
    articulo: '',
    cliente: '',
    pedido: '',
    ordenDesde: '',
    ordenHasta: '',
    pendiente: '',
    fechaReqDesde: '',
    fechaReqHasta: '',
    activa: ''
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = () => {
    onSearch(filters);
  };
  return (
    <div className="space-y-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <Autocomplete
          label="Articulo"
          name="articulo"
          value={filters.articulo}
          onChange={handleChange}
          apiEndpoint="/api/articulos" // Endpoint para obtener los artículos
        />
        <Autocomplete
          label="Pedido"
          name="pedido"
          value={filters.pedido}
          onChange={handleChange}
          apiEndpoint="/api/pedidos" // Endpoint para obtener los pedidos
        />
        <div>
          <label htmlFor="ordenDesde" className="block">Orden Desde</label>
          <input
            type="date"
            id="ordenDesde"
            name="ordenDesde"
            value={filters.ordenDesde}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="ordenHasta" className="block">Orden Hasta</label>
          <input
            type="date"
            id="ordenHasta"
            name="ordenHasta"
            value={filters.ordenHasta}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="pendiente" className="block">Pendiente </label>
          <input
            type="number"
            id="pendiente"
            name="pendiente"
            value={filters.pendiente}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="fechaReqDesde" className="block">Fecha Req Desde</label>
          <input
            type="date"
            id="fechaReqDesde"
            name="fechaReqDesde"
            value={filters.fechaReqDesde}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="fechaReqHasta" className="block">Fecha Req Hasta</label>
          <input
            type="date"
            id="fechaReqHasta"
            name="fechaReqHasta"
            value={filters.fechaReqHasta}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="activa" className="block">Activa</label>
          <select
            id="activa"
            name="activa"
            value={filters.activa}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

      </div>
      <Button onClick={handleSearch}>Buscar</Button>
    </div>
  )
}
