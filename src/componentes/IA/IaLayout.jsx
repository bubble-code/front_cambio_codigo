import { Outlet } from "react-router-dom";
import { Menu, PalantirLogo } from "../Menu/Menu";
import { Classes, Icon } from '@blueprintjs/core';


const IaLayout = () => {

    const menuItems = [
        { icon: <PalantirLogo />, text: "Custom SVG icon" },
        { type: 'divider' },
        { icon: 'new-text-box', text: 'Artículos' },
        { icon: 'new-object', text: 'Almacen' },
        { icon: 'new-link', text: 'Ofertas' },
        { type: 'divider' },
        { icon: 'new-text-box', text: 'Pedidos de Compra' },
        { icon: 'new-object', text: 'Pedidos de Venta' },
        { icon: 'new-link', text: 'Ofertas' },
        { type: 'divider' },
        {
            icon: 'calculator',
            text: 'Increment',
            onClick: () => { },
            labelElement: '',
        },
        {
            icon: 'cog',
            text: 'Settings...',
            intent: 'primary',
            labelElement: <Icon icon="share" />,
        },
    ]

    return (
        <div className="flex h-full">
            <div className="w-1/6 h-3/4 p-4 bg-gray-100">
                <Menu className={Classes.ELEVATION_1} items={menuItems} />
            </div>
            <div className="w-3/4 p-4">
                <Outlet />
            </div>
        </div>
    );
}


export default IaLayout;