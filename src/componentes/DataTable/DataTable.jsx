import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';

const DataTable = ({ data }) => {
    const [hiddenColumns, setHiddenColumns] = useState([]);

    const isDate = (value) => {
        return !isNaN(Date.parse(value))
    }

    const columns = useMemo(
        () =>
            data[0].map((header, index) => {
                const isDatecolumn = data.slice(1).some(row => isDate(row[index]))
                return {
                    Header: header,
                    accessor: index.toString(),
                    Cell: ({ value }) => {
                        return value.toString();
                    },
                }
            }),
        [data]
    );

    const tableData = useMemo(
        () =>
            data.slice(1).map((row) =>
                row.reduce((acc, cell, index) => {
                    acc[index.toString()] = cell;
                    return acc;
                }, {})
            ),
        [data]
    );

    const tableInstance = useTable({
        columns,
        data: tableData,
        state: { hiddenColumns },
        onHiddenColumnsChange: setHiddenColumns,
    });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, allColumns } = tableInstance;

    // const handleColumnToggle = (columnId) => {
    //     setHiddenColumns((prev) =>
    //         prev.includes(columnId) ? prev.filter((col) => col !== columnId) : [...prev, columnId]
    //     );
    // };

    return (
        <div className="p-4">
            {/* <div className="mb-4">
                <p className="mb-2 text-sm font-medium text-gray-700">Ocultar/Mostrar Columnas</p>
                <div className="flex flex-wrap">
                    {allColumns.map((column) => (
                        <div key={column.id} className="mr-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    checked={!hiddenColumns.includes(column.id)}
                                    onChange={() => handleColumnToggle(column.id)}
                                    className="form-checkbox h-4 w-4 text-indigo-600"
                                />
                                <span className="ml-2 text-sm text-gray-700">{column.Header}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div> */}

            <table {...getTableProps()} className="min-w-full bg-white border border-gray-300">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="px-4 py-2 border-b border-gray-300 bg-gray-50 text-left font-medium text-gray-700"
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={row.id}>
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="px-4 py-2 border-b border-gray-300 text-xs text-gray-700"
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
