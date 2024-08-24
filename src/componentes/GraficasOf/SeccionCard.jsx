import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from 'chart.js/auto';

Chart.register(CategoryScale)

const SeccionCard = ({ seccion }) => {

    const { seleccion, centro, capacidad_teorica, seccion: descSeccion, carga_trabajo, porcentaje_carga_trabajo } = seccion;

    const pieData = {
        labels: ['Carga Trabajo', 'Capacidad Restante'],
        datasets: [
            {
                data: [porcentaje_carga_trabajo, 100 - porcentaje_carga_trabajo],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }
        ]
    };

    const barData = {
        labels: ['Capacidad Teórica', 'Carga Trabajo'],
        datasets: [
            {
                label: 'Horas',
                data: [capacidad_teorica, carga_trabajo],
                backgroundColor: ['#36A2EB', '#FF6384']
            }
        ]
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row w-full">
            {/* Primera Columna: Información textual */}
            <div className="flex-1 mb-4 md:mb-0">
                <h2 className="text-xl font-bold">{descSeccion}</h2>
                <p>Selección: {seleccion}</p>
                <p>Centro: {centro}</p>
                <p>Capacidad Teórica: {capacidad_teorica} horas</p>
                <p>Carga Trabajo: {carga_trabajo} horas</p>
                <p>% Carga Trabajo: {porcentaje_carga_trabajo}%</p>
            </div>

            {/* Segunda Columna: Gráfico de Pastel */}
            <div className="flex-1 flex justify-center items-center">
                <Pie data={pieData} width={0.1} height={0.1} options={{plugins:{legend:true}}}  />
            </div>

            {/* Tercera Columna: Gráfico de Barras */}
            <div className="flex-1">
                <Bar data={barData} width={0.1} height={0.1} />
            </div>
        </div>
    );
};

export default SeccionCard;
