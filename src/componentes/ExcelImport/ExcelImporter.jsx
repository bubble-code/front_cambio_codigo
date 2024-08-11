import { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelImporter = ({ onFileLoaded }) => {
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    // const [progress, setProgress] = useState(0);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setFileName(file.name);
        setLoading(true);
        const reader = new FileReader();
        // Monitorear el progreso de la lectura del archivo
        // reader.onprogress = (e) => {
        //     if (e.lengthComputable) {
        //         const percentLoaded = Math.round((e.loaded / e.total) * 100);
        //         setProgress(percentLoaded);
        //     }
        // };
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            onFileLoaded(jsonData);
            setLoading(false);
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div className="p-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Importar Archivo Excel</label>
            <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
            {fileName && <p className="mt-2 text-sm text-gray-500">Archivo seleccionado: {fileName}</p>}
            {loading && (
                <div className="mt-4 flex items-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mr-2"></div>
                    <p className="text-sm text-gray-600">Cargando... </p>  
                    {/* {progress}% */}
                </div>
            )}
        </div>
    );
};

export default ExcelImporter;
