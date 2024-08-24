import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';

const DataTable = ({ data, matchingItems }) => {
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
            <table {...getTableProps()} className="min-w-full bg-white border border-gray-300">
                <thead>
                    {headerGroups.map((headerGroup) => {
                        return (
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
                        )
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        // console.log(row.cells)
                        // className={matchingItems.map(x=>x.IDArticulo).includes(row.cells[1].value) ? "bg-green-100" : ""}
                        return (
                            <tr {...row.getRowProps()} key={row.id} className={row.cells[10].value.includes('OF')?"bg-green-200" :row.cells[10].value.includes('S/F') || row.cells[10].value.includes('S/A') ? "bg-red-200" : ""}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} className="px-4 py-2 border-b border-gray-300 text-xs text-gray-700" >
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
