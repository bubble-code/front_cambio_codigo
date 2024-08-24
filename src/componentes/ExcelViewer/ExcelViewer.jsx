import { useState } from 'react';
import ExcelImporter from '../ExcelImport/ExcelImporter';
import DataTable from '../DataTable/DataTable';
import axios from 'axios';

const ExcelViewer = () => {
    const [excelData, setExcelData] = useState([]);
    const [matchingItems, setMatchingItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFileLoaded = (data) => {
        setExcelData(data);
    };
    const checkItemsInDatabase = async () => {
        setLoading(true);
        try {
            const listaID = excelData.slice(1).reduce((acc, cur) => {
                acc[cur[1]] = true
                return acc
            }, {});

            const response = await axios.get(`http://192.168.1.145:5000/articulos?listaID=${Object.keys(listaID)}`);
            const existingItems = response.data
            setMatchingItems(existingItems);
        } catch (error) {
            console.error("Error checking items in database: ", error);
        } finally {
            setLoading(false);
        }
    };

    const generarOrdenes = async () => {
        setLoading(true);
        const listaID = excelData.slice(1).reduce((acc, cur) => {
            if (acc[cur[0]]) {
                acc[cur[0]].push(cur);
            } else {
                acc[cur[0]] = [cur];
            }
            return acc;
        }, {});
    
        let updatedExcelData = [...excelData];  // Copia de los datos originales para actualizarlos
    
        try {
            for (let articuloID in listaID) {
                const registros = listaID[articuloID];  // Agrupación de registros por `articuloID`
    
                const response = await fetch('http://192.168.1.145:5000/generarOF', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        listaID: { [articuloID]: registros }  // Enviar la agrupación específica
                    }),
                });
    
                const data = await response.json();
                console.log("data:",data.message)
                const mensaje = data.message || "Error al generar la Orden";
                if (data.status === "success") {
                    console.log(`Orden para el artículo ${articuloID} generada con éxito`);
                    // Marcar los registros como exitosos en `updatedExcelData`
                    const newExcelData = updatedExcelData.map((row) => {
                        if (row[0] == articuloID) {
                            // Si la fila ya tiene una columna de resultado, actualízala
                            if (row.length > 9) {
                                row[10] = mensaje;  // Suponiendo que la última columna es la 12va (índice 11)
                            } else {
                                // Si no, añade la columna del resultado
                                row.push(mensaje);
                            }
                        }
                        return row;
                    });
                    setExcelData(newExcelData);
                } else {
                    console.error(`Error en la generación de la orden para el artículo ${articuloID}`, data);
                    // Marcar los registros como fallidos
                    registros.forEach((registro) => {
                        const index = updatedExcelData.findIndex(row => row[0] === articuloID);
                        if (index !== -1) {
                            updatedExcelData[index] = [...updatedExcelData[index], "Error al generar la Orden"];
                        }
                    });
                }
            }
        } catch (error) {
            console.error("Error al procesar las órdenes: ", error);
            // En caso de error en la solicitud, marcar todos los registros con un fallo general
            for (let articuloID in listaID) {
                const registros = listaID[articuloID];
                registros.forEach((registro) => {
                    const index = updatedExcelData.findIndex(row => row[0] === articuloID);
                    if (index !== -1) {
                        updatedExcelData[index] = [...updatedExcelData[index], "Error al generar la Orden"];
                    }
                });
            }
        } finally {
            // Aquí puedes actualizar la tabla o interfaz de usuario con `updatedExcelData`
            // Dependiendo de cómo se gestiona el estado de la tabla, esto puede variar
            setLoading(false);
        }
    }
    

    const resetTable = () => {
        // Funcionalidad para reiniciar la tabla
        setExcelData([]);
        setMatchingItems([]);
    };

    return (
        <div className="container mx-auto p-4">
            <ExcelImporter onFileLoaded={handleFileLoaded} />
            {loading && (
                <div className="mt-4 flex items-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mr-2"></div>
                    <p className="text-sm text-gray-600">Cargando... </p>
                    {/* {progress}% */}
                </div>
            )}
            {excelData.length > 0 && <div className="flex space-x-4 my-4">
                <button
                    onClick={checkItemsInDatabase}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Verificar Artículos
                </button>
                <button
                    onClick={generarOrdenes}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                    Generar ordenes
                </button>
                <button
                    onClick={resetTable}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                    Reiniciar Tabla
                </button>
            </div>}
            {excelData.length > 0 && <DataTable data={excelData} matchingItems={matchingItems} />}
        </div>
    );
};

export default ExcelViewer;
