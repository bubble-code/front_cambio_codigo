import { useState, useEffect } from "react";
import axios from "axios";
import SeccionCard from "./SeccionCard";

export default function DashboardPorSecciones() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Llamada a tu API Flask para obtener los datos.
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://192.168.1.145:5000/getOrdenes`);
                const cp = await axios.get(`http://192.168.1.145:5000/getCapacidadTD`);
                console.log(cp.data)
                setData(cp.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="flex flex-wrap flex-col justify-start -mx-4">
            {data.map((seccion, index) => (
                <div key={index} className="px-4 mb-8 w-full">
                    <SeccionCard seccion={seccion} />
                </div>
            ))}
        </div>
    )
}
