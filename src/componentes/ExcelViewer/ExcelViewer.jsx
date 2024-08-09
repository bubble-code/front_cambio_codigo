import React, { useState } from 'react';
import ExcelImporter from '../ExcelImport/ExcelImporter';
import DataTable from '../DataTable/DataTable';

const ExcelViewer = () => {
    const [excelData, setExcelData] = useState([]);

    const handleFileLoaded = (data) => {
        setExcelData(data);
    };

    return (
        <div className="container mx-auto p-4">
            <ExcelImporter onFileLoaded={handleFileLoaded} />
            {excelData.length > 0 && <DataTable data={excelData} />}
        </div>
    );
};

export default ExcelViewer;
