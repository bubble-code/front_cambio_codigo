import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(CategoryScale, ChartDataLabels)

const SeccionCard = ({ seccion, onVerMas }) => {

    const { seleccion, centro, capacidad_teorica_diaria, seccion: descSeccion, carga_trabajo, porcentaje_carga_trabajo, cant_trabajo } = seccion;

    const cargaTrabajoRedondeada = Number(carga_trabajo).toFixed(2);
    const porcentajeCargaTrabajoRedondeado = Number(porcentaje_carga_trabajo).toFixed(2);
    const capacidadTeoricaRedondeada = Number(capacidad_teorica_diaria).toFixed(2);

    const pieData = {
        labels: ['Carga Trabajo', 'Capacidad Restante'],
        datasets: [
            {
                data: [porcentajeCargaTrabajoRedondeado, 100 - porcentajeCargaTrabajoRedondeado],
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
                data: [capacidad_teorica_diaria, cargaTrabajoRedondeada],
                backgroundColor: ['#36A2EB', '#FF6384']
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            datalabels: {
                display: true,
                color: 'black',
                formatter: (value, context) => {
                    return value + '%';
                    // return context.chart.data.labels[context.dataIndex] + ': ' + value + '%';
                }
            }
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row w-full">
            {/* Primera Columna: Información textual */}
            <div className="flex-1 mb-4 md:mb-0">
                <h2 className="text-xl font-bold">{descSeccion}</h2>
                {/* <p>Selección: {seleccion}</p> */}
                <p>Centro: {centro}</p>
                <p>Capacidad Teórica: {capacidad_teorica_diaria} horas</p>
                <p>Carga Trabajo: {cargaTrabajoRedondeada} horas</p>
                <p>% Carga Trabajo: {porcentajeCargaTrabajoRedondeado}%</p>
                <p>Cantidad Trabajo: {cant_trabajo} <span className='ml-2'><button onClick={() => onVerMas(centro)} className="px-4 py-2 bg-blue-100 text-blue-950 rounded hover:bg-blue-300">
                    Ver mas
                </button></span></p>
            </div>

            {/* Segunda Columna: Gráfico de Pastel */}
            <div className="flex-1 flex justify-center items-center " style={{ width: '200px', height: '200px' }}>
                <Pie data={pieData} options={options} />
            </div>

            {/* Tercera Columna: Gráfico de Barras */}
            <div className="flex-1 flex justify-center items-center" style={{ width: '200px', height: '200px' }}>
                <Bar data={barData} options={options} />
            </div>
        </div>
    );
};

export default SeccionCard;
