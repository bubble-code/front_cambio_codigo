import { useState } from 'react';
import {InteractivePoint} from '../InteractivePoint/InteractivePoint'
import {Tooltip} from '../Tooltip/Tooltip';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HelpCarousel = () => {
    const [hoveredStep, setHoveredStep] = useState(null);
    const steps = [
        {
            title: "Paso 1: Abrir SOLMICRO en Tipo de Artículo",
            description: "Se abre SOLMICRO en TIPO DE ARTICULO."
        },
        {
            title: "Paso 2: Introducir 01 en la lupa",
            description: "En la lupa introducir 01: Producto Acabado."
        },
        {
            title: "Paso 3: Buscar VENTACLIEN",
            description: "En el listado buscar VENTACLIEN."
        },
        {
            title: "Paso 4: Añadir nueva familia",
            description: "Se abre el icono de compartir y en el desplegable que sale ya se puede añadir una familia nueva."
        },
        {
            title: "Paso 5: Ventana de nueva familia",
            description: "Pinchando aquí se abre la ventana donde se puede incluir la nueva familia."
        }
    ];

    return (
        <div>
            <h2>Ayuda para Crear Familias en SOLMICRO</h2>
            <Carousel showThumbs={false}>
                {steps.map((step, index) => (
                    <div key={index}>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );

    // const steps = [
    //     { id: 1, text: "Abrir SOLMICRO en Tipo de Artículo", top: '20%', left: '30%' },
    //     { id: 2, text: "Introducir '01' en la lupa", top: '40%', left: '50%' },
    //     { id: 3, text: "Buscar 'VENTACLIEN' en el listado", top: '60%', left: '40%' },
    //     { id: 4, text: "Añadir nueva familia desde el icono de compartir", top: '80%', left: '30%' },
    //     { id: 5, text: "Incluir la nueva familia en la ventana emergente", top: '90%', left: '50%' }
    // ];

    // return (
    //     <div className="text-center">
    //         <h2 className="text-2xl mb-4">Ayuda para Crear Familias en SOLMICRO</h2>
    //         <div className="relative inline-block">
    //             <img src="/src/assets/extracted_image.jpg" alt="Ayuda Interactiva" className="w-full h-auto" />
    //             {steps.map(step => (
    //                 <div key={step.id} className="relative">
    //                     <InteractivePoint
    //                         id={step.id}
    //                         text={step.text}
    //                         top={step.top}
    //                         left={step.left}
    //                         onHover={setHoveredStep}
    //                     />
    //                     {hoveredStep === step.id && <Tooltip text={step.text} />}
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );
};

export default HelpCarousel;
