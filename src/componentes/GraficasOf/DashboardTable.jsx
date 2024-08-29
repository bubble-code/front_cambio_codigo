import { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { motion } from 'framer-motion';
import axios from 'axios';
import PropTypes from "prop-types";

export default function DashboardTable({ startDate, endDate }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Llamada a tu API Flask para obtener los datos.
        const fetchData = async () => {
            try {
                const start = startDate ? startDate.toISOString().split('T')[0] : null;
                const end = endDate ? endDate.toISOString().split('T')[0] : null;
                //const cp = await axios.post(`http://192.168.1.145:5000/getCapacidadTD`, {
                const cp = await axios.post(`http://10.0.0.19:5000/getCapacidadTD`, {
                    startDate: start,
                    endDate: end
                });
                console.log(cp.data)
                setData(cp.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };


        fetchData();
    }, [endDate, startDate]);

    const columns = useMemo(
        () => [
            {
                Header: 'Selección',
                accessor: 'seleccion',  // Cambia el accessor según el nombre de la propiedad en el JSON
            },
            {
                Header: 'Centro',
                accessor: 'centro',
            },
            {
                Header: 'Capacidad Teórica Diaria',
                accessor: 'capacidad_teorica_diaria',
            },
            {
                Header: 'Sección',
                accessor: 'seccion',
            },
            {
                Header: 'Carga Trabajo',
                accessor: 'carga_trabajo',
            },
            {
                Header: '% Carga Trabajo',
                accessor: 'porcentaje_carga_trabajo',
            },
            {
                Header: 'Días',
                accessor: 'dias',
            },
            {
                Header: 'Carga Total',
                accessor: 'carga_total',
            },
            {
                Header: 'Carga Días',
                accessor: 'carga_dias',
            },
            {
                Header: 'Carga Inmediata',
                accessor: 'carga_inmediata',
            },
            {
                Header: 'Carga Inmediata Días',
                accessor: 'carga_inmediata_dias',
            },
            {
                Header: 'Capacidad Adicional',
                accessor: 'capacidad_adicional',
            },
        ],
        []
    );

    const tableInstance = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Dashboard de Carga de Trabajo</h1>
            <motion.div
                className="overflow-x-auto bg-white shadow-md rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <table
                    {...getTableProps()}
                    className="min-w-full divide-y divide-gray-200"
                >
                    <thead className="bg-gray-50">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody
                        {...getTableBodyProps()}
                        className="bg-white divide-y divide-gray-200"
                    >
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                                    {row.cells.map(cell => (
                                        <td
                                            {...cell.getCellProps()}
                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
}

DashboardTable.propTypes = {
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date)
};