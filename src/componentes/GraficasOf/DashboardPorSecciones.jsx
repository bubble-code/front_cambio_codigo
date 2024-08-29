import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import SeccionCard from "./SeccionCard";
import Modal from "../Modal/Modal";

export default function DashboardPorSecciones({ startDate, endDate }) {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [ordenes, setOrdenes] = useState([]);
    const [selectedCentro, setSelectedCentro] = useState(null);

    useEffect(() => {
        // Llamada a tu API Flask para obtener los datos.
        const fetchData = async () => {
            try {
                const start = startDate ? startDate.toISOString().split('T')[0] : null;
                const end = endDate ? endDate.toISOString().split('T')[0] : null;
                //const response = await axios.post(`http://192.168.1.145:5000/getCapacidadTD`, {
                const response = await axios.post(`http://10.0.0.19:5000/getCapacidadTD`, {
                    startDate: start,
                    endDate: end
                });
                // const cp = await axios.get(`http://192.168.1.145:5000/getCapacidadTD`);
                console.log(response.data)
                // setData(cp.data);
                const sortedData = response.data.sort((a, b) => {
                    console.log(a)
                    console.log(b)
                    return Number(a.centro) - Number(b.centro)
                });
                setData(sortedData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [endDate, startDate]);

    const handleShowVerMas = async (centro) => {
        try {
            //const response = await axios.post(`http://192.168.1.145:5000/getOFFromCentro`, {
            const response = await axios.post(`http://10.0.0.19:5000/getOFFromCentro`, {
                centro: centro
            });
            setOrdenes(response.data);
            setSelectedCentro(centro);
            setShowModal(true);
        } catch (error) {
            console.error('Error fetching order details:', error);
        }
    };

    return (
        <div className="flex flex-wrap flex-col justify-start -mx-4">
            {data.map((seccion, index) => (
                <div key={index} className="px-4 mb-8 w-full">
                    <SeccionCard seccion={seccion} onVerMas={handleShowVerMas} />
                </div>
            ))}

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h2>Detalles de Órdenes - Centro {selectedCentro}</h2>
                    <ul>
                        {ordenes.map((orden, index) => (
                            <li key={index}>
                                <p><strong>Orden ID:</strong> {orden.NOrden}</p>
                                <p><strong>Artículo:</strong> {orden.IDArticulo}</p>
                                {/* Agrega más detalles relevantes aquí */}
                            </li>
                        ))}
                    </ul>
                </Modal>
            )}
        </div>
    )
}

DashboardPorSecciones.propTypes = {
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date)
};