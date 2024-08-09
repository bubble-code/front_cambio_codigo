import { Outlet } from 'react-router-dom';
import { Classes, Icon } from '@blueprintjs/core';
import { Menu } from "../Menu/Menu";
import { useMenuItems } from './menuItems';

export const LayoutOF = () => {
    const menuItems = useMenuItems()
    return (
        <div className="flex h-full">
            <div className="w-1/6 h-3/4 p-4">
                <Menu items={menuItems} classname={"font-roboto text-sm "} title={"Ordenes de Fabricacion"} />
            </div>
            <div className="w-3/4 p-4">
                <Outlet />
            </div>
        </div>
    )
}
