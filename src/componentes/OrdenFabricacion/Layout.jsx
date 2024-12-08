import { Outlet } from 'react-router-dom';
import { Menu } from "../Menu/Menu";
import { MenuItems } from './menuItems';

export const LayoutOF = () => {
    return (
        <div className="flex h-full">
            <div className="w-1/6 h-3/4 p-4">
                <Menu items={MenuItems} classname={"font-roboto text-sm "} title={"Gestion Fábrica"} />
            </div>
            <div className="w-3/4 p-4">
                <Outlet />
            </div>
        </div>
    )
} 
