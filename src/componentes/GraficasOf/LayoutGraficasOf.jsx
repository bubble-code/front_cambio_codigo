import { useState } from 'react'
import DashboardTable from './DashboardTable';
import DashboardPorSecciones from './DashboardPorSecciones';

export default function LayoutGraficasOf() {
    // Estados para manejar las interacciones
    const [showDetails, setShowDetails] = useState(true);
    const [filterByClient, setFilterByClient] = useState(false);
    const [dashboarAtivo, setDashboardActivo] = useState()

    const activeSeccion = (e) => {
        // e.prevetDefault()
        setDashboardActivo(e)
    }
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Dashboard de Órdenes de Fabricación</h1>
            {/* Barra de herramientas */}
            <div className="flex items-center space-x-4 mb-8">
                {/* Botones */}
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => activeSeccion(1)} >
                    Todas las Secciones
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => activeSeccion(2)}>
                    Por Secciones
                </button>

                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Exportar a Excel
                </button>
                {/* Switch para mostrar detalles */}
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={showDetails}
                        onChange={() => setShowDetails(!showDetails)}
                    />
                    Mostrar Detalles
                </label>
                {/* Checkbox para filtrar por cliente */}
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={filterByClient}
                        onChange={() => setFilterByClient(!filterByClient)}
                    />
                    Filtrar por Cliente
                </label>
            </div>
            {/* Contenido dinámico basado en los estados */}
            <div className="bg-white shadow rounded p-4">
                {showDetails ? (
                    <p className="text-gray-700">Mostrando detalles de las órdenes...</p>
                ) : (
                    <p className="text-gray-500">Detalles ocultos</p>
                )}

                {filterByClient && (
                    <p className="text-red-500 mt-4">Filtrado por cliente</p>
                )}

                {/* Aquí iría el contenido dinámico, como tablas o gráficos */}
                {dashboarAtivo == 1 && <DashboardTable />}
                {dashboarAtivo == 2 && <DashboardPorSecciones />}
            </div>
        </div>
    )
}
